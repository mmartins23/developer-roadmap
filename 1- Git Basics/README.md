# Git Introduction

Git is a software that allows you to keep track of changes made to a project over time. Git works by recording the changes you make to a project, storing those changes, then allowing you to reference them as needed. 

Git also makes collaboration easier, allowing changes by multiple people to all be merged into one source. 

![GIT](https://www.nobledesktop.com/image/blog/git-branches-merge.png)

### Table of Contents
1. [Initializing a new repository](#initializing-a-new-repository)
2. [The Staging Area & Your First Commit](#the-staging-area--your-first-commit)
3. [When to Commit](#when-to-commit)
4. [Summary](#summary)

***

## Initializing a new repository

To create a new repo, you'll use the `git init` command. `git init` is a one-time command you use during the initial setup of a new repo. Executing this command will create a new `.git` subdirectory in your current working directory. This will also create a new main branch. 

```git
git init
```

***

## The Staging Area & Your First Commit

The staging area in Git is an intermediate step between your working directory and the Git repository. It's where you can selectively choose which changes you want to include in your next commit. The staging area allows you to craft well-organized and intentional commits. Here's how you use the staging area and make your first commit:

![Staging Area](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqPFuQp6V1-2oFCKStF5jLScNyLLBBo_tIiw&usqp=CAU)

1. **Edit Files in Your Working Directory:**
   Make changes to files in your project as needed.

2. **Use `git add` to Stage Changes:**
   Use the `git add` command to add specific changes to the staging area. For example:
   ```bash
   git add filename
   ```
   This command stages changes made to the specified file.

   To stage all changes, you can use:
   ```bash
   git add .
   ```
   This stages all changes in the working directory.

3. **Review Staged Changes:**
   To see what changes are staged and ready to be committed, you can use:
   ```bash
   git status
   ```
   Staged changes will be listed under "Changes to be committed."

4. **Commit Changes:**
   Once you are satisfied with the staged changes, you commit them using:
   ```bash
   git commit -m "Your commit message here"
   ```
   This creates a commit with the changes you staged. The `-m` flag allows you to add a commit message directly in the command line.

5. **Verify Your Commit:**
   To verify that your commit was successful, you can use:
   ```bash
   git log
   ```
   This shows a log of all commits, including the one you just made.

These steps demonstrate the basic workflow of using the staging area to prepare and commit changes in Git. The staging area provides a way to organize and structure your commits, allowing you to make clear and meaningful contributions to your project's history.

***

## When to commit

Git works best, and works in your favor, when you commit your work often. Instead of waiting to make the commit perfect, it is better to work in small chunks and keep committing your work. If you are working on a feature branch that could take some time to finish, it helps you keep your code updated with the latest changes so that you avoid conflicts.

Also, Git only takes full responsibility for your data when you commit. 

***

## Summary

Use Git commands to help keep track of changes made to a project:
* `git init` creates a new Git repository.

* `git status` inspects the contents of the working directory and staging area.

* `git add` adds files from the working directory to the staging area.

* `git diff` shows the difference between the working directory and the staging area.

* `git commit` permanently stores file changes from the staging area in the repository.

* `git log` shows a list of all previous commits.

***