(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f004861"],{"108f":function(t,e,a){"use strict";a("da58")},"2c0a":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body-wrapper"},[t._m(0),a("div",{staticClass:"content-wrapper"},[a("div",[a("div",{staticClass:"search-res-wrapper"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.group_loading,expression:"group_loading"}],staticStyle:{width:"100%"},attrs:{data:t.group_res,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.6)","min-height":"100","max-height":"600",border:""}},[a("el-table-column",{attrs:{label:"优企信息包编号",prop:"group",align:"center"}}),a("el-table-column",{attrs:{label:"优企群名称",prop:"groupDesc",align:"center"}}),a("el-table-column",{attrs:{label:"企业数量",prop:"num",align:"center"}}),a("el-table-column",{attrs:{label:"详情",align:"center",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.getGroupRow(e.$index,e.row)}}},[t._v("查看 ")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.delGroupRow(e.$index,e.row)}}},[t._v("删除 ")])]}}])})],1)],1),a("div",{staticStyle:{"text-align":"right","margin-top":"15px"}},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next",total:t.group_paginate.total,"page-size":10},on:{"current-change":t.pageChange}})],1)]),a("div",{staticStyle:{"text-align":"center","line-height":"100px"}},[a("el-button",{staticStyle:{width:"150px"},attrs:{type:"primary"},on:{click:t.exportCsv}},[t._v("导出详情列表")])],1),a("div",[a("div",{staticClass:"search-res-wrapper"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{border:"",data:t.search_res,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.6)","min-height":"100","max-height":"600"}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"经营范围"}},[a("span",[t._v(t._s(e.row.detail.OPSCOPE))])]),a("el-form-item",{attrs:{label:"统一代码"}},[a("span",[t._v(t._s(e.row.detail.UNISCID))])]),a("el-form-item",{attrs:{label:"登记机关"}},[a("span",[t._v(t._s(e.row.detail.REGORG))])]),a("el-form-item",{attrs:{label:"行业"}},[a("span",[t._v(t._s(e.row.detail.nic_id))])]),a("el-form-item",{attrs:{label:"注册地"}},[a("span",[t._v(t._s(e.row.detail.DOM))])]),a("el-form-item",{attrs:{label:"地区"}},[a("span",[t._v(t._s(e.row.detail.region_id))])]),a("el-form-item",{attrs:{label:"网址"}},[a("span",[t._v(t._s(e.row.detail.website))])])],1)]}}])}),a("el-table-column",{attrs:{label:"企业名称",prop:"entName",align:"center"}}),a("el-table-column",{attrs:{label:"法人代表",prop:"detail.faren",width:"130",align:"center"}}),a("el-table-column",{attrs:{label:"状态",prop:"ENTSTATUS",width:"130",align:"center"}}),a("el-table-column",{attrs:{label:"类型",prop:"detail.ENTTYPE",align:"center"}}),a("el-table-column",{attrs:{label:"成立日期",prop:"ESDATE",width:"100",align:"center"}}),a("el-table-column",{attrs:{label:"注册资本",prop:"detail.REGCAP",width:"180",align:"center"}}),a("el-table-column",{attrs:{label:"风险",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{staticClass:"tag-wrapper-xx",attrs:{type:"danger"},on:{click:function(a){return t.jumpFengXianDetail(e.row.id)}}},[t._v(" "+t._s(e.row.fengxian)+" ")])]}}])}),a("el-table-column",{attrs:{label:"规模",prop:"caiwu",width:"80",align:"center"}}),a("el-table-column",{attrs:{label:"连接",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{staticClass:"tag-wrapper-xx",attrs:{type:"success"},on:{click:function(a){return t.jumpLianXiDetail(e.row.id)}}},[t._v(" "+t._s(e.row.lianjie)+" ")])]}}])}),a("el-table-column",{attrs:{label:"备注",prop:"remarks",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("查看 ")]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return t.showEditRemarksDia(e.$index,e.row)}}},[t._v("填备注 ")])]}}])})],1)],1)])]),a("div",{staticStyle:{"text-align":"right","margin-top":"15px"}},[a("el-button",{attrs:{type:"warning"},on:{click:t.runFengXian}},[t._v("风险扫描")]),a("el-button",{attrs:{type:"warning"},on:{click:t.runCaiWu}},[t._v("规模特征")]),a("el-button",{attrs:{type:"warning"},on:{click:t.runLianJie}},[t._v("连接优企")])],1),a("div",{staticClass:"footer-wrapper"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next",total:t.paginate.total,"page-size":10},on:{"current-change":t.pageChange}})],1),a("div",[a("el-dialog",{attrs:{title:"查看",visible:t.group_dialog_show_flag,width:"30%"},on:{"update:visible":function(e){t.group_dialog_show_flag=e}}},[a("el-form",{attrs:{model:t.group_form}},[a("el-form-item",{attrs:{label:"优企信息包编号"}},[a("el-input",{attrs:{autocomplete:"off",disabled:""},model:{value:t.group_form.group,callback:function(e){t.$set(t.group_form,"group",e)},expression:"group_form.group"}})],1),a("el-form-item",{attrs:{label:"优企群名称"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.group_form.group_desc,callback:function(e){t.$set(t.group_form,"group_desc",e)},expression:"group_form.group_desc"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.group_dialog_show_flag=!1}}},[t._v("查看数据")]),a("el-button",{attrs:{type:"primary"},on:{click:t.editGroupDesc}},[t._v("确定修改")])],1)],1),a("el-dialog",{attrs:{title:"",visible:t.fengxianDia,width:"80%"},on:{"update:visible":function(e){t.fengxianDia=e}}},[a("el-table",{attrs:{data:t.showDiaData,border:""}},[a("el-table-column",{attrs:{property:"title",label:"标题",align:"center"}}),a("el-table-column",{attrs:{property:"desc",label:"描述",align:"center"}}),a("el-table-column",{attrs:{property:"content",label:"详情",align:"center"}}),a("el-table-column",{attrs:{property:"date",label:"日期",align:"center"}}),a("el-table-column",{attrs:{property:"remarks",label:"备注",align:"center"}}),a("el-table-column",{attrs:{property:"reservedFields",label:"保留字段",align:"center",width:"80"}})],1)],1),a("el-dialog",{attrs:{title:"",visible:t.lianxiDia,width:"80%"},on:{"update:visible":function(e){t.lianxiDia=e}}},[a("el-table",{attrs:{data:t.showDiaData,border:""}},[a("el-table-column",{attrs:{property:"duty",label:"职位",align:"center"}}),a("el-table-column",{attrs:{property:"source",label:"来源",align:"center"}}),a("el-table-column",{attrs:{property:"quhao",label:"区号",align:"center"}}),a("el-table-column",{attrs:{property:"lianxi",label:"号码",align:"center"}}),a("el-table-column",{attrs:{property:"lianxitype",label:"联系方式",align:"center"}})],1)],1),a("el-dialog",{attrs:{title:"修改备注",visible:t.show_edit_remarks_flag,width:"30%"},on:{"update:visible":function(e){t.show_edit_remarks_flag=e}}},[a("el-form",[a("el-form-item",{attrs:{label:""}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.remarks.val,callback:function(e){t.$set(t.remarks,"val",e)},expression:"remarks.val"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.show_edit_remarks_flag=!1}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.editRemarks}},[t._v("确定")])],1)],1)],1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo-wrapper"},[a("div",{staticClass:"logo-text"},[t._v("智能评价服务系统")])])}],r=(a("4160"),a("159b"),a("337a")),i={name:"FinancesSearchSecondPage",components:{},props:{},data:function(){return{remarks:{table_index:"",group_id:"",val:""},show_edit_remarks_flag:!1,fengxianDia:!1,lianxiDia:!1,showDiaData:[],group_form:{group:"",group_desc:"",phone:localStorage.getItem("phone")},group_dialog_show_flag:!1,group_name:"",multipleSelection:[],group_loading:!0,loading:!1,group_res:[],group_cond:{page:1,phone:localStorage.getItem("phone")},search_res:[],search_cond:{page:1,phone:localStorage.getItem("phone")},group_paginate:{total:0},paginate:{total:0}}},computed:{},mounted:function(){this.group_search()},methods:{showEditRemarksDia:function(t,e){this.show_edit_remarks_flag=!0,this.remarks.group_id=e.id,this.remarks.val="",this.remarks.table_index=t},editRemarks:function(){var t=this,e={id:this.remarks.group_id,remarks:this.remarks.val,phone:this.group_form.phone};console.log(e),this.search_res.forEach((function(e){e.id===t.remarks.group_id&&(e.remarks=t.remarks.val)})),r["a"].post("api/v1/xd/editGroupRemarks",e,localStorage.getItem("token")).then((function(e){200===e.data.code&&(t.show_edit_remarks_flag=!1)}))},handleEdit:function(t,e){var a=this.$router.resolve({path:"./SearchList",query:{entName:e.entName}});window.open(a.href,"_blank")},jumpFengXianDetail:function(t){var e=this;this.fengxianDia=!0,this.search_res.forEach((function(a){a.id===t&&(e.showDiaData=a.fengxianDetail.length>5?JSON.parse(a.fengxianDetail):[])}))},jumpLianXiDetail:function(t){var e=this;this.lianxiDia=!0,this.search_res.forEach((function(a){a.id===t&&(e.showDiaData=a.lianjieDetail.length>5?JSON.parse(a.lianjieDetail):[])}))},exportCsv:function(){var t={group:this.group_name,phone:this.group_form.phone};r["a"].post("api/v1/xd/financesSearchExportDetail",t,localStorage.getItem("token")).then((function(t){200===t.data.code&&window.open("https://api.meirixindong.com/Static/Temp/"+t.data.result,"_blank")}))},editGroupDesc:function(){var t={groupDesc:this.group_form.group_desc,group:this.group_form.group,phone:this.group_form.phone};r["a"].post("api/v1/xd/financesSearchEditGroupDesc",t,localStorage.getItem("token")).then((function(t){200===t.data.code&&location.reload()})),this.group_dialog_show_flag=!1},runFengXian:function(){var t=this;this.$confirm("确定处理这批企业的 <风险> 标签吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message({type:"success",message:"正在处理"});var e={group_name:t.group_name,phone:localStorage.getItem("phone")};r["a"].post("api/v1/xd/financesSearchHandleFengXianLabel",e,localStorage.getItem("token")).then((function(t){t.data.code}))})).catch((function(){}))},runLianJie:function(){var t=this;this.$confirm("确定处理这批企业的 <链接> 标签吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message({type:"success",message:"正在处理"});var e={group_name:t.group_name,phone:localStorage.getItem("phone")};r["a"].post("api/v1/xd/financesSearchHandleLianJieLabel",e,localStorage.getItem("token")).then((function(t){t.data.code}))})).catch((function(){}))},runCaiWu:function(){var t=this;this.$confirm("确定处理这批企业的 <财务> 标签吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message({type:"success",message:"正在处理"});var e={group_name:t.group_name,phone:localStorage.getItem("phone")};r["a"].post("api/v1/xd/financesSearchHandleCaiWuLabel",e,localStorage.getItem("token")).then((function(t){t.data.code}))})).catch((function(){}))},group_search:function(){var t=this;r["a"].post("api/v1/xd/financesGroupSearch",this.group_cond,localStorage.getItem("token")).then((function(e){200===e.data.code&&(t.group_res=e.data.result,t.group_paginate.total=e.data.paging.total,t.group_loading=!1)}))},getGroupRow:function(t,e){var a=this;this.loading=!0,this.group_name=e.group,this.group_form.group=e.group,this.group_form.group_desc=e.groupDesc,this.group_dialog_show_flag=!0;var o={page:1,phone:localStorage.getItem("phone"),group_name:e.group};r["a"].post("api/v1/xd/financesGroupSearch",o,localStorage.getItem("token")).then((function(t){200===t.data.code&&(a.search_res=t.data.result,a.paginate.total=t.data.paging.total,a.loading=!1)}))},delGroupRow:function(t,e){var a=this;this.$confirm("确认要删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t={group:e.group,userId:e.userId,phone:localStorage.getItem("phone")};console.log(t),r["a"].post("api/v1/xd/delUserGroupList",t,localStorage.getItem("token")).then((function(t){200===t.data.code&&(a.$message({type:"success",message:"成功"}),location.reload())}))})).catch((function(){}))},pageChange:function(t){var e=this;this.loading=!0;var a={page:t,phone:localStorage.getItem("phone"),group_name:this.group_name};r["a"].post("api/v1/xd/financesGroupSearch",a,localStorage.getItem("token")).then((function(t){200===t.data.code&&(e.search_res=t.data.result,e.paginate.total=t.data.paging.total,e.loading=!1)}))}}},l=i,s=(a("108f"),a("2877")),c=Object(s["a"])(l,o,n,!1,null,"135cfbcc",null);e["default"]=c.exports},"337a":function(t,e,a){"use strict";a("d3b7");var o=a("bc3a"),n=a.n(o),r={Authorization:"K.","Access-Control-Allow-Origin":"*","Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},i="https://api.meirixindong.com/";e["a"]={post:function(t,e,a){return r.Authorization=a,new Promise((function(a,o){n()({url:i+t,method:"post",headers:r,params:e}).then((function(t){a(t)})).catch((function(t){o(t)}))}))}}},da58:function(t,e,a){}}]);