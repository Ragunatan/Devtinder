const admin = require('express')
const router = admin.Router()

router.get('/add-product',(req,res,next) =>{
    res.send(`<form action ="/admin/product" method ="POST">
        <input type = "text" name="name" placeholder ="Title">
        <input type = "number" name="Size" placeholder ="Size">
        <button type="submit">Add product</button>
        </form>`)
})

router.post('/admin/product' , (req,res,next) =>{
    console.log(req.body)
    res.redirect('/')
})

module.exports = router  