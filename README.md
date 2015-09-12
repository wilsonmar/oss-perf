# true-perf-under-load
An example of how to measure the true response time observed by real users while generating artificial loads using JMeter, Selenium, Appium, BrowserMobProxy, etc.

## The annoyance
There are two types of scripts that pretend to be internet browsers and mobile devices.

  * One type of script was created by "sniffing" the pattern of bytes traveling across the network
    (JMeter, LoadRunner C-scripts, etc. are in this category)

  * the other type of script was created by pretending to be someone typing and moving the mouse around the screen
    (Selenium, Appium, QTP/UFT, TruClient, are in this category)

The dilemma is that these are two different types of scripting efforts, 
typically using different programming languages and different tools.

The problem is that because performance testing tools focus on file transfers,
they do not report delays caused by JavaScript client-rendering.


## This repo
This repo contains assets used to measure "true" response times 

The best of both worlds.

