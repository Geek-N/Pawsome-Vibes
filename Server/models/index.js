const sequelize = require('../config/database');
const User = require('./User');
const Affirmation = require('./Affirmation');

const syncDB = async () => {
  await sequelize.sync({ alter: true }); // or { force: true } if you want to reset tables
  console.log('✅ All models were synchronized.');
};

module.exports = {
  sequelize,
  User,
  Affirmation,
  syncDB,
};