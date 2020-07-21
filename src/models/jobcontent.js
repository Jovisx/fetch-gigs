const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  const jobContent = sequelize.define('jobcontent', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    title : {
      type: Sequelize.STRING(1024),
      allowNull: true
    },
    link : {
      type: Sequelize.STRING(1024),
      allowNull: true
    },
    description : {
      type: Sequelize.TEXT,
      allowNull: true
    },
    pubDate : {
      type: Sequelize.STRING(1024),
      allowNull: true
    },
    guid : {
      type: Sequelize.STRING(1024),
      allowNull: true
    },
    isFavorite: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  }, {
    timestamp: true
  });

  return jobContent;
};
