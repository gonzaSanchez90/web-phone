const mongoose = require('mongoose');

const Modelo = mongoose.Schema;

const ModeloSmartphone = new Modelo({
      marca: String,
      modelo: String,
      version: String,
      fechaFabricacion: Number,
      stock: Number,
      fechaIngreso:{
          type: Date,
          default: Date.now
      }   
})
const Mobiles = mongoose.model('smartphones', ModeloSmartphone);
module.exports = Mobiles;