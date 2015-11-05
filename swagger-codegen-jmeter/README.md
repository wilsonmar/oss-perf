This section describes how to generate everything JMeter needs to 
emulate a lot of clients calling a REST API service defined in Swagger, 
beginning with the example at 
<a target="_blank" href="http://petstore.swagger.io/"> http://petstore.swagger.io</a>

Bear in mind that we are not generating server code to respond to request from clients.
That can be quite complicated, with calls to databases, etc.

 <a href="#SampleSwagger"> 1). Use swagger-codegen to create code for a Java client program.</a>
 
 <a href="#UsualJMeter"> 2). Create JMeter resources for the sample API, manually.</a>
 
 <a href="#SwaggerJMeter"> 3). Edit the template to produce basic JMeter code.</a>

 <a href="#JMeterTricks"> 4). Edit the template to address more risks.</a>
 
 <a href="#JMeterGenSvc"> 5). Make custom JMeter generator web service.</a>

 <a href="#JMeterGenWebsite"> 6). Make generator available from a website.</a>

 <a href="#JMeterGenRefine"> 7). Refine generator code.</a>

 <a href="#SwaggerJMeterGroup"> 8). Run several at a time.</a>

<hr />


<a id="SampleSwagger"> 
### 1). Use swagger-codegen to manually generate code for a Java client program.</a>

0. Open <a target="_blank" href="http://editor.swagger.io/#/"> http://editor.swagger.io/#</a>

0. Copy the Swagger-spec JSON file for your project to your invisible clipboard. 
0. Click on the text page at the left of the swagger editor.
0. Select **Generate Client**, then Java to follow this tutorial (or JMeter when it's ready). 
The file should be downloaded to your browser Downloads folder.

0. Use the Mac Finder or Windows Explorer to locate the download.

0. Unzip to produce the **java-client** folder.

0. Open the folder to examine the files.
 
 ```
 build.gradle
 gradle.properties
 pom.xml
 settings.gradle
 src
 ```

0. Double-click to drill into the src folder: src/main/java/io/swagger/client

 Notice that ASTW, the source code is not internationalized. 
 English text is embedded into the programming source text rather than references to translations in a resource file.

0. Install Gradle if you haven't already.
On a Mac:

 ```
 brew update
 brew install gradle
 ```
 
 More info on Gradle:

 * https://www.youtube.com/watch?v=OFUEb7pLLXw from July 18, 2012 by Tim Berglund (of Github fame).

0. use gradle (instead of ant, maven) to build the client project run-time binary file
referencing the build.gradle file (containing Groovy program) declarative code.

 ```
 gradle --help
 gradle tasks
 ```

0. Open another terminal to execute the client program.

swagger-codegen references a custom template defined in this repo.

<a id="UsualJMeter">
### 2). Create JMeter resources for the sample API, manually.</a>

The example script is from ____, a leading authority on JMeter performance testing (@twitter, website).

The JMeter script folder implements the <a href="#JMeterTricks"> tests below</a> to address potential risks.


<a id="SwaggerJMeter"> 
### 3). Edit the template to produce basic JMeter code.</a>
The sample client generated was from a **template**.

The run-time for JMeter is run like other languages generated:

 ```
 ./bin/android-petstore.sh
 ./bin/java-petstore.sh
 ./bin/objc-petstore.sh
 ./bin/jmeter-petstore.sh
 ```

<a id="JMeterTricks"> 
### 4). Edit the template to address more risks.</a>

1). <a href="#BadResponseCodes">Valid atomic calls with bad response codes</a>.

2). <a href="#HappyPath">Happy paths: Valid atomic calls with valid response codes</a>.

3). <a href="#AtomicRunTypes">Atomic run types</a>.

4). <a href="#InvalidFieldValues">Invalid field values</a>.

5). <a href="#CrossFieldEdits">Cross-field edits</a>.

<a href="#Resources">Videos</a>

<hr />

<a id="BadResponseCodes"></a>
### 4.1). Recognize and handle problem HTTP response codes

 0. 400 (not found)
 0. 500 (server issues)
 0. etc.


<a id="CleanHappyPath">
### 4.2). Clean Happy paths</a>
Valid atomic calls with valid response codes

 2.1). POST new (user registration)

 2.2). GET new (lists)
 
 2.3). PUT change
 
 2.4). DELETE newly created, which keeps database empty.

<a id="AtomicRunTypes">
### 4.3). "run-type" parameter defines repeating processing strategies</a>

 3.1) Repeat POST new to populate the database and identify how many can register all at once.

 3.2) Repeat GETs to identify cache hits and impact of caching.
 
 3.3) Repeat PUTs 
 
 3.4) Mix, to measure impact of database replication (log shipping).


<a id="InvalidFieldValues">
### 4.4). Invalid field values</a>
There are different invalid values for each data type.

  * Currency number has negative
  * Phone number has too few numbers
  * Phone number has wrong area code
  * Zip code has text characters (as UK Postal code)
  * Credit card number has invalid checksum

<a id="CrossFieldEdits">
### 4.5) Cross-field edits</a>
There are different invalid values for each data type.

  * Zip code out of state specified
  * Content-Type header doesn’t match the body

<hr />

<a id="JMeterGenSvc"> 
## 5). Make custom JMeter generator web service</a>

http://www.lynda.com/JavaScript-tutorials/JavaScript-JSON/114901-2.html
1h 12m video course

0. Test
1. Pull request to incorporate into swagger-codegen.


<a id="JMeterGenWebsite"> 
## 6). Make generator available from a website.</a>

Once done, create a UI front-end online generator web page like 
<a target="_blank" href="https://generator.swagger.io/"> https://generator.swagger.io</a>

<a target="_blank" href="https://generator.swagger.io/">
<img width="142" alt="swagger online-generator" src="https://cloud.githubusercontent.com/assets/300046/10910089/32f5c4d0-81f2-11e5-9c9e-97f74c46aa5b.png"></a>


<a id="JMeterGenRefine"> 
## 7). Refine generator code.</a>

<a id="SwaggerJMeterGroup"> 
## 8). Run several at a time.</a>

This is covered in the <a href="../run-variations.md/">Run variations</a> page.

This approach would require interaction with a web service interface to Swagger.

0. Open a command-line terminal window.

0. In a browser, obtain a list of languages that the Swagger client generation web service can create.

 ```
 https://generator.swagger.io/api/gen/clients
 ```

 The response:

 `["android","async-scala","csharp","dart","flash","java","objc","perl","php","python","qt5cpp","ruby","scala","dynamic-html","html","swagger","swagger-yaml","swift","tizen","typescript-angular","typescript-node","akka-scala","CsharpDotNet2"]`

0. Copy a web service (such as "java") to your clipboard and paste into a terminal command line, but don't execute yet.
 
 ```
 curl -X POST -H "content-type:application/json" \
 -d '{"swaggerUrl":"http://petstore.swagger.io/v2/swagger.json"}' \
 https://generator.swagger.io/api/gen/clients/java
 ```

0. If you want to generate for a different language than java, backspace to change the language specification (instead of "java" in the sample request above), then press Enter to execute.

0. In the JSON response is a link to a zip file containing the ruby client specified, like this one:

 ```
 {"code":"1446559952387","link":"https://generator.swagger.io/api/gen/download/1446559952387"}
 ```

0. Copy the link returned and paste it in the address of an internet browser:

 ```
 https://generator.swagger.io/api/gen/download/1446559952387
 ```

<a id="Resources">
## API design tutorials</a>

http://www.lynda.com/API-tutorials/Effective-Design-RESTful-APIs/166777-2.html
44m Lynda video course by Keith Casey

http://www.lynda.com/API-tutorials/Up-Running-Cloud-Service-APIs/151707-2.html
1h 25m Lynda video course by Joseph Lowery

https://www.youtube.com/watch?v=UuxKpmIrK4w
API Testing and Debugging @ APIStrat SF

https://www.youtube.com/watch?v=heh4OeB9A-c
How to Design a good API and Why It Matters
(Google TechTalk Jan. 24, 2007 Joshua Bloch)

 "APIs live forever. Bad APIs create an un-ending stream of support calls."
 
 "inter-modular boundaries are APIs".

https://www.youtube.com/watch?v=BtAYZ3pHg4c
Developer Friendly API Designs
Nov 16, 2011 by Ferenc Milhaly 

https://www.youtube.com/watch?v=QlQm786MClE
Secrets of Awesome API Design

https://www.youtube.com/watch?v=mZ8_QgJ5mbs
Beautiful REST & JSON APIs

https://www.youtube.com/watch?v=hdSrT4yjS1g
REST+JSON API Design - Best Practices for Developers
by Stormpath

https://www.youtube.com/watch?v=qCdpTji8nxo
How to create great APIs
(at Facebook Developer Day 2013)

http://www.lynda.com/Developer-Programming-Languages-tutorials/Building-Web-Services-Java-EE/149837-2.html

