Contents:

  * <a href="#ResourceDeclarations"> Resource Declarations</a>
  * <a href="#PuppetMaster"> Puppet Master</a>
  * <a href="#Pulp"> Pulp Version Control</a>
  * <a href="#Infrastructure"> Infrastructure</a>
  * <a href="#Videos"> Resources: videos</a>

<hr />

Unlike procedural shell scripits, 
Puppet achieves what is declared in **<a href="#ResourceDeclarations">resource declarations</a>** submitted to it,
a less time-consuming and error-prone approach.

Puppet declarations specify **generic** resources,
so Puppet's Resource Abstraction Layer resolves differences among various operating systems and its package managers 
when implementing Puppet XML specs.

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
  service { 'ntpd':
    ensure => 'running',
    enable => true,
  }
  ```

The first line specifies the title.
The second line contains the type.

| Type | ensures |
| ---- | ------- |
| package | installed |
| file | present |
| service | running |

note each resource declaration consists of:

  * Attributes/parameter
  * Provider

The last line can contain a comma.

Puppet does not run resourses in top-down sequence.

<a id="PuppetMaster">
## PuppetMaster</a>
Puppet manifests, hierdata, and modules 
can be stored in a central **Puppet Master** server for distribution to all Puppet **nodes**.

Each node **pulls** its configuration over TCP port 8140 from the Puppet Master via RPM.

Puppet is written in Ruby on Rails for Linux (no Windows version).

 <a id="Pulp"> 
 ## Pulp Version Control</a>

<a target="_blank" href="http://www.pulpproject.org/">http://www.pulpproject.org/</a>
is a centralized repository to manage revisions of specs in Puppet.


<a id="Infrastructure">
## Infrastructure</a>

AWS Cloud Formation manages infrastructure.

Machines boot with a common, blank image and get configured at first boot
rather than different images with software already installed.

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

https://www.youtube.com/watch?v=H-QYYhIUclQ
Continuously Integrated Puppet in a Dynamic Environment - PuppetConf 2013
(Masterless Puppet on EC2 using Centos) by Sam Bashton.
Slides at http://www.slideshare.net/PuppetLabs/bashton-masterless-puppet

http://www.pluralsight.com/courses/puppet-system-administrators-fundamentals
by Ben Piper (@_benpiper, <a target="_blank" href="http://benpiper.com/">benpiper.com</a>)
explains in 5.5 hours how to setup a MediaWiki web server that runs Apache, PHP & MySQL on CentOS 6.5.
