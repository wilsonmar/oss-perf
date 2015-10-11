Swagger from folks at Wordnik.

Alternatives to Swagger include API Blueprint and RAML.

Swagger Core stores JAX-RS API designs in JSON files from which
Swagger UI dynamically generates beautiful HTML documentation and
Swagger CodeGen generates in client code for different languages.

Swagger's focus is currently serving Node.js developers.

Requests include an implementation that reuse WADL introspection logic of 
<a target="_blank" href="http://restlet.com/">Restlet Framework resources</a>
developed by Java (SE/EE, Google AppEngine, OSGi, GWT, Android) 
REST API developers using the Restlet Studio and the APISpark cloud managed by
Reslet based in France with an office in Palo Alto.

Reslet (in Oct. 2015) bought Czech Filip Kolařík's DHC which test and debug web APIs.


<a name="SwaggerCoreBuild">
## Swagger core server build</a>

http://swagger.io/swagger-core/
explains the use of maven.


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

What automated scripts have not been evaluating are <strong>qualitative</strong> aspects such as:

  * Whether model names reflect good names for java classes.
  * Whether the model hierarchy is consistent across various components.
  * Whether attributes formats are appropriate to the data represented.


<a name="Resources">
## References</a>

* Kin Lane, http://apievangelist.com/2014/02/25/api-design-tooling-from-swagger/
* http://austin2015.apistrat.com/  API Strategy and Practice Conference in Austin November 18-20, 2015.
