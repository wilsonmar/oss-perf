This page records the discussion about designing visualizations most appropriate for each performance-related risk
and the <a href="perf-test-types.md"> tests to measure exposure to each type of risk</a>.

Generally, several dimensions are compared on each graph so that 
(ideally) a **conclusion for action** can be reached based on what is shown.

<a id="BasicDimensions">
## Basic Dimensions</a>
Among the dozens are these most referenced:

* Response time (speed).
* Average time in queue

* Rate of processing (hits per second, business transactions per hour, etc.).
* Megabytes/Gigabytes transferred per second.
* Count of files transferred.

* Queue length. This is transient.
* Threads, Processed used.

* Megabytes/Gigabytes transferred per second.
* Memory used and memory free.
* CPU percent used.
* Megahertz used (in VM).

* Garbage collection events (major or minor).

* etc.

<a id="StatisticalDimensions">
## Statistical Dimensions</a>

  * Average (Mean)
  * Median
  * 90th percentile.
  * Standard deviation
  * Coefficient of variation

<a id="ComparativeDimensions">
## Comparative Dimensions</a>
Examples:

 * Timing of garbage collection vs. response time.

### Response times of different transactions across releases
Below is an example of a line chart of response times over time (various releases) 
for various **transactions** (not noted to maintain privacy)

![oss-perf-rt-by-trans-across-release](https://cloud.githubusercontent.com/assets/300046/10653990/b87f9e24-7819-11e5-8d5a-8451c15dea38.png)

PROTIP: The stress level (number of vusers or rate of processing) should be noted on such graphs.
The assumption is that only a **single user** -- that the system was not under stress during any of the tests.

CONCLUSION 1: Normally, all transactions take about the same time, as the slowest and fastest transactions
are about one second apart on most releases.

CONCLUSION 2: The transaction represented by the **blue line** is consistently among the slowest (highest) among all transactions. It was significantly slower on the initial release.

CONCLUSION 3: The **average of all transactions** increased significantly with the release on 7/8/2015,
and stayed at that new level - from around 2000 ms to around 3500 ms.

Is this the **threshold** for investigation?
Not if there are other transactions or other sub-systems with higher variability.

### Stress
