This page describes use of logstash to receive JMeter logs.

The most popular page on the internet about this is at
http://ecmarchitect.com/archives/2014/09/09/3932

As of Logstash 1.5, all Logstash plugins are self-contained Ruby gems. This change makes it possible to develop and release plugins separately. In previous versions, plugins were part of the core Logstash distribution.

https://www.elastic.co/guide/en/logstash/current/_how_to_write_a_logstash_input_plugin.html

Search for Logstash in https://groups.google.com/forum/#!forum/jmeter-plugins

https://github.com/thomasleveil/elk-jmeter
uses the Logstash **pipe** input plugin

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
  
  

