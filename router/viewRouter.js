const {
  getBlog,
  getCart,
  getLanding,
  getProducts,
  getpamper,
  getSignin,
  getTracker,
  getProfile,
  getForum,
  getConnect,
} = require("../controller/viewController")
const express = require("express");
const { protectRoute } = require("../controller/authController");
const viewRouter = express.Router();

viewRouter.use(protectRoute)
viewRouter.get("/cart",getCart)
viewRouter.get("/blog",getBlog)
viewRouter.get("/pamperBooth",getpamper)
viewRouter.get("/products",getProducts)
viewRouter.get("/signin",getSignin)
viewRouter.get("/tracker",getTracker)
viewRouter.get("/profile",getProfile)
viewRouter.get("/forum",getForum)
viewRouter.get("/connect",getConnect)
viewRouter.get("", getLanding)

module.exports = viewRouter


