const express = require('express');
const router = express.Router();

// Importar funciones del controller
const { register, login } = require('../controllers/authController');

// Rutas de autenticación
router.post('/register', register);
router.post('/login', login);

module.exports = router;
