import { Model, DataTypes, Sequelize } from "sequelize";

class Product extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,  // Correção: use DataTypes.STRING
            price: DataTypes.INTEGER,
            path: DataTypes.STRING,
            url: {
                type: Sequelize.VIRTUAL,
                get() {
                    return `http://localhost:3001/product-file/${this.path}`;
                }
            }
        }, 
        {
            sequelize,  // Corrigido: passar a instância do Sequelize
            modelName: 'Product'  // Opcional, mas recomendado
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Category, {
            foreignKey: 'category_id',
            as: 'category'
        });
    }
}

export default Product;
