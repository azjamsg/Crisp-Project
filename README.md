<h2>Crisp Project - Connecting Frontend with Backend</h2>
This is a expense tracker project that connects frontend with backend and an existing database using API Postman <br>
The database used is locked and under property of NUS FinTech Lab <br>
This project was run on visual studio code <br>
<br>There are mainly 3 folders: backend, database and frontend

<h3>To get started:</h3>

On terminal:
1. git clone https://github.com/Chewzhiyan/Crisp-Project.git
2. cd Crisp-Project (To get into the folder/directory)
3. git init

<h3>Crsip Backend</h3>
<p>Connection to the database by executing query</p>
<p>You are required to install node modules in this folder before MYSQL can run</p>

On terminal:
1. cd Crisp-Backend (To get into the folder/directory)
2. npm install --save mysql express body-parser cors

To run MSYQL on terminal:
1. cd Crisp-Backend (To get into the folder/directory)
2. node main.js

<h3>Crsip Database-SQL</h3>
MYSQL Query were formulated in the files to generate different type of data output<br>

<h3>Crsip Frontend</h3>

<p>The webpages are connected with the backend where datas are exposed through API and require MYSQL to run for data to appear on the website.
However, as the database is locked under property of NUS FinTech Lab, MYSQL might not run for those without an access.</p>

There are 3 pages for the website, mainly using html, css and javascript: <br>

1. Login page (index.html + login.js)
2. Overview page (overview.html + script1.js)
3. Detailed page (detailTrans.html + script1.js)
4. Main stylesheet: style1.css 


