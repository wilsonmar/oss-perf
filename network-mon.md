<a target="_blank" href="https://www.internetweathermap.com/map">
https://www.internetweathermap.com/map</a>
lists the worst end-to-end connections across the internet worldwide.
Normal is **300ms** (a third of a second).

<a id="PacketBeats">
## PacketBeats</a>
In 2015, Elatic.io acquired Packetbeats after acquired it from Berlin, German start-up IPTEGO 
developed by Monica Sarbu and Tudor Golubenco.

0. Its home page is now at https://www.elastic.co/products/beats/packetbeat under https://www.elastic.co/products/beats
   with https://github.com/elastic/packetbeat

0. To get the installer, click Download from https://www.elastic.co/downloads/beats/packetbeat. 
   The Mac version I got is packetbeat-1.0.0-beta4-darwin.tgz

   Or use commands from https://www.elastic.co/guide/en/beats/packetbeat/current/packetbeat-getting-started.html

   ```
   curl -L -O https://download.elastic.co/beats/packetbeat/packetbeat-1.0.0-rc1-darwin.tgz
tar xzvf packetbeat-1.0.0-rc1-darwin.tgz
   ```

0. Unzip the gunzip file to folder packetbeat-1.0.0-beta4-darwin. It contains 3 files:

  * packetbeat (no file extension).
  * packetbeat.template.json (containing refresh interval, etc.) 
  * packetbeat.yml (configuration)

 NOTE: The yml file says to consult docs at https://www.elastic.co/guide/en/beats/packetbeat/current/configuration.html
   but a 404 results.

0. Setup Logstash per https://www.elastic.co/guide/en/beats/libbeat/1.0.0-rc1/getting-started.html#logstash-setup

0. Open the yml file using a text editor (such as Sublime).
1. 

0. Install on application server under test to sniff the network.

   On Mac: ???
   ```
   sudo /usr/sbin/installer -pkg packetbeat-1.0.0-beta4-darwin.pkg -target / 
    ```

   On Debian, its:
   ```
   sudo dpkg -i packetbeat-1.0.0\rc1_amd64.deb
   ```

It follows TCP streams, decodes app layer protocols like HTTP, MySQL, ProstgreSL, Redis, Thrift-RPC.

0. The Packetbeat agent ships to Elastisearch a JSON object for each transaction
   after correlating requests and responses. This is a hugh time saving vs. Wireshark.
   The transactions are shipped to Elastisearch by <a href="#Libbeat">Libbeat</a>.

   ![packetbeat-packetinfo](https://cloud.githubusercontent.com/assets/300046/10984545/fb9e0144-83ce-11e5-8eb1-0d35e626594e.png)

   Each shipper has a **service tag**.

0. See the demo at http://demo.elastic.co/packetbeat/#/dashboard/Packetbeat-Dashboard?_g=%28%29

0. In Kibana, select a pre-defined dashboard.

   * Get real-time logical topology view
   * Identify slow queries in DB
   * Zoom in on transactions that causes peak 

   Widgets:
   
   * Requests per second
   * HTTP codes by URL
   * Evolution of error codes
   * Top 10 most frequent HTTP requests
   * Top 10 slowest HTTP requests by 99p

0. Alerts based on real-time monitoring, such as:

   *  responsetime 99p > 100 ms
   *  error rate > 5%
   *  number of 5xx HTTP response per minute > 10


<a id="Social">
## Social</a>
IRC Freenode elastic ?

<a id="Libbeat">
## Libbeat</a>
Packetbeat makes use of
 libbeat, the open source framework for building Elasticsearch data shippers. 
 at https://github.com/elastic/libbeat
 
 https://www.elastic.co/downloads/beats/topbeat
 
 
<a id="Alternatives">
## Alternatives</a>
Wireshark is an open source program that comes with its own UI.
It analyzes more application layer protocols than Packetbeat.

[7:03] into the intro video: a table sumarizes what Packetbeat does that WireShark and Tcpdump does not:

 * Real-time analytics
 * Correlate request-response
 * controlled storage & web UI
 
The offering from  Dyn.com.

