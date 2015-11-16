Jenkins is open-source Java software (running under a Tomcat web server)
to invoke jobs on a schedule ("continuosly")
such as for building software and conducting tests.

<a id="Install">
## Installation</a>
http://www.cloudbees.com/
Cloudbees hosts Jenkins in the cloud.

0. To install on a Centos machine, follow instructions at:

 * https://wiki.jenkins-ci.org/display/JENKINS/Installing+Jenkins+on+Red+Hat+distributions

 Alternately, installers for other os:

 * <a target="_blank" href="http://jenkins-ci.org">http://jenkins-ci.org</a>

 By default, Jenkins stores its configuration files in the user's home folder at `~/.jenkins`.

 Installation options are described at:
 * https://wiki.jenkins-ci.org/display/JENKINS/Starting-and-Accessing+Jenkins

0. Start Jenkins to a specific port:

 ```
 java -jar jenkins.war --httpPort=8081
 ```

 The tcp port Jenkins uses? (8005 sharing, 8009, 8080) 

  ```
  netstat -anp | grep java
  ```

<a id="Nodes">
## Nodes</a>
 A Jenkins server can scale by adding **nodes** to spread build work across several servers running different operating systems.
 Look at the **Load Statistics** UI to see whether additional nodes are necessary.
 
 Jenkins slave nodes can be started by the master using several launch methods:

  * Launch slave agents on Unix machines via SSH
  * Launch slave agents via Java Web Start
  * Launch slave via execution of command on the Master
  * Let Jenkins control this Window slave as a Windows service

0. From a slave command line, connect to a Jenkins master:
 
 ```
 java -jar slave.jar -jnlpUrl http://jenkins-master:8081/computer/Test Node/slave-agent.jnlp
 ```

 Several **executors** can be running simultaneously.
 This number is specified within the **Manage Jenkins** UI.
 
 Tool locations (such as Github) is also specified in that UI.

 Nodes are described at:
 * https://wiki.jenkins-ci.org/display/JENKINS/Distributed+builds

<a id="Projects">
## Projects</a>



<a id="Builds">
## Builds</a>
Jenkins was originally created for automating the building (compilation) of java programs.
But Jenkins can be used for other types of work.
Nevertheless, the Jenkins term "build" is another word for what operating systems call a "job" (unit of work).

Builds can be automatically triggered several ways:

 * after other projects
 * periodically on a schedule
 * poll a version control system for changes

Invoke **Prepare for Shutdown** to stop work, to avoid abruptly stopping jobs.


<a id="Plugins">
## Plugins</a>
0. In **Manage Jenkins** UI, has many plug-ins.

  * https://www.youtube.com/watch?v=XY-ZB3FRnxw 
    Jenkins Tutorial - Part 01: Introduction & installation by Chandra Shekhar Reddy

  * https://wiki.jenkins-ci.org/display/JENKINS/Performance+Plugin
  sets the final build status (as good, unstable or failed) based on the reported error percentage. 


The plugin: <a target="_blank" href="https://wiki.jenkins-ci.org/display/JENKINS/Parameterized+Remote+Trigger+Plugin">
https://wiki.jenkins-ci.org/display/JENKINS/Parameterized+Remote+Trigger+Plugin</a>
triggers parameterized builds on other jenkins servers. 
This would centralize a single store of credentials.

 Plugins inject **Add build step** choices.

<a id="ScheduleBuild">
## Schedule builds</a>
A build can be invoked by clicking the button with the green arrow at the right side of the list of projects.

<a id="Reports">
## Reports</a>
0. Enable auto-refresh at the upper-right of the jobs list.

0. Builds appear in the **Build Queue** at the left of the UI.

0. Right-click on the # for a build for a drop-down list.

 <img width="611" alt="jenkins-build-project-detail" src="https://cloud.githubusercontent.com/assets/300046/11172332/02c5ca5a-8bc3-11e5-8d53-b4a0b57a22a8.png">

 Jenkins provides RSS feeds exposing XML files containing lists of just failures or a list of just the latest builds.


<a id="Resources">
## Resources</a>

By Chandra Shekhar Reddy:
  * https://www.youtube.com/watch?v=XY-ZB3FRnxw (19:25) Install JRE8 & Jenkins.war on Windows & /opt/tomcat7/webapps
    and ./bin/startup.sh
  * https://www.youtube.com/watch?v=RR0LabeUQ88  Create New Job in Jenkins on Windows.
  * Configuring jobs- https://www.youtube.com/watch?v=vJqUwZpRqwo
  * Git integration https://www.youtube.com/watch?v=ISAUsBSI8G0
  * Configuring slave nodes https://www.youtube.com/watch?v=EOp2VVRHrKQ

By Jeff Shantz:
  * https://www.youtube.com/watch?v=1JSOGJQAhtE Jenkins on Amazon

By Chris Chrysostom:
 * https://www.youtube.com/watch?v=RR0LabeUQ88 Create new job in Jenkins

John Sonmez (@jsonmez, http://simpleprogrammer.com/)
 * Getting Started with Jenkins Continuous Integration 2-hour 38-minute video course Feb. 2013 at Pluralsight.com.
   In this course, examples use SVN (Subversion) for the SCM (Source Control Manager), Visual Studio, MSBuild, MSTest, and MSTestRunner.
  But tools work in a similar way.
 The sln (solution) MSBuild script file in the video can be an Ant or Maven script.
 
