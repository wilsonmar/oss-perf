This page provides an enhanced / deeper sequence to presenting Tableau based on a hands-on approach with less hype.

 * http://www.tableau.com/learn/starter-kit provides a learning sequence with clickable links to materials.

Tableau enables everyone to gain insights from raw data by providing a drag-and-drop UI working on data in many formats.
In the biz it's called a visual Data Analytics platform. 

<a id="Advanced">
## Alternatives to Advanced Data Analytics</a>
Tableau's promo video at http://www.tableau.com/products#video says:

* [0:30] "People build dashboards and applications like these, drag and drop, at up to 10 times the speed of a traditional business intellegence system".
 
By "traditional" it means:

 * Microsoft Power BI, Power Pivot, and Power View in Excel 2013, see http://www.jenunderwood.com/2014/01/02/understanding-the-differences-microsoft-power-bi-and-tableau/ and http://www.jenunderwood.com/blog.htm#BetterTogether

 * IBM Cognos Insight,
 * MicroStrategy Visual Insight,
 * Oracle Exalytics appliance, 
 * SAS Visual Analytics Explorer,
 * <a target="_blank" href="http://saplumira.com/"> SAP Lumira</a> ($995/user from <a target="_blank" href="https://www.sapstore.com/solutions/99008/SAP-Lumira%2C-standard-edition"> SAP store</a>)
 * <a target="_blank" href="http://www.informationweek.com/news/software/bi/240000455"> SAP Visual Intelligence</a>
 * Tibco Spotfire
 * http://www.qlik.com/us/explore/products/sense
 * http://www.xdat.org/

Gartner notes "Tableau does not directly compete with other vendors with a strategy for being a broad BI platform offering. Tableau complements fully functional enterprise BI platforms that lack ADV capabilities."
That is why <a target="_blank" href="http://www.tableau.com/learn/whitepapers/forrester-advanced-data-visualization-platforms"> This Forrester report (although rather dated from 2012)</a> has Tableau behind others on the strategy dimension:

<img width="550" alt="tableau forrester adv 2013" src="https://cloud.githubusercontent.com/assets/300046/12010835/88925420-ac73-11e5-9797-b0d484db016b.png">

<a target="_blank" href="http://www.tableau.com/learn/whitepapers/forrester-advanced-data-visualization-platforms"> The Gartner Magic Quadrant report in 2015</a> also put Tableau above other vendors on their "ABILITY TO EXECUTE" scale.

<img width="550" alt="gartner adv quadrant 2015" src="https://cloud.githubusercontent.com/assets/300046/12011013/d49ac22e-ac7a-11e5-8427-aabe5e7c7a87.png">

Another alternative are JavaScript libraries developers incorporate into their home-grown visualization solutions:

  * D3.js. See https://leanpub.com/D3-Tips-and-Tricks
  * http://nvd3.org/

Tableau focuses on presentation rather than both presentation and statistical calculations by software such as:

  * Matlab
  * R, an open-source (free) software


<a name=“VizFeatures”>
## Visualization Features</a>

  Since 2007 at
  http://www.gapminder.org/videos/
  Hans Roling, a professor of health statistics in Sweden, is
  an internet legend for his
  <a target="_blank" href="https://vimeo.com/18477762">
  "Joy of Stats" video</a> shown on BBC Nov 10, 2010 and Ted Talks.
  In them he shows his 
  <a target="_blank" href="http://www.gapminder.org/world-offline/">
  Gapminder web app</a> which
  presents multiple dimensions dynamically over time (nearly 300).

Jeffrey Shaffer created <a target="_blank" href="https://www.youtube.com/watch?v=KdoBuNNvVec">
a time lapse video</a> of <a target="_blank" href="
https://public.tableau.com/s/profile/jeffs8297#!/vizhome/RoslinginTableau/RoslingGapminder">
his viz</a> showing a trail of dots which grow in size and get darker over time (as the legend notes):

<img width="795" alt="tableau time lapse gapminder" src="https://cloud.githubusercontent.com/assets/300046/12170866/a288bce6-b4f9-11e5-892b-d69d8cc35010.png">

Here, different colors represent different countries, with the United States in red. Most other countries saw a decrease in fertility rate over time while life expectantcy increased.

Within the <a target="_blank" href="http://public.tableau.com/profile/andy.cotgreave#!/"> 
wonderful Tableau gallery</a>
Andy Cotgreave (<a target="_blank" href="https://twitter.com/acotgreave">@acotgreave</a>, now <a target="_blank" href="https://www.linkedin.com/in/acotgreave">Technical Evangelist at Tableau</a>)
built over the years is
<a target="_blank" href="http://gravyanecdote.com/andy-cotgreave/joy-of-six-gapminder/">
this re-creation of Gapminder</a>:

<img alt="tableau gapminder" src="https://cloud.githubusercontent.com/assets/300046/12102988/ba022edc-b2f3-11e5-8c2a-05c980223e21.png">

Andy
<a target="_blank" href="http://interworks.co.uk/blog/joy-of-six-gapminder/">
explained in 2010 how</a> he created the above using Tableau Trendalyzer v6.
<a target="_blank" href="http://public.tableau.com/profile/andy.cotgreave#!/vizhome/GapminderFullScreen/Gapminder">
Download his viz from the Tableau Public website</a> 
to manipulate using Tableau Public client installed on your laptop.

This chart is an example of traits excellent visualization software possess: 

 * Dynamic data - update visualizations (in "live mode") as data changes in sources such as databases. 
 
 * Visual querying -  change the query by selecting or clicking on a portion of the graph or chart (to drill down, for example). 
 
 * Linked multi-dimensional visualization - selections made in one chart are reflected as you navigate into other charts.
 
 * Animation -   

 PROTIP: Dynamic (movie mode) is available only within the Tableau Public client,
 not when viewed on websites (as of 2016-01-05).
 
 * Personalization - give power users an in-depth view and newbies a simpler view, and also control access to data based on user- and role-based access privileges.
  
 * Actionable alerts  -  thresholds and parameters that trigger messages whether you're interacting with reports or not. 


<a name=“Architecture”>
## Architectural Components</a>
Several editions of Tableau client programs can be installed on Windows and Mac laptops. 

<img width="474" alt="tableau mac program icons" src="https://cloud.githubusercontent.com/assets/300046/12008208/5ae8f75c-abe9-11e5-911d-534176a8e0ab.png">

The licensed Desktop edition can read more types of data sources. 

<img width="589" alt="tableau components v06" src="https://cloud.githubusercontent.com/assets/300046/12034893/1611fe8c-adf4-11e5-8023-b9444e536535.png">

The Tableau Public website (http://public.tableausoftware.com) provides a gallery 
for showing workbooks created using the Public edition of client software. 
Tableau limits public workbooks up to 1 GB large containing up to 100,000 data rows.

Tableau also does not allow the Public client from storing files locally on a laptop.

PROTIP: Use the Public client when you have reliable public network access.

The Desktop edition can retrieve workbooks from the Public website.
However, workbooks created on Tableau Desktop cannot be published to Tableau Public.

<strong>Private workbooks</strong> can be shared on a <strong>Tableau Server</strong> or in the Online service Tableau runs. A web app accessed using an internet browser is used to administer users on those servers. 

Tableau's native mobile apps on both Android and iPads make use of REST APIs
that other servers can use to access data. 

QUESTION: Can Mobile clients access Tableau Public?

https://gallery.alteryx.com/#!
is viewed using a <a target="_blank" href="http://www.alteryx.com/download?src=sc113">
Alteryx Designer</a> Windows client.

The <strong>Tableau Reader</strong> client can read (but not save) packaged workbooks.

 Prices are subject to change at any time, and subject to negotiation.
 At time of writing, Tableau Desktop costs $1999. 
 Tableau Server is around $1000 per user or ~$200K for an unlimited user license. 
 Tableau Cloud costs $500/per user per year. 
 The Tableau Cloud plan includes 100 GB of storage. I do not know the storage add-on costs for groups wanting more than 100 GB.

Tableau makes use of HTML5 within internet browsers. 
It's unlike Microsoft Power Viewer, which depends upon installation of Silverlight and thus not mobile device friendly.

<a name=“MobileApp”>
## Mobile App</a>
Tableau offers native mobile apps on both Android and iPads.

* https://play.google.com/store/apps/details?id=com.Tableau.TableauApp&hl=en
* https://itunes.apple.com/us/app/tableau-mobile/id434633927?mt=8

The apps reskins the internet browser, which can also be used to access workbooks. 

0. Click Sign In.
0. For Sever Name, to use Tableau Public cloud, enter <strong>public.tableausoftware.com</strong> (without the https:// prefix). Ignore the "Tableau Online".
1. Click the orange <strong>Connect</strong> that appears to the right.

<a name=“ClientInstall”>
## Client Programs Installation</a>
The different Tableau clients are downloaded from separate URLs.

<a href="http://www.tableau.com/products/desktop/download?os=mac%20os%20x">
Tableau Desktop</a> Personal and Pro editions are licensed at $999 and $1999 per year to access a wide range of data sources.

* http://www.tableau.com/products/reader

| Date | Component - Version | Installer | Installed |
| ------ | ----------------------- | -------: | -------: |
| 2015-12-07 | TableauReader-9-2-0.dmg | 190.2 MB | 668.4 MB |
| 2015-12-01 | TableauPublic-9-2-0.dmg | 185.5 MB | 683.8 MB |
| 2015-07-20 | TableauDesktop-9.2.0.dmg | 192.1 MB | 682.4 MB |
| 2015-07-20 | TableauDesktop-9.0.4.dmg | 183.7 MB | 643.4 MB |
| 2015 | TableauServer-64bit-9-2-0.exe | 1.1 GB | - |

QUESTION: Why does the Reader larger than others when it has least capability?

QUESTION: You don't need to instal Reader if you have Deskstop installed?

The Server <a target="_blank" href="http://www.tableau.com/products/server/download">
Download from here</a> only runs within Windows (32 or 64 bit) and uses Active Directory Authentication.

There are several ways to open a Tableau client program:

1. <a href=“#ExcelOpen”>Open Excel Samples from Local Data Folder</a>.
2. <a href=“#ClientOpen”>Open a Tableau Client Program</a> if you have your own file.
3. <a href=“#CSVPublicDatasets”> Load CSV from Public Sample Data Sets</a>.


<a name=“ExcelOpen”>
## Open Excel Samples from Local Data Folder</a>

0. On a Mac, open a new Finder window.

0. Within your user's <strong>Documents</strong> folder, scroll to click on the <strong>My Tableau Repository</strong> folder created during client installation.

0. Click to drill into the <strong>Datasources</strong> folder.

   NOTE: The Tableau client remembers (encrypted) credentials to external data sources (such as Google Analytics) in this folder (as files with extension .tde).

0. Click on a version number of the Tableau client installed (9.2).

   There is a separate folder for each version of Tableau (9.2, 9.0, etc.) because 
   data structures often change with each new version.

0. Click on a locale (en_US_US).

   Tableau clients 9.0 come with an Excel (.xls) file 
   <strong>Sample - Superstore.xls</strong>.
   Notice it's 3.4 MB.

0. Optionally, click on that file to open it within Excel (if you have Microsoft Office installed).

   Within Excel, at the lower left corner, notice there are 3 tabs (worksheets) named Orders, Returns, People.

0. Switch back to Finder. To open .xls files from the Finder, control-click on the xls file and select Open With > Other ..., select Tableau.
0. For Enable: select All Applications.
1. Select Tableau and click OK to view in Tableau client Data Connection window:

   <img width="441" alt="tableau data superstore" src="https://cloud.githubusercontent.com/assets/300046/12007900/dec9ea0c-abd7-11e5-92a6-554639aa0884.png">

   You can also get here by clicking "Excel" in Tableau's Connect menu.

0. Click the red x at the upper left corner to close the program.

<a name=“DataAlteryx”>
## Data Transformation using Alteryx</a>

   NOTE: In 2015 Tableau did not have an ETL tool.
   Tableau add-in Alteryx for groups wanting true self-service ETL
   like Microsoft Power Query M scripting (formerly called Data Explorer)  that does pivot/unpivot, joining, filtering, deduplicating, grouping, splitting, and transforms.
   
   http://kb.tableausoftware.com/articles/knowledgebase/preparing-excel-files-analysis
   has some basic pivoting and cleansing features. 

  Alteryx performs Data blending of multiple and disparate data sources
 
  Alteryx does predictive and spatial analytics with no coding required
 
  Alteryx makes re-useable, modifiable workflows and direct updates to Tableau workbooks.
  
<a name=“DateAdjustExcel”>
## Date Adjustments in Excel</a>
It may be easier to adjust data within Excel before Tableau uses the file, 
which is a number of seconds from 1970 (not the number since 1970 as Unix uses).

Tableau doesn't read TIME according to  (as of Oct 12, 2015)
https://community.tableau.com/ideas/3315
and https://community.tableau.com/ideas/1054

* http://kb.tableau.com/articles/knowledgebase/supported-date-formats
* http://kb.tableau.com/articles/knowledgebase/fixing-date-fields
* http://kb.tableau.com/articles/knowledgebase/understanding-the-dateparse-function

Where A2 in the sample is replaced with wherever cell contains a date Excel recognizes,
to convert the text "2016-01-12" to the internal date number of 42381.00:

 ```
 =DATEVALUE(LEFT(A2,4)&"-"&MID(A2,6,2)&"-"&MID(A2,9,2))+(NUMBERVALUE(MID(A2,12,2))/24)+(NUMBERVALUE(MID(A2,15,2))/1440)
 ```

Within Excel, hours and minutes are the decimals of a floating point number,
such as .88 when the text equivalent is "21:40" on a 24 hour clock:

 ```
 =(NUMBERVALUE(MID(A2,12,2))/24)
 ```

To convert 40 minutes into the hour, divide the number of minutes in a day
(24 * 60 = 1440):

 ```
 =(NUMBERVALUE(MID(A2,12,2))/24)+(NUMBERVALUE(MID(A2,15,2))/1440)
 ```

The number for minutes would not be more than 1/24 or 0.041666667.

To convert UTC/GMT times to local time that is -8 hours for Pacific Standard Time (Seattle):

 ```
 =A2-TIME(8,0,0)
 ```

   NOTE UTC/GMT times are never adjusted for Daylight Savings, so the number of hours
   difference changes during the year. During the summer it's 7 hours. See
   http://www.timeanddate.com/worldclock/converted.html?iso=20160114T00&p1=0&p2=234

   http://www.cpearson.com/excel/TimeZoneAndDaylightTime.aspx
   The LocalOffsetFromGMT() function 

To zero-fill leading zeroes:

 ```
 =TEXT(A2,"000")
 ```

   * http://fczaja.blogspot.ca/2011/06/convert-excel-date-into-timestamp.html


<a name=“Reshaper”>
## Reshaper Add-in</a>
Tableau no longer maintains its
<a target="_blank" href="http://kb.tableau.com/articles/knowledgebase/addin-reshaping-data-excel"> 
add-in</a> to <a target="_blank" href="
http://kb.tableau.com/articles/knowledgebase/preparing-excel-files-analysis">
prepare data in Excel to for use by Tableau</a>.

File tableau_data_tool.zip downloaded from the website expands to 
Setup-Tableau-Add-In-7.0.exe. Thus it's only for Windows edition of Office (not Mac).

<a name=“CloseClient”>
## Save and Close Client Program</a>

After you click the red x at the upper left corner of the window, a pop-up appears
if data was changed. A file name is suggested.

2. Change the name from Book2 or whatever is auto-assigned to something else.

   <img width="477" alt="tableau save file" src="https://cloud.githubusercontent.com/assets/300046/12008195/934a3a9e-abe8-11e5-9edc-3c51649566d9.png">

If you change the default folder from <strong>Workbook</strong> (.twb)
to Packaged workbook, data files and dashboard specifications will be packaged into a single .twbx file.


<a name=“LoadSampleDashboards”>
### Load Local Sample Dashboards</a>

With Tableau client UI program open:

0. Click menu Help | Sample Workbooks. These were installed among binary files:

   * <strong>Superstore</strong> contains a forecast dashboard based on data connected live. This is different than what is presented in the Getting Started videos.
   
   * <strong>Regional</strong>
   
   * <strong>World Indicators</strong> (contains several dashboards referenced from a Story)

0. Close the program.


<a name=“ClientOpen”>
## Rename & Open Tableau Client Program</a>
After installation on a Mac, open a Tableu client:

0. Open a Mac Finder window by holding down command and pressing Tab until the Finder icon is highlighted.

   <img width="50" alt="mac finder icon" src="https://cloud.githubusercontent.com/assets/300046/12010031/c86cb044-ac51-11e5-949d-70e1e5d35514.png">

0. Pull down the Finder Go menu for Applications or press Shift+command+A.

   The Tableau Desktop program is named simply "Tableau".
   
   NOTE: If a second version of the same program was installed, it would be automatically named "Tableau 2".
   
0. PROTIP: Change the name to include version (such as 9.2.0 or 9.0.4, etc.).
      
0. Double-Click on the Tableau program to start it.

   Return to the Start page by pressing command+2 or menu File.

0. On a Mac, click <strong>Tableau</strong> and <strong>About Tableau</strong>.

   The top of the pop-up lists the specific version installed, such as
   "9.2.0 (9200.15.1201.0018) 64-bit"". Provide this to Tableau Support.
   
0. Click the red x at the upper left of the window to close the pop-up.

   Notice the Tableau Desktop edition has "Server" in its menu:

   <img width="640" alt="tableau desktop menu" src="https://cloud.githubusercontent.com/assets/300046/12003983/eef00806-aaf3-11e5-902b-6c8098fdfdd4.png">

   EXTRA: More than one instance of the Tableau client can be running at the same time.

   <img width="676" alt="tableau data sources" src="https://cloud.githubusercontent.com/assets/300046/11996554/90f17590-aa22-11e5-8abd-5dec3b430966.png">

   The above is from the Pro version, which has 
   <a target="_blank" href="http://www.tableau.com/support/drivers">
   many drivers</a> which connect to more data sources under the <strong>Connect</strong> section.

 
0. Click <strong>Statistical Files</strong> to accesses files from SAS and IBM SPSS:

   <img width="327" alt="tableau statistical files" src="https://cloud.githubusercontent.com/assets/300046/12010742/4949dc5a-ac70-11e5-9883-12281f631669.png">

   NOTE: Not listed are MathCAD nor Microstrategy, SAP HANA, and other BI tools.
 
0. Select <strong>All files</strong>

   <img width="299" alt="tableau all files" src="https://cloud.githubusercontent.com/assets/300046/12022318/d21fd33c-ad4b-11e5-9fac-7935169c4c60.png">


<a name=“FileTypes”>
## File Types</a>
<img width="589" alt="tableau files diagram v05" src="https://cloud.githubusercontent.com/assets/300046/12022262/61c940aa-ad4b-11e5-9f1b-f2bbaf39cdd1.png">

As <a target="_blank" href="http://onlinehelp.tableau.com/current/pro/online/mac/en-us/help.htm#environ_filesandfolders.html">explained here</a>:

<strong>.csv</strong> is a Comma Separated Value (character delimited) text format that Excel and many other programs open. 

<strong>.xls</strong> is a Microsoft Office Excel 1998+ format.

<strong>.xlsx</strong> is a Microsoft Office Excel 2007+ format.

<strong>.txt</strong> files are also considerd among "Other files" that Tableau opens.

<strong>.tds</strong> data source files (as explained <a target="_blank" href="https://community.tableau.com/external-link.jspa?url=http://kb.tableausoftware.com/articles/knowledgebase/export-data-connection">here</a>) are like shortcuts containing information needed to just connect to the data sources, such as data source type, location, and custom fields. 

<strong>.tde</strong> extract files (explained <a target="_blank" href="http://onlinehelp.tableau.com/current/pro/online/mac/en-us/help.htm#extracting_data.html">here</a>) 
are a local copy of an entire data source (or its subset) created programmatically
using <a href="#ExtractAPI">Tableau Extract API</a>.

<strong>.tdsx</strong> Packaged Data Source files contains all the information in the Data Source (.tds) file as well as any local file data sources (Excel, Access, text, and extracts). Packaged means a single zipped file for easier sharing a data source with people who may not have access to the original data that is stored locally on your computer.

<strong>.twb</strong> is the native workbook. It does not contain any data, which is why a packaged workbook is needed.

<strong>.twbx</strong> packaged workbook files (as explained <a target="_blank" href="https://community.tableau.com/external-link.jspa?url=http://onlinehelp.tableausoftware.com/current/pro/online/en-us/help.htm#save_savework_packagedworkbooks.html">here</a>) contain one or more worksheets, plus zero or more dashboards and stories. These files are what is transferred to and from Tableau servers.

CAUTION: None of the above formats are encrypted with any data security.

<strong>.ttde</strong> are <a target="_blank" href="http://kb.tableau.com/articles/knowledgebase/shadow-extracts">Shadow Extract files</a> 
used for caching speed within clients
and not directly referenced by users. Five of these files are stored within a Shadow Extract folder.

http://onlinehelp.tableau.com/v9.2/public/online/mac/en-us/help.html#upgrading_connection.html

0. PROTIP: You may want to create a separate folder to store all Excel data files locally in the same Excel folder. 
Store all Microsoft Office Access files in an Access folder.


<a name=“CSVPublicDatasets”>
## Load CSV from Public Sample Data Sets</a>

0. Use an internet browser (Firefox) to view <a target="_blank" href="https://public.tableau.com/s/resources?qt-overview_resources=1#qt-overview_resources">where Tableau makes public datasets available</a>.

0. Scroll to <strong>The 2014 Inc. 5000</strong>.
0. Click on <strong>Dataset (csv)</strong> (comma separated values) link.

0. Click the blue icon to the right of the Open With selection.
0. If Tableau (for the version you're using) is not already listed, click Other and select it.

   <img width="395" alt="firefox open with tableau" src="https://cloud.githubusercontent.com/assets/300046/12010214/1d2501dc-ac5b-11e5-82cb-ec4c9bdfc274.png">

0. Click OK to save. The file would by default be saved to your user's Download folder anyway.

   <img width="639" alt="tableau csv dataset" src="https://cloud.githubusercontent.com/assets/300046/12010303/ce82df42-ac5d-11e5-9b8e-5df92375bd13.png">

   CAUTION: All other openable files (.csv, .txt, .xls, etc.) are also shown.
   
0. Click Extract.

   <img width="386" alt="tableau connection extract" src="https://cloud.githubusercontent.com/assets/300046/12010390/a9280a34-ac61-11e5-9df0-c40540e6c563.png">

   This appears.

   <img width="401" alt="tableau save extract as" src="https://cloud.githubusercontent.com/assets/300046/12010388/96e77fa8-ac61-11e5-9bde-6c48cda0a1c7.png">

0. Click Save.

0. [3:04] Click <strong>Sheet 1</strong> at the bottom of the window to create a chart based on the data.

0. Close the program.

0. PROTIP: In Finder, navigate to the Downloads folder and delete the .csv file. This clears off clutter.

See video http://www.tableau.com/learn/tutorials/on-demand/getting-started-data
for more.

<a name=“Addons”>
## Add-ons to Tableau</a>
Fine as it is out of the box, you should know about enhancements from others:

 * http://powertoolsfortableau.com/ from
   http://interworks.co.uk/business-intelligence/tableau-tools/

   http://powertoolsfortableau.com/tools/workbook-tools-suite/
   enables batch and automated interactions with Tableau workbooks
   (for $449 USD per year).
   
   The $4999/year Workbook Software Development Kit (SDK) for Tableau by InterWorks enables batch, automated, programmatic access to Tableau workbooks. 
   Visual Studio code completions.
   Semantic validations to catch breaking changes to your workbooks.

   http://powertoolsfortableau.com/tools/portals-for-tableau
   enhances Tableau Server look-and-feel, filtering, and security.

  Zion Spencer, InterWorks Software Sales Engineer 405/624-3214

Alteryx provides an alternative client.


<a name=“PublicDatasets”>
## Public Datasets</a>
The Client Pro certification exam uses the 
<a target="_blank" href="http://wildlife.faa.gov/">
FAA Wildlife Strike Database</a>

Tableau provides a <a target="_blank" href="http://mkt.tableau.com/files/Desktop-9-CP-Solution-Guide.pdf">
   Solution Guide</a> which shows constructed viz to answer the certification questions:

    * Do some species have more strikes in some months over others? 
    * Are there any species appearing in the top that are surprising? 
    * Calculate the strike rate (number of strikes divided by number of total flights) to see if the rate of wildlife strikes is increasing or decreasing over time.

    * Where are these strikes most likely to occur?
    * Are there certain months when wildlife strikes become more likely?
    * Have the number of strikes per year been changing over time?
    * Does the number of flights have any effect on seasonal trends?
    * Combine views into a dashboard allowing users to explore the data themselves.

    Note that you should not be confined to a specific number of species per month and should use a parameter to make a dynamic Top N.

Get the sample dataset:

 0. Scroll to the bottom of the page to
 0. Click <a target="_blank" href="http://wildlife.faa.gov/downloads/wildlife.zip</a>
    "FAA Wildlife Strike Database"</a> link 
    without specifying any filters
    to download <strong>wildlife.zip</strong>.
 0. Unzip the file for a folder named "wildlife".
 0. Drill into the folder.
 0. Double-click on "wildlife.accdb" to open it using Microsoft Office Access.
 0. The read-me.xls file in the folder is the same as the one obtained by 
    clicking <a target="_blank" href="http://wildlife.faa.gov/downloads/fieldlist.xls">
    "total of 94 fields of data" for the <strong>fieldlist.xls</strong></a>.
    It contains a description of Column Names, Engine Codes, Aircraft Type, Engine Position.

 If you are using a Mac, because
    Microsft Office for Mac 2011/2016 does not include Access,
    you'll need to consider
    several options for reading the .accdb Microsoft Access database file.

  * The simplest option is to temporarily use a Windows machine 
    or a virtual Windows machine containing MS Office Access 
    -- if they are already installed and available for use.

  * The <a target="_blank" href="http://www.actualtech.com/product_access.php">
    $39.99 ODBC read-only driver for Microsoft Access from Actual Technologies</a>
    enables Excel 2011 for Mac to execute SQL queries using Microsoft Query (comes with Microsoft Office) or a PivotTable.
    
    * http://mthomas.co.uk/5-ways-to-access-access-on-a-mac/
      notes that utilities such as http://mdbtocsv.codeplex.com
      support only older .MDB formats, not the .accdb format.

  * The $5.99 <a target="_blank" href="https://itunes.apple.com/us/app/mdb-tool-for-microsoft-access/id513995545?mt=12">MDB Tool - For Microsoft Access by Hankinsoft Development Inc
   from Apple iTunes</a>
    only handles databases in 2007 format, not 2010/2013 format.

  * http://serversideguy.com/2014/02/05/import-microsoft-access-accdb-file-to-ms-sql-server/

 0. To return data to a table:
    http://www.dummies.com/how-to/content/how-to-move-data-from-external-sources-into-excel-.html

 0. To return PivotTable
    http://www.dummies.com/how-to/content/how-to-make-a-pivottable-in-excel-for-mac-2011.html


<a name=“Galleries”>
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

"VIZ of the day/week" from the Tableau Public sharing website is highlighted on the right side of opening landing page on Tableau clients.

<a target="_blank" href="https://public.tableau.com/s/resources">https://public.tableau.com/s/resources</a>
announce monthly webinars and provides free on-line training videos also published under
<a target="_blank" href="https://www.youtube.com/channel/UCfAoXs9ej01qqIj6ti456tg/videos">
Tableau Smith on YouTube</a>, which has more videos than on the website.

QUESTION: How to describe changes over time? Videos instead of text blogs?

Vizzes by bloggers can be published on other sites, such as:

* http://blog.numbersbox.com/2015/06/global-obesity-were-getting-bigger.html


<a name="Choosing"> 
## Choosing Attention</a>
<img width="780" alt="tableau visual significance scale" src="https://cloud.githubusercontent.com/assets/300046/12224389/4ea8a34c-b7ac-11e5-9298-6172e912d36c.png">

This "visual significance scale" is from SAP, 
but equally applicable for choosing how to convey a point:

The most attention is naturally given to the position of items,
with items at the top given initial attention.



<a name="ShowMeMenu"></a>
<a name="ChartTypes">
## Chart Types</a>
<img align="right" width="162" alt="tableau chart types color" src="https://cloud.githubusercontent.com/assets/300046/12006691/20266ac8-ab9e-11e5-85af-b0a6765be10e.png">

* <a target="_blank" href="http://www.tableau.com/sites/default/files/media/which_chart_v6_final_0.pdf">Which chart is right for you?</a>

* <a target="_blank" href="http://www.tableau.com/sites/default/files/whitepapers/whitepaper_best-practices_telling_great_stories.pdf">5 Best Practices for Telling Great Data Stories - And Why it Will Make You a Better Analyst</a>

The value of various types are described in the video at https://www.youtube.com/watch?v=I_9nMSvY1FE
which displays CO2 emissions by country, per-capita by decade, over time, by income group, grouped by region.

https://www.youtube.com/watch?v=amdR9SzcHDs&list=PLcTX_fKtDPs7x7DENN30sKjQvgwI1RtWW
is a playlist of charts.


<a name="StoryPoints">
### Story points</a> 
(new since 8.2) A sequence of points, each containing a short caption. 

PROTIP: Have an initial point introducing the viz.

PROTIP: Pose a questions the content answers.

 * https://public.tableau.com/s/gallery/how-sun-controls-weather-0
 * https://public.tableau.com/profile/efields#!/vizhome/EarthquakesOnTheRise-Full/Earthquakestory enables users to select and provides a count of data ponints displayed on the map.
 * http://www.tableau.com/learn/tutorials/on-demand/story-points?reg-delay=true
 * https://www.youtube.com/watch?v=-EhYY4gLt-c

<a name="TreeMaps">
### Tree maps</a>
Boxes show relative sizes of components in the box, such as profit contribution, etc. (As long as data are all positive numbers)

 * https://www.youtube.com/watch?v=ZJuDk1RH2eg

### Heat Maps 
provide a two-dimensional set of colors which add a third dimension.

 * http://vizwiz.blogspot.in/2012/05/how-common-is-your-birthday-find-out.html
 
### Bubble charts 
show different size and colors in bubbles to show the relative size of components which don't have anything in common with each other, such as sales from different industries.


### Scatterplots 
show specific XY points around a trend line of central tendency:

 * http://www.tableau.com/learn/gallery/website-traffic-trends
 * http://www.tableau.com/learn/gallery/survey-satisfaction

   PROTIP: Add the statistical r value such as "r=-0.74" to disclose extent of correlation.

### Bar chart stacks 
show the make-up of <strong>components</strong>:

 * https://public.tableau.com/s/gallery/history-dow-30
 * https://public.tableau.com/s/gallery/smartphone-breakdown
 * https://public.tableau.com/s/gallery/what-music-matters-most-kexp

### Histograms 
show distribution of counts within a dataset.

 * https://public.tableau.com/s/gallery/poverty-and-school-performance

### Pareto Charts
are a form of bar line chart that

### Waterfall charts 
show the running total of each column

 * https://www.youtube.com/watch?v=ac7qfABRSBI

### Funnel charts 
presents stages, as in productivity of various sales activities leading up to a sale.

### Horizon (Trellis) charts
show when occassional "bumps" (such as errors) occur over time:

 * https://public.tableau.com/s/gallery/unemployment-horizon-chart
 
### Line charts 
Used to show trends over time. Segments show different categories.

 * https://public.tableau.com/s/gallery/life-expectancy-country
 
### Control charts 
These have a thicker average line and upper and lower bounds.

 * https://www.youtube.com/watch?v=YGsWJP0AClM
 
Box and Whisker charts (new since v8) display quartiles in distributions:

 * http://www.tableau.com/learn/gallery/two-weeks-home-sales


### Donut charts

 * http://vizwiz.blogspot.in/2014/12/donutcharts.html

### Radar charts
  Radar charts are great for visually identifying which of several dimensions 
  are possessed by specific sub-populations shown using cicle-ish lines in the middle.

<a target="_blank" href="http://evafengeva.blogspot.com/2015/12/k-means-clustering-analysis-of-red-wine.html"><img alt="red wine polar chart" src="https://cloud.githubusercontent.com/assets/300046/12368996/3abeb68e-bba6-11e5-9154-8ff05ea528e1.jpg"></a>
<p>
  In this example, one can see that wines rated good and excellent (in dark red)
  have high alcohol while wines rated as poor (shown in thick black line)
  have low alcohol.

### Geospatial Maps
Geographic maps make use of geocodes that come with Tableau.

 * Choropleth maps color land forms to differentiate values.
 * Geo bubble charts overlay different size dots.

Tableau allows use of WMS servers, GIS sources and custom shapes

 * http://www.tableau.com/learn/tutorials/on-demand/getting-started-mapping
 * http://www.tableau.com/learn/tutorials/on-demand/maps-tableau
 * http://www.tableau.com/learn/tutorials/on-demand/editing-unrecognized-locations
 * http://www.tableau.com/learn/tutorials/on-demand/expanding-tableaus-mapping-capabilities
 * http://vizwiz.blogspot.com/p/dear-data-two.html shows how custom markers can be added on a map by editing the map's CSV file.
 
   In version 9 define custom territories off a map and Tableau merges on the fly.
   Streets and satellite maps from Mapbox.com are supported.

QUESTION: How about custom plots (such as fields on a farm).

 * http://www.tableau.com/learn/tutorials/on-demand/custom-geocoding (7:03 minutes)


<a name=“GettingStartedVideos”>
## Getting Started Video</a>

<a target="_blank" href="http://www.tableau.com/learn/tutorials/on-demand/getting-started">
Tableau's 23-minute Getting Started video</a>
shows step-by-step how to open a spreadsheet, create several charts from it, and a dashboard with a story.

But before diving in, get to know <a target="_blank" href="http://onlinehelp.tableau.com/v8.2/pro/online/windows/en-us/help.htm#shortcut.html%3FTocPath%3DReference%7C_____5">
Keyboard Shortcuts</a>

<a name="FinishedWorkbook">
### Download and Open the "Finished" Workbook</a>
PROTIP: Start from the end. Download and click around the end product from the video before trying to follow the video step-by-step.

0. Control-click the <strong>Solution Workbook</strong> link to download the
   <strong>getting_started_finished.twbx</strong> workbook from
   

   <img width="640" alt="tableau getting started views" src="https://cloud.githubusercontent.com/assets/300046/12010083/ee51f34e-ac53-11e5-8907-93aa4dc7df87.png">

0. In Finder, move the file to your Workbooks folder.
1. In Finder, click on the .twbx file to open within Tableau Desktop (not Tableau Public):

   NOTE: The wrong workbook will be retrieved if you open the file using Tableau Public and click OK to message "A new version of this workbook is available. Tableau Public will open the latest version of this workbook."

0. On the Tableau menu, click Windows, Presentation Mode.
0. Click the <strong>Story</strong> view.

   <img width="542" alt="tableau getting started story points" src="https://cloud.githubusercontent.com/assets/300046/12019545/d5b98906-ad2e-11e5-9431-f2527d8020ac.png">

0. Click story points from left 
1. Within "Overall, our profits look strong", double-click on the red circle (Texas) to drill down.
2. Click [-] to return to the world view.
1. Click Category "Technology".
2. Click "But not across all categories".
3. Click "Here's the biggest problem" for the bar chart.
0. Cursor over the Tables red bar for more detail from Tooltip.
0. Click "What's behind it?" dashboard.

0. Cursor over Customer Breakdown icons for details about each customer.

   WARNING: Colors of the icons have not been specified as in the video.

0. When you're done, exit but don't save.

<a name="global_superstore">
### Data: Global Superstore.xls within global_superstore.zip</a>

0. On a Mac, hold down fn key and click the Data Set link to download the 
   <strong>global_superstore.zip</strong> file to your Downloads folder from
   <a target="_blank" href="http://www.tableau.com/sites/default/files/training/global_superstore.zip">
   http://www.tableau.com/sites/default/files/training/global_superstore.zip</a>

   WARNING: Do not use the xls file installed with Tableau 8 clients. 
   Even though the file names are similar, 
   it is missing the "Market" Dimension and "Shipping Cost" Measure referenced in the video.

0. Scroll to links to the Transcript pdf of the video.

   <img width="269" alt="tableau getting started links" src="https://cloud.githubusercontent.com/assets/300046/12009995/09a9abb8-ac50-11e5-8cae-ff102a980f4f.png">

0. On a Mac, hold down fn key and click the _Data Set_ link to download the 
   <strong>global_superstore.zip</strong> file to your Downloads folder.
0. In Finder, double-click on the file to unzip it to yield file <strong>Global Superstore.xls</strong>.
0. Delete the global_superstore.zip file to unclutter your hard drive.
0. Move the Global Superstore.xls file to your user local Documents / My Tableau Repository / Workbooks folder so that it appears after clicking Excel under Connect To a file.

<a name="GettingStartedVideo">
### Getting Started video content</a>

PROTIP: Things happen fast on this video. So most beginners will need to pause frequently and watch several times. The web video presentation automatically jumps back to the beginning after long pauses, and doesn't show the entire screen until it's maximized. Annoying.
So use link to save the MP4 video file so you can download it for viewing offline.

0. Click on the video and register.
0. Scroll to the MP4 link to the video that appears after registration.


Below are time codes to the video and links to my enhanced notes lower on this page.

* [0:30] <a href="#global_superstore">Data Source (Global Superstore)</a> 
* [1:04] Connecting Live versus Extracting. Connect to the "Global Superstore.xls" file.
* [1:09] <a href="#Joins">Joins and Data Splits</a> 
* [1:52] Rename field, Split Order ID Data Preparation split 
*   <a href="#Dimensions">Dimensions and Measures</a>
*   Building Views
*   Quick Table Calculations
* [7:42] Exporting Data by right-click on the viz. Copy Data. Switch to Excel. Paste.

   <strong>IMPORTANT: On a Mac, "right-click" by pressing down two fingers at a time on the touchpad. On Windows, it means clicking the right button on the mouse.</strong>

* [8:04] <a href="#Crosstab">Crosstab</a>.

* [9:38] <a href=“#GlobalSales”>Global Sales</a> Show Me chart types. Hold control key while clicking measures and dimensions.
* [11:08] Filters. Quick filter.
* [12:08] <a href="#SalesByCategory">Hierarchies by dragging Sub-Category</a> and dropping on Category. Call it Products.
* [13:13] Expand and contract hierarchy clicking [+] and [-] on pills. 

   EXTRA: Remove a pill by dragging and dropping on the Dimensions list.

* [13:22] Swap axis and Fit Height
* [13:30] Sort from pill and axis.
* [14:05] Mark labels by clicking Abc button.
* [14:17] Drag Profits on top of Color Mark.
* [14:23] Group by dropping Market to the left of vertical axis.
* [14:31] Select headers to group similar items together using paperclip icon.
* [14:49] Edit Alias.
* [15:13] <a href="#CustomerBreakdown">Customer Breakdown</a>
*   Working with Marks
*   Trend Lines
* [17:50] <a href="#SalesDashboard"> Sales Dashboard</a>
* [18:49]
* [19:52] <a href="#StoryPoints">Story Points</a> walk users through several captions on a navigator scroller, each analyzing a snapshop of visualizations.
* Callouts can be added on top of each visualization.
* [22:32] <a href="#DistributingContent"> Distributing Content</a>

Tableau's VizQL is a visual query language which translates drag-and-drop actions into data queries expressed visually. 

<a name=“Joins”>
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

0. Because data is now loaded within Tableau, hover over a heading to Rename the heading to "Distribution Center".

0. Delete split sub-columns not needed.

0. Click on the data type under the heading name to change it.

   <img width="130" alt="tableau data type options" src="https://cloud.githubusercontent.com/assets/300046/11996668/3f0d7fbe-aa25-11e5-8057-ef16bf34f4aa.png">

   NOTE: You can later return to this by clicking tab "Data Source" at the lower left of the screen.

0. [3:06] Click on <strong>Sheet1</strong> at the bottom set of tabs. 

   NOTE: Each sheet is also called a <strong>view</strong>.

   You are asked to save the data.
   
EXTRA: [4:04] into video http://www.tableau.com/learn/tutorials/on-demand/getting-started-data
shows linkage to add columns from another data source (Returns table) and inner vs left join.


<a name=“SaveFile”>
### Save Live or Extract Offline</a>

0. [02:42] Specify a Live connection to dynamically retrieve fast-changing data or import a static Extract for offline usage.
    
    <img width="305" alt="tableau connection live" src="https://cloud.githubusercontent.com/assets/300046/12008063/9b76621c-abe1-11e5-808d-199268544b0d.png">

CAUTION: Tableau does not save to disk automatically every few minutes (like Microsoft Office does).

If you save the file, the program suggests a name such as "Orders+ (Global Superstore)".

PROTIP: Add a version number to the file name if you would like to be able to go back archival generations.



<a name=“Shelves”>
### Shelves for Dimensions and Metrics</a>
<img align="right" width="368" alt="tableau shelves" src="https://cloud.githubusercontent.com/assets/300046/12010180/6382de08-ac59-11e5-8e24-e0a6c1124022.png">

   One of the amazing features of Tableau is it enables users to 
   create sophisticated tables and charts just by dragging and dropping, then clicking around.
   (By contrast, some coding declarative statements used to define visualizations in Kibana.)

   Each dimension element dragged to the Columns shelf defines a level in the hierarchy of columns.
   
0. [3:21] Drag from among Dimensions <strong>Category</strong> and drop within the Rows shelf.

   The 3 category values are shown in a table.

   "Pills" representing dimensions are color coded blue.
   [4:19] Dimensions are discreet categorical text strings displayed in labels.

0. [3:25] Drag from among Measures <strong>Quantity</strong> and drop within the Columns shelf.

   "Pills" representing measures are color coded green.
   [4:09] Measures are usually continuous numbers 
   such as counts, dollars, rankings, quantity, etc.
   These are the metrics we analyze and slice and dice.

0. [3:29] Drag from among Dimensions <strong>Segment</strong> and drop within the Rows shelf to the right of Category.

0. [3:32] Drag from among Dimensions <strong>Market</strong> and drop within the Colums shelf to the left of SUM(Quantity). Values are segregated across, starting with Africa.

0. [3:35] Drag from among Dimension Market again and drop it on top of <strong>Color</strong> (one of the Marks) makes use of Color to differentiate values.

   EXTRA: Notice a Market legend appearing when.
   
   <img width="400" alt="tableau columns and rows" src="https://cloud.githubusercontent.com/assets/300046/11996924/bc88bdc2-aa2b-11e5-9aec-0cbd44120c5e.png">
   
   EXTRA: Click on the Swap axis icon to swap X and Y axis (Columns and Rows).

   <img width="95" alt="tableau swap icon" src="https://cloud.githubusercontent.com/assets/300046/12041386/5f26cb0e-ae2e-11e5-915d-fccd02cac3f9.png">

   [3:49] Notice Canada is an "emerging" market.
   
0. [4:41] The video shows a Clear Sheet by clicking the icon. But instead let's control+click "Sheet 1" and select Rename the sheet to <strong>Market Sales</strong>.

      <img width="212" alt="tableau clear icon items" src="https://cloud.githubusercontent.com/assets/300046/12011946/3e7a049a-aca1-11e5-822f-8d6c99f6088c.png">

<a name=“SalesSeasonality”>
### Sales Seasonality View</a>

0. EXTRA: Create a new worksheet.

0. [4:43] Drag Measure Sales and drop it on the left side. This is equivalent to dropping in the Rows shelf.

0. [4:49] Cursor over the blue bar to show a single result - the SUM of all sales.

0. [5:01] Drag Dimension Order Date and drop it on on the top box. This is equivalent to dropping in the Columns shelf.

0. [5:07] Click on the [+] in front of the Year (Order Date) pill to get Quarters, shown at the bottom of the view.

0. [5:15] Drag Year to the right of Quarter so years are shown under each quarter.
0. [5:26] Drag Year and drop on Color, which uses different colors instead of columns.
0. [5:28] Cursor to the right edge of the pill to select Months.

0. [5:46] Cursor to the right edge of the SUM(Sales) pill.

   <img width="215" alt="tableau pill alt menu" src="https://cloud.githubusercontent.com/assets/300046/12018676/52c8daf2-ad23-11e5-8ff5-e9e4fcf34781.png">

1. Select Measure (Sum) to select Average (just to see what it looks like).
1. Press command+Z or click the Undo button. 

0. [6:00] Cursor to the right edge of the SUM(Sales) pill and select Quick Table Calculations > Year over Year Growth.

   <img width="410" alt="tableau quick table calculations" src="https://cloud.githubusercontent.com/assets/300046/12012179/7b70db4e-aca6-11e5-9e68-9523a28d3c0b.png">

   NOTE: The pill now represents what was selected (Year over Year Growth).

0. [6:23] Drag the SUM(Sales) pill and drop over Tooltip.
0. [6:33] Drag Sales into Rows.
0. [6:40] Hover over a line to see the tooltip.
0. [6:53] Drage Categories to in front of SUM(Sales) in Rows.
0. [7:08] Annotate the yearly dip in sales during July by right-clicking a blank part of the viz and select <strong>Annotate | Area</strong> for the text box.

   <img width="210" alt="tableau viz annotate" src="https://cloud.githubusercontent.com/assets/300046/12018491/b6d62eee-ad20-11e5-8f05-d8f2217d2b05.png">

0. [7:25] Right-click on the viz and select <strong>Copy... Image</strong>, then click Copy.

0. [7:35] Right-click Sheet tab to <strong>Rename Sheet</strong> to <strong>Sales Seasonality</strong>.

   <img width="235" alt="tableau sheet menu" src="https://cloud.githubusercontent.com/assets/300046/12018565/d6867978-ad21-11e5-9b82-f94dc7bdcaad.png">

   QUESTION: Sesonality would be calculated statitcally how?

<a name=“CopyData”>
### Copy data</a>
0. [7:41] Right-click on the viz to select Copy, Data, then press option+tab to be in Excel, and press command+V to paste into Excel.

0. EXTRA: Press command+S to save the worksheet.


<a name=“Crosstab”>
### Crosstab</a>

0. [8:02] Right-click on sheet tab to select <strong>Duplicate as Crosstab</strong>.

   This creates a new sheet.
   
0. [8:04] Right-click on the Seasonality tab, select <strong>Duplicate as Crosstab</strong>.
1. [8:11] Swap axis.
2. Drag Category pill to the beginning of the Rows shelf.
3. [8:14] Select Entire View from Normal.
4. [8:15] Click Color button. Edit Colors
0. [8:35] Drag Profit to drop on top of Color for clearer understanding of trends.
0. Click Color Mark.
1. Click Edit Colors.
3. Check <strong>Use Full Color Range</strong>.
4. Check Stepped Colors, 6 Steps. OK.
5. Undo the above tweaks.

0. Change the Marks type to Square.
0. Click Marks: Lables and choose Show mark labels (so text appears).
1. Rename shee to <strong>Crosstab</strong>.


<a name=“GlobalSales”>
### Global Sales and Profits</a>
[9:08] Although Office Supplies is doing well, Furniture doesn't have the same dark green swing. Where is it doing poorly? 
Is this happening across all stores across sales region?

0. [9:18] Click icon or pull down menu to create new sheet.
0. [9:38] We don't know how to view the data. So make the <a href="#ShowMeMenu">Show Me menu</a> visible.
0. [10:05] Command-click multiple relevant Dimensions and Metrics for suggestions highlighted in the Show Me: Sales and Countries. Good matches for chart type are highlighted in blue.
0. [10:22] Cursor among the highlighted chart icons.
0. [10:26] With simple map selected, click X to dismiss the Show Me menu.

   This results in Columns: Longitude and Rows: Latitude.

1. [10:27] Drag State and drop over map.
2. [10:33] Click Size of Mark and increase size of dots on the map.
3. [10:37] Click Color of Mark and change Transparency to 70%.
4. Click on "Automatic" to the right of Borders within Marks and select a dark blue.
5. [10:47] Click the gray bar of the Size legend to Hide Card.
6. [10:53] Drag Profit and drop on Color Marks to color the dots.

   NOTE: The size of each circle is based on level of Sales.  
   But the color is based on level of profit.
   There are two facets presented.

0. [10:56] Click the magnifier button inside the map for a geographic search.
1. [11:00] Type United Kingdom in the search bar.
2. Click the unpin icon to zoom out.

0. [11:13] Drag Categories to the Filters shelf for a pop-up.
1. Select Furniture.
2. [11:25] Click on the right edge of the pill in Filters to select <strong>Show Quick Filter</strong> (Show Quick Filter in earlier versions) so users would have the option of choosing when viewing. See the choice appear on the right edge.

0. [11:29] Click the right edge of the Category filter to pull down and select

   <img width="303" alt="tableau filter drop down" src="https://cloud.githubusercontent.com/assets/300046/12044537/44e197fc-ae50-11e5-8b5f-fb5cd9835548.png">

0. [11:46] command-click the right edge of a Dimension (Market) and select Show Filter to add another way users can select data interactively.

   <img width="179" alt="tableau dim options" src="https://cloud.githubusercontent.com/assets/300046/12044579/f4cfdb24-ae50-11e5-8c9f-2a8555cec2b4.png">

0. [12:00] Double-click on the sheet name and Rename to Global Sales and Profit (but I prefer simply "Map").


<a name=“SalesByCategory”>
### Sales by Category</a>

* [12:08] 
 * https://www.interworks.com/blog/rrouse/2015/12/14/new-way-visualize-kpis-tableau?es_c=24114&es_t=1450819328

<a name="CustomerBreakdown">
### Customer Breakdown</a>

* [15:13]

<a name="SalesDashboard">
### Sales Dashboard</a>

* [17:50]

<a name="StoryPoints">
### Story Points</a>

* [19:52] The

 * http://www.tableau.com/about/blog/2014/5/82-preview-tell-story-your-data-story-points-30761


<a name="DistributingContent"> 
## Distributing Content</a>

* [22:30] into Getting Started video, the display shown is hosted on localhost.

  * The https://www.youtube.com/watch?v=aC7kVCWLNSM

  * The 4 minute video <a target="_blank" href="http://www.tableau.com/learn/tutorials/on-demand/distributing-and-publishing">http://www.tableau.com/learn/tutorials/on-demand/distributing-and-publishing</a> provides a little more on this topic.

   <img width="300" alt="tableau worksheet export" src="https://cloud.githubusercontent.com/assets/300046/12020838/ba2caaf6-ad3d-11e5-97a0-1842128fe16d.png">

EXTRA: 

0.   PROTIP: In the title and workbook name, specify a date reference since the work will be repeated in the future. Example: "Global Status 2015-01" because that's the most recent data. Putting year before month enables sorting of text by name.

0. If you have been using the Tableau Public client, click on the <strong>Story</strong> before saving to the Tableau Public website.

0. Enter your password again. every. time. 

   A web page should pop up on your default internet browser.
   
0. Click Edit in the green bar at the top.
0. Copy the URL from the browser, such as:

   https://public.tableau.com/views/GlobalStatus2015-01/Story1?:embed=y&:display_count=yes&:showTabs=y

0. Obtain a permalink from http://goo.gl by pasting the URL.

   PROTIP: There are many URL shortener utility sites.
   Google tracks link usage by all the Google Analytics metadata.

0. Copy the generated permalink and paste it in the Permalink page.
0. Click the Share icon at the bottom.

   <img width="594" alt="tableau share links" src="https://cloud.githubusercontent.com/assets/300046/12054314/d7e822ac-aedf-11e5-937f-9d8c2be9df74.png">

0. Copy the <strong>Embed Code</strong> (example shown below) and embed it on your website:

	```
<script type='text/javascript' src='https://public.tableau.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder' style='width: 1020px; height: 1033px;'><noscript><a href='#'><img alt='Global Status 2015-01 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;GlobalStatus2015-01&#47;Story1&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' width='1020' height='1033' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='site_root' value='' /><param name='name' value='GlobalStatus2015-01&#47;Story1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;GlobalStatus2015-01&#47;Story1&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='showVizHome' value='no' /><param name='showTabs' value='y' /><param name='bootstrapWhenNotified' value='true' /></object></div>
	```

<hr />

<a name=“Calculations”>
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

* https://www.youtube.com/watch?v=Y7OJjIeKcBM
  Tableau 8.1: Predictive Analytics with R

<a name="DataBlending">
### Data Blending
<strong>Data Blending</strong> is the combination of several data sets for integrated analysis. Although Tableau in 2015 lacked a data modeling diagram view, semantic model development is easy, rapid, intuitive and powerful with one or two combined data sources.


<a name=“Parameters”>
## Parameters</a>

http://www.tableau.com/LOD-expressions

<a name=“Forecasts”>
## Forecasts</a>
http://www.tableau.com/learn/tutorials/on-demand/forecasting

0. To specific options for a graph pane, click the caret at the right of the gray bar above that pane.

0. Select float.


<a name=“LoadSophData”>
## Google Analytics</a>

https://www.youtube.com/watch?v=bTU9sOfqjRo
describes 
https://www.youtube.com/watch?v=CAZ3IAJEuCI
Tips and Tricks from a Tableau Jedi
by Alan Elderidge from Tableau Australia.

http://www.tableau.com/learn/tutorials/on-demand/connecting-google-analytics
notes that extracts of Google Analytics are limited to 7 dimensions and 10 measures.

Tableau’s standard extraction from GA is limited in that it uses Sampler.
So Google Big Query is a better approach for data extraction.

But <strong>Measure Groups</strong> pre-selects them

* Bounces
* Exits
* Page Load Sample
* Page Load Time (ms)
* Pageviews
* Sessions
* Time on Page
* Unique PageViews


<a id="TableauServer">
## Tableau Server</a>
The server enables workbooks to be organized into <strong>projects</strong> 
and assigned specific permissions by user group. 

<strong>Sites</strong> isolate multiple tenants on the same hardware.

* http://onlinehelp.tableau.com/current/server/en-us/welcome.htm

Tableau Server consists of several processes operating together at the same time
(all Multi-threaded and Active/Active HA unless specified below):

| Process | Program | Function |
| ------ | ------- | -------- |
| Application Server | wgserver.exe | log in, search, browse, generate static images, manage subscriptions |
| VizQL Server | vizqlserver.exe | Load and render requested views |
| Data Engine  | tdeserver.exe, tdeserver64.exe | load Tableau Data Extracts in memory based on queries from VizQL processes |
| Backgrounder | backgrounder.exe | run maintenance tasks and data extract refreshes. Not multi-threaded as it tries to use as much as it can. |
| Data Server  | dataserver.exe | handles requests to Tableau Data Sources. These requests can come from the Tableau Server or from Tableau Desktop users. 2x2.|
| Repository   | postgres.exe | store settings, metadata, usage statistics and workbooks. Single process runs Active/Passive standby. |
| Gateway | ? | ? |
| API Server | ? | responds to API requests |
| Cache Server | ? | holds items in memory |
| File Store | ? | provides files |

 * http://onlinehelp.tableau.com/current/server/en-us/distrib_ha_intro.htm
 * http://onlinehelp.tableau.com/current/server/en-us/distrib_ha_fail.htm

Acess from views embedded in websites use Tableau's "Trusted Tickets" authentication.

<a target="_blank" href="https://www.youtube.com/watch?v=CpyrCryHr8c">
   Planning and Architecting Tableau Server</a>
   published Dec 4, 2014
   by Neelesh Kamkolkar, Product Manager, Tableau Software
   notes use of SSO (Single Sign-On) support such as Microsoft Active Directory
   SAML refreshed using command-line utility <a target="_blank" href="http://onlinehelp.tableau.com/current/server/en-us/tabcmd.htm">tabcmd</a> synchgroups.
   
   <a target="_blank" href="http://onlinehelp.tableau.com/current/server/en-us/tabadmin.htm">tabadmin</a>.

<img width="795" alt="tableau 8 scalability" src="https://cloud.githubusercontent.com/assets/300046/12035873/e1377296-adfd-11e5-804f-fe9e07749b36.png">

 * http://www.tableau.com/learn/whitepapers/tableau-server-scalability-explained
 * http://www.tableau.com/sites/default/files/media/whitepaper_tableau_server9.0scalability_eng_2.pdf

 * https://www.youtube.com/watch?v=34WGBP221aw
   Tableau Server Administration and Authentication


<a id="ExtractAPI">
## Tableau Extract API</a>

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


 * http://vizninja.com/2015/11/15/how-to-properly-back-up-your-tableau-server/
   by Paul Banoub


<a name=“Subscriptions”>
## Subscriptions</a>
Tableau allows users to subscribe to dashboards for them to be automatically emailed to them on a schedule.


<a id="UserCerts">
## Master Tableau via User Certification</a>
Exam Details &amp; Prep Guides at <a target="_blank" href="http://www.tableau.com/support/certification">
http://www.tableau.com/support/certification</a>
provides information about taking Tableau's tests
Tests at conferences and on your laptop.

Tableau's Qualified Associate for Tableau Desktop and Server
($250 to answer 16 questons over 2-hours).

 * http://mkt.tableau.com/files/Desktop-9-QA-Prep-Guide.pdf
 * http://mkt.tableau.com/files/Desktop-9-CP-Prep-Guide.pdf

Tableau's Pro cert levels for Tableau Desktop and Server:

 * http://mkt.tableau.com/files/Server-9-QA-Prep-Guide.pdf ($600 over 3 hours)
 * http://mkt.tableau.com/files/Server-9-CP-Prep-Guide.pdf ($800 over 7 hours)

These pdf files contain links to just the front page (not specific links, unfortunately):

 * (tutorial) http://www.tableau.com/learn/training
 * (kb) = Knowledge-base : http://kb.tableau.com

Also see:

 * Product Help: http://onlinehelp.tableau.com
 * Training from Tableau at http://www.tableau.com/support/training


<a name=“Videos”>
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

<a target="_blank" href="https://www.youtube.com/watch?v=W0TU1dCrmQ4&list=PLMZkG3MOarqI9UwuWmN4DkXqsax9H7rBV">
This playlist of 15 videos from TechAnalysists</a>
begins with its Getting Started video.

 * https://www.youtube.com/watch?v=fEoB8EIEETQ
   describes Connecting to databases and advanced features.

 * Multidimensional data sources are supported by Tableau only in Windows, not in OSX.

<a id="Bloggers">
## Bloggers</a>
Those what have taken the time to share their tips and tricks:

 * http://vizpainter.com/
 * http://vizwiz.blogspot.com/
 * http://www.vizcandy.ca/
 * http://vizninja.com/
 * http://www.dataplusscience.com/TableauReferenceGuide/ by Jeffrey Shaffer 
 * http://healthintelligence.drupalgardens.com/content/resources/tableau-training by Ramon Martinez
 * http://www.theinformationlab.co.uk/TraininginTableau1

Tableau has hosted <a target="_blank" href="http://www.tableausoftware.com/public/blog/2014/03/it039s-iron-viz-season-2343"> Iron Viz competitions</a>
where, over the course of a year, submissions are received for three online viz challenges, each with a different theme and judging criteria. The winner of each challenge earns a spot on stage at Tableau’s fall conference to compete in front of a live, data-savvy audience for the title of Iron Viz Champion.

 * https://www.slalom.com/thinking/iron-viz



<a id="Resources">
## Resources</a>

Book: <a target="_blank" href="https://leanpub.com/datastyle">
The Elements of Data Analytic Style: A guide for people who want to analyze data.</a>
by Jeff Leek
was the <a target="_blank" href="http://blog.leanpub.com/2015/12/top-ten-bestselling-books-2015.html">#2 best-selling book on Leanpub in 2015</a>.

http://onlinehelp.tableau.com/current/server/en-us/help.htm
replaces 

http://onlinehelp.tableausoftware.com/

User forum:

 * https://community.tableau.com/community/forums?edition=unlicensed&version=9.0
 
 * http://data-dare.com/ is a fun way to evaluate visualizations.

Twitter.com

LinkedIn.com:

 * <a target="_blank" href="https://www.linkedin.com/company/206993"> Tableau Company</a>
 * <a target="_blank" href="https://www.linkedin.com/groups/118463/profile"> Tableau Software Fans and Friends</a>

Facebook.com

StackOverflow.com

User Conference:

 * \#TC15 <a target="_blank" href="https://vts.inxpo.com/scripts/Server.nxp?LASCmd=AI:1;F:US!100&PreviousLoginCount=0&ForceProfileToBeFilledOut=0&DisplayItem=NULL&ShowKey=27270&ShowFrameFormatOverride=NULL&RandomValue=1451158492632">2015</a> (registration required)
 
 * \%TC16 in Austin, TX  http://data-dare.com/2015/11/datadare1/#comment-116 
 run by Brit Cava who created https://public.tableau.com/profile/brit4337#!/vizhome/TC16AustinTXTravelGuide/AustinTravelGuide

 
https://itunes.apple.com/us/podcast/tableau-wanna-be-podcast/id908948125?mt=2
by Emily and Matt Francis who did TFF (Tableau French Festival)

<a target="_blank" href="http://www.slideshare.net/21_venkat/learning-tableau-data-graphs-filters-dashboards-and-advanced-features"> Slideshare: Learning Tableau- Step by Step Guide</a>

Tableau was founded in 2003 by Christopher Stolte, Patrick Hanrahan, 
and Christian Chabot, now CEO.

VP Product Management Francois Ajenstat 

VP Sales Kelly Wright will retire end of 2016.

Tableau corporate headquarters is in the bayside Freemont neighborhood of Seattle, Washington which locals call "The center of the universe".

 * http://www.geekwire.com/2015/lead-global-company-tableaus-ceo-learned-year-london/

Tableau Software is traded on NYSE under ticker symbol DATA. 
The company went public on May 17, 2013 at an initial public offering price of $31 per share.
 
 * https://www.tradingview.com/chart/DATA/?utm_source=www.tradingview.com&utm_medium=www.tradingview.com/widget/technical-analysis/


## Random links

 * https://www.tableau.com/about/blog/2016/1/5-tips-make-your-dashboards-more-performant-48574

Certification

 * https://www.youtube.com/watch?v=u5V83ms7yr4
   
