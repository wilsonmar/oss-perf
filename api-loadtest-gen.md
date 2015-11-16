This page describes the different ways to generate API load test code.


<a name="SwaggerJMeterGen">
## Swagger JMeter generation</a>

The benefit sought from generating JMeter code from API specs
is to remove the time needed to create test scripts through automation.

When both client code and associated scripts are generated immediately (after a github hook detects a relevant commit),
ALL elements of an API can be evaluated together:

  * Documentation
  * expected output
  * client script code making API calls
  * client test code emulating client calls in performance tests (mini benchmarks)
  * server code which respond to API calls
  * data
  * service virtualization

<a name="AuthTestCases">
## Authorization test cases</a>

 * Authentication ID assignment (on a web page UI)
 * Password retrieval/reset
 * Availability
 * Allotment selection
 * Billing

<a name="LifeTestCases">
## Life-cycle test cases</a>

 * Authentication initial request from client and token return to client
 * Authentication key expiration handling
 * Authentication token reuse
 * Authentication token refresh

<a name="AtomicRESTCases">
## Atomic data command cases</a>
The basic processing of data consists of:

 1. POST a new item
 2. GET that same item (while it's in cache)
 3. PUT change to the item
 4. DELETE

Other REST commands:

 * HEAD
 * OPTIONS
 * PATCH

<a name="QualitativeTestCases">
## Qualitative test cases</a>

What automated scripts have not been evaluating are <strong>qualitative</strong> aspects such as:

  * Whether model names reflect **good names** for classes, methods, fields, static values, etc.
  * Whether the model hierarchy is consistent across various components.
  * Whether attributes formats are appropriate to the data represented.

<a name="Variations">
## Variations</a>

 * upgrade/version APIs or move between environments, geographies, datacenters, and the cloud.
 * metering, SLA,  
 * Allotment exceeded handling

<a name="Resources">
## References</a>

* Kin Lane, http://apievangelist.com/2014/02/25/api-design-tooling-from-swagger/
* http://austin2015.apistrat.com/  API Strategy and Practice Conference in Austin November 18-20, 2015.
* https://app.pluralsight.com/player?course=microservices-architecture&author=rag-dhiman&name=microservices-architecture-m1
  Introduction to microservices 2h 22m video course by Rai Dhiman at Pluralsight.
