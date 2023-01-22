Product List
This is a small project that allows you to add products to a list .

Used technologies:
-React
-Node
-Express
-Mongoose
-Mongodb
-Bulma
-Multer

Steps to use this repository locally:
Requirements:
-MongoDB
-Visual Studio Code
-Node

Steps:
-Download this repository locally.
-Open the folder in Visual Studio Code.
-Inside the "api" folder add a file call ".env"
-Inside the file add :
    APP_PORT=8081
    APP_HOST=http://localhost
    DB_NAME=store
    DB_PORT=27017
    DB_HOST=localhost
-Inside the "client" folder add a file call ".env"
-Inside the file add :
    REACT_APP_BASE_URL= http://localhost:8081/v1

-Save the changes.
-In the directory o each folder execute the comand "npm i"
-Open a new terminal and execute mongod
-Open one terminal with the api folder directory and execute "npm run start"
-Open other terminal with the cliente folder directory and execute "npm start" 