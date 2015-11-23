This page describes how to configure aggregations using Elastic v2.0.

During post-processing, pipeline aggregations such as mean-of-means
<img width="688" alt="elastic20-timeseries" src="https://cloud.githubusercontent.com/assets/300046/11342759/2ae0ce00-91c6-11e5-8b67-e5a91083c4a4.png">

 Derivities
  
  Time-series predictions (moving averages)
  
  Anomaly detection
  
  Seasonality adjustments
  
  In previous versions, an external application processes records.

  https://www.elastic.co/videos/time-series-analysis-using-timelion
  
  https://www.elastic.co/webinars/scaling-data-ingestion-with-elastic

<a id="Forecasts">
## Forecasts</a>
0. [37:50] Extend the holt_winters algorithm to make a forecast 60 days into the future.

 ```
 "predict":60
 ```
 
<a id="Aggregations">
## Aggregations</a>
Pipeline Aggregations were introduced with Elastic 2.0
Calculations performed on top of results of aggregations.

An example is calculating the *rate of change**.

https://www.elastic.co/blog/out-of-this-world-aggregations

<a id="Resources">
## Resources</a>

  * https://berlinbuzzwords.de/session/algorithms-and-data-structures-power-lucene-and-elasticsearch
