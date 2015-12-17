Notes on this page is about Docker and its ecosystem.

<a id="Intro">
## "Configure Once, Run Anywhere"</a>

Docker is one of the technologies that enables 
<a target="_blank" href="http://12factor.net/"> The 12 Factor App</a> 
methodology for modern DevOps.

 * @RealGeneKim gives the "why" of Docker at 
   <a target="_blank" href="https://www.youtube.com/watch?v=SaHbtEeu37M"> Dockercon 2014</a>

 * https://www.youtube.com/watch?v=Tlgoq9t95ew
   Rohan Singh describes Docker at Spotify


Docker is based on several innovations: LXC, device-mapper, aufs, etc..

<a id="Containers">
### System Containers</a>
Docker solves the problem of "it works on my laptop but not in that server"
by enables several <strong>containers</strong> to run on the same hardware.

 * https://linuxcontainers.org/

Docker uses the LXC (Linux containers, https://linuxcontainers.org/lxc/downloads/)
now in most Linux distros (so its use does not require patching of kernel source).
LXC (along with cgroups and other tech) keep containers isolated using security features such as
namespaces, mandatory access control and control groups.

Docker works only on 64-bit machines.

 * https://en.wikipedia.org/wiki/LXC

 * <a target="_blank" href="https://docs.docker.com/installation/#installation">
   https://docs.docker.com/installation/#installation</a>
   is Docker’s official installation guide.


<a id="LowCostOfEntry">
### Low Cost of Entry</a>
One reason for Docker's quick rise is pricing. Whereas 
VMware Workstation (used to create VMWare images) is licensed,
Docker is free, open-sourced from within Twitter in 2013 into
<a target="_blank" href="http://github.com/dotcloud/docker">
http://github.com/dotcloud/docker</a>. 

<a id="RockStars">
### Rock Stars</a>
Meet its creators:

 * https://www.youtube.com/watch?v=Q5POuMHxW-0
   dotCloud founder and CTO Solomon Hykes (http://twitter.com/solomonstre) 
   uses the analogy of shipping containers separating concerns for the shipping industry.

 * https://www.youtube.com/watch?v=at72dhg-SZY
   Solomon with CEO Ben Golub at DockerCon 15 keynote
   has a good joke about how his family misunderstands what Docker is.
   He acknowledged that Docker "stands on the shoulders of giants" such as
   https://en.wikipedia.org/wiki/Cgroups
   built into Linux to manage isolated namespaces.

* https://docs.docker.com/
houses the latest documentation.


To run on Macs, Docker provides a <strong>docker-machine</strong> binary host Docker in Macs.

Unlike VMWare and other hypervisors which use server images that 
contains entire operating system bits (kernel) in each image,
Docker makes use of the <strong>union file system</strong> that enables sharing of modules among
containers.

Containers start quicker because of this.

Docker uses a single set of instructions (a yaml file) 
to configure the same application on many different platforms
(desktop, AWS, Cloud, private data centers, etc.).

Several apps can run within a Docker machine as if they have their own operating system.
A running Docker container shares the Linux kernel with the host. 
This makes it more **lightweight** and easier to deploy software than using VMware.
So the performance of LG inside Docker is very close to that on a regular Linux host. 

<a id="DigitalOcean">
## Cloud Deploy</a>
https://www.digitalocean.com/community/tags/docker?type=tutorials

https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-getting-started



<a id="Union">
## Union file system</a>
0. Ensure support for aufs (advanced multi layered unification filesystem),
also aufs = another union file system
https://en.wikipedia.org/wiki/Aufs
Aufs4 --  version 4.x
http://aufs.sf.net
Junjiro R. Okajima
Unionfs is being developed by Professor Erez Zadok at Stony Brook
University and his team.

```
sudo apt-get install linux-image-extra-`uname -r`
```


<a id="Kubernets">
## Kubernets</a>
Kubernets manages containerized applications in a clustered environment.
It uses its own schedule to stand up Docker containers.

    * https://www.digitalocean.com/community/tutorials/an-introduction-to-kubernetes

Google open sourced Kube 

 * https://github.com/Unitech/pm2
   PM2 is a process manager for Node apps with a built-in load balancer.


<a id="DockerDaemon">
## Docker Engine Daemon</a>
The Docker daemon uses Linux-specific kernel features,
which means Docker only works natively under Linux such as CentOS (not Windows nor Mac OS).
Other operating systems:

Ubuntu 

BusyBox small OS.

CoreOS was developed specifically to operate within containers.

    * https://www.digitalocean.com/community/tutorials/an-introduction-to-coreos-system-components
 
    CoreOS uses a globally distributed key-value store called etcd to pass configuration data between nodes.
    This enables apps to be dynamically configured based on shared resources.

Mesos is a large-scale cluster management platform based on container isolation.


Docker uses a "union" file system that treats elements atomically.
This makes for smaller containers because duplicates are avoided.
Docker works on configuration lines incrementally.

 * https://be.a.cloudgeni.us/workstation/

<a id="DockerMachine">
## Docker Machine for Mac</a>
On a Mac, Docker runs within <a href="#VagrantUp">Vagrant</a> running under VMWare Fusion or 
<a href="#VirtualBoxInstall">VirtualBox</a> emulator.

0. From within web page https://www.docker.com/docker-toolbox 
0. Click Download(Mac) to download file DockerToolbox-1.9.1c.pkg (the current version may be different).
0. Click Save File in the pop-up.

   The text below is a summary of my translation of https://docs.docker.com/v1.8/installation/mac/

   Mac OS X 10.8 “Mountain Lion” or newer has the ____ needed to use the Docker Toolbox
   which installs Docker. It consists of several components:

 * <a target="_blank" href="http://docs.docker.com/machine/">`docker-machine`</a> binary 
   (previously Boot2Docker) for running on Mac OSX.

 * `**docker**` binary is the <strong>Docker Client</strong>
    to create, load, and manage containers

 * <a target="_blank" href="https://docs.docker.com/kitematic/userguide/">Kitematic</a> (the Docker GUI) open sourced at https://github.com/docker/kitematic
 
 * Docker Quickstart CLI Terminal app)

 * a shell (such as bash) preconfigured for a Docker command-line environment

 * Oracle VM VirtualBox 5.0.0

 * <a target="_blank" href="https://www.docker.com/docker-compose">**docker-compose**</a> 
   defines apps and its dependencies in a Compose.yml file.

   NOTE: Installation is to /usr/local/bin



<a id="StartDocker">
## Start Docker</a>
0. Start the Docker Engine daemon:

    ```
sudo docker -d &
    ```

    The response is the PID (which will be different each time):

    ```
[1] 58154
    ```

    If you run docker and get this message:

    ```
Cannot connect to the Docker daemon. Is the docker daemon running on this host?
    ```

    Start Docker using docker-machine invoking virtualbox:

    ```
docker-machine create --driver virtualbox default
    ```


<a id="DockerCommands">
## Docker Commands</a>
0. Confirm by getting a list of sub-commands:
   
   ```
docker
   ```
   
   Additional information about each sub-command is available from 
 <a target="_blank" href="http://docs.docker.com/machine/reference/">
 http://docs.docker.com/machine/reference</a>

0. Get information about what is installed:

    ```
docker info
    ```

    Example of response:

    ```
Containers: 0
Images: 0
Storage Driver: aufs
 Root Dir: /var/lib/docker/aufs
 Dirs: 0
Execution Driver: native-0.1
Kernel Version: 3.13.0-27-generic
WARNING: No swap limit support
    ```

0. Get versions of installed:

    ```
docker version
    ```

Example of response:

    ```
Client:
Version:      1.9.1
API version:  1.21
Go version:   go1.5.1
Git commit:   a34a1d5
Built:        Sat Nov 21 00:48:57 UTC 2015
OS/Arch:      darwin/amd64
    ```

    NOTE: Docker was written in the Go language. A tutorial is at
    http://pluralsight.com/training/Courses/TableOfContents/go

    NOTE: A git client is built in, with tag support.


<a id="RunContainer">
## Run Docker Container</a>

0. Invoke a container by its identifier:

    ```
sudo docker run c629b7d70666
    ```

0. List containers:

    ```
docker ps -l
    ```

    The -l lists non-running containers as well.


0. ??? do some work?

0. Remove a container by its identifier:

```
sudo docker rm c629b7d70666
```




Docker reduces the redundancy of common components running within the same Docker container.

   ```
   FROM wordpress
   ```
   
   stand on the shoulders of others.

   ```
   RUN docker-php-ext-install mbstring
   
   COPY favicon.ico /var/www/html
   RUN chown www-data:www-data /var/www/html/favicon.ico
   ```
   
<a id="DockerImages">
## Docker images</a>
Docker maintains official images at
https://github.com/docker-library/official-images/tree/master/library
for Jenkins, etc.

Pull the busybox Docker image from the Docker website:

   ```
docker pull busybox
   ```
   
To run the image:

   ```
docker run busybox echo hello
   ```
   
Run the latest image:

   ```
docker run -it busybox:latest bash
   ```

For a list of processes running:

   ```
docker ps
   ```
   
To confirm:

   ```
   cat /etc/*releases
   ```

Docker Engine ???


<a id="VirtualBoxInstall">
## VirtualBox installation</a>

0. The easiest way to install on a Mac is to use HomeBrew:

    ```
    brew cask install virtualbox
    ```

Alternately:
0. https://www.virtualbox.org (by Oracle)
0. Download VirtualBox 5.0.10 for OS X hosts  amd64
0. Run the installer VirtualBox-...dmg.
0. Click the Virtualbox.pkg.
0. Click Continue to the pop-up.
0. Click Continue on the Installer program.
0. Click Install.
0. Provide your credentials.
0. Wait for "successful", then click Close.
0. Sqweeze three finger on the touchpad, type V and click VirtualBox.
0. Read the User Manual at https://www.virtualbox.org/manual/UserManual.html

Alternately, use VMware Fusion instead. It is licensed for $300.


<a id="VagrantUp">
## VagrantUp</a>
The name vagrant follows the self-deprecating humor of git.
But the name is fitting because the open-source package enables movement of the same app to reside
in multipe operating system homes (providers). Providers include Virtualbox, AWS, etc.

 * http://coolestguidesontheplanet.com/getting-started-vagrant-os-osx-10-9-mavericks/
 * http://sourabhbajaj.com/mac-setup/Vagrant/README.html

Vagrant is used to build virtual images on a reference box.
That template file can then be given to various users to spin up that reference box.

There are several ways to install Vagrant.

0. The easiest way to install on a Mac is to use HomeBrew:

    ```
brew cask install vagrant
    ```

0. Install this to manage all virtual machines in one place:

    ```
brew cask install vagrant-manager
    ```

Alternately, for the absolute latest version, from https://www.vagrantup.com download the .dmg and run it to install the Vagrant.pkg package file in the Applications folder. 
This creates a vagrant folder under /opt.
It links to the /usr/bin so it is added to the shell path.

0. Confirm install:

    ```
vagrant -v
    ```

To upgrade to the latest version, download it and drag and drop the uninstall.tool onto an open Terminal window and follow the process, then install the Vagrant.pkg file.
Alternately, a point release e.g 1.6.3 -> 1.7.2 can be installed on top of the older one.

User data in Vagrant is stored in an invisible directory named **.vagrant.d**
in the directory from where Vagrant is used.

0. To create a Vagrant template file in a vagrant project directory (can be a git folder),
run in a Terminal:

    ```
vagrant init
    ```

0. Edit the file:

    ```
nano Vagrantfile
    ```

    NOTE: Ruby language.

0. Delete the file.

0. Switch to an internet browser to the VagrantCloud now at https://atlas.hashicorp.com/boxes/
0. Create an account and confirm the email if you haven't already.
0. Search and download a pre-defined box.

    A search in https://atlas.hashicorp.com/boxes/search?utf8=✓&sort=&provider=&q=jmeter
    (what used to be vagrantcloud.com)
    yields 2 boxes.

    Copy the URI to the box.

0. Donwload the box file, for example:

    ```
vagrant init qba73/precise64-sandbox
    ```

    NOTE: Incomplete attempts at download leaves a Vagrantfile which needs to be deleted.

    CAUTION: Public images may contain viruses, so it's better to pull from a vetted image.

    If successful, this adds a box.


0. Open the Vagrantfile downloaded, such as:

    ```
# -*- mode: ruby -*-
# vi: set ft=ruby :

# See README.md for details

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

config.vm.box = "trusty64"

config.vm.define "wikitest" do |wikitest|

wikitest.vm.hostname = "wikitest"

wikitest.vm.network "private_network", ip: "172.31.0.203"

end

config.vm.provider :virtualbox do |p|

p.customize ["modifyvm", :id, "--memory", 2048]
end

end
    ```

0. Edit the box name.
0. Boot the box in the present working directory:

    ```
vagrant up --provider virtualbox
    ```


0. Connect to the box via Secure Shell:

    ```
vagrant ssh
    ```

    The response:

    ```
Welcome to Ubuntu 12.04 LTS (GNU/Linux 3.2.0-23-generic x86_64)

* Documentation:  https://help.ubuntu.com/
New release '14.04.3 LTS' available.
Run 'do-release-upgrade' to upgrade to it.

Welcome to your Vagrant-built virtual machine.
Last login: Fri Sep 14 06:23:18 2012 from 10.0.2.2
vagrant@precise64:~$ pwd
/home/vagrant
    ```

    NOTE: Initial versions of Docker were only available on Ubuntu.

0. Install and run app software (Tomcat web server, etc.).

0. Share your Vagrant enviornment

```
vagrant login
vagrant share
```

See https://atlas.hashicorp.com/help/vagrant/shares/create

0. Open the Virtualbox UI.

0. Exit out:

    ```
vagrant@precise64:/$ exit
    ```

    The response:

    ```
logout
Connection to 127.0.0.1 closed.
    ```

    PROTIP: Vagrant commands are not recognized inside a box.

0. Suspend the box

    ```
vagrant suspend
    ```

0. Halt use of the box

    ```
vagrant halt
    ```

0. Remove the box:

    ```
vagrant destroy
    ```

    The box disappears from the VirtualBox UI.

0. Exit VirtualBox.


<a id="DockerImages">
## Docker images</a>

Docker hosts <a target="_blank" href="http://dockerhub.com/"> dockerhub.com</a>
for anyone.
In it are Virtualbox images for:

  * web UI server (Tomcat, Jetty, etc.)
  * database server (MongoDB, MySQL, Postgres, etc.)
  * Jenkins


Another host is <a target="_blank" href="http://quay.io/">quay.io</a>,
as quay is a British word for dock.
It has the advantage of integration

    ```
docker login quay.io
    ```


http://livestream.com/concur/events/4366576

docker pull quay.io/concur_platform/centos:7.1.1583-c28b658



<a id="JMeterDockerImages">
### JMeter and TestNG Docker images</a>
JMeter and TestNG are not among official images.




<a id="#Beaker">
## Beaker</a>
In https://puppetlabs.com/presentations/are-you-sure-works-test-your-modules-pe-and-puppet-using-beaker-docker-and-more
at #PuppetConf2015, Richard Pijnenburg (@richardp82) working at Elastic 
describes the use of using Beaker to maintain Docker hypervisors.

   * Unit-testing with rspec-puppet
   * Wrong assumptions can lead to working tests which should fail (false positives).


<a id="#LR-Docker">
## Load Generator Docker</a>
<a target="_blank" href="http://community.hpe.com/t5/LoadRunner-and-Performance/The-fastest-way-to-deploy-a-Load-Generator-using-Docker-with/ba-p/6807868">This blog</a> describes how to deploy a Docker-based Load Generator (LG) using a prebuilt LG Docker image  based on Linux Load Generator 12.50 and its prerequisites. 

(1) Download and install Docker (if you haven't already).

(2) Download the Load Generator image from HP R&D's Docker hub at
<a target="_blank" href="https://hub.docker.com/r/hpsoftware/load_generator/">https://hub.docker.com/r/hpsoftware/load_generator</a>

(3) Import the image:

 ```
 docker load < load_generator.tar
 ```

(4) Defin a sample file:
 
 ```
 # Usage:

# sudo docker build -t load_generator ./

FROM ubuntu:14.04

# Set proxy here if necessary

# Install prerequisites for LG

RUN dpkg --add-architecture i386 && apt-get update && apt-get install -y libc6-i386 lib32stdc++6 lib32ncurses5 libkeyutils1:i386 libglib2.0-0:i386

 

# Copy LG install files to the image.

ADD VM /opt/tmp_lg

 

# LG can only installed in silent mode

RUN /bin/bash -c "cd /opt/tmp_lg; source ./installer.sh -i silent"

# remove install files

RUN rm -R /opt/tmp_lg


# do add "-d" to start a container. Otherwise add --entrypoint to overwrite ENTRYPOINT

ENTRYPOINT ["/bin/bash","-c","cd /opt/HP/HP_LoadGenerator/; source env.sh; cd bin/; ./m_daemon_setup -install; while true; do cat; done"]
 ```

(5) Define the host port. The default is 54345.

(6) Launch the LG:

 ```
 docker run –d -i –p <host_port>:54345 --net=host load_generator
 ```

 **-d** specifies **detached mode** running inside a container at the background (not attached to it).

 **-i** parameter, otherwise the container will cause a high CPU usage.
 
 **--net=host** enables heavy network I/O by directly use the eth0 host rather than through **docker0**, a virtual Ethernet bridge that automatically forwards packets between any other network interfaces attached to it.
 By default, containers communicate with each other or with the host.
 
(7) To stop the LG service:

 ```
 docker stop <container>
 ```
 

<a id="InCloud">
## In a Cloud</a>

DigitalOcean.com hosts docker droplets (machines).


<a id="DockerWorkstation">
## Docker Workstation</a>

<a target="_blank" href="https://cloudgenius.slack.com/messages/@nilesh/">Nilesh Londhe</a>
has come up with an ingenious approach using an installation of
<a target="_blank" href="https://link.getsync.com/">
BitTorrant-Sync.dmg</a> for peer-to-peer transfer to privately 
<a target="_blank" href="https://be.a.cloudgeni.us/workstation/">
obtain a workstation image</a>
to play within VirtualBox.

 * https://github.com/beacloudgenius/workstation/tree/master/playbooks
   source for the WorkStation built using Ansible.
   It install dependencies git, curl, ruby, textinfo, etc., 
   then Linuxbrew, then python, then rbenv, and finally Docker.


Docker Swarm


<a id="Resources">
## Resources</a>
Helpful links:

 * http://docker.io
 * https:/github.com/dotcloud/docker
 * https://registry.hub.docker.com/

 * https://www.youtube.com/watch?v=SaHbtEeu37M
   Docker and DevOps by Gene Kim
   June 9-10, 2014 DockerCon San Francisco
   is an epic presentation of why technical debt occurs and its implications.

<a id="Videos">
## Videos</a>
If you have a Pluralsight account:
https://app.pluralsight.com/player?course=docker-fundamentals&author=adron-hall&name=docker-fundamentals-m1&clip=3&mode=live by Adron Hall (@adron, compositecode.com)

 * https://www.youtube.com/watch?v=4W2YY-qBla0
   1.3 hour Docker 101 by Stanley Lewis
   is highly rated because he shows commands 

 * https://www.youtube.com/watch?v=ddhU3NMrhX4
   3 hour presentation on Docker


 * https://www.youtube.com/watch?v=at72dhg-SZY

LearnCode.academy has a 7-video series on YouTube:

 * https://www.youtube.com/watch?v=pGYAg7TMmp0&list=PLoYCgNOIyGAAzevEST2qm2Xbe3aeLFvLc

 * <a target="_blank" href="https://www.youtube.com/watch?v=pGYAg7TMmp0">
   What is Docker?</a>

 * <a target="_blank" href="https://www.youtube.com/watch?v=JBtWxj9l7zM">
   Docker Tutorial - Docker Container Tutorial for Beginners

 * http://youtu.be/JBtWxj9l7zM

Christophe Limpalair of Codepen https://scaleyourcode.com/interviews/interview/9 
has several good videos on Docker:

 * https://www.youtube.com/watch?v=9tDW5OyCY2c
   Vagrant vs Docker?

 * https://www.youtube.com/watch?v=fWkEcijmdsc
   One-click Deploy and One-Click Test Environment with Kate Heddleston

 * https://www.youtube.com/watch?v=v08U1-twsug
   Docker in Production, Scaling, and Security

 * https://www.youtube.com/watch?v=sYQ8j02wbCY
   Running Agound: Debugging Docker in Production


