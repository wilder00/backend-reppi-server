
const { Router } = require('express');
const { 
  getServices,
  postServices,
  putServices,
  patchServices,
  deleteServices, } = require('../controller/services.controller');

const router = Router();

router.get('/',  getServices);
router.post('/', postServices)
router.put('/', putServices)
router.patch('/', patchServices);
router.delete('/', deleteServices);

module.exports = router;