### Front End - Client Side
[Browser]
    - Chrome, Firefox, Opera mini
    [UI-Design-Frameworks] - Bootstrap (Bootswatch), Semantic-ui, Fomatic-ui, Materilize.css, Burma, Zurb-Foundation, Skeleton
    [PAGES] - home.ejs
            - signup.ejs
            - login.ejs



### Server Side
[Machine -  Web Server]
   ✅ * Initialize Nodejs in the project folder to create your package.json file - npm init
   ✅ * Create app.js which is your server file
    * Install dependencies / packages 
       ✅ * express {
           ✅ * In app.js setup your express server and port [3200] on which it listens
       }
        * ejs {
           ✅ * install Ejs
           ✅ * in app.js instruct the server to set a 'view engine' 'ejs' that will help us to send pages to the client on the browser
           ✅ * In the project folder the create 'views folder' from which our server will be looking for our pages to serve the client
           ✅ * Create a public folder and put in our static files, including - css, js, images
           ✅ * Instruct app to 'use' public folder and fetch all the static files we need to use in our app
        }
        * [Database-packages] - npm install mongoose, mongodb, mssl
           ✅ * install mongoose 
           ✅ * In app.js require mongoose package and connect to the mongodb server using the mongoose variable
            * Create a database 'schema' and 'model' for users



### Database Server
[Machine - Database Server]
    * Mongodb
        - MongoDB Compass