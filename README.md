An example of how to measure the true response time observed by real users while generating artificial loads using JMeter, Selenium, Appium, BrowserMobProxy, etc.

## Introduction: The annoyance
There are two types of scripts that pretend to be internet browsers and mobile devices.

  * One type of script was created by "sniffing" the pattern of bytes traveling across the network
    (JMeter, LoadRunner C-scripts, etc. are in this category)

  * the other type of script was created by pretending to be someone typing and moving the mouse around the screen
    (Selenium, Appium, QTP/UFT, TruClient, are in this category)

The dilemma is that these are two different types of scripting efforts, 
typically using different programming languages and different tools.

The problem is that because performance testing tools focus on file transfers,
they do not report delays caused by JavaScript client-rendering.

<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/9830052/ed39d31e-58d4-11e5-8ba3-92a536fb1e48.png">
<img src="https://cloud.githubusercontent.com/assets/300046/9830052/ed39d31e-58d4-11e5-8ba3-92a536fb1e48.png"></a>

This chart shows how significantly JMeter under-reorts response times.

## This repo
Contents of this repo was used to generate statistics for this chart.

This repo contains assets used to measure "true" response times 

The best of both worlds.

