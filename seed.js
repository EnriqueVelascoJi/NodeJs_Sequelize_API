const sequelize = require('./database/db');
const Post = require('./models/Post');
const User = require('./models/User');
const Address = require('./models/Address');
require('./database/associations');

// Usuarios
const users = [
    { name: "Anton", email: "azr@azr.es", age: 18, role: 0 },
    { name: "Pepe", email: "pepe@gmail.com", age: 38, role: 1 },
    { name: "Lucia", email: "lucia@hotmail.com", age: 88, role: 0 },
];

// Direcciones
const addresses = [
    { street: "Calle de la vida 2", emailUser: "azr@azr.es" },
    { street: "Debajo del puente s/n", emailUser: "pepe@gmail.com" },
    { street: "Isla de Tabarca, 5", emailUser: "lucia@hotmail.com" },
];

// Entradas
const posts = [
    { title: "Foo", body: "Bar 1", emailUser: "azr@azr.es" },
    { title: "Foo", body: "Bar 2", emailUser: "azr@azr.es" }, 
    { title: "Title", body: "Bar 3", emailUser: "azr@azr.es" },
    { title: "Yo que se", body: "Bar 4", emailUser: "azr@azr.es" }, 
    { title: "Me da igual", body: "Bar 5", emailUser: "lucia@hotmail.com" }, 
    { title: "Todo", body: "Bar 6", emailUser: "pepe@gmail.com" }, 
    { title: "Foo", body: "Bar 7", emailUser: "lucia@hotmail.com" }, 
];


const insertarDatos = async() => {
    await sequelize.authenticate({ force: false }).then(() => {
        // Conexión establecida
        console.log("Conexión establecida...");
    });
    // // await users.forEach(async user => await User.create(usenoder));
    // // await addresses.forEach(async address => await Address.create(address));
    // await posts.forEach( async post => await Post.create(post));

    
}

insertarDatos();