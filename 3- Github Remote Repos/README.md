# Github Remote Repository

A GitHub remote repository is a version of a project's code and files stored on GitHub's servers. It serves as a central hub where developers can collaborate, share, and manage the project. Remote repositories enable tasks such as cloning, fetching updates, and pushing changes, facilitating teamwork and version control. The GitHub platform provides tools for hosting, managing, and interacting with remote repositories, making it a key component of collaborative software development.

### Table of Contents

1. [How To Push The Code From VS Code To GitHub](#how-to-push-the-code-from-vs-code-to-github)
   
2. [Push and Pull From Remote Repos](#push-and-pull-from-remote-repos)

3. [Closing Features & Updating the Remote Server](#closing-features--updating-the-remote-server)
 
***

## How To Push The Code From VS Code To GitHub

Here's a step-by-step guide to push code from Visual Studio Code to GitHub:

1. Open your Visual Studio Code project.
2. Open the terminal window in Visual Studio Code. You can do this by clicking on the "Terminal" menu at the top of the screen and selecting "New Terminal".
3. Initialize Git in your project by running the command "git init" in the terminal. This will create a new Git repository for your project. 
    
    ```
    git init
    ```
    
4. Add all the files in your project to the Git repository by running the command "git add ." in the terminal. This will stage all the files in your project for commit.
    
    ```
    git add .
    ```
    
5. Commit the changes by running the command "git commit -m 'Initial commit'" in the terminal. Replace 'Initial commit' with a meaningful commit message.
    
    ```
    git commit -m 'Initial commit'
    ```
    
6. Create a new repository on GitHub.
7. Copy the repository URL provided by GitHub.
8. Add the remote repository URL to your local Git repository by running the command "git remote add origin <repository URL>" in the terminal. Replace "<repository URL>" with the URL you copied in step 7. Push the changes to GitHub by running the command "git push -u origin master" in the terminal. This will push all your committed changes to the master branch of your remote repository on GitHub.

```
git remote add origin https://github.com/mmartins23/react-song-finder.git
git branch -M main
git push -u origin main
```

That's it! Your code should now be pushed to GitHub and you can view it on the GitHub website.

***

## Push and Pull From Remote Repos

In Git, pushing and pulling are essential operations for synchronizing changes between a local repository and a remote repository. Let's dive into the details of each:

![Git Push and Pull Commands](https://cosimameyer.com/images/single-blog/git_flow.png)

### Push:
**Definition:** Pushing in Git means sending your local commits to a remote repository.

**Use Case:**
- When you've made changes in your local repository and want to update the corresponding branch in the remote repository.

**Steps:**
1. **Commit Locally:**
   - Ensure you have committed your changes using `git commit`.

2. **Push to Remote:**
   - Execute the `git push` command to send your committed changes to the remote repository.
     ```bash
     git push <remote_name> <branch_name>
     ```
   - Example: `git push origin main`

3. **Authentication:**
   - You may need to provide your GitHub credentials if it's your first push or if the branch is protected.

**Outcome:**
- Your local changes are now reflected in the remote repository.

### Pull:
**Definition:** Pulling in Git means fetching changes from a remote repository and merging them into your local repository.


**Use Case:**
- When you want to update your local repository with changes made in the corresponding branch of the remote repository.

**Steps:**
1. **Check Current Branch:**
   - Ensure you are on the branch where you want to pull changes.

2. **Pull from Remote:**
   - Execute the `git pull` command to fetch and merge changes from the remote repository.
     ```bash
     git pull <remote_name> <branch_name>
     ```
   - Example: `git pull origin main`

3. **Resolve Conflicts (if any):**
   - If there are conflicting changes, Git will pause and ask you to resolve conflicts manually.

**Outcome:**
- Your local repository is updated with the changes from the remote repository.

**Note:**
- Always pull before you start working on new changes to ensure your local copy is up-to-date.

In summary, pushing is used to share your local changes with a remote repository, and pulling is used to update your local copy with changes from a remote repository. These operations are fundamental to collaborative Git workflows and help maintain a consistent codebase across multiple contributors.

***

## Closing Features & Updating the Remote Server

Closing features and updating the remote server involve completing a feature branch, merging it into the main branch, and then pushing the changes to the remote repository. Here are the steps:

### Closing Features:

1. **Ensure You Are on the Feature Branch:**
   - Before closing a feature, ensure you are on the feature branch.
     ```bash
     git checkout feature_branch
     ```

2. **Merge Feature Branch into Main:**
   - Switch to the main branch and merge the feature branch into it.
     ```bash
     git checkout main
     git merge feature_branch
     ```

3. **Resolve Merge Conflicts (if any):**
   - If there are conflicting changes during the merge, resolve them and commit the changes.

4. **Commit the Merge:**
   - After resolving conflicts, commit the merge changes.
     ```bash
     git commit -m "Merge feature_branch into main"
     ```

5. **Optional: Delete Feature Branch (if not needed):**
   - If the feature branch is no longer needed, you can delete it.
     ```bash
     git branch -d feature_branch
     ```

### Updating the Remote Server:

1. **Push Changes to Remote:**
   - Push the changes, including the closed feature, to the remote repository.
     ```bash
     git push origin main
     ```

2. **Verify on Remote Repository:**
   - Check the remote repository (e.g., on GitHub) to confirm that the changes, including the closed feature, are reflected.

### Complete Example:

```bash
# Ensure you are on the feature branch
git checkout feature_branch

# Merge feature branch into main
git checkout main
git merge feature_branch

# Resolve conflicts if any
# Commit the merge changes
git commit -m "Merge feature_branch into main"

# Optional: Delete feature branch
git branch -d feature_branch

# Push changes to the remote repository
git push origin main
```

These steps help maintain a clean and organized Git history, closing features by merging them into the main branch and updating the remote repository. Always make sure to communicate changes and collaborate effectively with your team when closing features in a shared codebase.

***