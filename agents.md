This describes capture of status and operational information.

Different application monitoring system provide its own agents installed on servers
to collect, parse, and ship metrics.

Various agents are often not compatible with each other.
So metrics may need to be extracted out of AppDynamics database (via REST API) for 
shipping to Logstash via a custom Beat.

On November 24, 2015 Elastic released version 1.0 of OSS Beats.
See https://www.elastic.co/blog/beats-1-0-0

<img src="https://www.elastic.co/assets/bltbdd3db766780b321/beats%20platform.png">


