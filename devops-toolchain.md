The devops toolchain **provisions** servers locally and in a cloud such as AWS EC2.

This may occur using binary images (from Artifactory repository) that already contains deployed apps.
Or, applications are **deployed** on an empty servers.


<a id="Virtualbox">
## Virtualbox</a>
http://www.virtualbox.org/wiki/Downloads


 ```
 create virtualbox
 ```

<a id="Tutum">
## Tutum</a>
Docker Tutum provisions on AWS and other clouds.

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

<a id="Videos">
## Videos</a>

* https://www.youtube.com/watch?v=Q5POuMHxW-0
  47:14 by Twitter University

* https://puppetlabs.com/presentations/are-you-sure-works-test-your-modules-pe-and-puppet-using-beaker-docker-and-more
  

http://www.pluralsight.com/courses/docker-deep-dive
5 hour 36 minute Jan 2015
by Nigel Poulton (@NigelPoulton, NigelPoulton.com)
   shows how a simple Node app on github is tested using mocha and built on Circle-CI,
   then docker and tutum provisions and deploys to AWS.
