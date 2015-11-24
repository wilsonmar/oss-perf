This page describes the steps to the different ways of installing the ELK stack.

However, we want a simple way to make it repeatable.
The options:

 * <a href="#EFound"> Elastic Found Service</a>
 * <a href="#Amazon"> Amazon Elastic Service</a>
 * <a href="#Docker"> Docker and Puppet</a>
 * <a href="#Manual"> Manual download</a>


<hr />
<a id="Amazon"> 
## Amazon Elastic Service</a>
Perhaps the easiest way to setup an ELK stack is to use Amazon's Elasticsearch service intorduced October, 2015.
As with other AWS services, Amazon takes care of operating system updates and scaling hard drive space.

The issue with AWS is concern about privacy data protection ala Safe Harbor.

My specific steps is at <a href="elk-install-aws.md">elk-install-aws.md</a>


<a id="OtherHosting"> 
### Other Hosting</a>

 <a target="_blank" href="https://facetflow.com/">https://facetflow.com/</a> 
 hosts Elasticsearch in Microsoft's Azure cloud.
 They offer small free sandboxes.
 
 * http://code972.com/blog/2014/07/74-the-definitive-guide-for-elasticsearch-on-windows-azure

<a id="Docker and Puppet"> 
## Docker and Puppet</a>

<a id="Docker">
#### Docker alone</a>

It's possible to use Docker alone to run the ELK stack, running all of
the processes (logstash, elasticsearch and kibana) each in its own
docker container.  One advantage of this
approach is that there's no need for careful configuration of the host
-- all of the dependencies are included in the docker images.
This page explains step-by-step how to use
<a href="https://github.com/ntfrnzn/elk-docker">https://github.com/ntfrnzn/elk-docker</a>.

Before you can use those containers, however, you must have a host
that is running the docker daemon.  To run on a local machine (perhaps
a laptop) it's best to install the <a href="https://www.docker.com/docker-toolbox">Docker Toolbox</a>. The
installation instructions from Docker are pretty complete.  At the end
of the installation, you should have VirtualBox installed, and have a
VM which is running the docker daemon.

Use the `Docker Quickstart Terminal` found at
/Applications/Docker/Docker\ Quickstart\
Terminal.app/Contents/Resources/Scripts/start.sh Or use your own
favorite terminal application.

At this point lauching the ntfrnzn/elk-docker stack should be
straightforward.  A couple things to check first

* `$ docker-machine ls` should show the default machine running
* cd to the elk-docker source directory, where the file `docker-compose.yml` is located
* `$ docker-compose build` will pull the latest version of remote sources and build the local images
* `$ docker-compose up` will start the stack in the foreground.  `$ docker-compose up -d` will start it in the background

The kibana container is now listening at port 5601 *of the docker
daemon host*, that is, the VirtualBox VM.  That IP address is found
with the command `docker-machine ip default` It's probably something
like 192.168.99.100.  If so, then point a browser at
http://192.168.99.100:5601

For testing purposes, this ELK stack sets up a logstash http input;
many other input types are possible. The logstash http input is then
found at http://${DOCKER_IP}:8080. The test script in
`scripts/send_time.sh` tries to deduce the ip address directly using
the docker-machine commands, and sends very simple time data.

<a id="Puppet"> 
#### Puppet Modules</a>

The docker-compose stack is probably best for experimentation and
development. For any sustained use, you probably want to have
dedicated hosts and filesystem storage. For these requirement, you may
wish to have carefully configured hosts dedicated to each process.

The <a href="https://forge.puppetlabs.com/">Puppet Forge</a> 
offers pre-existing puppet modules for each possible component.
<a target="_blank" href="https://forge.puppetlabs.com/modules?q=logstash">
https://forge.puppetlabs.com/modules?q=logstash</a>
lists several scripts from several contributions of puppet configurations to 
quickly stand-up a Logstash server.

Such scripts automatically implements all the tricks necessary during
a manual install, explained below.


<a id="Manual"> 
### Manual Download</a>
0. Open an internet browser to the downloads page at Elastic.com:

  * <a target="_blank" href="https://www.elastic.co/downloads">https://www.elastic.co/downloads</a>

 This is not the easiest option.

0. Install Java runtime.

 On a Windows machine, open a remote PowerShell session, install Chocolatey, then the jRE.
 
 Alternately, on a Mac, install Homebrew, then ES.

0. Install Elastisearch.
 The Elasticsearch package has the java runtime as a dependency, so Java should be automatically installed. 

 However, the Java environment variables that get added will not be present in a current PowerShell session, 
 so the  Elasticsearch install would fail thinking the dependency is missing. 
 So on Windows machines, install the java runtime in a separate PowerShell remoting session, 
 then create a new remoting session to install Elasticsearch. This tip is from Richard Kerslake (@kerslakerichard) 
 <a target="_blank" href="https://blogs.endjin.com/2014/08/gotchas-when-installing-an-elasticsearch-cluster-on-azure/">
 on August 13, 2014</a>.

1. Set the JAVA_HOME environment variable.


<a id="Configuration"> 
### Configuration</a>
Elasticsearch operates as a set of loosely-coupled <a target="_blank" href="https://www.elastic.co/guide/en/elasticsearch/reference/current/modules.html">
modules</a>.

0. Install the Marvel management and monitoring dashboard plug-in.
 
 Elastic offer Marvel free in development, but requires a license for production. 

 It monitors all essential app metrics like index and node statistics and shard allocation. 
 Its Sense dashboard is a developer console used to submit API requests and displays formatted JSON data returned,
 useful for prototyping queries.
 
 Install Marvel using the plug-in script in the Elasticsearch bin folder:

 ```
 plugin install “elasticsearch/marvel/latest”
 ```

0. **Add separate data disk for installing and running Elasticsearch.**
 By separating ES data from the OS disk, when the VM needs to be deleted and recreated
 it is much simpler to detach the data disk and reattached to the new VM.
 It's not only that OS eventually need to be updated.

 It is generally good defensive practice to have app data on a separate data disk 
 so that data can't grow to the point where it chokes the OS and thus take down the server
 and make troubleshooting and recovery much more difficult.

0. Use a YAML editor to edit ES configuration files.

 * <a target="_blank" href="http://yaml-online-parser.appspot.com/">http://yaml-online-parser.appspot.com/</a>

 YAML files are easy to break because YAML uses new lines and white space and not 
 quotes, braces, or other mark up for structuring data.

0. Elasticsearch can store data in-memory (no persistence), or to the local file system. 
