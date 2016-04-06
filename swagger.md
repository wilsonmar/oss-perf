<a id="Swagger">
## What is Swagger?</a>

Swagger Core is an **API Description Language (DL)** for REST APIs that provides:

  * a blueprint of layout,
  * a contract, 
  * metadata, and 
  * human-readable documentation.

The goal of Swagger™ is to define a standard, language-agnostic interface to REST APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. When properly defined via Swagger, a consumer can understand and interact with the remote service with a minimal amount of implementation logic. Similar to what interfaces have done for lower-level programming, Swagger removes the guesswork in calling the service.

In other words, Swagger's objective is to be a complete framework for 
describing, producing, consuming, and visualizing RESTful web services
for developers to fully program clients calling them.

This enables <a href="swagger-codegen.md">Swagger CodeGen</a>
to generate client code for different programming languages.

API DL removes a barrier to enterprise adoption of REST API
by making a lagre number of REST APIs governable, shareable, and human-readeable.<a href="#[1]">[1]</a>

Swagger's focus is currently serving Node.js developers.

<a id="Who">
### Who built Swagger?</a>

Swagger originated from folks at Wordnik.com (the on-line English dictionary)
by Reverb Technologies (helloreverb.com)
which was absorbed by https://inform.com/company.html.

 * https://www.mongodb.com/customers/reverb-technologies

The old URL <a target="_blank" ref="nofollow" href="http://github.com/wordnik/swagger-core/wiki">
http://github.com/wordnik/swagger-core/wiki</a>
now redirects to <a target="_blank" href="https://github.com/swagger-api/swagger-core/wiki">
http://github.com/wordnik/swagger-core/wiki</a>

<a target="_blank" href="https://github.com/swagger-api">
https://github.com/swagger-api</a> is the group maintaining

 * swagger-core
 * swagger-spec
 * swagger-ui
 * swagger-codegen


The testing company SmartBear now manages the <a target="_blank" href="http://swagger.io/">
swagger.io</a> website
and https://swaggerhub.com/ provides an instance of swagger on a free platform for teams to collaborate on and coordinate across the entire workflow of an API’s lifecycle. SwaggerHub leverages a centralized definition to allow the whole team to work together to iteratively design, build, document and manage an API.

SwaggerHub includes connectors for GitHub, DockerHub and Ready! API.

http://www.programmableweb.com/news/smartbear-picks-swagger-api-project/2015/03/26


<a id="Dependencies">
## Dependencies</a>

Swagger Core stores JAX-RS API designs in JSON files from which
Swagger UI dynamically generates beautiful HTML documentation.

Swagger makes use of Jackson, 
the multi-purpose Java library for processing JSON data format.

http://swagger.io/swagger-core/
explains the use of maven build.


<a id="Endpoints">
### Sample endpoint</a>

http://petstore.swagger.io/
is provided for experimentation.




<a name="Videos">
## Videos</a>

Exposing Salesforce REST Services Using Swagger:
https://www.youtube.com/watch?v=8Z9qva1nv1c

https://www.youtube.com/watch?v=U_lCrFpvXyY
Swagger make your REST APIs accessible
Victor Trakhtenberg at DevconTLV October, 2013

https://www.youtube.com/watch?v=8Z9qva1nv1c
Exposing Salesforce REST Services Using Swagger
by Thys Michels (@thysmichels), Software Engineer at Lending Club
describes REST app in Java Spring MVC annotations.

http://www.helloreverb.com

https://developers.helloreverb.com/swagger/


<a id="IRC">
## IRC Chat channel</a>
<a target="_blank" href="http://swagger.io/irc/">
http://swagger.io/irc</a> is provided (instead of a client),
Swagger is on freenode.net in the #swagger channel.


https://www.youtube.com/watch?v=mZ8_QgJ5mbs
