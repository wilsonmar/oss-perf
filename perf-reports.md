This page records the discussion about designing visualizations most appropriate for each performance-related risk
and the tests to measure exposure to each type of risk.

Generally, several dimensions are shown on each graph so that 
(ideally) a **conclusion for action** can be reached based on what is shown.

### Response times of different transactions across releases
Below is an example of a line chart of response times over time (various releases) 
for various **transactions** (not noted to maintain privacy)

![oss-perf-rt-by-trans-across-release](https://cloud.githubusercontent.com/assets/300046/10653990/b87f9e24-7819-11e5-8d5a-8451c15dea38.png)

The assumption is that only a single user, that the system was not under stress during any of the tests.
PROTIP: The stress level (number of vusers or rate of processing) should be noted on such graphs.

CONCLUSION 1: Normally, all transactions take about the same time. 

CONCLUSION 2: The transaction represented by the **blue line** is consistently among the slowest (highest) among all transactions.

CONCLUSION 3: The **average of all transactions** increased significantly with the release on 7/8/2015,
and stayed at that new level - from around 2000 ms to around 3500 ms.

### Stress
