module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Ensures usernames are unique
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Ensures email addresses are unique
      },
    });
  
    // Add any additional methods if needed, for example, to hash the password before saving
    return User;
  };
  