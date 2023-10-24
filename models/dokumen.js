var koneksi = require('../koneksi'); 
const Sequelize = require('sequelize'); 
const dokumenModel = koneksi.define('dokumen',
    {
        id: {
            type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true
        }, namadokumen: {
            type: Sequelize.STRING,
        }, gambar: {
            type: Sequelize.STRING,
        },
    },
    {
        freezeTableName: true
    }
);
module.exports = dokumenModel;