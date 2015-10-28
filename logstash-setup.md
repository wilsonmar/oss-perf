The product marketing page for LogStash is at

  <a target="_blank" href="https://www.elastic.co/products/logstash">
                      https://www.elastic.co/products/logstash</a>

We would prefer to have a local Logstash server near servers issuing logs.

Logstash servers then forward logs to Elastisearch servers.

Before forwarding, Logstash can parse and normalize varying schema and formats.

To handle additional load ....

<hr />

## <a name="Puppet"> Puppet Modules</a>

<a target="_blank" href="https://forge.puppetlabs.com/modules?q=logstash">
https://forge.puppetlabs.com/modules?q=logstash</a>
lists several scripts from several contributions of puppet configurations to 
quickly stand-up a Logstash server.


## <a name="LogstashConfig"> Logstash Configuration</a>
1. Create a configuration file using the sublime editor:

   ```
   subl logstash.conf
   ```

2. Copy the following and paste into the .conf editor window:

   ```JSON
input { 
       stdin { } 
}
filter {
        grok {
                type => "apache"
                pattern ==> ['%{COMBINEDAPACHELOG}']
         }
}
output {
        stdout { codec => rubydebug }
        elasticsearch { embedded => true }
}
   ```

   A basic Logstash configuration file contains 3 blocks: input, filter, and output.
   
   Each block contains a <strong>plugins</strong> distributed as RubyGems to ease packaging and distribution.

   <img src="https://cloud.githubusercontent.com/assets/300046/9026097/35deab0a-38df-11e5-9580-1b3dfc42a242.png" />

   Filters are applied in the order they are specified in the .conf file.
   
   Field names are specified between `%{` and `}`.

3. Associate .config files with a text editor.

4. If using the vi editor, press Esc, then write and quit the vi editor by typing *:wq*.


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
   
   Logstash sends its own log output to <tt>/var/log/logstash/logstash.log</tt> by default.

### <a name="LogSources"> Logstash Sources</a>
Logs into Logstash <strong>brokers</strong> can be from various <strong>shippers</strong> (origins):

* TCP/UDP
* Files
* Syslog
* Microsoft Windows Eventlogs
* STDIN
* WebSockets
* ZeroMQ
* Twitter
* SNMPTrap
* geoIP

Brokers go to Lucene <strong>index</strong> accessed by the storage and search server
which has a web interface.

The lifecycle of a log: Record, Transmit, Store, Delete.

#### <a name="STDIN_Logstash"> STDIN Logstash</a>
0. Since STDIN means the command line, type `testing` and press Enter for this debug response:

   ```
   {
       "message" => "testing",
      "@version" => "1",
    "@timestamp" => "2015-08-02T02:02:06.903Z",
          "host" => "Wilsons-MacBook-Pro.local"
}
   ```
   
   The Z in the timestamp stands for GMT/UTC "Zulu" time, basically London time without the 
   Summer Time (what the UK calls Daylight Savings Time in the US).
   
   
## <a name="LogFormats"> Log Input Formats</a>,
Data Formats:

* JSON
* XML
* CSV
* Multi-line stack traces
* Regex
* Grok (Regex on steroids)
* Zabbix
* SQS (Amazon)

Logstash normalizes different timestamps into your format.


### <a name="LogOutputs"> Logstash Outputs</a>
With the categories of output:

Relay:
   * Redis
   * RabbitMQ
   * TCP/UDP socket
   * Kafka
   * Syslog

Storage:
   * Elasticsearch
   * MongoDB
   * Amazon S3
   * File

Notification:
   * PagerDuty
   * Nagios monitoring
   * Zabbix.com
   * Email
   * Amazon Cloudwatch
   * Alerting tools (Hipchat, SMS)

Metrics (graphics):
   * StatsD
   * Graphite
   * Ganglia


### <a name="Brokers"> Brokers</a>

* AMQP (Advanced Message Queuing Protocol) http://www.amqp.org/
* zMQ at http://zeromq.org/
* Redis from http://redis.io/ receives the log event on the central server and acts as a buffer (port 6379),
  which should be used only with STunnel or with public information.
  
  The front server would notice files based on this .conf using just a few of the
  <a target="_blank" href="https://www.elastic.co/guide/en/logstash/current/plugins-inputs-file.html">
  file plugin's many options</a>.

   ```
input { 
       file {
           type = > "syslog" 
           path = > ["/var/log/secure", "/var/log/messages"] 
           exclude = > ["*. gz"] }
        }
}
output { 
      stdout { } 
      redis { 
              host = > "10.0.0.1" 
              data_type = > "list" 
              key = > "logstash" 
      }
}
   ```

  
  The backend:

   ```
input { 
      redis { 
              host = > "10.0.0.1" 
              type = > "redis-input" 
              data_type = > "list" 
              key = > "logstash" 
      }
output { 
        stdout { } 
        elasticsearch { 
                cluster = > "logstash" 
        }
}
   ```

### <a name="LogstashFilters"> Logstash Filters</a>
labels instead of regex patterns.

* <strong>grok</strong> uses patterns to extract data into fields.
* <strong>date</strong> parses timestamps from fields to standardize into a "canonical" date format
* <strong>mutate</strong> rename, remove, replace, modify fields in events
* <strong>geoip</strong> determines geographic info. from IP addresses (via Maxmind)
* <strong>csv</strong> parses comma separated values or other pattern or string
* <strong>kv</strong> key-value pairs in event data
* grep
* alter
* multiline
* <strong>ruby</strong> to run arbitrary Ruby-language code.
