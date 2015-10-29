To load JMeter output into Logstash and aggregated in Elasticsearch so that Kibana can display analytics graphs:

0. <a href="#KibanaGraphsJMeter"> Kibana Graphs</a> - the objective of prepatory steps below:
0. <a href="#AUTSetup"> Application Under Test Setup</a>
0. <a href="#Resources"> Resources</a>

We may break contents of each into separate files in Github.

<hr />

<a id="Setup">
## Setup</a>

https://hub.docker.com/r/cirit/jmeter/
based on 
https://github.com/cagdascirit/docker-jmeter


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

<a target="_blank" href="https://plus.google.com/114432111742231285408/posts">
kowalcjZero</a> created a 
<a target="_blank" href="https://www.youtube.com/watch?v=RWkJl4OXTJI&list=PLAUamg5VPF5HAxDQlDVItNLfTBNzhpnW4">
series of videos</a> on JMeter in AWS EC2 and Vagrant box.


<hr />
## <a name="Resources"> Resources specifically about viewing JMeter using the ELK stack</a>
http://theworkaholic.blogspot.in/2015/05/graphs-for-jmeter-using-elasticsearch.html

http://blog.sematext.com/2015/06/23/replaying-elasticsearch-slowlogs-logstash-jmeter/

http://ecmarchitect.com/archives/2014/09/09/3932


<hr />
## <a name="Resources"> Resources Links for JMeter </a>
http://jmeter.apache.org/

http://jmeter.apache.org/usermanual/index.html

http://jmeter.apache.org/usermanual/jmeter_proxy_step_by_step.pdf

https://jmeter.apache.org/usermanual/jmeter_distributed_testing_step_by_step.pdf

http://jmeter.apache.org/usermanual/functions.html

http://jmeter.apache.org/usermanual/best-practices.html

http://jmeter.apache.org/usermanual/remote-test.html

http://wiki.apache.org/jmeter/

http://www.softwaretestingclass.com/learn-jmeter-performance-testing-jmeter-tutorial-series/

http://wiki.apache.org/jmeter/JMeterFAQ#How_to_do_remote_testing_the_.27proper_way.27.3F

https://blazemeter.com/blog

http://www.gallop.net/blog/an-amazing-open-source-performance-testing-tool-jmeter/

http://theworkaholic.blogspot.com/search/label/JMeter

https://performanceengg.wordpress.com//?s=jmeter&search=Go

http://jmeterworld.wordpress.com/

http://jmeter-expert.blogspot.com/

http://www.javapassion.com/handsonlabs/javatestjmeter/index.html

http://jmeter-tips.blogspot.com/

http://www.devx.com/webdev/Article/17950/

http://rubenlaguna.com/wp/enhanced-jdbc-sampler-for-apache-jmeter-22/

http://www.testingminded.com/search/label/JMeter

https://www.linkedin.com/grp/home?gid=2017104&trk=my_groups-tile-flipgrp

https://www.linkedin.com/grp/home?gid=4042150

https://www.linkedin.com/topic/jmeter

https://groups.google.com/forum/#!topic/oauth/VZaO3f-NFN0

https://www.youtube.com/watch?v=cv7KqxaLZd8

https://www.youtube.com/watch?v=rAEl0g8rpUM

https://www.youtube.com/watch?v=T3Ysb9O3EWI

https://www.youtube.com/watch?v=4mfFSrxpl0Y&index=4&list=PLc3SzDYhhiGXVcy8EcrTSfwsC-v8EUZvg

https://www.youtube.com/watch?v=7rO6TtO-QrI&list=PLByAM0wHjwJnQB2wNXzMh9qsVZoER2cxi

https://www.youtube.com/watch?v=aEJNc3TW-g8&list=TLi34_ofwXL78wNTEwMjAxNQ

TestNgx
https://hub.docker.com/search/?q=testngx
