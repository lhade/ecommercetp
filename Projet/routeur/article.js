const express = require('express')
const routeur = express.Router()
const { getAllArticles, getArticleById } = require('../model/article')

routeur.get('/', (req, res) => {
    getAllArticles().then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json(err)
    })
})

routeur.get('/:id', (req, res) => {
    getArticleById(req.params.id).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json(err)
    })
})

module.exports = routeur