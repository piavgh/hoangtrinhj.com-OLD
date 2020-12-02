---
author: Hoang Trinh
date: 2020-12-02 22:49:00+00:00
layout: post
slug: git-fixup-autosquash
title: Better Git with fixup and autosquash
cover: './preview.jpg'
template: post
categories:
- Git
- Tips
tags:
- git
- tips
---

Today I learned a new thing:

> You can automate your rebases with --fixup and --autosquash

## 1. Some explanations

### --fixup & --autosquash

- `git commit --fixup <commit>`: automatically marks your commit as a fix of a previous commit
- `git rebase -i --autosquash`: automatically organize merging of these fixup commits and associated normal commits

Preferably, you won't use it in your `master` / `main` branch, because rebase rewrites history and can create a big mess, mainly if your project has several developers. It rather can be convenient to clean a development branch before merging it in master.

## 2. Example

Take a git repos with a branch `develop`. You intend to commit features A and B:

```bash
$ (develop) git add featureA
$ (develop) git commit -m "Feature A is done"
[develop fb2f677] Feature A is done
$ (develop) git add featureB
$ (develop) git commit -m "Feature B is done"
[develop 733e2ff] Feature B is done
```

Your work is in progress and you find minor mistakes in Feature A : it's time to use `--fixup` option!

```bash
$ (develop) git add featureA
$ (develop) git commit --fixup fb2f677
[dev c5069d5] fixup! Feature A is done
```

Here, you see that GIT automatically retrieved featureA commit message prefixed by fixup!.

All work is done, let's check the log:

```bash
$ (develop) git log --oneline
c5069d5 fixup! Feature A is done
733e2ff Feature B is done
fb2f677 Feature A is done
ac5db87 Previous commit
```

Now, you want to clean your branch before merging it : it's time to use `--autosquash` option!

```bash
$ (develop) git rebase -i --autosquash ac5db87
pick fb2f677 Feature A is done
fixup c5069d5 fixup! Feature A is done
fixup c9e138f fixup! Feature A is done
pick 733e2ff Feature B is done
```

This is still an interactive rebase, so Git will still open an editor session where I can manipulate the commits on our branch.

But, look ... the `--fixup` commit you made is already in the correct place in the list, and already marked with the correct action.

Just Save and Quit, and you'll have this beautiful `git log`:

```bash
$ (develop) git log --oneline
ff4de2a Feature B is done
5478cee Feature A is done
ac5db87 Previous commit
```

> **Note:**
>
> `git rebase i <after-this-commit>` must be launched with as argument the last commit you want to retain as-is, not the first one you want to change.

## 3. Set it as default behavior

Since `git rebase --interactive --autosquash` only picks up on commits with a message that begins `fixup!` or `squash!`, and Git still gives you the chance to to move things around in your editor like a regular interactive rebase, you might be wondering why we don't just use `--autosquash` by default?

Don't worry, Git's got you covered there too. The `rebase.autosquash` setting will enable this useful little feature for all interactive rebases:

```bash
git config --global rebase.autosquash true
```

## 4. Use words, not SHAs

While `--autosquash` made that interactive rebase fairly painless, it could have been even easier.

When I ran the command `git commit --fixup`, I had to tell Git which commit my new changes should be merged with. In the example above I used the first few characters of the commit's SHA - `ac5db87`  - lifted from the output of `git log`, but I could have referred to the commit in any of the various ways Git allows.

The one I reach for most often in this situation is referring to the commit using some text that appears in its commit message: Git will interpret `:/foo` as "the most recent commit that contained the string `foo` in the first line of it's commit message". In our example above, I could have done this:

```bash
git commit --fixup :/second
```

> **Note:**
>
> Because this technique finds the most recent commit that matches the search string, it's not great for finding things a long way back in history, but it's perfect for this kind of situation where we just want to quickly and accurately identify one of the last half dozen commits.

Happy coding!
