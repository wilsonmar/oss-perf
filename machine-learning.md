There is a large amount of data generated during testing of apps.

The objective is to augment time-consuming and error-prone **manual scanning** of metrics
with a program that recognizes patterns and raises alerts.

 1. As performance tests run, identify when a blocking condition has been reached among the various metrics being monitored,
when a **threshold** for action is recognized in response time degrading, out of memory, CPU, out of disk space, etc.

 2. As Selenium runs, have it output **timings for each transaction**.
When a transaction takes a sudden jump, raise an alert.
This means a constant scan comparing previous history for each transaction.

 3. Also, we want to avoid innundating human reviewers with more alerts than they can handle.
 So the program also needs to **prioritize**.

Data output from a load test run may be filtered so just the "steady state" or peak values are analyzed.


<a id="Why">
## Why this</a>
If our objective is to take action to resolve anomalies the quickest possible time,
we know that simply calculating averages and standard deviation statistics is not enough
because it's time-consuming even for an expert to figure out what is wrong
among the mass of data being churned out.

There is so much going on that it's difficult to understand the **relationships among the data**,
to correlate cause vs. effect, 
and the cascade of events when a choke-point restricts capacity and cause performance bottlenecks.


<a id="Statistics">
## Statistics</a>
We start with traditional statistics by calculating the **95th percentile** not by selecting some data point value
that can vary wildly from run to run,
but by derviving a statistical focrmula so that we can compare results in a statistically valid way.
For example, when we report a response time of 14 seconds at the 95th percentile, 
we can provide the percentage confidence,
and what reduction needs to be for chance alone to have impacted the results.

This is done by using a **Linear Regression** calculation such as
http://templates.prediction.io/RAditi/PredictionIO-MLLib-LinReg-Template

BTW, data into these calculations is only the middle "steady state" portion of runs,
which excludes ramp-up and ramp-down.

<a target="_blank" href="http://wilsonmar.com/perftest.htm#Sumry">
<img alt="Extending" src="http://merc.tv/img/fig/triggerpt_v2.png"></a>


<a id="https://isotope11.com/blog/continuous-deployment-at-isotope11-an-update">
## Choice of tools: Python</a>
Python has become a go-to programming language for math, science, and statistics 
due to its ease of adoption and the breadth of libraries available for nearly any application. 

<a target="_blank" href="http://scikit-learn.org/stable/">Scikit-learn</a> 
builds on top of existing Python packages NumPy, SciPy, and matplotlib. 

0. Install Anaconda from https://www.continuum.io/downloads distributes Python with 300+ libraries.
   After download, in the folder, install using this command-line:

    ```
bash Anaconda2-2.4.1-MacOSX-x86_64.sh
    ```

 * Alternately, install <a target="_blank" href="http://conda.pydata.org/miniconda.html">
   Miniconda</a> for its compactness as it requires individual packages to be installed.

    Python can be used either for interactive “workbench” applications or embedded into other software and reused. 
    Its <a target="_blank" href="http://scikit-learn.org/stable/supervised_learning.html#supervised-learning">
    Regression</a> predicts a continuous-valued attribute associated with an object such as in the stock market.

 * <a target="_blank" href="https://docs.python.org/2/index.html">
   https://docs.python.org/2/index.html</a> contains tutorials and docs.

    Code for Python 2.7 cannot be run under Python 3.5.
    Thus, python3 is the command instead of python.

    The <a target="_blank" href="https://www.coursera.org/learn/ml-foundations/"> 
    ML class at Coursera</a> teaches based on 
    jupyter IPython Notebook 
which combines Python with a wiki page that combines code, plots, and text.

0. Install SFrame tabular data structure stored on disk
    by downloading from https://dato.com/learn/gallery/notebooks/introduction_to_sframes.html

    * introduction_to_sframes.py - the Python code
    * introduction_to_sframes.ipynb - the iPython Notebook

    with each column an SArray.

The source is at:

 * https://github.com/dato-code/SFrame

    Claiming that the <a target="_blank" href="http://pandas.pydata.org/">Pandas (Python Data Analysis)</a>, 
    open-source library does not scale, the course uses 
    <a target="_blank" href="https://dato.com/learn/translator/">comparable</a>
    open-source SFrame API 
    with commercial (1 year free) <strong>GraphLab Create</strong> from Dato.com, where instructor Carlos is CEO.

    It can be <a target="_blank" href="https://dato.com/download/install-graphlab-create-aws-coursera.html">
    run within AWS EC2</a>.

    Tasks include:

* Constructing data objects
* Accessing data in a table
* Vector arithmetic
* Saving and loading data tables
* Data table operations
* Manipulating data in a table
* Computing statistics with data tables

To load a csv file into SFrame:

    ```
import graphlab
sf = graphlab.SFrame('your_data.csv')
    ```


Some other classes teach R, which is more a declarative language 
rather than a programmatic language like Python.
R is said to be less scalable and has fewer deployment tools than Python, 
so it is more seldomly used for production code in industry.


<a id="MachineLearning">
## Machine Learning</a>
Python is We are looking to leverage "Machine Learning" (ML) technologies.

According to https://en.wikipedia.org/wiki/Machine_learning,
in 1959, Arthur Samuel defined machine learning as a 
"Field of study that gives computers the ability to learn without being explicitly programmed".

The term refers to the use of computers to <strong>recognize patterns (anomalies)</strong> and <strong>make predictions</strong>.

<a target="_blank" href="http://how-old.net/">http://how-old.net</a>, Microsoft's age-detecting robot proves).

<a target="_blank" href="http://www.KNIME.org/">KNIME.org</a> takes a code-free approach to predictive analytics. 
Using a graphical workbench, you wire together workflows from an abundant library of processing nodes, which handle data access, transformation, analysis, and visualization. With KNIME, you can pull data from databases and big data platforms, run ETL transformations, perform data mining with R, and produce custom reports in the end.


<a id="AlgorithmChoices">
## Choice of algorithms</a>
Not all machine learning algorithms are approapriate for use with the use case defined here.

An algorithm such as 
Gradient Boosting Trees (GBT) has a dozen parameter settings to tweek, 
such as how to control tree size, the learning rate, the sampling methodology for rows or columns, the loss function, the regularization options, and more. 
 
The linear Support Vector Machine (SVM) algorithm is good at categorizing text.

Its **Dimensionality reduction** reduces the number of random variables to consider.

<a id="SignalProcessing">
## Signal processing</a>

https://spark.apache.org/mllib/
is Apache Spark's scalable machine learning library for Java, plus Python and Scala (via NumPy).
Faster than Hadoop map-reduce programs.
It works in EC2 or on Mesos.
http://www.mlbase.org/ 
enables users to obtain results by make queries using a declarative language like SQL.

It is made of these parts:

 * A processing framework written in Scala built on top of Apache Spark with a scalable data collection and analytics layer
 * Data storage on top of Apache HBase and Cassandra
 * Template gallery of algorithms for customization (Spark MLib, Mahout, etc.)
 * Event engine

PredictionIO's DASE (Data Source and Dat Preparer) architecture is the "MVC for Machine Learning" in that it provides web services so predictive engine components can be built with separation-of-concerns. 

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

The defaults are:

 * Installation path (/Users/wmar/PredictionIO): 
 * Vendor path (/Users/wmar/PredictionIO/vendors): 

The concept of linear regression and correlation is not very new. 
Francis Galton invented the least-squares method in 1885.

<a id="Zookeeper">
### Zookeeper</a>
Zookeeper keeps in memory a hierarchy of znodes containing the state of the configuration of a distributed system.
Its data is replicated among an ensemble.
It sends heartbeats and watch events using a custom atomic messaging protocol.
Changes to znodes (write requests from clients) are forwarded to a single leader server which broadcast to follower servers.
, receive message proposals from the leader and agree upon message delivery. The messaging layer takes care of replacing leaders on failures and syncing followers with leaders.
Developed at Yahoo! Research.
to synch itself, including ACL changes.

from https://zookeeper.apache.org/doc/trunk/zookeeperOver.html 
 for maintaining configuration information, naming, providing distributed synchronization, and providing group services.
 
 
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

 * https://www.youtube.com/watch?v=v-91JycaKjc From the Lab to the Factory: Building a Production Machine Learning
  by Josh Wills (@josh_wills) is the Senior Director of Data Science at Cloudera
