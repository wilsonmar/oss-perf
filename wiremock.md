<a target="_blank" href="https://github.com/tomakehurst/wiremock"> Wiremock at https://github.com/tomakehurst/wiremock</a>
is an open-source Java-language library for stubbing and mocking (proxying) web services 
to replace dependency servers.

On August 18, 2013, Wiremock author Tom Makehurst writes in his blog:
http://www.tomakehurst.com/introducing-wiremock-an-http-service-stubbing-library/

  "Wiremock allows HTTP exchanges to be stubbed and verified. 
  It does this by creating an actual HTTP endpoint, 
  rather than by stubbing or mocking the HTTP client class"
  (like JMock or Mockito)

It supports HTTP response stubbing, request verification, proxy/intercept, record/playback of stubs and fault injection, 
and can be used from within a unit test or deployed into a test environment.

Wiremock can be used directly from within JUnit (or your weapon of choice), 
run as a standalone process or deployed into a container with the aim of covering off a wide range of testing scenarios. 

Although it’s written in Java, and there is a fluent Java API,
there’s also a **JSON API** for use with pretty much any language out there.

  * Stubbing returns canned resources (request A always returns reponse B).
  * Fault injection (returns error or blanks) for resiliancy testing.
  * Easy setup
  * Easy on-boarding

<a target="_blank" href="http://wiremock.org/">http://wiremock.org</a>


<a id="ConditionalForwarding">
## Conditional Forwarding</a>
Other handy stuff it’ll do includes conditional forwarding of requests to other services (enabling proxy/intercept), record/playback of stubs, fault injection, stateful behaviour and response delays.


<a id="UserForums">
## User Forums ::</a>

<a target="_blank" href="https://groups.google.com/forum/#!forum/wiremock-user">
https://groups.google.com/forum/#!forum/wiremock-user</a>


## Videos ::

Changes to the Github from 2011 visualized in a video:
https://www.youtube.com/watch?v=fPMJu6i1XDE

https://www.youtube.com/watch?v=sUsh3EnzKKk
Lucy Chang explains how at Intuit she uses WireMock to do resiliency testing dependencies.

https://www.youtube.com/watch?v=sUsh3EnzKKk
