This page is about using the open-source Wiremock Java program to provide a real web service API endpoint for testing
(rather than stubbing or mocking HTTP code in client code that later must be removed).

<a name="Why">
## Why</a>

Developers can use it to continue working on their programs without need to be constantly connected to dependent APIs mocked.

Feature **Configurable response delays** is useful to see whether a program being develop correctly handles
situations when a real API is so slow that it causes performance programs in the calling program.

Dan Bodart explains (back in 2012) that the <a target="_blank" href="http://dan.bodar.com/2012/02/28/crazy-fast-build-times-or-when-10-seconds-starts-to-make-you-nervous/">
value of tests decreases rapidly as their execution time increases</a>.

0. Read the latest posts at https://groups.google.com/forum/#!forum/wiremock-user

0. OPTION A: Download the stand-alone jar from http://wiremock.org/running-standalone.html

  NOTE: This is based on code at https://github.com/tomakehurst/wiremock
  which configures Gradle, Travis, etc.

 Feature **Stateful behaviour simulation** means ...
  
0. May need to have a proxy to act like the API, or not.

0. You may need to extend wiremock:

  * http://wiremock.org/extending-wiremock.html

 For example, a virtualized service emulating the airline industry GDS (Glbal Data Service) 
 would create valid origins and destinations based on codes defined by the IATA.


<a name="Controversy">
## Controversy</a>

The effort to mock enables a development team to 
"catch changes in the implementation that would have broken our code".

"You might use mocks to simulate behaviour that is hard to trigger with the real library, such as throwing exceptions."

"Similarly, you might use mocks to test a sequence of calls, for example making sure that a transaction is rolled back if there's a failure."

There should not be many of these in a test suite.

The above comments are in the 2007 page
<a http://www.mockobjects.com/2007/04/test-smell-everything-is-mocked.html">
http://www.mockobjects.com/2007/04/test-smell-everything-is-mocked.html</a>
titled Don't mock third-party libraries.

Steve Freeman also writes:

"There are two problems when mocking a third-party library. First, you can't use the tests to drive the design, the API belongs to someone else. Mock-based tests for external libraries often end up contorted and messy to get through to the functionality that you want to exercise. These tests are giving off smells that highlight designs that are inappropriate for your system but, instead of fixing the problem and simplifying the code, you end up carrying the weight of the test complexity. 

The second issue is that you have to be sure that the behaviour you implement in a mock (or stub) matches the external library. How difficult this is depends on the API, which has to be specified (and implemented) well enough for you to be certain that the tests are meaningful.

To develop against an external API, first TDD your code to define interfaces for the services that your application needs in terms of your domain. Then write a thin layer using the library to implement these interfaces, with focussed integration tests to confirm your assumptions about how it works. 

How to make integration tests work effectively will depend on your environment, but you will need to do it anyway so you might as well start early and get the benefit. There will be relatively few integration tests, compared to the number of unit tests, so they should not get in the way of the build even if they're not as fast as the in-memory tests."


<a name="Rescue">
## Open Source to the Rescue</a>

Let's address this together.

I think we can cover more ground, faster by working together.

The community of users of an service need to work together, independently of the provider of that service.
