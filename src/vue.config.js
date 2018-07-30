module.exports = {
    outputDir: 'dist',
    assetsDir: 'static',
    baseUrl: '/vuecli3',
    devServer: {
      open: false,
      host: '0.0.0.0',
      port: 8000,
      https: false,
      hotOnly: false,
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:8012',
          changeOrigin: true
        }
      }
    },
    
    pages:{
        index:{
            // entry for the page
            entry: ['vue','vuex','vue-router','src/index/main.js'],
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page'
        }
    }
  }