This page describes use of logstash to receive JMeter logs.

The most popular page on the internet about this is at
http://ecmarchitect.com/archives/2014/09/09/3932

As of Logstash 1.5, all Logstash plugins are self-contained Ruby gems. This change makes it possible to develop and release plugins separately. In previous versions, plugins were part of the core Logstash distribution.

https://www.elastic.co/guide/en/logstash/current/_how_to_write_a_logstash_input_plugin.html

Search for Logstash in https://groups.google.com/forum/#!forum/jmeter-plugins

https://github.com/thomasleveil/elk-jmeter
uses the Logstash **pipe** input plugin

http://blog.sematext.com/2015/06/23/replaying-elasticsearch-slowlogs-logstash-jmeter/

From https://www.snip2code.com/Snippet/143757/Logstash-config-that-can-be-used-to-read:

```
input {
  file {
    path => [ "/Users/jpotts/Documents/code/es-test/results.csv"]
  }
}
filter {
  if ([message] =~ "responseCode") {
    drop { }
  } else {
    csv {
    	columns => ["time", "elapsed", "label", "responseCode", "threadName",
	            "success", "bytes", "grpThreads", "allThreads", "Latency",
	            "SampleCount", "ErrorCount", "Hostname"]
    }
  }
}
output {
  elasticsearch_http {
    host => "127.0.0.1"
    index => "logstash-jmeter-results-%{+YYYY.MM.dd}"
  }
}

  ```


## Streaming into Logstash from JMeter via JMX
(JMX = Java Management eXtensions)

https://www.elastic.co/guide/en/logstash/current/plugins-inputs-jmx.html



## Logstash parsing filter
From http://stackoverflow.com/questions/26755717/elasticsearch-kibana-dashboard-analysis-for-jmeter-logs

```
  #Load Test data
  if [LogSeverityType] == "LoadTest" {
    if [Message] =~ "^time" {drop {}}
    grok{
    match => ["Message","%{TIMESTAMP_ISO8601:log_timestamp},%{NUMBER:elapsed},%{DATA:label},%{NUMBER:responseCode},%{DATA:responseMessage},%{DATA:threadName},%{NUMBER:bytes},%{NUMBER:grpThreads},%{NUMBER:allThreads},%{DATA:URL},%{NUMBER:Latency}"]
    }
    mutate {
      convert => [ "Latency", "integer" ]
      convert => [ "elapsed", "integer" ]
      convert => [ "grpThreads", "integer" ]
      convert => [ "allThreads", "integer" ]
      convert => [ "responseCode", "integer" ]
      convert => [ "bytes", "integer" ]
    }
    date {
      match => [ "log_timestamp", "YYYY-MM-dd HH:mm:ss", "ISO8601" ]
      timezone => "Etc/UCT"
    }
  }
 ```
 
 Public comments about these keywords are gathered into this page:
 http://www.dahuatu.com/logstash-input-plugins/
 
  

