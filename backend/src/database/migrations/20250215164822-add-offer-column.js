/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		// Verifica se a coluna já existe antes de adicionar
		const tableInfo = await queryInterface.describeTable("products");
		if (!tableInfo.offer) {
			await queryInterface.addColumn("products", "offer", {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
				allowNull: false,
			});
		}
	},

	async down(queryInterface) {
		// Remove a coluna se ela existir
		const tableInfo = await queryInterface.describeTable("products");
		if (tableInfo.offer) {
			await queryInterface.removeColumn("products", "offer");
		}
	},
};
