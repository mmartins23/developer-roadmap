# Branch Introduction

Branches allow you to develop features, fix bugs, or safely experiment with new ideas in a contained area of your repository.

You always create a branch from an existing branch. Typically, you might create a new branch from the default branch of your repository. You can then work on this new branch in isolation from changes that other people are making to the repository. A branch you create to build a feature is commonly referred to as a feature branch.

![Branches](https://wac-cdn.atlassian.com/dam/jcr:a905ddfd-973a-452a-a4ae-f1dd65430027/01%20Git%20branch.svg?cdnVersion=1340)


***

## Working with branches

The `git branch` command in Git is used to manage branches within a repository. Here are some common use cases and options for the `git branch` command:

### View Existing Branches:

To list all existing branches in your Git repository, you can use:

```bash
git branch
```

This will display a list of local branches, with the current branch highlighted.

### Create a New Branch:

To create a new branch, you can use the following command:

```bash
git branch branch_name
```

Replace `branch_name` with the desired name for your new branch. However, creating a branch alone does not switch to it; it only creates the branch.

### Switch to a Branch:

To switch to an existing branch, use the `checkout` command:

```bash
git checkout branch_name
```

Alternatively, you can combine branch creation and switching in one step using the `-b` option:

```bash
git checkout -b new_branch
```

This creates and switches to a new branch named `new_branch`.

### Rename a Branch:

To rename a branch, you can use the `-m` option:

```bash
git branch -m new_branch_name
```

This renames the current branch to `new_branch_name`.

### Delete a Branch:

To delete a branch, use the `-d` option. Make sure you are not on the branch you want to delete, or use the `-D` option to force deletion:

```bash
git branch -d branch_to_delete
```

or

```bash
git branch -D branch_to_delete
```

### View Remote Branches:

To see a list of remote branches (branches on the remote repository), you can use:

```bash
git branch -r
```

### View All Branches (Local and Remote):

To see a combined list of both local and remote branches, use:

```bash
git branch -a
```

These are some of the common use cases for the `git branch` command. Depending on your workflow, you may use additional options or combinations to manage branches effectively.