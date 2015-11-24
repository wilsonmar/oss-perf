This page describes the steps to the different ways of installing the ELK stack.

However, we want a simple way to make it repeatable.
The options:

 * <a href="#Amazon"> Amazon Elastic cloud service</a>
 * <a href="#EFound"> Elastic Found cloud service</a>
 * <a href="#OtherHosting"> Other Hosting services</a>

 * <a href="#Docker"> Docker and Puppet</a> on your own cloud
 * <a href="#Manual"> Manual download</a> locally on your laptop

 * <a href="#ESModuleInstall"> Elasticsearch Module Install</a>


<hr />
<a id="Amazon"> 
## Amazon Elastic Service</a>
Perhaps the easiest way to setup an ELK stack is to use Amazon's Elasticsearch service intorduced October, 2015.
As with other AWS services, Amazon takes care of operating system updates and 
scaling servers and hard drive space.

My specific steps is at <a href="elk-install-aws.md">elk-install-aws.md</a>

The issue with AWS is concern about privacy data protection ala Safe Harbor.

The main concern is Elastic does not provide support on AWS.
So the version provided may be slightly behind.


<a id="ElasticFound"> 
## Elastic Found Service</a>
The Found cloud-based service is put together by Elastic.co to generate revenue.

As with other cloud services, Elastic takes care of operating system updates and 
scaling servers and hard drive space.


<a id="OtherHosting"> 
### Other Hosting</a>

 <a target="_blank" href="https://facetflow.com/">https://facetflow.com/</a> 
 hosts Elasticsearch in Microsoft's Azure cloud.
 They offer **small free sandboxes**.
 
 * http://code972.com/blog/2014/07/74-the-definitive-guide-for-elasticsearch-on-windows-azure

<a id="Docker and Puppet"> 
## Docker and Puppet</a>

This is to run on a local machine, such as on a laptop.

<a id="Docker">
#### Docker install</a>

Docker alone can run the ELK stack (logstash, elasticsearch and kibana),
with each process in its own docker **container**.  One advantage of this
approach is that there's no need for careful configuration of the host
-- all of the dependencies are included in the docker images.

This page explains step-by-step how to use
<a href="https://github.com/ntfrnzn/elk-docker">https://github.com/ntfrnzn/elk-docker</a>.

0. Before using Docker containers, follow instructions at
   <a href="https://www.docker.com/docker-toolbox">Docker Toolbox</a>
   to install **VirtualBox** in a VM running the **docker daemon**.
    This approach introduces some additional overhead, but has the advantage of a separate sandbox
    that doesn't disrupt configurations for all other apps on a machine.

    Alternately, to run Docker under a native operating system:

    ```
brew update
sudo chown -R `whoami` /usr/local
brew install docker
    ```

0. Note the path Docker was installed in.

0. Navigate to that path to open the **Docker Quickstart Terminal** 

    ```
cd /Applications/Docker/Docker\ Quickstart\
Terminal.app/Contents/Resources/Scripts/start.sh 
    ```

    Alternately, use your own favorite terminal application.

0. Lauch the ntfrnzn/elk-docker stack.

    * `$ docker-machine ls` should show the default machine running
    * cd to the elk-docker source directory, where the file `docker-compose.yml` is located
    * `$ docker-compose build` will pull the latest version of remote sources and build the local images
    * `$ docker-compose up` will start the stack in the foreground.  `$ docker-compose up -d` will start it in the background

0. Confirm that the kibana container is listening at port 5601 *of the docker
daemon host*, that is, the VirtualBox VM.  

    ```
docker-machine <ip default>
    ```

    The response is something like 192.168.99.100. 

0. Open an internet browser and type in the IP:port combination, such as:

    ```
http://192.168.99.100:5601
    ```

0. For testing purposes, this ELK stack sets up a logstash http input;
many other input types are possible. The logstash http input is then
found at http://${DOCKER_IP}:8080. 

0. The test script in `scripts/send_time.sh` tries to deduce the ip address directly using
the docker-machine commands, and sends very simple time data.



<a id="PuppetModules"> 
#### Puppet Modules</a>

The docker-compose stack is probably best for experimentation and development. 

For any sustained use, you probably want to have dedicated hosts and filesystem storage,
with carefully configured hosts dedicated to each process.

<a href="https://forge.puppetlabs.com/">Puppet Forge</a> 
offers pre-existing puppet modules for each possible component.

<a target="_blank" href="https://forge.puppetlabs.com/modules?q=logstash">
https://forge.puppetlabs.com/modules?q=logstash</a>
lists several scripts from several contributions of puppet configurations to 
quickly stand-up a Logstash server.

Such scripts automatically implements all the tricks necessary during a manual install.



<a id="Manual"> 
## Manual Download</a>
This is not the easiest option.

### Java

0. Install Java runtime.

    On a Windows machine, open a remote PowerShell session, install Chocolatey, then the jRE.
 
    On a Mac, install Homebrew, then ES.

0. Install Elastisearch components.

    The Elasticsearch package has the java runtime as a dependency, so Java should be automatically installed. 

    However, on a Window machine,
 the Java environment variables that get added are not in the current PowerShell session, 
 so the Elasticsearch install would fail thinking the dependency is missing. 
 So, install the java runtime in a separate PowerShell remoting session, 
 then create a new remoting session to install Elasticsearch. This tip is from Richard Kerslake (@kerslakerichard) 
 <a target="_blank" href="https://blogs.endjin.com/2014/08/gotchas-when-installing-an-elasticsearch-cluster-on-azure/"> on August 13, 2014</a>.

0. Set the JAVA_HOME environment variable.

### Download ELK stack installers

0. Open an internet browser to the downloads page at Elastic.com:

    * <a target="_blank" href="https://www.elastic.co/downloads">https://www.elastic.co/downloads</a>

    NOTE: This page provides only the latest version. Click
    <a target="_blank" href="https://www.elastic.co/downloads/past-releases">
    Past Releases</a> for back versions.

0. Identify the set of versions of various components from their web page
<a target="_blank" href="https://download.elastic.co/"> https://download.elastic.co</a>

| URL to Website | Version | Megabytes | Date | Expanded |
| -------------- | ------- | -----: | ----- | ----: |
| https://www.elastic.co/downloads/logstash           | 1.5.3 |  88M | 2015-08-01 | - |
| https://www.elastic.co/downloads/logstash           | 2.0.0 |  82.4M | 2015-11-20 | 166.7M |
| https://www.elastic.co/downloads/logstash Forwarder Mac | 1.5.3 | 5.8M | 2015-09-01 | - |
| https://www.elastic.co/downloads/logstash Forwarder Mac | 2.0.0 | ?M | 2015-11-20 | - |
| https://www.elastic.co/downloads/elasticsearch      | 1.7.1 | 27M | 2015-08-01 | - |
| https://www.elastic.co/downloads/elasticsearch      | 2.0.0 | 27.3M | 2015-11-20 | 33.3M |
| https://www.elastic.co/downloads/kibana for Mac     | 3.1.3 | 1.0M | 2015-08-01 | - |
| https://www.elastic.co/downloads/kibana for Mac     | 4.2.1-darwin | 27.7M | 2015-11-20 | 156.1M |

   Clicking Download in each of these web pages downloads to your **default Downloads folder**.

    NOTE: Kibana version 4 is a major upgrade over version 3.

0. PROTIP: Create a folder such as **ELK1_installers_20150801** so the same set of versions tested together travel together.

    In production mode, each component is usually installed to a separate machine,
    from an repository (such as Artifactory) of known-good server images.
    So a different download installation script is used for each machine.

    But if it's your, alternately, for experimentation on a Macbook, all are downloaded and installed.
    If you rather download and expand using a script as shown below, revise the version number to the latest one.

    ```
mkdir ELK_Installers_20151101
cd ELK_Installers_20151101

wget https://download.elastic.co/logstash/logstash/logstash-2.0.0.tar.gz
wget https://download.elastic.co/logstash-forwarder/binaries/logstash-forwarder_darwin_amd64
wget https://download.elastic.co/elasticsearch/elasticsearch/elasticsearch-2.0.0.tar.gz
wget https://download.elastic.co/kibana/kibana/kibana-4.2.1-darwin-x64.tar.gz
    ```


    ```
mkdir ELK_Installers_20150801
cd ELK_Installers_20150801

wget https://download.elastic.co/logstash/logstash/logstash-1.5.3.tar.gz
wget https://download.elastic.co/logstash-forwarder/binaries/logstash-forwarder_darwin_amd64
wget https://download.elastic.co/elasticsearch/elasticsearch/elasticsearch-1.7.1.tar.gz
wget https://download.elastic.co/kibana/kibana/kibana-3.1.3.tar.gz
    ```

    Instead of `wget`, one can use `curl -O `.

0. Decide where to unpack to the folder where the components are accessed, such within `/usr/local/`.
0. Check for available disk space.

    PROTIP: A machine must have at least 85% disk space free to avoid <strong>low disk watermark</strong> errors limiting Logstash operation.

0. Unpack to the folder where the components are accessed, such within `/usr/local/`.

    PROTIP: It's better if components are referenced in a folder without a version code. ???

    ```
mkdir /usr/local/logstash
tar zxvf logstash-1.5.3.tar.gz  -C mkdir /usr/local/logstash

mkdir /usr/local/elasticsearch
tar zxvf elasticsearch-1.7.1.tar.gz  -C /usr/local/elasticsearch

mkdir /usr/local/kibana
tar zxvf kibana-3.1.3.tar.gz  -C /usr/local/kibana
    ```

    Unix machines install packages under the <strong>/opt</strong> directory.
    But Macs don't have that by default.

    Other folders in <strong>/usr/local</strong> include, Cellar, Library, opt, lib, bin, sbin, man.
    So a better location may be <strong>/usr/local/opt</strong>?

    When using a basic OS X Server, it may be:

    ```
    /Library/Server/Web/Data/Sites/Default/
    cp -R /usr/local/kibana/kibana-3.0.0/* 
    ```

0. Once expanded, archive the installer folder and delete the tar.gz files.

    PROTIP: http://krypted.com/windows-server/stashbox-turning-a-mac-mini-into-a-logstash-server/
    suggests keeping older binaries in case they get revved out and a script against them.

0. Examine the folders:

    * bin contains shell scripts executed.
    * lib contains the jar (java archives) referenced by executables.
    * config contains the yml files referenced by running programs.

0. Follow the <strong>Configuration Steps</strong>.
    
    5601 is the default port?

    The Marvel plug-in is included in the Elasticsearch download.
    See https://www.elastic.co/downloads/marvel.


<a id="ESModuleInstall"> 
### Elasticsearch Module Install</a>
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
