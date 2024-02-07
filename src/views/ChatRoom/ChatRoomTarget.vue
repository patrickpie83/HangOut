<script>

import { ref, onMounted, getCurrentInstance, watch } from 'vue';

import chatRoomStore from '../../stores/chatRoomStore';
import { storeToRefs } from 'pinia';

export default {
  setup(){
    //聊天室內容
    const chatRoom = chatRoomStore();
    const { userId, targetId, renderMsgData} = storeToRefs(chatRoom)
    const { getTargetRoomMsg, getTargetInfo } = chatRoom;

    //滾動條保持在最底部
    const scrollBtmContainer = ref(null);

    const scrollToBottom = () => {
      if (scrollBtmContainer.value) {
        console.log(`scrollTop為${scrollBtmContainer.value.scrollTop}`)
        console.log(`scrollHeight為${scrollBtmContainer.value.scrollHeight}`)
        scrollBtmContainer.value.scrollTop = scrollBtmContainer.value.scrollHeight;
        console.log(`賦予後scrollTop為${scrollBtmContainer.value.scrollTop}`)
        console.log(`賦予後scrollHeight為${scrollBtmContainer.value.scrollHeight}`)
        scrollToBottomAgain();
      }
    };

    const scrollToBottomAgain = () => {
      if (scrollBtmContainer.value) {
        scrollBtmContainer.value.scrollTop = scrollBtmContainer.value.scrollHeight;
      }
    };
    
    watch( renderMsgData , ()=>{
      console.log(`觸發監聽`)
      scrollToBottom();
    })

    onMounted(()=>{
      userId.value = localStorage.getItem("userId");
      targetId.value = getCurrentInstance().proxy.$route.query.targetId;
      getTargetRoomMsg();
      getTargetInfo();

      //監聽滾動
    })

    return{
      scrollBtmContainer,
      userId,
      targetId,
      renderMsgData
    }
  }
  
}
</script>

<template >
  <div class="chatRoomArea container pt-3 px-4" ref="scrollBtmContainer" style="overflow-y: scroll">
    <!-- 如果是自己傳的，在右側 -->
    <div class="row" v-for="item in renderMsgData" :key="item.msgKey">
      
      <div v-if="item.sender == userId" class="ms-auto col-lg-8">
        <div class="d-flex justify-content-end mb-5">

          <div class="timeArea d-flex align-items-end me-2">
            <p>{{item.time}}</p>
          </div>

          <div class="msgArea">
            <p>{{item.msg}}</p>
          </div>

        </div>
      </div>
      
      <div v-else class="col-lg-8">
        <div class="d-flex mb-5">
          <div class="msgArea me-2">
            <p>{{item.msg}}</p>
          </div>
          <div class="timeArea d-flex align-items-end ">
            <p>{{item.time}}</p>
          </div>

        </div>
      </div>

    </div>
  </div>  
</template>

<style lang="scss" scoped>
@import "../../assets/main";
  .chatRoomArea{
    //需扣除header跟footer的高度最外層才不會有捲軸，並且完整顯示內容不被擋住
    // 70px 56px
    // 94px 82px
    //lg(pc以下)共需扣126px，pc需扣176px
    // height:calc(100vh - 114px);
    // @media (min-width: 992px) {
    //    height:calc(100vh - 164px);
    // }

    height:calc(100vh ); //再扣除輸入框的高度（100px）228
    @media (min-width: 992px) {
       height:calc(100vh - 278px);
    }
  }

  .msgArea{
    background-color: #fff;
    padding: 24px;
    border-radius: 24px;
  }

  .timeArea{
    color: $hangout-primary;
    font-size: 12px;
  }
</style>