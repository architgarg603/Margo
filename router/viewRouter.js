const {
  getBlog,
  getCart,
  getLanding,
  getProducts,
  getpamper,
  getSignin,
  getTracker,
  getProfile,
} = require("../controller/viewController")
const express = require("express");
const viewRouter = express.Router();

viewRouter.get("/cart",getCart)
viewRouter.get("/blog",getBlog)
viewRouter.get("/pamperBooth",getpamper)
viewRouter.get("/products",getProducts)
viewRouter.get("signin",getSignin)
viewRouter.get("/tracker",getTracker)
viewRouter.get("/profile",getProfile)
viewRouter.get("/", getLanding)

module.exports = viewRouter


