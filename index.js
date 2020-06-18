const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors')
//port
const port = process.env.PORT || 3000;

//middleware
// funciona como una capa de traducción
// oculta para permitir la comunicación
// y la administración de datos.
// Que proporciona servicios a las aplicaciones
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use(require("./routes/routes"));
app.use(cors());
mongoose.connect("mongodb://localhost:27017/shop", (err, res) => {
  if (err) {
    console.log(`Error:${err}`);
  }
  console.log("Conexion establecida");
  app.listen(port, () => {
    console.log(`Esta corriendo en el puerto ${port}`);
  });
});
