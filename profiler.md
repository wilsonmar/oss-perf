NOTE: This page is referenced from <a href="README.md">README.md</a>.
to describe source-code profiler tools which count the number of times each function or method was executed,
and also the amount of memory used.

Such tools for developers usually specialize on a particular programming languge and IDE:

* JProfiler for Java from ej-technologies.com

* <a target="_blank" href="https://www.jetbrains.com/dotmemory/"> JetBrains' DotMemory for C# code</a>


Profilers are also offered by proprietary APM (Application Performance Monitoring) tool vendors:

 * https://portal.appdynamics.com/ 

 * Dynatrace

 * NewRelic

<a id="Debugging">
## Debugging vs. Profiling</a>

Debugging is looking for <strong>logical</strong> errors in programming code 
rather than <strong>resources that the program consumes</strong>, 
which what profilers measure.

 * https://www.youtube.com/watch?v=3rOT-H_3WGQ
   Debugging Tips and Tricks in Visual Studio 2013
   by Daniel.Moth@microsoft.com

 * https://www.youtube.com/watch?v=H0nj3PR3S5g
   Debugger Tips and Tricks for .NET Developers with Visual Studio 2015
   presented at Microsoft Build

<a id="Troubleshooting">
## Troubleshooting vs Profiling</a>

An example of troubleshooting is analyzing dump files Windows automatically saves after a "blue screen of death" occurs
after a crash; whereas profiling is analyzing programming code while it executes.

 * https://www.youtube.com/watch?v=HsZafL2-hWU
   HOW TO USE WINDBG BLUE SCREEN OF DEATH MEMORY DMP FILE
   by Husham Memar

 * https://dev.windows.com/en-us/downloads
   Downloads and tools for Windows 10
   is included within Visual Studio Community 2015 with Update 1, Pro, and Enterprise editions.
   Clicking on Enterprise downloads VSToolsForWindows1E.exe.

 Within Archives at https://dev.windows.com/en-us/downloads/sdk-archive
 
 *  http://msdn.microsoft.com/en-US/windows/desktop/bg162891
   Windows Software Development Kit for Windows 8.1
   installs a choice of several components:
 
   * Windows Software Development Kit
   * Windows Performance Toolkit
   * Debugging Tools for Windows
   * Application Verifier for Windows
   * .NET Framework 4.5.1 Software Development Kit
   * Windows App Certification Kit
   * MSI Tools

   Blue screen memory dumps are stored in C:\Windows\Minidumps

* .symfix to setup symbols from Microsoft's servers.
* .bugcheck to display codes
* .hh for help


<a id="Profiling">
## Profiling</a>



<a id="Resources">
## Resources</a>

 * https://blog.idrsolutions.com/2014/06/java-performance-tuning-tools/

 * https://www.youtube.com/watch?v=pIm5YxHLiro
   Using Microsoft's WinDbg to Debug Magic

 * https://www.youtube.com/watch?v=2rGS5fYGtJ4
   Windows Debugging and Troubleshooting
   by Daniel Pearson at Microsoft Tech Days 2012.

 * https://www.youtube.com/watch?v=EW9RRxwl3uw
   Windows Performance Deep Dive Troubleshooting
   May 19, 2014
   shows how to use the free Windows Performance Toolkit (WPT), Windows Assessment Services (WAS) part of the Assessment and Deployment Toolkit (ADK) on Windows Vista, 7, 8.


