This page describes how to learn and make use of 
React Native to develop enterprise level mobile apps
running on Android and iOS mobile devices.


The React.js logo ( bit.ly/reactjs-logo - changes were made ) b
elongs to Facebook and is available under CC BY 4.0 license ( bit.ly/reactjs-logo-license ). 
React was open-sourced by Facebook, and thus its Github location:

 * https://facebook.github.io/react-native/ rendered from
   https://github.com/facebook/react-native



To get started, we'll first look at sample React Native apps.

Before we do that, most tutorials assume developer utilities are installed:


<a name="SetupReactNative">
## Setup React Native</a>

Each repo installs dependencies in either the global cache or in its own
<strong>node_modules</strong> subfolder. 

   NOTE: React Native mobile apps need to have all dependencies stored in node_modules 
   so the app runs stand-alone.

0. Update the npm cache:

   ```
   npm update
   ```

0. Install globally from any folder:

   ```
  npm install -g react-native-cli
   ```

0. For a list of what's in the global cache:

   ```
npm list -g
   ```

<a name="SetupWindows">
## Setup on Windows for Android</a>

![released 15 September 2015](https://code.facebook.com/posts/1189117404435352)

To work with React-Native on a Windows 7 or 10 machine:

  * https://facebook.github.io/react-native/docs/android-setup.html

  * http://developer.android.com/sdk/index.html

  * Gradle

  * https://www.visualstudio.com/en-us/features/msft-android-emulator-vs.aspx
    download vs-emulator.exe to install
    Visual Studio 2015
    with a free Android emulator that is hardware accelerated via Hyper-V.

To use it with react-native you just have to add a key and value to your registry:

0.    Open the Run Command (Windows+R)
0.    Enter regedit.exe
0.    In the Registry Editor navigate to HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Android SDK Tools
0.    Right Click on Android SDK Tools and choose New > String Value
0.    Set the name to Path
0.    Double Click the new Path Key and set the value to C:\Program Files\Android\sdk. The path value might be different on your machine.
0. Run the command adb reverse tcp:8081 tcp:8081 with this emulator.
0. Restart the emulator
0. Do react-native run-android as usual.


<a name="SetupMac">
## Setup on a Mac</a>

To work with React-Native on a Mac:

0. Install XCode from the Apple AppStore, which takes up 2 Gigabytes.
0. Install Command Line Tools from menu Xcode -> Preferences -> Downloads
   
0. To use React Native for developing Android apps, 
   set environment variable ANDROID_HOME to the absolute path of the directory containing the Android SDK. 

	
   ```
export ANDROID_HOME=/path/to/Android/Sdk
   ```   

<a name="EntryPoint">
## Create Entry Point</a>
Unlike web desktop React apps which uses index.html,
React Native compiler for Android looks for a file named <strong>index.android.js</strong>.

  ```
var React = require('react-native');
   ```

<a name="DevApproaches">
## Development Approaches</a>
There are several approaches to developing mobile apps:

 * Native development requires a lot of skill

 * <strong>"Hybrid"</strong> apps are downloaded from mobile app stores like native apps.
    However, such apps display within a browser window.
    The Apache Cordova library <strong>dynamically</strong>converts JavaScript to 
    handle native hardware components to play video, etc.

   This approach is similar to Ionic from Google, jQuery mobile, and
   Sensha using Cordova libraries that renders JavaScript within a browser view on mobile devices.

    This renders much slower than native apps.
   
    However, this is a flexible approach because changes to apps can be released immediately
   rather than waiting for users to update the app (which many do not do).

    <a href="#Reapp">Reapp</a> is such an app.
    Alas, the main contributor Nate Wienert (https://github.com/natew) 
    is not maintaining it, but there hasn't been any blogpost or message on the reapp website telling developers that the framework is no longer maintained, which we think is a rather poor way of discontinueing an open source project.

    NOTE: https://github.com/touchstonejs/touchstonejs
    http://touchstonejs.io is the next hope.

 * https://facebook.github.io/react-native/
   React Native <strong>compiles</strong> JavaScript code into
    native UI elements used to develop mobile app, 
    nearly as if Swift was used to write the iOS app.

   ![react native rendering steps](https://cloud.githubusercontent.com/assets/300046/13196703/baf6997a-d78a-11e5-8362-b0cb8a717c93.PNG)
   from "How React Native Works" in <a href="#Swanepoel_2015">Swanepoel's tutorial</a>.

   0. Developers code in JSX declarative mark-up, as with normal React coding.

   0. The Reactive Native compiler creates JavaScript

   0. JSCore bridge loads into <a target="_blank" href="http://trac.webkit.org/wiki/JavaScriptCore">
      JavaScriptCore</a>, the same JavaScript engine that powers Apple’s Safari.

   0. Objective-C code is then compiled as other native iOS code.


   <img width="999" alt="react redux flow" src="https://cloud.githubusercontent.com/assets/300046/12704033/af5bc36c-c806-11e5-8bd9-a2bfbcde35a5.png">


<a name="SampleApps">
## Sample Apps</a>

* https://github.com/facebook/react-native/tree/master/Examples
  has several examples: 

   * ![Movies](https://github.com/facebook/react-native/tree/master/Examples/Movies) 
     demonstrates basic concepts, such as fetching data, 
    rendering a list of data including images, and navigating between different screens.

   * TicTacToe
   * UIExplorer
   * 2048 game

*   ??? in the Android Play store
    was developed based on the tutorial at
    https://www.udemy.com/reactnative/learn/#/ with
    https://github.com/StephenGrider/ReactNativeCasts
    shows how to use ES5 to build a list app
    using default properties and text formatting functions.


* https://jsfiddle.net/reactjs/69z2wepo/
  provides a bare-bones example displaying hello world using React 0.13.3
   and the library at:


<a name="i18n">
## Internationalization</a>

The app that I show makes use of the internationalization library from Yahoo.




<a name="Reapp">
## Reapp Hybrid App</a>
http://reapp.io/
Reapp binds React code to a cross-platform UI-Kit, 
creating true <strong>hybrid apps</strong>.

 * https://www.railslove.com/stories/makerist-mediathek-mobile-app-react-native?locale=de-DE is a testimonial of a developer using it (November 2015).
   They needed to use Objective-C to add native components needed:
   video player, file download progress, Airplay, and PDF Viewer.

 * https://github.com/reapp/kitchen-sink
    is demo'd at
    http://kitchen.reapp.io/
    which shows off many UI-Kit components in a single app.

    It is a homage to the same features built using tools from
    [Sencha](http://dev.sencha.com/extjs/5.1.0/examples/kitchensink/#all) 
    and
    [Appcelerator](https://github.com/appcelerator/KitchenSink)

 * https://github.com/reapp/hacker-news-app
    has a demo site on http://hn.reapp.io/
    and iOS app from
    https://itunes.apple.com/us/app/hacker-news-by-reapp/id972297110?mt=8

    Having the source makes it hackable with APIs
    
    * add a text-to-speech 
    * translate text to other languages
    * show maps of recognizable place names
    * dialer to recognizable phone numbers

    Nate Wienert's comments on https://news.ycombinator.com/item?id=9025812


<a name="NewReapp">
### New Reapp app</a>
Here are steps adapted from http://reapp.io/start.html#example-apps 

0. Install Reapp globally: `npm install -g reapp`
0. Verify access to the command line command reapp.
0. Position pwd to a git folder under your user/project. For example:

   ```
   cd ~/gits
   cd wilsonmar
   ```

0. Have Reapp create a new folder with the name of your app ("reapp1").

   ```
   reapp new reapp1
   cd reapp1
   ```

   This performs git clone https://github.com/reapp/starter-default
   for you, more convenient than other samples.


0. Initialize the app for versioning by git.
0. Install the app `npm install` which implements package.json.
0. Run the app generated in debug mode:

   ```
   reapp run -V && reapp run -d
   ```
   
   NOTE: Kudos to a message such as "Build took 0.518 seconds",
   which shows the professionalism of the Reapp team.
   
   Alternately, there is an option to specify run in the 
   production environment:

   ```
   reapp run -e production
   ```

0. http://localhost:3011/

   BLAH: A blank screen appears.

0. http://localhost:3011/

   `Cannot GET /main.js`

0. In Finder, navigate to /Users/wmar/ws/reapp1/reapp1/assets/ios
   (where you'll replace wmar with your user ID).

0. Open the index.html file with your text editor (Sublime, Atom, etc.)
   Notice the line:

   ```
    <script src="cordova.js"></script>
   ```

   This line references the Apache Cordova library.


<a name="Compile">
## Compile</a>
To generate xcodeproj, there is a command much like Git:


   ```
react-native init MyApp
   ```


var Dictionary = React.createClass({
 
});



<a name="Features">
## Features React Native</a>
Various views and components:

0. Login
0. Tabs
0. Search
0. Breadcrumbs
0. Table view

Call Objective-C code from React Native code.

<a name="Addons">
## Addons</a>

Make use of smartphone:

 * Send Email, SMS, voicemail, fax
 * Take picture, video





<a name="NewReactNativeApp">
## Constructing New React Native app</a>

0. Create a folder.
0. Define an empty default.html file.
0. Add references to libraries:


   ```
<script src=http://fb.me/react-js-fiddle-integration.js"></script>
    <script src="JSXTransformer.js"></script>
    <script src="react.js"></script>
   ```

0. Download 

   * react.js

   * JSXTransformer.js

   * https://github.com/yahoo/react-intl 
     React Components for Internationalization
     described at http://formatjs.io/react/

   This includes Mixins to manage data.

0. 

<a name="Advantages">
## Advantages</a>
React Native is known for its fast performance: rendering at 60 fps on non-jit iPhones,
completing at less than 16 ms.

This is because React Native updates only specific elements in a 
<strong>Virtual DOM</strong> (server side) rather than the entire DOM (on the client).

   * https://facebook.github.io/react/blog/2014/01/02/react-chrome-developer-tools.html


<a name="SampleReactNativeApps">
## Sample React Native Apps</a>

React Native apps downloaded in mobile app stores (Google Play, Apple, Amazon, etc.)
make use of JavaScript Core in apps:

 * http://trac.webkit.org/wiki/JavaScriptCore


<a name="TablesReactNative">
### Tables in React Native</a>
It is said that 90% of iOS apps display tables.


   NOTE: There is currently no built-in scrolling within React Native,
   such as two-finger swipping.



<a name="TestingReactNative">
## Testing React Native</a>

 * http://testdroid.com/tech/testing-react-native-apps-on-android-and-ios
   recommends using Appium
   over Robotium.

 * http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/


0. In a Terminal in the weekdays folder, run npm start
0. In XCode, click the play button to create an iPhone simulator.

   WARNING: Recent smartphones have higher resolution than what many
   laptop display can render.

0. Press command+Tab to switch to the simulator window.

   "Welcome to React Native!" is from the sample app.

0. In Finder, open file <strong>index.ios.js</strong> with (using) your IDE.
0. Change something. Save it. Press command+R to see it in the simulator.

0. localhost:8081



<a name="MobileStyles">
### Styles</a>
On a React native mobile app, text is specified between `<Text>` and `</Text>` 
encapsulated within a View.


   ```
    return <View style={styles.container}>
       <Text> Days of the week:
       </Text>
    </header>;
   ```

These require at the top:

   ```
var Text = React.Text;
var View = React.View;
   ```

Alternately, the above can be written as:

   ```
var {
  Text,
  View,
  AppRegistry
} = React;
   ```

NOTE: In a mobile React app, instead of CSS are this esoteric commands:

   ```
var styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center', // moves stuff height wise
      alignItems: 'center' // moves stuff width wise
      backgroundColor: '#F5FCFF',
}
});
   ```



<a name="Resources">
## Resources for learning React Native</a>

 * https://code.facebook.com/posts/1189117404435352/react-native-for-android-how-we-built-the-first-cross-platform-react-native-app/

<a id="Swanepoel_2015"></a>
 * https://app.pluralsight.com/library/courses/build-ios-apps-react-native/table-of-contents
   1h 59m video course from 18 Jun 2015
   by Hendrik Swanepoel (@hendrikswan, http://tagtree.tv)
   shows how, on a Mac OSX machine with XCode,
   create a Github Explorer app
   that can search for repositories.

 * http://www.oreilly.com/online-training/react-for-web-developers.html
   React for Web Developers live course March 17 - April 14
   by Jonathan Stark
   
 * https://tmail21.com/startup-stories/why-our-startup-chose-react-native-and-what-we-learned/
   say they abandoned Ionic for React Native.

 * http://code.tutsplus.com/tutorials/creating-a-dictionary-app-using-react-native-for-android--cms-24969

 * https://egghead.io/series/react-native-fundamentals
   ($20/month)   
   by Tyler McGinnis has 17 video modules
   on the Notes view.
  
