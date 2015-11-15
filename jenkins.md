Jenkins is open-source Java software (running under a Tomcat web server)
to invoke jobs on a schedule ("continuosly")
such as for building software and conducting tests.

<a id="Install">
## Installation</a>
To install on a Centos machine, follow instructions at:

 * https://wiki.jenkins-ci.org/display/JENKINS/Installing+Jenkins+on+Red+Hat+distributions

Installers for other os:

 * <a target="_blank" href="http://jenkins-ci.org">http://jenkins-ci.org</a>

By default, Jenkins stores its configuration files in the user's home folder at `~/.jenkins`.

Jenkins can be started for a specific port:

 ```
 java -jar jenkins.war --httpPort=8081
 ```

A Jenkins server can scale by adding **nodes** to spread build work across several servers running different operating systems.

Several **executors** can be running simultaneously.

Jenkins slave nodes can be started by the master using several launch methods:

 * Launch slave agents on Unix machines via SSH
 * Launch slave agents via Java Web Start
 * Launch slave via execution of command on the Master
 * Let Jenkins control this Window slave as a Windows service

<a id="Plugins">
## Plugins</a>
Jenkins has many plug-ins.

  * https://www.youtube.com/watch?v=XY-ZB3FRnxw 
    Jenkins Tutorial - Part 01: Introduction & installation by Chandra Shekhar Reddy

  * https://wiki.jenkins-ci.org/display/JENKINS/Performance+Plugin
  sets the final build status (as good, unstable or failed) based on the reported error percentage. 

http://www.cloudbees.com/
Cloudbees hosts Jenkins in the cloud.


The plugin:
https://wiki.jenkins-ci.org/display/JENKINS/Parameterized+Remote+Trigger+Plugin
triggers parameterized builds on other jenkins servers. 
This would centralize a single store of credentials.

.jenkins folder is created in the home folder.

Which tcp port used? (8005 sharing, 8009, 8080) 

  ```
  netstat -anp | grep java
  ```

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
