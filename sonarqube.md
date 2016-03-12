SonarQube (abbreviated to Sonar here)
improves code quality by scanning source code
to identify **issues** from **meaures** it calculates.

Sonar analyzes various languages 
using plug-ins.

A summary of what it finds estimates <a target="_blank" href="http://docs.sonarqube.org/display/SONAR/Technical+Debt">
Technical Debt</a>, 
which SonarQube tracks over time.

![sonarqube-tech-debt-pyramid](https://cloud.githubusercontent.com/assets/300046/10703589/eacf50be-7985-11e5-9f2f-70fc2f6f1986.jpeg)

Sonar scans different **facets** (such as security).

## SQALE Summary Ratings
Sonar calculates a **SQALE Rating** based on the open-source
SQALE (Software Quality Assessment based on Lifecycle Expectations) methodology defined by industry group 
http://www.sqale.org/. The caluculation is based on inclusion of rules set in the Common SonarQube repository:

 * Duplicated blocks
 * Failed unit tests
 * Insufficient branch coverage by unit tests
 * Insufficient comment density
 * Insufficient line coverage by unit tests
 * Skipped unit tests

Change SQUALE calculations in the plug-in 
http://www.sonarsource.com/products/plugins/governance/sqale/

<a id="Rules">
## Rules</a>
SonarQube **Analyzers** scan code organized into projects.

![sonarqube rules fromdoc](https://cloud.githubusercontent.com/assets/300046/10703031/0e192d50-7982-11e5-9a35-30cbeab3c69d.jpeg)

<a id="Tags">
## Tags</a>
Customizable **Tags** provide a way to categorize and filter rules.


<a id="InstallSonarQubeEnv">
## Install Enviornment to Run SonarQube</a>
Since SonarQube runs as a server, it's best to have it run
within a VM:

0. <a target="_blank" href="https://www.virtualbox.org/">
Virtualbox</a> is a dependency of Vagrant:

   ```
brew cask install virtualbox
   ```

0. Vagrant:

   ```
brew cask install vagrant
   ```

   The response on March 11, 2016:

   ```
==> Downloading https://releases.hashicorp.com/vagrant/1.8.1/vagrant_1.8.1.dmg
######################################################################## 100.0%
==> Verifying checksum for Cask vagrant
==> Running installer for vagrant; your password may be necessary.
==> Package installers may write to any location; options such as --appdir are ignored.
Password:
==> installer: Package name is Vagrant
==> installer: Installing at base path /
==> installer: The install was successful.
🍺  vagrant staged at '/opt/homebrew-cask/Caskroom/vagrant/1.8.1' (6 files, 85M)
   ```

0. Install <a target="_blank" href="http://vagrantmanager.com/">
Vagrant-Manager</a> 
to manage all virtual machines in one place directly from the menubar.

   ```
   brew cask install vagrant-manager
   ```

   The response on March 11, 2016:

   ```
 ==> Downloading https://github.com/lanayotech/vagrant-manager/releases/download/2.5.3/vagrant-manager-2.5.3.dmg
######################################################################## 100.0%
==> Verifying checksum for Cask vagrant-manager
==> Symlinking App 'Vagrant Manager.app' to '/Users/mac/Applications/Vagrant Manager.app'
🍺  vagrant-manager staged at '/opt/homebrew-cask/Caskroom/vagrant-manager/2.5.3' (201 files, 4.9M)
  ```

<a id="CreateBox">
## Create a Virtual box</a>
0. Add a Vagrant box containing Ubuntu 12.04:

   ```
   vagrant box add precise64 http://files.vagrantup.com/precise64.box
   ```

   The response:

   ```
==> box: Box file was not detected as metadata. Adding it directly...
==> box: Adding box 'precise64' (v0) for provider: 
    box: Downloading: http://files.vagrantup.com/precise64.box
==> box: Successfully added box 'precise64' (v0) for 'virtualbox'!
   ```

0. Create a test directory and cd into it:

   ```
   cd ~/
   mkdir sonar_test1 && cd sonar_test1
   pwd
   ```

0. Initialize the machine:

   ```
   vagrant init precise64
   ```

   The response:

   ```
A `Vagrantfile` has been placed in this directory. You are now
ready to `vagrant up` your first virtual environment! Please read
the comments in the Vagrantfile as well as documentation on
`vagrantup.com` for more information on using Vagrant.
   ```

0. Start the machine:

   ```
   vagrant up
   ```

   The response:

   ```
==> default: Importing base box 'precise64'...
==> default: Matching MAC address for NAT networking...
==> default: Setting the name of the VM: sonar_test1_default_1457747231360_15111
==> default: Clearing any previously set network interfaces...
==> default: Preparing network interfaces based on configuration...
    default: Adapter 1: nat
==> default: Forwarding ports...
    default: 22 (guest) => 2222 (host) (adapter 1)
==> default: Booting VM...
==> default: Waiting for machine to boot. This may take a few minutes...
    default: SSH address: 127.0.0.1:2222
    default: SSH username: vagrant
    default: SSH auth method: private key
    default: 
    default: Vagrant insecure key detected. Vagrant will automatically replace
    default: this with a newly generated keypair for better security.
    default: 
    default: Inserting generated public key within guest...
    default: Removing insecure key from the guest if it's present...
    default: Key inserted! Disconnecting and reconnecting using new SSH key...
==> default: Machine booted and ready!
==> default: Checking for guest additions in VM...
    default: The guest additions on this VM do not match the installed version of
    default: VirtualBox! In most cases this is fine, but in rare cases it can
    default: prevent things such as shared folders from working properly. If you see
    default: shared folder errors, please make sure the guest additions within the
    default: virtual machine match the version of VirtualBox you have installed on
    default: your host and reload your VM.
    default: 
    default: Guest Additions Version: 4.2.0
    default: VirtualBox Version: 5.0
==> default: Mounting shared folders...
    default: /vagrant => /Users/mac/sonar_test1
       ```

0. ssh into the machine now.

   ```
   vagrant ssh
   ```

   The response:

   ```
Last login: Fri Sep 14 06:23:18 2012 from 10.0.2.2
vagrant@precise64:~$ 
   ```

0. Get the IP address of the box. On a Mac:

   ```
   ifconfig
   ```

   It's the lo inet addr, for example: `127.0.0.1` in the response:

   ```
eth0      Link encap:Ethernet  HWaddr 08:00:27:88:0c:a6  
          inet addr:10.0.2.15  Bcast:10.0.2.255  Mask:255.255.255.0
          inet6 addr: fe80::a00:27ff:fe88:ca6/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:526 errors:0 dropped:0 overruns:0 frame:0
          TX packets:368 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:67910 (67.9 KB)  TX bytes:48438 (48.4 KB)

lo        Link encap:Local Loopback  
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:16436  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0 
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
   ```

0. Based on the above, open a web browser to:

   ```
   http://10.0.2.15:3000
   ```

0. Specify a ![forwarded port](http://docs.vagrantup.com/v2/networking/forwarded_ports.html)
   to always access the app in the same way
   by adding these lines to the `config.vm.network` file:

   ```
Vagrant.configure("2") do |config|
    config.vm.network "forwarded_port", guest: 3000, host: 3000
end
   ```

   See http://friendsofvagrant.github.io/v1/docs/config/vm/network.html

0. Halt the vagrant machine:

   ```
   vagrant halt
   ```

<a id="InstallSonarQubeEnv">
## Install Enviornment to Run SonarQube</a>

0. Download SonarQube:

   ```
brew install scalastyle
   ```

This page was written after downloading file SonarQube 5.1.2 created Jul. 27, 2015
from 
<a target="_blank" href="http://www.sonarqube.org/">
	http://www.sonarqube.org/</a>



Most developers prefer to have Sonar look at code before commit into a team repository.
Such **preview mode** runs do not store results in the Sonar run database.

Plugins enable Sonar to be invoked several ways:

  * <a target="_blank" href="http://docs.sonarqube.org/x/3AAW">From a command line</a> as one step in local evaluations.
    This approach enables one-time <a target="_blank" href="http://docs.sonarqube.org/display/SONAR/Analysis+Parameters">parameter configuration</a> 
    for each individual user.

    ```
    sonar-runner
    ```

  * From inside IDE (IntelliJ, Eclipse, etc.) as part of code unit development and testing.

  * From a build server (Maven, Ant, MSBuild, etc.) as part of continuous integration/build.

The server uses Oracle or <a target="_blank" href="http://openjdk.java.net/install/index.html">OpenSDK</a>,
which requires much more work 
https://github.com/hgomez/obuildfactory/wiki/Building-and-Packaging-OpenJDK7-for-OSX
So please stay with Oracle for now.

MySQL is supported.

Docker and Puppet scripts to build the server ???

https://github.com/sonarsource/sonar-examples


Read the documentation
Unzip and start
Analyze projects
Ready to improve quality


<a id="JenkinsConfiguration">
## Jenkins Configuration</a>
Connection to Jenkins:
http://docs.sonarqube.org/display/PLUG/SonarQube+Scanner+for+Jenkins


<a id="ClientConfiguration">
## Client Configuration</a>
http://www.sonarlint.org/visualstudio/
SonarLint for Visual Studio is based on and benefits from the .NET Compiler Platform ("Roslyn") and its code analysis API to provide a fully-integrated user experience in Visual Studio 2015.
SonarLint is free, open source, and available in the Visual Studio Gallery.


Install in Eclipse?

<a id="ScalaSonar">
## Sonar for Scala</a>

http://www.scalastyle.org/
provides a list of ways to use Scalastyle
at
https://github.com/scalastyle

by 3 people:

   * Matthew Farwell
   (http://www.farwell.co.uk/ of Switzerland)

https://groups.google.com/forum/#!forum/scalastyle-users

https://github.com/emrehan/sonar-scalastyle

is based on a fork of
https://github.com/NCR-CoDE/sonar-scalastyle

http://docs.codehaus.org/display/SONAR/Scala+Plugin

<a id="Videos">
## Videos</a>
