import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ mensaje: 'Mostrando todos los usuarios' });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mensaje: `Ruta GET de usuarios con el ID ${id}` });
});

router.post('/', (req, res) => {
  res.json({ mensaje: 'Usuario creado correctamente' });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mensaje: `Ruta PUT de usuarios con el id ${id}` });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mensaje: `Ruta DELETE de usuarios con el id ${id}` });
});

export default router;
