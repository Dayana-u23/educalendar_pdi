const usuariosRoutes=requiere('./routes/usuarios.routes');
const productosRoutes=requiere('./routes/productos.routes');

module.exports= (app)=>{
app.use('/usuarios',usuariosRoutes);
app.use('/productos',productosRoutes);
};