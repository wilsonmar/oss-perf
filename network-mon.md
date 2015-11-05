<a target="_blank" href="https://www.internetweathermap.com/map">
https://www.internetweathermap.com/map</a>
lists the worst end-to-end connections across the internet worldwide.
Normal is **300ms** (a third of a second).

<a id="PacketBeats">
## PacketBeats</a>
In 2015, Elatic.io acquired Packetbeats after acquired it from Berlin, German start-up IPTEGO 
developed by Monica Sarbu and Tudor Golubenco.

0. Its home page is now at https://www.elastic.co/products/beats/packetbeat under https://www.elastic.co/products/beats

0. View https://github.com/elastic/packetbeat

0. Click Download. The Mac version I got is packetbeat-1.0.0-beta4-darwin.tgz
1. Unzip the gunzip file to folder packetbeat-1.0.0-beta4-darwin. It contains 3 files:

  * packetbeat (no file extension).
  * packetbeat.template.json (containing refresh interval, etc.) 
  * packetbeat.yml (configuration)

 NOTE: The yml file says to consult docs at https://www.elastic.co/guide/en/beats/packetbeat/current/configuration.html
   but a 404 results.


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

