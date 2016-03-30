# Marissa's Personal Website


##1) Code

<br> 3.0)  In Terminal run:  ```atom .``` For Windows, just open up atom and use 'Add Project Folder' and select the cloned directory from above.  

This will open the current folder into the Atom text editor. Note the folder structure.  What are you reading now (in browser) is actually a [markdown](https://guides.github.com/features/mastering-markdown/) file: **README.md**.

The main file that gets loaded for the site is **index.html**.
The file that contains the majority of css styling is in **css/main.css**.
Image assets are in **img**.
Javascripts are in **js**.

<br>3.1) Lets view what is there already now. In Terminal (copy/paste):  ```python -m SimpleHTTPServer &```

<br>
this will start a simple little webserver so you can now access the page in your browser at: [http://localhost:8000](http://localhost:8000)

*If you have Windows, get an error, or don't have python, never fear, for now just open index.html manually in your browser, this breaks for certain javascript but will work for this example.*


##1) Git
[Here's a good resource](http://rogerdudler.github.io/git-guide/)

###Merge Conflicts

At this point after a ```git pull``` you may get a message that looks like this:

     CONFLICT (content): Merge conflict in somefile
     Automatic merge failed; fix conflicts and then commit the result.

This is when the fun starts.  How do you fix this?

The cause for merge conflicts is when you edited the exact same line as someone else and git doesn't know how to automatically merge that. So to fix you just need to pick apart the conflict and merge it in.

If you were to do this by hand, git takes the pretty code you wrote and injects terrible "conflict markers" that look like this:

	<<<<<<< HEAD
	var h = 'hello, world';
	=======
	var h = 'Hi!';
	>>>>>>> cb1abc6bd98cfc84317f8aa95a7662815417802d

where the line between  ```<<<HEAD``` and ```====``` is the line/lines of code that are relevant in your file, and between  ```====``` and ```>>>> cb1abc6``` are from the remote repository.  The crazy characters refer to the commit that the change comes from.

Since we've been using Atom so far there is a nice plugin to help visualize this a little better.

  <br> Atom -> Preferences -> Install -> search for merge-conflicts


Once you have your conflict file the way you want it.  Fixed and without any more of the conflict markers.

All you have to do to continue is:  ```git add thefixedfile``` which indicated to git that you have resolved the conflict. Then ```git commit``` with no options will complete the merge and automatically create a commit message.


###Push Your Commits

Now that you've resolved any conflicts you're ready to push to the remote repository!

  <br> ```git push origin gh-pages```

  ```origin``` is the remote you are pushing to and is named origin by default

 ```gh-pages``` is the branch you are pushing. Using the ```gh-pages``` branch lets github know that you would like this code hosted as a static website.

###Done!
[http://marissaallen.github.io/portfolio-site](http://marissaallen.github.io/portfolio-site)


<br>

To stop the python web server process just run:
```pgrep -f SimpleHTTPServer| xargs kill```
