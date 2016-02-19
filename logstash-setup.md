This page describes the configuration of Logstash servers for capacity.

We would prefer to have a local Logstash server near servers issuing logs.

Logstash servers then forward logs to Elastisearch servers.

To handle additional load ....

<hr />



## <a name="LogstashInstall"> Logstash Install</a>
A sample:

```
#install logstash (based on http://jakege.blogspot.in/2014/04/centralized-logging-system-based-on.html)
sudo wget https://download.elasticsearch.org/logstash/logstash/logstash-1.3.3-flatjar.jar
sudo mkdir /opt/logstash
sudo mv logstash-1.3.2-flatjar.jar /opt/logstash/logstash.jar
sudo wget http://logstash.net/docs/1.3.2/tutorials/10-minute-walkthrough/hello.conf
sudo wget http://logstash.net/docs/1.3.2/tutorials/10-minute-walkthrough/hello-search.conf
sudo mv hello.conf /opt/logstash/hello.conf
sudo mv hello-search.conf /opt/logstash/hello-search.conf
cd /opt/logstash/
#example configuration
java -jar logstash.jar agent -f hello.conf
java -jar logstash.jar agent -f hello-search.conf
```

   The java here is a JRuby run-time (for performance).
   Logstash is extendable with Ruby.


## <a name="LogstashRun"> Run Logstash</a>
1. Run Logstash using a script in the bin folder and the .conf file just created:

   ```
   bin/logstash agent --debug -f logstash.conf
   ```
   
   See <a target="_blank" href="https://www.elastic.co/guide/en/logstash/current/_command_line_flags.html">
   list of command line flags</a>. 
   If the command includes `--configtest` or just `-t`, logstash stops after processing it.
   
   If a folder is specified, such as /etc/logstash/conf.d, all .conf files in it are loaded.
   
   To stop on a Mac, hold down control and press C. On Windows, it's Ctrl+C.

   In production mode, Logstash would be started as a <strong>service</strong> (Unix daemon):

   ```
   sudo service logstash start
   ```
   
## <a name="Outputs"> Logstash Outputs</a>

   Logstash sends its own log output locally to 
   <tt>/var/log/logstash/logstash.log</tt> by default.

  This location can be changed at ???
