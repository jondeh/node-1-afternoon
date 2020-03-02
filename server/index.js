const express = require('express')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express()

const port = 5050
app.use(express.json())

app.get('/api/products', getProducts)
app.get('/api/product/:id', getProduct)


app.listen(port, () => {
    console.log(` RUNNING SERVER ${port}`)
})


