const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My First App</title>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
            font-family: Arial, sans-serif;
          }
          h1 {
            font-size: 48px;
            color: #333;
          }
        </style>
      </head>
      <body>
        <h1>Hello Sir, What Are You Doing? 😄<br>Codingwale</h1>
      </body>
    </html>
  `)
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})

