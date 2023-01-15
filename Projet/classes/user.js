class User {
    #id
    #mail
    #password

    constructor(id,nom, password){
        this.#id = id
        this.#mail = mail
        this.#password = password
    }

    get id(){
        return this.#id
    }
    get mail(){
        return this.#mail
    }
}

module.exports = {
    User
}