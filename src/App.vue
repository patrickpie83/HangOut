<template>
  <router-view/>
</template>

<style lang="scss">
  //全域引入 //改用vue.config.js引入元件才能使用變數
  // @import "./assets/main";
  
  *{
    color: $hangout-text;
  }
  
  img{
    object-fit: cover;
    vertical-align: middle;
  }

  h1,h2,h3,h4,h5,h6,p{
      margin-bottom: 0 !important;
  }
</style>
