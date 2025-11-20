const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const uri = 'mongodb+srv://carloschaconcazallas0_db_user:carloszz156@basededatossorteo.qmdpcvv.mongodb.net/?appName=BaseDeDatosSorteo';
//http://localhost:3000/

// Create a MongoClient instance
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect to MongoDB
    await client.connect();

    // Select database and collection
    const db = client.db('Sorteo');
    const collection = db.collection('users');

    // Middleware to parse JSON
    app.use(express.json());

    // Servidor de archivos estáticos
    app.use(express.static('public'));

    // Metodo Get
    app.get('/users', async (req, res) => {
      const users = await collection.find().toArray();
      res.json(users);
      console.log(users);
    });

    // Metodo Post
    app.post('/users', async (req, res) => {
      console.log("Recibiendo solicitud para añadir usuario");
      const newUser = req.body;
      await collection.insertOne(newUser);
      res.json({ message: 'User added successfully', user: newUser });
      console.log("Usuario añadido a la base de datos");
    });

  // Metodo para redirigirme a una pagina u otra 
  app.get('/', (req, res) => {
  let fechaSorteo = new Date("2025-12-19T14:00:00");
  let  fechaActual = new Date();
  
  if (fechaActual<fechaSorteo){
    res.redirect("/GanadorSorteo");
  } else {
    res.redirect("/Inscripcion");
  }
  });

   // Ruta para la página de Inscripción
    app.get('/Inscripcion', (req, res) => {
    res.sendFile(__dirname + '/public/Inscripcion/Inscripcion.html');
  });

  // Ruta para la página del Ganador del Sorteo
    app.get('/GanadorSorteo', (req, res) => {
    res.sendFile(__dirname + '/public/GanadorSorteo/Sorteo.html');
  });



    // Start server
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });


  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

main();