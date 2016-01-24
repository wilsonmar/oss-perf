This describes use of JFrong Artifactory, a <strong>private</strong> binary repository much like
what public <a href="#Chocolately"> Chocolatey</a> provides for Windows machines
and <a target="_blank" href="http://www.homebrew.com"> Homebrew</a> for Macs.

Local private binary repositories are more secure than public sites which can be hacked.
Local is also quicker.

 * https://www.youtube.com/watch?v=-4VJ2uQ69MQ
   [Meetup] The Past, Present and Future of Artifactory
 * https://www.youtube.com/watch?v=NcmTEevkqrU

<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/12533663/5ecd525a-c1ec-11e5-9375-38fd43712cc0.png">
<img width="1056" alt="artifactory system of record" src="https://cloud.githubusercontent.com/assets/300046/12533663/5ecd525a-c1ec-11e5-9375-38fd43712cc0.png"></a>

 1. Declare new dependencies.
 2. Resolve dependencies
 3. Resolve dependencies
 4. Commit the changes
 5. Take VCX changes
 6. Build
 7. Resolve dependencies
 8. Deploy module artifacts and BuildInfo BOM

Artifactory is open source,
but JFrog provides Mission Control on a licensed basis.

   * https://www.youtube.com/watch?v=r3Mx-0P0JUo
   * https://www.youtube.com/watch?v=nr_OLMFbw0s Enterprise Capability of JFrog Artifactory

A private Artifactory can contain "bits" also available from public repositories, primarily:

  * https://www.youtube.com/watch?v=1iq_dsDoS84

<a name="QueryLanguage">
## Query Language</a>
Artifactory provides it Artifactory Query Language (AQL) to retrieve and organize metadata.


<a id="Chocolatey">
## Chocolatey</a>

 * <a target="_blank" href="http://www.chocolately.com"> Chocolatey</a>

 * http://www.hanselman.com/blog/IsTheWindowsUserReadyForAptget.aspx

On Windows, 

0. Open C

```
iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))
```


<a name="Resources">
## Resources for Learning</a>

* https://www.youtube.com/watch?v=NcmTEevkqrU
