To load JMeter output into Logstash and aggregated in Elasticsearch so that Kibana can display analytics graphs:

0. <a href="#KibanaGraphsJMeter"> Kibana Graphs</a> - the objective of prepatory steps below:
0. <a href="#AUTSetup"> Application Under Test Setup</a>
0. <a href="#JMeterSetup"> JMeter Setup</a>
0. <a href="#LogstashSetup"> Logstash Setup</a>
0. <a href="#ElasticsearchSetup"> Elasticsearch Setup</a>
0. <a href="#KibanaSetup"> Kibana Setup</a>
0. <a href="#Resources"> Resources</a>

We may break contents of each into separate files in Github.

<hr />

## <a name="KibanaGraphsJMeter"> Kibana Graphs from JMeter Runs</a>
What I’m hoping for is a few graph in Kibana that illustrates test run conclusions:

1. <a href="#NetworkVariation">One User Response Time variation</a> reaching landing page only, revealing network variations
   and/or background jobs and other activity on the same server.
2. <a href="#LandingPageCapacity">Landing page capacity</a> transactions-per-second maximum.
3. <a href="#SignUpCapacity">Sign-Up capacity</a> showing how many new users can register in a short period of time.
4. <a href="#WorkCapacity">Ramp-up capacity</a> showing how many registered users can do work at once based on 
   stress test runs (showing transactions per minute vs. response time).
5. <a href="#CapacityUsage">Capacity usage</a> based on memory per user over time.
6. <a href="#Longevity">Longevity</a> showing memory leaks identified during longer runs.

<hr />

### <a name="NetworkVariation">Network variation</a>


### <a name="LandingPageCapacity">Landing page capacity</a>
   transactions-per-second maximum.


### <a name="SignUpCapacity">Sign-Up capacity</a> 
   showing how many new users can register in a short period of time.


### <a name="WorkCapacity">Ramp-up capacity</a> 
   showing how many registered users can do work at once based on 
   stress test runs (showing transactions per minute vs. response time).


### <a name="CapacityUsage">Capacity usage</a> 
   based on memory per user over time.


### <a name="Longevity">Longevity</a> 
   showing memory leaks identified during longer runs.


<hr />
## <a name="AUTSetup"> Application Under Test Setup</a>

## <a name="JMeterSetup"> JMeter Setup</a>


## <a name="LogstashSetup"> Logstash Setup</a>


## <a name="ElasticsearchSetup"> Elasticsearch Setup</a>


## <a name="KibanaSetup"> Kibana Setup</a>



<hr />
## <a name="Resources"> Resources specifically about viewing JMeter using the ELK stack</a>
http://theworkaholic.blogspot.in/2015/05/graphs-for-jmeter-using-elasticsearch.html

http://blog.sematext.com/2015/06/23/replaying-elasticsearch-slowlogs-logstash-jmeter/

http://ecmarchitect.com/archives/2014/09/09/3932
