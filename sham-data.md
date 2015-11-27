Sham = fake.

There are several ways to crate sham data.

<a id="RustInstall">
## Rust installation</a>
Github user polyfractal (Zachary Tong @elastic) put together a playground project
The hotcloud folder at https://github.com/polyfractal/playground/tree/master/hotcloud
which generates data used in
https://www.elastic.co/blog/implementing-a-statistical-anomaly-detector-part-1

The example makes use of the Rust systems programming language from
https://www.rust-lang.org.

There are several ways to Install Rust

### Homebrew
Homebrew is my go-to approach for installation on Mac natively.
Rust has dependency of libssh2 which is taken care of if brew is used to install rust:

    ```
brew install rust
sudo chown -R `whoami` /usr/local/bin
sudo chown -R `whoami` /usr/local/share/man/man1
brew link rust
    ```

    The response to link command:

    ```
Linking /usr/local/Cellar/rust/1.4.0... 39 symlinks created
    ```

### Rust-lang.org
Following instructions for installing on a Mac at
http://doc.rust-lang.org/book/installing-rust.html

    ```
http://doc.rust-lang.org/book/installing-rust.html
sh rustup.sh
    ```

This error message appears if network is down or site is gone:

    ```
curl: (6) Could not resolve host: static.rust-lang.org
    ```

If all is well,

    ```
/usr/local/lib/rustlib/uninstall.sh
    ```

To install:

    ```
sudo /usr/local/lib/rustlib/uninstall.sh
    ```

### multirust
Zach recommends this way.

0. Download the script and run it to build, and install multirust as root, then
configure multirust with the most common options.

    ```
    curl -sf https://raw.githubusercontent.com/brson/multirust/master/blastoff.sh | sh
    ```

    ... multirust installation ...

    ```
git clone https://github.com/polyfractal/playground/
cd playground/hotcloud
multirust override nightly
cargo build
RUST_LOG=hotcloud=DEBUG cargo run
    ```


### Verify
Regardless of how it was installed:

0. Verify whether Rust was installed:

    ```
rustc
    ```

    The response should be help info.

<a id="RustCompile">
## Run Rust compile main</a>

0. Navigate within the <strong>src</strong> folder to where main.rs is located.

0. Run rust programs (which have .rs file extension):

    ```
rustc main.rs
    ```

    The response I'm getting:

    ```
main.rs:1:1: 1:35 error: #[feature] may not be used on the stable release channel
main.rs:1 #![feature(custom_derive, plugin)]
^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
error: aborting due to previous error
    ```


The demo expects an Elasticsearch node to be available at localhost:9200, and will delete/reset the indices: data and hotcloud. All data will be lost if these already exist! Do not run this demo on a production cluster :)


<a id="GoogleSheetsToES">
## Google Sheets into ES</a>
https://www.youtube.com/watch?v=aLRh517vOhc
Google Sheets to Elasticsearch Screencast