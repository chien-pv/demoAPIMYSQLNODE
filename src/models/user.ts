import {Sequelize, DataTypes, Model } from "sequelize";
import sequelize from '../config/connectDB';

class User extends Model {

}


User.init({
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }, 
  phone: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  password: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

export default User;