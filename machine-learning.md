There is a large amount of data generated during testing of apps.

<a id="Why">
## Why this</a>
If our objective is to take action to resolve anomalies the quickest possible time,
we know that simply calculating averages and standard deviation statistics is not enough
because it's time-consuming even for an expert to figure out what is wrong
among the mass of data being churned out.

There is so much going on that it's difficult to understand the **relationships among the data**,
to correlate cause vs. effect, 
and the cascade of events when a choke-point restricts capacity and cause performance bottlenecks.


The objective is to augment time-consuming and error-prone **manual scanning** of metrics
with a program that recognizes patterns and raises alerts.

 1. As performance tests run (also in production), 
    proactively identify when a blocking condition is **imminent**. This is done by a
    "continuous" (periodic) scan through metrics and calculate leading indicators such as
    the trend of disk space usage and the ratio of memory consumed per user, etc.

    This is a step ahead of reactively recognizing when a **threshold** for action,
    such as response time degrading, out of memory, CPU, out of disk space, etc.

 2. As Selenium runs, have it output **timings for each transaction**.
When a transaction takes a sudden jump, raise an alert.
This means a constant scan comparing previous history for each transaction.

 3. Also, we want to avoid innundating human reviewers with more alerts than they can handle.
 So the program also needs to **prioritize**.

Data output from a load test run may be filtered so just the "steady state" or peak values are analyzed.



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


<a id="Resources">
## Additional resources on machine learning</a>

There are several courses on Coursera.org teaching Machine Learning.

A) By Andrew Ng makes use of Matlab and Octave for audio processing.

  * <a target="_blank" href="https://class.coursera.org/ml-003/lecture">
    Videos</a>
  * <a target="_blank" href="http://cs229.stanford.edu/materials.html">
    Lecture notes</a>
  * <a target="_blank" href="https://share.coursera.org/wiki/index.php/ML:Main">
    Wiki of Discussions, video subtitles</a> maintained by students



<a id="https://isotope11.com/blog/continuous-deployment-at-isotope11-an-update">
## Choice of tools: Python</a>
Python has become a go-to programming language for math, science, and statistics 
due to its ease of adoption and the breadth of libraries available for nearly any application. 

Code for Python 2.7 cannot be run under Python 3.5.
Thus, python3 is the command instead of python.

 * <a target="_blank" href="https://docs.python.org/2/index.html">
   https://docs.python.org/2/index.html</a> contains tutorials and docs.

Python can be used either for interactive “workbench” applications or embedded into other software and reused. 

<a target="_blank" href="http://scikit-learn.org/stable/">Scikit-learn</a> 
builds on top of existing Python packages NumPy, SciPy, and matplotlib. 
Its <a target="_blank" href="http://scikit-learn.org/stable/supervised_learning.html#supervised-learning">
Regression</a> predicts a continuous-valued attribute associated with an object such as in the stock market.


Claiming that the <a target="_blank" href="http://pandas.pydata.org/">Pandas (Python Data Analysis)</a> open-source library does NOT scale, 
the <a target="_blank" href="https://www.coursera.org/learn/ml-foundations/"> 
ML class from Washington U at Coursera.org</a> is based on 
<a target="_blank" href="https://dato.com/learn/translator/">comparable</a>
open-source SFrame API 
with a commercial (1 year free) <strong>GraphLab Create</strong> from Dato.com, where instructor Carlos is CEO.

It can be <a target="_blank" href="https://dato.com/download/install-graphlab-create-aws-coursera.html">
run within AWS EC2</a>.

**IPython Notebook**
combines Python with a wiki page (named Jupyter) that combines code, plots, and text,
(after installation described below at default http://localhost:8888).

The jupyter web UI enables several clusters (engines) to be started.
This is what provides the scalability.

0. Install the **SFrame** tabular data structure (which provides a "database" stored on disk)
   by downloading from https://dato.com/learn/gallery/notebooks/introduction_to_sframes.html
   with source at https://github.com/dato-code/SFrame

 * introduction_to_sframes.py - the Python code
 * introduction_to_sframes.ipynb - the iPython Notebook


The package includes installation of Anaconda from 
https://www.continuum.io/downloads 
which distributes Python with 300+ libraries.

If you're not using the IPython installer, download, in the folder, install using this command-line:

    ```
bash Anaconda2-2.4.1-MacOSX-x86_64.sh
    ```

 * Alternately, install <a target="_blank" href="http://conda.pydata.org/miniconda.html">
   Miniconda</a> for its compactness as it requires individual packages to be installed.


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
## Machine Learning (ML) defined</a>

According to https://en.wikipedia.org/wiki/Machine_learning,
in 1959, Arthur Samuel defined machine learning as a 
"Field of study that gives computers the ability to learn without being explicitly programmed".

The term refers to the use of computers to <strong>recognize patterns (anomalies)</strong> and <strong>make predictions</strong>.

<a target="_blank" href="http://how-old.net/">http://how-old.net</a>, Microsoft's age-detecting robot proves).

<a target="_blank" href="http://www.KNIME.org/">KNIME.org</a> takes a code-free approach to predictive analytics. 
Using a graphical workbench, you wire together workflows from an abundant library of processing nodes, which handle data access, transformation, analysis, and visualization. With KNIME, you can pull data from databases and big data platforms, run ETL transformations, perform data mining with R, and produce custom reports in the end.

There are different approaches to ML.

<strong>Unsupervised learning</strong> approach problems with little or no idea as to what the results should look like. This derives structure from data by <strong>clustering</strong> data based on relationships among the variables in the data. This calculates level of <strong>association</strong> among variables. This is not the same as expert systems applying rules.

<strong>Supervised learning</strong> tasks include "regression" and "classification".

   * <strong>Regression</strong> tries to predict results within a continuous output, mapping input variables to some continuous result function. Predicting the price of a house based solely on square footage is an example of using one input to predict a single output, also known as "univariate linear regression." But in real life, the regression models behind <a target="_blank" href="http://www.kbb.com">kbb.com</a> provides Kelly Blue Book prices of automobiles based on several variables (miles driven, age of car, accessories, etc.).

   * Classification tries to predict results in a <strong>discrete</strong> output, mapping input variables into categories such as "Yes" or "No".

Supervised learning approaches works by providing a <strong>training set</strong> of known
input and outputs so the ML program can derive its formula.

   * The variable <strong>m</strong> represents the number of training examples.
   * The variable <strong>x</strong> represents the various input feature variables.
   * The variable <strong>y</strong> represents the various output target variables.

Numbers in superscipt slightly above each variable refer to a specific variable.

* https://github.com/karpathy/convnetjs

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

<a target="_blank" href="https://spark.apache.org/mllib/">
Apache Spark's scalable machine learning library</a>
for Java, plus Python and Scala (via NumPy) is 
faster than Hadoop map-reduce programs because it leverages faster solid-state drives.

It works in EC2 or on Mesos.

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

http://www.mlbase.org/ 
enables users to obtain results by make queries using a declarative language like SQL.



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
## Additional resources on machine learning</a>

There are several courses on Coursera.org

 * By Ng makes use of Matlab.

 * The University of Washington makes use of Python.

 * http://guidetodatamining.com/
 * http://colah.github.io/ at http://googleresearch.blogspot.com/

 * http://www.infoworld.com/article/2853707/machine-learning/11-open-source-tools-machine-learning.html

 * https://www.youtube.com/watch?v=v-91JycaKjc From the Lab to the Factory: Building a Production Machine Learning
  by Josh Wills (@josh_wills) is the Senior Director of Data Science at Cloudera
