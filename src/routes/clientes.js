const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/clientes');

router.get('/clientes', ctrl.getClientes);
router.post('/clientes', ctrl.createCliente);
router.put('/clientes/:id', ctrl.updateCliente);
router.delete('/clientes/:id', ctrl.deleteCliente);

module.exports = router;