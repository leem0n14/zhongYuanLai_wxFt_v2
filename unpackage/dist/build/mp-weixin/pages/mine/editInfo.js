"use strict";const e=require("../../common/vendor.js"),a=require("../../common/assets.js");require("../../store/index.js");const n=require("../../apis/user.js"),o=require("../../store/modules/userInf.js");if(!Array){e.resolveComponent("uni-icons")()}Math;const t={__name:"editInfo",setup(t){const i=e.ref({});i.value=o.useUserStore().accountInf;const s=e.index.getMenuButtonBoundingClientRect(),u=e.ref("");u.value="top:"+s.top+"px";const c=e.ref({nickName:"",signature:""});c.value.nickName=i.value.nickName,c.value.signature=i.value.signature;const r=()=>{let a="",o="";e.index.chooseImage({count:1,sizeType:["original","compressed"],mediaType:["image"],sourceType:["album","camera"],success:function(t){console.log("临时路径",JSON.stringify(t.tempFilePaths[0])),a=t.tempFilePaths[0],o=e.index.getFileSystemManager().readFileSync(a),console.log("img",o),console.log(i.value.id),n.userAccountInfUpdate({id:i.value.id,avatar:o}).then((e=>{console.log(e)}))}})};return(n,o)=>({a:a._imports_0$2,b:a._imports_1$1,c:e.o(r),d:e.p({type:"left",size:"30",color:"black"}),e:e.s(u.value),f:e.o((a=>{e.index.navigateBack({delta:1,animationType:"pop-in",animationDuration:200})})),g:c.value.nickName,h:e.o((e=>c.value.nickName=e.detail.value)),i:c.value.signature,j:e.o((e=>c.value.signature=e.detail.value)),k:e.o((a=>(()=>{if(console.log(c.value),!c.value.nickName)return void e.index.showToast({title:"昵称不能为空",icon:"none"});/^[\u4e00-\u9fa5a-zA-Z]+$/.test(c.value.nickName)||e.index.showToast({title:"昵称必须为中文、英文",icon:"none"})})()))})}},i=e._export_sfc(t,[["__scopeId","data-v-ccd4a20f"]]);wx.createPage(i);