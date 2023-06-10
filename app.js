import express from 'express';
import { mapDB } from './web/backend/mapDB.mjs';

// import { createfullmap } from './web/backend/createfullmap';

const app = express();
const port = 3000
app.get('/home', (req, res) => {

  res.send('Hello World!')
})

app.get('/test', (req, res) => {

  res.send('Hello World test!')
})

app.get('/db', (req, res) => {
  res.send('you are in db!')
  
  mapDB.init()
  
  // mapDB.create(2,2,"test","demo")
  mapDB.getAll()


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})