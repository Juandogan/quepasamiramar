
const express = require ('express');
const cardCtrl = require('../Controllers/card.controller')
const router = express.Router();

router.get('/', cardCtrl.pedirCard);
router.post('/', cardCtrl.crearCard);
router.get('/:id', cardCtrl.pedirUnaCard);
router.put('/:id', cardCtrl.editarCard);
router.delete('/:id', cardCtrl.borrarCard);



module.exports = router;