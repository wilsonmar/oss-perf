This page describes how to install JMeter.

## Contents
0. <a href="#ProvisioningOptions"> Options to provision JMeter slave machines</a>.
0. <a href="#Java"> Java SDK Pre-requisite</a>
0. <a href="#Download4Mac"> Download JMeter for Macs</a>
0. <a href="#Download4PC"> Download JMeter for PCs</a>

0. <a href="#Provision">Provision JMeter slave machine</a>
0. <a href="#Installation">Install jmeter locally</a>
0. <a href="#TestFolder">Create run assets folder</a>
0. <a href="#InitialRun"> Invoke JMeter UI locally</a>

0. <a href="#GrantAccess">Grant Access to server</a>
0. <a href="#AccessMachine">Access headless JMeter server remotely</a>

0. <a href="#Addons">Install add-ons</a>
0. <a href="#Properties">Properties configuration</a>

0. Ensure enough disk space is available.
0. Periodic archival and clean-up.


<hr />

<a id="ProvisioningOptions">
## Options to provision JMeter slave machines</a>
JMeter is available several ways (each explained below):

   * <a href="#ManualInstall">Manually download and invoke setup of several steps.
   * <a href="#PackageInstall">Download and install using package managers Homebrew and Chocolatey</a>.
   * Locally running within a virual container such as Vagrant on a laptop.
   * In a PaaS (Platform as a service) running under Docker control.
   * In a SaaS service such as what <a target="_blank" href="http://blazemeter.com/">Blazmeter.com</a> provides.

<hr />

<a name="ManualInstall">
### Manually download and invoke setup of several steps.

You can follow what <a target="_blank" href="http://zacster.blogspot.com/2008/03/quick-howto-to-setup-jmeter.html">
Zac explained in 2008</a> and download from a mirror website on the
<a target="_blank" href="http://jmeter.apache.org/download_jmeter.cgi"> 
Apache download web page</a>,
then unzip, create a folder, move it, etc. and click OK through the setup program.

PROTIP: It's simpler to use a package manager (see below).


<a id="PackageInstall">
### Install using package managers</a>
This is the quickest and easiest way that involves setting up a package manager:

 * <a href="#Download4Mac"> Homebrew on the Mac</a>
 * <a href="#Download4Win"> Chocolatey on Windows</a>

These instructions update instructions
<a target="_blank" href="http://biscminds.blogspot.fr/2011/12/quick-jmeter-setup-on-mac.html">
here from 2011</a> when JMeter was still under the Apache Jakarta project.

http://www.apache.org/info/verification.html

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
1. Paste the command to install Chocolatey.
0. Exit the command.

### Using Chocolatey on Windows:
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


## <a name="Java"> Java SDK Pre-requisite</a>
JMeter was written in Java. 
http://www.oracle.com/technetwork/java/javase/downloads/index.html

The path to the Java bin folder must be in the system PATH environment variable
so Java executables can be found. See https://wiki.apache.org/jmeter/TestRecording210

The path to JVM_HOME also needs to be defined, such as 
set JAVA_HOME=C:\jdk1.7.0_45

This is the same across operating systems, which is why JMeter can run on PC and Mac.




WARNING: Because of what they do (pretending to be many clients), 
JMeter machines need significant network bandwidth and memory.
Usually many JMeter servers need to be used to generate enough load to 
stress out an application infrastructure.

Scripts are useful to save time and avoid mistakes, 
thus reducing troubleshooting frustrations.

<a id="GrantAccess">
## Grant Access to server</a>

0. The server needs to be setup with LDAP.
1. The SSH certificate for userids need to be installed on the server.
2. Group permissions need to be assigned to each user accessing the machine.


<a id="ServerInstall">
### Installation on a server</a>
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



<a id="Addons">
## Add-ons</a>
For easier invocation, the
<a target="_blank" href="https://wiki.jenkins-ci.org/display/JENKINS/Performance+Plugin">
Performance Plugin</a> from https://github.com/jenkinsci/performance-plugin.

For managed devops:
https://xebialabs.com/community/webinars/dzone-presents-seamless,-scalable-test-management-using-jenkins-and-xebialabs-software/

   * Xebialabx.com
   * https://www.youtube.com/channel/UC3XtKwSYyeQfGirLL_IW_Qw

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

