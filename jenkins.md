This chapter takes a hands-on approach to learn usage of Jenkins as setup in <a href="jenkins-setup.md">jenkins-setup</a>.

We begin with a look at an existing build job and its run history details as we learn navigation tricks.


<a id="Tabs">
## View Tabs</a>
0. To group jobs into separate page views, click on the [+] tab above the list of projects.

   <img width="738" alt="jenkins view tabs" src="https://cloud.githubusercontent.com/assets/300046/12537097/e3120c20-c26b-11e5-84f5-5b2b32932540.png">

0. Views can also be selected after clicking the tiny righ-pointing arrow to the left of Jenkins on the green bar.

<a id="Hierarchy">
## Hierarchy of Projects/Jobs to Individual Builds</a>
CHALLENGE: Become famailiar with operations available in menus and links.

0. For smaller icons, click the S among S | M | L at the bottom of the list.

0. Disable <strong>auto-refresh</strong> at the upper-right of the jobs list so you are not disturbed.

   NOTE: Several teams typically share use of the same Jenkins server.

0. Mouse over the # link on the job list and select the tiny arrow that appears.
1. Select an option from the context menu that appears:

   <img width="536" alt="jenkins projects run context" src="https://cloud.githubusercontent.com/assets/300046/12537175/a74fb83e-c26d-11e5-99eb-b03dac327a71.png">

   PROTIP: Viewing a specific run is more frequently done that reviewing historical trends.

0. Select from the context menu <strong>Console Output</strong> for the particular run clicked.

0. Click <strong>Back to Dashboard</strong> to return to the Jobs/Projects list.

   <a id="Workspace">
   ### Workspace from Git</a>
0. In addition to the choice of clicking either <strong>Workspace</strong> link to view input files (pulled from Github),
   click the tiny drop-down arrow for a context menu.

 <img width="321" alt="jenkins job context menu 2" src="https://cloud.githubusercontent.com/assets/300046/12532955/c63b2316-c1d5-11e5-9fb0-fe28d241a998.png">



   <a id="RecentChanges">
   ## Recent Changes</a>

0. Click on an existing job <strong>Name</strong> to see its status screen.

   <img width="909" alt="jenkins build screen" src="https://cloud.githubusercontent.com/assets/300046/12532100/4394d7b4-c1c0-11e5-8d40-e92263aa3369.png">

   <img align="right" width="201" alt="jenkins job menu" src="https://cloud.githubusercontent.com/assets/300046/12532075/9d34fae8-c1bf-11e5-83c2-d948fee7a22d.png">

0. Clicking <strong>Recent Changes</strong> on the Status screen is the same as clicking <strong>Changes</strong> on the left menu.
 
   PROTIP: The same link can appear in the left menu and in the screen.
   Prefer the left menu as it's easier to remember and to find.

0. Click <strong>Status</strong> on the left menu to return to the higher level screen.

   CAUTION: If you're just looking around, don't click the <strong>Disable</strong> button on the right 
   or the <strong>Delete</strong> button on the left menu.

   <a name="Configure">
   ### Configure project</a>
0. Click the <strong>Configure</strong> link at the left menu for values in the form used to create the current job.

0. Mouse over the green breadcrumbs line to the right of <strong>Configure</strong> for a menu:

   <img width="208" alt="jenkins configure breadcrumbs menu" src="https://cloud.githubusercontent.com/assets/300046/12537497/94c341c4-c275-11e5-884e-c6962aafec72.png">
   
   PROTIP: Using the drop-down menu from the breadcrumbs green bar saves you from scrolling down the many pages in this screen.

0. Scroll down to the <strong>String Parameter</strong> names and default values (such as environment, browsertype).

   PROTIP: Pay special attention whether the first letter of each parameter values are capitalized.

   <a id="Parameters">
   ## Parameters</a>

0. Click the <strong>Build with Parameters</strong> link at the left menu for a list of parameter values fed to the job.

   CAUTION: Don't click <strong>Build</strong> if you're just looking around
   because that invokes the build job. 

   More parameters can be added in Configure:

   <img width="218" alt="jenkins add parameter" src="https://cloud.githubusercontent.com/assets/300046/12533031/033bb968-c1d8-11e5-86a6-f6ee97017dd8.png">

   (These are explained eleswhere.)
   
   PROTIP: Even though a page doesn't have a "Cancel" action (just Save or Apply),
   exit without saving by clicking another menu item.

0. <strong>Escape the page without saving</strong> 
   by clicking another menu item, the <strong>Coverage Trend</strong> link at the left menu. 

   It does not display much if the add-on is not installed.

0. Click the "Last build" under Permanlinks. Notice it is a generic link for 
   the link at the top of the Build History at the left.

<a id="BuildStatus">
## Individual Build Status</a>
<img align="right" width="183" alt="jenkins build menu" src="https://cloud.githubusercontent.com/assets/300046/12532074/83e3a850-c1bf-11e5-836e-444ffff39424.png">

0. Click <strong>Parameters</strong> to review the parameter values used in this particular run.
0. Click <strong>Git Build Data</strong> for the code which uniquely identifies the data used to drive this particular build.
1. Click the # listed in the breadcrumbs bar.
2. Click <strong>Git Build Data</strong> for the same information.

3. Click the link to the job in the breadcrumbs bar to skip a level up.

0. Click the job name in the cookie crumbs link at the top to return to the job status screen.
0. Click a run # on the left menu.
<a id="TestResult">
## Test Result</a>
0. Click <strong>Test Result</strong>.

   Notice it's an expansion of items shown in the Workspace shown above.

0. Click <strong>History</strong> on the left menu.

   This lists the history for each <strong>run</strong> its duration and count of <strong>steps</strong> in each run.
   These details are not shown in the list at the job level.


0. In the Dashboard list, click on the (tiny) drop-down button for the drop-down context menu of a project.

0. Select <strong>Configure</strong>.
<a id="ScheduleBuild">
## Schedule builds</a>
0. Scroll to the <strong>Build Triggers</strong> section.

   <img width="340" alt="jenkins build triggers" src="https://cloud.githubusercontent.com/assets/300046/12537282/0c3711f0-c270-11e5-8448-d4745280080a.png">

   PROTIP: "Continuous integration" approaches typically favor <strong>Build after other projects are built</strong>
   to remove the time window between developers building and Jenkins running tests.
   
   WARNING: "Poll SCM" (SCM = Source Code Management system) incurs overhead to service polling checks from Jenkins.

1. Click <strong>Build periodically</strong>.

   PROTIP: Periodic builds are used when testing is disassociated from those who make changes.
   
   Jenkins makes use of 5 timing codes separated by spaces. The first position specifies the minute.
   The second the hour, etc. A code such as "H H(9-10) * * *" specifies runs 
   with H to specify use of a hash calculation of the job name that randomizes a time between 9 and 10 am.

0. Click on the blue question mark for more detail.
   
0. A build job can still be always be invoked manually anytime.

0. Click Configure in the context menu or in the left menu.

<a id="Addons">
## Build Add-ons</a>
In a Configure screen:

0. Scroll down to the <strong>Build</strong> section. 

0. Cursor over a build step such as "Build a Visual Studio project".
1. For <strong>MSBuild Build File</strong>, the file extension should be <strong>.sln</strong> (solution).
1. In "Run unit tests with MSTest", test file extension should be <strong>.dll</strong> (dynamic link library).
2. The <strong>Results.trx</strong> file extension is ".trx".
2. In "Execute Windows Batch command", the Command is first an .exe (executable).

   ```
   C:\Tools\trx2html.exe Results.trx
   ```

0. In "Publish MSTest test result report", it's <strong>*.trx</strong>.

0. Click <strong>Add Build Step</strong>.

   <img width="344" alt="jenkins build steps" src="https://cloud.githubusercontent.com/assets/300046/12533016/bb8d66de-c1d7-11e5-9620-8d96de3e7300.png">


<a id="RestrictRun">
## Restrict Run</a>
0. In the first section, scroll to check <strong>Restrict where this project can be run</strong>.

0. For <strong>Label Expression</strong>, enter <strong>WindowsHost</strong> to only run on Windows machines.
 
<a id="Post-Build">
## Post-build actions</a>

<img align="right" width="296" alt="jenks post-build action" src="https://cloud.githubusercontent.com/assets/300046/12533006/772cce4e-c1d7-11e5-9210-e8625dee9449.png">


  * https://wiki.jenkins-ci.org/display/JENKINS/Performance+Plugin
  sets the final build status (as good, unstable or failed) based on the reported error percentage. 

 In the workspace for a project are folders and **.trx** files output from Jenkins runs.
 
If a job fails, 

0. Email notifications are sent if <strong>Editable Email Notification</strong> is selected.

0. Parameters defined earlier can be specified in the Default Content field:

   ```
Results For Build $BUILD_ID
$DEFAULT_CONTENT
${FILE,path="Results.trx.htm"}
   ```

* SMS via PagerDuty.

   PROTIP: Email to a distribution list broadcasting to a small number of people
   or only whoever is on-call.
 
* https://github.com/jenkinsci/slack-plugin
   can be installed to send chat room (Slack) notifications.

Invoke **Prepare for Shutdown** to stop work, to avoid abruptly stopping jobs.


<a id="Reports">
## Reports</a>
0. Builds appear in the **Build Queue** at the left of the UI.

0. Right-click on the # associated with a build for a drop-down list.

 <img width="611" alt="jenkins-build-project-detail" src="https://cloud.githubusercontent.com/assets/300046/11172332/02c5ca5a-8bc3-11e5-8d53-b4a0b57a22a8.png">

0. Select **Console Output** to view the log from each build.

 Jenkins provides RSS feeds exposing XML files containing lists of just failures or a list of just the latest builds.

0. A link to a specific build attempt is like this example generated from Papercut.codeplex.com:

 ```
 http://localhost:8081/job/Hellow%20World/27/
 ```

<a id="Artifactory">
## Output to Artifactory</a>

* https://wiki.jenkins-ci.org/display/JENKINS/Artifactory+Plugin



<a id="Resources">
## Resources for further learning</a>

By Chandra Shekhar Reddy:
  * https://www.youtube.com/watch?v=XY-ZB3FRnxw 
    Jenkins Tutorial - Part 01: Introduction & installation by Chandra Shekhar Reddy

  * https://www.youtube.com/watch?v=XY-ZB3FRnxw (19:25) Install JRE8 & Jenkins.war on Windows & /opt/tomcat7/webapps
    and ./bin/startup.sh
  * https://www.youtube.com/watch?v=RR0LabeUQ88  Create New Job in Jenkins on Windows.
  * Configuring jobs- https://www.youtube.com/watch?v=vJqUwZpRqwo
  * Git integration https://www.youtube.com/watch?v=ISAUsBSI8G0
  * Configuring slave nodes https://www.youtube.com/watch?v=EOp2VVRHrKQ

By Chris Chrysostom:
 * https://www.youtube.com/watch?v=RR0LabeUQ88 Create new job in Jenkins

John Sonmez (@jsonmez, http://simpleprogrammer.com/)
 * <a target="_blank" href="https://app.pluralsight.com/library/courses/jenkins-introduction/table-of-contents">
   Getting Started with Jenkins Continuous Integration 2-hour 38-minute video course Feb. 2013 at Pluralsight.com</a>.
  So he is showing an older 1.500 version of Jenkins. 
  In this course, examples use SVN (Subversion) for the SCM (Source Control Manager), Visual Studio, 
   MSBuild (), MSTest, MSTestRunner, StyleCop, and Papercut.
  But other tools work in a similar way.
  The sln (solution) MSBuild script file in the video can be an Ant or Maven script.
 
 <img alt="jenkins-job-flow-diagram" src="https://cloud.githubusercontent.com/assets/300046/11226898/b5a246f6-8d37-11e5-86f4-1c75e6c49dee.png">

http://app.pluralsight.com/courses/jenkins-introduction

* http://thepracticalsysadmin.com/setting-up-a-github-webhook-in-jenkins/

* https://gist.github.com/misterbrownlee/3708738
  Jenkins to build GitHub projects.


<a id=SkillCert">
## Skill Certification</a>
The company hosting Jenkins servers is also hoisting certifications of Jenkins people.
There is the age-old question of whether organizations providing training also be the one offering certifications
advertised as being of the whole community.
The company is so commercial oriented that it does not allow newsletters to be sent to gmail and hotmail addresses.

