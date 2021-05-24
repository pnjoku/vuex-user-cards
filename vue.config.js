module.exports = {
  devServer: {
    proxy: {
      "/users": {
        target: "https://jsonplaceholder.typicode.com/",
        changeOrigin: true,
        pathRewrite: {
          "^/users": "",
        },
      },
    },
  },
};
