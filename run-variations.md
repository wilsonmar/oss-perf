Our objective here is to identify the most throughput of work at the least cost.

Experimentation is needed because there are interactions among the various configurations:

  * Number and size of machines provisioned (such as RAM, use of solid-state drives, etc.).
  * OS selection (such as Debian vs. Windows, etc).
  * VM
  * App Configuration settings (such as maximum threads).

The approach here is to completely <strong>automate</strong> test runs so that
servers can be provisioned, all software deployed, and results obtained and analyzed
without human attention.

This requires:

  * Server configuration settings and logic be specified as code rather than within shell scripts.
  * Applications look externally in parameter files rather than having it hard-coded in the source code.

There are methematical techniques (such as "Design of Experiments") that can reduce the number of runs
necessary to obtain a statistically valid results.


<a id="Alternatives">
## Alternatives</a>
Several organizations have begun to adopt our thinking:

Open-source TAURUS (Test Automation Running Smoothly) was 
written in Java and Python 2.7 to create and edit YAML files that control JMeter slaves
and receive outputs from Blazemeter:

   * http://gettaurus.org/
   * https://www.youtube.com/watch?v=rwccqwaHT9U explains TAURUS as used with Blazemeter.
   * http://github.com/Blazemeter/taurus

XebiaLabs Software (in Boston)
provides a way to manage variations for functional testing (not performance).

