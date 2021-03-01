const isProd = process.env.NODE_ENV === "production";

module.exports = {
  trailingSlash: true,
  assetPrefix: isProd ? "/next-material-ui-classes-bug" : "",
  basePath: isProd ? "/next-material-ui-classes-bug" : "",
};
