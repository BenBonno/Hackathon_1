const express = require('express')
const app = express()
const port = 3000
const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database("./db.sqlite");





app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Country/:id', (req, res) => {
  const CountryId = parseInt(req.params.id); // { userId: '42' }
  const Data = []
console.log(CountryId)
  db.each(`SELECT * FROM countries where CountryId = ${CountryId}`, (err, row) => {
    Data.push(row)
    console.log(row)
  }).wait(() => {
    res.json(Data)
    console.log(Data)
  })
})

app.get('/Region/:id', (req, res) => {
  const RegionID = req.params.id; // { userId: '42' }
  const Data = []

  db.each(`SELECT * FROM cities where RegionID = ${RegionID}`, (err, row) => {
    Data.push(row)
  }).wait(() => {
    res.json(Data)

  })
})
app.get('/City/:name', (req, res) => {
  const nameReq = req.params.name; // { userId: '42' }
  const name = nameReq[0].toUpperCase() + nameReq.slice(1,)
  const Data = []
console.log(req.params)
  db.each(`SELECT * FROM cities where City like "%${name}%"`, (err, City) => {
    const Country = parseInt(City.CountryID)
    db.each(`SELECT * FROM countries where CountryId = ${Country}`, (err, Country) => {
      City.CountryID = Country.Title
      Data.push(City); 
    })


  }).wait(() => {
    res.json(Data)
    console.log(Data)
  })
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
