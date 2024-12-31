const express = require('express')

const bodyparser  = require('body-parser')

const app = express()

app.use(bodyparser.urlencoded({extended:false}))

app.use('/add-product',(req,res,next) =>{
    res.send(`<form action ="/product" method ="POST">
        <input type = "text" name="title" placeholder ="Title">
        <input type = "number" name="Size" placeholder ="Size">
        <button type="submit">Add product</button>
        </form>`)
})

app.post('/product', (req, res,next) =>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/' , (req,res,next) =>{
    res.send('<H1>This is the homepage</H1>')
})

app.listen(3000,() =>{
    console.log('server is running')
}) 