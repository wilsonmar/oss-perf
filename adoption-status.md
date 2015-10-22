<a name="OtherAspects">
### Other aspects</a>
The description above does not address several aspects:

   * Development tools (Eclipse, etc.) to develop sample apps.
   * Profiling of code (Visual reading JMX, etc.)

   * Public sample custom configurations.
   * Custom configuration storage separate from public repos.
   * Tutorials explaining how to do all of this.

   * Recruitment of others to contribute to this approach
   * Making the economic case

   * Use of clouds (such as AWS EC2, Blazemeter, SauceLabs, Flood.io, etc.).
   * Integration of commercial/licensed tools

   * Management of screen snapshots
   * Localization testing across different browsers

   * Archival / purging / restore of data
   * Construction of test plans (and other services).

The above may be addressed in the sample plan below.

<a name="Gantt">
### Sequence of adoption</a>
The technical relationships described above provide the basis for sequencing the work necessary to adopt the approach.




   Not covered in this are implementation details such as the customized communications, 
   spreadsheets, project plans, and on-site tutorial materials
   which enterprises pay for (thus fund development of this approach).

There has been a lot written on the benefit of contributing to open-source software.

   * http://www.linuxinsider.com/story/69788.html
   * http://www.goldmansachs.com/our-thinking/pages/open-source.html

Open-source is especially to enterprises (such as banks, retail, etc.) 
which are not in the business of creating utility software for testing.
The hope of open-sourcing software is that others can maintain the software even when the original author moves on.
And original development of software can receive a level of world-class scrunity, creativity, and velocity.


<a name="NewComponents">
## New components</a>
These are the new components created to complete the <a href="#TheVision">vision shown above</a>:

| ID | Component | By | Need |
| ------ | --------- | -------- | ---- |
| a | HAR files to LogStash | Kranthi? | Design |
| b | capture timings in Selenium Java code | Kranthi? | Design |
| c | alerts from LogStash | You? | Design |
| d | <a href="#run-variations">run variations (Taurus)</a> | You? | Design |
| e | Jenkins invoke various configs | You? | Design |
| f | ref. data into ElastiSearch | You? | Design |
| g | j-gen | You? | Design |
| h | configs | Wilson | Design |

This repo takes a "README driven development" approach, as described 
<a target="_blank" href="http://tom.preston-werner.com/2010/08/23/readme-driven-development.html">here</a>.
