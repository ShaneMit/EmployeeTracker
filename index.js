// const express = require('express')
// const app = express()

const mysql = require('mysql2')

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'rootroot',
  database: 'employee_db'
})

// app.use(express.json())

// app.get('/departments', (req, res) => {
//   db.query(
//     'SELECT * FROM `department`',
//     function (err, results) {
//       console.log(results)
//       return res.json(results)
//     }
//   )
// })

// app.get('/roles', (req, res) => {
//   db.query(
//     'SELECT * FROM `role`',
//     function (err, results) {
//       console.log(results)
//       return res.json(results)
//     }
//   )
// })

// app.get('/employees', (req, res) => {
//   db.query(
//     'SELECT * FROM `employee`',
//     function (err, results) {
//       console.log(results)
//       return res.json(results)
//     }
//   )
// })

// app.listen(3000, () => console.log('http://localhost:3000'))