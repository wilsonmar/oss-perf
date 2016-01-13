
To avoid disk filling up over time, monitoring systems aggregate details over time.
Data on the response time of hourly peaks are aggregated into hourly buckets.
Hourly buckets and aggregated into weekly buckets.

This has the effect of reducing the <strong>granularity</strong> of data values needed to identify when root cause events occurred.
But analysis for performance engineering requires the finer resolution of data.

So we extract data from AppDynamics each hour for storage in our ELK stack.
Import into ELK would be accompanied with <strong>index codes</strong> of the build
so that the data can be exported from ELK for archival (in Amazon Glaciar).
The data can be re-imported for comparisons among runs.

The steps to create the export from AppDynamics:
0. Get a service account to make API calls.
0. <a href="#APICalls">Craft API calls on a subset</a>
0. <a href="#APICallPreview">Prevew API execution on desktops.</a>
0. Craft job to produce the set to load into Logstash/Elastisearch.
0. Analyze data in Kibana.
0. Move ELK data to archive.
0. Restore from archive.
0. Compare runs.
0. Delete data.
0. Apply to wider scope.

<a name="APICalls">
## Craft API calls on a subset</a>

* 8-10am Mondays 
* within one app (SEA - CTE - Production 1)
* one transaction (Expense Report Submit)
* one node (ExpenseDotNet)

These resources explain how:

* https://docs.appdynamics.com/display/PRO14S/Use+the+AppDynamics+REST+API

<a name="APICallPreview">
## Preview API execution</a>
0. Install the Postman plug-in to Chrome
https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop
