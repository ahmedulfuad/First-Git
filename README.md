# firstgit
Store this only for testing.
I write some gitbash code for the beginners.

01. at first create repository
02. then go to project folder which project would be uploaded
03. in that folder, right click on the mouse and select gitbash here
04. finally a black window is open
05. then do code 

06. First work is initialization
	- $ git init
	
07. add all file from folder
	- $ git add .
	
08. write a comment message about the code
	- $ git commit -m "version 1.0"
	
09. where to send the code
	- $ git remote add origin http://...........
	
10. finally send the code
	- $ git push origin master		// here, remote = origin, branch = master
	
11. to see the uploaded code situation
	- $ git status
	
12. to see the comment  and its time
	- $ git log

13. to download the code from git
	- $ git clone http://............
	
14. after update any file in pc we have to check the status then add it and recomment it.
	suppose the file name is README.md
	- $ git status
	- $ git add README.md
	- $ git commit -m "updated"
	;then see the changes
	- $ git log
	;to update the file from pc to git
	- $ git pull origin master
	;then add updated file to git
	- $ git push origin master
	
15. download git from another branch
	suppose another branch name is secondary
	- $ git clone http://.........-git -b secondary
	;then close the gitbash window and enter the downloaded folder and do its addition, correction & etc.
	
16. to switch master branch to another branch
	at first, see the branch list
	- $ git fetch origin
	then switch
	- $ git checkout <branch-name>
