const express = require('express')
const app = express()
const path = require('path')
const convert = require('./lib/convert')
const apiMoney = require('./lib/apiMoney')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async(req, res) => {
    const cotacao = await apiMoney.getCotacao()
    res.render('home',{
        cotacao
    })
})
app.get('/cotacao', (req, res) => {
    const { cotacao, quantidade } = req.query
    if (cotacao && quantidade) {
        const conversao = convert.toMoney(convert.convert(cotacao, quantidade))
        res.render('cotacao', {
            error: false,
            conversao,
            cotacao,
            quantidade
        })
    } else {
        res.render('cotacao', {
            error: 'Valores Invalidos!'
        })
    }
})

app.listen(3000, err => {
    if (err) {
        console.log("Não foi possivel Iniciar!")
    } else {
        console.log("ConvertMyMoney está Online!")
    }
})