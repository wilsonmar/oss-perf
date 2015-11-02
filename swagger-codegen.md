This section describes how to generate source code which call REST APIs described as
<a target="_blank" href="https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md">
<a target="_blank" href="https://github.com/swagger-api/swagger-spec">**spec v2.0 code**</a>
hosted on a Swagger server.

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
 
We begin with generating 
http://petstore.swagger.io

<a id="Resources">
## Resources</a>

https://github.com/swagger-api/swagger-spec/wiki
