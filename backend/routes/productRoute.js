const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();
router.route("/products").get(getAllProducts);
router.route("/admin/products").get(authorizeRoles("admin"), getAdminProducts);

router.route("/admin/product/new").post(authorizeRoles("admin"), createProduct);

router
  .route("/admin/product/:id")
  .put(authorizeRoles("admin"), updateProduct)
  .delete(authorizeRoles("admin"), deleteProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(createProductReview);

router.route("/reviews").get(getProductReviews).delete(deleteReview);

module.exports = router;
