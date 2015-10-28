It's time-consuming and error-prone process to sift through the large amounts of data generated during testing of apps.

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

PROTIP: Data output from a load test run may be filtered so just the "steady state" or peak values are analyzed.


<a id="ToolChoices">
## Choice of tools</a>
The crazy popularity of ML is due not only to hardware growing cheaper and more powerful, 
but also the proliferation of free software that makes machine learning easier to implement 
(both on single machines and at scale).

Python has become a go-to programming language for math, science, and statistics due to its ease of adoption and the breadth of libraries available for nearly any application. 

<a target="_blank" href="http://scikit-learn.org/stable/">Scikit-learn</a> 
builds on top of existing Python packages NumPy, SciPy, and matplotlib. 
It can be used either for interactive “workbench” applications or embedded into other software and reused. 


<a id="AlgorithmChoices">
## Choice of algorithms</a>
Not all machine learning algorithms are approapriate for use with the use case defined here.

An algorithm such as 
Gradient Boosting Trees (GBT) has a dozen parameter settings to tweek, 
such as how to control tree size, the learning rate, the sampling methodology for rows or columns, the loss function, the regularization options, and more. 
 
The linear Support Vector Machine (SVM) algorithm is good at categorizing text.


<a id="Prediction">
## Prediction.io software</a>
STATUS: We are starting to look into

the Machine Learning server and predictive engine from
<a target="_blank" href="https://prediction.io/">Prediction.IO</a> (by CEO <a target="_blank" href="https://www.linkedin.com/in/simonmhchan">Simon Chan</a>, <a target="_blank" href="https://twitter.com/simonchannet">@simonchannet</a>).

It is open sourced at <a target="_blank" href="https://github.com/PredictionIO/PredictionIO/">https://github.com/PredictionIO/PredictionIO</a>, 
with enterprise support.

It is made of these parts:

 * A processing framework written in Scala built on top of Apache Spark with a scalable data collection and analytics layer
 * Data storage on top of Apache HBase and Cassandra
 * Template gallery of algorithms for customization (Spark MLib, Mahout, etc.)
 * Event engine

Their DASE (Data Source and Dat Preparer) architecture is the "MVC for Machine Learning" in that it provides web services so predictive engine components can be built with separation-of-concerns. 

A sample call to a **rating service** is:

 ```
 curl -H "Content-Type: application/json" -d '{ "user": 1, "num": 4 }' http://localhost:8000/queries.json
 case class Query {
  val user: String,
  val num: Int
 } extends Serializable
 ```


<a id="Training">
## Training to develop algorithm model</a>
To be able to identify anomalies, machine learning algorithms reference its learning from training activities,
such as identifying the expected line (shown as a red line) based on several trails (gray lines).

![machinelearningmastery com-ensemble](https://cloud.githubusercontent.com/assets/300046/10793313/915b79a6-7d4d-11e5-95b2-b7c071dd1a5f.png)

Graphic from http://machinelearningmastery.com/a-tour-of-machine-learning-algorithms/

Thus, there are two sets of data: training and test data.

Making conclusions and recommendations from test run outputs can be triggered from the prediction.io 
Event Server recognizing runs starting and completing.

To **train** predictive models ...

<img alt="predictive io training" src="https://cloud.githubusercontent.com/assets/300046/10792695/0055f640-7d4b-11e5-8910-128ae545ffac.png">

 * https://docs.prediction.io/support/
 * https://github.com/nathanlubchenco/bsw-prediction-io uses data from:
 * https://www.kaggle.com/c/otto-group-product-classification-challenge/data

<a id="Alternatives">
## Alternative software</a>
http://jmlr.org/mloss/ provides a list of open-source software for machine learning.

Among commercial tools, <a target="_blank" href="http://skytree.net/">Skytree</a>’s AutoModel automatically determines optimal parameters and algorithms for maximum model accuracy via their easy-to-use interface to guide program training, tuning, and testing models, while preventing statistical mistakes.

ENCOG for Java and C# is maintained by <a target="_blank" href="http://heatonresearch.com/">Heaton Research</a>
in St. Louse, Missouri. Samples are at https://github.com/encog 

<a id="Resources">
## Additional resources on machien learning</a>

 * http://guidetodatamining.com/
 * http://colah.github.io/ at http://googleresearch.blogspot.com/

 * http://www.infoworld.com/article/2853707/machine-learning/11-open-source-tools-machine-learning.html
