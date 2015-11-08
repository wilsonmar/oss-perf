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
