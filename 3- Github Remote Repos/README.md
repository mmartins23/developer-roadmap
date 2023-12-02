# How To Push The Code From VS Code To GitHub

Sure, here's a step-by-step guide to push code from Visual Studio Code to GitHub:

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

