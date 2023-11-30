# Git Introduction

Git is a software that allows you to keep track of changes made to a project over time. Git works by recording the changes you make to a project, storing those changes, then allowing you to reference them as needed. 

Git also makes collaboration easier, allowing changes by multiple people to all be merged into one source. 

![GIT](https://www.nobledesktop.com/image/blog/git-branches-merge.png)

***

## Initializing a new repository

The `git init` command is used to initialize a new Git repository. When you run this command, Git sets up all the necessary files and directories for version control in the current working directory, creating a new repository.


To summarize, `git init` is a one-time command used to set up a new Git repository in a project directory. It prepares the environment for version control and establishes the initial configuration needed for tracking changes and managing project history.

**

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