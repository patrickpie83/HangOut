"use strict";(self["webpackChunkvue_hangout"]=self["webpackChunkvue_hangout"]||[]).push([[166],{2166:function(e,l,s){s.r(l),s.d(l,{default:function(){return y}});var t=s(6252),a=s(3577);const r={class:"chatRoomArea pt-3 px-2 px-lg-4",ref:"scrollBtmContainer",style:{"overflow-y":"scroll"}},n={key:0,class:"d-flex justify-content-end ms-auto col-8"},o={class:"d-flex flex-column-reverse flex-lg-row align-items-end justify-content-lg-end mb-5"},u={class:"timeArea d-flex align-items-end me-2"},i={class:"msgArea bg-hangout-block"},g={key:1,class:"col-8"},c={class:"d-inline-flex flex-column flex-lg-row mb-5"},d={class:"msgArea bg-white me-2"},v={class:"timeArea d-flex align-items-end"};function m(e,l,s,m,f,w){return(0,t.wg)(),(0,t.iD)("div",r,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(m.renderMsgData,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"row w-100 gx-0",key:e.msgKey},[e.sender==m.userId?((0,t.wg)(),(0,t.iD)("div",n,[(0,t._)("div",o,[(0,t._)("div",u,[(0,t._)("p",null,(0,a.zw)(e.time),1)]),(0,t._)("div",i,[(0,t._)("p",null,(0,a.zw)(e.msg),1)])])])):((0,t.wg)(),(0,t.iD)("div",g,[(0,t._)("div",c,[(0,t._)("div",d,[(0,t._)("p",null,(0,a.zw)(e.msg),1)]),(0,t._)("div",v,[(0,t._)("p",null,(0,a.zw)(e.time),1)])])]))])))),128))],512)}var f=s(2262),w=s(7469),p=s(9876),_={setup(){const e=(0,w.Z)(),{userId:l,targetId:s,renderMsgData:a}=(0,p.Jk)(e),{getTargetRoomMsg:r,getTargetInfo:n}=e,o=(0,f.iH)(null),u=()=>{o.value&&(o.value.scrollTop=o.value.scrollHeight,i())},i=()=>{o.value&&(o.value.scrollTop=o.value.scrollHeight)};return(0,t.YP)(a,(()=>{u()})),(0,t.bv)((()=>{l.value=localStorage.getItem("userId"),s.value=(0,t.FN)().proxy.$route.query.targetId,r(),n()})),{scrollBtmContainer:o,userId:l,targetId:s,renderMsgData:a}}},x=s(3744);const h=(0,x.Z)(_,[["render",m],["__scopeId","data-v-b2a97c28"]]);var y=h}}]);
//# sourceMappingURL=166.3f688ad3.js.map