const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'Juans3to',
    password: 'juan.torres_p',
    database: 'autosusados'
});
async function obtenerProductos() {
    const result = await connection.query('SELECT * FROM autos');
    return result[0];
    
}

async function crearProducto(Modelo, Anio, Estado, Kilometraje, Precio_en_dolares, MSRP) {
    const result = await connection.query(
      "INSERT INTO autos (Modelo, Anio, Estado, Km, Precio_en_dolares, MSRP) VALUES (?,?,?,?,?,?)",
      [Modelo, Anio, Estado, Kilometraje, Precio_en_dolares, MSRP]
    );  
    return result;
}


module.exports = {
    obtenerProductos, crearProducto
}; 