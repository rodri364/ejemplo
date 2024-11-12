import express from "express";
import mysql2 from "mysql2";

// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
});

const puerto = 9000;
var app = express();

app.use(express.json());


try {
    const [results, fields] = await connection.query(
      'SELECT * FROM `usuario` WHERE `name` = "Page" AND `age` > 45'
    );
  
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
} catch (err) {
    console.log(err);
}

// Using placeholders
try {
    const [results] = await connection.query(
      'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
      ['Page', 45]
    );
  
    console.log(results);
} catch (err) {
    console.log(err);
}


app.get("/canvas", function (req, res) {
  //select pixel
  // res.json(resultadoConsulta)

  
});

app.post("/usuarios", function (req, res) {
    // buscar estos valores
    
    
    req.body.nombreUsuario;
    req.body.email;
    req.body.contrasena;

    //falta valor
    res.status(400);
    res.send();

    // insertar. 
    // res.status(204);
    // res.send();
});

// conectar base datos

app.listen(puerto, function () {
  console.log(`Aplicación ejemplo, escuchando el puerto ${puerto}!`);
});