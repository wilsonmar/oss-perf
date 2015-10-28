This page records the discussion about designing visualizations most appropriate for each performance-related risk
and the <a href="perf-test-types.md"> types of performance tests to measure exposure to each type of risk</a>.

There are different types of performance testing to measure various risks:

   * <a href="#PingTest">**Ping tests**</a> measure variability in reaching the server so that spikes in network or server availability will not confound performance test results.
   
   * <a href="#SpeedTestReport">**Speed tests**</a> involve single users to identify response times from a range of app functionality.
   
   * **Concurrency tests** identify the impact of multiple requests for the same resources at the same time.
   
   * **Load tests** stop testing at a targeted load level (for certification).
   
   * <a href="#StressTestReports">**Stress tests**</a> increase users (load) to identify the **bottleneck** limiting further capacity.
   
   * **Scalability tests** measure how much capacity really improves when additional/less hardware is added/removed.
   
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

<img alt="stress-test-report" src="https://cloud.githubusercontent.com/assets/300046/10779150/129271be-7cea-11e5-821c-bf9143a71690.png">

In this more stylized diagram, we have an increasing number of scripted vUsers imposing load at the same time.

Starting from a [_] light load, we ramp up load until the [_] Transactions per second and other processing rates peak before dropping off with increasing load.
We know that we’ve reached the point of 
[_] capacity, when heavy load becomes overload as additional load is imposed.
[_] Response times begin to increase due to transactions [_] waiting for others to finish.
Usually this is also the point where [_] resources such as CPU and memory becomes fully used.



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


<a name="Analysis">
### Analysis of run results</a>

<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/10390190/e61b57c6-6e2b-11e5-8e27-e3eee55257a9.jpg">
<img alt="Blazemeter demo screen" src="https://cloud.githubusercontent.com/assets/300046/10390190/e61b57c6-6e2b-11e5-8e27-e3eee55257a9.jpg"></a>

http://ecmarchitect.com/archives/2014/09/09/3932 also
![jmeter-results-kibana](https://cloud.githubusercontent.com/assets/300046/10350929/b14c8136-6cfb-11e5-882a-4f5955ed45e6.png)


