The devops toolchain **provisions** servers in a cloud such as AWS EC2.
This may occur using binary images (from Artifactory repository) that already contains deployed apps.
Or, applications are **deployed** on an empty servers.

<a id="DockerRuns">
## Docker runs</a>
To reduce redunancy, we use
**Docker**.
  virtualization
from dockerhub.

Cloudgenius 
https://be.a.cloudgeni.us/workstation/





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
