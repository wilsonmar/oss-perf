This page describes how to learn and make use of React
at an enterprise level.

React is used to develop dynamic SPA UI running on modern browsers
(not static sites).
React Native is used to develop native apps running on Android and iOS mobile devices.

The React.js logo ( bit.ly/reactjs-logo - changes were made ) belongs to Facebook and is available under CC BY 4.0 license ( bit.ly/reactjs-logo-license ). React was open-sourced by Facebook, and thus its Github location:

 * https://facebook.github.io/react/ rendered from
   https://github.com/facebook/react
 * https://facebook.github.io/react-native/ rendered from
   https://github.com/facebook/react-native

However, to get started, we'll look at sample React apps.

Before we do that, most tutorials assume developer utilities are installed:

<a name="DevTools">
## Developer Tools</a>

 * Google Chrome and FireFox internet browser
 * https://nodejs.org/en/ version 4.2.4 or the latest 4.x.x, not version 5
 * https://github.com/nodejs/node-gyp the Node command-line add-on tool.
 * git client
 * A text editor / IDE (Sublime, https://atom.io/)
 * Sublime Text Package Manager is explained  at https://sublime.wbond.net/installation
 * Sublime Text 3 Package Control | Babel (https://github.com/babel/babel-sublime)
 * https://github.com/babel/babel-eslint from Sebastian McKenzie who wrote Babel

 * Python 2 and 3
 * Ruby is used by some apps
 * npm install -g react-native-cli

 * http://fontastic.me/ to generate SVG sprites

NOTE: Some utilities go together. When working with Gulp:

 * http://gulpjs.com/ gulp for building
 * Gulp react
 * http://browserify.org/

Alternately, when working with Grunt:

 * https://npmjs.org/package/grunt
 * https://npmjs.org/package/grunt-react
 * https://npmjs.org/package/grunt-browserify

Browserify is an alternative to Webpack, wich I favor because of its support for hot module replacement (HMR) used by react-hot-loader.


<a name="SampleApps">
## Sample Apps</a>
Listed below in order of complexity:

 0. https://github.com/jarsbe/react-webpack-boilerplate is the simplest.

 0. https://github.com/jarsbe/react-starter-kit

 0. https://github.com/prakhar1989/reflux-starter-kit explained by
   http://spoike.ghost.io/deconstructing-reactjss-flux/

 0. https://github.com/goopscoop/ga-react-tutorial

 0. https://github.com/kriasoft/react-starter-kit explained in
   https://www.reactstarterkit.com/

 0. https://github.com/scotch-io/react-tweets as explained in
   https://scotch.io/tutorials/build-a-real-time-twitter-stream-with-node-and-react-js

 0. https://github.com/tomchentw/react-google-maps as explained in
    https://tomchentw.github.io/react-google-maps/

 0. http://github.com/cheeaun/steepless as demo'd at
     http://cheeaun.github.io/steepless/
     helps you find the flatest route for walking, bicyling, and driving.
     It generates a terrain chart for each option Google provides.

   Steven Grider (@sg_in_sf, ste.grider@gmail.com)
   created two video courses on Udemy:

 0. https://www.udemy.com/react-redux/learn/#/ 
    shows how blog, book_list, video_browser, and weather web apps are created in 
    https://github.com/StephenGrider/ReduxSimpleStarter.git
    https://github.com/StephenGrider/ReduxCasts

 0. http://github.com/DanialK/react-redux-sudoku with a demo at
    https://react.rocks/example/react-redux-sudoku

 0. When you're ready for an enterprise-class boilerplate:
    https://github.com/unicorn-standard/starter-kit as explained in
    http://unicornstandard.com/packages/boilerplate.html
    makes use of https://github.com/unicorn-standard/react-pacomo
    CSS conventions eliminate bugs caused by conflicting styles.

    Contrast vs. https://github.com/suitcss/suit/blob/master/doc/README.md

 0. <a href="#Reapp">Reapp</a> seems the most complete.
    Alas, the main contributor Nate Wienert (https://github.com/natew) 
    is not maintaining it, but there hasn't been any blogpost or message on the reapp website telling developers that the framework is no longer maintained, which we think is a rather poor way of discontinueing an open source project.

 0. https://github.com/touchstonejs/touchstonejs
    http://touchstonejs.io is the next hope.

 0. So React Native is still the way to go.
    https://www.udemy.com/reactnative/learn/#/ with
    https://github.com/StephenGrider/ReactNativeCasts
    shows how to use ES5 to build a list app
    using default properties and text formatting functions.

   <img width="999" alt="react redux flow" src="https://cloud.githubusercontent.com/assets/300046/12704033/af5bc36c-c806-11e5-8bd9-a2bfbcde35a5.png">




The unicorn boilerplate contains several libraries that can be 
leveraged by other React apps:

 * compact.js
 * compose.js
 * partial.js
 * typeReducers.js
 * uuid.js generates a unique 36-character string (with dashes), 
   necessary to work with NOSQL databases.
 * pacomo.js
   https://github.com/unicorn-standard/react-pacomo as in
   http://unicornstandard.com/packages/react-pacomo.html with
   transforms component className props by prefixing them with 
   a pacomo, a PackageName-ComponentName- namespace
   so CSS becomes locally scoped, just like CSS Modules.

To work with React-Native:

0. Install XCode from the Apple AppStore, which takes up 2 Gigabytes.
0. Install Command Line Tools from menu Xcode -> Preferences -> Downloads

Each repo installs depdendencies in either the global cache or in its own
<strong>node_modules</strong> subfolder. 

NOTE: React Native mobile apps need to have all dependencies in node_modules so the app runs stand-alone.

0. Update the npm cache:

   ```
   npm update
   ```

0. Install:

   ```
  npm install -g react-native-cli
   ```

0. For a list of what's in the global cache:

   ```
npm list -g
   ```
   
   Information on some libraries used by React:

 * https://github.com/spoike/refluxjs for unidirectional dataflow
 * http://fluxxor.com/ data layers
 * Babel transpiler for ES6
 * https://lodash.com/
 * https://github.com/rackt/react-router explained at
   https://github.com/rackt/react-router/tree/latest/docs
   is written in JSX syntax.

 * http://stylus-lang.com/ for CSS
 * webpack
 * watchpack
 * BrowserSync
 * Karma for testing
 * https://github.com/tommyh/jasmine-react for Behavior Driven Development
 * http://browserify.org/ bundles up (compiles) modules so clients only download a single file.

<a name="HomeForRepos">
## Get a site with Component.jsx</a>
From jarsbe aka Jack Callister:

1. PROTIP: Create a <strong>gits</strong> folder to hold git repositories, such as /User/me/gits
   (where you replace "me" with your user ID).
2. cd into that folder.
2. PROTIP: In the gits folder create a folder to hold repositories from a particular author. You may need to compare repos of the same name from different authors. In order to sort by topic (and avoid memorizing author names), I use a combination name:

   ```
   mkdir react-jarsbe
   ```

0. cd into react-jarsbe
0. Clone Jack Callister's repository:

   ```
git clone http://github.com/jarsbe/react-webpack-boilerplate.git app
   ```

0. Specification of the app folder is not usual practice because 
   it requires one additional step:

   ```
cd app
   ```

0. Download dependencies based on package.json:

   ```
npm install
   ```
   
   NOTE: If there are errors, a npm-debug.log is created.
   
   Within package.json, keywords are for people to understand what it is in the project, in just a few words.

0. Install webpack globally so it can be referenced from any folder:

   ```
npm install webpack -g
   ```

<a name="StartJSX">
### Start a site with Component.jsx</a>
In the same folder as above:

0. Invoke the web service:

   ```
npm start
   ```

   This actually invokes a script defined in the <strong>package.json</strong> file:
   
   ```
   npm run webpack & npm run serve
   ```

   This chains two commands in one.
   
   webpack and serve are also defined in package.json.


<a name="KillIt">
## Kill it</a>
When you've ready:

0. At a Terminal, press command+C to stop the server.
1. cd back to the gits folder.
0. Remove a folder (react-jarsbe or whatever) and its contents:

   ```
   rm -rf react-jarsbe
   ```


<a name="ComponentJSX">
### Component.jsx</a>

0. Copy and paste the URL in a browser:
   <a target="_blank" href="http://localhost:8000">http://localhost:8000</a>

   What appears is simply "The component is rendering!".
   You'll have to code the rest of the UI yourself.

0. Right-click on the browser screen to View Source.

0. In Github or locally open src/components/Component.jsx

   ```
var React = require('react');

var Component = React.createClass({

  render: function() {
    return (
      <h1>The component is rendering!</h1>
    );
  }

});

module.exports = Component;
   ```

   At the bottom, the `module.exports` to display the screen
   is from the react library specified
   to be brought in at the top of the file.
   Within native mobile apps it's instead:

   ```
   var React = require('react-native');
   var VarRegistry = React.AppRegistry;
   ```

   To show a react component on a mobile screen:

   ```
AppRegistry.registerComponent('weekdays',function(){
   return WeekDays
});
   ```

   If the ES2015/JS6 "fat arrow" syntax is used 
   instead of the function and return keywords:
   
   ```
AppRegistry.registerComponent('weekdays', () => weekdays);
   ```

   Notice React renders what is displayed by invoking a JavaScript
   function that return HTML. 
   
   TOOL: Use a JSFiddle to dynamically try changes:

   * http://jsfiddle.net/vjeux/kb3gN/

   ```
   var Component = React.createClass({
   ```

   Alternately, to render a specific tag such as `<header>`:

   ```
    getInitialState: function(){
        return {
            count: 5,
            name: "friend"
        }
    },
    render: function() {  
        return <header>
            { this.state.name ?
                this.state.name :
                <span>{this.pros.name} Not Logged In</span> }
        </header>;
   }
   ```

Curly braces as in `{this.pros.name}` inserts a <strong>property</strong> created when a component is created.

State changes during the lifetime of an app.

   * While fixing 03-WhatsYourName.jsx, learn reactive state.

<a target="_blank" href="http://jamesknelson.com/should-i-use-react-createclass-es6-classes-or-stateless-functional-components/">
TECHNICAL NOTE:</a> this. is an instance of the ReactComponent class which holds the value of state and refs. When ReactDOM.render is called on an element it and its children are rendered to the DOM and creates ReactComponent instances.

BOTTOM LINE: Use JSX when the app needs to maintain state.

PROTIP: Maintaining state takes time and memory.
So stay stateless by using just functions for the fastest app.


???

   ```
React.render(<img src='http://tinyurl.com/lkevsb9' />, document.body);
   ```

Writing JSX makes prototyping simpler.
But this also adds overhead that slows down production usage.

A JSX transformer that ships with React can be dropped straight into the browser. 
// This easy to read syntax gets translated into...

   ```
<div className="Module">
  <h2 className="Module-header h3">{result.login}</h2>
  <Foo className="Foo--simple" link={url} imgUrl={result.avatar_url} text="View profile" />
</div>
   ```

  Looks like this raw JavaScript after transformation:

   ```
React.DOM.div( {className:"Module"},
  React.DOM.h2( {className:"Module-header h3"}, result.login),
  Foo( {className:"Foo--simple", link:url, imgUrl:result.avatar_url, text:"View profile"} )
)
   ```


<a name="MobileStyles">
### Styles</a>
On a React native mobile app, text is specified between `<Text>` and `</Text>` encapsulated within a View.

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

<a name="MoreJSX">
## For more on JSX</a>
Use of JSX within .js file is signaled by this line at the top:

   ```
   /** @jsx React.DOM */
   ```

For more on JSX:

 * https://facebook.github.io/react/jsx-compiler.html 
   dynamically shows how JSX code is rendered to JavaScript.

 * https://facebook.github.io/react/docs/jsx-in-depth.html

 * https://facebook.github.io/react/jsx-compiler.html

 * https://facebook.github.io/react/tips/if-else-in-JSX.html


<a name="Rendering">
## Renderiing</a>
React classes are rendered:

   ```
React.render(
    <MyComponent/>,
    document.getElementById('myDiv')
);
   ```

   Alternately, to specify a property's text:

   ```
React.render(<MyComponent name="Handsome" />,
    document.getElementById('myDiv'));
   ```

<a name="LifecycleMethods">
## Lifecycle Methods</a>
If your components need lifecycle methods, use ES6 classes

* componentWillMount 
  is invoked once, on both client & server before rendering occurs.

* componentDidMount 
  is invoked only once, only on the client, after rendering occurs.

* shouldComponentUpdate
  returns value to determine whether component should update.

* componentWillUnmount
  is invoked prior to unmounting component.

* getDefaultProps
  sets the fallback props values if props aren’t supplied.

Tutorials on ES6 (aka Harmony, es-next, ES2015 (because the specification was finalized in June 2015):

  * https://github.com/bevacqua/es6/blob/master/readme.markdown
    ES2015 Overview in 350 Bullet Points

  * https://babeljs.io/docs/learn-es2015/
  
  * http://babeljs.io/docs/usage/transformers/other/react/

  * http://jamesknelson.com/structuring-react-applications-higher-order-components/ are used with React.Component which
   are vanilla JavaScript and thus no chance of being deprecated like
   <strong>mixins</strong>
   (an array of objects used to dynamically extend React.createClass functionality.)

   HOCs rovide more "power" than mixins?

   Also automatic binding.

  * http://babeljs.io/blog/2015/06/07/react-on-es6-plus/
    says Babel for JS6 Classes let you bind only required methods,
    which improves performance

Future versions will occur yearly, as in ES2016 = ES7 = Stage-0

 * Use babelify to incorporate babel into your Gulp, Grunt, or npm run build process


<a name="MomentJS">
## Use MomentJS Library</a>
http://moment.js provides JavaScript functions to handle time and dates.

0. In a new Terminal window within a folder with package.json,
   download and install:

   ```
   npm install --save moment
   ```

   The <strong>--save</strong> ???

0. Stop the server and npm start again.
0. Add to require the new library:

   ```
var React = require("moment");
   ```

0. Add to verify that the new library added can be used:

   ```
<Text>
{Moment().format('ddd')}
</Text>
   ```




<a name="ComponentsReady">
## More Components Ready For You Now</a>
PROTIP: Combining source from components by others is how you can create full-featured React apps quickly.

 * http://react.rocks/ is Pinterest just for React

0. Instead of viewing the long list of "react-components" published to NPM
   (via https://docs.npmjs.com/cli/publish) at
   https://www.npmjs.com/browse/keyword/react-component,
   view the newest and most recently changed at the 
   Registry of React components at
   <a target="_blank" href="http://react-components.com/">
   http://react-components.com</a>

True, many are lame (don't even have a README file, demo page, etc.).
But there are some gems:

 * http://react-components.com/component/react-breadcrumbs

 * http://react-components.com/component/react-sidenav 
   by Warren Mira, with demos listed at
   http://wmira.github.io/react-sidenav/ using CodePen.

   Within CodePen, such as
   http://codepen.io/wmira/pen/LEzPZO
   click on the gear icon at the top to look at the JavaScript libraries
   in `<HEAD>`.
   
   * http://codepen.io/chriscoyier/pen/yIgqi.js
   * http://fb.me/react-with-addons-0.12.2.js
   * http://fb.me/JSXTransformer-0.12.2.js
   * https://rawgithub.com/wmira/dashboard-sidenav/master/js/react-sidenav.min.js

 * http://react-components.com/component/rc-time-picker

   <img width="171" alt="react timepicker" src="https://cloud.githubusercontent.com/assets/300046/12699468/06196c5e-c771-11e5-9027-4c06d4377872.png">

From https://github.com/React-Components-Organization,
the Library of generic and reusable react components
(that hopefully will work well together).
PROTIP: Work with Olivia Colonna to make her vaporwear a reality,
because we all need them:

 * Container
 * Panel
 * Carousel
 * Label
 * List, 02-PartiesList.jsx in Koans
 * Toolbar
 * [Video](https://github.com/React-Components-Organization/react.video)
 * Audio

More:

 * Ads
 * Saving

Yeah, like 
[the big list of Wordpress components](https://github.com/Automattic/wp-calypso/tree/master/client/components)

Make use of smartphone:

 * Send Email, SMS, voicemail, fax
 * Take picture, video

Algorithms:

 * https://algorithmia.com/algorithms/nlp/AnalyzeTweets
 * https://algorithmia.com/algorithms/nlp/LDA
 * https://algorithmia.com/algorithms/twitter/RetrieveTweetsWithKeyword
 * https://algorithmia.com/algorithms/nlp/SocialSentimentAnalysis

Basic features:

 * https://github.com/simonsmith/react-commonjs-example
   as explained in
   http://simonsmith.io/writing-react-components-as-commonjs-modules/
   describes how to add a user profile with an avatar and bio field.

Saving data for individual users is necessary is so users can save:

 * Login information that connects them to data on the server (or not)
 * Geolocation of user to provide country, etc. automatically
 * History of user actions (with response times)
 * Shopping cart

What about <a target="_blank" href="http://requirejs.org/"> Require.js</a>
JavaScript loader and its use of the
Asychronous Module Defintion (AMD) API
for declaring and using JavaScript modules and regular JavaScript script files
implemented by https://github.com/jrburke/r.js?

 * https://github.com/philix/jsx-requirejs-plugin

<a name="Testing">
## Testing</a>

 * http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/

<a name="KoanJS6">
## Learning ES2015/JS6 with Koans</a>
I love writing in languages that are not supported ;)

0. Install https://github.com/arkency/reactjs_koans
0. Use Finder to view the src/exercises folder.
0. `npm start` on one Terminal to display http://localhost:8080/ within a browser.
0. `npm run watch` on another Terminal session to watch for changes and automatically run tests when code changes.
0. Each .jsx code needs to be fixed in the sequence listed.

   * Fix 01-HelloWorld.jsx by simply changing
   "<div>FILL ME IN!</div>"
   to "<span>Hello World</span>". Save the change.

   * While fixing 02-PartiesList.jsx, learn that React can't use
     class= within `<ul className="parties-list">` 
     because it's reserved by JavaScript.
     More about differences at 
     http://facebook.github.io/react/docs/jsx-gotchas.html


<a name="AppFolders">
## App with folders</a>
Let's make use of another repo:

0. In gits mkdir react-prakhar1989 and cd into that.
0. git clone https://github.com/prakhar1989/reflux-starter-kit.git
0. cd reflux-starter-kit
0. npm install
0. npm run build. The response:

   ```
   > browserify -t babelify ./src/app.jsx -o ./dist/bundle.js
   ```

0. Find what port:

   ```
lsof -i | grep LISTEN
   ```

   One repo provides an alternative to this management of ports.

<a name="Folders">
## Unicorn App</a>
Let's now look at a boilerplate app with the fullest features I've seen so far.

0. git clone https://github.com/unicorn-standard/starter-kit.git

   The mantra of this repo is
   "Build amazing Single Page Apps without re-inventing the wheel"

0. Open another terminal, navigate to the repo, and invoke the default browser with the right port:

   ```
npm run open # 
   ```

   No need to open browser and type in localhost:3000.


<a name="Folders">
## Folders in the Unicorn App</a>
Within <strong>src</strong>:

 * actions
 * actors
 * components
 * constants
 * containers
 * reducers
 * static contains images (.jpg files) and a .gitkeep
 * theme is blank
 * utils contains utility javascript files
 * validators

Unicorn doesn't have a folder for:

 * pages
 * stores
 * scripts
 * stylus contains CSS files named .styl (main, helper, normalize)

If the app uses JSX, there would be a app.jsx file,

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

<a name="ReappAlternatives">
### Alternatives to Reapp</a>
Alternatives to Reapp include Ionic from Google, jQuery mobile, and
Sensha using Cordova libraries that renders JavaScript within a browser view on mobile devices.

Although not as fast as native rendering, this technology can accomodate
very complex interaction workflows.

<a name="NativeAlternatives">
### Alternatives to React Native</a>
React Native converts code into
UI elements native to the app, using Andorid Java and
nearly as if Swift was used to write the iOS app.

<a name="ReactWebAlternatives">
### Alternatives to React Web</a>
Alternatives to React web include the more declarative Google (and Microsoft's) Angular.js, Ember, Backbone, etc.




<a name="RoutePassing">
## Route Passing</a>
Routing means taking action in response to a change in the browser’s current URL.

Hash-based routing uses the portion of the page’s URL starting with the # character, aka the hash.

James K. Nelson wrote the uniloc library at http://unicornstandard.com/packages/uniloc.html
to achieve Universal JavaScript Route Parsing, as
described in http://jamesknelson.com/routing-with-raw-react/

<a name="CustomComponent">
## Custom Components</a>

NOTE: The folder holding custom .js files need to be speciFor in require statements (or it'll crash). An example:

   ```
   var React = require('./src/day-item');
   ```

Inside day-item.js, component DayItem is defined.

The component is specifed by users by a self-closing tag:

   ```
   <DayItem />
   ```

   Each DayItem is another instance.


<a name="IndexPage">
## Index Page</a>
Let's talk about each line in this sample index.html page within the build folder:

   ```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <script src="build/react.js"></script>
    <script src="build/JSXTransformer.js"></script>
  </head>
  <body>
    <div id="mount-point"></div>
    <script type="text/jsx">
      // React Code Goes Here
    </script>
  </body>
</html>
   ```

 * utf-8 is needed for browsers to work well with international characters
   such as Japanese.

 * Viewport is needed to render properly on mobile devices.

React components mount to an element such as the "mount-point" div
acting as the parent container.

needs library react.js and 
JSXTransformer.js

The environment folder has separate .js for development and production
for different identityProperty.

Random thoughts here:



   NOTE: There is currently no built-in scrolling within React Native,
   such as two-finger swipping.

* https://scotch.io/tutorials/make-a-mobile-app-with-reactjs-in-30-minutes



<a name="Advantages">
## Advantages</a>
React is known for its fast performance because its updates only specific elements in a <strong>Virtual DOM</strong> (server side) rather than the entire DOM (on the client).

![react one way](https://cloud.githubusercontent.com/assets/300046/12696583/7642436e-c723-11e5-908b-32c06c79507b.png)

Explanations of the above diagram (from http://blog.reverberate.org/2014/02/react-demystified.html):

 * Dan Abramov, inventor of Redux has videos on the principals at
   https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree?series=getting-started-with-redux

 * http://blog.andrewray.me/flux-for-stupid-people/
 * http://calendar.perfplanet.com/2013/diff/
 * http://conferences.oreilly.com/fluent/fluent2014/public/schedule/detail/32395
 * http://stackoverflow.com/questions/21109361/why-is-reacts-concept-of-virtual-dom-said-to-be-more-performant-than-dirty-mode
 * https://github.com/Matt-Esch/virtual-dom

A Virtual DOM enables React to render server side as well
Isomorphic Javascript -- one codebase that can run on both the server side and the client side.
This is the concept behind frameworks like Rendr, Meteor & Derby. 

React runs a "diffing" algorithm to identify what has changed. Results from the diff go into a reconciliation step to update the DOM.

React provides View components for JavaScript 
React gives you a template language and function hooks to essentially render HTML.


A dispatcher class monitors Views to dispatch Actions

 * https://github.com/facebook/flux/blob/master/src/Dispatcher.js

Flux is a word made up to describe "one way" data flow handled by very specific events and listeners.

 * http://facebook.github.io/flux/docs/overview.html

"Flux" is a design pattern, meaning that a view triggers an event such as after user types a name in a text field updates a model which triggers an event for the view to respond to that model's event by re-rendering with the latest data.

There are several competing Flux libraries.

React doesn't support IE8 and below, and never will.

Offline feature.


   * https://facebook.github.io/react/blog/2014/01/02/react-chrome-developer-tools.html


<a name="RethinkDB">
## RethinkDB Back End</a>

<a target="_blank" href="https://www.rethinkdb.com/">
RethinkDB</a> says it's a database for the realtime web
because it responds to Socket.io which
<strong>pushes</strong> JSON changefeeds to apps 
(rather than using polling tech).

* https://www.codementor.io/tips/0175438572/using-socket-io-with-rethinkdb-changefeeds-to-build-a-reactive-backend



<a name="ReactNative">
## React Native</a>

React Native apps downloaded in mobile app stores (Google Play, Apple, Amazon, etc.)
make use of JavaScript Core in apps:

 * http://trac.webkit.org/wiki/JavaScriptCore

 * http://testdroid.com/tech/testing-react-native-apps-on-android-and-ios
   recommends using Appium
   over Robotium.


0. In a Terminal in the weekdays folder, run npm start
0. In XCode, click the play button to create an iPhone simulator.

   WARNING: Recent smartphones have higher resolution than what many
   laptop display can render.

0. Press command+Tab to switch to the simulator window.

   "Welcome to React Native!" is from the sample app.

0. In Finder, open file <strong>index.ios.js</strong> with (using) your IDE.
0. Change something. Save it. Press command+R to see it in the simulator.

0. localhost:8081


<a name="TablesReactNative">
## Tables in React Native</a>
It is said that 90% of iOS apps display tables.


<a name="Newsletters">
## Newsletters</a>

 * http://reactkungfu.com/
 * https://reactjsnews.com/ 

<a name="Resources">
## Resources for learning</a>

* http://facebook.github.io/react/docs/tutorial.html
  is the official tutorial.

* http://facebook.github.io/react/blog/2013/06/05/why-react.html
  Why was React written by those who wrote it within Facebook.

* http://buildwithreact.com/
  is written by who worked at Facebook.

<a target="_blank" href="https://scotch.io/"> Scotch.io</a>

 * https://scotch.io/courses/getting-started-with-facebooks-react-js
 * https://scotch.io/tutorials/learning-react-getting-started-and-concepts

Others:

 * http://blog.andrewray.me/reactjs-for-stupid-people/

 * https://reactforbeginners.com/ shows how to use 
   https://www.firebase.com/ SaaS database.

 * https://www.codementor.io/reactjs/tutorial/the-reactjs-quick-start-guide

 * https://egghead.io/technologies/react
   provides lessons for a price.

 * http://web-design-weekly.com/2015/01/29/opinionated-guide-react-js-best-practices-conventions/


<a name="Compendiums">
## Compendiums</a>

 * https://www.codementor.io/learn-reactjs

 * https://github.com/enaqx/awesome-react
   A list of awesome things around the React ecosystem
  
