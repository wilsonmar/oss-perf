Notes on this page is about Docker and its ecosystem.

A running Docker container shares the Linux kernel with the host. 
This makes it more **lightweight** and easier to deploy software than using VMware.
So the performance of LG inside Docker is very close to that on a regular Linux host. 

What Docker helps to achieve is a single set of scripts that establish the environment on several platforms
(desktop, AWS, Kubernets within private data centers).
This enables tests of apps to be applicable in the various envrionments.

Several apps can run within a Docker machine as if they have their own operating system.

As of this writing, Docker only works natively under Linux such as CentOS (not Windows nor Mac OS).
Other operating systems include Ubuntu and the BusyBox small OS.
CoreOS was developed specifically to operate within containers.

So on a Mac, Docker runs within <a href="#VagrantUp">Vagrant</a> running under VMWare Fusion or 
<a href="#VirtualBoxInstall">VirtualBox</a> emulator.

<a id="DockerDaemon">
## Docker Daemon</a>


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
Docker works only on 64-bit machines
and requires specific Linux kernel versions.

 * <a target="_blank" href="https://docs.docker.com/installation/#installation">https://docs.docker.com/installation/#installation</a>
   is Docker’s official installation guide.

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


0. Start the Docker daemon

    ```
sudo docker -d &
    ```

    The response is the PID:

    ```
[1] 58154
    ```

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
 

<a id="Resources">
## Resources</a>
docker machine creates daemons.

