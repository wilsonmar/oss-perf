This repo contains notes, configuration, and source files on creating a way to analyze
with <strong>only free/open source software</strong>. The components include the 
"ELK" stack, where stands for Elasticsearch Logstash Kibana:


0. Github for documentation and source control.
0. Linux Ubuntu (Amazon build) running on all servers for DEB packages installed by command dpkg
0. <a target="_blank" href="https://www.stunnel.org/index.html"> STunnel</a> to secure communications
0. <a href="#Docker"> Docker</a> to install packages on servers.
0. <a href="#LogstashForwarder"> Logstash Forwarder</a> 
   on all servers to direct log entry flow to a collector.

0. JMeter to create load on the system artificially by using Java programs to 
    emulate many real clients.

0. Maven to package java

0. Puppet to manage configurations

0. NGINX to distribute among servers

0. <a href="#Logstash">Logstash</a> collects timestamped logs of
   <a href="#LogFormats">various formats</a>, from
   <a href="#LogSources">various sources</a>, parse to filter out junk, index them, and normalize into JSON
   in a way that's searchable in a central location. 
   Better than awk, grep, etc. on individual machines.

0. RabbitMQ queue services between Logstash producers and consumers to ensure scalability
   by absorbing spikes.

0. <strong>Elasticsearch</strong> indexes (inverted) nested aggregations of data in Hadoop.
0. <strong>Curator</strong> at https://github.com/elasticsearch/curator
   to manage Elasticsearch indexes
   by enabling admins to schedule operations to optimise, close, and delete indexes.

0. <strong>Kibana</strong> does data discovery on elasticsearch cluster to identify "actionable insights"
   and presents visualization (a dashboard).

Elastic also offers cloud services and related <strong>paid</strong> (licensed) software to manage and protect the ELK stack:

0. <strong>Found</strong> 
0. <strong>Shield</strong> to Secure data in Elasticsearch. 
0. <strong>Marvel</strong> to Monitor Elasticsearch deployments. 
0. <a href="#Watcher">Watcher</a> Alerting for Elasticsearch. 
0. <strong>Packetbeat</strong> to Analyze network packet data. 


## <a name="Why"> Why</a>
Instead of piping individual logs such as:

```
$ log_producer | grep ... | sed ... | awk ... | tee output \ | sort | uniq -c | sort -n
```

Elasticsearch provides consistency to different time stamp formats.

Kibana "democratizes" data by putting a front-end to access data
in a searcheable in fast a meaningful ways.


## <a name="Docs"> Documentation</a>
https://www.elastic.co/guide/en/elasticsearch/guide/current/index.html
The Definitive Guide to Elastisearch you can submit updates at
https://github.com/elastic/elasticsearch-definitive-guide

There is a lighter edition of Logstash.

Kibana & Elasticsearch started as an open source project, built by devops people for devops people.

  * https://github.com/elastic/elasticsearch
  * https://github.com/elastic/kibana
  * https://github.com/elastic/logstash was begun by @jordansissel while at Dreamhost, who continues to create videos
    https://www.youtube.com/channel/UC1Hc-GPNTYax-vAVCH333ww as Elastic employee.
    His talk: https://www.youtube.com/watch?v=fwMnb4-t8vo

   * https://github.com/docker-library/kibana


## <a name="Pricing"> Pricing</a>
It's priced by node to be managed and monitor at scale (less than Splunk and doesn't run out of gas).
There's no separate enterprise edition.

Marvel is free until production.
Unlike Splunk, where it's expensive (millions) after the first 500 MB of free.


## <a name="Competitors"> Competitors</a>

Competitors to Logstash include 

* Cloudera <a target="_blank" href="https://github.com/cloudera/flume"> Flume</a> +Elasticsearch+Kibana or Flume+HDFS+HIVE+PIG
* Greylog2
* Fluentd+MongoDB
* [Stackify](http://stackify.com/smart-error-log-management-trial-sign)
* LOGalyse 
* Scribe
* Apache Kafka <a target="_blank"      href="http://research.microsoft.com/en-us/um/people/srikanth/netdb11/netdb11papers/netdb11-final12.pdf">
  used at LinkedIn</a>



## <a name="CompetitiveFeatures"> Competitive Features</a>
* D3 JS library flexibility
* Watcher - 
* Shield support for security

* Bulk operations (for indexing and search operations)
* Percolator ("reversed search" - alerts, classification)
* Suggesters ("Did you mean ...?")
* Index aliases (Grouping, filtering or "renaming" of indices every day)
* Index templates (automatic index configuration)
* Monitoring API (amount of memory used, number of operations, etc.)

* Pie charts have nested levels


## <a name="DownloadVersions"> Download Version Sets</a>
1. Identify the set of versions of various components from their web page
   <a target="_blank" href="https://download.elastic.co/"> https://download.elastic.co</a>


  | URL to Website | Version | Length |
  | -------------- | ------- | -----: |
  | https://www.elastic.co/downloads/logstash           | 1.5.3 |  88M |
  | https://www.elastic.co/downloads/logstash Forwarder Mac | 1.5.3 | 5.8M |
  | https://www.elastic.co/downloads/elasticsearch      | 1.7.1 |  27M |
  | https://www.elastic.co/downloads/kibana             | 3.1.3 | 1.0M |

   Clicking Download in these web pages will download to your default Downloads folder.

   NOTE: Kibana version 4 is a major upgrade over version 3.

2. PROTIP: Create a folder such as *ELK_installers_20150801* so the same set of versions tested together travel together.

3. If you rather download and expand using a script as shown below, revise the version number to the latest ones.

   ```
mkdir ELK_Installers_20150801
cd ELK_Installers_20150801

wget https://download.elastic.co/logstash/logstash/logstash-1.5.3.tar.gz
wget https://download.elastic.co/logstash-forwarder/binaries/logstash-forwarder_darwin_amd64
wget https://download.elastic.co/elasticsearch/elasticsearch/elasticsearch-1.7.1.tar.gz
wget https://download.elastic.co/kibana/kibana/kibana-3.1.3.tar.gz
   ```

   Instead of `wget`, one can use `curl -O `.

4. In production mode, each component is usually installed to a separate machine.
   So a different download installation script is used for each machine.
   But for experimentation on a Macbook, all are installed.

5. Decide on the folder where the components are expanded to.

   It's better if components are referenced in a folder without a version code.

   ```
mkdir /usr/local/logstash
tar zxvf logstash-1.5.3.tar.gz  -C mkdir /usr/local/logstash

mkdir /usr/local/elasticsearch
tar zxvf elasticsearch-1.7.1.tar.gz  -C /usr/local/elasticsearch

mkdir /usr/local/kibana
tar zxvf kibana-3.1.3.tar.gz  -C /usr/local/kibana
   ```

   Unix machines install packages under the <strong>/opt</strong> directory.
   But Macs don't have that by default.
  
  Other folders in <strong>/usr/local</strong> include, Cellar, Library, opt, lib, bin, sbin, man.
  So a better location may be <strong>/usr/local/opt</strong>?

  When using a basic OS X Server, it may be:
  
  ```
   /Library/Server/Web/Data/Sites/Default/
  ```
   
   cp -R /usr/local/kibana/kibana-3.0.0/* 

  A machine must have at least 85% disk space free to avoid <strong>low disk watermark</strong> errors
  limiting Logstash operation.

5. Once expanded, archive the installer folder and delete the tar.gz files.

   http://krypted.com/windows-server/stashbox-turning-a-mac-mini-into-a-logstash-server/
   suggests keeping older binaries in case they get revved out and a script against them.

6. Follow the <strong>Configuration Steps</strong>.


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
labls instead of regex patterns.

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


## <a name="Puppet"> Puppet Modules</a>

https://forge.puppetlabs.com/modules?q=logstash


## <a name="LogstashForwarder"> Logstash Forwarder on Shippers</a>
Configure for scale by using a Logstash Forwarder and RabbitMQ between a Logstash Producer and Logstash Consumer
http://jakege.blogspot.in/2014/04/centralized-logging-system-based-on.html

Logstash Forwarder is written in the programming language Go.

<a target="_blank" href="https://www.elastic.co/webinars/logstash-0-60-in-60?baymax=rtp&elektra=downloads&iesrc=ctr">
VIDEO: Logstash</a>



## <a name="ElasticConfig"> Elasticsearch Configure</a>
On a Mac with Homebrew installed:

   ```
   brew install elasticsearch nginx
   ```

Configure Elasticsearch is described at 
http://jakege.blogspot.sg/2014/03/how-to-install-elasticsearch.html

To enable Elasticsearch go in the bin folder and run file elasticsearch.

Indexes are stored in two types of shards (Apache Lucene instances): primary and replica.
Primary shards are where documents are stored. 
Five primary shards are created for each new index by default.
This default can change but not AFTER it is created.

Each primary shard has one replica by default but that can be changed dynamically for scale out or to make an index more resilient. 

Elasticsearch cleverly distributes shards across available nodes such that primary and replica shards for an index are not present on the same <strong>node</strong> that is automatically part of an Elasticsearch cluster.

Elasticsearch moves shards automatically from one node to another in the case of node failure or when new nodes are added.


   ```
   # line 32 - read the comments on why you might not want localhost here
# for dev box only
elasticsearch: "http://localhost:9200",

# enable cors for kibana3 + elasticsearch 1.4
vi /usr/local/Cellar/elasticsearch/1.4.3/config/elasticsearch.yml

# kibana 3 compatibility
http.cors.enabled: true
http.cors.allow-origin: http://localhost:8080

# the services command is from the brew/tap at the top, love it
$ brew services restart elasticsearch


# make sure nginx starts by itself
# nginx config is in /usr/local/etc/nginx/nginx.conf if you need to look at it
# it won't need any edits for kibana.  it's just js/html in a directory.

# browse to http://localhost:8080/kibana  (you should see a kibana page)
# Now, let's change the default page to logstash.

cd /usr/local/var/www/kibana/app/dashboards
mv default.json default.json.orig
cp logstash.json default.json

# refresh the kibana page.  It will be logstash's default now.
   ```
   
## <a name="KibanaConfig"> Kibana Configure</a>
Kibana installs with its own Node.js server. It doesn't use a web server.

A default <strong>config.js</strong> comes with the installer.

A single node is a master, data, and client nodes.
A node specializes into data and client nodes.

### <a name="Docker"> Docker package</a>


## <a name="Demo"> Demo</a>
  * https://github.com/elastic/demo
 used Virtualbox and Vagrantup.


## <a name="Kibana"> Kibana Dashboard</a>
Kibana replaces the Logstash Web UI.
It is built on Ruby with Sinatra framework.

https://www.digitalocean.com/community/tutorials/how-to-use-kibana-dashboards-and-visualizations


For more scale, between intermediate brokers are
* Storm
* Spark cache
* Samza

Flume can send to HDFS for es-hadoop


## <a name="Watcher"> Watcher</a>

https://www.elastic.co/webinars/watcher-alerting-for-elasticsearch?baymax=rtp&elektra=downloads&iesrc=ctr

Sends notifications via PagerDuty
 
 
## <a name="RockStars"> ELK Rock Stars</a>
This tutorial was based information from these people and their work:


* at Elasticsearch
  https://www.youtube.com/watch?v=Epe63Uu-IO0&spfreload=1
  Mar 17, 2015

* Andrew Puch @gmail 
https://www.linkedin.com/in/apuch
who runs http://andrewpuch.com/
and the #devopsengineers Slack channel at http://devopsengineers.com/
created as https://twitter.com/awstutseries
https://www.youtube.com/watch?v=ge8uHdmtb1M
which details how to setup Elasticsearch.

* Steve Mayzak-Director of Sales Engineering @ ElasticSearch
did https://www.youtube.com/watch?v=uxfvNwl_MGc
What is ELK and how can it help you discover, visualize and analyze your data?
Oct. 14, 2014

* Tim and Anna Roes in Germany:
https://www.timroes.de/2015/02/07/kibana-4-tutorial-part-1-introduction/

* Jeff Sogolov: 
  https://www.youtube.com/watch?v=Kqs7UcCJquM
  Visualizing Logs Using ElasticSearch, Logstash and Kibana
  May 16, 2014

* Agitare Technologies
https://www.youtube.com/watch?v=uxfvNwl_MGc
What is ELK and how can it help you discover, visualize and analyze your data?

* Spencer Alger (@spencerAlger) 
  His intro to the ELK Stack Feb 25, 2015
  https://www.youtube.com/watch?v=QyWZ_wQEM9k
  He works on JS libraries at Elastic
  http://github.com/spalger

* James Turnbull (at Kickstarter)
  wrote $9.99 The Logstash v1.5 Book Kindle Edition
  http://www.amazon.com/Logstash-Book-James-Turnbull-ebook/dp/B00B9JQTCO/ref=wilsonslifenotes

*  Alberto Paro wrote
   ElasticSearch Cookbook $20.44
   http://www.amazon.com/ElasticSearch-Cookbook-Alberto-Paro/dp/1782166629
   
* Clinton Gormley and Zachary Tong
  Elasticsearch: The Definitive Guide Feb 7, 2015 $22.55
  http://www.amazon.com/Elasticsearch-Definitive-Guide-Clinton-Gormley/dp/1449358543/

* Radu Gheorghe (Author), Matthew Lee Hinman  (Author), & 1 more
  Elasticsearch in Action Paperback – August 31, 2015
  http://www.amazon.com/Elasticsearch-Action-Radu-Gheorghe/dp/1617291625/

## <a name="Social"> Social</a>
https://github.com/markwalkom/kibana-dashboards
A collection of Kibana dashboards from the community

http://www.theagileadmin.com/2010/08/20/logging-for-success


