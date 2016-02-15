This chapter discusses mobile apps that interact with app servers.

Mobile devices include:

* iPhones, iPads, etc. running Apple's mobile operating system
* Android devices running Google Android operating system
* Windows Phone running Microsoft's mobile operating system

## Create an Android App

### Download and Install Android Studio

* android-studio-bundle-141.2456560-windows.exe from http://developer.android.com/sdk/installing/index.html?pkg=studio

### Open Android Studio
Since Android Studio doesn't install desktop icons by default:

0. Use Windows File Explorer to navigate to Androind Studio which installed to

   ```
   C:\Program Files\Android\Android Studio\bin
   ```

0. Invoke <strong>studio64.exe</strong>.

   Notice the program is now based on IntelliJ rather than Eclipse.

   WARNING: As of this writing, DJI documentation
   recommends using Eclipse and later convert to Studio.
   This tutorial takes it to the next step.

0. PROTIP: To open Android Studio quickly, right-click on the Desktop
   to create a new Shortcut to:

   ```
C:\Program Files\Android\Android Studio\bin\studio64.exe
   ```

   Name it "AndroidStudio" or whatever you like.


<a name="Decisions">
### Decide on Names</a>
These are harder and more time consuming than people think they should be.

   PROTIP: If you haven't worked with Android before, 
   it's best if you download a project from Github rather than
   starting from nothing.
   
   If you're downloading a repo, create the project using the same
   names the project uses in Github.

   * App name: can contain spaces. For example, "drone Controller".
   * Company Domain (host name) for the project: "dronecontrol.jetbloom.com".
   * The Package name is generated from the Company Domain, such as "com.jetbloom.dronecontrol".
   * Project location. Will a sub-domain be created?
   * Project folder name and path. Spaces are removed from the Application Name and placed at the end of the Project Location.

   PROTIP: Use a folder for your project that is version controlled
   (under a folder setup to contain git repos).


### Read Reference Documentation
There are two places to read the docs for this:

* https://dji-dev.gitbooks.io/mobile-sdk-tutorials/content/en/Android/FPVDemo/FPVDemo_en.html
  seems to be older than:

* https://github.com/DJI-Mobile-SDK/Android-FPVDemo
  README.md

### Start New Android Project
Alternately,
Android Studio has a default location at the top of your User folder.

0. Create in Github a new repo and clone it in a folder.
   As is customary with github, the folder would contain README.md
   and LICENSE.md files.

   Alternately, fork someone else's project you want to modify.

0. Provide the version-controlled file path created above.

0. PROTIP: If there is white space within a portion of the folder, find its 8-character equivalent:
   open a Command Window, navigate to the folder such as C:\Users. Use command:

   ```
   dir /X
   ```

   Copy the 8-character name, such as "WILSON~1" for "Wilson Mar".

0. In the Project location, replace the long name with the short name in your clipboard.
0. Click Next. (assumed in steps to follow)
0. Check Phone and Tablet.
0. For Minimum SDK, select DJI-recommended <strong>API version 19: Android 4.4 (KitKat)</strong>.
0. Select "Add No Activity". 
0. Click Finish and the build is run.
0. Press Alt+1 or View | Tool Windows | Project.
0. Expand your app by clicking the arrow to the left of your project name.

0. Use File Explorer to see what was built in the new app folder.

   Notice it's only a few files.

### 

0. Get the <strong>package</strong> from within the AndroidManifest.xml' file.
0. Go to File -> New -> Import Module. 
0. In the 'Source Directory' field, find the DJI-SDK-LIB folder location (Android Studio\DJI-SDK-Android-V2.1.0\Lib\DJI-SDK-LIB). 

### Get a Sample Project from Github
0. Withing Android Studio, close any open projects.
0. In the Quick Start menu, select "Check out project from Version Control".
0. Enter the path containing the gradle file, which may be one or more folders into a repo:

   * https://github.com/DJI-Mobile-SDK/Android-FPVDemo/tree/master/FPV-Demo/FPV-Demo-AS

0. Click "Test".
0. VCS | Enable version Control Integration | Git.
0. Specify a package path in github containing <strong>gradle</strong> specs such as:

2. name such as "com.dji.sdkdemo" in the example or "com.jetbloom.air-ranger".

### Specify where Git is installed within Android Studio
As <a target="_blank" href="http://stackoverflow.com/questions/24625335/getting-repositroy-test-has-failed-error-while-cloning-repository-from-gitlab#24625373">
this</a> states, "Repositroy test has failed" is issued by Android Studio
if Github's git was not installed.

0. Download and install git from http://git-scm.com/downloads
0. Within Android Stuio, specify where git.exe is located:
   menu File > Settings > Version Control > Git > Path to Git executable.
0. Select (or type) executable path (including the executable):

   ```
C:\Program Files (x86)\Git\cmd\git.exe
   ```

0. Alternately, if GitHub Desktop for Windows was installed:

   ```
C:\Users\YOUR_USER_NAME\AppData\Local\GitHub\PortableGit_c7e0cbde92ba565zz218z5214zzz0e854zzza28\cmd.
   ```

### Run Check
0. PROTIP: If you are running within VMWare or other hypervisor,
   connect a physical smartphone because emulators will not work.
   Skip to the next section.

   * https://developer.xamarin.com/guides/android/getting_started/installation/accelerating_android_emulators/

0. If you are running outside an emulator,
   launch Emulator. The default "Nexus 5 API 23 x86".

   PROTIP: Select an Android virtual device that you also physically use.

0. Check Use same device for future launches.
0. Click the green arrow to initiate. If this message appears:

   [avd launch error haxm kern module not installed](https://cloud.githubusercontent.com/assets/300046/12910832/d6c6a940-cec2-11e5-94b6-dc6fad3ca4e1.png)

   (where HAXM = Hardware Accelerated eXecution Manager)

0. Go to https://software.intel.com/en-us/android/articles/intel-hardware-accelerated-execution-manager
0. Download haxm-windows_v6_0_1.zip (6.0.1) and unzip.
0. Open a command window to run haxm_check.exe. The expected response:

   ```
   VT support -- yes
   NX support -- yes
   ```

0. Invoke intelhaxm-android.exe.

0. To download an SDK file, in Android Studio: File | New | Import Module
   and specify the path.

   Android SDK files are stored locally at:

   ```
Windows: \Users\%USERNAME%\AppData\Local\Android\android-studio\sdk\
Mac: /Applications/Android\ Studio.app/sdk/
Linux: /usr/share/android-studio/data/sdk
   ```

0. Run your app. 


### Get and Provide the API Key
0. Begin registration for Airmap at https://developer.dji.com/ by providing values from
   <a href="#Decisions">decision</a>.
0. Paste the key when creating the app at http://developer.dji.com/en/user/apps/#all
0. Open email from DJI with subject "Activate your app" and click the Activation link.
0. Click Save in the pop-up dialog. Click OK on the pop-up.
0. Copy the 24-digit hexadecimal App Key to your clipboard.

### Android app views
https://github.com/PhilJay/MPAndroidChart - A powerful Android chart view / graph view library, supporting line- bar- pie- radar- bubble- and candlestick charts as well as scaling, dragging and animations.
