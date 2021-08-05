require('../connection')

const User = require('../models/User')

const searchProducts = async () => {
    const products = await User.find({});
    
    console.log(products)
};

searchProducts();