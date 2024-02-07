const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/HangOut/'
    : '/'
}

// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         //此行將被加入每個元件style中，就不需每個元件都要引入變數才可使用
//         additionalData: `@import "@/assets/main.scss";`,
//       },
//     },
//   },
// };

