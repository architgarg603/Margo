const getBlog = (req, res) => {
  res.render("blog.ejs");
};
const getCart = (req, res) => {
  res.render("cart.ejs");
};
const getLanding = (req, res) => {
  res.render("landing.ejs");
};
const getpamper = (req, res) => {
  res.render("pamperBooth.ejs");
};
const getProducts = (req, res) => {
  res.render("products.ejs");
};
const getSignin = (req, res) => {
  res.render("signIn.ejs");
};
const getTracker = (req, res) => {
  res.render("tracker.ejs");
};
const getProfile = (req, res) => {
  res.render("userProfile.ejs");
};

module.exports = {
    getBlog,
    getCart,
    getLanding,
    getProducts,
    getpamper,
    getSignin,
    getTracker,
    getProfile
}
