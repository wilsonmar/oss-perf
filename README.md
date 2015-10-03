This github public repo summarizes the technical approach to combine several "totally free" **open-source software** 
to measure the speed and load capacity risks of high-traffic web and native mobile apps.

   "Totally free" is in quotes because the spirit of free software is that the community which uses them contributes back.
So if you see a typo that needs fixing or an idea that should be considered, please fork this repo,
edit the file, and send us a pull request. Better yet, join us in refining what is described here.


<a name="Table"> 
## Table of Capabilities and Components </a>
The capabilities of our approach is described below in one sentence (with associated components):

| Capabilities | Components |
| ----------- | ---------- |
| Artificial load runs | JMeter Controllers |
| are scheduled to run | Jenkins |
| against a sample web app | SUT (Server under test) |
| running with various experimental tuning configurations. | configs |
| Logs of load levels imposed during runs, | run logs |
| log entries issued from within app code and the OS | server Logs |
| plus measurements obtained by monitoring agents | monitor stream |
| are collected | Logstash |
| into a central repository | ElastiSearch |
| for visualizations over time and various other dimensions which can be "sliced and diced" for insight. | Kibana |
| The visualizations include static objectives and targets to compare against live data. | ref. data |
| To measure time taken by client browsers to execute JavaScript | Selenium code |
| the UI of browsers are controlled | Selenium Web Driver |
| just as native mobile apps | Appium code |
| are controlled | Appium Driver |
| so that timings are captured | BrowserMob Proxy |
| into files included in analysis. | HAR files |
| To reduce the time traditionally need to edit and verify | editor |
| test scripts to impose load, | JMeter code |
| we generate JMeter code to call APIs based on what is in | j-gen |
| the repository of API specifications | Swagger |
| just as app code to call APIs are generated | codegen |
| into source code repositories. | git repo. |
| Optionally, generated code is validated by static source code scanners | SonarQube |
| in spearate runs than app source code going through. | dev. toolchain |

<a name="Diagram"> 
## Diagram of interactions among components</a>
Interactions among the varioius components described above are illustred by this diagram:

<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/10262926/95a1ab74-6999-11e5-870e-5c263c5fa6b5.png">
<img alt="oss-perf-v04_wm pptx" src="https://cloud.githubusercontent.com/assets/300046/10262926/95a1ab74-6999-11e5-870e-5c263c5fa6b5.png"></a>

0. **Jenkins** 
initiates the various programs listed below on a schedule or when a build is requested.
Selenium and JMeter load generators are slave nodes to Jenkins.

0. **JMeter** scripts
ramp up load on servers using less test server resources
than Selenium scripts because they do not maintain a copy of the DOM
of each user.

0. Because it usually takes several servers to emulate enough load on an application server under test,
   JMeter is often run within a cloud envrionment such as Amazon.

0. **Selenium WebDriver**
controls desktop browsers as if humans were tapping on the keyboard and moving the mouse around a browser.

0. **BrowserMob proxy** 
captures network traffic into HTTP Archive Report (HAR) files containing measurements of time to load elements on the page. There are several **precise** points in time that can be measured:

 <img alt="truperf_selenium_timers" src="https://cloud.githubusercontent.com/assets/300046/9831936/7ae6a9d6-591f-11e5-8f54-29f725c5b6c1.png">

0. **Appium**
controls native mobile smart phones as if humans were swiping and tapping the screen.

0. **Logstash** collects data from JMeter, HAR files, web server logs, web app logs, etc. 
into a common location with a common date format.

0. **Elasticsearch** combines and indexes logs from several sources.

0. **Kibana** displays dashboards from filtered data indexed on several dimensions.

A complete infrastructure also includes test code generation from a repository of API requirements (Swagger).

Execution of test automation scripts are driven by Jenkins (or Bamboo, etc.) continuous integration services.

<hr size="3">
   Not covered in this repo are implementation details such the customized communications, spreadsheets,
   project plans, and proprietary tutorial materials
   which enterprises pay for (which fund development of this repo).

<a name="Status">
## Status of component development work</a>
This repo takes a "README driven development" approach, as described 
<a target="_blank" href="http://tom.preston-werner.com/2010/08/23/readme-driven-development.html">here</a>.

This list is rearranged differently for each organization's unique set of priorities.

| ID | Category | Action | Component |
| -: | -------- | ------ | --------- |
| 01 | AUT | Stand-up | AUT |


| 02 | Monitoring | Stand-up | agents | - |
| - | Tuning | Define | configs | - |
| - | DevOps | Stand-up | Jenkins | - |
| - | Web Func Test | Stand-up | Selenium WebDriver | - |
| - | Web Func Test | Start | Selenium code | - |
| - | Mobile Func Test | Stand-up | Apium driver | - |
| - | Mobile Func Test | Start | Apium code | - |
| - | Load | Stand-up | JMeter controllers | - |
| - | Load | Start | JMeter code | - |
| - | Load | Create | j-gen | - |
| - | DevOps | Stand-up | SonarQube | - |
| - | DevOps | Stand-up | LogStash collector | - |
| - | DevOps | Create | HAR file into LogStash | - |
| - | DevOps | Stand-up | ElastiSearch | - |
| - | DevOps | Stand-up | Kibana | - |
| - | DevOps | Stand-up | ref. data in ElastiSearch for Kibana | - |
| - | Dev | Stand-up | Swagger | - |
| - | Dev | Run | codegen from Swagger | - |


<hr size="3">
## App Under Test source code

0. Source code for building web server supporting apps under test.

0. Source code for building the Andorid mobile app under test.

0. Source code for building the iOS mobile app under test.

## Test script code

0. Appium script code for testing the iOS mobile app under test.

0. Appium script code for testing Andorid mobile app under test.

0. Sellenium script code for testing web app under test.

0. JMeter XML and Java test script code.

<hr /> 

## Network emulation vs. UI control load test scripts
There are several types of scripts that pretend to be internet browsers and mobile devices:

  * One type of script is created from "sniffing" the pattern of bytes traveling across the network
    (JMeter, LoadRunner C-scripts, etc. are in this category)

  * the other type of script (called UI scripts)
  is created by pretending to be someone typing and moving the mouse around the screen
    (Selenium, Appium, QTP/UFT, TruClient, are in this category)

  * a third type of script (called "headless" API scripts)
  is created by emulating calls programs make to other programs.

The dilemma is that these are different types of scripting efforts, 
using different programming languages and different tools,
and thus by different people in different groups that don't necessarily talk with each other.

The problem is that because performance testing tools focus on **file transfer time**,
they cannot report time for JavaScript client-rendering,
which grows more over time as more work is being done client-side.


## Under Load

Contents of this repo was used to generate statistics such as this:

<img alt="truperf_load" src="https://cloud.githubusercontent.com/assets/300046/9831874/f6a32c6e-591c-11e5-949b-607fcd2ead6b.png">

The top edge of the blue triagle illustrates the ramp-up of 100 users all communicating with the same server.
TODO: Make User Load axis numbers blue as well.

Virtual users in the run are distributed evenly among different browsers and the JMeter client emulator.

On the left side at the beginning of the run there is some variation in response time.

On the right side when a large number of users are working all at once, response time increases due to several factors.
One is the **server** makes some users wait in the queue while it processes other users.
TODO: Chart separating server vs. network vs. client time.

It is yet unknown why Firefox is more stressed than Chrome when servers are delayed
during periods of maximum load.

(And Chrome takes more memory than Firefox)


## Bar chart
This bar chart shows statistics on the range of response times:

<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/9830052/ed39d31e-58d4-11e5-8ba3-92a536fb1e48.png">
<img src="https://cloud.githubusercontent.com/assets/300046/9830052/ed39d31e-58d4-11e5-8ba3-92a536fb1e48.png"></a>

This chart shows how significantly <strong>JMeter can under-report response times</strong> experienced by real users.
TODO: Get same results between 2 charts (Chrome vs. Firefox).
TODO: Add Microsoft IE and Edge
TODO: Add HP TruClient?


<hr size=5>
Contact information for authors of this repop:

Kranthi Paidi, @kkpaidi, 
https://www.linkedin.com/pub/kranthi-paidi/1a/b62/758

Wilson Mar, wilsonmar at gmail, 310.320-7878
https://www.linkedin.com/in/wilsonmar
