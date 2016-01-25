
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
0. <a href="#APIManual">Make API calls manually.</a>
0. <a href="#SvcAcct">Get a service account to make API calls.</a>
0. <a href="#APIProgram">Make API calls programatically.</a>
0. <a href="#APICalls">Craft API calls on a subset</a>
0. <a href="#APICallPreview">Prevew API execution on desktops.</a>
0. Craft job to produce the set to load into Logstash/Elastisearch.
0. Analyze data in Kibana.
0. Move ELK data to archive.
0. Restore from archive.
0. Compare runs.
0. Delete data.
0. Apply to wider scope.
0. <a href="#BuildJenkins"> Integrate API jobs in Jenkins builds</a>

<hr />

<a name="AgentMonitoring">
**Monitoring** via agents (or JMX) include innovations such as:

   * https://github.com/GoogleCloudPlatform/PerfKitBenchmarker


<a name="APIManual">
## Make API calls manually</a>

After one logs into AppD on a browser, the browser receives an authentication token that it returns to the server on subsequent requests.

So after manually logging in, an API request can be pasted in the URL in the browser, such as this to list apps for the xxx company instance:

 * https://xxx.saas.appdynamics.com/controller/rest/applications?output=json[{
  DEFINITION: An "app" within AppD is a system containing several servers and layers.

0. For a list of nodes (servers within a cluster): * https://concur.saas.appdynamics.com/controller/rest/applications/2/nodes?output=JSON

For more examples:
http://docs.appdynamics.com/display/PRO39/Use+the+AppDynamics+REST+API#UsetheAppDynamicsRESTAPI -ToCopytheRESTURLforaMetric

<a name="SvcAcct">
## Get a service account to make API calls</a>


<a name="APIProgram">
## Make API calls programmatically</a>
https://wiki.jenkins-ci.org/display/JENKINS/AppDynamics+Plugin

https://www.appdynamics.com/community/exchange/extension/python-sdk-for-controller-rest-api/

 * Retrieve lists of business applications, tiers, and nodes.
 * Retrieve metric values as native Python objects.
 * Find out how many licenses you're using on different tiers.
 * Build your own automated reports.

<a target="_blank" href="https://www.appdynamics.com/community/exchange/extension/java-sdk-for-controller-rest-api/">
Controller REST API SDK extension</a> (RESTToolkit.jar in file RESTToolkit.zip)
 provides a high-level Java interface to accelerate your development of programs that use the AppDynamics REST interface.

See http://www.appdynamics.com/blog/2012/06/26/going-mobile-with-appdynamics-rest-api/
Going Mobile with AppDynamics REST API 
to monitor an application that runs on a smart phone.

The code is available at: https://github.com/unixunion/appdyngauges
Courtesy Kegan Holtzhausen, thank you!

<a name="APICalls">
## Craft API calls on a subset</a>

* 8-10am Mondays 
* within one app (SEA - CTE - Production 1)
* one transaction (Expense Report Submit)
* one node (ExpenseDotNet)

These resources explain how:

* https://docs.appdynamics.com/display/PRO14S/Use+the+AppDynamics+REST+API
* https://docs.appdynamics.com/display/PRO14S/Example+Integrations+Using+the+AppDynamics+REST+API

<a name="APICallPreview">
## Preview API execution</a>
0. Install the Postman plug-in to Chrome
https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop


<a name="BuildJenkins">
## Integrate API jobs in Jenkins builds</a>

This plugin makes it possible to integrate data from AppDynamics into your Jenkins build.
The plugin is available at: https://wiki.jenkins-ci.org/display/JENKINS/AppDynamics+Plugin
Courtesy Miel Donkers, thank you!


