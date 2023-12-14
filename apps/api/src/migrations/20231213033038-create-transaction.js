'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      payment_proof: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      sub_total: {
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.STRING
      },
      shipment_fee: {
        type: Sequelize.INTEGER
      },
      shipment_method: {
        type: Sequelize.STRING
      },
      isPaymentConfirmed: {
        type: Sequelize.BOOLEAN
      },
      total: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};