<script>
import statusStore from '../stores/statusStore'; 
const status = statusStore();
export default {
    data(){
        return{
            status
        }
    }
}
</script>

<template>
    <nav class="fixed-bottom bg-white">
        <div class="container">
            <div class="row py-2">
                <div class="col-4">
                    <router-link :class="{'bg-hangout-decorate' : status.navState=='browse'}" to="/browse" type="button" class="ChatRoomNavBtn">
                        瀏覽社群
                    </router-link>
                </div>
                <div class="col-4">
                    <router-link :class="{'bg-hangout-decorate' : status.navState=='chatroom'}" to="/chatroom" type="button" class="ChatRoomNavBtn">
                        聊天室
                    </router-link>
                </div>
                <div class="col-4">
                    <router-link :class="{'bg-hangout-decorate' : status.navState=='aboutme'}" to="/aboutme" type="button" class="ChatRoomNavBtn">
                        個人資料
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>

    .ChatRoomNavBtn{
        font-size: 12px;
        padding: 10px 0px;
        display: block;
        color: $hangout-primary;
        border-radius: 8px;
        text-decoration: none;
        text-align: center;
        &:hover{
            color: $hangout-primary;
            background-color: $hangout-decorate;
        }

        &:active{
            color:$hangout-text;
            background-color: $hangout-decorate;
        }

        //！！！！！！！！待再改為mixin
        @media (min-width: 992px) {
            font-size: 16px;
            padding: 20px 0px;
        }
    }
</style>