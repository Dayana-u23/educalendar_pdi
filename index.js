import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: "Bienvenido a la API de 7°2°" });
});

app.get('/productos', (req, res) => {
  res.json({ mensaje: "Esta es la ruta GET de mi entidad productos" });
});

app.post('/productos', (req, res) => {
  res.json({ mensaje: "Esta es la ruta POST de mi entidad productos" });
});

app.put('/productos', (req, res) => {
  res.json({ mensaje: "Esta es la ruta PUT de mi entidad productos" });
});

app.delete('/productos', (req, res) => {
  res.json({ mensaje: "Esta es la ruta DELETE de mi entidad productos" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
