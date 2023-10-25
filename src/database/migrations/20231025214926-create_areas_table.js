'use strict';

const { AREA_TABLE } = require('../models/area.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable(AREA_TABLE, {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      areaCode: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      areaName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      observations: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
      }

    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable(AREA_TABLE);

  }
};