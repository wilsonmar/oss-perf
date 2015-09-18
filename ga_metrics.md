This page provides a tutorial on the use of Google Analytics (abbreviated to "GA" here) 
from the viewpoint of site **speed** to ensure that sites operate 
quickly enough for customer satistifaction and user productivity.
Statistics on **user abandonment** is also relevant here.

This is different than "performance" of AdWords and SEO techniques to yield customers.

## GA URL
PROTIP: Log out of your Gmail account before logging in if you use a corporate account.

Google Analytics (abbreviated to "GA" here) is at
<a target="_blank" href="https://www.google.com/analytics/">google.com/analytics</a>.

The remainder of this tutorial assumes that you are logged in.

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
  
### Site Speed Metrics
Metrics most relevant to site speed include:

* Avg. Page Load Time (Secs)
* Page Load Time by Browser
* Mobile Page Load Time (Secs)
* Load Time for Popular Pages

* Avg. Server Response Time
* Avg. Domain Lookup Time

### Speed related Metrics
Metrics most relevant to site speed include:

* **Active Users** (count)
  have impact on the amount of memory consumed to maintain "state" of each user logged in the system.

* **New Users** (count)
  have impact on the load on **registration** functionality which involves much database updates.

* **Sessions (count)**

* **Avg. Session duration**
  may be good or bad depending on whether tha app aims to keep users around (to view more ads)
  or aims to make it easier and faster to get work done. 

* **Screens / Session** 
  speaks to the **complexity** of the application being monitored.


## Anomalies
First use of statistic may require some configuration, such as **timeouts**
if average response times are high, such as:
  
  1,038.88
  
## Rate of processing
Each response time should be considered along with the rate processing when the metric was obtained,
such as the number of transactions per minute (TPM), 
the number of transactions per second divided by 60.

## Monthly Reporting

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


## GA Measurements Protocol API
To allows custom programs to make HTTP requests to send raw user interaction (event / hit) data 
directly to Google Analytics servers,
Google provides its GAMP API at https://developers.google.com/analytics/devguides/collection/protocol/v1/


## Monthly Reporting
But what about monthly extracts for presentations to management and colleagues?

http://www.analyticscanvas.com/ is a Windows-based client program 
from Google Analytics Partner nModal solutions in Toronto was highlighted in 2011 at
http://analytics.blogspot.com/2011/11/simplifying-ecommerce-reporting-across.html


## GA Analytics Academy
