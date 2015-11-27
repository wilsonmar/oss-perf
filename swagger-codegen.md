This section describes how to generate source code which call REST APIs described as
<a target="_blank" href="https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md">
<a target="_blank" href="https://github.com/swagger-api/swagger-spec">**spec v2.0 code**</a>
hosted on a Swagger server.

Swagger-codegen uses Scala 2.9.1 programs to generate server code in Node.js and PHP.

0. <a href="#SwaggerSpecs"> Swagger specs</a>
0. <a href="#InstallScala"> Install Scala</a>
0. <a href="#InstallNode"> Install Node.js server</a>
0. <a href="#InstallScala"> Install Scala</a>

0. <a href="#ServerSwagger"> Use swagger-codegen to create server program.</a>


<hr />
<a id="SwaggerSpecs"> 
## Swagger specs</a>

Swagger specs can be the product of reverse-engineering, derived by a program analyzing 
methods, parameters and models within server source code.

The intent of swagger specs is readability by both humans and machines.

It's done by leveraging <a target="_blank" href="https://github.com/swagger-api/swagger-codegen">
swagger-codegen</a>, which provides {{moustache}} templates for all major programming languages:
for Java, Scala, Goovy, Python, Ruby, Clojur, ObjectiveC, C#, PHP, JavaScript.

Custom ones can also be created. This feature is leveraged by 
the companion **jmeter-codegen** library, which provides the template for generating JMeter tests
to validate server handling of requests and responses at run-time.

Its objective is to eliminate delays between coding and full testing, just as
the overarching goal of Swagger is to update client code at the same pace as the server
by means of code generation.


<a id="InstallScala"> 
## Install Scala</a>

0. Scala.
<li>- Scala 2.9.1 [available here](http://www.scala-lang.org)

0. Aadd the scala binary to your PATH.


<a id="MavenBuild"> 
## Build using Maven</a>
0. Use a Terminal to position to src:
0. Build:

    ```
mvn package
    ```

<a id="#InstallNode"> 
## Install Node.js server</a>


<a id="Resources">
## Resources</a>

https://github.com/swagger-api/swagger-spec/wiki
