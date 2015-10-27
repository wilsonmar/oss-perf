The objective is to augment time-consuming manual scanning with a program that recognizes patterns and raises alerts.

As performance tests run, identify when a blocking condition has been reached among the various metrics being monitored,
when a **threshold** for action is reached in response time degrading, out of memory, CPU, out of disk space, etc.

As Selenium runs, have it output **timings for each transaction**.
When a transaction takes a sudden jump, raise an alert.
This means a constant scan comparing previous history for each transaction.

The trick is to avoid inundating reviewers with more alerts than they can handle.
So the program also needs to **prioritize**.

"Machine Learning" refers to the use of computers to <strong>recognize patterns</strong> and <strong>make predictions</strong>.

According to https://en.wikipedia.org/wiki/Machine_learning,
In 1959, Arthur Samuel defined machine learning as a 
"Field of study that gives computers the ability to learn without being explicitly programmed".
There is a continuum of how much human supervision is provided the programs.

http://colah.github.io/ at http://googleresearch.blogspot.com/
