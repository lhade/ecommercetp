const db = require("../data/database");

function getAllArticles() {
    return new Promise((resolve, rej)=> {
        db.all("SELECT * FROM Article", (err, res) => {
            if (err) rej(err)
            resolve(res)
        })
    })
}
    function addArticle(nom, desc, prix, photo) {
        return new Promise((resolve, rej) => {
            db.run("INSERT INTO Article (nom,descr,prix,photo) VALUES(?,?,?,?)", [nom, desc, prix, photo], function (err, res) {
                if (err) rej(err)
                resolve({ mess: "Article added", id: this.lastID })
            })
        })
    }

    function updateArticle(id, nom, desc, prix, photo) {
        return new Promise((resolve, rej) => {
            db.run("UPDATE Article SET nom=?,description=?,prix=?,photo=? WHERE id=?", [nom, desc, prix, photo, id], (err, res) => {
                if (err) rej(err)
                resolve({ mess: "Article updated" })
            })
        })
    }
    function deleteArticle(id) {
        return new Promise((resolve, rej) => {
            db.run("DELETE FROM Article WHERE id=?", id, (err, res) => {
                if (err) rej(err)
                resolve({ mess: "Article deleted" })
            })
        })
    }

module.exports = {
    getAllArticles,
    addArticle,
    updateArticle,
    deleteArticle
}