This section describes how to generate source code which call REST APIs described in JSON code on a Swagger server.

It's done by leveraging <a target="_blank" href="https://github.com/swagger-api/swagger-codegen">
swagger-codegen</a>, which provides {{moustache}} templates for all major programming languages:
for Java, Scala, Goovy, Python, Ruby, Clojur, ObjectiveC, C#, PHP, JavaScript.
Custom ones can also be created.

The companion **jmeter-codegen** library provides the moustache template for generating JMeter tests
to validate server handling of requests and responses at run-time.




