import productModel from "../models/productModel.js";

const getProduct = async (req, res) => {
    const product = await productModel.find()
    res.json(product)
}

const postProduct = async (req, res) => {
    const {name, image, price, des} = req.body
    const product = {name, image, price, des}
    await productModel.create(product)
    res.json(product)
}

const deleteProduct = async (req, res) => {
    const {id} = req.params
    await productModel.findByIdAndDelete(req.params.id)
    res.json(id)
}

export { getProduct, postProduct, deleteProduct }
// MONGO_URI = mongodb+srv://nenibal656:y66E7rzNLOncnPIK@cluster0.ug0zjbl.mongodb.net/