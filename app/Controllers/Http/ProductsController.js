"use strict";

const Products = require("../../../assets/products.json");

class ProductsController {
  async index({ request, response }) {
    response.json(Products);
  }

  async show({ params, request, response }) {
    try {
      const product = Products.find((product) => product.id == params.id);

      if (!product) throw new Error(`Produto não encontrado.`);

      response.json(product);
    } catch (err) {
      response.status(404).json({
        message: err.message,
      });
    }
  }
}

module.exports = ProductsController;
