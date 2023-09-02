const { DataTypes } = require('sequelize');

module.exports = (database) => {
   database.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         allowNull : false ,
         primaryKey  : true,
         autoIncrement :true
         },
         name: {
            type :DataTypes.STRING(250),
            allowNull : false 
         },
         status: {
            type : DataTypes.ENUM("Alive","Dead","Unknown"),
            allowNull : false 
         },
         species: {
            type : DataTypes.STRING(164),
            allowNull :false
         },
         gender: {
            type : DataTypes.ENUM ("Male", "Female" ,"Genderless","Unknown"),
            allowNull: false
         },
         // origin:{
         //    type : DataTypes.STRING,
         //    allowNull : false
         // },
         image:{
            type : DataTypes.STRING,
            allowNull : false 
         }
   }, { timestamps: false });
};
