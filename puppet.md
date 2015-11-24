Contents:

  * <a href="#ResourceDeclarations"> Resource Declarations</a>
  * <a href="#PuppetMaster"> Puppet Master</a>
  * <a href="#Pulp"> Pulp Version Control</a>
  * <a href="#Infrastructure"> Infrastructure</a>
  * <a href="#Videos"> Resources: videos</a>
  * <a href="#Alternatives"> Alternatives (Chef)</a>

<hr />

Puppet achieves the desired state of 
what is declared in **<a href="#ResourceDeclarations">resource declarations</a>** submitted to it.

| Type | ensures |
| ---- | ------- |
| package | installed |
| file | present |
| user | present |
| service | running |

This is a less time-consuming and error-prone approach than procedural shell scripits.

Thus, Puppet automates repetitive tasks to ensure consistency among servers.

Puppet declarations specify **generic** resources,
so providers in Puppet's Resource Abstraction Layer resolves differences 
among various operating systems and its package managers 
when implementing Puppet XML specs.

| OS | package provider | Notes |
| ---- | ------- | --- |
| Red Hat | yum install | - |
| Ubuntu | apt install| - |
| Windows | Windows Nu-get | Chocolatey command `cinst install package` |
| Mac OSX | Homebrew install | command `brew install package` |

Alternatives to Puppet include Chef, Ansable, Salt, CF Engine (Ruby).



<a id="ResourceDeclarations">
## Resource Declarations</a>
Puppet handles different type of resources (Package, File, Service).

  ```
  node 'injector01' {
    package { 'jmeter':
      ensure => 'installed',
    }
  }
  file { '/readme.txt':
    ensure => 'present',
    content => "This file was created by Puppet",
  }
  user { 'larry':
    ensure => 'present',
    gid => sysadmin,
    home => /mnt/home/larry,
  }
  service { 'ntpd':
    ensure => 'running',
    enable => true,
    subscribe => Package['ntp'],
  }
  ```

The first line specifies the resource type and title of the program.
The => in attribute definitions is called a "fat commaa".
Note the last line can contain a comma. Very cool.

Puppet does not run resources in top-down sequence.

<a id="Commands">
## Commands</a>
0. Get a list of users and their properties:

 ```
 puppet resource user >users.pp
 ```

 Note the output is JSON format.

 **Facter** discovers current inventory data every time puppet runs.
 The facts are written to operating system variables,
 so conditional logic can be performed.

 ```
 echo $operatingsystem
 ```

0. Facter facts are in pure Ruby.

 ```
 Facter.add( computername ) do
    confine :kernel => :darwin
    setcode( scutil --get ComputerName )
 end
 Facter.add( printerlist ) do
    setcode( scutil --get ComputerName )
       $x( lpstat -a | cut -d ' ' -f 1).split("\n").join(",")
    end
 end
 ```
 
<a id="PuppetForge">
## Puppet Forge</a>
https://www.youtube.com/watch?v=eT2TtqvqSSg

<a id="PuppetMaster">
## PuppetMaster</a>
Puppet manifests, hierdata, and modules 
can be stored in a central **Puppet Master** server for distribution to all Puppet **nodes**.

The Puppet Master is written in Ruby on Rails for Linux (no Windows version).

Each node **pulls** its configuration over its TCP port 8140 from the Puppet Master via RPM.
The node sends information about itself like its OS, CPU, block devices, network
collected by a facter on the node.

The Puppet Master requires manual creation of a SSH certificate to each node.

The master classifies node information and defines a catalog containing dependencies in a **manifest**
sent to a node to enforce.


<a id="NoMaster"> 
## No Master</a>
A manifest .pp file can be applied to a Puppet node locally by a command such as:

 ```
 puppet apply --_modulepath_/etc/puppet/modules ${HOSTTYPE}.pp
 ```

This references modules sent to nodes via RPM.
(Instead of RPM, use <a target="_blank" href="https://github.com/jordansissel/fpm">FPM</a>?)

After yum finishes installing puppet, an "at" script runs a RPM %postinst command to apply the Puppet config.

The above is advocated by Sam Bashton on https://www.youtube.com/watch?v=H-QYYhIUclQ
"Continuously Integrated Puppet in a Dynamic Environment" at PuppetConf 2013
with slides at http://www.slideshare.net/PuppetLabs/bashton-masterless-puppet
advocates a master-less Puppet within EC2 using Centos machines.

Sam likes use of a master like herding "pets".

He prefers to manage servers like a herd (of cattle).

His machines boot with a common, blank image on AWS and get configured at first boot
(rather than different images with software already installed).

And manifests can be set to be read only by root.


<a id="Pulp"> 
## Pulp Version Control</a>
<a target="_blank" href="http://www.pulpproject.org/">http://www.pulpproject.org/</a>
is a centralized repository to manage revisions of specs in Puppet.

Pulp can scan all manifests to get lists such as which **version** of software is installed across all machines.

Pulp replicates its manifest repository across availability zones, which Puppet Masster does not do,
which makes the Puppet Masters a single location point of failure.

From github, Pulp **clones** and copies repos from qa to stage to live.

Jenkins:

 0. fetches code from git, 
 1. runs lint test (using the Jenkins Warnings plugin)
 2. pull in modules (using librarian-puppet),
 3. builds a RPM which, 
 3. if tests are successful, are 
 4. added to a Pulp repo and installed on target machines (using Jenkins Promoted build plugin)


<a id="Infrastructure">
## Infrastructure</a>

AWS CloudFormation manages infrastructure.

Extra facts from CloudFormation templates:

 ```
 FACTER_HOSTENVIRONMENT=live
 FACTER_STACKNAME=customer-web-live
 ```
 
Keep database password to only machines which need them in:

 ```
 FACTER_DBHOST=xyz
 ```

Discover other information using EC2 API.


Look into:
http://github.com/fanduel/hiera-cloudformation


<a id="CloneChocoPkg">
## Clone Choco JMeter package for internal Artifactory</a>

0. Define the folder to download from instead of Chocolatey. 
   There is likely a hierarchy of utilities such as Java, 7zip, etc.

0. From https://chocolatey.org/packages/jmeter
0. Scroll down to click Download.
0. Save Jmeter.2.12.nupkg (Binary File 4.5KB) from https://packages.chocolatey.org
0. Change extension from .nupkg to .zip.
0. Open file using unzip.
0. Drill into folder jmeter.2.12
0. Open .ps1 in Sublime.
0. Change the download url to the one identified in the first step above.

    ```
$url = 'http://archive.apache.org/dist/jmeter/binaries/apache-jmeter-2.12.zip' # download url
    ```

0. Zip the changed folder.
0. Rename the file exention to .nupkg.
0. Calculate SHA1 and MD5 hashes.
0. Put the hash values into 32-byte SHA1 and 40-byte MD5 files.
0. Open the Artifactory web aapp and upload to the folder designated.

0. Try it on a new build (to verify SHA1 and MD5).
0. Try this to update an existing JMeter (with a previous version).

<a id="InstallChoco">
## Puppet install from internal Choco package on Windows</a>
The objective here is to start with a newly provisioned Windows server and
populate it with all utilities and applications needed.

Using one command.

For example, after a server is provisioned with Application Cluster: **p1w** (Performance server on Windows),
Puppet recognizes that tag and installs apps associated with p1w:

    1. Windows Explorer settings to show file extensions, etc.
    2. Network shares to app-specific test data files on a filer

    4. Firefox
    5. Chrome
    6. Favorites in Internet Explorer and other browsers

    7. Java 8 (file jdk-8u66-windows-x64.exe for Windows)
    8. Java 7 (for backward compatibility some utilities require?)
    9. 7Zip
    10. Other utilities?

    11. JMeter
    12. TestNG
    13. Selenium
    14. Appium
    15. LoadRunner


<a id="Videos">
## Resources: videos</a>

https://www.youtube.com/watch?v=TdAmAj3eaFI
Getting Started with Puppet - PuppetConf 2013

https://www.youtube.com/watch?v=8wTiFUZDVfo
Getting Started with the Learning Puppet VM

https://www.youtube.com/watch?v=Hiu_ui2nZa0
Intro to puppet ( slides + install screencast ) on Amazon EC2, with mistakes done purposely
by Patrick Viet

https://www.youtube.com/watch?v=76qeLNMHgF4
Learning Puppet Manifests

https://www.youtube.com/watch?v=tPNlvRbY0pA
Demo of Puppet Enterprise

https://www.youtube.com/watch?v=gwUEnkRKABU
Setting up a Git Commit Workflow with Puppet Enterprise

http://www.pluralsight.com/courses/puppet-system-administrators-fundamentals
by Ben Piper (@_benpiper, <a target="_blank" href="http://benpiper.com/">benpiper.com</a>)
explains in 5.5 hours how to setup a MediaWiki web server that runs Apache, PHP & MySQL on CentOS 6.5,
via a Puppet Master.

https://www.youtube.com/watch?v=HoklH_ohfDA
Puppet Module Best Practices - Puppet Camp SIlicon Valley 2014



<a id="Alternatives">
## Alternatives: Chef </a>
Alternatives to Puppet include Chef or Ansible (Red Hat) or Salt.


### Chef snippit to start wiremock server

  ```
  function start {
    cd "${USER_DIRECTORY}";
    java -jar wiremock-${WIREMOCK_VERSION}-standalone.jar
      --port ${PORT}
      --proxy-via= ${PROXY-VIA}
      --proxy-all= ${PROXY-ALL}
      --verbose > /var/log/wiremock.log 
      2>&1 &
  }
  ```
  
### Call Chef from AWS Cloud Formation

  ```
  "5_run_chef": {
    "command": { "Fn::Join": [ "", 
      [ "/usr/bin/chef-solo -c /var/chef/config/solo.rb -o 'role[", 
        { "Ref": "Role" }, "]' -E '",
        { "Ref": "Environment" },
        "'" ]
      ]
  }
  ```
