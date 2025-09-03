const usuariosRoutes=requiere('./routes/usuarios.routes');
const productosRoutes=requiere('./routes/productos.routes');

module.exports= (app)=>{
app.use('/usuarios',usuariosRoutes);
app.use('/productos',productosRoutes);
};
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
