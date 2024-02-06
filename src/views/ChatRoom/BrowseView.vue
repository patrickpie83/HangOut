<script>
import axios from 'axios';

import HeaderComponent from '@/components/HeaderComponent.vue';
import ChatRoomNav from '../../components/ChatRoomNav.vue';
import statusStore from '../../stores/statusStore';

import { onMounted, ref } from 'vue';

const apiUrl = process.env.VUE_APP_API_URL;
const status = statusStore();
export default {
  components:{
    HeaderComponent,
    ChatRoomNav
  },
  setup(){
    // 瀏覽頁各使用者資料
    const usersData = ref([]);

    const userId = ref("");
    onMounted(()=>{
      status.navState = "browse";
      userId.value = localStorage.getItem("userId");

      if(userId.value){
        axios.get(`${apiUrl}/users`)
        .then((res)=>{
          //陣列filter - 將自己以外的使用者過濾出來
          usersData.value = res.data.filter(value => value.id != userId.value )
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    })
    
    return{
      usersData
    }
  }
}
</script>

<template>
  <HeaderComponent/>
  <div class="bg-hangout-bg pt-4 pb-7">
    <div class="container">
      <div class="row">
        <div v-for="item in usersData" :key="item.id" class="col-lg-6 mb-4">
          <router-link :to="{ path: '/person/'+item.id, query: { id : item.id } }" class="browseCard">
            <div class="position-relative">
              <div class="d-block">
                <img v-if="item.userInfo.pic" :src="item.userInfo.pic" :alt="item.userInfo.name" style="width:234px;height:234px">
                <img v-else src="/images/img_memberPic.png" alt="defaulfUserPic" style="width:234px;height:234px">
              </div>
              <span class="namePosition">{{item.userInfo.name}}</span>
            </div>
            <div class="position-relative">
              <div class="d-block">
                <img v-if="item.petInfo.pic" :src="item.petInfo.pic" :alt="item.petInfo.name" style="width:234px;height:234px">
                <img v-else src="/images/img_petPic.png" alt="defaultPetPic" style="width:234px;height:234px">
              </div>
              <span v-if="item.petInfo.name" class="namePosition">{{item.petInfo.name}}</span>
              <span v-else class="namePosition">未設定</span>
            </div>
            
          </router-link>
        </div>



      </div>
    </div>
  </div>
  <ChatRoomNav/>
</template>


<style lang="scss" scoped>
  .browseCard{
    padding: 36px 0px;
    display: flex;
    justify-content: space-evenly;
    background-color: $hangout-primary;
    border-radius: 30px;

    &:hover{
      cursor: pointer;
      background-color: $hangout-second;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
  }

  .namePosition{
    position: absolute;
    color: #fff;
    // top: -28px;
    // left: 50%;
    // transform:translate(-50%,0%);
    bottom: 0%;
    left: 8px;
  }

</style>