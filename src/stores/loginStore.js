import { defineStore } from 'pinia';

// import statusStore from './statusStore';
import toastMessageStore from './toastMessageStore';

import axios from 'axios';
import router from '@/router';

const apiUrl = process.env.VUE_APP_API_URL;
// const status = statusStore();
//引入messagestore
const toastMessage = toastMessageStore();

export default defineStore ('loginStore',{
    state:()=>({
    }),
    actions:{
        //註冊
        signup(signupInfo){
            let myuuid = crypto.randomUUID();
            axios.post(`${apiUrl}/users`,{
                "id":myuuid,
                "email":signupInfo.email,
                "password":signupInfo.password,
                "userInfo":{
                    "name":signupInfo.name,
                    "pic":"https://github.com/patrickpie83/HangOut/blob/master/public/images/img_memberPic.png?raw=true",
                    "gender":"",
                    "sexualOrientation":"",
                    "intro":""
                },
                "petInfo":{
                    "name":"",
                    "pic":"https://github.com/patrickpie83/HangOut/blob/master/public/images/img_petPic.png?raw=true",
                    "breed":"",
                    "gender":"",
                },
                "lifePic":[],
                "chatRoomKey":[]
            })
            .then(()=>{
                toastMessage.pushMessage("success","註冊成功");
                router.push('/login');
            })
            .catch((err)=>{
                toastMessage.pushMessage("warning","註冊失敗");
                console.log(err);
            })
        },
        //登入
        login(loginInfo){
            axios.post(`${apiUrl}/login`,loginInfo)
            .then((res)=>{
                localStorage.setItem("userId",res.data.user.id);
                toastMessage.pushMessage("success","登入成功");
                router.push('/browse');
            })
            .catch((err)=>{
                toastMessage.pushMessage("warning","登入失敗");
                console.log(err);
            })
        },
        // 登出
        logout(){
            localStorage.clear();
            toastMessage.pushMessage("success","已登出");
            router.push('/');
        }
    }
})