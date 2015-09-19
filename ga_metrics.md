This page provides a tutorial on the use of Google Analytics (abbreviated to "GA") 
from the viewpoint of site **speed** to ensure that sites operate 
quickly enough for customer satistifaction and user productivity.
Statistics on **user abandonment**  Bounce Rate or % Exit and
<a href="#Crashes">Crashes and Exceptions</a>
are also relevant here.

## Retention and Revenue impact
This work is different than the "performance" of AdWords and SEO techniques to yield customers.

Several efforts also improve page speed should yield improvement in user retention and revenue generated from the web property:

 * Re-arrangement of UI elements
 * Emails sent out
 * Promotional offers
 * Purchase of ads Google inserts onto websites

## GA Dashboard URL
PROTIP: Log out of your Gmail account before logging in if you use a corporate account.

Google Analytics (abbreviated to "GA" here) is at
<a target="_blank" href="https://www.google.com/analytics/">google.com/analytics</a>.

The remainder of this tutorial assumes that you are logged in.

## GA vs AppDynamics
AppDynamics works by listening to what is occuring inside the data center.

GA works by listening to on end-users' browsers.

## GA Tags
Information displayed in GA is obtained by Google capturing requests to servers from JavaScript 
snippets embedded in website HTML.

The JavaScript snippet can call a specific static tracking tag or call <a target="_blank" href="https://support.google.com/tagmanager/answer/6102821?hl=en">
Google Tag Manager</a> container code which dynamically sets when and which tags fire
according to variables and trigger logic.

Tracking code can be asynchronous.

With Universal Analytics, Google takes a page load sample of 1% of page views, which
<a target="_blank" href="https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#siteSpeedSampleRate">can be increased</a>.

## Cookie-based
GA reports do not rely on the User ID to which a user authenticates, but on
a unique set of cookies stored on a particular person’s browser on a particular computer.
So there are issues with cross-domain or subdomains as well as cross-device retention 
(when a user goes from desktop to mobile).

## GA blocking
Note that GA may not be able to track all users.
There is a growing movement of users who hate being tracked, and pushi back by blocking ads, trackers and GA. 
<a target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/adblock-plus/">AdBlock Plus</a>
is the #1 downloaded Firefox add-on. 
Also, <a target="_blank" href="https://www.ghostery.com/en/faq/">Ghostery</a> 
blocks over 1,955 known ads, trackers, beacons and widgets, including GA.

Placing a badge/notice on your site announcing that you do not track users’ every move can attract users to come back and read/shop with you. (An edge case, I know, but still a positive one.)

## Tutorials on GA

  * http://analytics.blogspot.com/

## Dashboard
<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/9965879/980a5cac-5df6-11e5-9a40-83c7805738e7.png">
<img align="right" width="200" alt="ga_perf_dashboard_zeros" src="https://cloud.githubusercontent.com/assets/300046/9965879/980a5cac-5df6-11e5-9a40-83c7805738e7.png"></a>

Import the ** Site Performance Dashboard** by Justin Cutroni:
  1. Click the Reporting tab at the top of your dashboard home.
  1. Click on Dashboards on the left menu bar
  1. Click + New Dashboard
  1. Click Import from Gallery
  1. Click the search box at the upper right and enter Justin Cutroni.
  1. Click on Site Performance Dashboard (at time of this writing, it was last updated Sep 30, 2013).
  1. Click on the white Import button at the top of the page.
  1. Select the GA account.
  1. Click the blue Create button.

### Individual Screen Views
The ranking of how many **page views** by page name (such as "Home") is useful to know
for scripting to replicate load within a prod-like test environment.

### Site Speed Metrics
Metrics most relevant to site speed include:

* **Avg. Page Download Time**
  is the time to download the page. 
  This the mother of all speed metrics since it averages the amount of time it takes to completely load the page.

  Page download is impacted by the speed of network used by the user and server response time.

* **Avg. Server Response Time**
  is the time the server takes to respond to a user request, including the network time from user’s location to your server.
 
* **Avg. Page Load Time (Secs)**
 is the time it takes for pages from the sample set to load, from initiation of the pageview (e.g. click on a page link) to    load completion in the browser.

Additional metrics measure activities **before** pages load:

* **Avg. Redirection Time**
  is the time spent in redirects before fetching this page. 
  If there are no redirects, the value for this metric should be 0.

* Avg. Domain Lookup Time**
 is the time spent in DNS lookup for this page.

* **Avg. Server Connection Time**
  is time spent in establishing TCP connection for this page.

* Page Load Time by Browser 

* Mobile Page Load Time (Secs)
* Load Time for Popular Pages

* Avg. Server Response Time



### Speed related Metrics
Metrics most relevant to site speed include:

* **Active Users** (count)
  have impact on the amount of memory consumed to maintain "state" of each user logged in the system.

* **New Users** (count)
  have impact on the load on **registration** functionality which involves much database updates.

* **Sessions (count)**
  are the periods of time a user is active on a site (default 30 minutes).

* **Avg. Session duration**
  may be good or bad depending on whether tha app aims to keep users around (to view more ads)
  or aims to make it easier and faster to get work done. 

* **Screens / Session** 
  speaks to the **complexity** of the application being monitored.

  <img alt="ga_perf_dashboard_user_engagement"       src="https://cloud.githubusercontent.com/assets/300046/9968261/abe4013e-5e04-11e5-9ce6-57cb48b0ce3a.png">

  There is generally a correlation that longer sessions occur because of more screens being viewed by users.
  

## Industry Benchmarks
<img align="right" src="https://cloud.githubusercontent.com/assets/300046/9973608/547e30c0-5e33-11e5-84c9-e823e70498f1.jpg" height="100" alt="">
GA provides optional enablement of percentage comparison against benchmarks of over 
1600 Industry vertical categories of 
7 traffic size classifications (by daily visits) at
1250 geographic market locations.
A positive value (for example, 67.80%) show how much the property outperforms the benchmark. 
A negative value (for example, -25.25%) shows how much the property underperforms the benchmark.

http://www.forbes.com/sites/jaysondemers/2014/09/17/what-google-analytics-benchmarking-means-for-businesses/

http://www.searchengineguide.com/jayson-demers/the-definitive-guide-to-google-analytics.php
The Definitive Guide to Google Analytics for SEO Professionals

15 Google Analytics Tricks to Maximize Your Marketing Campaign
http://www.forbes.com/sites/jaysondemers/2014/08/20/15-google-analytics-tricks-to-maximize-your-marketing-campaign/

## Goal related Metrics
The percentage of users who make it all the way to conversion "goal" concluding screen 
(such as receipt after buying, itinerary, back to Home, etc.)
is a key influencer of customer satisfaction and website productivity.

How many users "gave up" because of too much complixity or too slow response.


## Value Anomalies
First use of statistic may require some configuration, such as **timeouts**
if average response times are high, such as:
  
  1,038.88
  
<a name="Crashes"> 
## Crashes and Exceptions</a>
Crashes are a subset of Exceptions.

To be actionable, crash statistics need to be segregated/filtered by **application version** and 
user:

  1. Under the menu category Behavior, select Crashes and Exceptions.
  2. Select **Secondary dimension**. 
  3. Scroll down to **Users**. 
  4. Select data metric User: **Browser**. Its value is always "Google Analytics".
  5. Select data metric User: **Mobile Device Marketing Name**.

  The latest version may not be the one at the top of the list due to the pattern of app updates by users.

  5. Select data metric User: **Mobile Device Info**.
  Mobile Device Marketing Name (such as "Galaxy S5") are a superset of the 
  Mobile Device Info with values such as:
  
      * Samsung SM-G900F Galaxy S5 (Samsung benchmark international model)
      * Samsung SM-G900V Galaxy S5 (US carrier Verizon with non-Samsung firmware)
      * Samsung SM-G900P Galaxy S5 (US carrier Sprint with Samsung firmware)

  The difference between 41 individual models of just the Galaxy S5 are explained at
  http://androidforums.com/threads/41-galaxy-s5-models-dummies-guide.892162/
  
  Some of these models have already had as many as 13 different stock Samsung firmware releases since launch.

  5. Click the sorting arrow for data metric User: **Mobile Device Info**.
  
      Notice the number associated with **(Not Set)**. It's 6.11% of the total.

### App Speed
Time Category used:

  * Wait Time

  * **Sign In** is usually the most "expensive" (longest in duration) of all views
    even though it may not be among the most sampled (such as 17% of all User Timing Samples).


## Rate of processing
Each response time should be considered along with the rate processing when the metric was obtained,
such as the number of transactions per minute (TPM), 
the number of transactions per second divided by 60.


## Segments of users
Session statistics for users who share common attributes can be segmented.
Segments include geographic region.

The number of visitors may include non-human bots.


## Extracts for Monthly Reporting
GA provides output in various formats (CSV, PDF).

http://analytics.blogspot.com/2011/11/simplifying-ecommerce-reporting-across.html

## Filtering and Cross-correlation

## Compare Statistics
When showing each statistic, we want to compare statistics in GA against what work needs to be done
For example:

* when showing a list of **mobile operating systems**, 
  compare the numbers GA calculates with the average response time for each operating system.
  Such information is used to allocate optimization effort across different dev teams.

* when showing the percentage of **New vs Returning Users**,
  compare how many users were required to re-enter their credentials
  (statistics gathered from application logs).
  Such information is used to emulate load on authentication servers.
  
* when showing a list of **countries**, 
  compare GA's numbers with what allocations were targeted by marketing efforts,
  such as the percentage expected based on the targed population of each country.
  Such information can also be used to allocate use of remote CDN (Akamai) which places resources on servers close to 
  where users are located.
  
  GA provides a **map overlay** tab.
  
  QUESTION: Why does both "en" and "en-us" appear?
  
  **Redirect Time for Countries**

* when showing a list of **languages**, 
  compare GA's numbers with 
  Such information is used to prioritize language translation efforts.


## Not that kind of performance
Some information, such as **source/medium** where traffic originated (such as another website or Google search engine).
The medium, to the right of the slash, is the category, such as 
Facebook/Social.


## GA Measurements Protocol API
To allows custom programs to make HTTP requests to send raw user interaction (event / hit) data 
directly to Google Analytics servers,
Google provides its GAMP API at https://developers.google.com/analytics/devguides/collection/protocol/v1/


## Monthly Reporting
But what about monthly extracts for presentations to management and colleagues?

  1. Select the **Month** time scale. Notice the total before filtering.

Be aware of daily, weekly, and monthly cycles of normal activities.
The patterns may be disrupted by special events such as the Superbowl, Thanksgiving, Christmas, etc.

http://www.analyticscanvas.com/ is a Windows-based client program 
from Google Analytics Partner nModal solutions in Toronto was highlighted in 2011 at
http://analytics.blogspot.com/2011/11/simplifying-ecommerce-reporting-across.html


## GA Analytics Academy
