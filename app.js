const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

app.use(morgan('combined'))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });

app.get("/", (req, res) => {
    
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'roshini',
        password: 'rose',
        database: 'furnitures'
      })
    
      const queryString = "SELECT * FROM products GROUP BY Category"
      connection.query(queryString, (err, rows, fields) => {
        if (err) {
          console.log("Failed to query for products: " + err)
          res.sendStatus(500)
          return
          // throw err
        }
    
        console.log("I think we fetched products successfully")
    
      //   const products = rows.map((row) => {
      //     return {firstName: row.first_name, lastName: row.last_name}
      //   })
    
        res.json(rows)
      })

  })

  app.get('/product/:type', (req, res) => {
    console.log("Fetching product of type: " + req.params.type)
  
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'roshini',
      password: 'rose',
      database: 'furnitures'
    })
  
    const Category = req.params.type
    const queryString = "SELECT * FROM products WHERE Category LIKE ? "
    var Category2="%"+Category+"%"
    connection.query(queryString,[Category2], (err, rows, fields) => {
      if (err) {
        console.log("Failed to query for products: " + err)
        res.sendStatus(500)
        return
        // throw err
      }
  
      console.log("I think we fetched products successfully")
  
    //   const products = rows.map((row) => {
    //     return {firstName: row.first_name, lastName: row.last_name}
    //   })
  
      res.json(rows)
    })
  
    // res.end()
  })
  
  
//   app.get("/prodcuts", (req, res) => {
//     var user1 = {firstName: "Stephen", lastName: "Curry"}
//     const user2 = {firstName: "Kevin", lastName: "Durant"}
//     res.json([user1, user2])
//   })

app.listen(1611, () => {
    console.log("Server is up and listening ")
})