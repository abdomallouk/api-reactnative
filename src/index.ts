import express from "express"
const app = express()
const port = 3000

app.get('/home', (req, res) => {
    console.log("kjnsjdn");
    
  res.send('Hello sdfsdfsdf!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})