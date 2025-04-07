module.exports = {
    development: {
      username: 'postgres',
      password: 'test',
      database: 'your_database_name',
      host: 'localhost',
      dialect: 'postgres',
    },
    production: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: 'postgres',
    },
  };