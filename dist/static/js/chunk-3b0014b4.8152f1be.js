(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b0014b4"],{"728b":function(t,a,s){"use strict";s.d(a,"g",(function(){return n})),s.d(a,"h",(function(){return i})),s.d(a,"a",(function(){return c})),s.d(a,"b",(function(){return r})),s.d(a,"f",(function(){return l})),s.d(a,"e",(function(){return o})),s.d(a,"c",(function(){return p})),s.d(a,"d",(function(){return d}));var e=s("b775");function n(t){return Object(e["a"])({url:"/api/v1/qcc/getTmSearch",method:"post",data:t})}function i(t){return Object(e["a"])({url:"/api/v1/qcc/getTmSearchDetail",method:"post",data:t})}function c(t){return Object(e["a"])({url:"/api/v1/qcc/getPatentV4Search",method:"post",data:t})}function r(t){return Object(e["a"])({url:"/api/v1/qcc/getPatentV4SearchDetail",method:"post",data:t})}function l(t){return Object(e["a"])({url:"/api/v1/qcc/getSearchSoftwareCr",method:"post",data:t})}function o(t){return Object(e["a"])({url:"/api/v1/qcc/getSearchCopyRight",method:"post",data:t})}function p(t){return Object(e["a"])({url:"/api/v1/qcc/getSearchCertification",method:"post",data:t})}function d(t){return Object(e["a"])({url:"/api/v1/qcc/getSearchCertificationDetail",method:"post",data:t})}},8361:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"box"},[s("div",{staticClass:"box2"},[s("el-row",{staticClass:"cont"},[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content bg-purple"}),s("span",[t._v("发明名称：")]),s("span",[t._v(t._s(t.detail.Title))])]),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content bg-purple"}),s("span",[t._v("申请号：")]),s("span",[t._v(t._s(t.detail.PublicationNumber))])])],1),s("el-row",{staticClass:"cont"},[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content bg-purple"}),s("span",[t._v("申请日：")]),s("span",[t._v(t._s(t.detail.ApplicationDate))])]),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content bg-purple"}),s("span",[t._v("公开（公告）号：")]),s("span",[t._v(t._s(t.detail.ApplicationNumber))])])],1),s("el-row",{staticClass:"cont"},[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content bg-purple"}),s("span",[t._v("公开（公告）日期：")]),s("span",[t._v(t._s(t.detail.ApplicationDate))])]),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content bg-purple"})])],1),s("el-row",{staticClass:"cont"},[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content bg-purple"}),s("h3",[t._v("IPC分类号")])]),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content bg-purple"})])],1),t._l(t.detail.IPCList,(function(a){return s("div",{key:a},[s("div",{staticClass:"cont"},[t._v(t._s(a))])])})),s("el-row",{staticClass:"cont"},[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content bg-purple"}),s("h3",[t._v("申请/代理机构")])]),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content bg-purple"})])],1),s("div",{staticClass:"cont"},[t._v(" 申请（专利权）人： ")]),t._l(t.detail.AssigneestringList,(function(a){return s("div",{key:a},[s("div",{staticClass:"cont"},[t._v(t._s(a))])])})),s("el-row",{staticClass:"cont"},[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content bg-purple"}),s("span",[t._v("发明人：")]),s("span",[t._v(t._s(t.detail.Agent))])]),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content bg-purple"}),s("span",[t._v("代理机构：")]),s("span",[t._v(t._s(t.detail.Agency[0]))])])],1),s("el-row",{staticClass:"cont"},[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content bg-purple"}),s("span",[t._v("发明人：")]),s("span",[t._v(t._s(t.detail.Agent))])]),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content bg-purple"})])],1),s("el-row",{staticClass:"cont"},[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"grid-content bg-purple"}),s("span",[t._v("摘要:")]),s("span",[t._v(t._s(t.detail.Abstract))])])],1),s("el-row",{staticClass:"cont"},[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content bg-purple"}),s("span",[t._v("法律状态：")]),s("span",[t._v(t._s(t.detail.LegalStatusDesc))])]),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content bg-purple"})])],1)],2)])},n=[],i=s("728b"),c={data:function(){return{query:{entName:"",phone:"",pageNo:1,pageSize:10,id:""},detail:""}},created:function(){var t=this;this.query.entName=localStorage.getItem("entName"),this.query.id=this.$route.params.id,this.query.phone=localStorage.getItem("phone"),Object(i["b"])(this.query).then((function(a){t.detail=a.data.result}))}},r=c,l=(s("d069"),s("2877")),o=Object(l["a"])(r,e,n,!1,null,"ad0030fa",null);a["default"]=o.exports},d069:function(t,a,s){"use strict";s("ebba")},ebba:function(t,a,s){}}]);