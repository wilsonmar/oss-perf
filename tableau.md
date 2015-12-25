This page provides background informaiton on Tableau software,
an alternative to Kibana.

Tableau is a complete Data Analytics platform enabling everyone to gain
insights from raw data. It makes working with data universally accessible.

Tableau clients running on Windows and Macs are used to create ".viz" files which define visualization display settings.

Tableau software consists of several separately installed components
downloaded from separate URLs.

<a href="#TableauDesktop">Tableau Desktop</a> Personal and Pro editions are licensed at $999 and $1999 per year.

http://www.tableau.com/products/reader

| Date | Component - Version | Size |
| ------ | ----------------------- | -------: |
| 2015-12-07 | TableauReader-9-2-0.dmg | 190.2 MB |
| 2015-12-01 | TableauPublic-9-2-0.dmg | 185.5 MB |
| 2015-07-20 | TableauDesktop-9.0.4.dmg | 183.7 MB |

QUESTION: You don't need to instal Public or Reader if you have Deskstop installed?

After installation on a Mac, select a client to invoke from within Finder. 
Pull down the Finder Go menu for Applications or press Shift+command+A.

<a id=“TableauPublic”>
## Tableau Public</a>
<a id="ChartTypes"></a>
<img width="236" align="right" alt="tableau chart types" src="https://cloud.githubusercontent.com/assets/300046/11996347/f9ffb29a-aa1d-11e5-930a-ed789c88b939.png">

Tableau provides a rich variety of chart types.

The https://public.tableau.com/ is a social sharing site
for people to show and blog about their visualizations of public data sets.
This is much like what Adobe offers.

"VIZ of the day" from the Tableau Public sharing website is highlighted on the landing page of Tableau Desktop.

https://public.tableau.com/s/resources
announce monthly webinars and provides free on-line training videos also published under
<a target="_blank" href="https://www.youtube.com/channel/UCfAoXs9ej01qqIj6ti456tg/videos">
Tableau Smith on YouTube</a>, which has more videos than on the website.

QUESTION: How about videos instead of text blogs? That would enable us to describe changes over time.

Vizzes by bloggers can be published on other sites, such as:

 * http://blog.numbersbox.com/2015/06/global-obesity-were-getting-bigger.html

<a id=“LocaDataFolder”>
## View Local Data Folder</a>

0. Use an internet browser to view where Tableau makes public datasets available at:

   https://public.tableau.com/s/resources?qt-overview_resources=1#qt-overview_resources

0. Click on a .csv (comma separated values format) or .xls (older Excel 1997+ format) or .xlsx (newer Excel 2007+ format).

   The file would go to your user's Download folder.
   
   PROTIP: Move downloaded datasets where Tableau clients can see them.

0. On a Mac, open a new Finder window.
 
0. Within your user's Documents folder, scroll to click on the "My Tableau Repository" folder
  created during client installation.

0. Click to drill into the "Datasources" folder.
0. Click on a version number (9.2).
  
  There is a separate folder for each version of Tableau (9.2, 9.0, etc.) because 
  data structures often change with each new version.

0. Click on a locale (en_US_US).

   File types <a target="_blank" href="http://onlinehelp.tableau.com/current/pro/online/mac/en-us/help.htm#environ_filesandfolders.html">explained here</a>:

   <strong>.tds</strong> data source files (as explained <a target="_blank" href="https://community.tableau.com/external-link.jspa?url=http://kb.tableausoftware.com/articles/knowledgebase/export-data-connection">here</a>) are like shortcuts containing information needed to just connect to the data sources, such as data source type, location, and custom fields. 

   <strong>.tdsx</strong> Packaged Data Source files contains all the information in the Data Source (.tds) file as well as any local file data sources (Excel, Access, text, and extracts). Packaged means a single zipped file for easier sharing a data source with people who may not have access to the original data that is stored locally on your computer.

   <strong>.twbx</strong> workbook files (as explained <a target="_blank" href="https://community.tableau.com/external-link.jspa?url=http://onlinehelp.tableausoftware.com/current/pro/online/en-us/help.htm#save_savework_packagedworkbooks.html">here</a>) contain one or more worksheets, plus zero or more dashboards and stories.

   <strong>.twb</strong> is the native workbook. It does not contain any data, which is why a packaged workbook is needed.
   
   <strong>.tde</strong> extract files (explained <a target="_blank" href="http://onlinehelp.tableau.com/current/pro/online/mac/en-us/help.htm#extracting_data.html">here</a>) 
   are a local copy of an entire data source (or its subset) created programmatically
   using <a href="#ExtractAPI">Tableau Extract API</a>.
   
   <strong>.xls</strong> is a Microsoft Office Excel 1998+ format.
   
   <strong>.xlsx</strong> is a Microsoft Office Excel 2007+ format.
   
   <strong>.csv</strong> is a Comma Separated Value text format that Excel and many other programs can open. 
   CSV files are called "Statistical Files" in Tableau client UI Connect.

   NOTE none of the above formats are encrypted with any data security.
   
0. PROTIP: You may want to create a separate folder to store all Excel data files locally in the same Excel folder. 
   Store all Microsoft Office Access files in an Access folder.


<a id=“LoadLocalData”>
## Connect to (Load) Local Sample Dataset</a>

0. Open a Tableau client UI program.
0. Under "Connect ... To a file", click Excel.

  On the Mac, the "Datasources" folder is shown.
  It is under the "My Tableau Repository" folder within your user's Documents folder
  created during client installation.
  
0. Click on a version, then your locale (en_US_US).

0. Double-click on the <strong>Sample - superstore.xls</strong> file installed. 

<a id=“StartVideos”>
## Getting Started Videos</a>

   <a target="_blank" href="http://www.tableau.com/learn/tutorials/on-demand/getting-started">
   Tableau's 23-minute Getting Started video</a>
   shows step-by-step how to use the Sample file within the Tableau client UI.

   The site also provides a link to a transcript pdf of the video.
   
   PROTIP: The video webpage provides a link to save the MP4 video file so you can download it for viewing 
   since the web presentation automatically jumps back to the beginning after long pauses, 
   and doesn't show the entire screen until it's maximized. Annoying.
   Registration is required for this action.

   Below are time codes to the video and links to comments in this page:
   
 *   Connecting to Data
 *   <a href="#Joins">Joins</a> and Data Preparation
 *   Connecting Live versus Extracting
 *   Dimensions and Measures
 *   Building Views
 *   Quick Table Calculations
 *   Crosstab and Exporting Data
 *   Show Me
 *   Filters
 *   Bar Chart
 *   [14:05] Mark labels
 *   Hierarchies
 *   Sorting
 *   Grouping
 *   Working with Marks
 *   Trend Lines
 *   Dashboards
 * [19:50] Story Points walk users through several captions on a navigator scroller, each analyzing a snapshop of visualizations.
 * Callouts can be added on top of each visualization.
 *   Distributing Content

The video at
http://www.tableau.com/learn/tutorials/on-demand/getting-started-data
[at 1:04] opens a "Global Superstore.xls" file.

https://www.youtube.com/watch?v=W0TU1dCrmQ4&list=PLMZkG3MOarqI9UwuWmN4DkXqsax9H7rBV
from TechAnalysists is a playlist of 15 videos beginning with Getting Started.


<a id=“Joins”>
## Joins</a>

The sample Excel workbook contains Sheets named Orders, People, and Returns.
"Users" are used in previous versions of this file.

0. Drag one of the Sheets (Orders) to the canvas pane.
0. Drag another Sheet (Returns) to the canvas.

 Tableau automatically suggests a join type:

 <img width="400" alt="tableau joins" src="https://cloud.githubusercontent.com/assets/300046/11996601/ba10d618-aa23-11e5-8c64-44044d1fa73e.png">

0. Because data is now loaded within Tableau, hover over a heading to Rename the heading or change its type.

 <img width="207" alt="tableau heading options" src="https://cloud.githubusercontent.com/assets/300046/11996656/eca2f51a-aa24-11e5-9e3f-db7db424a206.png">

0. Click on the data type under the heading name to change it.

 <img width="130" alt="tableau data type options" src="https://cloud.githubusercontent.com/assets/300046/11996668/3f0d7fbe-aa25-11e5-8057-ef16bf34f4aa.png">

0. If a column contains multiple fields, split them into sub-columns:

 <img width="220" alt="tableau data split options" src="https://cloud.githubusercontent.com/assets/300046/11996699/ff0d9ed4-aa25-11e5-8411-c8281ace509e.png">

You can return to this by clicking "Data Source" tab at the lower left.

<a id=“Dimensions”>
## Dimensions and Metrics</a>
Dimensions are categories that can be sliced and diced.

0. Click on Sheet1 at the bottom set of tabs. Each sheet is also called a <strong>view</strong>.
 
<img width="740" alt="tableau bottom tabs" src="https://cloud.githubusercontent.com/assets/300046/12003056/671ccb96-aace-11e5-9d3c-3a9ab7f4f743.png">

   One of the amazing features of Tableau is it enables users to 
   create sophisticated tables and charts just by dragging and dropping, then clicking around.

   (By contrast, some coding the declarative statements used to define visualizations in Kibana.)

<img align="right" width="368" alt="tableau shelves" src="https://cloud.githubusercontent.com/assets/300046/11999753/de18dbbe-aa82-11e5-83a1-64399f9df09c.png">

   Each dimension element dragged to the column shelf defines a level in the hierarchy of columns.


0. Drag the Market Dimension to the Columns field. This establish the top.
0. Drag the Quarterly Measure (of the dimension selected) to the Columns field.
 
 <img align="right" width="288" alt="tableau columns and rows" src="https://cloud.githubusercontent.com/assets/300046/11996924/bc88bdc2-aa2b-11e5-9aec-0cbd44120c5e.png">

  Sausages (pills) representing measures are color coded green.
  Measures always contain numbers such as counts, dollars, rankings, quantity, etc.

0. Drag the Dimension Category to the Rows field. This segments the data further.
0. Drag the Dimension Segment to the Rows field. This further segments the data shown.

   In scatterplots, Columns are on the horizontal X axis and Rows are on the vertical Y axis.

0. To vary colors of a dimension, drag an element and drop it on the color icon within the Marks section.
 
<img alt="tableau lines separated by year" src="https://cloud.githubusercontent.com/assets/300046/11996255/69a883b2-aa1c-11e5-8ac6-19168d517124.png">




<a id=“ChartTypes”>
## Chart Types in Tableau</a>

Tableau recommends a chart type based on the data set loaded when "Show Me" is clicked.

The value of various types are described in the video at https://www.youtube.com/watch?v=I_9nMSvY1FE
which displays CO2 emissions by country, per-capita by decade, over time, by income group, grouped by region.

<a id=“UI”>
## UI</a>


0. To specific options for a graph pane, click the caret at the right of the gray bar above that pane.

0. Select float.

<a id=“TableauDesktop”>
## Tableau Desktop</a>

Tableau Online hosts Tableau Server within Tableau’s cloud.

<img width="878" alt="tableau how it works" src="https://cloud.githubusercontent.com/assets/300046/11996251/63b57000-aa1c-11e5-83a8-b233300d863a.png">



<a id=“LoadSophData”>
## Load Sophisticated Data</a>

The Pro version connects to Tableau Server for web-based analytics
using a lot more different data sources under the <strong>Connect</strong> section of Desktop:

<img width="676" alt="tableau data sources" src="https://cloud.githubusercontent.com/assets/300046/11996554/90f17590-aa22-11e5-8abd-5dec3b430966.png">

The Desktop has a server:

<img width="640" alt="tableau desktop menu" src="https://cloud.githubusercontent.com/assets/300046/12003983/eef00806-aaf3-11e5-902b-6c8098fdfdd4.png">

https://www.youtube.com/watch?v=fEoB8EIEETQ
describes Connecting to databases and advanced features Tableau.

https://www.youtube.com/watch?v=bTU9sOfqjRo
describes 

https://www.youtube.com/watch?v=CAZ3IAJEuCI
Tips and Tricks from a Tableau Jedi
by Alan Elderidge from Tableau Australia.

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

<a id="Resources">
## Resources</a>

http://onlinehelp.tableau.com/current/server/en-us/help.htm
replaces 
http://onlinehelp.tableausoftware.com/

User forum

Twitter.com

LinkedIn.com Group

Facebook.com

StackOverflow.com
