Static analysis scans source text code.

Such tools can range from those covering several programming languages:

  * SonarQube
  * Parasoft (commercial licensed)

Tools specific to particular programming languages include:

  * PMD for Java
  * Findbugs for Java
  
  * FxCop for .NET
  * StyleCop for .NET


<a name="Rules">
## Which Rules</a>
Just as with everything else in nature, Pareto's 80/20 Principle applies;
80% of the impact usually comes from that 20%.

Some of the most impactful 20% of rules are discussed below.

These usually have to do with paculiarities of program coding.



<a name="StringConcat">
### String Concatenation</a>

Strings in Java are "immutable" in that they cannot be changed once created.

So adding two strings together requires the creation of another object,
which can be expensive.


<a name="StaticObjects">
### Static objects</a>

In C#, an object defined as static stays in memory until the program ends.
This is a good thing to avoid recreating objects over and over again.

What's more troubling is that any object refencing a static also remains in memory.

