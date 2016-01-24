This page takes a hands-on approach to learn usage of Jenkins as setup in <a href="jenkins-setup.md">jenkins-setup</a>.

Rather than inundating you with all items on each screen, this tutorial takes you to several screens invovled with each of several themes, such as Parameters, Git connection, Coverage, etc.


<a id="Tabs">
## View Tabs</a>
To group jobs into separate page views, click on the [+] at the top.

<a id="JobsDashboard">
## Jobs List in Jobs Dashboard</a>
CHALLENGE: Become famailiar with operations available in menus and links.

0. For smaller icons, click the S among S | M | L at the bottom of the list.

0. Disable <strong>auto-refresh</strong> at the upper-right of the jobs list so you are not disturbed.

0. Before <a href="#NewJob">creating a new job</a>, click on an existing job to see its status screen.

<img width="909" alt="jenkins build screen" src="https://cloud.githubusercontent.com/assets/300046/12532100/4394d7b4-c1c0-11e5-8d40-e92263aa3369.png">

<img align="right" width="201" alt="jenkins job menu" src="https://cloud.githubusercontent.com/assets/300046/12532075/9d34fae8-c1bf-11e5-83c2-d948fee7a22d.png">

0. Clicking <strong>Recent Changes</strong> on the Status screen is the same as clicking <strong>Changes</strong> on the left menu.
 
   PROTIP: The same link can appear in the left menu and in the screen.
   Prefer the left menu as it's easier to remember and to find.

0. Click <strong>Status</strong> on the left menu to return to the higher level screen.

   CAUTION: If you're just looking around, don't click the Disable button on the right or the Delete button on the left menu.

0. Click the <strong>Configure</strong> link at the left menu for values in the form used to create the current job.
0. Scroll down to notice the String Parameter names and default values (such as environment, browsertype).

   PROTIP: Pay special attention whether the first letter of each parameter values are capitalized.

0. Click the <strong>Build with Parameters</strong> link at the left menu for a list of parameter values fed to the job.

   CAUTION: Don't click <strong>Build</strong> if you're just looking around
   because that invokes the build job. 

   More parameters can be added in Configure:

   <img width="218" alt="jenkins add parameter" src="https://cloud.githubusercontent.com/assets/300046/12533031/033bb968-c1d8-11e5-86a6-f6ee97017dd8.png">

   These are explained eleswhere.

0. Escape the page by clicking another menu item, the <strong>Coverage Trend</strong> link at the left menu. 

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
<a id="Workspace">
## Workspace from Git</a>
0. Click either <strong>Workspace</strong> link to view input files (pulled from Github).
0. Click the job name in the cookie crumbs link at the top to return to the job status screen.
0. Click a run # on the left menu.
<a id="TestResult">
## Test Result</a>
0. Click <strong>Test Result</strong>.

   Notice it's an expansion of items shown in the Workspace shown above.

0. Click <strong>History</strong> on the left menu.

   This lists the history for each <strong>run</strong> its duration and count of <strong>steps</strong> in each run.
   These details are not shown in the list at the job level.



<a id="NewJob">
## New Job</a>
Let's create a new job for a hands-on understanding of the tool.




0. In the Dashboard list, click on the (tiny) drop-down button for the drop-down context menu of a project.

 <img width="321" alt="jenkins job context menu 2" src="https://cloud.githubusercontent.com/assets/300046/12532955/c63b2316-c1d5-11e5-9fb0-fe28d241a998.png">
0. Select <strong>Configure</strong>.
<a id="ScheduleBuild">
## Schedule builds</a>
0. Scroll to the <strong>Build Triggers</strong> section.
1. Click <strong>Build periodically</strong>.

   PROTIP: Periodic builds are used when testing is disassociated from those who make changes.
   
   Jenkins makes use of 5 timing codes separated by spaces. The first position specifies the minute.
   The second the hour, etc. A code such as "H H(9-10) * * *" specifies runs 
   with H to specify use of a hash calculation of the job name that randomizes a time between 9 and 10 am.
0. Click on the blue question mark for more detail.
   
   PROTIP: "Continuous integration" approaches typically favor "Build after other projects are built"
   to remove a time window between developers building and Jenkins running tests.
   
   WARNING: "Poll SCM" (Source Code Management system) incurs overhead to service checks from Jenkins.

3. A build job can be also invoked on a schedule.

0. Click Configure in the context menu or in the left menu.

A build can be triggered for invocation several ways.

0. Click the button with the green arrow.
 
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
* 



<a id="ELK">
## Output to ELK Stack</a>
