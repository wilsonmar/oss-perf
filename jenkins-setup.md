Jenkins is open-source Java software (running under a Tomcat web server)
to invoke jobs on a schedule ("continuosly")
such as for building software and conducting tests.

Jenkins is a key component of <strong>continuous integration</strong> 
to invoke a chain of tasks needed to ensure that components already unit-tested can be integrated together.
See <a target="_blank" href="http://pluralsight.com/training/courses/TableOfContents?courseName=continuous- integration">
Pluralsight course by James Kovacs</a>

PROTIP: Experienced people warn to NOT check in code that may break things (fails even local unit testing).
This is achieved by having each developer having full capabilities on their workstations or in a private cloud stack.
This may mean using mock interfaces.


<a id="Alternatives">
## Alternatives to Jenkins</a>
<img align="right" alt="jenkins alternatives" src="https://cloud.githubusercontent.com/assets/300046/12533728/df265ae4-c1ee-11e5-9a0b-bbc380a2d20f.png">

Jenkins began in 2010 as a fork of Hudson into Github from java.net after its acquisition by Oracle's purchase of Sun.

* http://jenkins-ci.org/content/whos-driving-thing

Alternatives to Jenkins include Fabric and Capistrano.

 * https://isotope11.com/blog/continuous-deployment-at-isotope11-an-update
   Continuous deployment at Isotope11.

<a id="Installation">
## Installation</a>

* <a href="#CloudbeesInstall">Cloudbees</a>
* <a href="#AmazonInstall">Amazon</a>
* <a href="#Install_Linux">Linux</a>
* <a href="#Install_Mac">Mac</a>
* <a href="#AmazonInstall">Windows</a>
* <a href="#Verify_install">Verify install</a>


<a id="CloudbeesInstall">
### Cloudbees Installation</a>
Installation is not necessary if you use <a target="_blank" href="http://www.cloudbees.com/">
Cloudbees.com</a> which hosts Jenkins in their cloud. Their CEO is Kohsuke Kawaguchi (@kohsukekwa, kk@kohsuke.org)
who invented Hudson/Jenkins. Hear him speak at <a target="_blank" href="https://www.youtube.com/watch?v=0nG4xGYvAa0"> this Oct, 2014 meetup about Workflow</a>.

Cloudbees sells Nectar, a supported and enhanced on-premise version of Jenkins that automatically scales on VMWare virtual machines.

An example of


<a name="AmazonInstall">
### Amazon Installation</a>
Alternately, many host Jenkins on the Amazon cloud:

 * https://www.youtube.com/watch?v=1JSOGJQAhtE Jenkins on Amazon
   by Jeff Shantz:

  
<a name="Install_Linux">
### Installation on Linux</a>
Alternately, to install on RedHat and Centos Linux machines, follow instructions at:

 * https://wiki.jenkins-ci.org/display/JENKINS/Installing+Jenkins+on+Red+Hat+distributions

<a id="Install_Mac">
### Installation on Macs</a>
Alternately, install on Mac OSX using Homebrew:

 ```
 brew update
 brew doctor
 brew install jenkins
 ```

  A sample response:

  ```
==> Downloading http://mirrors.jenkins-ci.org/war/1.644/jenkins.war
==> Downloading from http://ftp-nyc.osuosl.org/pub/jenkins/war/1.644/jenkins.war
######################################################################## 100.0%
==> jar xvf jenkins.war
Error: The `brew link` step did not complete successfully
The formula built, but is not symlinked into /usr/local
Could not symlink bin/jenkins
/usr/local/bin is not writable.

You can try again using:
  brew link jenkins
==> Caveats
Note: When using launchctl the port will be 8080.

To have launchd start jenkins at login:
  ln -sfv /usr/local/opt/jenkins/*.plist ~/Library/LaunchAgents
Then to load jenkins now:
  launchctl load ~/Library/LaunchAgents/homebrew.mxcl.jenkins.plist
Or, if you don't want/need launchctl, you can just run:
  jenkins
==> Summary
🍺  /usr/local/Cellar/jenkins/1.644: 6 files, 61.5M, built in 30 seconds
  ```
 
  Homebrew puts the jenkins.war file in:
  
  ```
  /usr/local/Cellar/jenkins/1.644/libexec/jenkins.war
  ```
  
 For more information:
 
 * http://iosfactory.blogspot.com/2015/02/jenkins-setup-for-ios-development.html
 
<a id="Install_Windows">
### Installation on Windows</a>
0. Open a Command Window.
0. Install the Chocolatey package manager (if you haven't already) by copying and pasting the PowerShell command from
   <a target="_blank" href="http://chocolatey.org/">Chocolatey.org</a>
0. Install the version of Jenkins that Chocolatey makes available:
 
   ```
 choco install jenkins
   ```
 
   If Java is not installed on your computer already, it will be installed as a dependency.

   A sample response:

   ```
Microsoft Windows [Version 6.1.7601]
Copyright (c) 2009 Microsoft Corporation.  All rights reserved.

C:\Users\Mainali>choco install jenkins
Chocolatey detected you are not running from an elevated command shell
  (cmd/powershell). You may experience errors - many functions/packages
  require admin rights. Only advanced users should run choco w/out an
  elevated shell (and very advanced users as non-admin). When you open
  the command shell, you should ensure "Run as Administrator".
Chocolatey (v0.9.8.31) is installing 'jenkins' and dependencies. By installing y
ou accept the license for 'jenkins' and each dependency you are installing.

jenkins v1.645.0.0

Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d----        01/24/2016     23:09            jenkins

Downloading jenkins 64 bit
  from 'http://mirrors.jenkins-ci.org/windows/jenkins-1.645.zip'
Extracting C:\Users\Mainali\AppData\Local\Temp\chocolatey\jenkins\jenkins-1.645.
zip to C:\Users\Mainali\AppData\Local\Temp\chocolatey\jenkins...
C:\Users\Mainali\AppData\Local\Temp\chocolatey\jenkins
Installing jenkins...
jenkins has been installed.
Finished installing 'jenkins' and dependencies - if errors not shown in console,
 none detected. Check log for errors if unsure.
  ```
 
   Notice Java is installed on path `C:\Users\%User%\AppData\Local\Temp\chocolatey\jenkins`, where %user% is what's on your own computer.

0. Verify install by <a href="#Start-server">starting Jenkins server</a>.


<a id="Verify_install">
### Verify Installation on Macs and Linux</a>

0. Verify intallation on a Mac or Linux:

   ```
   which jenkins
   ```
 
   The response is the location Jenkins was installed:
 
   ```
   /usr/local/bin/jenkins
   ```

<a id="Start-server">
## Start and stop server</a>
The command to start Jenkins has several parameters.

0. See https://wiki.jenkins-ci.org/display/JENKINS/Starting+and+Accessing+Jenkins
   for a full explanation, inclidiong use of <strong>nohup</strong>.

0. Start Jenkins using defaults:

   ```
   jenkins
   ```


0. Confirm tcp ports Jenkins uses as java (8005 sharing, 8009, 8080):

   ```
   netstat | grep java
   ```

0. Stop the server by escaping the process.

   * Ctrl+C on Windows
   * command+C on Macs

   The response is:
   
   ```
   INFO: JVM is terminating. Shutting down Winstone
   ```

   This soft-stop enables Jenkins to save data to memory rather than potentially lose data during a hard and sudden stop by closing the command window which it runs under (by clicking the red X on that window).

   BTW, some install the 
<a target="_blank" href="https://wiki.jenkins-ci.org/display/JENKINS/SafeRestart+Plugin"> 
SafeRestart plug-in</a>, which adds the <strong>Restart Safely</strong> option to the 
<a title="jenkins saferestart_plugin" href="https://cloud.githubusercontent.com/assets/300046/12584913/9681b1d2-c3fe-11e5-9359-e51fc5809734.png">
Jenkins left menu</a> to avoid needing to be at the server console at all.

0. Start Jenkins again using more parameters as described in:

   ```
   cd /usr/local/Cellar/jenkins/1.644/libexec
   java -jar jenkins.war --httpPort=8081
   ```

   Alternately, start Jenkins to a specific port for HTTPS:

   ```
   java -jar jenkins.war --httpPort=-1 --httpPort=221
   ```
 
    PROTIP: Put one of these commands in a shell script.
    
    The response:
    
    ```
Running from: /usr/local/Cellar/jenkins/1.644/libexec/jenkins.war
webroot: $user.home/.jenkins
Jan 26, 2016 8:52:21 AM winstone.Logger logInternal
INFO: Beginning extraction from war file
Jan 26, 2016 8:52:21 AM org.eclipse.jetty.util.log.JavaUtilLog info
INFO: jetty-winstone-2.9
Jan 26, 2016 8:52:27 AM org.eclipse.jetty.util.log.JavaUtilLog info
INFO: NO JSP Support for , did not find org.apache.jasper.servlet.JspServlet
Jenkins home directory: /Users/wmar/.jenkins found at: $user.home/.jenkins
Jan 26, 2016 8:52:34 AM org.eclipse.jetty.util.log.JavaUtilLog info
INFO: Started SelectChannelConnector@0.0.0.0:8081
Jan 26, 2016 8:52:34 AM winstone.Logger logInternal
INFO: Winstone Servlet Engine v2.0 running: controlPort=disabled
    ```

0. View Jenkins in your default browser by clicking: <a target="_blank" href="http://localhost:8081/">http://localhost:8081/</a>.

   <img width="643" alt="jenkins virgin menu" src="https://cloud.githubusercontent.com/assets/300046/12587756/7da7b5d8-c40a-11e5-88fa-a2b668c3dba6.png">



<a id="Config_Security">
## Configure User Security</a>
Jenkins installation options are described at:
 
 * https://wiki.jenkins-ci.org/display/JENKINS/Starting+and+Accessing+Jenkins

 By default, Jenkins stores its configuration files in the user's home folder at `~/.jenkins`.

 To make a Jenkins server completely public (and open to hacking)
 use a text editor to edit ~jenkins/.ssh/config
 to add `StrictHostKeyChecking no`.

0. Create a key without a passphrase, per https://help.github.com/articles/generating-ssh-keys/

0. Login under user named Jenkins (if applicable):

   ```
   sudo su jenkins
   ```

0. Copy your github key to Jenkins .ssh folder.

   ```
   cp ~/.ssh/id_rsa_github*  /var/lib/jenkins/.ssh/
   ```

0. Raname the keys:

   ```
   mv id_rsa_github id_rsa
   mv id_rsa_github.pub id_rsa.pub
   ```


<a id="AddUser">
## Add User Permissions</a>
<img align="right" width="181" alt="jenkins full menu" src="https://cloud.githubusercontent.com/assets/300046/12525765/b4483cbc-c11b-11e5-8053-57556314ff0e.png">
If you don't see the full menu shown on the right, you don't have some permissions.

As with other systems, granting permissions is typically done only by the Administrator of the system.

0. In **Manage Jenkins** UI enter **Configre Global Security**.
0. Check Enable Security.
0. If you have an LDAP, select that, or check Use Jenkin's own user database. But you'll have to add each user.
0. Check **Project-based Matrix Authorization Strategy** to limit Anonymous users Read-only access.

   PROTIP: Rather than specifying individual users and their permissions,
   the preferred approach is to firt assign individual users to a group in LDAP,
   then assign permission to the group.

0. For an existing user/group, check boxes to its right.

   <img width="710" alt="jenkins-security-permissions-matrix" src="https://cloud.githubusercontent.com/assets/300046/11181173/6ea5dfe4-8c1d-11e5-9674-ef0e7d88ef8d.png"> 

   <img width="881" alt="jenkins-build-project-detail2" src="https://cloud.githubusercontent.com/assets/300046/11181632/017e375a-8c21-11e5-8147-4df54611d009.png">

0. Or create a user.

   <a id="JMeterPlugin">
   ## Performance Plug-in for JMeter</a>

WARNING: This is no longer maintained, with a large <a target="_blank" href="https://issues.jenkins-ci.org/browse/JENKINS-28426?jql=project%20%3D%20JENKINS%20AND%20status%20in%20(Open%2C%20%22In%20Progress%22%2C%20Reopened)%20AND%20component%20%3D%20'performance-plugin">bug list</a>.

To add the
<a target="_blank" href="https://wiki.jenkins-ci.org/display/JENKINS/Performance+Plugin"> 
Performance plug-in</a> to display results from JMeter runs:

1. Click the Manage Jenkins link.
2. Click the Manage Plugins link.
3. Select the Available tab.
4. In Filter type "Performance".
5. Check to select "Performance plugin".
6. Click "Download now and install after restart".
7. Click to restart server.

If you prefer a manual approach:

0. Create a folder to hold the folder created during cloning (such as jmeter or jenkinsci).
1. cd to that folder, then:

   ```
git clone https://github.com/jenkinsci/performance-plugin.git performance
cd performance
   ```
   
   This contains a pom.xml file for Maven to compile the src folder.
   
0. If you haven't already:

   ```
brew install maven
   ```
   
0. Compile in a command window:

   ```
mvn package
   ```

   This downloads a bunch of files specified as dependencies, ending in this:
   
   ```
   [INFO] Total time: 09:20 min
[INFO] Finished at: 2016-01-26T08:31:04-08:00
[INFO] Final Memory: 52M/259M
   ```

0. Get the address of the Jenkins server. To find (ignoring case)

   ```
   find . -iname "jenkins.war"
   ```

0. Copy to the target server the .hpi file which <a target="_blank" href="https://wiki.jenkins-ci.org/display/JENKINS/Plugin+Structure">defines a plug-in</a>:

   ```
cp <target>/performance.hpi <path_to_jenkins>/data/plugins
   ```

0. To fix <a target="_blank" href="http://stackoverflow.com/questions/33126279/jenkins-performance-plugin-for-jmeter">this</a>
switching report format to xml in jmeter properties file:

   ```
   jmeter.save.saveservice.output_format=xml
   ```

0. Configure the search pattern to select the files to be parsed by the Performance plugin. JMeter generates <strong>.jtl</strong> files.

0. Configure the error percentage thresholds which would make the project unstable or failed 

  
0. When no jobs are running, restart the Jenkins server to reload the plugin.

   Read more about plugins:

   * http://wiki.jenkins-ci.org/display/JENKINS/Checking+out+existing+plugins
   * http://wiki.jenkins-ci.org/display/JENKINS/Plugin+tutorial
   * http://wiki.jenkins-ci.org/display/JENKINS/Hosting+Plugins


<a id="Nodes">
## Nodes for scalability</a>
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

<a id="Node_Security">
### From a slave node</a>
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
But Jenkins is ALSO used for other types of work.
Nevertheless, the Jenkins term <strong>"build"</strong> 
is another word for what operating systems call a <strong>"job"</strong> (unit of batch work).

Builds/jobs can be automatically triggered several ways:

 * after other projects
 * periodically on a schedule
 * poll a version control system for changes


<a id="Plugins">
## Plugins</a>
0. Click **Manage Jenkins** on the left menu of the Dashboard screen.
1. Clikc **Manage Plugins**.
2. Click **Installed** tab to view what has been installed already.

   * Email Extension Plugin
   * Git Plugin
   * Graddle Plugin
   * SSH Slaves
   * Translation Assistance
   * Workspace Cleanup Plugin
   
   For Microsoft developers:

   * MSBuild
   * MSTest
   * MSTest Runner
   * VSTest Runner
0. Click **Available** tab has many plug-ins.

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


