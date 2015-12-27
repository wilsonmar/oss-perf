This page provides background information on Tableau software (an alternative to Kibana, Cognos, and other analytics software).

Tableau is a complete Data Analytics platform enabling everyone to gain
insights from raw data. It makes working with data universally accessible.


<a id=“Architecture”>
## Architectural Concepts</a>
Several editions of Tableau client programs can be installed on Windows and Mac laptops. 

<img width="474" alt="tableau mac program icons" src="https://cloud.githubusercontent.com/assets/300046/12008208/5ae8f75c-abe9-11e5-911d-534176a8e0ab.png">

The licensed Desktop edition can read more types of data sources. 

<img width="640" alt="tableau components v03" src="https://cloud.githubusercontent.com/assets/300046/12007683/71c8b308-abcc-11e5-864d-5f388357f824.png">

The Tableau Public website provides a gallery for showing and blogging about workbooks created on the Public edition of client software. Tableau limits public workbooks to 100,000 data rows.

Private team workbooks are shared on a <strong>Tableau Server</strong> or in the online service Tableau runs. A web app accessed using an internet browser is used to administer users on those servers. A REST API can be used by other servers to access data. The Tableau Reader can read but not save workbooks.


<a id=“ClientInstall”>
## Client Programs Installation</a>
The different Tableau clients are downloaded from separate URLs.

<a href="http://www.tableau.com/products/desktop/download?os=mac%20os%20x">
Tableau Desktop</a> Personal and Pro editions are licensed at $999 and $1999 per year to access a wide range of data sources.

http://www.tableau.com/products/reader

| Date | Component - Version | Installer | Installed |
| ------ | ----------------------- | -------: | -------: |
| 2015-12-07 | TableauReader-9-2-0.dmg | 190.2 MB | 668.4 MB |
| 2015-12-01 | TableauPublic-9-2-0.dmg | 185.5 MB | 683.8 MB |
| 2015-07-20 | TableauDesktop-9.2.0.dmg | 192.1 MB | 682.4 MB |
| 2015-07-20 | TableauDesktop-9.0.4.dmg | 183.7 MB | 643.4 MB |
| 2015 | TableauServer-64bit-9-2-0.exe | 1.1 GB | - |

QUESTION: Why does the Reader larger than others when it has least capability?

QUESTION: You don't need to instal Public or Reader if you have Deskstop installed?

The Server <a target="_blank" href="http://www.tableau.com/products/server/download">
Download from here</a> only runs within Windows (32 or 64 bit).

There are several ways to open a Tableau client program (explained below):

1. <a href=“#ExcelOpen”>Open Excel from Local Data Folder</a>.
2. <a href=“#ClientOpen”>Open a Tableau Client Program</a>.

The Tableau Desktop edition has "Server" in its menu:

<img width="640" alt="tableau desktop menu" src="https://cloud.githubusercontent.com/assets/300046/12003983/eef00806-aaf3-11e5-902b-6c8098fdfdd4.png">


<a id=“ExcelOpen”>
## Open Excel from Local Data Folder</a>

0. On a Mac, open a new Finder window.

0. Within your user's <strong>Documents</strong> folder, scroll to click on the <strong>My Tableau Repository</strong> folder created during client installation.

0. Click to drill into the <strong>Datasources</strong> folder.
0. Click on a version number of the Tableau client installed (9.2).

   There is a separate folder for each version of Tableau (9.2, 9.0, etc.) because 
   data structures often change with each new version.

0. Click on a locale (en_US_US).

   Tableau clients 9.0 come with an Excel file <strong>Sample - Superstore.xls</strong>.
   Notice it's 3.4 MB.

0. Click on that file opens it within Excel (if you have Microsoft Office installed).

   At the lower left corner, notice there are 3 tabs (worksheets) named Orders, Returns, People.

0. Switch back to Finder. To open .xls files from the Finder, control-click on the xls file and select Open With > Other ..., select Tableau.
0. For Enable: select All Applications.
1. Select Tableau and click OK to view in Tableau client Data Connection window:

   <img width="441" alt="tableau data superstore" src="https://cloud.githubusercontent.com/assets/300046/12007900/dec9ea0c-abd7-11e5-92a6-554639aa0884.png">

   You can also get here by clicking "Excel" in Tableau's Connect menu.

0. Click the red x at the upper left corner to close the program.

<a id=“ClientOpen”>
## Open Tableau Client Program</a>
After installation on a Mac, open a Tableu client:

0. Open a Mac Finder window by holding down command and pressing Tab until the Finder icon is highlighted.

   <img width="50" alt="mac finder icon" src="https://cloud.githubusercontent.com/assets/300046/12010031/c86cb044-ac51-11e5-949d-70e1e5d35514.png">

0. Pull down the Finder Go menu for Applications or press Shift+command+A.

   The Tableau Desktop program is named simply "Tableau".
   
   If a second version of the same program was installed, it would be called "Tableau 2".
   If you want to change the name, click on the program name.
   
0. Double-Click on the Tableau program to start it.

   More than one instance of the Tableau client can be running at the same time.

<img width="676" alt="tableau data sources" src="https://cloud.githubusercontent.com/assets/300046/11996554/90f17590-aa22-11e5-8abd-5dec3b430966.png">

Shown above is from the Pro version, which connects to Tableau Server for web-based analytics
using a lot more different data sources under the <strong>Connect</strong> section.

https://www.youtube.com/watch?v=fEoB8EIEETQ
describes Connecting to databases and advanced features.


<a id=“CloseClient”>
## Close Client Program</a>

0. Click the red x at the upper left corner of the window.
1. Click Save.
2. Change the name from Book2 or whatever is auto-assigned to something else.

   Notice the default folder is <strong>Workbook</strong> (.twb).

   <img width="477" alt="tableau save file" src="https://cloud.githubusercontent.com/assets/300046/12008195/934a3a9e-abe8-11e5-9edc-3c51649566d9.png">

<a id=“FileTypes”>
## File Types</a>

<img width="600" alt="tableau files v03" src="https://cloud.githubusercontent.com/assets/300046/12007685/a00f8e08-abcc-11e5-9baa-14df2745ebe1.png">

As <a target="_blank" href="http://onlinehelp.tableau.com/current/pro/online/mac/en-us/help.htm#environ_filesandfolders.html">explained here</a>:

<strong>.csv</strong> is a Comma Separated Value text format that Excel and many other programs can open. 
CSV files are called "Statistical Files" in Tableau client UI Connect.

<strong>.xls</strong> is a Microsoft Office Excel 1998+ format.

<strong>.xlsx</strong> is a Microsoft Office Excel 2007+ format.

<strong>.tds</strong> data source files (as explained <a target="_blank" href="https://community.tableau.com/external-link.jspa?url=http://kb.tableausoftware.com/articles/knowledgebase/export-data-connection">here</a>) are like shortcuts containing information needed to just connect to the data sources, such as data source type, location, and custom fields. 

<strong>.tde</strong> extract files (explained <a target="_blank" href="http://onlinehelp.tableau.com/current/pro/online/mac/en-us/help.htm#extracting_data.html">here</a>) 
are a local copy of an entire data source (or its subset) created programmatically
using <a href="#ExtractAPI">Tableau Extract API</a>.

<strong>.tdsx</strong> Packaged Data Source files contains all the information in the Data Source (.tds) file as well as any local file data sources (Excel, Access, text, and extracts). Packaged means a single zipped file for easier sharing a data source with people who may not have access to the original data that is stored locally on your computer.

<strong>.twb</strong> is the native workbook. It does not contain any data, which is why a packaged workbook is needed.

<strong>.twbx</strong> packaged workbook files (as explained <a target="_blank" href="https://community.tableau.com/external-link.jspa?url=http://onlinehelp.tableausoftware.com/current/pro/online/en-us/help.htm#save_savework_packagedworkbooks.html">here</a>) contain one or more worksheets, plus zero or more dashboards and stories. These files are what is transferred to and from Tableau servers.

CAUTION: None of the above formats are encrypted with any data security.

http://onlinehelp.tableau.com/v9.2/public/online/mac/en-us/help.html#upgrading_connection.html

0. PROTIP: You may want to create a separate folder to store all Excel data files locally in the same Excel folder. 
Store all Microsoft Office Access files in an Access folder.



<a id=“StartVideos”>
## Getting Started Videos</a>

<a target="_blank" href="http://www.tableau.com/learn/tutorials/on-demand/getting-started">
Tableau's 23-minute Getting Started video</a>
shows step-by-step how to open a spreadsheet, create several charts from it, and a dashboard with a story.

PROTIP: Things happen fast on this video. So most people will need to pause frequently and watch several times. The web video presentation automatically jumps back to the beginning after long pauses, and doesn't show the entire screen until it's maximized. Annoying.
So use link to save the MP4 video file so you can download it for viewing offline.

0. Click on the video and register.
0. Scroll to the MP4 link to the video that appears after registration.
0. On a Mac, hold down fn key and click the Data Set link to download the 
   <strong>global_superstore.zip</strong> file to your Downloads folder.

   WARNING: Do not use the xls file installed with a Tableau client. 
   Even though the file names are similar, 
   it is missing the "Market" Dimension and "Shipping Cost" Measure referenced in the video.

0. Scroll to links to the Transcript pdf of the video.

   <img width="269" alt="tableau getting started links" src="https://cloud.githubusercontent.com/assets/300046/12009995/09a9abb8-ac50-11e5-8cae-ff102a980f4f.png">

0. On a Mac, hold down fn key and click the _Data Set_ link to download the 
   <strong>global_superstore.zip</strong> file to your Downloads folder.
0. In Finder, double-click on the file to unzip it to yield file <strong>Global Superstore.xls</strong>.
0. Delete the global_superstore.zip file to unclutter your hard drive.
0. Move the Global Superstore.xls file to your user local Documents / My Tableau Repository / Workbooks folder so that it appears after clicking Excel under Connect To a file.

The tutorial will end up with this menu of views:

<img width="640" alt="tableau getting started views" src="https://cloud.githubusercontent.com/assets/300046/12010083/ee51f34e-ac53-11e5-8907-93aa4dc7df87.png">

(But the _Solution Workbook_ link to the <strong>getting_started_finished.twbx</strong> workbook does not really reflect the video)

Below are time codes to the video and links to my enhanced notes lower on this page.

* [0:30] <a href="#LocaDataFolder">Superstore xls file</a> 
* [1:04] Connecting Live versus Extracting. Connect to the "Global Superstore.xls" file.
* [1:09] <a href="#Joins">Joins</a> 
* [1:52] Rename field, Split Order ID Data Preparation split 
*   <a href="#Dimensions">Dimensions and Measures</a>
*   Building Views
*   Quick Table Calculations
* [7:42] Exporting Data by right-click on the viz. Copy Data. Switch to Excel. Paste.
* [8:04] Right-click on the chart tab, Duplicate as Crosstab.
* [8:45] Profit. Change font color for highlight table.
* [9:38] Show Me chart types. Hold control key while clicking measures and dimensions.
* [11:08] Filters. Quick filter.
* [12:08] Hierarchies by dragging Sub-Cateogy and dropping on Catetory. Call it Products.
* [13:13] Expand and contract hierarchy clicking [+] and [-] on pills. 
* [13:22] Swap axis and Fit Height
* [13:30] Sort from pill and axis.
* [14:05] Mark labels by clicking Abc button.
* [14:17] Drag Profits on top of Color Mark.
* [14:23] Group by dropping Market to the left of vertical axis.
* [14:31] Select headers to group similar items together using paperclip icon.
* [14:49] Edit Alias.
*   Working with Marks
*   Trend Lines
*   Dashboards
* [19:50] Story Points walk users through several captions on a navigator scroller, each analyzing a snapshop of visualizations.
* Callouts can be added on top of each visualization.
*   Distributing Content


<a id=“Joins”>
## Joins and Data Splits</a>

The sample Excel workbook contains Sheets named Orders, People, and Returns.
"Users" are used in previous versions of this file.

0. Drag one of the Sheets (Orders) to the canvas pane.

   Version 9+ automatically recognizes a "union (add rows)" drop target that concatenates multiple files containing the same headings.

   Version 9+ has a Excel cleaning data interpreter feature that automatically recognizes and stiches together subtables into a single data source.

0. Drag another Sheet (Returns) to the canvas.

   Tableau automatically suggests a join type:

   <img width="400" alt="tableau joins" src="https://cloud.githubusercontent.com/assets/300046/11996601/ba10d618-aa23-11e5-8c64-44044d1fa73e.png">

0. If a column contains multiple fields, split them into sub-columns:

   <img width="220" alt="tableau data split options" src="https://cloud.githubusercontent.com/assets/300046/11996699/ff0d9ed4-aa25-11e5-8411-c8281ace509e.png">

0. Delete sub-columns not needed.

0. Because data is now loaded within Tableau, hover over a heading to Rename the heading to "Distribution Center".

0. Click on the data type under the heading name to change it.

   <img width="130" alt="tableau data type options" src="https://cloud.githubusercontent.com/assets/300046/11996668/3f0d7fbe-aa25-11e5-8057-ef16bf34f4aa.png">

0. [02:42] Specify a Live connection to dynamically retrieve fast-changing data or import a static Extract for offline usage.
    
    <img width="205" alt="tableau connection live" src="https://cloud.githubusercontent.com/assets/300046/12008063/9b76621c-abe1-11e5-808d-199268544b0d.png">

0. You can later return to this by clicking tab "Data Source" at the lower left of the screen:

   <img width="640" alt="tableau bottom tabs" src="https://cloud.githubusercontent.com/assets/300046/12003056/671ccb96-aace-11e5-9d3c-3a9ab7f4f743.png">


<a id=“Shelves”>
## Shelves for Dimensions and Metrics</a>
Dimensions are categories that can be sliced and diced.

0. [3:06] Click on <strong>Sheet1</strong> at the bottom set of tabs. 

   NOTE: Each sheet is also called a <strong>view</strong>.

   One of the amazing features of Tableau is it enables users to 
   create sophisticated tables and charts just by dragging and dropping, then clicking around.
   (By contrast, some coding declarative statements used to define visualizations in Kibana.)

   NOTE: [3:15] The data shown in the video has an additional Market dimension and Shipping Cost measure.

   Each dimension element dragged to the column shelf defines a level in the hierarchy of columns.
   
<img align="right" width="288" alt="tableau columns and rows" src="https://cloud.githubusercontent.com/assets/300046/11996924/bc88bdc2-aa2b-11e5-9aec-0cbd44120c5e.png">

0. [3:17] Drag from among Dimensions Category and drop within the Rows shelf.

   "Pills" representing dimensions are color coded blue.
   Dimensions are discreet categorical text strings displayed in labels. [4:19]

0. [3:25] Drag from among Measures Quantity and drop within the Columns shelf.

   "Pills" representing measures are color coded green.
   Measures always contain numbers such as counts, dollars, rankings, quantity, etc.
   These are what we analyze and slice and dice. [4:09]



<a id=“PublicDatasets”>
## Load from Public Sample Data Sets</a>

0. Use an internet browser to view <a target="_blank" href="https://public.tableau.com/s/resources?qt-overview_resources=1#qt-overview_resources">where Tableau makes public datasets available</a>.

0. Click on a .csv (comma separated values format) or .xls (older Excel 1997+ format) or .xlsx (newer Excel 2007+ format).

   The file would go to your user's Download folder.

   PROTIP: Move downloaded datasets where Tableau clients can see them.


0. [3:29] Drag from among Dimensions Segment and drop within the Rows shelf.

0. [3:34] Drag from among Dimensions Market and drop at the front of the Columns shelf.

0. Drag Market over the Colors shelf

0. Drag the Quarterly Measure (of the dimension selected) to the Columns field.

0. Drag the Dimension Category to the Rows field. This segments the data further.
0. Drag the Dimension Segment to the Rows field. This further segments the data shown.

   In scatterplots, Columns are on the horizontal X axis and Rows are on the vertical Y axis.

0. To vary colors of a dimension, drag an element and drop it on the color icon within the Marks section.



<a id=“LoadSampleDashboards”>
## Load Local Sample Dashboards</a>

0. Open a Tableau client UI program.
0. Click menu Help | Sample Workbooks.

   The licensed Tableau Desktop v9.0 is installed with 3:
   
   * <strong>Superstore</strong> contains a forecast dashboard based on data connected live 
   * <strong>Regional</strong>
   * <strong>World Indicators</strong> (contains several dashboards referenced from a Story)

0. Click Superstore.
1. Click around the dashboard.
2. Close the program.


<a id=“Galleries”>
## Public Galleries</a>

I think infographics are a form of art like paintings and sculptures. 
And beauty is in the eyes of the beholder.
But clean looks are now preferred as being more modern.

PROTIP: To be good at creating your own, first get to know what others have done, starting from being able to name the different chart types.

0. Save the URL and click links to save workbooks to presentations that you might want to use.

   WARNING: Most data in examples are several years out of date.

These galleries show why Tableau is among the most capable and popular of visualization software, providing a rich variety of chart types to make sense of data.

<a target="_blank" href="http://www.tableau.com/learn/gallery">Tableau's Gallery</a>
has URLs that are different with each new build of their website. 

NOTICE: The permalink for the current version is near the bottom of each chart.

<a target="_blank" href="https://public.tableau.com/">https://public.tableau.com/</a> 
is a social sharing site
for people to show and blog about their visualizations of public data sets.
This is much like what Adobe offers.

"VIZ of the day" from the Tableau Public sharing website is highlighted on the right side of opening landing page on Tableau clients.

<a target="_blank" href="https://public.tableau.com/s/resources">https://public.tableau.com/s/resources</a>
announce monthly webinars and provides free on-line training videos also published under
<a target="_blank" href="https://www.youtube.com/channel/UCfAoXs9ej01qqIj6ti456tg/videos">
Tableau Smith on YouTube</a>, which has more videos than on the website.

QUESTION: How to describe changes over time? Videos instead of text blogs?

Vizzes by bloggers can be published on other sites, such as:

* http://blog.numbersbox.com/2015/06/global-obesity-were-getting-bigger.html

Geographic charts make use of geocodes that come with Tableau.

   In version 9 define custom territories off a map and Tableau merges on the fly.
   Streets and satellite maps from Mapbox.com are supported.

QUESTION: How about custom plots (such as farm).


<a id="ChartTypes">
## Chart Types</a>
<img align="right" width="162" alt="tableau chart types color" src="https://cloud.githubusercontent.com/assets/300046/12006691/20266ac8-ab9e-11e5-85af-b0a6765be10e.png">

Bar chart stacks show the make-up of <strong>components</strong>:

 * https://public.tableau.com/s/gallery/history-dow-30
 * https://public.tableau.com/s/gallery/smartphone-breakdown
 * https://public.tableau.com/s/gallery/what-music-matters-most-kexp

Histograms show distribution of counts within a dataset.

 * https://public.tableau.com/s/gallery/poverty-and-school-performance

Horizon charts show when occassional "bumps" (such as errors) occur over time:

 * https://public.tableau.com/s/gallery/unemployment-horizon-chart
 
Line charts show trends over time or other metric.

 * https://public.tableau.com/s/gallery/life-expectancy-country

Scatterplots show specific XY points around a trend line of central tendency:

 * http://www.tableau.com/learn/gallery/website-traffic-trends
 * http://www.tableau.com/learn/gallery/survey-satisfaction

   PROTIP: Add the statistical r value such as "r=-0.74" to disclose extent of correlation.

Box and Whisker charts display quartiles in distributions:

 * http://www.tableau.com/learn/gallery/two-weeks-home-sales

Story points (new since 8.2):

 * https://public.tableau.com/s/gallery/how-sun-controls-weather-0

The value of various types are described in the video at https://www.youtube.com/watch?v=I_9nMSvY1FE
which displays CO2 emissions by country, per-capita by decade, over time, by income group, grouped by region.

<a id=“Calculations”>
## Calculations</a>
<img align="right" width="208" alt="tableau dimensions alt menu" src="https://cloud.githubusercontent.com/assets/300046/12004326/a14ff02e-ab0d-11e5-922f-9e1ce9d5ff81.png">

An example of predictions is Bollinger Bands (described in video
http://www.tableau.com/learn/tutorials/on-demand/bollinger-bands)
based on calculation of moving averages going back periods of time
and upper and lower bands based on various standard deviations.

[2:46] Alt (right) click on the white space within the Dimensions pane for its context menu. 
Select Create calculated Field. Define a new name and its formula.

[3:13] Edit to define a parameter to specify the periods to go back in time to calculate the Moving Average.

<img width="690" alt="tableau calculation dialog" src="https://cloud.githubusercontent.com/assets/300046/12004377/ac98eb62-ab11-11e5-828c-45917c07a013.png">

[8:26] Edit to define a parameter to specify the bands based on standard deviations.

TODO: Identify triggers to invoke when the moving average crosses one of the bands.

<a id=“UI”>
## Forecasts</a>
http://www.tableau.com/learn/tutorials/on-demand/forecasting

0. To specific options for a graph pane, click the caret at the right of the gray bar above that pane.

0. Select float.


<a id=“LoadSophData”>
## Google Analytics</a>

https://www.youtube.com/watch?v=bTU9sOfqjRo
describes 
https://www.youtube.com/watch?v=CAZ3IAJEuCI
Tips and Tricks from a Tableau Jedi
by Alan Elderidge from Tableau Australia.

http://www.tableau.com/learn/tutorials/on-demand/connecting-google-analytics
notes that extracts of Google Analytics are limited to 7 dimensions and 10 measures.
But <strong>Measure Groups</strong> pre-selects them

* Bounces
* Exits
* Page Load Sample
* Page Load Time (ms)
* Pageviews
* Sessions
* Time on Page
* Unique PageViews

<a id="ExtractAPI">
## Tableau Extract API</a>.

The 22 minute video at
http://www.tableau.com/learn/tutorials/on-demand/extract-api-introduction
explains the installation of Python 2.7.9 downloaded from
http://www.tableau.com/data-extract-api
which has both 32 and 64 bit binary Windows and Linux libraries using Python 2.7.9 or C/C++/Java.

[6:27] https://downloads.tableausoftware.com/tssoftware/TDE-API-Python-Linux-64Bit.gz
expands to folder DataExtract-8300.15.0308.1149

[6:42] PROTIP: Create a Modules folder within Python27 to hold the DataExtract folder.
cd to that folder and run the setup.py file:

```
python setup.py install
```

This creates files for this command:

```
>>> import dataextract
>>> exit()
```

[8:47] Open IDLE installed with Python.


<a id=“AddOns”>
## Add-ons</a>
Alteryx


<a id=“Videos”>
## Videos</a>
More Trainings: http://www.tableau.com/learn/training?qt-training_tabs=1#qt-training_tabs

If you have a Pluralsight account:
Ben Sullins (@bensullins, bensullins.com) created several video tutorials:

1. <a target="_blank" href="https://app.pluralsight.com/library/courses/business-dashboard-fundamentals">
Business Dashboard Fundamentals</a>
Feb 19, 2014 - 3h 36m 42s
provides advice about design of beautiful charts in Excel and Tableau 8.1,
such as removing Chart Junk.

2. <a target="_blank" href="https://app.pluralsight.com/library/courses/data-analytics-hands-on">
Data Analytics: Hands On</a>
Jul 15, 2015 - 5h 2m 19s
provides an introduction to use of Excel and SQL and Tableau

3. <a target="_blank" href="https://app.pluralsight.com/library/courses/data-analysis-fundamentals-tableau">
Data Analysis Fundamentals with Tableau</a>
Sep 03, 2013 - 4h 47m 43s

4. <a target="_blank" href="https://app.pluralsight.com/library/courses/big-data-analytics-tableau">
Big Data Analytics with Tableau</a>
Jul 21, 2013 - 3h 44m 55s

5. <a target="_blank" href="https://app.pluralsight.com/library/courses/enterprise-business-intelligence-tableau-server">
Enterprise Business Intelligence with Tableau Server</a>
Nov 13, 2013 - 1h 36m 26s

6. <a target="_blank" href="https://app.pluralsight.com/library/courses/data-visualization-using-tableau-public">
Data Visualizations Using Tableau Public</a>
Sep 09, 2013 - 1h 47m 56s

<a target="_blank" href=""https://www.youtube.com/watch?v=W0TU1dCrmQ4&list=PLMZkG3MOarqI9UwuWmN4DkXqsax9H7rBV">
This playlist of 15 videos from TechAnalysists</a>
begins with its Getting Started video.


<a id="Resources">
## Resources</a>

http://onlinehelp.tableau.com/current/server/en-us/help.htm
replaces 

http://onlinehelp.tableausoftware.com/

Tableau Corporate Headquarters is in the bayside Freemont neighborhood of Seattle which locals call "The center of the universe".

User forum:

 * https://community.tableau.com/community/forums?edition=unlicensed&version=9.0

Twitter.com

LinkedIn.com:

 * <a target="_blank" href="https://www.linkedin.com/company/206993"> Tableau Company</a>
 * <a target="_blank" href="https://www.linkedin.com/groups/118463/profile"> Tableau Software Fans and Friends</a>

Facebook.com

StackOverflow.com

User Conference

 * <a target="_blank" href="https://vts.inxpo.com/scripts/Server.nxp?LASCmd=AI:1;F:US!100&PreviousLoginCount=0&ForceProfileToBeFilledOut=0&DisplayItem=NULL&ShowKey=27270&ShowFrameFormatOverride=NULL&RandomValue=1451158492632">2015</a>
 
 EO Christian Chabot

 VP Product Management Francois Ajenstat 

https://itunes.apple.com/us/podcast/tableau-wanna-be-podcast/id908948125?mt=2
by Emily and Matt Francis who did TFF (Tableau French Festival)

<a target="_blank" href="http://www.slideshare.net/21_venkat/learning-tableau-data-graphs-filters-dashboards-and-advanced-features"> Slideshare: Learning Tableau- Step by Step Guide</a>

