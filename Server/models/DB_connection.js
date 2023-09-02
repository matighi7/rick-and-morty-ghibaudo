require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, BDD} = process.env;
const FavoriteModel= require('./Favorite')
const UserModel= require('./User.js');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const url= `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${BDD}`
const database = new Sequelize(
 url,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

FavoriteModel(database);
UserModel (database);

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = database.models;
User.belongsToMany(Favorite, { through: "User_Favorite" })
Favorite.belongsToMany(User, { through: "User_Favorite" })

module.exports = {
   User,
   Favorite,
   conn: database,
};
