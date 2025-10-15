//ເອືີີນໃໍຊ້ງານໂມດູ express
const express = require("express");
const { getAllProducts } = require("../controllers/product.controller");

//ເອີ້ນໃຊ້ງານ ເຮົ້າຕີ້
const router = express.Router();

//ສ້າງ endpoint
router.route("/").get(getAllProducts);

//ສົ່ງອອກໂມດູທີ່ຊື່ວ່າ router
module.exports = router;