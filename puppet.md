Contents:

  * <a href="#ResourceDeclarations"> Resource Declarations</a>
  * <a href="#PuppetMaster"> Puppet Master</a>
  * <a href="#Pulp"> Pulp Version Control</a>
  * <a href="#Infrastructure"> Infrastructure</a>
  * <a href="#Videos"> Resources: videos</a>

<hr />

Puppet achieves what is declared in **<a href="#ResourceDeclarations">resource declarations</a>** submitted to it.

| Type | ensures |
| ---- | ------- |
| package | installed |
| file | present |
| service | running |

This is a less time-consuming and error-prone approach than procedural shell scripits.

Puppet declarations specify **generic** resources,
so providers in Puppet's Resource Abstraction Layer resolves differences 
among various operating systems and its package managers 
when implementing Puppet XML specs.

| OS | package provider |
| ---- | ------- |
| Red Hat | yum |
| Ubuntu | apt |
| Windows | Windows |

Alternatives to Puppet include Chef, Ansable, Salt, CF Engine (Ruby).

The Puppet Master is written in Ruby on Rails for Linux (no Windows version).

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
  service { 'ntpd':
    ensure => 'running',
    enable => true,
  }
  ```

The first line specifies the type and title of the program.
The => in attribute definitions is called a "fat commaa".
Note the last line can contain a comma. Very cool.

Puppet does not run resourses in top-down sequence.

<a id="PuppetMaster">
## PuppetMaster</a>
Puppet manifests, hierdata, and modules 
can be stored in a central **Puppet Master** server for distribution to all Puppet **nodes**.

Each node **pulls** its configuration over its TCP port 8140 from the Puppet Master via RPM.
The node sends information about itself like its OS, CPU, block devices, network
collected by a facter on the node.

The Puppet Master requires manual creation of a SSH certificate to each note.

The master classifies node information and defines a catalog containing dependencies in a **manifest**
sent to a node to enforce.


<a id="NoMaster"> 
## No Master</a>
A manifest .pp file can be applied to a Puppet node locally by a command such as:

 ```
 puppet apply --_modulepath_/etc/puppet/modules example.pp
 ```

This references modules sent to nodes via RPM.

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

Pulp can scan all manifests to list which **version** of software is installed across all machines.

Pulp replicates its manifest repository across availability zones, which Puppet Masster does not do,
which makes the Puppet Masters a single point of failure.

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

AWS Cloud Formation manages infrastructure.

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
explains in 5.5 hours how to setup a MediaWiki web server that runs Apache, PHP & MySQL on CentOS 6.5.

https://www.youtube.com/watch?v=HoklH_ohfDA
Puppet Module Best Practices - Puppet Camp SIlicon Valley 2014
