This page provides a hands-on approach to learning how to configure 
**pipeline aggregations** 

PipeCalculations performed on top of results of aggregations.

The steps below follow video presented by
Zachary (Zach) Tong (<a target="_blank" href="https://twitter.com/ZacharyTong">@ZacharyTong</a>,
software developer at Elastic). 
We begin [17:18] into the 28 Oct 2015 video 
<a target="_blank" href="https://www.elastic.co/webinars/elasticsearch-2-0-overview">
Introduction to Elastic 2.0 Overview</a>.

0. <a href="elk-install.md">Install the Elastic 2.0 ELK stack</a> if you haven't already.

    NOTE: Data in versions before Elastic 2.0 would need to be migrated up using the tool Elastic provided
    because its indexes are different.

   Alternately, <a target="_blank" href="https://elements.heroku.com/addons/bonsai">
   Bonsai on Heroku</a> is also free.

0. Read Zach's book on the ELK stack (if you haven't already).



0. Obtain the sample data (bulk request). QUESTION: Zach?


    ```
GET ...
    {"index":{}}
    {"color":"red","price": 14.50}
    ```

0. PROTIP: Run to make sure the data can be ingested without error.

0. Specify standard aggregation calculations.

    ```
GET /test/test/_search
{
    "size":0,
    "aggs": {
        "colors": {
            "terms": {
                "field": "color",
                "size": 10
            }
        }
    }
}
    ```

    NOTE: These aggregations are run only on nodes.

    Results are under buckets:

    ```
    "aggregations": {
        "colors": {
            "doc_counter_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": [
                {
                "key": "red",
                "doc_count": 6
                },
                {
                "key": "green",
                "doc_count": 4
                }
            ]
        }
    }
    ```


0. Run the standard aggregations.

0. Add pipeline aggregations based on averages.

    ```
    "mean_of_means":{
        "avg_bucket":{
            
        }
    }
    ```

    NOTE: Pipeline aggregations are run only on the coordinating node 
    after each shard calculates other buckets.

    31 MB per node.

0. Add pipeline aggregations:

0. 

    A sample time series:
    <img width="688" alt="elastic20-timeseries" src="https://cloud.githubusercontent.com/assets/300046/11342759/2ae0ce00-91c6-11e5-8b67-e5a91083c4a4.png">




 Derivities
  
  Time-series predictions (moving averages)
  
  Anomaly detection
  
  Seasonality adjustments
  
  In previous versions, an external application processes records.

<a id="Timelines">
## Timelines</a>
  https://www.elastic.co/videos/time-series-analysis-using-timelion
  
    holt-winters season. The time period can be touchy.

<a id="Forecasts">
## Forecasts</a>
0. [37:50] Extend the holt_winters algorithm to make a forecast 60 days into the future.

 ```
 "predict":60
 ```

    PROTIP: alpha, beta, and gamma parameters can be added, but they are difficult to optiminze.

 
<a id="Aggregations">
## Aggregations</a>

A https://www.elastic.co/blog/out-of-this-world-aggregations

Additional information is at
https://www.elastic.co/guide/en/elasticsearch/reference/master/search-aggreations-pipeline.html

An example is calculating the *rate of change**.


<a id="Resources">
## Resources</a>

  * https://berlinbuzzwords.de/session/algorithms-and-data-structures-power-lucene-and-elasticsearch

    * https://www.elastic.co/webinars/scaling-data-ingestion-with-elastic

