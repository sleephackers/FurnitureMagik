# FurnitureMagik
A webpage that displays all the products under the chosen Furniture Category.

Project Details:

Backend: Backend is done using ExpressJS and Node JS.
Database: MySQL.
Frontend: Frontend is done using HTML and Javascript along with DOM Manipulation.
Only one checkbox can be checked as there is only one category tpe in the database therefore it would be obselete.
Even if two are checked it is ignored.
But two categories can be added to database but it will badly slow down the process(googled it).But it will still work as my SQL Query is : SELECT* FROM products WHERE Category LIKE "%{string}%";

The % checks if the string is included in the database ignoring the other string.SO itll work even for multiple categories.
