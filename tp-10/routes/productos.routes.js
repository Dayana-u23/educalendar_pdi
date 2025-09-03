import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  try {
    const productos = await prisma.producto.findMany();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const producto = await prisma.producto.findUnique({
      where: { id: parseInt(req.params.id) }
    });
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
});

router.post('/', async (req, res) => {
  const { nombre, descripcion, precio, stock } = req.body;

  if (!nombre || !precio || !stock) {
    return res.status(400).json({ error: 'Faltan campos obligatorios: nombre, precio o stock' });
  }

  try {
    const nuevo = await prisma.producto.create({
      data: {
        nombre,
        descripcion: descripcion || '',
        precio: Number(precio),
        stock: Number(stock)
      }
    });
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto' });
  }
});

router.put('/:id', async (req, res) => {
  const { nombre, descripcion, precio, stock } = req.body;

  if (!nombre || !precio || !stock) {
    return res.status(400).json({ error: 'Faltan campos obligatorios: nombre, precio o stock' });
  }

  try {
    const actualizado = await prisma.producto.update({
      where: { id: parseInt(req.params.id) },
      data: {
        nombre,
        descripcion: descripcion || '',
        precio: Number(precio),
        stock: Number(stock)
      }
    });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await prisma.producto.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ mensaje: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
});

export default router;
