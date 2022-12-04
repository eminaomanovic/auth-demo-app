# auth-demo-app
########################################

auth-demo-app is an application made in Spring Boot -backend, React JS- frontend and PostgreSQL - database.

Its goal is to show simple registration and login using JWT token.

Description
=============

* The app contains:
*   1. Registration
*   2. Login
*   3. Logout


Prerequisites
============
1. Git
2. Java JDK: any 11.x version 
3. pgAdmin 
4. PostgreSQL
3. a clone of the https://github.com/eminaomanovic/auth-demo-app repo on your local machine.


Installation and Running
========================
    $ cd backend
    $ mvn clean install
    $ cd ..
    $ cd frontend
    $ npm install
    $ npm start
On backend side it is necessary to adjust application.yml to your credentials as well as to create auth_db database in pgAdmin.
