This page describes Maven,  a build automation tool used primarily for Java projects. 
Maven's plug-in architecture enables it to be used also for C#, Ruby, Scala, and other languages. 

Maven is a Yiddish word for "accumulator of knowledge". See https://en.wikipedia.org/wiki/Maven.

The product home page at https://maven.apache.org describes Maven as "a software project management and comprehension tool.
Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information."

Maven acts on a <strong>pom.xml</strong> (Project Object Model) file which describes how components of the software is built and the
plug-ins and external dependencies that Maven downloads to its cache or the directories listed, in the build order specified.

   ```
<project>
  <!-- model version is always 4.0.0 for Maven 2.x POMs -->
  <modelVersion>4.0.0</modelVersion>
  
  <!-- project coordinates, i.e. a group of values which
       uniquely identify this project -->
  
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1.0</version>

  <!-- library dependencies -->
  
  <dependencies>
    <dependency>
    
      <!-- coordinates of the required library -->
      
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>3.8.1</version>
      
      <!-- this dependency is only used for running and compiling tests -->
      
      <scope>test</scope>
      
    </dependency>
  </dependencies>
</project>
   ```

The above example is from https://en.wikipedia.org/wiki/Apache_Maven


<a name="Alternatives">
## Alternatives</a>

Alternatives to Maven include:

 * Ant
 * sbt
   

<a name="Installation">
## Installation</a>
Mac users can install Maven with this Homebrew command:

   brew install maven
