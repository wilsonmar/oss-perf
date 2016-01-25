This section describes the creation of JMeter scripts,
introduced in a deeply technical hands-on way working on full samples, not incomplete demos.
Rather than bombarding you with random concepts and making obvious statements,
here concepts are pointed out along the way at "teachable moments".

PROTIP of "best practices" are noted when appropriate, as are
Similarities to LoadRunner, Visual Studio, and other similar tools.

This assummes you have a working JMeter environment setup <a href="jmeter-setup.md">according to these instructions</a>.

0. <a href="#AppUnderTest">The 99-bottles app under test</a>
0. Set your present working directory to where JMeter scripts (.jmx files) are stored.

0. <a href="#TestPlan">Create script Test Plan</a>
0. Gather data to be consumed during the run (userids, passwords, requests, etc.) in a .csv file.
0. Record script.

0. Obtain initial response HTML for Pattern to test.
0. Add HTTP Authorization Manager, if applicable.
0. Add Response Assertions
1. Proving runs
0. setup parameters ${id} for the id column in the csv file.

0. setup monitoring (Listener Aggregate Report)
0. Run initial load tests viability.
0. run tests
0. watch run
0. analyze results
1. Archive files and clean-up test rig.

0. Store JMeter files in github.
0. Connect to Jenkins to kick off runs using assets in github.

0. Ramp-up, but watch monitoring to identify a bottleneck level being reached on the load generators OR the app.

<hr />

<a name="99AppUnderTest">
## The 99 bottles app under test</a>

Unlike other tutorials that only scratches the surface,
let's look at a JMeter test plan that has scripting logic often needed.

1) Open an internet browser to https://github.com/wilsonmar/99bottles-jmeter
  which was forked from https://github.com/groodt/99bottles-jmeter (dated November, 2011 and not updated since).

2) Click <strong>Download ZIP</strong> to obtain file name ending with <strong>-master.zip</strong>
  then unzip. 
  Or use git to clone the repo locally.

3) Copy the repo's path to the Clipboard.

  On a Mac Finder window opened to the repo stored locally, 
  right-click on <strong>requirements.txt</strong> 
  and select Get Info. Double-click on "99bottles" within the Where: text
  until the whole path is highlighted.
  Press command+C to store the highlighted string in the Clipboard.

4) Open a command or Terminal window.

5) Type `cd` and paste the Clipboard containing the path to the "99bottles" repo folder on your local drive.
  For example:
  
  ```
  /Users/wilsonmar/Downloads/99bottles-jmeter-master
  ```

6) View files by typing `ls` then Enter. The response:

   ```
README.md        jmeter.log       
Test Plan.jmx    requirements.txt server.py
   ```

7) In a browser specify URL http://tech.mindcandy.com/2011/11/99-bottles-of-jmeter-on-the-wall/
   for the blog which describes the repo.


## <a name="SetupServerUnderTest"> Setup Python Server Under Test</a>
The env1 folder contains a <strong>server.py</strong> Python script.
So the Python package installer (pip) needs to be installed.

1) Install pip. On PCs see http://tylerbutler.com/2012/05/how-to-install-python-pip-and-virtualenv-on-windows-with-powershell/
  which makes use of a Powershell clone of the unix scripts.
  On Macs:

   ```
sudo easy_install pip
   ```

   The response:
   
   ```
Password:
Searching for pip
Best match: pip 8.0.0
Adding pip 8.0.0 to easy-install.pth file
Installing pip script to /Users/wmar/anaconda/bin
Installing pip3.5 script to /Users/wmar/anaconda/bin
Installing pip3 script to /Users/wmar/anaconda/bin

Using /Users/wmar/anaconda/lib/python2.7/site-packages
Processing dependencies for pip
Finished processing dependencies for pip
   ```

2) Create a virtualenv for Python. 
  (as described in the "99 Bottles of JMeter on the wall" website
  http://tech.mindcandy.com/2011/11/99-bottles-of-jmeter-on-the-wall )

   ```
pip install virtualenv
   ```

   The response:
   
   ```
   Collecting virtualenv
  Downloading virtualenv-14.0.1-py2.py3-none-any.whl (1.8MB)
    100% |████████████████████████████████| 1.8MB 151kB/s 
Installing collected packages: virtualenv
Successfully installed virtualenv-14.0.1
   ```


3) Use virtualenv to install virtualenvwrapper:
  (based on http://virtualenvwrapper.readthedocs.org/en/latest/)

```
sudo pip install virtualenvwrapper
```

4) Create environment variable $WORKON_HOME. On PCs, it's at `c:\python27\lib\site-packages`
On Macs:

```
export WORKON_HOME=~/Envs
mkdir -p $WORKON_HOME
echo $WORKON_HOME
ls $WORKON_HOME
source /usr/local/bin/virtualenvwrapper.sh
```

5) Make custom virtual environment:

```
cd to where your 99bottles is installed
mkvirtualenv env1
mkvirtualenv 99bottles --no-site-packages
```

The response:

```
  New python executable in 99bottles/bin/python
  Installing setuptools, pip...done.
  (env1)
```

6) Install dependencies:

```
cd 99bottles-jmeter
pip install --requirement=requirements.txt
```

7) Invoke server:

```
./server.py
```

The response:

```
  Bottle server starting up (using PasteServer())...
  Listening on http://localhost:9999/
  Use Ctrl-C to quit.
  
  serving on http://127.0.0.1:9999
```

Stopping the command/terminal window stops the app server.


## <a name="ExamineAppCode"> Examine Sample App Code</a>
7) Open in a text editor utility the <strong>server.py</strong> application code.
  The print() function outputs should look like this:

```
25 bottles of mead on the wall. Date=1436066062941 Thread=0
127.0.0.1 - - [04/Jul/2015:21:14:22 -0600] "POST /bottle HTTP/1.1" 200 7 "-" "Apache-HttpClient/4.2.6 (java 1.5)"
```

In this example, the date 1436066062941 is a Unix Epoch of seconds since Jan. 1, 1970.


## <a name="ExamineSampleTest"> Examine Sample Test Plan Assets</a>
General Variables (key value pairs) defined are available for use within JMeter configuration elements.

In Thread Group, ${threads} and ${loopCount}. (Loop count is equivalent to what LoadRunner calls iterations)

The Loop Controller has a loop count of 1 (once). 

Under that is a HTTP Request element that uses variables to specify the URL:

```
http://${host}:${port}/bottle
```

Variables are also used in the request body spec:

```
{"drink":"${drink}", "bottles":"${bottles}", "date":"${date}", "thread":"${thread}"}
```

The <strong>BSF PreProcessor</strong> executes <strong>JavaScript</strong> and other programming languages.

PROTIP: 
https://blazemeter.com/blog/beanshell-vs-jsr223-vs-java-jmeter-scripting-its-performance
reports that native compiled Java runs twice faster than JSR233/Groovy and BeanShell scripts.



## <a name="ViewResultTree"> View Result Tree</a>
1) This was created by right-clicking Thread Group, then Listeners, View Result Tree element.

  This captures details on each request and response.
  
  QUESTION: Can JMeter capture in a buffer and not display unless there is an error, like what LoadRunner does?

2) Click on an exchange, typically "HTTP Request".

3) Click on Request.

  This details the URL end-point, such as `http://localhost:9999/bottle`
  and the JSON-formatted POST data, which you can toggle between Raw and HTTP.
  
  `Content-Type: application/json` means that 
  JSON data is expected back.

4) Click on Sampler result.

  The expected response header is `HTTP/1.0 200 OK`.

5) Click on Response Data.

  "Cheers!" is what the server.py program returns.

NOTE: This detail for every request/response exchange is expensive to capture and store.





## <a name="ThreadGroups"> Thread Groups</a>
Load on servers is imposed by activities within various program <strong>thread</strong>.
The more threads, the more virtual users are being simulated.

1) Create the <strong>Thread Group</strong> for the Test Plan: 
Right-Click on Test Plan to select <strong>Edit | Add</strong> to create a <strong>Thread Group</strong>.

  NOTE: Thread groups define the metadata

2) In the current situation (for recording described below), use 1 user and loop count 1.

3) PROTIP: Change the Thread Group's name to summarize the various settings, 
   such as "1UserRecorded".

4) Depending on the type of test, change the <strong>Ramp-up period</strong> 
   to provide one second per user. For example, for 2 users, specify 2 seconds.
   For now, leave the default of 1.

Add directory to jar or classpath


## <a name="Workbench"> Workbench</a>
WorkBench is a temporary space to store a test plan's elements,
such as requests recorded (captured) by a proxy and converted into commands.

Below is a remix of
https://chipcorrera.wordpress.com/2010/01/25/using-jmeter-and-firefox-to-load-test/
by Chip Correra and
http://jmeter.apache.org/usermanual/jmeter_proxy_step_by_step.pdf


1) Get Firefox to use the JMeter proxy ???

Now, lets set up Firefox to proxy actions. Bring up the Firefox browser and 
  under Tools/options/advanced tab/network tab/settings button/”Manual proxy configuration”
  + Set 127.0.0.1 port 9090
  + Enable the “Use this proxy for all protocols” check box.


2) Configure Internet Options to define Manual proxy configuration to localhost port 8080.

3) Right-click on Workbench to Add | <strong>Non-test Elements | HTTP(S) Test Script Recorder</strong>.

4) Right-click on Recorder to Add | <strong>Logic Controller | Recording Controller</strong>
    (Once Only Controller)
    If your application has a user login which generates session cookies,
    otherwise skip this step and the next.

  This conveniently packages all samples under one controller, which can be given a name that describes the test case.

5) Right-clock Thread Group to Add | Config Element | HTTP Request Defaults.
  This applies to your entire test suite.

6) Specify <strong>Server Name or IP</strong> address and any required port #.

  Other tutorials use google.com or jmeter.apache.org.
  One live demo WebSockets website is 

7) Add a HTTP Cookie Manager config element
    This can be used to control and manage the cookie policy across the test.

8) Add a HTTP Request Sampler to the Once Only Controller
    Specify the protocol method (put/get), path to the request and any parameters

9) Test Plan > Add > Listener > Aggregate Report.

11) Right-click Workbench to Add | Non-Test Element | HTTP Proxy Server
  + Port 9090
  + Target Controller: Thread Group > Recording Controller
  + Patterns to include: Click Add then enter “.*”

12) Under HTTP Proxy Server, Add > Timer > Gaussian Random Timer
  + Set Constant Delay Offset (in milliseconds): ${T}

And when ready to start recording the browser action just bring up the HTPP Proxy Server within JMeter and click Start. Everything that is done within Firefox will be recorded in JMeter’s recording controller. When done, just click the Stop button on the HTTP Proxy Server within JMeter.


## <a name="TestPlan"> Test Plan Elements</a>
JMeter invokes <strong>Test Plans</strong>

Test Plans are equivalent to what LoadRunner call Scenarios
which references all that is required to run a test.

Test Plans are XML files.

Open an existing Test Plan group () to be executed.

Select menu Edit | Add | Thread Group.

<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/8502621/c48a5aca-216f-11e5-860a-fb57d757bb4e.png">
<img src="https://cloud.githubusercontent.com/assets/300046/8502621/c48a5aca-216f-11e5-860a-fb57d757bb4e.png"
/></a>

To group tests by functional or technical logic together,
a test plan can contain other test plans.
Each test plan can be selectively disabled for execution.

Within each <strong>test plan</strong> are these elements:

0. <a href="#Samplers"> Samplers</a>
1. <a href="#ConfigNodes"> Configuration Nodes</a>
2. <a href="#Preprocessors"> Pre-processors</a>
3. <a href="#Timers">Timers</a>

  If results are available: 

5. <a href="#PreProcessors"> Post processors</a>
6. <a href="#Assertions"> Assertions</a>
7. <a href="#Listeners"> Listeners</a>



## <a name="Samplers"> Samplers</a>
JMeter <strong>samplers</strong> emulate real clients by sending (a lot of) requests to servers.



## <a name="ConfigNodes"> Configuration Nodes</a>
Nodes are associated with 
different parameters passed into sampler request code by using 
<strong>configuration elements</strong> which provide values to
<strong>variables</strong> referenced by sampler code.

Save Node as Image 


## <a name="LogicControllers"> Logic Controllers</a>
The order of execution of different samplers is controlled by
<strong>Logic controllers</strong>: 
If, While, FoEach, Loop, Random, etc.


## <a name="Timers"> Timers</a>
The time period to wait between requests are defined by <strong>timers</strong>,
also known as "think time" in LoadRunner.
By default, requests are executed immediately one after another without any waiting time.


## <a name="PreProcessors"> Pre-Processors</a>
Before a sampler is executed, elements (actions, assertions or basically whatever) that is going to happen 
are defined in <strong>pre-processors</strong> which
extract variables from a response that can be used in the sampler afterwards via configuration elements.

Pre-processor is able to create variables for the next steps (sampler or any other entity in current thread group), something like vars.put("variable_name", "variable_value") in the pre-processor followed by ${variable_name} wherever you need to refer it. 

## <a name="BSFPreProcessors"> BSF Pre-Processors</a>

  BSF is the Bean Scriptingl Framework at http://beanshell.org/manual/bsf.html
  and http://commons.apache.org/proper/commons-bsf/
  and https://en.wikipedia.org/wiki/Bean_Scripting_Framework
  
 It is generic framework that allows many scripting languages to be plugged into an application. It shields the application from knowledge of how to invoke the scripting languages and their APIs, via adapter "engines". 
  BeanShell dynamically executes Java code (is a Lightweight embedded Java source interpreter that).
  for Java per [JSR223](http://jcp.org/en/jsr/detail?id=274)
  described on http://www.drdobbs.com/jvm/jsr-223-scripting-for-the-java-platform/215801163
  
  BSP supports dynamic execution of JavaScript, achieved using Mozilla Rhino engine (from 
  https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino)
  which is also used in Oracle JVM.
 
 However, it is recommended that for "heavy" operations it's better to use JSR223 Sampler and Groovy as a language.
 See https://blazemeter.com/blog/beanshell-vs-jsr223-vs-java-jmeter-scripting-its-performance
 
 https://www.youtube.com/watch?v=T3Ysb9O3EWI
 Advanced JMeter Training & Report Analysis
 
 It uses the ScriptEngine interface which became available in Java 6.
 
## <a name="PostProcessors"> Post-Processors</a>
After a sampler execution finishes,
response data from the server can be parsed to extract values 
by <strong>post-processors</strong>.


## <a name="Listeners"> Listeners</a>
Output from samplers to tables, trees, or plain log files are formatted by
<strong>listeners</strong>
provide different ways to view the results produced by a Sampler requests. 


## <a name="Attributes"> Attributes</a>
In the various listeners,
sample results have various attributes (success/fail, elapsed time, data size etc).


## <a name="Assertions"> Assertions</a>
Validation of the validity of what was returned from the server is done by 
<strong>assertions</strong>, which are based on the format of the response.

VIDEO: 
https://www.youtube.com/watch?t=74&v=kKnLsKpHn0Y (Dec. 11, 2015)
provides a 30-minute introduction to various assertions:
Duration, Size, XML, HTML, Response, XPath Compare.


## <a name="SimulateJavaScript"> Simulate JavaScript</a>
JMeter does not execute JavaScript.

If JavaScript is downloaded from the server, JMeter can only parse it for data.



## <a name="SetupThreadGroup"> Setup Thread Group</a>
If there is work to do just once before iterating through,
  select menu <strong>Edit | Add</strong> to create a <strong>setUp Thread Group</strong>.
  This is similar to the LoadRunner VuserInit action.

## <a name="tearDownThreadGroup"> tearDown Thread Group</a>
Create a <strong>tearDown Thread Group</strong> to execute once.
This is similar to the LoadRunner VuserEnd action.


## Others
Start no pauses.

Maven build tool which manages dependencies.

QUESTION: Who is working on JMeter's use of "Nashon" Groovy and Ruby engine in Java 8.
Its REPL (Read, Eval, Print Loop) shell (jjs> prompt) interactively inteprets JavaScript inside Java programs.

http://janalyser.com/

<a id="TestPlan">
## Create JMeter Test Plan</a>
To JMeter, a Test Plan is equivalent to a .jmx file.

<a id="JMeterUIRecording">
## JMeter UI Recording</a>
   A recording of the UI can be made going through the proxy built into browsers' system preferences.
   In Chrome, select 'Under the Hood'.
   ⌘+. In 'Advanced', go to Connection settings and set up your localhost as a proxy server. 
   Assign different ports to different protocols. 
   Press Start at the bottom of the page to begin recording.

0. Save script as /HelloX.jmx to the ~/ws/jmeter folder created in the previous step.
0. Run
1. Notice that since Protocol: `https` was not specified, two requests were done. One for http and one for https.
2. To avoid the repeat, specify Protocol `https`.

<a id="JMeterAPIscripts">
## JMeter API script creation</a>
Directories of web services:

   * http://webservicex.net/New/Home/Directory provides SOAP examples.

Sample REST API services used for testing:

   * validate.jsontest.com which Blazemeter uses in its <a target="_blank"      href="https://blazemeter.com/blog/testing-soaprest-web-services-using-jmeter">documentation</a>


0. In JMeter, create a Test Plan.
1. Specify Theads (users) to be run concurrently (at the same time). PROTIP: There is limit to how much each server can run.
1. Add a Test Group. Add to that group a Listener for HTTP.
For server name use a dev test site:

   ```
   jsonplaceholder.typicode.com
   ```

0. In Path, enter `posts`.
0. For Implementation, select HTTPClient4. 
1. For Protocol, type `http`.
2. For Method, type `POST`.
3. Click the **Body Data** tab.
0. Paste this sample JSON request text:
   
   ```
   { title: 'foo', body: 'bar', userId: 1 }
   ```

0. Right-click on the HTTP Request to add Config Element - HTTP Header Manager.
1. Click the Add button at the bottom of the screen.
2. Click on the blue line under Name to add `Content-type`.
3. Press tab key to enter `application/json`. (Another is "application/x-www-form-urlencoded").
4. Click Save.

<a id="ResponseAssertion">
### Response Assertion</a>
0. Click **Text Response**.
0. Click **Contains**.
1. Type in `<title>`. This is in all HTML responses (including error pages).

<a id="Runs">
### Proving Manual Runs</a>
0. Press Ctrl+R to run the script.
0. Click on a response listener such as View Results Tree.

0. Press Ctrl+E to erase all results.

To debug requests, on a Chrome browser add the Advanced REST client:

   * https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo?hl=en-US

<a id="HeadlessRuns">
### Headless API Jmeter runs</a>
0. For a list of parameters JMeter recognizes:

   ```
   jmeter -?
   ```

   Notice parameters are **case sensitive**.

0. <a target="_blank" href="http://jmeter.apache.org/usermanual/get-started.html#non_gui">
This page lists the parameters</a> for JMeter to kick it off in non-UI (headless mode) using a command such as:

   ```
   jmeter -n -t testplan1.jmx -l log.jtl -H my.proxy.server -P 8000
   ```

   **-n** specifies no UI.

   **-t** prefixes test plan jmx files.
   
<a id="ResponseAssertion">
## Response Assertion</a>
0. Right-click on the HTTP request and select Add, Assertion, Response Assertion.
1. In the Pattern to Test section, add the pattern "title: 'foo'" coming back from a call to jsonplaceholder.

<hr />
## <a name="Resources"> Resources specifically about viewing JMeter using the ELK stack</a>
http://theworkaholic.blogspot.in/2015/05/graphs-for-jmeter-using-elasticsearch.html

http://blog.sematext.com/2015/06/23/replaying-elasticsearch-slowlogs-logstash-jmeter/

http://ecmarchitect.com/archives/2014/09/09/3932


   * https://girliemangalo.wordpress.com/2009/11/03/jmeter_module_controller/
      JMeter: Using property function to fetch data from user input

   * 	http://90kts.com/2014/03/28/guide-to-jmeter-regular-expressions/

<hr />
## <a name="Resources"> 
## Official resources about JMeter </a>
http://jmeter.apache.org/

http://jmeter.apache.org/usermanual/index.html

http://jmeter.apache.org/usermanual/jmeter_proxy_step_by_step.pdf

https://jmeter.apache.org/usermanual/jmeter_distributed_testing_step_by_step.pdf

http://jmeter.apache.org/usermanual/functions.html

http://jmeter.apache.org/usermanual/best-practices.html

http://jmeter.apache.org/usermanual/remote-test.html

http://wiki.apache.org/jmeter/

<a name="OtherResources"> 
## Other resources for JMeter </a>

http://ibalosh.tumblr.com/post/35475979058/running-jmeter-tests-with-jenkins

http://www.softwaretestingclass.com/learn-jmeter-performance-testing-jmeter-tutorial-series/

http://wiki.apache.org/jmeter/JMeterFAQ#How_to_do_remote_testing_the_.27proper_way.27.3F

https://blazemeter.com/blog

http://www.gallop.net/blog/an-amazing-open-source-performance-testing-tool-jmeter/

http://theworkaholic.blogspot.com/search/label/JMeter

https://performanceengg.wordpress.com//?s=jmeter&search=Go

http://jmeterworld.wordpress.com/

http://jmeter-expert.blogspot.com/

http://www.javapassion.com/handsonlabs/javatestjmeter/index.html

http://jmeter-tips.blogspot.com/

http://www.devx.com/webdev/Article/17950/

http://rubenlaguna.com/wp/enhanced-jdbc-sampler-for-apache-jmeter-22/

http://www.testingminded.com/search/label/JMeter

https://www.linkedin.com/grp/home?gid=2017104&trk=my_groups-tile-flipgrp

https://www.linkedin.com/grp/home?gid=4042150

https://www.linkedin.com/topic/jmeter

https://groups.google.com/forum/#!topic/oauth/VZaO3f-NFN0

https://www.youtube.com/watch?v=cv7KqxaLZd8

https://www.youtube.com/watch?v=rAEl0g8rpUM

https://www.youtube.com/watch?v=T3Ysb9O3EWI

https://www.youtube.com/watch?v=4mfFSrxpl0Y&index=4&list=PLc3SzDYhhiGXVcy8EcrTSfwsC-v8EUZvg

https://www.youtube.com/watch?v=7rO6TtO-QrI&list=PLByAM0wHjwJnQB2wNXzMh9qsVZoER2cxi

https://www.youtube.com/watch?v=aEJNc3TW-g8&list=TLi34_ofwXL78wNTEwMjAxNQ

TestNgx
https://hub.docker.com/search/?q=testngx
