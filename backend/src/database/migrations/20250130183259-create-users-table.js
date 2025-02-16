'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {  // criando tabela
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      password_hash: {
        type: Sequelize.STRING,
        allowNull: false
      },

      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }

    });

  },

  async down(queryInterface, Sequelize) { // apaga as tabelas
    await queryInterface.dropTable('users');

  }
};

/**
 * 1:1 = 1 registro em 1 tabela só pode ser relacionado com outro registro em outra tabela. Por ex: "MATRÍCULA"
 * 1:N = 1 produto só pode ter 1 categoria, mas 1 categoria pode ter vários produtos
 * N:N = 1 Usuário pode ter vários cursos em uma faculdade, e o curso pode ter vários usuários
 */
