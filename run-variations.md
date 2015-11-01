Experimentation is needed to identify the most throughput of work for the least cost
Because there are interactions among the various configurations:

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
XebiaLabs Software (in Boston)
