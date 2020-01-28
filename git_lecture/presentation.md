# \< git \>
## Version Control System 

----

<section data-background="#eee">

#  Outline
1. What is git?
3. Basic commands
4. Demo time!
5. Some final thoughts!
6. Resources

----

<section data-background="#eee">

![](https://imgs.xkcd.com/comics/git.png )

[source](https://xkcd.com/1597/)

----

# What is GIT?

----

<section data-background="#eee">

## What is GIT? (1)

+ Version Control System
+ Allows for distributed development
+ Tracks version of each individual file.


----

<section data-background="#eee">

## What is GIT? (2)

![](https://raw.githubusercontent.com/greenpau/ndmtk/master/docs/_static/images/ndmtk.code.submission.workflow.png)

[source](https://github.com/greenpau/ndmtk/blob/master/CONTRIBUTING.md)

----

## Basic Commands

----

<section data-background="#eee">

## Command (1): Git Init
<div class="container">

<div class="col">
<p>
- Initializes your repository
</p>
</div>

<div class="col">

```sh
git init
```
</div>

</div>

----

<section data-background="#eee">

## Command (2): Git Add
<div class="container">

<div class="col">
<p>
- Add file contents to the index (so it can be committed).
</p>
</div>

<div class="col">

```sh
git add <file_name>
```
</div>

</div>

----

<section data-background="#eee">

## Command (3): Git commit
<div class="container">

<div class="col">
<p>
- Record changes to the repository.
</p>
</div>

<div class="col">

```sh
git commit -m "Your commit message"
```
</div>

</div>


----

<section data-background="#eee">

## Command (4): Git Checkout
<div class="container">

<div class="col">
<p>
-  Switch branches or restore working tree files
</p>
</div>

<div class="col">

```sh
git checkout <branch-name>
#  OR
git checkout <sha> <file_name>
```
</div>

</div>

----

<section data-background="#eee">

## Command (3): Git Branch
<div class="container">

<div class="col">
<p>
-  List, create, or delete branches
</p>
</div>

<div class="col">

```sh
git branch my-new-branch
```
</div>

</div>

----

<section data-background="#eee">

## Command (4): Git Merge
<div class="container">

<div class="col">
<p>
- Merge a branch you into your current branch.
- Join two or more development histories together
</p>
</div>

<div class="col">

```sh
git merge <branch>
```
</div>

</div>

----

<section data-background="#eee">

## Command (5): Git pull
<div class="container">

<div class="col">
<p>
- Fetch from and integrate with another repository or a local branch
</p>
</div>

<div class="col">

```sh
git pull <repository> <branch>
```
</div>

</div>

----

<section data-background="#eee">

## Command (6): Git push
<div class="container">

<div class="col">
<p>
- Update remote refs along with associated objects.
</p>
</div>

<div class="col">

```sh
git push <repository> <branch>
```
</div>

</div>

----

<section data-background="#eee">

## Command (7): Git Remote
<div class="container">

<div class="col">
<p>
- Manage set of tracked repositories
</p>
</div>

<div class="col">

```sh
git remote <command> <args>
# For example:
git remote add upstream https://github.com/SWE-265P/W2020/
```
</div>

</div>

----

<section data-background="#eee">

## Some other useful commands!

+ `git log` - Show commit logs
+ `git status` - Show the working tree status

----

## Demo time!

----

<section data-background="#eee">

## Keeping your local repository up to date

<div class="container">

<div class="col">

1. Fork the repository
2. Clone the repository
3. Add remote repostory (i.e., upstream)
4. Pull upstream changes to local repo

</div>

<div class="col">

```sh
git clone <url>
git remote add upstream https://github.com/SWE-265P/W2020/

# I recommend pulling the upstream changes to your master
# After that merge them in your branch.
git pull upstream master
```
</div>

</div>

----


## Some final words of advice

1. <span class="fragment">Work in branches.</span>
2. <span class="fragment">Write useful commit messages.</span>
3. <span class="fragment">Break commits up in logical pieces.</span>
4. <span class="fragment">And finally,...</span> <span class="fragment">DON'T BREAK THE MASTER!</span>

----

## Resources

+ Tutorials:
    + [Git tutorials](http://schacon.github.io/git/gittutorial.html)
    + [Git Workflow tutorials](http://schacon.github.io/git/gitworkflows.html)
    + [Workflow Fork PullRequest](https://gist.github.com/Chaser324/ce0505fbed06b947d962)

- Lecture Slides:
    - [Washington Lecture](https://courses.cs.washington.edu/courses/lectures/390aGitIntro_12au)

- Videos:
    - [Git & GitHub Crash Course For Beginners](https://www.youtube.com/watch?v=SWYqp7iY_Tc)

- Extra resources for a more technical:
    - [Git Magic](http://www-cs-students.stanford.edu/~blynn/gitmagic/index.html)
    - [Git for Computer Scientists](https://eagain.net/articles/git-for-computer-scientists/)

