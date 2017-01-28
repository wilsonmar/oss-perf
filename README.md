<a id="TheVision"></a>
<a name="Diagram"> 
The diagram below is <a target="_blank" href="http://www.youtube.com/watch?v=WnVCUzCO1CI">
gradually revealed in this video
<img alt="oss-perf-flow-v12" src="https://cloud.githubusercontent.com/assets/300046/12682771/2e17337e-c66a-11e5-9d22-9f5b67eadc1b.png"></a>
<a href="#Narrative">Click here for narrative text below</a>.

   Different colors in the diagram represent "ownership" (who does what) within a particular organization.
   Other organizations will like use different colors to indicate status.

This was created in response to the need for a **more nimble, comprehensive, yet lower cost** approach to
measure and thus improve the speed, capacity, and reliability of high-traffic web and native mobile apps,
what many call <a href="perf-test-types.md">"performance engineering"</a>.

BTW, If you see a typo that needs fixing or an idea that should be considered, please fork this repo,
edit the file, and send us a pull request. Better yet, 
<strong>join us</strong> to revolutionalize the industry.
Organizations not in the business of selling performance engineering software and services to the public, 
it’s natural for us to develop framework as **open source** on public github repos so we can share the benefits as well as development costs, but also to ensure continuity of skills and effort. 


<a name="Narrative"> 
## Narrative of diagram</a>

[![Join the chat at https://gitter.im/wilsonmar/oss-perf](https://badges.gitter.im/wilsonmar/oss-perf.svg)](https://gitter.im/wilsonmar/oss-perf?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

| Capabilities | Components |
| ----------- | ---------- |
| Our concern is the ability of <strong>servers</strong> running individually and within a cluster to | <a href="app-under-test.md">app server</a> |
| serve requests from internet browsers on desktops and | <a href="browser-clients.md">browser clients</a> |
| with mobile devices, | <a href="mobile-clients.md">mobile clients</a> |
| coded with React-based libraries. | <a href="react.md">react</a> |
| Organization who use a continuous integration and deployment workflow | - |
| make user of a source code repository (git or Subversion) to store not just programming source code text, but also | <a href="git.md">git</a> |
| script code that <strong>provision</strong> servers to work the same on local laptops as on servers in the cloud. | <a href="docker.md">Docker</a> |
| Deployment scripts | <a href="puppet.md">Puppet</a> or Chef |
| attach <strong>agents</strong> on each server's virtual machine to  | <a href="server_agents.md">server agents</a> |
| obtain a stream of monitoring information (such as garbage collection frequency). | <a href="monitoring.md">monitoring</a> |
| This activity may occur simultaneously on several temporary enviornments by Jenkins (or other continuous integraton orchestration tool) when a developer commits into a special branch in git that automatically triggers jobs to build servers and run test jobs on them. | <a href="jenkins.md">Jenkins</a> |
| Builds are based on dependencies defined in Maven (or Gradle). | <a href="maven.md">Maven</a> |
| Compiled outputs from Jenkins (such as .dll and .war files) are stored in a repository like the public Homebrew on Macs or Chocolatey on Windows. | <a href="artifactory.md">Artifactory</a> |
| To **predict** what load a system might be really able to deliver, we artificially <strong>generate load</strong> on servers by programs taking the place of humans typing on browsers and mobile devices. | <a href="loadgen-server.md">load gen</a> |
| The sequence and logic of actions are provided by emulation (JMeter) scripts that | <a href="jmeter-scripting.md">JMeter scripts</a> |
| reference (sham) data generated to avoid using sensitive or personal identification information. | <a href="#sham-data">sham data</a> |
| To ensure code quality, <strong>static scans</strong> of source code (using perhaps SonarQube) are run according to rules defined during team code inspection discussions. | <a href="#sonarqube.md">SonarQube</a> |
| During development, testing, and deployment, <strong>external vendor APIs</strong> are often used by apps to send email, SMS, get vendor inventory status, etc. | <a href="apis.md">External APIs</a> |
| So we mock those dependency services (using Wiremock) to ensure constant access. This also enables us to artificially vary vendor response times to see their consequence in our system, such as fail-over behavior. | <a href="#wirehock.md">Wiremock</a> |
| The amount of time and how often each line of code was executed can be analyzed using <strong>profiler</strong> software invoked by and IDE (IntelliJ or Eclipse). | <a href="profiler.md">profiler</a> |
| But that requires repeatable execution of the same scenarios. Thus: | <a href="selenium.md">Selenium Web Driver</a> |
| On desktop browsers, code run by a Robot framework manipulates the browser UI like real people do, | Robot framework, Selenium |
| On mobile devices, there are also robot frameworks to control them | <a href="appium-driver.md">Appium Driver</a> |
| using (Appium) mobile app test automation code. | <a href="appium-code.md">Appium Code</a> |
| The **timing** of each manual action during functional test script execution can be captured and stored to automatically detect changes in response time. | timings |
| The size and download time of each file can be optionally captured | <a href="browsermob-proxy.md">BrowserMob Proxy</a> |
| into HTML archive files for detailed analysis. | <a href="har-files.md">HAR files</a> | 
| **Configuration** settings controlling app servers, such as memory and thread limits, can limit the rate of processing. | configs |
| So a program is needed to automate the planning, re-building, and running of servers with different mixes to identify that ideal set of configuration values that yield the most throughput at the least cost. | <a href="run-variations.md">run variations</a> | 
| | |
| Apps being built today make use of microservices REST APIs (application programming interfaces) for computers to communicate directly with other computers. | <a href="APIs.md">Internal APIs</a> |
| When these APIs are completely described in a standard format (called Swagger spec), | <a href="swagger.md">Swagger spec</a> |
| client code can be generated. Code generation is revolutionary in its potential for reducing cycle time. | <a href="swagger-codegen.md">Swagger codegen</a> |
| Automatic generation of load test scripts mean that micro-benchmarks or entire stress tests can be run as soon as a developer checks in code, without waiting for manual test script creation. | Jmeter gen |
| Analysis of the impact from load imposed over time | loadtest logs |
| need to be correlated to the same time context of logs from operating systems and app servers | app server logs |
| as well as tracing from network captures. | <a href="network-mon.md">Network trace</a> |
| Finding root causes requires all this sensor data to be collected and digested together. |<a href="logstash.md"> Logstash</a> |
| Since there can be a large number of logs, intermediate servers (such as RabbitMQ) may be added.  |<a href="logstash-setup.md"> Logstash setup</a> |
| Indexing data over time and various other dimensions | <a href="elasticsearch.md">ElasticSearch</a> |
| enables us to filter and sort data creatively for insights. | <a href="kibana.md">Kibana</a> |
| One key insight is understanding why individual spikes or drops occur. This is why, instead of summarizing data, we need to export and archive detailed data, then import them back later | <a href="import-export.md">import-export</a> |
| so we can compare fine-grained data across several releases. | compare |
| On top of live measurements we overlay objectives and targets (such as expected growth in transaction volume) as reference on graphs. | ref. data | 
| A big reason for load testing is to identify thresholds for action such as adding more servers or | <a href="thresholds.md">thresholds</a> | 
| sending alerts for human expert review. | <a href="alerts.md">alerts</a> |
| It takes a tremendous amount of attention and skill to be the "air traffic controller" to a complex mix of clustered servers. So we want to make use of recent advances in statistical data science and "Machine learning" which can scan the database to dynamically identify thresholds and issue alerts. | <a href="machine-learning.md">DS & machine learning</a> |
| And since people can be overwhelmed by too many alerts and emails, we also recommendations to helping us focus on the most effective action among the cascade of events. | schedule |

<a name="Background">
## Background Why</a>
Here is what even commercial vendors have not yet delivered:

A. **Eliminate errors** in program coding source by **automatic generation of programming code** 
    based on specs.
   Although various attempts at generating UI code have not taken hold due to complexity,
   generation of APIs is less complex of an undertaking.

B. **Test immediately** in the dev. lifecycle through automatic **generation** of test automation scripts
   and API mock scripts.
   Making changes easy, fast, and safe enables fix-fast which makes systems more "correct" than monolithic design.

C. **Automatic alerts** of slow execution speeds during automated functional testing discovered automatically
   by **machine learning** robots rather than tedious manual examination of logs.

D. **Automatically cycle though variations** of <strong>
   several configurations</strong> during a single manual run initiation.
   More important than hands-free,
   this enables performance analysis to go beyond merely testing to engineering.

The objective here is to **reduce the amount of manual effort** (and human errors) to conducting tests
through automation.

E. **Centralizing data** from various views of system behavior under stress (or not) 
   can be analyzed together will provide the basis for identifying trends and other insights
   using both manual and **"machine learning"** techniques.
   Machine learning would identify more minute issues more comprehensively.

Sending JMeter to the ELK stack means that within JMeter listeners are not needed.
So Kibana would replace what Blazemeter displays.




<a name="Authors">
## Authors </a>
Contact information for authors of this repo:

Wilson Mar, @wilsonmar, https://www.linkedin.com/in/wilsonmar

wilsonmar at gmail, 310.320-7878

wilsonmar4 on Skype.

Anil Mainali, @mainalidfw, mainalidfw at gmail
https://www.linkedin.com/in/anilmainali
