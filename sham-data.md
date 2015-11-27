Sham = fake.

There are several ways to crate sham data.

<a id="Rust">
## Rust </a>
Github user polyfractal (Zachary Tong @elastic) put together a playground project
The hotcloud folder at https://github.com/polyfractal/playground/tree/master/hotcloud
which generates data used in
https://www.elastic.co/blog/implementing-a-statistical-anomaly-detector-part-1

The blog makes use of Rust systems programming language from
https://www.rust-lang.org.

Following instructions for installing on a Mac at
http://doc.rust-lang.org/book/installing-rust.html

    ```
    http://doc.rust-lang.org/book/installing-rust.html
    sh rustup.sh
    ```

    resulted in this error message:

    ```
curl: (6) Could not resolve host: static.rust-lang.org
    ```

So I tried Homebrew. 
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



0. Verify whether Rust was installed:

    ```
rustc
    ```

    The response should be help info.

0. Navigate within the src folder to where main.rs is located.

0. Run rust programs (which have .rs extension):

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

<a id="GoogleSheetsToES">
## Google Sheets into ES</a>
https://www.youtube.com/watch?v=aLRh517vOhc
Google Sheets to Elasticsearch Screencast