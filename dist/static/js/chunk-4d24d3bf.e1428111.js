(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d24d3bf"],{"4fcc":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"body-wrapper"},[o("div",{staticClass:"body"},[o("el-form",{ref:"form",attrs:{model:e.form,"label-position":"top","label-width":"180px"}},[o("el-form-item",{attrs:{label:"企业名称"}},[o("el-input",{model:{value:e.form.entname,callback:function(t){e.$set(e.form,"entname",t)},expression:"form.entname"}})],1),o("el-form-item",{attrs:{label:"统一社会信用代码"}},[o("el-input",{model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),o("el-form-item",{attrs:{label:"法人姓名"}},[o("el-input",{model:{value:e.form.fr,callback:function(t){e.$set(e.form,"fr",t)},expression:"form.fr"}})],1),o("el-form-item",{attrs:{label:"法人身份证号码"}},[o("el-input",{model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),o("el-form-item",{attrs:{label:"法人手机号"}},[o("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),o("el-form-item",[o("el-checkbox-group",{model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},[o("el-checkbox",{attrs:{label:"数字证书代办委托书（点击下载）"}},[o("span",{on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.file1.apply(null,arguments)}}},[e._v("数字证书代办委托书（点击下载）")])]),o("el-checkbox",{attrs:{label:"用户授权协议书（点击下载）"}},[o("span",{on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.file2.apply(null,arguments)}}},[e._v("用户授权协议书（点击下载）")])])],1)],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即授权")]),o("el-button",{on:{click:e.onCancel}},[e._v("取消")])],1)],1)],1)])},i=[],c={name:"",components:{},props:{},data:function(){return{checkList:[],form:{entname:"",code:"",fr:"",id:"",phone:""}}},computed:{},mounted:function(){this.form.entname=localStorage.getItem("entName"),this.form.code=localStorage.getItem("CreditCode"),this.$confirm("以下授权操作为需调取企业发票信息用于企业深度评估使用场景的模拟演示，具体内容将生成至企业评估报告或集成的客户评估系统，且原则上仅用于终端客户为持牌金融机构的应用场景","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})},methods:{file1:function(){window.location.href="https://api.meirixindong.com/Static/数字证书代办委托书.docx"},file2:function(){window.location.href="https://api.meirixindong.com/Static/用户授权协议书.docx"},onSubmit:function(){2!==this.checkList.length?this.$confirm("请先同意两个授权文件","",{confirmButtonText:"确定",type:"warning"}):this.$confirm("您的授权已完成，请于20个工作日后登录贵方与每日信动合作集成的评估系统查看结果","",{confirmButtonText:"确定",type:"success"})},onCancel:function(){this.form.entname="",this.form.code="",this.form.fr="",this.form.id="",this.form.phone=""}}},l=c,r=(o("b04b"),o("2877")),a=Object(r["a"])(l,n,i,!1,null,"2b10ee0b",null);t["default"]=a.exports},"9afb":function(e,t,o){},b04b:function(e,t,o){"use strict";o("9afb")}}]);