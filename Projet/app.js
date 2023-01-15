const express = require('express')
const userRouteur = require('./routeur/user.js')
const articleRouteur = require('./routeur/article.js')
const db = require('./data/database')

const app = express();
const PORT = 3000;

app.set('views', './vues');
app.set('view engine', 'ejs');
app.use(express.static("./assets"))


app.get("/", (req, res) => {
    res.render('app')
    })

app.use('/user', userRouteur)
app.use('/article', articleRouteur)

    app.listen(PORT, (error) =>{
        if(!error)
            console.log("ça roule sur le port "+ PORT + " et pas le port de marseille")
        else
            console.log("erreur + ratio + nul", error);
        }
    );