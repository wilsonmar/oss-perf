The devops toolchain **provisions** servers in a cloud such as AWS EC2.
This may occur using binary images (from Artifactory repository) that already contains deployed apps.
Or, applications are **deployed** on an empty servers.

<a id="DockerImages">
## Docker images</a>
To reduce redunancy, we use
**Docker** to "spin up" images into real servers (virtualized).

Images created by others are available from dockerhub.com.
In are Virtualbox images for:

  * web UI server (Tomcat, Jetty, etc.)
  * database server (MongoDB, MySQL, Postgres, etc.)
  * etc.

docker machine creates daemons.

 ```
 create virtualbox
 ```

Docker Tutum provisions on AWS and other clouds.

http://www.virtualbox.org/wiki/Downloads

https://www.vagrantup.com/downloads.html

The <a target="_blank" href="https://be.a.cloudgeni.us/workstation/">
OVA Cloudgenius workstation</a>

  ```
  md5 cloudgenius-2015-09-10.ova 
  MD5 (cloudgenius-2015-09-10.ova) = c203e546b82998434ca67425b5be3054
  ```
  
https://www.getsync.com/
to get BitTorrent-Sync.dmg

https://www.virtualbox.org/wiki/Downloads

 
bundle exec knife ec2 server list





<a id="Continuous">
## Continuous </a>


Alternatives include Puppet or Chef or Ansible (Red Hat) or Salt.

<a id="Puppet">
## Puppet </a>



<a id="Chef">
## Chef </a>

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
