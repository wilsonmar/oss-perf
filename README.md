<a id="TheVision"></a>
<a name="Diagram"> 
This diagram <a target="_blank" href="http://www.youtube.com/watch?v=GSSBg7VefqY">
is gradually revealed in this video</a> with <a href="#Narrative">narrative text</a>:

<img name="Map" src="https://cloud.githubusercontent.com/assets/300046/10864229/0a6a00b8-7fad-11e5-9ddc-455c819b47d7.png"
usemap="#m_Map" border="0" width="100%">
<map name="m_Map">
<area shape="rect" coords="1,1,547,175" href="#Swagger-codege" title="Swagger-codege">
</map>

   Different colors in the diagram represent "ownership" (who does what) within a particular organization.
   Other organizations have other divisions. Other diagrams use different colors to indicate status.

This was created in response to the need for a **more nimble, comprehensive, yet lower cost** approach to
measure and thus improve the speed, capacity, and reliability of high-traffic web and native mobile apps,
what many call <a href="perf-test-types.md">"performance engineering"</a>.

BTW, If you see a typo that needs fixing or an idea that should be considered, please fork this repo,
edit the file, and send us a pull request. Better yet, 
<a href="#NewComponents">join us</a> to revolutionalize the industry.


<a name="Background">
## Background Why</a>
Here is what even commercial vendors have not yet delivered:

A. Organizations not in the business of selling performance engineering software and services to the public, 
it’s natural for us to develop framework as **open source** on public github repos so we can share the benefits as well as development costs, but also to ensure continuity of skills and effort. 

B. **Eliminate errors** in program coding source by **automatic generation of programming code** 
    based on specs.
   Although various attempts at generating UI code have not taken hold due to complexity,
   generation of APIs is less complex of an undertaking.

C. **Test immediately** in the dev. lifecycle through automatic **generation** of test automation scripts
   and API mock scripts.
   Making changes easy, fast, and safe enables fix-fast which makes systems more "correct" than monolithic design.

D. **Automatic alerts** of slow execution speeds during automated functional testing discovered automatically
   by **machine learning** robots rather than tedious manual examination of logs.

E. **Automatically cycle though variations** of <a href="#configs">
   several configurations</a> during a single manual run initiation.
   More important than hands-free,
   this enables performance analysis to go beyond merely testing to engineering.

The objective here is to **reduce the amount of manual effort** (and human errors) to conducting tests
through automation.

F. **Centralizing data** from various views of system behavior under stress (or not) 
   can be analyzed together will provide the basis for identifying trends and other insights
   using both manual and **"machine learning"** techniques.
   Machine learning would identify more minute issues more comprehensively.

Sending JMeter to the ELK stack means that within JMeter listeners are not needed.
So Kibana would replace what Blazemeter displays.


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



<a name="Narrative"> 
## Narrative of diagram</a>

| Capabilities | Components |
| ----------- | ---------- |
| We have a typical web server responding to both native mobile and desktop browser traffic over the public internet. | <a href="app-under-test.md">app server</a> |
| To provision servers and deploy apps we use open-source software | <a href="devops-toolchain.md">Docker & Puppet</a> |
| Having a quick way to bring up servers with different configurations | <a href="configs.md">configs</a> |
| enable us to tune settings (such as max threads) for the most throughput at the least cost. | <a href="run-variations.md">run variations</a> |
| virtual user scripts that |<a href="#JMeter-Scripts"> JMeter code</a> |
| run on servers which take the place of humans on real browsers and mobile devices. | <a href="#JMeter-servers">master & slaves</a> |
| These scripts reference sample (or sham) data. | Data |
| generated for testing.  | sham data-gen |
| We want runs to kick off automatically  | <a href="#Jenkins-CI">Jenkins CI</a> |
| when code is committed to a specific branch in a git repo. | Github |
| Our system depends on several vendor APIs being available all the time, | Vendor APIs |
|  so we mock (or virtualize) those services to ensure constant access during testing. | Wiremock |
| One of the benefits of a microservice architecture is it simplifies API calls enough to be defined in a database | Swagger |
| from which client code can be generated automatically. | codegen |
| Generation of Jmeter code enables us to create micro-benchmarking code **DURING** development | JMeter-gen |
| rather than **manually** coding load emulation scripts in some editor. | editor |
| Scanning code (using SonarQube) according to **coding rules** defined by the team ensures quality code rather than trying to test quality into code. | SonarQube |
| <strong>During runs:</strong> |  |
| by centralizing and normalizing several sources of metrics, we can better correlate where **bottlenecks** occur across the landscape. |<a href="#Logstash"> Logstash</a> |
| Data collected include logs of how many virual users are necessary to impose certain load levels, | run logs |
| log entries issued from within app code and the OS | server Logs |
| plus measurements such as garbage collection | monitor stream |
| obtained by monitoring agents | agents |
| and pattern of network packets where applicable. | <a href="#NetworkMon">Network mon</a> |
| To collect a large number of logs, intermediate servers (such as RabbitMQ) may be added.  |<a href="#Logstash-scale"> Logstash scale</a> |
| <strong>As for analysis of run results:</strong> |  |
| The central repository is indexed into various dimensions | <a href="#ElastiSearch">ElastiSearch</a> |
| for visualizations over time and "sliced and diced" for insight. | <a href="#Kibana">Kibana</a> |
| The visualizations include static objectives and targets to compare against live data. | ref. data | 
| To measure time taken by browsers to execute client application JavaScript: |  |
| browser instances are controlled by | <a href="#Selenium-Web-Driver">Selenium Web Driver</a> |
| code that manipulate the browser UI like real people do, | Selenium code |
| just as native mobile app test automation code | <a href="#Appium-Code">Appium Code</a> |
| are controlled | <a href="#Appium-Driver">Appium Driver</a> |
| so that timings are captured | <a href="#BrowserMob-Proxy">BrowserMob Proxy</a> |
| into files of specific resources by each user monitored. | <a href="#HAR-files">HAR files</a> | 
|  |  |
| "Machine learning" Programs scan the Elastisearch server to | <a href="#Python">Python</a> |
| identify the levels where | thresholds |
| **alerts** should be sent out to prioritize human review and action. | alerts |



<a name="ExistingComponents">
## Components list</a>
The remainder of this page describes the components mentioned in the [diagram and narrative above](#TheVision).



<a id="Jenkins-CI"></a>
<a name="JenkinsCI"></a>
**Jenkins/CI** 
builds / initiates the various programs listed below on a schedule or when a build is requested.

Selenium and JMeter load generators are "slave nodes" which Jenkins calls to do work.

   Alternatives to Jenkins include https://travis-ci.org/ cloud service which many repos use from github.
   Travis is free for open source, but imposes a fee ($129/month and up) for private use on their cloud.
   
   Jenkins is free to install on premises.

<a id="JMeter-servers"></a>
<a id="JMeter-servers">
**JMeter Servers**</a>

<a id="JMeter-Scripts"></a>
<a name="JMeterScripts"></a>
**JMeter scripts**
ramp up load on servers using less test server resources
than Selenium scripts because they do not maintain a copy of the DOM
of each user.

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


<a name="AgentMonitoring">
**Monitoring** via agents (or JMX) include innovations from profilers and:

   * https://github.com/GoogleCloudPlatform/PerfKitBenchmarker

<a name="NetworkMon">
**Network monintoring**</a>

   * https://www.elastic.co/products/beats

<a id="Selenium-Web-Driver"></a>
<a name="Selenium-Web-Driver"></a>
**Selenium WebDriver**
controls desktop browsers as if humans were tapping on the keyboard and moving the mouse around a browser.

<a id="BrowserMob-Proxy"></a>
<a name="BrowserMobProxy"></a>
**BrowserMob proxy** at http://bmp.lightbody.net/
captures network traffic into HTTP Archive Report (HAR) files containing measurements of time to load elements on the page. There are several **precise** points in time that can be measured:

<img alt="truperf_selenium_timers" src="https://cloud.githubusercontent.com/assets/300046/9831936/7ae6a9d6-591f-11e5-8f54-29f725c5b6c1.png">

The forum for this is at https://groups.google.com/forum/#!forum/browsermob-proxy

Files are sent to <a href="#LogStash">LogStash</a>.

<a id="HAR-files"></a>
<a name="HAR-Files"></a>
**HAR files**

<a id="Python"></a>
<a name="Python"></a>
**Python**

<a id="Appium-Driver"></a>
<a name="AppiumController"></a>
**Appium Controller**
controls native mobile smart phones as if humans were swiping and tapping the screen.

<a id="Appium-Code"></a>
<a name="AppiumCode"></a>
**Appium Code**
controls native mobile smart phones as if humans were swiping and tapping the screen.

<a id="Logstash"></a>
<a name="Logstash"></a>
**Logstash** collects data from JMeter, HAR files, web server logs, web app logs, etc. 
into a common location with a common date format.

<a id="ElastiSearch"></a>
<a name="ElastiSearch"></a>
**Elasticsearch** combines and indexes logs from several sources.

<a id="Kibana"></a>
<a name="Kibana"></a>
**Kibana** displays dashboards from filtered data indexed on several dimensions.
See <a href="#Analysis">Analysis</a> section below.

<a id="Swagger"></a>
<a name="Swagger"></a>

<a id="Swagger-codegen"></a>
<a name="Swagger-codegen"></a>
**Swagger gen** at https://github.com/swagger-api/swagger-codegen
generates code from a repository of API requirements (Swagger).


<hr size="3" />


<hr size=5>
<a name="Authors">
## Authors </a>
Contact information for authors of this repo:

Wilson Mar, @wilsonmar, wilsonmar at gmail, 310.320-7878
https://www.linkedin.com/in/wilsonmar
Skype: wilsonmar4

Anil Mainali, @mainalidfw, mainalidfw at gmail
https://www.linkedin.com/in/anilmainali
