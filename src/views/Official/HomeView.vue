<script>
export default {

}
</script>

<template>
  <div class="banner position-relative" >
    <div class="container pt-5 mb-7">
      <div class="d-flex">
        <h1 class="text-white fs-2 position-absolute start-50 translate-middle-x logo" >Hang Out</h1>
        <p class="text-white position-absolute end-0 translate-middle-x" >以寵物為主題的交友聊天室</p> 
      </div>
    </div>

    <div class="container loginArea">
      <div class="row justify-content-center mb-5">
        <router-link to="/login" type="button" class="col-lg-4 py-5 border-0 loginBtn text-decoration-none">
          <div class="d-flex justify-content-center">
            <p class="fs-5 loginText me-4">立即登入</p>
            <p class="fs-6 loginLogo">Hang Out</p>
          </div>
        </router-link>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <div class=" bg-hangout-second py-4 px-3 shadow" style="border-radius:60px">
            <div class="d-flex">
              <img src="/images/img_indexFemale.png" alt="img_indexFemale">
              <div class="ms-4">
                <p class="text-hangout-decorate mb-4">Emmy</p>
                <p class="text-hangout-decorate">
                  我的貓叫咕嚕，不過最近好多人叫她咪咪，不知道為什麼？
                  最喜歡帶貓出門逛街了，希望可以認識喜歡逛街也喜歡寵物的朋友！
                  </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class=" bg-hangout-second py-4 px-3 shadow" style="border-radius:60px">
            <div class="d-flex">
              <img src="/images/img_indexMale.png" alt="img_indexMale">
              <div class="ms-4">
                <p class="text-hangout-decorate mb-4">路易斯</p>
                <p class="text-hangout-decorate">
                  我養了三隻狗，照片牽的是奶茶，他最喜歡到海邊玩了，我都會帶著他一起衝浪。
                  最近想再養隻貓，可以給些建議嗎～
                </p>
              </div>
            </div>
          </div>
        </div>
        

      </div>
      
    </div>

  </div>
  
  
</template>



<style lang="scss" scoped>
@import "../../assets/main";
  .banner{
    background-image: url(../../../public/images/img_banner.png);
    background-position: center center;
    height:960px;
    background-size: cover;
    /* width: 100%; */
  }

  .logo::before {
    position:absolute;
    content:"";
    background-color: $hangout-decorate;
    border-radius:8px;
    height:16px;
    width:100%;
    top:120%;

  }

  .loginArea{
    margin-top:320px;
  }

  .loginBtn{
    background-color: #fff;
    border-radius:60px;
    transition-duration:0.2s; 

    .loginText{
        color:$hangout-primary;
      }

    .loginLogo{
      color:$hangout-primary;
      position: relative;
      &::before {
        position:absolute;
        content:"";
        background-color: $hangout-decorate;
        border-radius:8px;
        height:8px;
        width:70px;
        bottom:10%;
      }
    }

    &:hover{
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      background-color:$hangout-primary;

      .loginText{
        color:#fff;
      }

      .loginLogo{
        color:#fff;
      }
    }

    &:active {
      transform: scale(0.95);
      box-shadow:none
    }
  }

  
</style>>
