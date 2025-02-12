import { Model, DataTypes } from "sequelize";

class Category extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,  // Correção: use DataTypes.STRING
        }, 
        {
            sequelize,  // Corrigido: passar a instância do Sequelize
            modelName: 'Category'  // Opcional, mas recomendado
        });
    }
}

export default Category;
