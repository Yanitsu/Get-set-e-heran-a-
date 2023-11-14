class person {
    constructor(nome){
        this.nome = nome
    }
    banco(novobanco){
        if (typeof novobanco == "string") {
            this.banco = novobanco
        }
    }

    get banco(){
        return this._banco
    }

    set banco(A){
        if(typeof x == "string"){
            this._banco = A
        }
    }
}

let p1 = new person ("sofia");

p1._banco = "iti"

console.log(`${p1.nome} tem a conta na agencia ${p1._banco}`)