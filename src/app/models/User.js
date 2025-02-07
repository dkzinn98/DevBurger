import Sequelize, { Model } from "sequelize";

class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            admin: Sequelize.BOOLEAN
        },
        {
            sequelize,
        },
        );
    }
}

export default User;

/* class User extends Model {}

class Pessoa { // criei uma classe "pai" com alguns "objetos"
    andar() {}

    correr() {}
}

class Augustinho extends Pessoa { // aqui como eu dei extends Pessoa, posso herdar os "Objetos" da classe "Pai"
    correrMaisRapido() {
        super.correr()
    }
}
*/
