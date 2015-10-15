This github public repo summarizes the technical approach to **combine** several <a href="#NewComponents">new</a>
and existing "totally free" **open-source software** 
repos to measure the speed and load capacity risks of high-traffic web and native mobile apps.

   "Totally free" is in quotes because the spirit of free software is that the community which uses them contributes back.
So if you see a typo that needs fixing or an idea that should be considered, please fork this repo,
edit the file, and send us a pull request. Better yet, 
<a href="#NewComponents">join us</a> to revolutionalize the industry.

   The information below is on a public github page rather than a propriatary internal wiki because
   we want to share both the development cost and benefit of the **next generation platform**.
   

<a name="Background">
## Background Why</a>
The approach described here was created in response to the need for a faster, more flexble, and lower cost way to achieve 
<a href="#PerfTesting">"performance testing"</a> (which even commercial vendors have not been able to deliver):

A. **Testing earlier** in the dev. lifecycle through more automatic **generation** of test automation scripts.

   Although various attempts at generating UI code have not taken hold due to complexity,
   generation of APIs is less complex of an undertaking.

B. **Automatic alerts** of slow execution speeds during automated functional testing.

C. **Automatically cycle though variations** of <a href="#configs">
   several configurations</a> during a single manual run initiation.
   More important than hands-free,
   this enables performance analysis to go beyond merely testing to engineering.

The objective here is to **reduce the amount of manual effort** (and human errors) to conducting tests
through automation.

D. **Centralizing data** from various views of system behavior under stress (or not) 
   can be analyzed together will provide the basis for identifying trends and other insights
   using both manual and **"machine learning"** techniques.
   Machine learning would identify more minute issues more comprehensively.

E. Measure how much time it takes to execute various aspects of JavaScript and other work within various browsers.
   This bar chart shows the difference in response time on different browsers (Chrome vs. Firefox) vs. JMeter.
   
<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/9830052/ed39d31e-58d4-11e5-8ba3-92a536fb1e48.png">
<img src="https://cloud.githubusercontent.com/assets/300046/9830052/ed39d31e-58d4-11e5-8ba3-92a536fb1e48.png"></a>

   TODO: Add Microsoft IE and Edge.

JMeter under-reports the total response times experienced by real users because it focuses on the 
**transfer of files** between client and server.


<a name="TypesOfTest">
### Create scripts to impose load using network emulation vs. UI control</a>
There are several ways automation scripts can pretend to be internet browsers and mobile devices:

<a name="FuncTestScript"></a>
  a). By **controlling the UI** of browsers and native apps,
     pretending to be someone typing and moving the mouse around the screen
    (Selenium, Appium, QTP/UFT, TruClient, are in this category).
    
    These make use of passwords unique to each user
    or two-factor authentication (2FA) tokens which users type into UI dialogs.

<a name="NetworkEmulationTestScript"></a>
  b). By **emulating the network traffic** between client and server
    (BadBoy to capture traffic, JMeter, LoadRunner C-scripts, etc. are in this category).
    
      Such interfaces authenticate using OAuth2 hand-shaking which involves one-way signing or
      OAuth1 which involves mutual exchange of public keys.

These two different types of scripting efforts may
use different programming languages and different tools,
and thus by different people in different groups that don't necessarily talk with each other.

   Network traffic emulation scripts can call **API (Application Programming Interfaces)**
   which "headless" programs communicate with each other (with no UI for human users).

It can be time-consuming to create traffic emulation scripts due to the need to "sniff" traffic
in order to convert observed patterns to script code.

Traffic emulation scripts focus on **file transfer time**,
and cannot report time for JavaScript client-rendering,
which grows more over time as more work is being done client-side.

Codification of API calls into standard patterns makes it now possible to 
**generate test script code**.


<a id="TheVision"></a>
<a name="Diagram"> 
## Interactions among components</a>
The flow of data and control among the various components is illustred by this diagram and underlying video.
**Click on the diagram to <a target="_blank" href="http://www.youtube.com/watch?v=GSSBg7VefqY">
view the draft-status video</a>.**
<img id="Image-Maps-Com-image-maps-2015-10-14-203758" src="https://cloud.githubusercontent.com/assets/300046/10486097/3b31fd4a-7242-11e5-9fe7-626b4a1a937c.png" border="0" width="1516" height="746" orgWidth="1516" orgHeight="746" usemap="#image-maps-2015-10-14-203758" alt="" />
<map name="image-maps-2015-10-14-203758" id="ImageMapsCom-image-maps-2015-10-14-203758">
<area id="dev-toolchain" alt="dev-toolchain" title="dev-toolchain" href="http://www.image-maps.com/" shape="rect" coords="693,28,879,125" style="outline:none;" target="_self"     />
<area id="configs" alt="configs" title="configs" href="http://www.image-maps.com/" shape="rect" coords="821,141,1007,223" style="outline:none;" target="_self"     />
<area shape="rect" coords="1514,744,1516,746" alt="Image Map" style="outline:none;" title="Image Map" href="http://www.image-maps.com/index.php?aff=mapped_users_0" />
</map>

Narrative text to this diagram and video is below.

<a name="Narrative"> 
## Capabilities and Components </a>

| Capabilities | Components |
| ----------- | ---------- |
| On a sample web server app with multiple interfaces | <a href="#app-server">app server</a> |
| and instantiated with a specific variation of experimental tuning configurations, | <a href="#configs">configs</a> |
| artificial loads are imposed by running | <a href="#JMeter-servers">JMeter Controllers</a> |
| virtual user scripts taking the place of humans on real browsers and mobile devices. |<a href="#JMeter-servers"> JMeter code</a> |
| Specific scenarios of different parameter values |<a href="# run variations (Taurus)</a> |
| are invoked on a scheduled basis or dynamically | <a href="#Jenkins/CI">Jenkins CI</a> |
| when the dev. toolchain is invoked after |<a href="# dev. toolchain">dev. toolchain </a> |
| a commit occurs to a specific branch in a git repo. | github |
| During runs: |  |
| metrics collected and normalized include |<a href="#Logstash"> Logstash</a> |
| logs of load levels imposed, | run logs |
| log entries issued from within app code and the OS | server Logs |
| plus measurements such as garbage collection | monitor stream |
| obtained by monitoring agents. | agents |
| As for analysis: |  |
| The central repository is indexed into various dimensions | <a href="#ElastiSearch">ElastiSearch</a> |
| for visualizations over time and "sliced and diced" for insight. | <a href="#Kibana">Kibana</a> |
| The visualizations include static objectives and targets to compare against live data. | ref. data |
| To measure time taken by browsers to execute client application JavaScript: |  |
| browser instances are controlled by | Selenium Web Driver |
| code that manipulate the browser UI like real people do, | Selenium code |
| just as native mobile app test automation code | Appium code |
| are controlled | Appium Driver |
| so that timings are captured | <a href="#BrowserMob">BrowserMob Proxy</a> |
| into files included in analysis. | <a href="#HAR-Files">HAR files</a> |
| All this enables anomalies over performance thresholds to be instantly detected during testing, | levels |
| so that they can be addressed quickly. | alerts |
|  |  |
| To reduce the time traditionally needed to edit and verify | editor |
| we **generate JMeter code**  | j-gen |
| and variations in use of test data to repeatedly call APIs based on what is in | run variations |
| the repository of API specifications | Swagger |
| similar to how app code to call APIs are generated | codegen |
| into source code repositories. | git repo. |
|  |  |
| Generated test code is validated by static source code scanners. | SonarQube |
| in the same or spearate runs than what app source code go through. | dev. toolchain |
| Functional test automation code are generated in a similar way | func. test gen. |


<a name="OtherIssues">
### Other issues</a>
The description above does not address several aspects:

   * Development tools (Eclipse, etc.) to develop sample apps.
   * Profiling of code (Visual reading JMX, etc.)

   * Public sample custom configurations.
   * Custom configuration storage separate from public repos.
   * Tutorials explaining how to do all of this.

   * Recruitment of others to contribute to this approach
   * Making the economic case

   * Use of clouds (such as AWS EC2, Blazemeter, SauceLabs, Flood.io, etc.).
   * Integration of commercial/licensed tools

   * Management of screen snapshots
   * Localization testing across different browsers

   * Archival / purging / restore of data
   * Construction of test plans (and other services).

The above may be addressed in the sample plan below.

<a name="Gantt">
### Sequence of adoption</a>
The technical relationships described above provide the basis for sequencing the work necessary to adopt the approach.




   Not covered in this are implementation details such as the customized communications, 
   spreadsheets, project plans, and on-site tutorial materials
   which enterprises pay for (thus fund development of this approach).

There has been a lot written on the benefit of contributing to open-source software.

   * http://www.linuxinsider.com/story/69788.html
   * http://www.goldmansachs.com/our-thinking/pages/open-source.html

Open-source is especially to enterprises (such as banks, retail, etc.) 
which are not in the business of creating utility software for testing.
The hope of open-sourcing software is that others can maintain the software even when the original author moves on.
And original development of software can receive a level of world-class scrunity, creativity, and velocity.


<a name="NewComponents">
## New components</a>
These are the new components created to complete the <a href="#TheVision">vision shown above</a>:

| ID | Component | By | Need |
| ------ | --------- | -------- | ---- |
| a | HAR files to LogStash | Kranthi? | Design |
| b | capture timings in Selenium Java code | Kranthi? | Design |
| c | alerts from LogStash | You? | Design |
| d | <a href="#run-variations">run variations (Taurus)</a> | You? | Design |
| e | Jenkins invoke various configs | You? | Design |
| f | ref. data into ElastiSearch | You? | Design |
| g | j-gen | You? | Design |
| h | configs | Wilson | Design |

This repo takes a "README driven development" approach, as described 
<a target="_blank" href="http://tom.preston-werner.com/2010/08/23/readme-driven-development.html">here</a>.

<a name="ExistingComponents">
## Components list</a>
The remainder of this page describes the components mentioned in the [diagram and narrative above](#TheVision).


<a id="app-server"></a>
<a name="AUT">
### Sample Application Under Test (AUT)</a>
The ideal sample app would these characteristics:

   0. Be built on code which provides responsive web, native mobile (iOS and Android), plus APIs.
   0. Be built on code which is open sourced (e.g., available on github).
   0. Be built on code which makes use of open sourced libraries and tools (java).
   0. Be built on code accompanied by tutorials on its construction.
   0. Be built on code which contain coding that returns errors when optionally switched on (for validating test code).
   0. Be built with code which exihibits various approaches (pooling, multi-threading) so that performance can be compared.

Apps currently used for tutorials, benchmarking, and pre-sales do not meet all the criteria above.

   * WebTours used in most JMeter tutorials to date (within commerical performance testing software LoadRunner)
     returns errors based on a switch, but its source is not available to the public.


<a   id="configs"></a>
<a name="configs"></a>
**Configurations** in servers need to be tuned to obtain the most throughput out of hardware.
Examples of configurations include:

   * Maximum virtual memory allocation
   * Maximum threads
   * Maximum queue length
   * Maximum cache size
   * etc.

<a id="Jenkins"></a>
<a name="Jenkins"></a>
**Jenkins/CI** 
builds / initiates the various programs listed below on a schedule or when a build is requested.

Selenium and JMeter load generators are "slave nodes" which Jenkins calls to do work.

   Alternatives to Jenkins include https://travis-ci.org/ cloud service which many repos use from github.
   Travis is free for open source, but imposes a fee ($129/month and up) for private use on their cloud.
   
   Jenkins is free to install on premises.

<a id="JMeter-servers">
**JMeter Servers**</a>

<a name="JMeterScripts"></a>
**JMeter scripts**
ramp up load on servers using less test server resources
than Selenium scripts because they do not maintain a copy of the DOM
of each user.

There are different types of performance testing to measure various risks:

   * **Ping tests** measure variability in reaching the server so that spikes in network or server availability will not confound performance test results.
   * **Speed testing** involves single users to identify response times from a range of app functionality.
   * **Concurrency testing** identifies the impact of multiple requests for the same resources at the same time.
   * **Load testing** stops testing at a targeted load level (for certification).
   * **Stress testing** increases users (load) to identify the **bottleneck** limiting further capacity.
   * **Scalability testing** measures how much capacity really improves when additional/less hardware is added/removed.
   * **Endurance testing** measures gradual useage of resources (memory, disk space, etc.) over a longer run times.
   * **Baseline testing** establishes a set of metrics for the tests above as the basis for comparison when configurations are changed.

<a name="CloudEnv"></a>
**Cloud environment.**
Because it usually takes several servers to emulate enough load on an application server under test,
   JMeter is often run within a cloud envrionment such as Amazon.

https://github.com/oliverlloyd/jmeter-ec2
Automates running Apache JMeter on Amazon EC2

https://github.com/flood-io/ruby-jmeter
is a Ruby based DSL for building JMeter test plans


<a name="configs"></a>
**configs** is the set of configuration settings controlling VM memory and other aspects of the server.

<a name="run-variations"></a>
**Run variations** is managed by TAURUS (Test Automation Running Smoothly) was 
written in Java and Python 2.7 to create and edit YAML files that control JMeter slaves
and receive outputs from Blazemeter.

   * http://gettaurus.org/
   * https://www.youtube.com/watch?v=rwccqwaHT9U explains TAURUS as used with Blazemeter.
   * http://github.com/Blazemeter/taurus

<a name="AgentMonitoring">
**Monitoring** via agents (or JMX) include innovations from profilers and:

   * https://github.com/GoogleCloudPlatform/PerfKitBenchmarker

<a name="SeleniumWebDriver"></a>
**Selenium WebDriver**
controls desktop browsers as if humans were tapping on the keyboard and moving the mouse around a browser.

<a name="BrowserMob"></a>
<a name="HAR_Files"></a>
**BrowserMob proxy** at http://bmp.lightbody.net/
captures network traffic into HTTP Archive Report (HAR) files containing measurements of time to load elements on the page. There are several **precise** points in time that can be measured:

<img alt="truperf_selenium_timers" src="https://cloud.githubusercontent.com/assets/300046/9831936/7ae6a9d6-591f-11e5-8f54-29f725c5b6c1.png">

The forum for this is at https://groups.google.com/forum/#!forum/browsermob-proxy

Files are sent to <a href="#LogStash">LogStash</a>.

<a name="AppiumController"></a>
**Appium Controller**
controls native mobile smart phones as if humans were swiping and tapping the screen.

<a name="AppiumCode"></a>
**Appium Code**
controls native mobile smart phones as if humans were swiping and tapping the screen.

<a name="LogStash"></a>
**Logstash** collects data from JMeter, HAR files, web server logs, web app logs, etc. 
into a common location with a common date format.

<a name="ElastiSearch"></a>
**Elasticsearch** combines and indexes logs from several sources.

<a name="Kibana"></a>
**Kibana** displays dashboards from filtered data indexed on several dimensions.
See <a href="#Analysis">Analysis</a> section below.

<a name="Swagger"></a>
**Swagger gen** at https://github.com/swagger-api/swagger-codegen
generates code from a repository of API requirements (Swagger).


<hr size="3">
<a name="Analysis">
### Analysis of run results</a>

Sending JMeter to the ELK stack means that within JMeter listeners are not needed.
So Kibana would replace what Blazemeter displays.

<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/10390190/e61b57c6-6e2b-11e5-8e27-e3eee55257a9.jpg">
<img alt="Blazemeter demo screen" src="https://cloud.githubusercontent.com/assets/300046/10390190/e61b57c6-6e2b-11e5-8e27-e3eee55257a9.jpg"></a>

http://ecmarchitect.com/archives/2014/09/09/3932 also
![jmeter-results-kibana](https://cloud.githubusercontent.com/assets/300046/10350929/b14c8136-6cfb-11e5-882a-4f5955ed45e6.png)



<a name="Dimensions">
### Dimensions</a>
Comparisons based on these dimensions to "slice and dice" performance observations:

a. time (peak)

b. approach to build server under test

c. server configuration set

d. release/version of app

e. project

f. sub-systems

g. sequence flow of functionality being tested

h. tester

i. keywords, etc.


<hr size=5>
<a name="Authors">
## Authors </a>
Contact information for authors of this repo:

Wilson Mar, @wilsonmar, wilsonmar at gmail, 310.320-7878
https://www.linkedin.com/in/wilsonmar
Skype: wilsonmar4

Kranthi Paidi, @kkpaidi, 
https://www.linkedin.com/pub/kranthi-paidi/1a/b62/758

Anil Mainali, @mainalidfw, mainalidfw at gmail
https://www.linkedin.com/in/anilmainali
