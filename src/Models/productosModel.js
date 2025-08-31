const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'Juans3to',
    password: 'juan.torres_p',
    database: 'autosusados'
});

// Crear producto
async function crearProducto(Modelo, Anio, Estado, Kilometraje, Precio_en_dolares, MSRP) {
    const [result] = await connection.query(
      "INSERT INTO autos (Modelo, Anio, Estado, Km, Precio_en_dolares, MSRP) VALUES (?,?,?,?,?,?)",
      [Modelo, Anio, Estado, Kilometraje, Precio_en_dolares, MSRP]
    );  
    return result.insertId; // 👈 aquí devolvemos el ID recién insertado
}

// Obtener autos con paginación
async function obtenerAutosPaginados(limit, offset) {
    limit = Number(limit) || 15;
    offset = Number(offset) || 0;

    const [rows] = await connection.query(
        'SELECT * FROM autos ORDER BY id_auto ASC LIMIT ? OFFSET ?',
        [limit, offset]
    );
    return rows;
}

// Contar autos
async function contarAutos() {
    const [rows] = await connection.query(
        'SELECT COUNT(*) AS total FROM autos'
    );
    return rows[0].total;
}

module.exports = {
    crearProducto,           // 👈 vuelve a estar exportado
    obtenerAutosPaginados,
    contarAutos
};

