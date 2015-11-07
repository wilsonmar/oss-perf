This page describes the steps to the different ways of installing the ELK stack.

However, we want a simple way to make it repeatable.
The options:

* <a href="#Manual"> Manual download</a>
* <a href="#Amazon"> Amazon Elastic Service</a>
* <a href="#Docker"> Docker and Puppet</a>



<hr />
<a id="Manual"> 
### Manual Download</a>
The downloads page at Elastic.co provides installers:

  * <a target="_blank" href="https://www.elastic.co/downloads">https://www.elastic.co/downloads</a>


<a id="Amazon"> 
### Amazon Elastic Service</a>
Perhaps the easiest way to setup an ELK stack is to use Amazon's Elasticsearch service intorduced October, 2015.
As with other AWS services, Amazon takes care of operating system updates and scaling hard drive space.

The issue with AWS is concern about privacy data protection ala Safe Harbor.


<a id="#Docker"> 
## Docker and Puppet</a>

<a id="Puppet"> 
#### Puppet Modules</a>
<a target="_blank" href="https://forge.puppetlabs.com/modules?q=logstash">
https://forge.puppetlabs.com/modules?q=logstash</a>
lists several scripts from several contributions of puppet configurations to 
quickly stand-up a Logstash server.


