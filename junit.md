Download the .jar files. Go to https://github.com/junit-team/junit/wiki/Download-and-Install and click the link for junit.jar. Find the row for the latest stable release then under the downloads column click 'jar' link. This will download a file junit-X.Y.jar. Repeat this again and download the latest stable release for hamcrest: download hamcrest-core-XX.YY.jar
Create a jUnit Home folder. We need to create a folder and put the .jars you downloaded into this folder. I suggest creating a java folder in your home directory by running cd && mkdir java. Then running cp ~/Downloads/{junit-X.Y.jar,hamcrest-core-XX.YY.jar} ~/java/ to copy the two .jars there. (replace X, Y, XX, YY accordingly). [Note: If the folder placement becomes an inconvenience, don't worry, you can change the jUnit folder at any later date].
Edit your classpath. We now need to edit our .bashrc file to add these files to our classpath (if you are using zsh edit your .zshrc file).

export JUNIT_HOME="$HOME/java"
export PATH="$PATH:$JUNIT_HOME"
export CLASSPATH="$CLASSPATH:$JUNIT_HOME/junit-X.Y.jar:$JUNIT_HOME/hamcrest-core-XX.YY.jar"
Test it works. Restart your terminal. Run echo $CLASSPATH, there should be no errors that complain that files are unable to be found. Now create a test file with a trivial test case. In your java folder, create a file called TestBasic.java with:

import junit.framework.TestCase;
public class TestBasic extends TestCase {
  public void testTrue() {
    assertTrue(true);
  }
}
Now cd into the java directory run javac TestBasic.java followed by java org.junit.runner.JUnitCore TestBasic. If everything is ok, then you will get an output like:

JUnit version 4.11
.
Time: 0.006

OK (1 test)




https://app.pluralsight.com/library/courses/java-unit-testing-junit/discussion

