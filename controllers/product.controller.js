//ສົ່ງອອກ ໂມດູທີ່ຊື່ວ່າ getAllPeoducts
exports.getAllProducts = (req,res) => {
    //ຕອບກັບໄປປຫາ client ສະຖານ 200 ແລະ ຂໍ້ຄວາມ Get all products ໃນຮູບແບບ json
    res.status(200).json({
    message: "Get all product",
    })
}