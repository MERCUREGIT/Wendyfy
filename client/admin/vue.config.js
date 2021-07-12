module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: '//www.wendyfy.com',
          // target: 'http://localhost:5000',
          changeOrigin: true
        },
      }
    }
  }