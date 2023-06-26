const express = require('express');
const router = express.Router();

const dataController = require('../controller/dataController');

router.get('/', dataController.getAll);
router.post('/create', dataController.create);
router.post('/delete/:id', dataController.destroy);
router.get('/show/:id', dataController.show);

module.exports = router;
