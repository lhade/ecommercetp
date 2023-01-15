class Produit{
    #id
    #nom
    #prix
    #description
    #photo
    constructor(id,nom, prix,photo, description){
        this.#id = id
        this.#nom = nom
        this.#description = description
        this.#photo = photo
        this.#prix = prix
    }

    get id(){
        return this.#id
    }
    get nom(){
        return this.#nom
    }
}

module.exports = {
    Produit
}
