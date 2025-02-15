import Sequelize, { Model } from 'sequelize';

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class Category extends Model {
	static init(sequelize) {
		// biome-ignore lint/complexity/noThisInStatic: <explanation>
		super.init(
			{
				name: Sequelize.STRING,
				path: Sequelize.STRING,
				url: {
					type: Sequelize.VIRTUAL,
					get() {
						return `http://localhost:3001/category-file/${this.path}`;
					},
				},
			},
			{
				sequelize,
			},
		);

		return this;
	}
}

export default Category;
