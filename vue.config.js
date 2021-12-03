const path = require("path");

module.exports = {
  configureWebpack: () => {     
    if (process.env.NODE_ENV !== 'production') {       
      devtool: 'source-map'      
    }   
  },   
  productionSourceMap: false,
  devServer:{
    disableHostCheck: true,
  },
  publicPath: './',
}
