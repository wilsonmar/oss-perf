SonarQube (abbreviated to Sonar here)
improves code quality by scanning source code
to identify **issues** from **meaures** it calculates.

Sonar analyzes various languages 
using plug-ins.

A summary of what it finds estimates <a target="_blank" href="http://docs.sonarqube.org/display/SONAR/Technical+Debt">
Technical Debt</a>, 
which SonarQube tracks over time.

![sonarqube-tech-debt-pyramid](https://cloud.githubusercontent.com/assets/300046/10703589/eacf50be-7985-11e5-9f2f-70fc2f6f1986.jpeg)

Sonar scans different **facets** (such as security).

## SQALE Summary Ratings
Sonar calculates a **SQALE Rating** based on the open-source
SQALE (Software Quality Assessment based on Lifecycle Expectations) methodology defined by industry group 
http://www.sqale.org/. The caluculation is based on inclusion of rules set in the Common SonarQube repository:

 * Duplicated blocks
 * Failed unit tests
 * Insufficient branch coverage by unit tests
 * Insufficient comment density
 * Insufficient line coverage by unit tests
 * Skipped unit tests

Change SQUALE calculations in the plug-in 
http://www.sonarsource.com/products/plugins/governance/sqale/

<a id="Rules">
## Rules</a>
SonarQube **Analyzers** scan code organized into projects.

![sonarqube rules fromdoc](https://cloud.githubusercontent.com/assets/300046/10703031/0e192d50-7982-11e5-9a35-30cbeab3c69d.jpeg)

<a id="Tags">
## Tags</a>
Customizable **Tags** provide a way to categorize and filter rules.


<a id="InstallSonarQubeEnv">
## Install Enviornment to Run SonarQube</a>
Since SonarQube runs as a server, it's best to have it run
within a VM:

  See <a href="vagrant-insta.md">vagrant-insta.md</a>

<a id="InstallSonarQubeEnv">
## Install Enviornment to Run SonarQube</a>

0. Download SonarQube:

   ```
brew install scalastyle
   ```

This page was written after downloading file SonarQube 5.1.2 created Jul. 27, 2015
from 
<a target="_blank" href="http://www.sonarqube.org/">
	http://www.sonarqube.org/</a>



Most developers prefer to have Sonar look at code before commit into a team repository.
Such **preview mode** runs do not store results in the Sonar run database.

Plugins enable Sonar to be invoked several ways:

  * <a target="_blank" href="http://docs.sonarqube.org/x/3AAW">From a command line</a> as one step in local evaluations.
    This approach enables one-time <a target="_blank" href="http://docs.sonarqube.org/display/SONAR/Analysis+Parameters">parameter configuration</a> 
    for each individual user.

    ```
    sonar-runner
    ```

  * From inside IDE (IntelliJ, Eclipse, etc.) as part of code unit development and testing.

  * From a build server (Maven, Ant, MSBuild, etc.) as part of continuous integration/build.

The server uses Oracle or <a target="_blank" href="http://openjdk.java.net/install/index.html">OpenSDK</a>,
which requires much more work 
https://github.com/hgomez/obuildfactory/wiki/Building-and-Packaging-OpenJDK7-for-OSX
So please stay with Oracle for now.

MySQL is supported.

Docker and Puppet scripts to build the server ???

https://github.com/sonarsource/sonar-examples


Read the documentation
Unzip and start
Analyze projects
Ready to improve quality


<a id="JenkinsConfiguration">
## Jenkins Configuration</a>
Connection to Jenkins:
http://docs.sonarqube.org/display/PLUG/SonarQube+Scanner+for+Jenkins


<a id="ClientConfiguration">
## Client Configuration</a>
http://www.sonarlint.org/visualstudio/
SonarLint for Visual Studio is based on and benefits from the .NET Compiler Platform ("Roslyn") and its code analysis API to provide a fully-integrated user experience in Visual Studio 2015.
SonarLint is free, open source, and available in the Visual Studio Gallery.


Install in Eclipse?

<a id="ScalaSonar">
## Sonar for Scala</a>

http://www.scalastyle.org/
provides a list of ways to use Scalastyle
at
https://github.com/scalastyle

by 3 people:

   * Matthew Farwell
   (http://www.farwell.co.uk/ of Switzerland)

https://groups.google.com/forum/#!forum/scalastyle-users

https://github.com/emrehan/sonar-scalastyle

is based on a fork of
https://github.com/NCR-CoDE/sonar-scalastyle

http://docs.codehaus.org/display/SONAR/Scala+Plugin

<a id="Videos">
## Videos</a>
