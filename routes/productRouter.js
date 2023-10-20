const router = require("express").Router();

const Product = require("../controller/productController");

const upload = require("../middlewares/uploader");
const autentikasi = require("../middlewares/authenticate");
const checkRole = require("../middlewares/checkRole");

router.post("/", upload.single("image"), Product.createProduct);
// menentukan authentikasi yang bisa mengecheck API ini owner atau staff
router.get("/", autentikasi, checkRole("Staff"), Product.findProducts);
router.get("/:id", Product.findProductById);
router.patch("/:id", Product.UpdateProduct);
router.delete("/:id", Product.deleteProduct);

module.exports = router;
