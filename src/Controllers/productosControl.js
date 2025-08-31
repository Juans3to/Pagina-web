const { Router } = require('express');
const router = Router();
const productosModel = require('../Models/productosModel');

router.get('/api/autos', async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 15;
        const offset = (page - 1) * limit;

        const autos = await productosModel.obtenerAutosPaginados(limit, offset);
        const total = await productosModel.contarAutos();

        res.status(200).json({
            total,
            page,
            totalPages: Math.ceil(total / limit),
            autos
        });
    } catch (error) {
        console.error("Error al obtener autos:", error.message, error.stack);
        res.status(500).json({
            error: "Error del servidor al obtener los autos"
        });
    }
});

router.post('/api/autos', async (req, res) => {
    try {
        const { Modelo, Anio, Estado, Km, Precio_en_dolares, MSRP } = req.body;
        const nuevoId = await productosModel.crearProducto(Modelo, Anio, Estado, Km, Precio_en_dolares, MSRP);
        res.status(201).json({ 
            mensaje: "Carro añadido con éxito 🚗", 
            id_auto: nuevoId 
        });
    } catch (error) {
        console.error("Error al insertar producto:", error.message, error.stack);
        res.status(500).json({
            error: "Error del servidor al insertar producto"
        });
    }
});


module.exports = router;