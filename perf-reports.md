This page records the discussion about designing visualizations most appropriate for each performance-related risk
and the <a href="perf-test-types.md"> types of performance tests to measure exposure to each type of risk</a>.

There are different types of performance testing to measure various risks:

   * <a href="#PingTest">**Ping tests**</a> measure variability in reaching the server so that spikes in network or server availability will not confound performance test results.
   
   * <a href="#SpeedTestReport">**Speed tests**</a> involve single users to identify response times from a range of app functionality.
   
   * **Concurrency tests** identify the impact of multiple requests for the same resources at the same time.
   
   * <a href="#StressTestReports">**Stress tests**</a> increase users (load) to identify the **bottleneck** limiting further capacity.
   
   * <a href="#LoadTestReports">**Load tests**</a> stop testing at a targeted load level (for certification).
   
   * <a href="#ScalabilityReports">**Scalability tests**</a> measure how much capacity really improves when additional/less hardware is added/removed.
   
   * **Endurance tests** measure gradual useage of resources (memory, disk space, etc.) over a longer run times.
   
   * **Baseline tests** establish a set of metrics for (all) the tests above 
     as the basis for comparison when configurations are changed and another set of tests are run.

<hr />

<a id="PingTest">
### Ping tests</a>
The 2 minute video http://youtu.be/6VmAX3DM78s describes how Agile teams

<img alt="Ping test results" src="https://cloud.githubusercontent.com/assets/300046/10778319/0e67d938-7ce2-11e5-965d-cafb7be92a67.png">

Fine **granuality** of one second is what makes this visual unique.
This chart shows a dot for each response time measured for the same request repeated over 48 hours
because we want to see the impact of **batch jobs**.

Traditional teams typically don’t create this graph because they typically focus on averages, which filter out spikes shown here. 
Since occasional delays impact only a few unlucky users, no attention is usually paid.
A Java developer may look at his own application log and see that one spike was caused by a full application Garbage Collection that stops the process briefly. 
Occasional [network resets went unnoticed because the network team didn’t know about transaction response times and developers assumed the network just works.
But to resolve all spikes, often a [big meeting needs to be called to make individual assignments.

However, Agile teams do tend to ask for this because they have a sense of ownership for the entire picture.
And that makes all the difference.
They seek to expose the root causes even though it’s someone else’s problem.
Agile teams tend to seek an integrated and comprehensive approach [across the organization because that’s what it takes to keep systems stable and controlled. 
This is why Agile teams often assemble an integrated set of logs from all servers impacting a service.
Comprehensive investigations may reveal that a [big report job is scheduled to run while a [full backup occurs, and right in the middle of a TripWire job that calculates a hash of every file on the server. 
After this was fixed, the total time for all jobs were cut by half. 
This kind of analysis is crucial for user satisfaction now that users are spread across all time zones around the world.
When performance testers know the cost of [each process rather than being handed a black-box at the end of a Waterfall development phase, they won’t be just scratching their heads when, say, a DBA does [an experiment on the server without telling anyone else. And without convening a meeting, people would know what to do when a bad configuration change by [another team caused entire server instances to be moved to another physical machine automatically.

One of the most perplexing issues are occasional spikes in response time.
Our approach needs to be comprehensive because there are so many potential root causes for spikes large and small.
These spikes need to be controlled or at least explained so that stress test results are not “confounded” by random spikes.
This work involves meeting job schedulers of backups and batch reports, system admins configuring server settings (GC) and managing VM locations, network engineers (resetting), security (virus checks, and DBAs (log shipping).

The toughest part of this work isn’t so much the technology, but being able to find out who these people are. In large enterprises, some of them may not have ever talked to each other even though they may be a couple of doors away from each other.

Some issues like Full Garbage Collection within Java servers may have no owner because one person each considers it to be someone else’s problem.


<a id="SpeedTestReport">
### Speed tests return response times of different transactions across releases</a>
Below is an example of a line chart of response times over time (various releases) 
for various **transactions** (not noted to maintain privacy)

![oss-perf-rt-by-trans-across-release](https://cloud.githubusercontent.com/assets/300046/10653990/b87f9e24-7819-11e5-8d5a-8451c15dea38.png)

PROTIP: The stress level (number of vusers or rate of processing) should be noted on such graphs.
The assumption is that only a **single user** -- that the system was not under stress during any of the tests.
That would make this a <a href="perf-test-types.md">"Speed Test"</a>.

CONCLUSION 1: Normally, all transactions take about the same time, as the slowest and fastest transactions
are about one second apart on most releases.

CONCLUSION 2: The transaction represented by the **blue line** is consistently among the slowest (highest) among all transactions. It was significantly slower on the initial release.

CONCLUSION 3: The **average of all transactions** increased significantly with the release on 7/8/2015,
and stayed at that new level - from around 2000 ms to around 3500 ms.

Is this the **threshold** for investigation?
Not if there are other transactions or other sub-systems with higher variability.

<a id="StressTestReports">
### Stress tests</a>

Visualization of stress test results involve several dimensions:

<img alt="stress-test-report" src="https://cloud.githubusercontent.com/assets/300046/10779150/129271be-7cea-11e5-821c-bf9143a71690.png">

In this more stylized diagram, we have an increasing number of scripted vUsers imposing load at the same time.

We ramp up load until the **Transactions per second** 
and other processing rates peak before dropping off with increasing load.
We know that we’ve reached the point of 
**capacity**, when heavy load becomes overload as additional load is imposed.
**Response times** begin to increase due to transactions waiting for others to finish.
Usually this is also the point where **resources** such as CPU and memory becomes fully used.


<a id="LoadTestReports">
## Load tests</a>
Load tests ramp-up to a specific load (below the capacity level) for a while (in "steady state") before ramping down.
They are designed to identify risks such as these:

<img alt="perf-load-test-issues" src="https://cloud.githubusercontent.com/assets/300046/10779827/4d247076-7cf3-11e5-86c9-556746df5805.png">

Examples of changes to mitigate limitations identified in a load run include:

<img alt="perf-load-test-actions" src="https://cloud.githubusercontent.com/assets/300046/10779232/093404d8-7ceb-11e5-8548-9366d9537522.png">

a) If the **first transaction** of a run is slow, and the rest good, it usually is because components have not been loaded on the server or the client cache. To detect slow first transactions, I usually have a scenario group with a single VUser that starts before all the others.
Many LoadRunner users make the mistake of coding for first transactions over and over again rather than recording two iterations and using code from the second for all subsequent iterations.

It is useful to run load tests just doing login and logout repeatedly. Logins are usually the single most expensive transaction apps have. For office workers, does everyone jump on the system if they all arrive the same time every day? For mobile users, maybe when everyone gets off-work or when a plane lands?

b) Monitoring the number of threads each application process spins up during ramp-up can help to identify settings which limit how many threads can be spun up. Finding the most appropriate maximum threads settings is one of the possible outcomes of perf. testing. The default of only 5 on some software out-of-the-box was meant for development work, but is too low for production use. 

c) If the number of database connections is monitored over time, seeing the same number of connections increase as the number of Vusers increase may be an indication of an issue with the app’s use of database connection pooling. 

This is especially good to do during ramp-up because there may be a maximum to the number of connections allowed since each connection takes a certain amount of memory. Some data centers reconfigure their database server each night to shift memory from on-line connections to batch use. 

d) When max. threads on application servers are set high, if bottlenecks still occur at a low number of threads anyway, it can be due to coding for thread pooling.

e) During the stead-state portion of a run, memory usage and response time should remain constant, unless there is a problem with automated memory management. The flat line in Vusers should not represent the same Vusers, but two groups: a certain percentage of Vusers who drop off while another group adds new users over time. 
 
e) It’s difficult to identify high network usage unless loads are emulated by LoadRunner. But we can measure what each transaction requires in terms of number of files and the size of each file. Mimification to remove white space ignored by programs help. To improve performance, some mobile developers now put JavaScript and CSS code in-line to minimize the number of files downloaded. 

f) We know that full garbage collection in Java causes random spikes in response time. Some find it helpful to run longevity load tests to see if incremental garbage collection can manage over several days, to see if server operators have to hassle with bringing servers on and off line just to reset memory. 

g) If you find that during ramp-down, memory does not get freed up in proportion to Vusers leaving, then you have a slow clean-up recovery problem. When time-out settings are too long, sessions remain in memory longer than they should. On the other hand, when time-outs are set too quickly, users find it annoying to lose sessions. So finding a balance is another good reason for doing load testing.


<a id="DifferenceComparison">
## Difference Comparison</a>
Below is an example of how to visualize the difference among methods of data collection.

<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/9830052/ed39d31e-58d4-11e5-8ba3-92a536fb1e48.png">
<img src="https://cloud.githubusercontent.com/assets/300046/9830052/ed39d31e-58d4-11e5-8ba3-92a536fb1e48.png"></a>

Each vertical line display how much time it takes to execute various aspects of the same activity.

The bar chart shows the difference in response time on different browsers (Chrome vs. Firefox) vs. JMeter.

   TODO: Add Microsoft IE and Edge.

CONCLUSION 1: Chrome is significantly slower than Firefox.

CONCLUSION 2: **JMeter under-reports** the total response times experienced by real users because it focuses on the 
**transfer of files** between client and server.


<a id="ScalabilityReports">
### Scalability Reports</a>
Scalability runs identify the impact of changing the number of machines or other capacity.
The entire set of metrics can be collected with each run.

However, the usual metrics measured is **response time** (in seconds or milliseconds) 
and **processing throughput** (such as the number of requests processed per second).

The line chart below plots points both the throughput rate and a characteristic of the workload 
(the percentage of requests that are read vs. write):

<a target="_blank" title="XY chart with curve-fit of throughput" 
href="https://zookeeper.apache.org/doc/trunk/zookeeperOver.html#fg_zkPerfRW">
<a img src="https://cloud.githubusercontent.com/assets/300046/10894105/bf5bfa86-8169-11e5-83d3-727469c7d516.jpg"></a>

The solid red line shows the fastest processing rate, when 3 servers are being used.
This is from <a target="_blank" href="https://zookeeper.apache.org/doc/trunk/zookeeperOver.html#fg_zkPerfRW">
measurements of a ZooKeeper</a> cluster which coordinates status from leader to followers.

CONCLUSION 1: When only writes to the database are processed, 
adding more servers generally **decreases** the total rate of requests processed per second
due to the overhead of communication among servers.

CONCLUSION 2: When a system processes more than 75% reads,
more than 3 servers are needed


<a name="Analysis">
### Analysis of run results</a>

<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/10390190/e61b57c6-6e2b-11e5-8e27-e3eee55257a9.jpg">
<img alt="Blazemeter demo screen" src="https://cloud.githubusercontent.com/assets/300046/10390190/e61b57c6-6e2b-11e5-8e27-e3eee55257a9.jpg"></a>

http://ecmarchitect.com/archives/2014/09/09/3932 also
![jmeter-results-kibana](https://cloud.githubusercontent.com/assets/300046/10350929/b14c8136-6cfb-11e5-882a-4f5955ed45e6.png)


