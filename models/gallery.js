var koneksi = require('../koneksi'); const Sequelize = require('sequelize'); const galleryModel = koneksi.define('gallery',
    {
        id: {
            type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true
        }, namafoto: {
            type: Sequelize.STRING,
        }, gambar: {
            type: Sequelize.STRING,
        },
    },
    {
        freezeTableName: true
    }
);
module.exports = galleryModel;