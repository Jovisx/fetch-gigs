'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require("sequelize");
const config = require('../config');

const db = {};
const DBConfig = config.db;

const dbOptions = {
  port: DBConfig.port,
  host: DBConfig.host,
  dialect: DBConfig.dialect,
  logging: DBConfig.logging,
};

dbOptions.pool = DBConfig.pool;

const sequelize = new Sequelize(
  DBConfig.database,
  DBConfig.username,
  DBConfig.password,
  dbOptions
);

fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach((file) => {
    const sModel = require(path.join(__dirname, file))(sequelize); //eslint-disable-line
    const model = sModel;
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;