This page records the discussion about designing visualizations most appropriate for each performance-related risk
and the <a href="perf-test-types.md"> types of performance tests to measure exposure to each type of risk</a>.

There are different types of performance testing to measure various risks:

   * <a href="#PingTest">**Ping tests**</a> measure variability in reaching the server so that spikes in network or server availability will not confound performance test results.
   
   * <a href="#SpeedTestReport">**Speed tests**</a> involve single users to identify response times from a range of app functionality.
   
   * **Concurrency tests** identify the impact of multiple requests for the same resources at the same time.
   
   * **Load tests** stop testing at a targeted load level (for certification).
   
   * **Stress tests** increase users (load) to identify the **bottleneck** limiting further capacity.
   
   * **Scalability tests** measure how much capacity really improves when additional/less hardware is added/removed.
   
   * **Endurance tests** measure gradual useage of resources (memory, disk space, etc.) over a longer run times.
   
   * **Baseline tests** establish a set of metrics for (all) the tests above 
     as the basis for comparison when configurations are changed and another set of tests are run.

<hr />

<a id="PingTest">
### Ping tests</a>
The 2 minute video http://youtu.be/6VmAX3DM78s describes how Agile teams

<img alt="Ping test results" src="https://cloud.githubusercontent.com/assets/300046/10778319/0e67d938-7ce2-11e5-965d-cafb7be92a67.png">


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


