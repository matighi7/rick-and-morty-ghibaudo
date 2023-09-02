const { DataTypes } = require('sequelize');

module.exports = (database) => {
   database.define('User', {
      id: {
         type: DataTypes.INTEGER,
         allowNull : false ,
         primaryKey  : true,
         autoIncrement :true
   }, 
   email: {
      type: DataTypes.STRING(1024),
      isEmail: true,
      allowNull : false 
   },
   password: {
      type:DataTypes.STRING,
      allowNull : false 
   } 
 }, { timestamps: false });
};
