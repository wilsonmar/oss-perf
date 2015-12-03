This page describes different ways to impose load on web servers.

There are several ways automation scripts can pretend to be internet browsers and mobile devices:
network emulation vs. UI control.

<a name="FuncTestScript"></a>
a). By **controlling the UI** of browsers and native apps,
pretending to be someone typing and moving the mouse around the screen
(Selenium, Appium, QTP/UFT, TruClient, are in this category).

These make use of passwords unique to each user
or two-factor authentication (2FA) tokens which users type into UI dialogs.

<a name="NetworkEmulationTestScript"></a>
b). By **emulating the network traffic** between client and server
(BadBoy to capture traffic, JMeter, LoadRunner C-scripts, etc. are in this category).

Such interfaces authenticate using OAuth2 hand-shaking which involves one-way signing or
OAuth1 which involves mutual exchange of public keys.

These two different types of scripting efforts may
use different programming languages and different tools,
and thus by different people in different groups that don't necessarily talk with each other.

Network traffic emulation scripts can call **API (Application Programming Interfaces)**
which "headless" programs communicate with each other (with no UI for human users).

It can be time-consuming to create traffic emulation scripts due to the need to "sniff" traffic
in order to convert observed patterns to script code.

Traffic emulation scripts focus on **file transfer time**,
and cannot report time for JavaScript client-rendering,
which grows more over time as more work is being done client-side.

Codification of API calls into standard patterns makes it now possible to 
**generate test script code**.


<a id="Resources">
## Resources</a>
For more on this topic, see:

* https://www.oreilly.com/learning/primer-on-performance-of-web-applications
  by Tom Baker, dated September 15, 2015.
