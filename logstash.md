This section describes Logstash within the ELK stack.

There are other pages that link to this:

* logstash-setup.md describes the setup of logstash servers.


The product marketing page for LogStash is at

  <a target="_blank" href="https://www.elastic.co/products/logstash">
                      https://www.elastic.co/products/logstash</a>

ElasticSearch the company hired the author (Jordan Sissel) to work on it full time.

Before forwarding, Logstash can parse and normalize varying schema and formats.


## <a name="LogstashConfig"> Logstash Configuration</a>

1. Open a Logstash configuration <strong>logstash.conf</strong> file.

2. Associate .config files with a text editor.

3. If using the vi editor, press Esc, then write and quit the vi editor by typing *:wq*.

 
## <a name="LogstashConfig"> Logstash Configuration</a>
   A basic Logstash configuration (logstash.conf) file
   contains 3 blocks: input, filter, and output.
   
   <img src="https://cloud.githubusercontent.com/assets/300046/9026097/35deab0a-38df-11e5-9580-1b3dfc42a242.png" />

   Each block contains a <strong>plugin</strong> distributed as a
   RubyGem (to ease packaging and distribution).

   Filters are applied in the order they are specified in the .conf file.
   
   Field names are specified between `%{` and `}`.


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



### <a name="LogSources"> Logstash Sources</a>
Logs into Logstash <strong>brokers</strong> 
can be from various <strong>shippers</strong> (origins):

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

## <a name="Logstash_lifecycle"> Log Lifecycle Logstash</a>
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
   
   NOTE: The Z in the timestamp stands for GMT/UTC "Zulu" time, basically London time without the 
   Summer Time (what the UK calls Daylight Savings Time in the US).
   
   
## <a name="LogFormats"> Log Input Formats</a>,
A key benefit of using Logstash is that it 
normalizes different timestamps from different systems:

 * JSON
 * XML
 * CSV
 * Multi-line stack traces
 * Regex
 * Grok (Regex on steroids)
 * Zabbix
 * SQS (Amazon)



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


<a id="Alternatives">
## Integration with Alternatives</a>
Logstash can work in sync with commercial products:

 * https://github.com/IBM-ITOAdev/logstash-input-appdynamics


<a name="Resources">
## Resources</a>

   * https://www.youtube.com/watch?v=Kqs7UcCJquM
     Visualizing Logs Using ElasticSearch, Logstash and Kibana
     by Jeff Sogolov.
