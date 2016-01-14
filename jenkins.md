Jenkins is open-source Java software (running under a Tomcat web server)
to invoke jobs on a schedule ("continuosly")
such as for building software and conducting tests.

This is also called <strong>continuous integration</strong> because Jenkins
is used to ensure that components already unit-tested can be integrated together.

Experienced people warn to not check in code that breaks things (fails even local unit testing).
This is achieved by having each developer having full capabilities,
which may mean using mock code.

Alternatives to Jenkins include Fabric and Capistrano.

 * https://isotope11.com/blog/continuous-deployment-at-isotope11-an-update
   Continuous deployment at Isotope11.


<a id="Install">
## Installation</a>
0. Installation is not necessary if you use <a target="_blank" href="http://www.cloudbees.com/">
Cloudbees.com</a> which hosts Jenkins in their cloud.

0. Alternately, to install on RedHat and Centos Linux machines, follow instructions at:

 * https://wiki.jenkins-ci.org/display/JENKINS/Installing+Jenkins+on+Red+Hat+distributions

 Alternately, installers for Windows, Mac OSX, and other os:

 * <a target="_blank" href="http://jenkins-ci.org">http://jenkins-ci.org</a>

<a id="Config">
## Configuration</a>
 Jenkins installation options are described at:
 * https://wiki.jenkins-ci.org/display/JENKINS/Starting-and-Accessing+Jenkins

 By default, Jenkins stores its configuration files in the user's home folder at `~/.jenkins`.

 To make a Jenkins server completely public (and open to hacking)
 use a text editor to edit ~jenkins/.ssh/config
 to add `StrictHostKeyChecking no`.

0. Create a key without a passphrase, per https://help.github.com/articles/generating-ssh-keys/
1. Login under Jenkins:

 ```
 sudo su jenkins
 ```

0. Copy your github key to Jenkins .ssh folder.

 ```
 cp ~/.ssh/id_rsa_github* /var/lib/jenkins/.ssh/
 ```

0. Raname the keys:

 ```
 mv id_rsa_github id_rsa
 mv id_rsa_github.pub id_rsa.pub
 ```

<a id="StartServer">
## Start server</a>
0. Start Jenkins to a specific port for HTTP:

 ```
 java -jar jenkins.war --httpPort=8081
 ```

 Alternately, start Jenkins to a specific port for HTTPS:

 ```
 java -jar jenkins.war --httpPort=-1 --httpPort=221
 ```

0. Confirm tcp ports Jenkins uses as java (8005 sharing, 8009, 8080) 

  ```
  netstat -anp | grep java
  ```

<a id="Security">
## Security</a>
This is typically done only by the Administrator of the system.

0. In **Manage Jenkins** UI enter **Configre Global Security**.
0. Check Enable Security.
1. If you have an LDAP, select that, or check Use Jenkin's own user database. But you'll have to add each user.
2. Check **Project-based Matrix Authorization Strategy** to limit Anonymous users Read-only access.
3. Create the admin user permissions to do all activities by checking all boxes for that user.

 <img width="710" alt="jenkins-security-permissions-matrix" src="https://cloud.githubusercontent.com/assets/300046/11181173/6ea5dfe4-8c1d-11e5-9674-ef0e7d88ef8d.png"> 


 <img width="881" alt="jenkins-build-project-detail2" src="https://cloud.githubusercontent.com/assets/300046/11181632/017e375a-8c21-11e5-8147-4df54611d009.png">


<a id="Nodes">
## Nodes</a>
 A Jenkins server can scale by adding **nodes** to spread build work across several servers running different operating systems.

 Look at the **Load Statistics** UI to see whether additional nodes are necessary.
 
 Jenkins slave nodes can be started by the master using several launch methods:

  * Launch slave agents on Unix machines via SSH
  * Launch slave agents via Java Web Start
  * Launch slave via execution of command on the Master
  * Let Jenkins control this Window slave as a Windows service

0. Setup a node as a VirtualBox. TODO.

0. In Configure Server, a node can be setup as a **Virtualbox** 
   URL such as http://localhost:18083/.

0. In Manage Nodes, configure a VBox host.
1. Run the box by clicking the icon at the far right of the node listed.
2. Launch Slave Agent to start the machine.


### From a slave node
0. From a slave command line, connect to a Jenkins master:
 
 ```
 java -jar slave.jar -jnlpUrl http://jenkins-master:8081/computer/Test Node/slave-agent.jnlp
 ```

 Several **executors** can be running simultaneously.
 This number is specified within the **Manage Jenkins** UI.
 
 Tool locations (such as Github) is also specified in that UI.

 Nodes are described at:
 * https://wiki.jenkins-ci.org/display/JENKINS/Distributed+builds

<a id="Builds">
## Build Projects</a>
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
0. In **Manage Jenkins** UI **Available** tab has many plug-ins.

0. Click on a category (Artifact Uploaders) to expand additional categories.

0. View the <a target="_blank" href="http://wiki.jenkins-ci.org/display/JENKINS/Plugins">
Wiki on Plugins</a>.

 PROTIP: The wide variety of plugins is why Jenkins is popular.

The plugin: <a target="_blank" href="https://wiki.jenkins-ci.org/display/JENKINS/Parameterized+Remote+Trigger+Plugin">
https://wiki.jenkins-ci.org/display/JENKINS/Parameterized+Remote+Trigger+Plugin</a>
**triggers** parameterized builds on other jenkins servers. 
This would centralize a single store of credentials.

 Plugins inject **Add build step** choices.

<a target="_blank" href="http://wiki.jenkins-ci.org/display/JENKINS/Extension+points">
Extension points</a> are plugins that extend other plugins.

The flow for programming code may includ **static code analysis** 
 such as using StyleCop (there is also SonarQube).
This provides options on what violations to report. 


<a id="ScheduleBuild">
## Schedule builds</a>
0. Right-click on a project for a drop-down list containing **workspace**.

 <img width="321" alt="jenkins-build-dropdown" src="https://cloud.githubusercontent.com/assets/300046/11172423/8cffff32-8bc4-11e5-9e3b-4c92b9f7b3a1.png">

 A build can also be invoked by clicking the button with the green arrow at the right side of the list of projects.

 In the workspace for a project are folders and **.trx** files output from Jenkins runs.
 
 
<a id="Reports">
## Reports</a>
0. Enable auto-refresh at the upper-right of the jobs list.

0. Builds appear in the **Build Queue** at the left of the UI.

0. Right-click on the # associated with a build for a drop-down list.

 <img width="611" alt="jenkins-build-project-detail" src="https://cloud.githubusercontent.com/assets/300046/11172332/02c5ca5a-8bc3-11e5-8d53-b4a0b57a22a8.png">

0. Select **Console Output** to view the log from each build.

 Jenkins provides RSS feeds exposing XML files containing lists of just failures or a list of just the latest builds.

0. A link to a specific build attempt is like this example generated from Papercut.codeplex.com:

 ```
 http://localhost:8081/job/Hellow%20World/27/
 ```

<a id="Post-Build">
## Post-build actions</a>
  * https://wiki.jenkins-ci.org/display/JENKINS/Performance+Plugin
  sets the final build status (as good, unstable or failed) based on the reported error percentage. 

If a job fails, 
0. Email notifications are sent
1. Chat room notifications are sent


<a id="Resources">
## Resources</a>

By Chandra Shekhar Reddy:
  * https://www.youtube.com/watch?v=XY-ZB3FRnxw 
    Jenkins Tutorial - Part 01: Introduction & installation by Chandra Shekhar Reddy

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
 * <a target="_blank" href="https://app.pluralsight.com/library/courses/jenkins-introduction/table-of-contents">
   Getting Started with Jenkins Continuous Integration 2-hour 38-minute video course Feb. 2013 at Pluralsight.com</a>.
   In this course, examples use SVN (Subversion) for the SCM (Source Control Manager), Visual Studio, 
   MSBuild (), MSTest, MSTestRunner, StyleCop, and Papercut.
  But other tools work in a similar way.
 The sln (solution) MSBuild script file in the video can be an Ant or Maven script.
 
 <img alt="jenkins-job-flow-diagram" src="https://cloud.githubusercontent.com/assets/300046/11226898/b5a246f6-8d37-11e5-86f4-1c75e6c49dee.png">


<a id=SkillCert">
## Skill Certification</a>
There is a company that is hoisting certifications of Jenkins people.
There is the age-old question of whether organizations providing training also be the one offering certifications
advertised as being of the whole community.
The company is so commercial oriented that it does not allow newsletters to be sent to gmail and hotmail addresses.
