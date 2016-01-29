This page describes how to install and use Jenkins to process JMeter jobs.

There are several alternatives:




<a id="Installation">
## Installation</a>
See <a href="jenkins-setup.md">jenkins-setup.md</a> about generic setup.


<a id="JenkinsAddons">
## Add-ons to Jenkins for JMeter</a>
For easier invocation, the
<a target="_blank" href="https://wiki.jenkins-ci.org/display/JENKINS/Performance+Plugin">
Performance Plugin</a> from https://github.com/jenkinsci/performance-plugin.

For managed devops:
https://xebialabs.com/community/webinars/dzone-presents-seamless,-scalable-test-management-using-jenkins-and-xebialabs-software/

   * Xebialabx.com
   * https://www.youtube.com/channel/UC3XtKwSYyeQfGirLL_IW_Qw

<a id="Workspace">
## Workspace</a>
Setup Source Code Management (git) and confirm it's working.

0. On the left menu, click Workspace.

   <img width="262" alt="jenkins workspace maven" 
   src="https://cloud.githubusercontent.com/assets/300046/12677619/1781d68e-c64f-11e5-969b-daf96b2d7370.png">

0. Click <strong>target</strong> to drill down into the JMeter assets.
0. Click <strong>jmeter</strong>.


<a id="Parameters">
## Parameters</a>
0. Check <strong>This build is parametized</strong>.
0. Click <strong>Add parameter</strong> 
0. Select <strong>Text parameter</strong> for each of these parameters (keeping the all-caps):

   THREAD_COUNT - default to 1 when first setting up, then up it after verification.
   
   LOOP_COUNT - default to 1 to start.
   
<a id="Build">
## Build</a>
Provide to JMeter parameters in Jenkins:

0. For <strong>Root POM</strong>, type in <strong>pom.xml</strong>
0. For <strong>Goals and options</strong>, type in

   ```
clean verify -Dperformancetest.threadCount=$THREAD_COUNT -Dperformancetest.loopCount=$LOOP_COUNT
   ```

0. For <strong>Post steps</strong>.

0. In the left menu, click <strong>Build with Parameters</strong>.
0. Click Build button.
0. Click <strong>Console</strong> to watch the run.


<a id="Results">
## Results</a>

0. On the left menu, click Workspace.

   <img width="262" alt="jenkins workspace maven" 
   src="https://cloud.githubusercontent.com/assets/300046/12677619/1781d68e-c64f-11e5-969b-daf96b2d7370.png">

0. Click <strong>target</strong> to drill down into the JMeter assets.
0. Click <strong>jmeter</strong>.
0. Click <strong>results</strong>.

   * File /job/JMeterCI/ws/target/jmeter/...ThreadStateOverTime.png 
   
   <img width="801" alt="jenkins jmeter thread group graph" src="https://cloud.githubusercontent.com/assets/300046/12677781/3640d43e-c650-11e5-8d2c-cc84d7c6359b.png">
   
   * File /job/JMeterCI/ws/target/jmeter/...ResponseTimeOverTime.png
   
   <img width="799" alt="jenkins jmeter response time graph" src="https://cloud.githubusercontent.com/assets/300046/12677849/9508bd10-c650-11e5-9fd8-f440d7b7fcae.png">
   
   * File /job/JMeterCI/ws/target/jmeter/...TransactionsPerSecond.png
   
   <img width="799" alt="jenkins jmeter transpersec graph" src="https://cloud.githubusercontent.com/assets/300046/12677894/c6610d68-c650-11e5-8d45-f5eba6bef245.png">

