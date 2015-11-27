This describes capture of status and operational information.

On November 24, 2015 Elastic released version 1.0 of OSS Beats.
See https://www.elastic.co/blog/beats-1-0-0.
Tudor Golubenco @tudor_g tweeted Nov 24 "I quit my job at BigCo 1y ago to work full time on this OSS project."

<img src="https://www.elastic.co/assets/bltbdd3db766780b321/beats%20platform.png">


<a id="BeatsDev">
## Custom Beats development</a>
Different application monitoring system provide its own agents installed on servers
to collect, parse, and ship metrics.

Various agents are often not compatible with each other.
So metrics may need to be extracted out of AppDynamics database (via REST API) for 
shipping to Logstash via a custom Beat based on the
<a target="_blank" href="https://www.elastic.co/guide/en/beats/libbeat/current/new-beat.html">
Beats Developer Guide</a>.

TopBeats is based on the Go programming language. 

0. Instead of installing from `https://golang.org/doc/install`, 
   Mac owners can use this from any folder:

    ```
brew install go
sudo chown -R `whoami` /usr/local/bin
brew link go
export PATH=$PATH:/usr/local/opt/go/libexec/bin
go help
    ```

0. Define a workspace folder to hold go command files, such as:

    ```
cd /
mkdir work
    ```

0. Define a pointer to it:

    ```
export GOPATH=$HOME/work
    ```

0. Open a text editor and paste this simple program in that work folder:

    ```
package main

import "fmt"

func main() {
fmt.Printf("hello, world\n")
}
    ```

0. Compile it:

    ```
go install github.com/user/hello
    ```

0. Run it:

    ```
$GOPATH/bin/hello
    ```

    You should see "Hello world print out".


0. More on how to code Go programs:

    <a target="_blank" href="https://golang.org/doc/code.html">
    How to write go code</a>