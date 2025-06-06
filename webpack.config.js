// webpack.config.js
module.exports = (env) => {
  return require(`./webpack/webpack.${env.mode}.js`);
};
