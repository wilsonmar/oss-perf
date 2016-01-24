The objective here is to completely <strong>automate</strong> test runs so that
servers can be provisioned, all software deployed, and results obtained and analyzed
without human attention.

Variations in runs is needed to measure interactions among the various <a href="configs.md">configurations:

  * Number and size of machines provisioned (such as RAM, use of solid-state drives, etc.).
  * OS selection (such as Debian vs. Windows, etc).
  * VM
  * App Configuration settings (such as maximum threads).
  * Various "headless" APIs
  * Various UI
</a>

Our objective here is to identify the most throughput of work at the least cost.
This requires:

  * Server configuration settings and logic be specified as code rather than within shell scripts.
  * Applications look externally in parameter files rather than having it hard-coded in the source code.
  * A way to select what to test, how often, using what data, etc.

There are methematical techniques (such as "Design of Experiments") that can reduce the number of runs
necessary to obtain a statistically valid results.


<a id="Alternatives">
## Alternatives</a>
Several organizations have work along this line of thinking.

Values to vary need to be stored (in a key/value store).

<a target="_blank" href="https://consul.io/intro/index.html">
Consul.io</a> powers a hive which maintains a K/V store containing the health of servers obtained from 
service discovery agents.

Open-source TAURUS (Test Automation Running Smoothly) was 
written in Java and Python 2.7 to create and edit YAML files that control JMeter slaves
and receive outputs from Blazemeter:

   * http://gettaurus.org/
   * https://www.youtube.com/watch?v=rwccqwaHT9U explains TAURUS as used with Blazemeter.
   * http://github.com/Blazemeter/taurus

XebiaLabs Software (in Boston)
provides a way to manage variations for functional testing (not performance)
within Continuous Delivery.
Its <a target="_blank" href="http://blog.xebialabs.com/author/dfarley/">
Company blog</a> is by
David Farley (@davidfarley, <a target="_blank" href="http://www.davefarley.net">http://www.davefarley.net</a>)

<a name="React">
## React App</a>

Despite André Staltz's claim
* http://staltz.com/why-react-redux-is-an-inferior-paradigm.html

React (from Facebook) is popular when combined with additional libraries.

* https://webpack.github.io/ module bundler of JSX, and ES6 code, 
* Node.js & NPM 
* http://bebraw.github.io/reactabular/ table generator from the author of http://survivejs.com/ book

Additional resources for learning:

* https://leanpub.com/hackingwithreact
