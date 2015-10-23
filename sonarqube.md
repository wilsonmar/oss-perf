SonarQube (abbreviated to Sonar)
improves code quality by scanning source code to identify issues.
A summary of what it finds estimates "Technical Debt", which SonarQube tracks over time.

Sonar also calculates a **SQALE Rating** based on rules defined.


<a id="Rules">
## Rules</a>
SonarQube **Analyzers** scan code organized into projects.



<a id="Installation">
## Installation</a>

This page was written after downloading file SonarQube 5.1.2 created Jul. 27, 2015
from <a target="_blank" href="http://www.sonarqube.org/">http://www.sonarqube.org/</a>

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
which requires much more work https://github.com/hgomez/obuildfactory/wiki/Building-and-Packaging-OpenJDK7-for-OSX
So please stay with Oracle for now.

MySQL is supported.

Docker and Puppet scripts to build the server ???





Read the documentation
Unzip and start
Analyze projects
Ready to improve quality


<a id="Configuration">
## Configuration</a>


<a id="Videos">
## Videos</a>
