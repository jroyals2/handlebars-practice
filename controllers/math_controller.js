const express = require('express')
const router = express.Router()



router.get('/' , (req, res) => {
    let math = 4 + 5
    res.render('./math/math', {
        math
    })
})

router.get('/add', (req, res) => {
    let num1 = parseInt(req.query.num1)
    let num2 = parseInt(req.query.num2)
    let sum = num1 + num2
    res.render('./math/mathadd', {
        num1: num1,
        num2,
        sum: sum 
    })
} )




module.exports = router