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

 * Martin Fowler, in his <a target="_blank" href="http://martinfowler.com/articles/richardsonMaturityModel.html#level3">
 2013 blog article</a>, 
 notes the 3 levels in Leonard Richardson's Maturity Model (RMM),
 where level 3 is called hypermedia controls, provides discoverability by
 making a REST protocol response more self-documenting by including follow-on requests, such as:

 ```
 <appointment>
  <slot id = "1234" doctor = "mjones" start = "1400" end = "1450"/>
  <patient id = "jsmith"/>
  <link rel = "/linkrels/appointment/cancel"
        uri = "/slots/1234/appointment"/>
  <link rel = "/linkrels/appointment/addTest"
        uri = "/slots/1234/appointment/tests"/>
  <link rel = "self"
        uri = "/slots/1234/appointment"/>
  <link rel = "/linkrels/appointment/changeTime"
        uri = "/doctors/mjones/slots?date=20100104@status=open"/>
  <link rel = "/linkrels/appointment/updateContactInfo"
        uri = "/patients/jsmith/contactInfo"/>
  <link rel = "/linkrels/help"
        uri = "/help/appointment"/>
</appointment>
 ```
 
 One benefit of the response providing hypermedia controls is that the server can change its URI scheme without breaking clients because clients use the URI defined in the previous response, not months or years ago at time of design.

<a name="Resources">
## References</a>

* Kin Lane, http://apievangelist.com/2014/02/25/api-design-tooling-from-swagger/
* http://austin2015.apistrat.com/  API Strategy and Practice Conference in Austin November 18-20, 2015.
* https://app.pluralsight.com/player?course=microservices-architecture&author=rag-dhiman&name=microservices-architecture-m1
  Introduction to microservices 2h 22m video course by Rai Dhiman at Pluralsight.
