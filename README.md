This github public repo summarizes the technical approach to **combine** several <a href="#NewComponents">new</a>
and existing "totally free" **open-source software** 
repos to measure the speed and load capacity risks of high-traffic web and native mobile apps.

   "Totally free" is in quotes because the spirit of free software is that the community which uses them contributes back.
So if you see a typo that needs fixing or an idea that should be considered, please fork this repo,
edit the file, and send us a pull request. Better yet, join us in refining what is described here.


<a name="TypesOfTest">
## Create scripts to impose load using network emulation vs. UI control</a>
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

   Network traffic emulation scripts can call **API (Application Programming Interfaces)**
   which "headless" programs communicate with each other (with no UI for human users).


<a name="TheAnnoyance">
## The annoyance with existing approaches</a>
These two different types of scripting efforts may
use different programming languages and different tools,
and thus by different people in different groups that don't necessarily talk with each other.

It can be time-consuming to create traffic emulation scripts due to the need to "sniff" traffic
in order to convert observed patterns to script code.

Traffic emulation scripts focus on **file transfer time**,
and cannot report time for JavaScript client-rendering,
which grows more over time as more work is being done client-side.

Codification of API calls into standard patterns makes it now possible to 
**generate test script code**.


<a name="Table"> 
## Table of Capabilities and Components </a>
The capabilities of our approach is described below in one sentence (with associated components):

| Capabilities | Components |
| ----------- | ---------- |
| On a sample web server app cloned for test use | app server |
| instantiated with a specific variation of experimental tuning configurations, | <a href="#configs">configs</a> |
| we can run specific scenarios (different parameter values) controlling | run variations |
| network load emulation test scripts | JMeter code |
| to place artificial loads on the server | JMeter Controllers |
| by invoking them on a scheduled basis or dynamically | Jenkins |
| such as when the dev. toolchain is invoked after | dev. toolchain |
| a commit occurs to a specific branch in a git repo. | github |
| During runs: |  |
| logs of load levels imposed, | run logs |
| log entries issued from within app code and the OS | server Logs |
| plus measurements such as garbage collection | monitor stream |
| obtained by monitoring agents | agents |
| are collected and normalized | Logstash |
| into a central repository | ElastiSearch |
| for visualizations over time and various other dimensions which can be "sliced and diced" for insight. | Kibana |
|  |  |
| The visualizations include static objectives and targets to compare against live data. | ref. data |
| To measure time taken by browsers to execute client application JavaScript, | Selenium code |
| the UI of browsers are controlled | Selenium Web Driver |
| just as native mobile app test automation code | Appium code |
| are controlled | Appium Driver |
| so that timings are captured | BrowserMob Proxy |
| into files included in analysis. | HAR files |
|  |  |
| To reduce the time traditionally need to edit and verify | editor |
| we **generate JMeter code**  | j-gen |
| and variations in use of test data to repeatedly call APIs based on what is in | run variations |
| the repository of API specifications | Swagger |
| similar to how app code to call APIs are generated | codegen |
| into source code repositories. | git repo. |
|  |  |
| Generated test code is validated by static source code scanners | SonarQube |
| in the same or spearate runs than what app source code go through. | dev. toolchain |


<a id="TheVision"></a>
<a name="Diagram"> 
## Diagram of interactions among components</a>
Interactions among the varioius components described above are illustred by this diagram:

<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/10262926/95a1ab74-6999-11e5-870e-5c263c5fa6b5.png">
<img alt="oss-perf-v04_wm pptx" src="https://cloud.githubusercontent.com/assets/300046/10262926/95a1ab74-6999-11e5-870e-5c263c5fa6b5.png"></a>

<a name="NewComponents">
## New components</a>
These are the new components (repos) created to complete the <a href="#TheVision">vision shown above</a>:

| Action | Component | Assigned | Need |
| ------ | --------- | -------- | ---- |
| New | HAR files to LogStash | Kranthi | Design |
| New | run variations | ? | Design |
| New | Jenkins invoke various configs | ? | Design |
| New | ref. data into ElastiSearch | ? | Design |
| New | j-gen | Wilson | Design |
| New | configs | Wilson | Design |


<a name="ExistingComponents">
## Existing components</a>
These are the existing repos made use of by the [approach shown above](#TheVision):

<a name="Jenkins"></a>
**Jenkins** 
initiates the various programs listed below on a schedule or when a build is requested.
Selenium and JMeter load generators are slave nodes to Jenkins.

<a name="JMeterScripts"></a>
**JMeter scripts**
ramp up load on servers using less test server resources
than Selenium scripts because they do not maintain a copy of the DOM
of each user.

<a name="CloudEnv"></a>
**Cloud environment.**
Because it usually takes several servers to emulate enough load on an application server under test,
   JMeter is often run within a cloud envrionment such as Amazon.

<a name="configs"></a>
**configs** is the set of configuration settings controlling VM memory and other aspects of the server.

<a name="SeleniumWebDriver"></a>
**Selenium WebDriver**
controls desktop browsers as if humans were tapping on the keyboard and moving the mouse around a browser.

<a name="BrowserMob"></a>
**BrowserMob proxy** 
captures network traffic into HTTP Archive Report (HAR) files containing measurements of time to load elements on the page. There are several **precise** points in time that can be measured:

 <img alt="truperf_selenium_timers" src="https://cloud.githubusercontent.com/assets/300046/9831936/7ae6a9d6-591f-11e5-8f54-29f725c5b6c1.png">

<a name="AppiumController"></a>
**Appium Controller**
controls native mobile smart phones as if humans were swiping and tapping the screen.

<a name="AppiumCode"></a>
**Appium Code**
controls native mobile smart phones as if humans were swiping and tapping the screen.

<a name="LogStash"></a>
0. **Logstash** collects data from JMeter, HAR files, web server logs, web app logs, etc. 
into a common location with a common date format.

<a name="ElastiSearch"></a>
**Elasticsearch** combines and indexes logs from several sources.

<a name="Kibana"></a>
**Kibana** displays dashboards from filtered data indexed on several dimensions.

A complete infrastructure also includes test code generation from a repository of API requirements (Swagger).

Execution of test automation scripts are driven by Jenkins (or Bamboo, etc.) continuous integration services.

<hr size="3">
   Not covered in this repo are implementation details such the customized communications, spreadsheets,
   project plans, and proprietary tutorial materials
   which enterprises pay for (which fund development of this repo).

<a name="Status">
## Priority and status of component development work</a>
This repo takes a "README driven development" approach, as described 
<a target="_blank" href="http://tom.preston-werner.com/2010/08/23/readme-driven-development.html">here</a>.

This list is rearranged differently for each organization's unique set of priorities.

   | ID | Category | Action | Component | Status |
   | -: | -------- | ------ | --------- | ------ |
   | 01 | AUT | Stand-up | AUT back-end | - |
   | 02 | AUT | Stand-up | AUT UI | - |

| 3 | DevOps | Stand-up | LogStash collector | - |
| 4 | DevOps | Create | HAR file into LogStash | - |
| 5 | DevOps | Stand-up | ElastiSearch | - |
| 6 | DevOps | Stand-up | Kibana | - |
| 7 | DevOps | Stand-up | ref. data in ElastiSearch for Kibana | - |
| 8 | Monitoring | Stand-up | agents | - |

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
