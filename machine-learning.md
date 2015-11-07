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


<a id="ToolChoices">
## Choice of tools: Python</a>
Python has become a go-to programming language for math, science, and statistics 
due to its ease of adoption and the breadth of libraries available for nearly any application. 

<a target="_blank" href="http://scikit-learn.org/stable/">Scikit-learn</a> 
builds on top of existing Python packages NumPy, SciPy, and matplotlib. 
It can be used either for interactive “workbench” applications or embedded into other software and reused. 
Its <a target="_blank" href="http://scikit-learn.org/stable/supervised_learning.html#supervised-learning">
Regression</a> predicts a continuous-valued attribute associated with an object such as in the stock market.


<a id="MachineLearning">
## Machine Learning</a>
Python is We are looking to leverage "Machine Learning" (ML) technologies.

According to https://en.wikipedia.org/wiki/Machine_learning,
in 1959, Arthur Samuel defined machine learning as a 
"Field of study that gives computers the ability to learn without being explicitly programmed".

The term refers to the use of computers to <strong>recognize patterns (anomalies)</strong> and <strong>make predictions</strong>.

<a target="_blank" href="http://how-old.net/">http://how-old.net</a>, Microsoft's age-detecting robot proves).


<a id="Prediction">
## Prediction.io software</a>
Let's look into the Machine Learning server and predictive engine from
<a target="_blank" href="https://prediction.io/">Prediction.IO</a> (by CEO <a target="_blank" href="https://www.linkedin.com/in/simonmhchan">Simon Chan</a>, <a target="_blank" href="https://twitter.com/simonchannet">@simonchannet</a>).

It is open sourced at <a target="_blank" href="https://github.com/PredictionIO/PredictionIO/">https://github.com/PredictionIO/PredictionIO</a>, 
with enterprise support.

<a id="Installation">
### Install on Mac</a>
0. Run the one-command installer for Mac:

 ```
 bash -c "$(curl -s https://install.prediction.io/install.sh)
 ```

 The installer locates Java:
 * Found: /Library/Java/JavaVirtualMachines/jdk1.8.0_60.jdk/Contents/Home
 
 The installer adds in folder **/Users/$USERID/PredictionIO/vendors**:
 * spark-1.5.1
 * elasticsearch-1.4.4
 * hbase-1.0.0
 * <a href="#Zookeeper">zookeeper</a>

 Elasticsearch is the default metadata store for PredictionIO, but PostgreSQL and MySQL are offered too. 
 HBase


 ```
 Creating default site in: /Users/wmar/PredictionIO/vendors/hbase-1.0.0/conf/hbase-site.xml
Updating: /Users/wmar/PredictionIO/vendors/hbase-1.0.0/conf/hbase-env.sh to include /Library/Java/JavaVirtualMachines/jdk1.8.0_60.jdk/Contents/Home
Updating: /Users/wmar/PredictionIO/conf/pio-env.sh
HBase setup done!
Updating permissions on: /Users/wmar/PredictionIO/vendors
Installation done!
--------------------------------------------------------------------------------
Installation of PredictionIO 0.9.5 complete!
Please follow documentation at http://docs.prediction.io/start/download/ to download the engine template based on your needs

Command Line Usage Notes:
To start PredictionIO and dependencies, run: **pio-start-all**
To check the PredictionIO status, run: **pio status**
To train/deploy engine, run: **pio [train|deploy|...]** commands
To stop PredictionIO and dependencies, run: **pio-stop-all**

Please report any problems to: support@prediction.io
 ```
 
0. Use a text editor to add `/Users/wmar/PredictionIO/bin` to the path.
   This can be done several ways, such as 'sudo /etc/path`.

0. `pio` to verify:

 ```
 Usage: pio <command> [options] <args>...

Options common to all commands:
  [--pio-home <value>] [--spark-home <value>] [--sbt <value>]
  [-ei <value>] [-ev <value>] [-v <value>] [-m <value>]
  [-sk | --spark-kryo] [--verbose]
  [<args>] [-- [<args passed to Spark>] [-- [<args passed to runner]]]

  --sbt <value>
      Full path of sbt. Default: sbt
  -ei <value> | --engine-id <value>
      Specify an engine ID. Usually used by distributed deployment.
  -ev <value> | --engine-version <value>
      Specify an engine version. Usually used by distributed deployment.
  -v <value> | --variant <value>
      Path to an engine variant JSON file. Default: engine.json
  -m <value> | --manifest <value>
      Path to an engine manifest JSON file. Default: manifest.json
  -sk | --spark-kryo
      Shorthand for setting the spark.serializer property to
      org.apache.spark.serializer.KryoSerializer.
  --verbose
      Enable third-party informational messages.

Note that it is possible to supply pass-through arguments at the en
of the command by using a '--' separator, e.g.

  pio train -v my-variant -- --master spark://mycluster:7077

In the example above, the '--master' argument will be passed to the underlying
spark-submit command. Please refer to the usage section for each command for
more information.

The most commonly used pio commands are:
    status        Displays status information about PredictionIO
    version       Displays the version of this command line console
    template      Creates a new engine based on an engine template
    build         Build an engine at the current directory
    train         Kick off a training using an engine
    deploy        Deploy an engine as an engine server
    eventserver   Launch an Event Server
    app           Manage apps that are used by the Event Server
    accesskey     Manage app access keys
    export        Export events from the Event Server

The following are experimental development commands:
    run           Launch a driver program
    eval          Kick off an evaluation using an engine
    dashboard     Launch an evaluation dashboard
    adminserver   Launch an Admin Server

See 'pio help <command>' to read about a specific subcommand.
 ```

<a id="StartStop">
### Start and Stop Services</a>

0. Start hdfs 

0. Start spark 

0. Start all services

 ```
 pio-start-all
 ```

 This takes several minutes for response such as:
 
 ```
Starting Elasticsearch...
Starting HBase...
starting master, logging to /Users/wmar/PredictionIO/vendors/hbase-1.0.0/bin/../logs/hbase-wmar-master-15mbp-10681.out
Waiting 10 seconds for HBase to fully initialize...
Starting PredictionIO Event Server...
 ```
 

0. Stop all services

 ```
 pio-stop-all
 ```

 This takes several minutes.

0. Check status of dependencies:
 
 ```
 pio status
 ```

 The response begins with this:
 
 ```
 [INFO] [Console$] Inspecting PredictionIO...
[INFO] [Console$] PredictionIO 0.9.5 is installed at /Users/wmar/PredictionIO
[INFO] [Console$] Inspecting Apache Spark...
[INFO] [Console$] Apache Spark is installed at /Users/wmar/PredictionIO/vendors/spark-1.5.1
[INFO] [Console$] Apache Spark 1.5.1 detected (meets minimum requirement of 1.3.0)
[INFO] [Console$] Inspecting storage backend connections...
[INFO] [Storage$] Verifying Meta Data Backend (Source: ELASTICSEARCH)...
[INFO] [Storage$] Verifying Meta Data Backend (Source: ELASTICSEARCH)...
[INFO] [Storage$] Verifying Model Data Backend (Source: LOCALFS)...
[INFO] [Storage$] Verifying Event Data Backend (Source: HBASE)...
 ```
 
 If HBase back-end servers have not been started, the response is likely this:
 
 ```
[ERROR] [Console$] Unable to connect to all storage backends successfully. The following shows the error message from the storage backend.
[ERROR] [Console$] None of the configured nodes are available: [] (org.elasticsearch.client.transport.NoNodeAvailableException)
[ERROR] [Console$] Dumping configuration of initialized storage backend sources. Please make sure they are correct.
[ERROR] [Console$] Source Name: ELASTICSEARCH; Type: elasticsearch; Configuration: TYPE -> elasticsearch, HOME -> /Users/wmar/PredictionIO/vendors/elasticsearch-1.4.4
 ```

 More errors:
 
 ```
 [ERROR] [RecoverableZooKeeper] ZooKeeper exists failed after 1 attempts
[ERROR] [ZooKeeperWatcher] hconnection-0x4a23350, quorum=localhost:2181, baseZNode=/hbase Received unexpected KeeperException, re-throwing exception
[WARN] [ZooKeeperRegistry] Can't retrieve clusterId from Zookeeper
[ERROR] [StorageClient] Cannot connect to ZooKeeper (ZooKeeper ensemble: localhost). Please make sure that the configuration is pointing at the correct ZooKeeper ensemble. By default, HBase manages its own ZooKeeper, so if you have not configured HBase to use an external ZooKeeper, that means your HBase is not started or configured properly.
[ERROR] [Storage$] Error initializing storage client for source HBASE
[ERROR] [Console$] Unable to connect to all storage backends successfully. The following shows the error message from the storage backend.
[ERROR] [Console$] Data source HBASE was not properly initialized. (io.prediction.data.storage.StorageClientException)
[ERROR] [Console$] Dumping configuration of initialized storage backend sources. Please make sure they are correct.
[ERROR] [Console$] Source Name: ELASTICSEARCH; Type: elasticsearch; Configuration: TYPE -> elasticsearch, HOME -> /Users/wmar/PredictionIO/vendors/elasticsearch-1.4.4
[ERROR] [Console$] Source Name: LOCALFS; Type: localfs; Configuration: PATH -> /Users/wmar/.pio_store/models, TYPE -> localfs
[ERROR] [Console$] Source Name: HBASE; Type: (error); Configuration: (error)
 ```

<a id="AlgorithmChoices">
## Choice of algorithms</a>
Not all machine learning algorithms are approapriate for use with the use case defined here.

An algorithm such as 
Gradient Boosting Trees (GBT) has a dozen parameter settings to tweek, 
such as how to control tree size, the learning rate, the sampling methodology for rows or columns, the loss function, the regularization options, and more. 
 
The linear Support Vector Machine (SVM) algorithm is good at categorizing text.

Its **Dimensionality reduction** reduces the number of random variables to consider.

Signal processing

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
