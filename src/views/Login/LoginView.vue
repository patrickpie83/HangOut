<script>
import { ref } from 'vue'
import LoginNav from '@/components/LoginNav.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import loginStore from '../../stores/loginStore.js';
export default {
  components:{
    LoginNav,
    HeaderComponent
  },
  setup(){
    const loginInfo = ref({
      "email":"",
      "password":""
    })

    const { login } = loginStore();

    return{
      loginInfo,
      login
    }
  }
}
</script>

<template>
  <HeaderComponent/>
  <div class="bg-hangout-bg pt-4 pb-7">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <img class="loginImg" src="/images/img_login.png" alt="img_login">
        </div>
        <div class="col-lg-6">
          <form class="mt-7">
            <label for="loginEmail" class="form-label mb-2">電子信箱</label>
            <input v-model="loginInfo.email" type="email" class="form-control rounded-0 border-0 shadow-sm mb-4" id="loginEmail" placeholder="請輸入電子信箱" autocomplete="username">
            <label for="loginPassword" class="form-label mb-2">密碼</label>
            <input v-model="loginInfo.password" type="password" class="form-control rounded-0 border-0 shadow-sm mb-5" id="loginPassword" placeholder="請輸入密碼" autocomplete="current-password">
            <button type="button" class="loginBtn btn bg-hangout-decorate border-hangout-decorate w-100 rounded-0" @click="login(loginInfo)">登入</button>
            <button class="mt-4">忘記密碼？</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <LoginNav/>
</template>



<style lang="scss">
@import "../../assets/main";
  // 共用勿設scoped
  .loginImg{
    border: 32px solid $hangout-block;
    border-radius: 50%;
  }
  ::placeholder{
    color:$hangout-primary!important;
  }

  .loginBtn{
    &:hover{
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    
    &:active {
      transform: scale(0.98);
      box-shadow:none
    }
  }

</style>