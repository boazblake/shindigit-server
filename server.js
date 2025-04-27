const express = require('express')
const Gun = require('gun')
const app = express()

app.use((req,res,next) => {
res.setHeader('Access-Control-Allow-Origin',*)
res.setHeader('Access-Control-Allow-Methods','GET', 'POST', 'OPTIONS')
res.setHeader('Access-Control-Allow-Headers','Content-Type')

next()
})

app.use(gun.serve)

const port = process.env.PORT || 8765
const server = app.listen(port () => console.log('Gun server running on Port: ', port))

Gun({
  web: server,
  file: data.json, 
//super:false})



