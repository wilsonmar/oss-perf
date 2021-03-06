This page describes how to install JMeter.

Scripts are useful to save time and avoid mistakes, 
thus reducing troubleshooting frustrations.

## Contents
0. <a href="#Alternatives"> Alternatives to JMeter</a>
0. <a href="#ProvisioningOptions"> Options to provision JMeter slave machines</a>.

0. <a href="#TestFolder">Create run assets folder</a>
0. <a href="#InitialRun"> Invoke JMeter UI locally</a>
0. <a href="#GrantAccess">Grant Access to server</a>
0. <a href="#AccessMachine">Access headless JMeter server remotely</a>
0. <a href="#Addons">Install add-ons</a>
0. <a href="#Properties">Properties configuration</a>

0. <a href="#InvokeUI"> Invoke JMeter UI</a>
0. <a href="#TestPlanFolders"> Test Assets Folders</a>
0. <a href="#GetSampleTest"> Get Sample Test Assets from Github</a>
0. <a href="#SetupServerUnderTest"> Setup Python Server Under Test</a>
0. <a href="#ExamineAppCode"> Examine Sample App Code</a>
0. <a href="#ExamineSampleTest"> Examine Sample Test Plan Assets</a>
0. <a href="#PythonSetup"> Setup for Python</a>
0. <a href="#JMeterUI"> JMeter UI Run</a>
0. <a href="#RunBatch"> Run in Batch Mode</a>
0. <a href="#ViewLog"> View Log File</a>
0. <a href="#ViewResultTree"> View Result Tree</a>
0. <a href="#NewTestPlan"> New Test Plan</a>
0. <a href="#ThreadGroups"> Thread Groups</a>
0. <a href="#Workbench"> Workbench</a>
0. <a href="#TestPlan"> Test Plan Elements</a>
0. <a href="#Samplers"> Samplers</a>
0. <a href="#ConfigNodes"> Configuration Nodes</a>
0. <a href="#LogicControllers"> Logic Controllers</a>
0. <a href="#Timers"> Timers</a> (to add delays)
0. <a href="#PreProcessors"> Pre-Processors</a>
0. <a href="#PostProcessors"> Post-Processors</a>
0. <a href="#Listeners"> Listeners</a> (for reporting, logging, debugging)
0. <a href="#Attributes"> Attributes</a>
0. <a href="#Assertions"> Assertions</a> (for error checking)
0. <a href="#SimulateJavaScript"> Simulate JavaScript</a>
0. <a href="#SetupThreadGroup"> Setup Thread Group</a>
0. <a href="#tearDownThreadGroup"> tearDown Thread Group</a>
0. <a href="#Java"> Java SDK Pre-requisite</a>

0. <a href="#DiskSpace">Ensure enough disk space is available</a>
0. <a href="#Archival"> Periodic archival and clean-up</a>
1. <a href="#Resources">Resources for learning</a>


<hr />

<a name="Alternatives">
## Alternatives to JMeter</a>

* http://tsung.erlang-projects.org/

<a id="ProvisioningOptions">
## Options to provision JMeter slave machines</a>
JMeter is available several ways (each explained below):

   * <a href="#ManualInstall">Manually download and invoke setup of several steps.
   * <a href="#PackageInstall">Download and install using package managers Homebrew and Chocolatey</a>.
   * Locally running within a virual container such as Vagrant on a laptop.
   * In a PaaS (Platform as a service) running under Docker control.
   * <a href="#Amazon">In PaaS service AWS (Amazon Web Service)</a>.
   * <a href="#Blazemeter">In SaaS service Blazemeter.com</a>.
   * <a href="#FloodIO">In SaaS service Flood.io</a>.

<hr />

<a name="ManualInstall">
### Manually download and invoke setup of several steps.

You can follow what <a target="_blank" href="http://zacster.blogspot.com/2008/03/quick-howto-to-setup-jmeter.html">
Zac explained in 2008</a> and download from a mirror website on the
<a target="_blank" href="http://jmeter.apache.org/download_jmeter.cgi"> 
Apache download web page</a>,
then unzip, create a folder, move it, etc. and click OK through the setup program.

These instructions update instructions
<a target="_blank" href="http://biscminds.blogspot.fr/2011/12/quick-jmeter-setup-on-mac.html">
from 2011</a> when JMeter was still under the Apache Jakarta project.

http://www.apache.org/info/verification.html

PROTIP: It's simpler to use a package manager (see below).


<a id="PackageInstall">
### Install using package managers</a>
This is the quickest and easiest way that involves setting up a package manager:

 * <a href="#Download4Mac"> Homebrew on the Mac</a>
 * <a href="#Download4Win"> Chocolatey on Windows</a>

A package command can then be executed to both download and install a utility such as java and jmeter.

CAUTION: This approach involves downloading of files over the internet from a server that could be compromised.
So enterprises many download this way one time, analyze it for security, then populate the installer in an internal
Artifactory instance to serve files within the corporate firewalls.

NOTE: This is done by a user with admin permissions.

<a name="Download4Mac"> 
### Download, Install JMeter for Macs</a>

0. Use Homebrew on a Mac to install the java dependency:

   ```
   brew install java
   ```

0. Use Homebrew on a Mac ot install Jmeter:
   
   ```
   brew update
   brew install jmeter --with-plugins
   ```
  
  The response:
  
  ```
==> Downloading https://www.apache.org/dyn/closer.cgi?path=jmeter/binaries/apache-jmeter-2.13.tgz
==> Best Mirror http://mirror.stjschools.org/public/apache/jmeter/binaries/apache-jmeter-2.13.tgz
######################################################################## 100.0%
==> Downloading http://jmeter-plugins.org/downloads/file/JMeterPlugins-Standard-1.3.1.zip
==> Downloading from http://jmeter-plugins.org/files/JMeterPlugins-Standard-1.3.1.zip
######################################################################## 100.0%
==> Downloading http://jmeter-plugins.org/downloads/file/ServerAgent-2.2.1.zip
==> Downloading from http://jmeter-plugins.org/files/ServerAgent-2.2.1.zip
######################################################################## 100.0%
==> Downloading http://jmeter-plugins.org/downloads/file/JMeterPlugins-Extras-1.3.1.zip
==> Downloading from http://jmeter-plugins.org/files/JMeterPlugins-Extras-1.3.1.zip
######################################################################## 100.0%
==> Downloading http://jmeter-plugins.org/downloads/file/JMeterPlugins-ExtrasLibs-1.3.1.zip
==> Downloading from http://jmeter-plugins.org/files/JMeterPlugins-ExtrasLibs-1.3.1.zip
######################################################################## 100.0%
==> Downloading http://jmeter-plugins.org/downloads/file/JMeterPlugins-WebDriver-1.3.1.zip
==> Downloading from http://jmeter-plugins.org/files/JMeterPlugins-WebDriver-1.3.1.zip
######################################################################## 100.0%
==> Downloading http://jmeter-plugins.org/downloads/file/JMeterPlugins-Hadoop-1.3.1.zip
==> Downloading from http://jmeter-plugins.org/files/JMeterPlugins-Hadoop-1.3.1.zip
######################################################################## 100.0%
   ```

  You also get this message:

  ```
Error: The `brew link` step did not complete successfully
The formula built, but is not symlinked into /usr/local
Could not symlink bin/jmeter
/usr/local/bin is not writable.

You can try again using:
  brew link jmeter
==> Summary
🍺  /usr/local/Cellar/jmeter/2.13: 1,925 files, 108.6M, built in 2 minutes 19 seconds
   ```

0. If you also got the above error messages, take ownership of /usr/local/bin and try the symlink again:

   ```
  sudo chown -R $USER:admin /usr/local/bin
  brew link jmeter
   ```

  The response expected is:
  
  ```
  Linking /usr/local/Cellar/jmeter/2.13... 1 symlinks created
  ```
  
---------------


JMETER_BIN ???

Since <storng>apache-jmeter-2.12.zip</strong> was installed,
Homebrew saves jmeter to folder <strong>/usr/local/Cellar/jmeter/2.12/libexec</strong>.
This is good to know for adding plug-ins, whose
<strong>jar</strong> files go into JMeter's <strong>lib/ext</strong> (extension) folder.

Jar files contents should follow
http://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html

The <strong>pom.xml</strong> file in a github repository is used by maven to create jar files,
perhaps with a script such as:
https://draptik.wordpress.com/tag/pom-xml/

See https://ribblescode.wordpress.com/2012/04/16/how-to-run-jmeter-tests-with-maven/

Create the jar file using Maven ???

http://jmeter.lazerycode.com/

<a name="Download4Win"> 
### Install Chocolatey on Windows</a>

0. If you haven't already, open an internet browser, type or paste in URL:
  <a target="_blank" href="https://chocolatey.org/">https://chocolatey.org</a>.
0. Copy the whole @powershell command.
0. Open a command window
0. Paste the command to install Chocolatey.
0. Exit the browser.

#### <a name="JavaWindows"> Java SDK Windows Pre-requisite</a>
JMeter was written in Java. 
http://www.oracle.com/technetwork/java/javase/downloads/index.html

The path to the Java bin folder must be in the system PATH environment variable
so Java executables can be found. See https://wiki.apache.org/jmeter/TestRecording210

The path to JVM_HOME also needs to be defined, such as:

   ```
set JAVA_HOME=C:\jdk1.7.0_45
   ```

This is the same across operating systems, which is why JMeter can run on PC and Mac.


#### <a name="JMeterWindows"> JMeter on Windows</a>
0. Open a command window.
0. From the default folder (or anywhere), type or run this command (described at https://chocolatey.org/packages?q=jmeter).
  (Instead of `choco install jmeter -y`):
   
   ```
   cinst jmeter -y
   ```

   The -y confirms acceptance of the legal stuff.
   Chocolatey installs without prompting for more user interaction.
   So it's useful in server automation scripts.

0. Continue on to invoke the JMeter UI.

NOTE: Instructions here are based on Jmeter version 2.1.2 downloaded June 30, 2015.




WARNING: Because of what they do (pretending to be many clients), 
JMeter machines need significant network bandwidth and memory.
Usually many JMeter servers need to be used to generate enough load to 
stress out an application infrastructure.



<a id="GrantAccess">
## Grant Access to server</a>

0. The server needs to be setup with LDAP.
1. The SSH certificate for userids need to be installed on the server.
2. Group permissions need to be assigned to each user accessing the machine.


<a id="DockerServerInstall">
### Installation on a Docker server</a>
On a server, the easiest way is to run JMeter within Docker using
https://hub.docker.com/r/cirit/jmeter/
based on 
https://github.com/cagdascirit/docker-jmeter

<a target="_blank" href="https://plus.google.com/114432111742231285408/posts">
kowalcjZero</a> created a 
<a target="_blank" href="https://www.youtube.com/watch?v=RWkJl4OXTJI&list=PLAUamg5VPF5HAxDQlDVItNLfTBNzhpnW4">
series of videos</a> on JMeter in AWS EC2 and Vagrant box.

On a machine with Node, JMeter can be installed using NPM (Node Package Manager) via a Grunt task:

   * https://www.npmjs.com/package/grunt-jmeter

On Ubunto, see this 7-minute video (from Oct. 2014) about using apt-get:

   * https://www.youtube.com/watch?v=8_lEdaIUZRU

On a CentOS (Linux) machine, see https://www.centos.org/docs/5/html/yum/ (Yellow Update Modified) package manager for Centos.

0. Position to the folder under where JMeter will reside:

   ```
   cd /usr/local/bin
   pwd
   ls
   ```

   Files and folders already there include:
   `chattr.sh  chkwinbind.sh  rename2  showip.sh  winbash`

  However, <a target="_blank" href="http://testedandwrote.blogspot.com/2012/09/installing-jmeter-on-centoswill-work-on.html">
  this guy recommends</a>:
  
  ```
  cd /var/www/html
  ```
  
0. Use an internet browser to go to the URL listing bineary installers to download:

   ```
   http://jmeter.apache.org/download_jmeter.cgi
   ```
   
0. Right-click under Binaries to obtain the URL to download (*.zip):

   ![jmeter-download-link](https://cloud.githubusercontent.com/assets/300046/11106627/633db242-888c-11e5-9325-46f7e00a4514.png)

   
0. Create a curl command to download the JMeter zip file:

   ```
   curl -o apache-jmeter-2.13.zip  http://mirrors.koehn.com/apache//jmeter/binaries/apache-jmeter-2.13.zip
   ```
   
   Wait under the download summary shows 100%:
   
   ```
     % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                    Dload  Upload   Total   Spent    Left  Speed
100 35.9M  100 35.9M    0     0  1727k      0  0:00:21  0:00:21 --:--:-- 1895k
   ```

  Alternately, some prefer <a target="_blank" href="http://www.thegeekstuff.com/2009/09/the-ultimate-wget-download-guide-with-15-awesome-examples/">
  wget</a>.

0. Unzip apache-jmeter-*.zip:

   ```
   unzip apache-jmeter-2.13.zip
   ```
   
   This creates new folder apache-jmeter-2.13.

0. PROTIP: Rename the folder name so scripts referring to it do not need to be changed.

  If an existing version exists, rename it back to the version number.

   ```
   mv apache-jmeter-current  apache-jmeter-2.09
   ```
   
   Then:

   ```
   mv apache-jmeter-2.13  apache-jmeter-current 
   ```

<a name="Amazon">
### Amazon</a>
<a target="_blank" href="https://github.com/oliverlloyd/jmeter-ec2">https://github.com/oliverlloyd/jmeter-ec2</a>
Automates running Apache JMeter on Amazon EC2 


<a name="Blazemeter">
### Blazemeter.com SaaS service</a>
<a target="_blank" href="http://blazemeter.com/">Blazmeter.com</a>.


<a name="FloodIO">
### Flood.io SaaS service</a>

<a target="_blank" href="https://github.com/flood-io/ruby-jmeter">
The Ruby JMeter</a> from 
<a target="_blank" href="http://flood.io/">Flood.io</a>
is among the most forked among jmeter repos. 

It is used to work with the flood.io cloud testing service.

Python is one of several programming languages that JMeter can support.


<a name="Docker-JMeter">
### Docker</a>
This is an example:

   ```
# Pull base image.
FROM dockerfile/ubuntu

# Install Java.
RUN \
  echo debconf shared/accepted-oracle-license-v1-1 select true | debconf-set-selections && \
  echo debconf shared/accepted-oracle-license-v1-1 seen true | debconf-set-selections && \
  add-apt-repository -y ppa:webupd8team/java && \
  apt-get update && \
  apt-get install -y oracle-java7-installer

# Install JMeter
RUN \
  cd /tmp && \
  wget http://www.mirrorservice.org/sites/ftp.apache.org//jmeter/binaries/apache-jmeter-2.11.tgz && \
  tar xvzf apache-jmeter-2.11.tgz && \
  rm -f apache-jmeter-2.11.tgz && \
  mv /tmp/apache-jmeter-2.11 /apache-jmeter-2.11

ENV PATH /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/apache-jmeter-2.11/bin
# Define mountable directories.
VOLUME ["/data"]

# Define working directory.
WORKDIR /data
   ```


<hr />



<a id="AccessMachine">
## Access headless JMeter server remotely</a>
0. Open a terminal and type the ip address. For example:

   ```
   ssh 10.28.99.99
   ```

  NOTE: The -X (X11) parameter is not specified because iteraction with the server is not via a UI, only via command-line.

0. If the server is setup with LDAP, input your password.

   
To verify whether the program was installed in a way that can be invoked, invoke it:

0. Position the present active directory to JMeter's bin folder:

  ```
  cd bin
  ```

0. Invoke the shell command:

  ```
  sh jmeter
  ```

  The first time response:
  
  ```
java.util.prefs.FileSystemPreferences$1 run
INFO: Created user preferences directory.
  ```
  

  If this appears:
  
  ```
An error occurred: 
No X11 DISPLAY variable was set, but this program performed an operation which requires it.
  ```
  
  Type this on the main display before trying again:

  ```
export DISPLAY=:0.0
  ```
  
  An error occurred: Can't connect to X11 window server using ':0.0' as the value of the DISPLAY variable.
  
   NOTE: JMeter runs from the terminal window. Destroy the terminal window and JMeter GUI will go away too.


<a name="InitialRun">
## Invoke JMeter UI</a>
This is so the jmeter command can be processed from any folder (including where Jmeter .jmx files are stored).

0. To verify that the jmeter command is installed:

   ```
   which jmeter
   ```
   
   The response (on a Mac):
   
   `/usr/local/bin/jmeter`
   
0. Copy the output to your clipboard.
0. View the invocation file:
Position the present active directory to JMeter's bin folder:

  ```
  vi /usr/local/bin/jmeter
  ```

  The editor window should show:

   ```
#!/bin/bash
exec "/usr/local/Cellar/jmeter/2.13/libexec/bin/jmeter" "$@"
   ```

   Thus, when jmeter is invoked, it is called from the Homebrew Cellar.

   The $@ processes <a name="CmdLineOptions">additional command line options</a>
   specified with the jmeter command.

0. Exit the editor by typing <strong>:q</strong>.
0. Invoke the shell command:

  ```
  jmeter
  ```

  * Mac OSX uses jmeter.sh.

  * Windows uses jmeter.bat.

  The JMeter UI should appear in a new window after this:

```
log_file=jmeter.log java.io.FileNotFoundException: jmeter.log (Permission denied)
[log_file-> System.out]
2015/11/11 14:29:25 INFO  - jmeter.util.JMeterUtils: Setting Locale to en_US 
2015/11/11 14:29:25 INFO  - jmeter.JMeter: Loading user properties from: /usr/local/Cellar/jmeter/2.13/libexec/bin/user.properties 
2015/11/11 14:29:25 INFO  - jmeter.JMeter: Loading system properties from: /usr/local/Cellar/jmeter/2.13/libexec/bin/system.properties 
2015/11/11 14:29:25 INFO  - jmeter.JMeter: Copyright (c) 1998-2015 The Apache Software Foundation 
2015/11/11 14:29:25 INFO  - jmeter.JMeter: Version 2.13 r1665067 
2015/11/11 14:29:25 INFO  - jmeter.JMeter: java.version=1.8.0_60 
2015/11/11 14:29:25 INFO  - jmeter.JMeter: java.vm.name=Java HotSpot(TM) 64-Bit Server VM 
2015/11/11 14:29:25 INFO  - jmeter.JMeter: os.name=Mac OS X 
2015/11/11 14:29:25 INFO  - jmeter.JMeter: os.arch=x86_64 
2015/11/11 14:29:25 INFO  - jmeter.JMeter: os.version=10.10.5 
2015/11/11 14:29:25 INFO  - jmeter.JMeter: file.encoding=UTF-8 
2015/11/11 14:29:25 INFO  - jmeter.JMeter: Default Locale=English (United States) 
2015/11/11 14:29:25 INFO  - jmeter.JMeter: JMeter  Locale=English (United States) 
2015/11/11 14:29:25 INFO  - jmeter.JMeter: JMeterHome=/usr/local/Cellar/jmeter/2.13/libexec 
2015/11/11 14:29:25 INFO  - jmeter.JMeter: user.dir  =/usr/local/bin 
2015/11/11 14:29:25 INFO  - jmeter.JMeter: PWD       =/usr/local/bin 
2015/11/11 14:29:25 INFO  - jmeter.JMeter: IP: 10.2.41.166 Name: 15mbp-10681 FullName: 10.2.41.166 
2015/11/11 14:29:25 INFO  - jmeter.gui.action.LookAndFeelCommand: Using look and feel: com.apple.laf.AquaLookAndFeel [Mac OS X, System] 
2015/11/11 14:29:25 INFO  - jmeter.JMeter: Loaded icon properties from org/apache/jmeter/images/icon.properties 
2015/11/11 14:29:27 INFO  - jmeter.engine.util.CompoundVariable: Note: Function class names must contain the string: '.functions.' 
2015/11/11 14:29:27 INFO  - jmeter.engine.util.CompoundVariable: Note: Function class names must not contain the string: '.gui.' 
2015/11/11 14:29:27 INFO  - jmeter.util.BSFTestElement: Registering JMeter version of JavaScript engine as work-round for BSF-22 
2015/11/11 14:29:28 INFO  - jmeter.protocol.http.sampler.HTTPSamplerBase: Cannot find .className property for htmlParser, using default 
2015/11/11 14:29:28 INFO  - jmeter.protocol.http.sampler.HTTPSamplerBase: Parser for text/html is  
2015/11/11 14:29:28 INFO  - jmeter.protocol.http.sampler.HTTPSamplerBase: Parser for application/xhtml+xml is  
2015/11/11 14:29:28 INFO  - jmeter.protocol.http.sampler.HTTPSamplerBase: Parser for application/xml is  
2015/11/11 14:29:28 INFO  - jmeter.protocol.http.sampler.HTTPSamplerBase: Parser for text/xml is  
2015/11/11 14:29:28 INFO  - jmeter.protocol.http.sampler.HTTPSamplerBase: Parser for text/vnd.wap.wml is org.apache.jmeter.protocol.http.parser.RegexpHTMLParser 
2015/11/11 14:29:28 INFO  - jmeter.gui.util.MenuFactory: Skipping org.apache.jmeter.protocol.http.control.gui.WebServiceSamplerGui 
2015/11/11 14:29:28 INFO  - jmeter.gui.util.MenuFactory: Skipping org.apache.jmeter.protocol.http.modifier.gui.ParamModifierGui 
2015/11/11 14:29:28 INFO  - jorphan.exec.KeyToolUtils: keytool found at 'keytool' 
2015/11/11 14:29:28 INFO  - jmeter.protocol.http.proxy.ProxyControl: HTTP(S) Test Script Recorder SSL Proxy will use keys that support embedded 3rd party resources in file /usr/local/Cellar/jmeter/2.13/libexec/bin/proxyserver.jks 
2015/11/11 14:29:28 INFO  - jmeter.samplers.SampleResult: Note: Sample TimeStamps are START times 
2015/11/11 14:29:28 INFO  - jmeter.samplers.SampleResult: sampleresult.default.encoding is set to ISO-8859-1 
2015/11/11 14:29:28 INFO  - jmeter.samplers.SampleResult: sampleresult.useNanoTime=true 
2015/11/11 14:29:28 INFO  - jmeter.samplers.SampleResult: sampleresult.nanoThreadSleep=5000 
```


## <a name="InvokeUI"> Invoke JMeter UI</a>
1) Open a new command or terminal window.

2) Invoke the JMeter UI by typing in `Jmeter`.

  On the PC this invokes <strong>Jmeter.bat</strong>.

  Wait for the JMeter window to appear.

  WARNING: Do not dismiss the command/terminal window which invoked JMeter.

3) Press command + N or click menu <strong>File | Open</strong>.

  On a Mac, notice the default location of test plans is <strong>usr</strong>.
  
  Notice the file format is JMeter [<strong>.jmx</strong>].
  
4) Select menu Open.

5) Navigate to the test plan file described above: `/Users/wilsonmar/Downloads/99bottles-jmeter-master`

6) Make sure menu <strong>Options | Log Viewer</strong> is checked so logs appear in the lower-right pane.

7) To see more log entries, click on the edge above the log pane.
   Scroll to the far left of log entries.
   
8) Run the test from the JMeter UI one of several ways:

  * Click the Run button
  * Select menu Run | Start
  * Press command + R.

9) During the run, at the upper-right corner in the gray bar is "0/1".



<a id="TestFolder">
## Create run assets folder</a>
0. To ensure that jmeter can be invoked from this data folder, add it to the end of the server's program path:

   ```
   echo $PATH
   ```
   
   The response are paths separated by a colon:
   
   `/usr/lib64/qt-3.3/bin:/usr/local/bin:/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/sbin:/home/CONCUR/wmar/bin`

0. Since root access is necessary:

   ```
   su
   ```

0. Add the JMeter path obtained in the previous step:

   ```
   echo 'pathmunge /usr/local/bin/jmeter' > /etc/profile.d/custompath.sh
   ```

0. Make the new file executable:

   ```
   chmod +x /etc/profile.d/custompath.sh
   ```
   
0. Type this command, including the period and space, to reload profile settings and add the directory to the path:
   
   ```
   . /etc/profile
   ```

0. If you don't already have one, create a workspace folder (and not necessary named ws under Users home):

   ```
   cd ~/
   pwd
   mkdir ws
   cd ws
   ```

0. Under the workspace folder, create a folder to all jmeter tests:

   ```
   mkdir jmeter
   cd jmeter
   ```

0. Verify:

   ```
   cd ~/ws/jmeter
   ls
   ```

0. Verify jmeter can be invoked from a data folder:

   ```
   jmeter --version
   ```

   The response is a 

<a name="CmdLineOptions">
## JMeter Command Line Options</a>


   ```
Usage
  -h, --help
    print usage information and exit
  -v, --version
    print the version information and exit
  -p, --propfile <argument>
    the jmeter property file to use
  -q, --addprop <argument>
    additional JMeter property file(s)
  -t, --testfile <argument>
    the jmeter test(.jmx) file to run
  -l, --logfile <argument>
    the file to log samples to
  -j, --jmeterlogfile <argument>
    jmeter run log file (jmeter.log)
  -n, --nongui
    run JMeter in nongui mode
  -s, --server
    run the JMeter server
  -H, --proxyHost <argument>
    Set a proxy server for JMeter to use
  -P, --proxyPort <argument>
    Set proxy server port for JMeter to use
  -N, --nonProxyHosts <argument>
    Set nonproxy host list (e.g. *.apache.org|localhost)
  -u, --username <argument>
    Set username for proxy server that JMeter is to use
  -a, --password <argument>
    Set password for proxy server that JMeter is to use
  -J, --jmeterproperty <argument>=<value>
    Define additional JMeter properties
  -G, --globalproperty <argument>=<value>
    Define Global properties (sent to servers)
    e.g. -Gport=123
     or -Gglobal.properties
  -D, --systemproperty <argument>=<value>
    Define additional system properties
  -S, --systemPropertyFile <argument>
    additional system property file(s)
  -L, --loglevel <argument>=<value>
    [category=]level e.g. jorphan=INFO or jmeter.util=DEBUG
  -r, --runremote
    Start remote servers (as defined in remote_hosts)
  -R, --remotestart <argument>
    Start these remote servers (overrides remote_hosts)
  -d, --homedir <argument>
    the jmeter home directory to use
  -X, --remoteexit
    Exit the remote servers at end of test (non-GUI)
   ```

0. Specify settings as appropriate:

   * **remote_hosts** - remote JMeter hosts, separated by commas.

   * **not_in_menu**  - With the help of this you can customize your JMeter by allowing only those components to display which you want to by listing their classname or their class label.

   * **user.properties** - Addition JMeter properties are contained in this file and are added before the -q and -J options are processed and after the initial property file.

   * **xml.parser** - The default value is: org.apache.xerces.parsers.SAXParser. An implementation can be specified as XML parser.

   * **search_paths** - lists of paths to search JMeter add-on classes by JMeter such as additional samplers which is in addition to the jars kept in  lib/ext directory.

   * **system.properties**  - additional system properties added before the -S and -D options are processed.

   * **user.classpath** - The path to be searched for utility classes by JMeter in addition to jars kept in lib directory.

   * **ssl.provider** - If built-in Java implementation are not provided, the class can be specified by you for your SSL implementation.



<a id="JMeterGlobals">
## Global Properties</a>
0. Verify where Jmeter is invoked from:

   ```
   which jmeter
   ```
   
   The response (on a Mac):
   
   `/usr/local/bin/jmeter`
   
   Alternately, three is a problem if this appears:
   
   `/usr/bin/which: no jmeter in (/usr/lib64/qt-3.3/bin:/usr/local/bin:/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/sbin:/home/CONCUR/wmar/bin)`

0. In the bin folder where Jmeter was installed:

   ```
   cd /usr/local/bin
   ```

0. Use a text editor to open file <strong>jmeter.properties</strong>.

   PROTIP: If github is used, this file should be copied from github to the installer.




## <a name="Plugins"> JMeter Plug-ins</a>
Plug-ins extend the capability of JMeter.

In Eclipse IDE, export it to a JAR.

* https://github.com/undera/jmeter-plugins (described in http://jmeter-plugins.org/wiki/PluginInstall/)
  are shown in menus prefixed with "jp@gc".

* https://github.com/ATLANTBH/jmeter-components.
  provides samplers for JSON, OAuth, HBase and Hadoop, etc.

* https://github.com/afranken/jmeter-analysis-maven-plugin
is a Maven plugin that parses JMeter result XML files and generates detailed reports with charts
Can be used in combination with the JMeter Maven Plugin 
https://github.com/afranken/jmeter-analysis-maven-plugin
developed by the same author.

* http://stackoverflow.com/users/460802/ubik-load-pack

* https://github.com/flood-io/ruby-jmeter
  is a Ruby based DSL (Domain Specific Language) for building JMeter test plans 


## <a name="RunBatch"> Run in Batch Mode</a>
JMeter is often invoked automatically by a continuous integration tool such as Jenkins.
See https://wiki.jenkins-ci.org/display/JENKINS/Performance+Plugin.

1) Open a command (terminal) window.

2) Type cd and paste the file path to the test plan.

3) Type:

```
jmeter -n -t "Test Plan.jmx" -l run001.jtl
```

* Parameter `-n` specifies no GUI.
* Parameter `-t "Test Plan.jmx"` specifies the test plan.
* Parameter `-l run001.jtl` specifies the text file to hold results from the run. See http://wiki.apache.org/jmeter/JtlFiles.
* Parameter `-p parameters.txt` specifies the parameters to define.

PROTIP:
Avoid using spaces in test plan names.

Example response to the Terminal:

```
Creating summariser <summary>
Created the tree successfully using Test Plan.jmx
Starting the test @ Sat Jul 04 06:45:16 MDT 2015 (1436013916367)
Waiting for possible shutdown message on port 4445
summary +    876 in  14.3s =   61.4/s Avg:   129 Min:     0 Max:  2011 Err:   876 (100.00%) Active: 10 Started: 10 Finished: 0
summary +    124 in   2.1s =   58.4/s Avg:   146 Min:     0 Max:  2005 Err:   124 (100.00%) Active: 0 Started: 10 Finished: 10
summary =   1000 in  14.4s =   69.5/s Avg:   131 Min:     0 Max:  2011 Err:  1000 (100.00%)
Tidying up ...    @ Sat Jul 04 06:45:31 MDT 2015 (1436013931672)
... end of run
(env1)
```

## <a name="ViewLog"> View Log File</a>

4) View the list of files with file sizes:

```
ls -all
```

In this example, the output file as 211,148 bytes:

```
  -rw-r--r--    1 wilsonmar  staff  211148 Jul  4 06:45 run001.jtl
```

5) Open the file using a text editor:

```
1436013917275,67,HTTP Request,Non HTTP response code: org.apache.http.conn.Http$
```


<a name="DiskSpace">
## Ensure enough disk space is available</a>


<a name="Archival">
## Periodic archival and clean-up</a>


<a name="Resources">
## Resources for learning</a>

* http://www.javacodegeeks.com/2014/11/jmeter-tutorial-load-testing.html
* https://www.youtube.com/watch?t=933&v=8D6nKml88vE by Ashish Takur, who also published paid content at
* http://loadrunnerjmeter.com
* http://www.pluralsight.com/courses/java-web-fundamentals by Kevin Jones about creating Java servlets,
  filters (controllers), and listeners. These are build using IntelliJ, built using Maven,
  and run on Tomcat.apache.org web servers.
* https://www.youtube.com/watch?v=4mfFSrxpl0Y JMeter Load Testing Beginner Tutorial
* https://www.youtube.com/watch?v=cv7KqxaLZd8 Learn JMeter in 60 minutes by Ophir of BlazeMeter


