const express = require('express')
const productRouter = require("./routes/product.routes");

const app = express();
const port = 3000;

app.get('/',(req, res) => {
    res.send('Hello nut')
} );

//ເອື່ນໃຊ້ງານໂມດູ rouyer
app.use("/api/product", productRouter);
//
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
