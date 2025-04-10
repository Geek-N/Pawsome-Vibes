const Sequelize = require('sequelize');
const config = require('../config/config');
const fs = require('fs');
const path = require('path');

// Check if the DATABASE_URL exists (e.g., in production on Render)
const isProd = process.env.NODE_ENV === 'production'; // You can adjust this condition based on your environment
const dbUrl = process.env.DATABASE_URL;

let sequelize;

// If DATABASE_URL exists, use it for production (or wherever you're deploying the app)
if (dbUrl) {
  sequelize = new Sequelize(dbUrl, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false, // Change to `true` to log SQL queries for debugging
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Allow self-signed certificates (common in cloud providers)
      },
    },
  });
} else {
  // Otherwise, use the local configuration from the config file
  const environment = process.env.NODE_ENV || 'development';
  const configObject = config[environment];
  sequelize = new Sequelize(configObject.database, configObject.username, configObject.password, configObject);
}

const db = {};

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
