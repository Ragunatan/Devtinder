const express = require('express')

const adminRoutes = require('./routes/admin.js')

const shopRoutes = require('./routes/shop.js')

const bodyparser  = require('body-parser')

const app = express()

app.use(bodyparser.urlencoded({extended:false}))

app.use(adminRoutes)
app.use(shopRoutes)

app.use((req,res,next) =>{
    res.status(404).send('<h1>Page not found</h1>')
})
app.listen(3000,() =>{
    console.log('server is running')
}) 
