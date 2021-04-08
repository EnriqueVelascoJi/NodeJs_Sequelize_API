const express = require('express');
const morgan = require('morgan');
const sequelize = require('./database/db');
const bodyParser = require('body-parser');

//Associantions
require('./database/associations');

//Definimos el puerto
const PORT = process.env.PORT || 3000;
const app = express();


//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


//Rutas del proyecto
app.use('/api/v1.0/posts/', require('./routes/post'));
app.use('/api/v1.0/users/', require('./routes/User'));
app.use('/api/v1.0/addresses/', require('./routes/Address'));


//Inicialización del servidor
app.listen(PORT, async () => {
    console.log("Server running on port: ", PORT);

    //Conexión a la base de datos
    try { 
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        //True para borrar las tablas y editar los modelos
        //False para ingresar datos y que no se borren los registros de las tablas
        await sequelize.sync({force: false});
        console.log("All models were synchronized successfully.");

      } catch (error) {
        console.error('Unable to connect to the database:', error);
      } 
}); 