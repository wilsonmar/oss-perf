// aws-k6-ramp.js from https://github.com/wilsonmar/oss-perf/blob/master/k6/aws-k6-ramp.js
// Copied from https://test.k6.io/
// Described at https://wilsonmar.github.io/k6

import http from "k6/http";
import { check, group, sleep } from "k6";
import { Counter, Rate, Trend } from "k6/metrics";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";

const loginData = JSON.parse(open("./users.json"));  
// download the data file here: https://test.k6.io/static/examples/users.json

/* Options
Global options for your script
stages - Ramping pattern
thresholds - pass/fail criteria for the test
ext - Options used by Load Impact cloud service test name and distribution
*/
export let options = {
    stages: [
        { target: 200, duration: "1m" },
        { target: 200, duration: "3m" },
        { target: 0, duration: "1m" }
    ],
    thresholds: {
        "http_req_duration": ["p(95)<500"],
        "http_req_duration{staticAsset:yes}": ["p(95)<100"],
        "check_failure_rate": ["rate<0.3"]
    },
    ext: {
        loadimpact: {
          // projectID: 3113635,
            name: "Insights Demo with Cloud Execution",
            distribution: {
                scenarioLabel1: { loadZone: "amazon:us:ashburn", percent: 50 },
                scenarioLabel2: { loadZone: "amazon:ie:dublin", percent: 50 }
            }
        }
    }
};

// Custom metrics
// We instantiate them before our main function
let successfulLogins = new Counter("successful_logins");
let checkFailureRate = new Rate("check_failure_rate");
let timeToFirstByte = new Trend("time_to_first_byte", true);


/* Main function
The main function is what the virtual users will loop over during test execution.
*/
export default function() {
    // We define our first group. Pages naturally fit a concept of a group
    // You may have other similar actions you wish to "group" together
    group("Front page", function() {
        let res = null;
        // As mentioned above, this logic just forces the performance alert for too many urls, use env URL_ALERT to force it
        // It also highlights the ability to programmatically do things right in your script
        if (__ENV.URL_ALERT) {
            res = http.get("http://test.k6.io/?ts=" + Math.round(randomIntBetween(1,2000)));
        } else {
            res = http.get("http://test.k6.io/?ts=" + Math.round(randomIntBetween(1,2000)), { tags: { name: "http://test.k6.io/ Aggregated"}});
        }
        let checkRes = check(res, {
            "Homepage body size is 11026 bytes": (r) => r.body.length === 11026,
            "Homepage welcome header present": (r) => r.body.indexOf("Welcome to the k6.io demo site!") !== -1
        });

        // Record check failures
        checkFailureRate.add(!checkRes);

        // Record time to first byte and tag it with the URL to be able to filter the results in Insights
        timeToFirstByte.add(res.timings.waiting, { ttfbURL: res.url });

        // Load static assets
        group("Static assets", function() {
            let res = http.batch([
                ["GET", "http://test.k6.io/static/css/site.css", {}, { tags: { staticAsset: "yes" } }],
                ["GET", "http://test.k6.io/static/js/prisms.js", {}, { tags: { staticAsset: "yes" } }]
            ]);
            checkRes = check(res[0], {
                "Is stylesheet 4859 bytes?": (r) => r.body.length === 4859,
            });

            // Record check failures
            checkFailureRate.add(!checkRes);

            // Record time to first byte and tag it with the URL to be able to filter the results in Insights
            timeToFirstByte.add(res[0].timings.waiting, { ttfbURL: res[0].url, staticAsset: "yes" });
            timeToFirstByte.add(res[1].timings.waiting, { ttfbURL: res[1].url, staticAsset: "yes" });
        });

    });

    sleep(10);

    group("Login", function() {
        let res = http.get("http://test.k6.io/my_messages.php");
        let checkRes = check(res, {
            "Users should not be auth'd. Is unauthorized header present?": (r) => r.body.indexOf("Unauthorized") !== -1
        });
            
        //extracting the CSRF token from the response

        const vars = {};

        vars["csrftoken"] = res
            .html()
            .find("input[name=csrftoken]")
            .first()
            .attr("value");    

        // Record check failures
        checkFailureRate.add(!checkRes);

        let position = Math.floor(Math.random()*loginData.users.length);
        let credentials = loginData.users[position];

        res = http.post("http://test.k6.io/login.php", { login: credentials.username, password: credentials.password, redir: '1', csrftoken: `${vars["csrftoken"]}` });
        checkRes = check(res, {
            "is logged in welcome header present": (r) => r.body.indexOf("Welcome, admin!") !== -1
        });

        // Record successful logins
        if (checkRes) {
            successfulLogins.add(1);
        }

        // Record check failures
        checkFailureRate.add(!checkRes, { page: "login" });

        // Record time to first byte and tag it with the URL to be able to filter the results in Insights
        timeToFirstByte.add(res.timings.waiting, { ttfbURL: res.url });

        sleep(10);
    });
}
