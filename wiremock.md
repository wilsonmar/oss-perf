<a target="_blank" href="https://github.com/tomakehurst/wiremock"> Wiremock at https://github.com/tomakehurst/wiremock</a>
is an open-source Java-language library for stubbing and mocking (proxying) web services 
to replace dependency servers.

On August 18, 2012, Wiremock author Tom Akehurst (@Akehurst work in UK consultancy EnergizedWork) 
wrote in his blog:
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

http://mvnrepository.com/artifact/com.github.tomakehurst/wiremock/1.23

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


<a id="JSON">
## JSON sample</a>

  ```
POST  __admin/mappings/new
{ 
	“request”: {
					“method”: “POST”,
					“urlMatching”: “/?q=\w+”
},
“response”: {
				“status”: 404
				“body”: “<html>Whoops</html>”
}
}
  ```

Regular expression: `/?q=\w+`


<a id="Coding">
## Sample Coding</a>

Fluent Java API

  ```
  stubFor(post(urlMatching("/?q=\\w+"))
           .willReturn(aResponse()
                           .withStatus(404)
                           .withBody("<html>Whoops!</html>")));
  ```

Test

  ```
  public void testFoo() {
   // point your app at http://localhost/10.0.2.2:3456
   stubFor(post(urlMatching("/?q=\\s+"))
               .willReturn(aResponse()
                      .withStatus(404)
                      .withBody("<html>Whoops!</html>")));
   getActivity();
   onView(withId(R.id.foo_button)).perform(click());
   onView(withText("Whoops!")).check(matches(isDisplayed()));
   verify(1, postRequestedFor(urlEqualTo("/?q=foo")));
}
  ```

Stateful

  ```
stubFor(post(urlEqualTo("/pay")).inScenario("MAKE PAYMENT")
  .whenScenarioStateIs("PAYMENT DUE")                                     
  .willSetStateTo("PAYMENT")
  .willReturn(aResponse()
                .withStatus(200)
                .withBody("Thank you.")));
  ```
  
Errors

```
   stubFor(post(urlEqualTo("/pay"))
               .willReturn(aResponse()
               .withFault(MALFORMED_RESPONSE_CHUNK)));
  ```
  
Delays

  ```
stubFor(post(urlEqualTo("/pay"))
           .willReturn(aResponse()
                           .withFixedDelay(500)));
  ```
