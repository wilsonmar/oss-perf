<a id="TheVision"></a>
<a name="Diagram"> 
The diagram below is <a target="_blank" href="http://www.youtube.com/watch?v=oNiAVL0DS8Y">
gradually revealed in this video<br />
<img alt="oss-perf-flow-v20" src="https://cloud.githubusercontent.com/assets/300046/24084104/6e20beb2-0cba-11e7-9ab1-8159b375cc5d.png"></a>

<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/24084104/6e20beb2-0cba-11e7-9ab1-8159b375cc5d.png">
<br />Click to pop-up full screen image</a>

<a href="#Components">Click here for details on each component</a>.

[![Join the chat at https://gitter.im/wilsonmar/oss-perf](https://badges.gitter.im/wilsonmar/oss-perf.svg)](https://gitter.im/wilsonmar/oss-perf?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## About this diagram

This was created in response to the need for a **more nimble, comprehensive, yet lower cost** approach to
measure and thus improve the speed, capacity, and reliability of high-traffic web and native mobile apps,
what many call <a href="perf-test-types.md">"performance engineering"</a>.

BTW, If you see a typo that needs fixing or an idea that should be considered, please fork this repo,
edit the file, and send us a pull request. Better yet, 
<strong>join us</strong> to revolutionalize the industry.
Organizations not in the business of selling performance engineering software and services to the public, 
it’s natural for us to develop framework as **open source** on public github repos so we can share the benefits as well as development costs, but also to ensure continuity of skills and effort. 

<a name="Narrative"></a>

## Narrative

Here we gradually reveal a map of an "end state" of relationships among various categories of tools that enable DevOps and Agile. This is so we can optimize the stack of apps in servers and firewalls serving customers using various devices, including mobile.

We begin with Collaboration tools as a fundamental enabler. Society as a whole is now able to move faster by augmenting email with use of (IM) immediate messaging (such as Skype) and SMS text messaging on smart phones. 

What began on wiki's (such as Confluence) are shifting to videos because they help us better appreciate time sequences. Video recordings convey the performance and functional flow of apps much quicker. Experts such as Gene Kim note that to optimize quality, performance, cost, we should focus first on cycle time. 

Other tool strategies include Intelligent Alerts, Shift-Left, and Integrated tuning. In this diagram we use a different color for each strategy. BTW, in this diagram we purposely describe categories of tools because there are usually several tools for each category. 
Faster provisioning to setup new servers is a key success factor in a DevOps transformation. 
Specific tools for provisioning include Docker and Ansible. 

The DevOps concept is to treat hardware not as pets which we would do anything to keep alive, but as "cattle" which we treat as disposable inventory. DevOps means treating configuration settings as code in automated setup which consistently add agents such they are always installed without additional manual effort or forgetting. (Examples are monitoring of Java Garbage Collection)

For consistency and security, installers from vendors and compiled application executables are deployed from an asset repository (such as Artifactory or Nexus). 

We save money by not over-buying servers if we use the best possible combination of configuration settings that control servers. Examples are memory and thread maximums which limit the rate of processing. 

But it is challenging to find that one precise set. So we need to vary different configurations in experiments driven by Data, made-up sham data or cleansed production data.

Efforts to facilitate rapid change depend on efficient Software Version Control (especially Git, which enables small changes to branch and then easily merged together again). 

Rapid iterations require a task runner (such as Jenkins or bamboo) that manage various versions while automating workflows involved in re-building, starting, and stopping of servers. 

Knowing the usable status of servers and the specific version of each component being used is important to avoid wasting time. So we constantly track the availability of each dependency, even mock servers, so we can anticipate down-time patterns based on historical logs. 

Packages to emulate load generation (such as JMeter, LoadRunner, NeoLoad, and others) are now just one part of an overall ecosystem for tuning to achieve time and cost reduction. 

Developers who profile code (using JProfiler with the Eclipse or IntelliJ IDE) often benefit from driver programs (such as Selenium) which exercise the UI automatically. This avoids error-prone manual repetition. This automation can also be used to partly generate load test scripts which are further processed by script utility programs. 

We see more and more example of code generation from data and requirements (such as WSDL, Swagger, and GraphQL) because they save so much time. We also scan code (using programs such as SonarQube) to ensure all coding complies with rules teams have defined to constitute quality.

Analyzing timings to spot individual resource file sizes that are too big is time consuming for testers. So many now use a utility that listens on network traffic while automated UI scripts run. For public networks, Network Virtualization (NV) software can artificially emulate the impact of slow networks experienced by mobile customers. 

Network logs and results from runs, indeed all metrics collected need be managed like an integrated big data set that they really are, collected locally from each server, then sent to a central metric repository from which visualizations can compare and contrast across versions and environments. 

To keep active data small, we export to an archive, then import back for historical comparisons. Ideally, graphs enable use to compare current metrics against reference data such as projections, budgets, and other context so we can see whether what is occurring violates thresholds defined for action. 

But the large amount of complex information now is more than what individual people watching screens can assimilate. To issue Alerts more quickly and to accommodate various perhaps conflicting schedules, a comprehensive automated watcher is necessary -- a program that dynamically tunes action thresholds.

So here you go, a template to shift tuning earlier and throughout the lifecycle for faster delivery through automation and Intelligent alerts for tuning.


<a name="Components"></a>

## Capabilities and components

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

<a name="Background"></a>

## Background Why

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




<a name="Authors"></a>

## Authors

Contact information for authors of this repo:

Wilson Mar, @wilsonmar, https://www.linkedin.com/in/wilsonmar

wilsonmar at gmail, 310.320-7878

wilsonmar4 on Skype.

Anil Mainali, @mainalidfw, mainalidfw at gmail
https://www.linkedin.com/in/anilmainali
