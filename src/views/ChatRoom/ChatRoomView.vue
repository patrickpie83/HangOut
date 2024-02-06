<script>
import {onMounted, ref } from 'vue';

import HeaderComponent from '@/components/HeaderComponent.vue';
import ChatRoomNav from '../../components/ChatRoomNav.vue';
import ChatNav from '../../components/ChatNav.vue';

import statusStore from '../../stores/statusStore';
import chatRoomStore from '../../stores/chatRoomStore';


export default {
  components:{
    HeaderComponent,
    ChatRoomNav,
    ChatNav
  },
  setup(){
    const status = statusStore();

    const chatRoom = chatRoomStore();
    const { sendMsg } = chatRoom;
    const newMsg = ref("");

    

    const callSendMsg = ()=>{
      if(!newMsg.value.trim()){
        return
      }
      sendMsg(newMsg.value);
      newMsg.value = "";
    }

    onMounted(()=>{
      status.navState = "chatroom";
      
    })
    
    return{
      status,
      newMsg,
      callSendMsg
    }
  }
}
</script>

<template>
  <HeaderComponent/>
  <!-- 背景 -->
  <div class="bg-hangout-second border border-hangout-second">
    <div class="myContainer">

      <!-- 主要內容 -->
      <div class="d-flex position-relative" >

        <!-- 側邊選單選人 -->
        <ChatNav class="w-25 chatRoomTargets"/>

        <!-- 聊天內容 -->
        <content class="w-75 bg-hangout-bg">
          <router-view/>

          <div class="inputArea bg-hangout-primary position-absolute d-flex justify-content-center align-items-center">
            <input v-model="newMsg" @keyup.enter="callSendMsg" type="text" class="inputText w-75 h-50 px-4" placeholder="輸入訊息">
          </div>
        </content>

      </div>
      

    </div>
  </div>
  <ChatRoomNav/>
</template>


<style lang="scss" scoped>
  .myContainer{
    margin: 0px 8px;
  }

  .chatRoomTargets{
    height:calc(100vh - 114px);
    @media (min-width: 992px) {
       height:calc(100vh - 164px);
    }
  }
  

  .inputArea{
    width: 75%;
    height: 100px;
    bottom:13px;
  }

  .inputText{
    background-color: $hangout-bg;
    border: none;
    border-radius: 30px;
  }
</style>