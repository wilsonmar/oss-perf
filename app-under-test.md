The app or system under test

<a id="SampleAUT"></a>
<a name="SampleAUT">
### The Ideal Sample Application Under Test (AUT)</a>
The ideal sample app would be built on code which:

   0. provides responsive web, native mobile (iOS and Android), plus APIs.
   0. is open sourced (e.g., available on github).
   0. makes use of open sourced libraries and tools (java).
   0. is accompanied by tutorials on its construction.
   0. contain coding that returns errors when optionally switched on (for validating test code).
   0. exihibits various approaches (pooling, multi-threading) so that performance can be compared.

Apps currently used for tutorials, benchmarking, and pre-sales do not meet all the criteria above.

   * WebTours used in most JMeter tutorials to date (within commerical performance testing software LoadRunner)
     returns errors based on a switch, but its source is not available to the public.

<a name="AppsUnderTest">
## Candidate apps under test</a>
Various people have created

* As part of the JMeter Book


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
