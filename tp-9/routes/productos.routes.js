
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ mensaje: 'Mostrando todos los productos' });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mensaje: `Ruta PUT de productos con el id ${id}` });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mensaje: `Ruta DELETE de productos con el id ${id}` });
});

export default router;
