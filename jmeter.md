To load JMeter output into Logstash and aggregated in Elasticsearch so that Kibana can display analytics graphs:

0. <a href="#KibanaGraphsJMeter"> Kibana Graphs</a> - the objective of prepatory steps below:
0. <a href="#AUTSetup"> Application Under Test Setup</a>
0. <a href="#Resources"> Resources</a>

<hr />

<a id="Installation">
## Installation</a>
On a Mac, use Homebrew:
   
   ```
   brew install jmeter
   ```

On Windows, use Chocolatey:
   
   ```
   cinst jmeter
   ```

To operate on a server, the easiest way is to run JMeter within Docker using
https://hub.docker.com/r/cirit/jmeter/
based on 
https://github.com/cagdascirit/docker-jmeter

<a target="_blank" href="https://plus.google.com/114432111742231285408/posts">
kowalcjZero</a> created a 
<a target="_blank" href="https://www.youtube.com/watch?v=RWkJl4OXTJI&list=PLAUamg5VPF5HAxDQlDVItNLfTBNzhpnW4">
series of videos</a> on JMeter in AWS EC2 and Vagrant box.

<a id="TestFolder">
** Test Folder Setup</a>
0. If you don't already have one, create a workspace folder and under that, a folder to hold jmeter tests:

   ```
   cd ~/
   pwd
   mkdir ws
   cd ws
   mkdir jmeter
   cd jmeter
   ```

<a id="ManualRun">
** Manual Run steps</a>
To run JMeter on its own, the steps are:

0. Install jmeter
1. Install add-ons
0. Login to the machine containing JMeter
0. Ensure enough disk space is available, and clean-up if necessary.
1. Gather data to be consumed during the run (userids, passwords, requests, etc.)

0. Invoke JMeter
0. Create script Test Plan
0. Obtain initial response HTML for Pattern to test.
0. Add Response Assertions
1. Proving runs
0. setup parameters

0. setup monitoring
0. Load performance tests
0. run tests
0. watch run
0. analyze results
1. Archive files and clean-up test rig.

<hr />
<a id="Addons">
## Add-ons</a>
For easier invocation, the
<a target="_blank" href="https://wiki.jenkins-ci.org/display/JENKINS/Performance+Plugin">
Performance Plugin</a> from https://github.com/jenkinsci/performance-plugin.

For managed devops:
https://xebialabs.com/community/webinars/dzone-presents-seamless,-scalable-test-management-using-jenkins-and-xebialabs-software/

   * Xebialabx.com
   * https://www.youtube.com/channel/UC3XtKwSYyeQfGirLL_IW_Qw


<a id="JMeterUIRecording">
## JMeter UI Recording</a>
0. Invoke JMeter in UI mode.

   ```
   jmeter
   ```

   NOTE: JMeter runs from the terminal window. Destroy the terminal window and JMeter GUI will go away too.

   A recording of the UI can be made going through the proxy built into browsers' system preferences.
   In Chrome, select 'Under the Hood'.
   ⌘+. In 'Advanced', go to Connection settings and set up your localhost as a proxy server. 
   Assign different ports to different protocols. 
   Press Start at the bottom of the page to begin recording.

0. Save script as /HelloX.jmx to the ~/ws/jmeter folder created in the previous step.
0. Run
1. Notice that since Protocol: `https` was not specified, two requests were done. One for http and one for https.
2. To avoid the repeat, specify Protocol `https`.

<a id="JMeterAPIscripts">
## JMeter API scripts</a>
Directories of web services:

   * http://webservicex.net/New/Home/Directory

Sample REST API services used for testing:

   * validate.jsontest.com which Blazemeter uses in its <a target="_blank"      href="https://blazemeter.com/blog/testing-soaprest-web-services-using-jmeter">documentation</a>


0. In JMeter, create a Test Plan add a Test Group. Add to that group a Listener for HTTP.
For server name use a dev test site:

   ```
   jsonplaceholder.typicode.com
   ```

0. In Path, enter `posts`.
0. For Implementation, select HTTPClient4. 
1. For Protocol, type `http`.
2. For Method, type `POST`.
3. Click the **Body Data** tab.
0. Paste this sample JSON request text:
   
   ```
   { title: 'foo', body: 'bar', userId: 1 }
   ```

0. Right-click on the HTTP Request to add Config Element - HTTP Header Manager.
1. Click the Add button at the bottom of the screen.
2. Click on the blue line under Name to add `Content-type`.
3. Press tab key to enter `application/json`. (Another is "application/x-www-form-urlencoded").
4. Click Save.

<a id="ResponseAssertion">
### Response Assertion</a>
0. Click **Text Response**.
0. Click **Contains**.
1. Type in `<title>`. This is in all HTML responses (including error pages).

<a id="Runs">
### Runs</a>
0. Press Ctrl+R to run the script.
0. Click on a response listener such as View Results Tree.

0. Press Ctrl+E to erase all results.

<a id="HeadlessRuns">
### Headless API Jmeter runs</a>
0. For a list of parameters JMeter recognizes:

   ```
   jmeter -?
   ```

   Notice parameters are **case sensitive**.

0. <a target="_blank" href="http://jmeter.apache.org/usermanual/get-started.html#non_gui">
This page lists the parameters</a> for JMeter to kick it off in non-UI (headless mode) using a command such as:

   ```
   jmeter -n -t testplan1.jmx -l log.jtl -H my.proxy.server -P 8000
   ```

   **-n** specifies no UI.

   **-t** prefixes test plan jmx files.
   
<a id="ResponseAssertion">
## Response Assertion</a>
0. Right-click on the HTTP request and select Add, Assertion, Response Assertion.
1. In the Pattern to Test section, add the pattern "title: 'foo'" coming back from a call to jsonplaceholder.

<hr />
## <a name="Resources"> Resources specifically about viewing JMeter using the ELK stack</a>
http://theworkaholic.blogspot.in/2015/05/graphs-for-jmeter-using-elasticsearch.html

http://blog.sematext.com/2015/06/23/replaying-elasticsearch-slowlogs-logstash-jmeter/

http://ecmarchitect.com/archives/2014/09/09/3932


<hr />
## <a name="Resources"> 
## Official resources about JMeter </a>
http://jmeter.apache.org/

http://jmeter.apache.org/usermanual/index.html

http://jmeter.apache.org/usermanual/jmeter_proxy_step_by_step.pdf

https://jmeter.apache.org/usermanual/jmeter_distributed_testing_step_by_step.pdf

http://jmeter.apache.org/usermanual/functions.html

http://jmeter.apache.org/usermanual/best-practices.html

http://jmeter.apache.org/usermanual/remote-test.html

http://wiki.apache.org/jmeter/

<a name="OtherResources"> 
## Other resources for JMeter </a>

http://ibalosh.tumblr.com/post/35475979058/running-jmeter-tests-with-jenkins

http://www.softwaretestingclass.com/learn-jmeter-performance-testing-jmeter-tutorial-series/

http://wiki.apache.org/jmeter/JMeterFAQ#How_to_do_remote_testing_the_.27proper_way.27.3F

https://blazemeter.com/blog

http://www.gallop.net/blog/an-amazing-open-source-performance-testing-tool-jmeter/

http://theworkaholic.blogspot.com/search/label/JMeter

https://performanceengg.wordpress.com//?s=jmeter&search=Go

http://jmeterworld.wordpress.com/

http://jmeter-expert.blogspot.com/

http://www.javapassion.com/handsonlabs/javatestjmeter/index.html

http://jmeter-tips.blogspot.com/

http://www.devx.com/webdev/Article/17950/

http://rubenlaguna.com/wp/enhanced-jdbc-sampler-for-apache-jmeter-22/

http://www.testingminded.com/search/label/JMeter

https://www.linkedin.com/grp/home?gid=2017104&trk=my_groups-tile-flipgrp

https://www.linkedin.com/grp/home?gid=4042150

https://www.linkedin.com/topic/jmeter

https://groups.google.com/forum/#!topic/oauth/VZaO3f-NFN0

https://www.youtube.com/watch?v=cv7KqxaLZd8

https://www.youtube.com/watch?v=rAEl0g8rpUM

https://www.youtube.com/watch?v=T3Ysb9O3EWI

https://www.youtube.com/watch?v=4mfFSrxpl0Y&index=4&list=PLc3SzDYhhiGXVcy8EcrTSfwsC-v8EUZvg

https://www.youtube.com/watch?v=7rO6TtO-QrI&list=PLByAM0wHjwJnQB2wNXzMh9qsVZoER2cxi

https://www.youtube.com/watch?v=aEJNc3TW-g8&list=TLi34_ofwXL78wNTEwMjAxNQ

TestNgx
https://hub.docker.com/search/?q=testngx
