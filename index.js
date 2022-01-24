
const express = require("express");
const path = require("path");
const app = express();
//Motor de vistas HBS (Express)
const hbs = require('hbs');

const categoria = require("./dataRestaurant/categorias");
const menuItem = require("./dataRestaurant/menu-items");

require('./hbs/helpers');

const publicPath = path.resolve(__dirname, 'public');

//Archivos estaticos --> disponibles
app.use(express.static(publicPath));

app.set('view engine', 'hbs');

//Registro de parciales para visualizacion
hbs.registerPartials(__dirname + '/views/partials');

//Datos en footer
app.get("/", (req,res)=>{
    res.render('home',{
        nombre:"Andres S. Lucero", 
        categoria, menuItem  
    }
    );
})

//Puerto 
const port = process.env.PORT || 3000;
//server
const server = app.listen(port, () => {
	console.log(`Servidor corriendo en http://localhost:${port}`);
});
