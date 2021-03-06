/**
 * Rutas de Usuarios / Auth
 * host * /api/auth
 * 
 */

const {Router} = require('express');
const router = Router();
const {crearUsuario, loginUsuario, revalidarToken} = require('../controllers/auth')

router.post('/new', crearUsuario);

router.post('/', loginUsuario);

router.post('/renew',revalidarToken);

module.exports = router;