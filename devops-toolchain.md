Chef

## Chef snippit to start wiremock server

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
  
## Call Chef from AWS Cloud Formation

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
