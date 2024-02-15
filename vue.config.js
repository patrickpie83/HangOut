const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/HangOut/'
    : '/'
}

//因全域引入在部署後無法生效，故先改以各別元件區域引入
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

