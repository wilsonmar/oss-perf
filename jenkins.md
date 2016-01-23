
<a id="Post-Build">
## Post-build actions</a>
  * https://wiki.jenkins-ci.org/display/JENKINS/Performance+Plugin
  sets the final build status (as good, unstable or failed) based on the reported error percentage. 

If a job fails, 
0. Email notifications are sent
1. Chat room notifications are sent



<a id="ScheduleBuild">
## Schedule builds</a>
0. Right-click on a project for a drop-down list containing **workspace**.

 <img width="321" alt="jenkins-build-dropdown" src="https://cloud.githubusercontent.com/assets/300046/11172423/8cffff32-8bc4-11e5-9e3b-4c92b9f7b3a1.png">

 A build can also be invoked by clicking the button with the green arrow at the right side of the list of projects.

 In the workspace for a project are folders and **.trx** files output from Jenkins runs.
 
Invoke **Prepare for Shutdown** to stop work, to avoid abruptly stopping jobs.

 
<a id="Reports">
## Reports</a>
0. Enable auto-refresh at the upper-right of the jobs list.

0. Builds appear in the **Build Queue** at the left of the UI.

0. Right-click on the # associated with a build for a drop-down list.

 <img width="611" alt="jenkins-build-project-detail" src="https://cloud.githubusercontent.com/assets/300046/11172332/02c5ca5a-8bc3-11e5-8d53-b4a0b57a22a8.png">

0. Select **Console Output** to view the log from each build.

 Jenkins provides RSS feeds exposing XML files containing lists of just failures or a list of just the latest builds.

0. A link to a specific build attempt is like this example generated from Papercut.codeplex.com:

 ```
 http://localhost:8081/job/Hellow%20World/27/
 ```
