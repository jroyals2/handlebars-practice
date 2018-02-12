const express = require('express')
const app = express()
const hbs = require('hbs')
const mathController = require('./controllers/math_controller.js')

app.use(express.static(`${__dirname}/public`))
app.set("view engine", 'hbs')


app.use('/math', mathController)
app.get('/', (req, res) => {
    res.send("I found you!")
})



const port = process.env.PORT || 3000
app.listen( port, () => {
 console.log('app is listening on port ' + port)
})