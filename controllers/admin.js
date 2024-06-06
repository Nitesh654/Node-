
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/add-product',
    isEdit: '',
  });
};

exports.getAdminProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'All Admin Product List',
      path: '/admin-product',
    });
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;

  const product = new Product(null, title, description, price, imageUrl);
  product.save();
  res.redirect('/');
};

exports.getEditMyProduct = (req, res, next) => {
  const isEditMode = req.query.isEditing;
  const productId = req.params.productId;
  console.log('isEditMode', isEditMode); //"true"

  Product.findProductById(productId, (product) => {
    res.render('admin/edit-product', {
      pageTitle: 'Editing Product',
      path: '',
      product: product,
      isEdit: isEditMode,
    });
  });
};

exports.saveModifiedProduct = (req, res, next) => {
  const reqBody = req.body;
  const productId = reqBody.productId;
  const modifiedTitle = reqBody.title;
  const modifiedPrice = reqBody.price;
  const modifiedImgUrl = reqBody.imageUrl;
  const modifiedDesc = reqBody.description;

  const modifiedProduct = new Product(productId, modifiedTitle, modifiedDesc, modifiedPrice, modifiedImgUrl);

  modifiedProduct.saveModifiedFile();
  res.redirect('/admin/admin-product');
}

exports.removeProduct = (req, res, next) => {
  const productId = req.body.productId;
  Product.remove(productId);
  res.redirect('/admin/admin-product');
}
