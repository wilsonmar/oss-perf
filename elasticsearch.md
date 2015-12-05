This page hopes to be a deep dive of the eleasticsearch (ES) server, a part of the ELK stack.

To install, download from site or checkout from Github.
RPM and Debian packages are available. Satellite versions from the OS
ES.co does not recommend apt-get which may be older than those from ES.co.

Upgrade checker for those upgrading from 1.x.

0. Download
0. Unzip
0. Use a text editor to edit elasticsearch.yml.
0. Delete the # comment for each line.
0. Settings are in the form of key, then a colon, then a value.
0. echo $JVM_HOME
http://www.mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/

0. If you downloaded to the Download folder and double-clicked to unzip there:

  ```
/Users/wmar/Downloads/elasticsearch-2.0.0
  ```

0. Invoke

  ```
bin/elasticsearch --cluster.name=my-application --node.name=node-1 --path.repo=/
  ```

From the bottom up, docs are stored in shards which live in a node.
Each node is deployed as a physical machine or VM node.
Multiple nodes can run within a physical machine.
Node configurations include file path, label, network interface.
Node default name is a random Marvel Super Hero name.
  On Windows -Des.node.name=

ES balances shards around a cluster of ES nodes.

Docs (in JSON format) from clients are routed to an index.
An index is a container for docs (not just a list of pointers).
Index configurations include shards, replicas, refresh rates, read only, etc.

Once in a shard, a document remains in that shard.

The number of fixed type shards is fixed at creation.

A <strong>replica type shard</strong> can be changed dynamically.
Having replicas mean that 

ES is built on top of Apache Lucene which provides index and query execution
http://lucene.apache.org/solr/

There is usually a load balancer to distribute load among nodes within a cluster.
http. default ports 9200-9300 for API traffic.
transport.tcp.port 9300 for long-lived connections among nodes.
If a machine has multiple network cards, 
Ideally, use a different vlan between nodes.
  Java clients are hard-coded to 9300.

ES nodes are stateless.
ES provides no rollback capabilities like SQL servers.

Logging is done at the cluster 

Each node respond to API calls to set
configuration, mapping, templates, aliases, and index setting.

How many:

  ```
curl -XPOST 'localhost:9200/myindex/_segments'
  ```

If ELK is used only to ingest logs:

  ```
curl -XPOST 'localhost:9200/myindex/_optimize?max_num_segments=2'
  ```

ES is a Java app.
Use the JDK for thread dumps, etc.


In the ES folder:

config pointed from path.config in /etc/elasticsearch
data pointed from path.data, avoid $ES_HOME/data
logs pointed from path.logs in /var/log/elasticsearch, default to $ES_HOME/logs
plugins pointed from path. plugins
scripts pointed from path.scripts

Log rotation daily by default.
  Maxium amount of space consumed.

ES_HEAP_SIZE sets other options for you.
  Don't set above 30gb or JVM won't compress object pointers and loose addressible heap space.
  Don't alloc more than 50% of RAM on box to ES (for OS & file system cache).
  Don't let JVM swap out disk by setting --boottrap.mlocakall=true in command or ES YML file.


Within Lucene, docs indexed into a temporary buffer.
Lucene flushes docs to a segment so it can be searched.
It contains an inverted index.
_ refreshed every second.
Segments are immutable (cannot be changed).
To expunge deleted, segments are merged.

Filters are good all the time, and re-indexing is not necessary.

Doc Values sits in separate file on disk
At query time there is no memory overhead but is slower.

The elected Master node does the cluster-level configuration.
By default all nodes are master eligible.
A cluster can potentially be split into two sub clusters (a split brain).


http://blog.mikemccandless.com/2011/02/visualizing-lucenes-segment-merges.html

Usually setup 3 dedicated master nodes after 10.
This doesn't affect performance.


