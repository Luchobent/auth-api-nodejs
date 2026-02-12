const express = require('express');
const authRoutes = require('./routes/authRoutes'); // Importar las rutas de auth

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas de auth
app.use('/', authRoutes);
// Endpoint protegido de prueba
app.get('/protected', (req, res) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ error: "No token provided" });

    const token = authHeader.split(' ')[1]; // "Bearer TOKEN"

    try {
        const decoded = require('jsonwebtoken').verify(token, 'secretkey');
        res.json({ message: "Access granted", user: decoded });
    } catch (err) {
        res.status(403).json({ error: "Invalid token" });
    }
});

// Levantar el server
app.listen(8080, () => {
    console.log('Server running on port 8080');
});
