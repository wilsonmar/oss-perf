An example of how to measure the true response time observed by real users while generating artificial loads using JMeter, Selenium, Appium, BrowserMobProxy, etc.

## Introduction: The annoyance
There are two types of scripts that pretend to be internet browsers and mobile devices.

  * One type of script was created by "sniffing" the pattern of bytes traveling across the network
    (JMeter, LoadRunner C-scripts, etc. are in this category)

  * the other type of script was created by pretending to be someone typing and moving the mouse around the screen
    (Selenium, Appium, QTP/UFT, TruClient, are in this category)

The dilemma is that these are two different types of scripting efforts, 
typically using different programming languages and different tools.

The problem is that because performance testing tools focus on *file transfer time*,
they do not report time for JavaScript client-rendering,
which grows more over time as more work is being done client-side.

## Under load

Contents of this repo was used to generate statistics such as this:

<img alt="truperf_load" src="https://cloud.githubusercontent.com/assets/300046/9831874/f6a32c6e-591c-11e5-949b-607fcd2ead6b.png">

The top edge of the blue triagle illustrates the ramp-up of 100 users all communicating with the same server.
TODO: Make axis numbers blue as well.

Virtual users in the run are distributed evenly among different browsers and the JMeter client emulator.

On the left side at the beginning of the run there is some variation in response time.

On the right side when a large number of users are working all at once, response time increases due to several factors.
One is the *server* makes some users wait in the queue while it processes other users.
TODO: Chart separting sever vs. network vs. client time.
For some reason, Firefox is more stressed than Chrome when servers are delayed
during periods of maximum load.


## Bar chart
This bar chart shows statistics on the range of response times:

<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/9830052/ed39d31e-58d4-11e5-8ba3-92a536fb1e48.png">
<img src="https://cloud.githubusercontent.com/assets/300046/9830052/ed39d31e-58d4-11e5-8ba3-92a536fb1e48.png"></a>

This chart shows how significantly <strong>JMeter can under-report response times</strong>.
TODO: Investigate conflicting results between 2 charts (Chrome vs. Firefox).
TODO: Add Microsoft IE and Edge
TODO: Add HP TruClient?

## This repo
The contents of this repo was used to generate statistics for the charts above.

0. **Jenkins** 
initiates the various programs listed below on a schedule or when a build is requested.

0. **JMeter**

0. **Selenium WebDriver**
controls desktop browsers as if humans were tapping on the keyboard and moving the mouse around a browser.

0. **Appium**
controls native mobile smart phones as if humans were swiping and tapping the screen.

0. **BrowserMob proxy** 
captures network traffic into HTTP Archive Report (HAR) files containing measurements of time to load elements on the page. There are several **precise** points in time that can be measured:

 <img alt="truperf_selenium_timers" src="https://cloud.githubusercontent.com/assets/300046/9831936/7ae6a9d6-591f-11e5-8f54-29f725c5b6c1.png">


0. **Netlimiter** simulaties mobile network bandwidth on top of JMeter.

<hr size=5>

