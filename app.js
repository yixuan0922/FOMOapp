import express from 'express';
import { mapDB } from './web/backend/mapDB.mjs';

const app = express();
const port = 3000

app.get('/test', (req, res) => {
  res.send('Hello World!')
})

app.get('/db', (req, res) => {
  res.send('you are in db!')
  
  mapDB.init()
  
  mapDB.create(1,1,"test","test")

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
