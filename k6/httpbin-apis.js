// httpbin-apis.js from https://github.com/wilsonmar/oss-perf/blob/master/k6/httpbin-apis.js
// Copied from https://medium.com/swlh/beginners-guide-to-load-testing-with-k6-ff155885b6db
// Described at https://wilsonmar.github.io/k6

import { check, group, sleep } from 'k6';
import http from 'k6/http';

export let options = {
  max_vus: 100,
  vus: 100,
  stages: [
    { duration: "30s", target: 10 },
    { duration: "4m", target: 100 },
    { duration: "30s", target: 0 }
  ],
  thresholds: {
    "RTT": ["avg<500"]
  }
}

export default function() {
  group('v1 API testing', function() {
    group('heart-beat', function() {
      let res = http.get("https://httpbin.org/get");
      check(res, { "status is 200": (r) => r.status === 200 });
    });

    group('login', function() {
      let res = http.get("https://httpbin.org/bearer", {
        headers: { "Authorization": "Bearer da39a3ee5e6b4b0d3255bfef95601890afd80709" }
      });
      check(res, {
        "status is 200": (r) => r.status === 200,
        "is authenticated": (r) => r.json()["authenticated"] === true
      });
    });

    group('access an endpoint', function() {
      let res = http.get("https://httpbin.org/base64/azYgaXMgYXdlc29tZSE=");
      check(res, {
        "status is 200": (r) => r.status === 200,
        "k6 is awesome!": (r) => r.body === "k6 is awesome!"
      });
    });
  });
  sleep(1);
}
