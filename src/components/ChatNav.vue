<script>
import chatRoomStore from '../stores/chatRoomStore';
import { storeToRefs } from 'pinia';
import { onMounted, watch } from 'vue';
export default {
    setup(){
        const chatRoom = chatRoomStore();
        const { loadingRoom, userId, targetId, allRoom, renderNavData,targetName, targetPic } = storeToRefs(chatRoom);
        const { getTargetRoomKey, getOwnKeys, getConnect, switchTargetIdAndRoomKey } = chatRoom;


        watch( allRoom,()=>{
            //當全部聊天室發生變化時
            //當發送訊息給目標時，判斷聊天室鑰匙號碼
            getTargetRoomKey();
            //聊天室變化時，更新自己擁有的聊天室鑰匙號碼
            getOwnKeys();
        })

        onMounted(()=>{
            getConnect();
        })
        return{
            loadingRoom,
            userId,
            targetId,
            renderNavData,
            switchTargetIdAndRoomKey,
            targetName,
            targetPic,
        }
    }
}
</script>


<template>
    <nav class="bg-hangout-block overflow-auto">
        
        <div class="py-6 px-3 border-bottom border-hangout-second bg-hangout-decorate">
            <div v-if="targetId" class="fw-bold  d-flex align-items-center ">
                <p class="text-hangout-second">目前所選聊天對象為</p>
                <div class="div mx-auto d-flex align-items-center">
                    <img class="targetHint" :src="targetPic" :alt="targetName">
                    <p class="ms-2 text-hangout-second">{{targetName}}</p>
                </div>
                
            </div>
            <p v-else class="fw-bold">目前未選擇聊天對象</p>
        </div>
        <div class="container">
            <p v-if="loadingRoom"> 正在loading中...</p>
            <ul v-else class="list-unstyled">
                <li v-for="item in renderNavData" :key="item.roomKey">
                    <router-link @click="switchTargetIdAndRoomKey(item.otherId,item.roomKey)" :to="{ path: '/chatroom/'+item.otherId, query: { targetId : item.otherId } }" :class="{ 'bg-hangout-second' : item.otherId==targetId}" class="chatTarget row py-2 border-bottom border-hangout-second text-decoration-none">
                        <div class="col-lg-6 d-flex">
                            <div class="w-50">
                                <div class="ratio ratio-1x1">
                                    <img :src="item.otherPic" alt="">
                                </div>
                            </div>
                            <div class="w-50">
                                <div class="ratio ratio-1x1">
                                    <img :src="item.petPic" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 d-flex justify-content-start align-items-center">
                            <p>{{item.otherName}}</p>
                        </div>
                        <div class="col-lg-12">
                            <p class="mt-1 text-end fs-7 text-hangout-text">最近交談時間 {{item.lastestTime}}</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>


<style lang="scss" scoped>
    .chatTarget{
        &:hover{
            cursor: pointer;
            background-color: $hangout-second;
        }
    }

    .targetHint{
        height: 60px;
        width: 60px;
        border-radius: 30px;
    }
</style>