This page records the discussion about the different visualizations needed for each performance-related issue.

Generally, several dimensions are shown on each graph so that 
(ideally) a **conclusion for action** can be reached based on what is shown.

### Response time 
Below is an example of a line chart of response times over time (various releases) 
for various **transactions** (not noted to maintain privacy)
![oss-perf-rt-by-trans-across-release](https://cloud.githubusercontent.com/assets/300046/10653990/b87f9e24-7819-11e5-8d5a-8451c15dea38.png)

The assumption is that only a single user, that the system was not under stress during any of the tests.
PROTIP: The stress level (number of vusers or rate of processing) should be noted on such graphs.

CONCLUSION: All transactions take about the same time. Variations in response time can be purely random
since significant changes did not occur on for a specific transaction on a specific release.


### Stress
