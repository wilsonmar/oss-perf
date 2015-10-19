
0. <a href="#AboutWiremock"> About WireMock</a>
0. <a href="#UserForums"> User Forums</a>
0. <a href="#Videos"> Videos</a>
0. <a href="#StandaloneServer"> Stand-alone server setup</a>
0. <a href="#CLISample"> Command-line samples</a>

0. <a href="#ExtendWireMock"> Extend WireMock</a>

<hr />

<a id="AboutWiremock">
## About WireMock</a>

Wiremock is an open-source Java-language library for stubbing and mocking (proxying) web services 
to replace dependency servers.

On August 18, 2012, Wiremock author Tom Akehurst (@Akehurst work in UK consultancy EnergizedWork) 
wrote in his blog:
http://www.tomakehurst.com/introducing-wiremock-an-http-service-stubbing-library/
about his repo <a target="_blank" href="https://github.com/tomakehurst/wiremock">  https://github.com/tomakehurst/wiremock</a>

  "Wiremock allows HTTP exchanges to be stubbed and verified. 
  It does this by creating an actual HTTP endpoint, 
  rather than by stubbing or mocking the HTTP client class"
  (like JMock or Mockito)

Wiremock can be used different ways:

  * run as a standalone process, or 
  * directly from within **JUnit**,
  * deployed into a container with the aim of covering off a wide range of testing scenarios. 

Wiremock supports HTTP response stubbing, request verification, proxy/intercept, record/playback of stubs and fault injection, 

  * Stubbing returns canned resources (request A always returns reponse B).
  * <a href="#FaultInjection">Fault injection</a>, such as returns HTTP 503 error or blanks,
    is done for **resiliancy testing** of server code.

Although it’s written in Java, and there is a fluent Java API,
there’s also a **JSON API** for use with pretty much any language out there.


<a id="UserForums">
### User Forums ::</a>

0. Read the latest posts at <a target="_blank" href="https://groups.google.com/forum/#!forum/wiremock-user">
	https://groups.google.com/forum/#!forum/wiremock-use</a>
	(Registration with gmail account is necessary).


<a id="Videos">
### Videos ::</a>

Changes to the Github from 2011 visualized in a video:
https://www.youtube.com/watch?v=fPMJu6i1XDE

https://www.youtube.com/watch?v=sUsh3EnzKKk
Lucy Chang explains how at Intuit she uses WireMock to do resiliency testing dependencies.

https://www.youtube.com/watch?v=sUsh3EnzKKk



<a id="StandaloneServer">
## Stand-alone server setup</a>

0. Download **wiremock-1.53-standalone.jar** from 
   <a target="_blank" href="http://wiremock.org/">http://wiremock.org</a>

0. Open a terminal to accept command line input.
0. Navigate to where the jar file was downloaded. On a Mac, it is typically:

	```
	cd ~/Downloads
	```

0. Identify the version downloaded. As of this writing, it was 1.57.
   Change the command in the java command below as needed.

0. Change the Start stand-alone server:

	```
	java -jar wiremock-1.57-standalone.jar --verbose 
	```

	The response:
	
	```
	2015-10-19 08:55:18.93 Verbose logging enabled
2015-10-19 08:55:18.616:INFO::Logging to STDERR via wiremock.org.mortbay.log.StdErrLog
2015-10-19 08:55:18.621 Verbose logging enabled
 /$$      /$$ /$$                     /$$      /$$                     /$$      
| $$  /$ | $$|__/                    | $$$    /$$$                    | $$      
| $$ /$$$| $$ /$$  /$$$$$$   /$$$$$$ | $$$$  /$$$$  /$$$$$$   /$$$$$$$| $$   /$$
| $$/$$ $$ $$| $$ /$$__  $$ /$$__  $$| $$ $$/$$ $$ /$$__  $$ /$$_____/| $$  /$$/
| $$$$_  $$$$| $$| $$  \__/| $$$$$$$$| $$  $$$| $$| $$  \ $$| $$      | $$$$$$/ 
| $$$/ \  $$$| $$| $$      | $$_____/| $$\  $ | $$| $$  | $$| $$      | $$_  $$ 
| $$/   \  $$| $$| $$      |  $$$$$$$| $$ \/  | $$|  $$$$$$/|  $$$$$$$| $$ \  $$
|__/     \__/|__/|__/       \_______/|__/     |__/ \______/  \_______/|__/  \__/

port:                         8080
enable-browser-proxying:      false
no-request-journal:           false
verbose:                      true
	```
	
	NOTE: The default port is 8080, but that can be changed.
	Additional parameters are described in <a target="_blank" href="http://wiremock.org/running-standalone.html#running-standalone">
	http://wiremock.org/running-standalone.html#running-standalone</a>


<a id="CLISample">
### Command-line samples</a>
The Wiremock page suggests these commands emulating an internet browser:

0. Establish a response by a POST of JSON to built-in end-point code:

	```
	curl -X POST --data '{ "request": { "url": "/get/this", "method": "GET" }, "response": { "status": 200, "body": "Here it is!\n" }}' http://localhost:8080/__admin/mappings/new
	```

	The end-point is `http://localhost:8080/__admin/mappings/new`.

	No response is returned to the UI if successful.
	
0. Retrieve:

	```
	curl http://localhost:8080/get/this
	```

	The response should be "Here it is!" as defined above.
	
	Clients can now access 
	
<a id="Maven">
## Maven</a>

  http://mvnrepository.com/artifact/com.github.tomakehurst/wiremock/1.23



<a id="ConditionalForwarding">
## Conditional Forwarding</a>
Other handy stuff it’ll do includes conditional forwarding of requests to other services (enabling proxy/intercept), record/playback of stubs, fault injection, stateful behaviour and response delays.



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

Fluent Java API stubFor

  ```
  stubFor(get(urlEqualTo("/from/where"))
           .willReturn(aResponse()
                           .withStatus(200)
                           .withBody("<html>Whoops!</html>")
                           .withHeader("Cache-Control","no-cache")
                           .withHeader("Content-Type","text/plain")
                           .withBody("Hello world")
           ));
  ```

Error response:

  ```
  stubFor(post(urlMatching("/?q=\\w+"))
           .willReturn(aResponse()
                           .withStatus(404)
                           .withBody("<html>Whoops!</html>")));
  ```

Error response:

  ```
  stubFor(post(urlMatching("/?q=\\w+"))
           .willReturn(aResponse()
           .withFault(Fault.EMPTY_RESPONSE)
          ));
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
  
<a id="FaultInjection">
### Fault Injection</a>

Errors:

```
   stubFor(post(urlEqualTo("/pay"))
               .willReturn(aResponse()
               .withFault(MALFORMED_RESPONSE_CHUNK)));
  ```
  
Delays:

  ```
stubFor(post(urlEqualTo("/pay"))
           .willReturn(aResponse()
                           .withFixedDelay(500)));
  ```

WireMock is an open-source tool.

0. OPTION A: Download the stand-alone jar from http://wiremock.org/running-standalone.html

  NOTE: This is based on code at https://github.com/tomakehurst/wiremock
  which configures Gradle, Travis, etc.

 Feature **Stateful behaviour simulation** means ...
  
0. May need to have a proxy to act like the API, or not.


<a name="ExtendWireMock">
## Extend WireMock</a>

See:

  * <a target="_blank" href="http://wiremock.org/extending-wiremock.html">
    http://wiremock.org/extending-wiremock.html</a>
