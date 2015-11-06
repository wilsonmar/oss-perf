<a id="DockerImages">
## Docker images</a>
Unlike VMware, a running Docker container shares the Linux kernel with the host. 
This makes it more **lightweight** and easier to deploy software than using VMware.
So the performance of LG inside Docker is very close to that on a regular Linux host. 

One limitation of Docker is that it works only on 64-bit machines
and requires specific Linux kernel versions.

 * <a target="_blank" href="https://docs.docker.com/installation/#installation">https://docs.docker.com/installation/#installation</a>
   is Docker’s official installation guide.

Docker maintains official images at
https://github.com/docker-library/official-images/tree/master/library
for Jenkins, etc.

JMeter and TestNG are not among official images.

Docker also provides
<a target="_blank" href="http://dockerhub.com/"> dockerhub.com</a>
for anyone.
In it are Virtualbox images for:

  * web UI server (Tomcat, Jetty, etc.)
  * database server (MongoDB, MySQL, Postgres, etc.)
  * Jenkins

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

