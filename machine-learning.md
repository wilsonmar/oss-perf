It's time-consuming and error-prone process to sift through the large amounts of test data generated for enterprise apps.

The objective is to augment time-consuming manual scanning with a program that recognizes patterns and raises alerts.

But in 2015, machine learning was a nacent category of software (as <a target="_blank" href="http://how-old.net/">http://how-old.net</a>, Microsoft's age-detecting robot proves).

"Machine Learning" refers to the use of computers to <strong>recognize patterns (anomalies)</strong> and <strong>make predictions</strong>,
which is what we want:

  * As performance tests run, identify when a blocking condition has been reached among the various metrics being monitored,
when a **threshold** for action is recognized in response time degrading, out of memory, CPU, out of disk space, etc.

  * As Selenium runs, have it output **timings for each transaction**.
When a transaction takes a sudden jump, raise an alert.
This means a constant scan comparing previous history for each transaction.

  * Also, we want to avoid innundatinyg human reviewers with more alerts than they can handle.
So the program also needs to **prioritize**.

According to https://en.wikipedia.org/wiki/Machine_learning,
in 1959, Arthur Samuel defined machine learning as a 
"Field of study that gives computers the ability to learn without being explicitly programmed".
There is a continuum of how much human supervision is provided the programs.

However, an algorithm such as 
Gradient Boosting Trees (GBT) has a dozen parameter settings to tweek, 
such as how to control tree size, the learning rate, the sampling methodology for rows or columns, the loss function, the regularization options, and more. 
 
The data output from a load test run may be filtered so just the "steady state" or peak values are analyzed.

The linear Support Vector Machine (SVM) algorithm is good at categorizing text.

http://colah.github.io/ at http://googleresearch.blogspot.com/

Among commercial tools, <a target="_blank" href="http://skytree.net/">Skytree</a>’s AutoModel automatically determines optimal parameters and algorithms for maximum model accuracy via their easy-to-use interface to guide program training, tuning, and testing models, while preventing statistical mistakes.

