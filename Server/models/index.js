const Sequelize = require('sequelize');
const config = require('../config/config');
const fs = require('fs');
const path = require('path');

// Get the environment (default to 'development')
const environment = process.env.NODE_ENV || 'development';
const configObject = config[environment];

// Initialize Sequelize with the appropriate environment settings
const sequelize = new Sequelize(configObject.database, configObject.username, configObject.password, configObject);

// Initialize the database object to hold models
const db = {};

// Read all model files in the current directory and import them
fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js') // Exclude this file from the import
  .forEach((file) => {
    console.log('Loading model:', file); 
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Adding sequelize and Sequelize to the db object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Function to sync the database (altering tables or resetting with force)
const syncDB = async () => {
  try {
    await sequelize.sync({ alter: true }); // You can change this to { force: true } for reset
    console.log('✅ All models were synchronized.');
  } catch (err) {
    console.error('❌ Error syncing models: ', err);
  }
};

// Export the database object and sync function
module.exports = {
  ...db,
  syncDB,
};