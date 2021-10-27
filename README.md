In the file we find a simple php api (index.php) to send information to a react app that will show the information in the menu of a sushi restaurant.

First of all, go to "nodejs-php" folder and install express to run php API with node js:
-  cd nodejs-php
-  npm install express --save

Now we can start the php server:
-  node node.js

Then the server will be listening on port 5000.

After this open a new shell and go to the "menu-sushi" folder to install node dependencies and run the react app:
-  npm install
-  npm start

Finish... Now you can send your order and eat a sushi!
