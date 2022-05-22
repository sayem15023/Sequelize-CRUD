const db = require('../models/index')
const Product = db.products
const Review = db.reviews
const productXtraInfos = db.productXtraInfos
const addProduct = async(req,res)=>{
    let newProduct = {
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
        published:req.body.published ? req.body.published: false
    }
    const product = await Product.create(newProduct)
    res.status(200).send(product)
    console.log(product)
}
const getallProducts= async(req,res)=>{
    let products = await Product.findAll({})
    res.status(200).send(products)
}
const getOneProducts= (req,res)=>{
    const id = req.params.id;
    Product.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Product with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Product with id=" + id
      });
    });
}
const updateProducts= (req,res)=>{
    const id = req.params.id;
    Product.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Product with id=" + id
        });
      });

};
const deleteProducts= (req,res)=>{
   const id = req.params.id;
   Product.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Product was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Product with id=" + id
      });
    });
}
const getpublishedProducts= async(req,res)=>{
    const products = await Product.findAll({where:{published:true}})
    res.status(200).send(products)
}
module.exports = {
    addProduct,
    getallProducts,
    getOneProducts,
    updateProducts,
    deleteProducts,
    getpublishedProducts
}