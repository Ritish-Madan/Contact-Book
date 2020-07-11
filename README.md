# Contact Book

In this porject, I have built a contact book as the kickstart to my learning towards Node.JS. In the project, I have totally focused on the Back-end of the app, instead of beatufying the same. 

#### Dependencies

Well I have included the JSON file from which you can trace back the dependencies used in the project. So far the dependencies are:

1. **express** version 4.17.1
2. **mongoose** version 5.9.20
3. **nodemon** version 2.0.4
4. **ejs** version 3.1.3

These above are the dependencies used in the project. I have **used the MongoDB database** and accessed the same with Mongoose. The **view engine used is ejs** and express is the server side I have used. **Nodemon is actually an extension used so that when I make the changes to my JavaScript the server automatically refreshes and runs**, it is not necessary but something useful for developers.

### Installing Dependencies

As the files contained, there is a file named **package.json** which contains all the dependencies used in the project and makes the projects easier to share among the team or to other developers. 
With the help of the **package.json** you can install all dependencies with just a single command in the terminal `npm install` *(exclude the quotation mark)*.

**Problem you might face**
1. **Unable to install the dependencies** :- Make sure you are directed to the folder in the terminal where the **package.json** file is present, other wise your terminal won't be able to find the **package.json** file, and will throw an error.

2. **Internet connectivity error** :- Make sure you are connected to internet and have sufficient amount of data required to download the dependency files. As the files are not present on the local system they need to be downloaded, which requires internet connectivity.

### How to run the contact book? 

Once you have downloaded the dependencies, you are now all set to run the **Contact Book**, if not just do install all the dependencies first as the steps mentioned above. 

Make sure you are in the folder where **package.json** is placed. Well to run the same the package.json file is not required but there is the file where main **index.js** file is placed. 

**Running with node** : simply type **`node ./index.js`** and you are good to go. In this the server needs to be stopped and restarted everytime when you make any changes in Javascript, without doing so the changes won't be reflected. This is where **nodemon** comes into action, it automates this process for you.

**Running with nodemon** : I have included nodemon in **package.json** file, in server for ease to access the **contact book** with nodemon, just simply type  `npm run server`
in the terminal and **VOILA! the nodemon will be started and your server too**.

**Note : Make sure to run all these commands where your index.js (main file) is present, landmark of this file for now is package.json. 
