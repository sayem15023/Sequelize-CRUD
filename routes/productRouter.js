const productController = require('../controllers/productController.js')
const router = require('express').Router()

router.post('/addProduct',productController.addProduct)

router.get('/allProduct',productController.getallProducts)

router.get('/published',productController.getpublishedProducts)

router.get('/:id',productController.getOneProducts)

router.put('/:id',productController.updateProducts)

router.delete('/:id',productController.deleteProducts)

module.exports = router