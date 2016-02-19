This chapter describes git and other source code version control systems that store and delivery primarily text-based files.

<a name="VisualStudio">
## Visual Studio IDE</a>
For Visual Studio 2013 or later, Git support is built in and doesn't require any plugin installation.
In Options, under Source Control, enable "Microsoft Git Provider".

   * http://stackoverflow.com/questions/19892232/how-to-connect-visual-studio-2012-with-git-github

But assuming that you have
<a target="_blank" href="https://www.microsoft.com/en-us/download/details.aspx?id=39305">
Update 4</a> of 
 <strong>Visual Studio 2012 
 installed on your Windows 7 machine:

0. Use an internet browser to get to 
<a target="_blank" href="https://visualstudiogallery.msdn.microsoft.com/abafc7d6-dcaa-40f4-8a5e-d6724bdb980c">
Visual Studio Tools for Git</a>,
a free extension built by the TFS Power Tools Team within Microsoft to work within VS Team Explorer to provide source control integration for Git.  This extension enables integration with any local Git repository, and provides tools to work with Github and other third party hosted Git repositories. The extension also enables the use of Team Foundation Service hosted Git projects.

   Microsoft, which makes Visual Studio IDE, also sells a competing product called TFS (Team Foundation Server).
   The UI of this add-in tries to mimic that product (with limited success).

0. Click Download of file Microsoft.TeamFoundation.Git.Provider.msi.

   NOTE: This was last updated 12/2014, and reviews include these:
   "It works, but it so cumbersome that I would rather just switch to the command line. Nothing is laid out well, everything is difficult to access. A lack of effective short-cuts/keyboard navigation means committing code takes longer than it should. No project tracking means I have to manually select each thing to add. They should look to more effective Git integration such as what's available with IntelliJ for an example of how to 'stay out of the developers way'. the integration lacks a lot of the important features which GIT supports (amend, interactive rebase etc.). Doesn't support SQL Server Development Tools version of Visual Studio 2012.
   This tool should have the Branch/Merge tree visualizer. And also, GitFlow support.
"

## Resources
Get email notifications when someone stars or forks one of your GitHub repos and follows/unfollows you
with https://gitnotifier.io

https://github.com/so-fancy/diff-so-fancy
make diffs look better by piping output 

   ```
git diff --color | diff-so-fancy
   ```

   Install it:
   
   ```
   npm install -g diff-so-fancy
   ```
   
   
