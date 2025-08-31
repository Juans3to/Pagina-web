const { Router } = require('express');
const router = Router();
const productosModel = require('../Models/productosModel');

router.get('/api/autos', async (req, res) => {
    try {
        const autos = await productosModel.obtenerProductos();
        res.status(200).json(autos);
    } catch (error) {
        console.error("Error al obtener autos:", error);
        res.status(500).json({
            error: "Error del servidor al obtener los autos" }); 
    } 
});

router.post('/api/autos', async (req, res) => {
    try {
        const { Modelo, Anio, Estado, Km, Precio_en_dolares, MSRP } = req.body;
        const result = await productosModel.crearProducto(Modelo, Anio, Estado, Km, Precio_en_dolares, MSRP);
        res.status(201).json({ mensaje: "Producto creado con éxito" });
    } catch (error) {
        console.error("Error al insertar producto:", error);
        res.status(500).json({
            error: "Error del servidor al insertar producto"
        });
    }
});

module.exports = router;