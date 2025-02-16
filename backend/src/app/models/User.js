import Sequelize, { Model } from "sequelize";
import bcrypt from 'bcrypt';

class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
            admin: Sequelize.BOOLEAN
        },
            {
                sequelize,
            },
        );

        this.addHook('beforeSave', async (user) => {
            if (user.password){
                user.password_hash = await bcrypt.hash(user.password, 12) // quanto maior o numero, maior a força da criptografia.
            }
        });

        return this;
    }

    async checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
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
