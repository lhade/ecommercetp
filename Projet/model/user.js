const db = require("../data/database");
const jwt = require('jsonwebtoken');

function connectUser(email, pass) {
    return new Promise((resolve, rej) => {
        db.get("SELECT * FROM User WHERE user_mail=?", email, (err, res) => {
            if (err) rej(err)
            if (res && res.pass == pass) {
                const token = jwt.sign({ user: res.email, niveau: res.niveau }, 'ma super clé');
                resolve({ token })
            }
            rej({ mess: "utilisateur ou mot de passe incorrect" })
        })
    })
}
function newUser(email, pass) {
    return new Promise((resolve, rej) => {
        db.run("INSERT INTO User (user_mail,user_psw,user_niveau) VALUES(?,?,0)", [email, pass], function (err, res) {
            if (err) rej(err)
            resolve({ mess: "utilisateur ajouté, bienvenue camarade", id: this.lastID })
        })
    })
}

module.exports = {
    connectUser,
    newUser
}