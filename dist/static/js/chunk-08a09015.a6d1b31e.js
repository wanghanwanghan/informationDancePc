(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08a09015"],{2423:function(t,e,r){"use strict";r.d(e,"u",(function(){return a})),r.d(e,"a",(function(){return u})),r.d(e,"e",(function(){return o})),r.d(e,"v",(function(){return i})),r.d(e,"j",(function(){return c})),r.d(e,"k",(function(){return d})),r.d(e,"o",(function(){return s})),r.d(e,"n",(function(){return p})),r.d(e,"p",(function(){return l})),r.d(e,"l",(function(){return f})),r.d(e,"m",(function(){return h})),r.d(e,"B",(function(){return b})),r.d(e,"D",(function(){return m})),r.d(e,"E",(function(){return v})),r.d(e,"F",(function(){return O})),r.d(e,"G",(function(){return j})),r.d(e,"A",(function(){return g})),r.d(e,"c",(function(){return y})),r.d(e,"w",(function(){return w})),r.d(e,"r",(function(){return x})),r.d(e,"z",(function(){return C})),r.d(e,"x",(function(){return E})),r.d(e,"q",(function(){return A})),r.d(e,"y",(function(){return q})),r.d(e,"b",(function(){return S})),r.d(e,"d",(function(){return k})),r.d(e,"f",(function(){return D})),r.d(e,"h",(function(){return _})),r.d(e,"g",(function(){return N})),r.d(e,"i",(function(){return L})),r.d(e,"s",(function(){return B})),r.d(e,"C",(function(){return T})),r.d(e,"t",(function(){return z}));var n=r("b775");function a(t){return Object(n["a"])({url:"/api/v1/comm/create/sms/verifyCode",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/api/v1/user/login",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/api/v1/user/reg",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/api/v1/qcc/getEntList",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/api/v1/export/word/createDeep",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/api/v1/export/pdf/createDeep",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/api/v1/export/word/createVeryEasy",method:"post",data:t})}function p(t){return Object(n["a"])({url:"/api/v1/export/word/createTwoTable",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/api/v1/export/pdf/createVeryEasy",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/api/v1/export/pdf/createEasy",method:"post",data:t})}function h(t){return Object(n["a"])({url:"/api/v1/export/word/createEasy",method:"post",data:t})}function b(t){return Object(n["a"])({url:"/api/v1/user/report/list",method:"post",data:t})}function m(t){return Object(n["a"])({url:"/api/v1/user/get/supervisor",method:"post",data:t})}function v(t){return Object(n["a"])({url:"/api/v1/user/get/supervisorListByExcel",method:"post",data:t})}function O(t){return Object(n["a"])({url:"/api/v1/user/get/supervisorLimit",method:"post",data:t})}function j(t){return Object(n["a"])({url:"/api/v1/user/edit/supervisorLimit",method:"post",data:t})}function g(t){return Object(n["a"])({url:"/api/v1/comm/ocr/queue",method:"post",data:t})}function y(t){return Object(n["a"])({url:"/api/v1/user/create/supervisor",method:"post",data:t})}function w(t){return Object(n["a"])({url:"/api/v1/xd/getProductStandard",method:"post",data:t})}function x(t){return Object(n["a"])({url:"/api/v1/xd/getAssetLeads",method:"post",data:t})}function C(t){return Object(n["a"])({url:"/api/v1/user/purchase/list",method:"post",data:t})}function E(t){return Object(n["a"])({url:"/api/v1/xd/getSearchHistory",method:"post",data:t})}function A(t){return Object(n["a"])({url:"/api/v1/xd/delSearchHistory",method:"post",data:t})}function q(t){return Object(n["a"])({url:"/api/v1/user/purchase/goods",method:"post",data:t})}function S(t){return Object(n["a"])({url:"/admin/v1/user/purchase/do",method:"post",data:t})}function k(t){return Object(n["a"])({url:"/api/v1/user/pay/list",method:"post",data:t})}function D(t){return Object(n["a"])({url:"/api/v1/user/create/authBook",method:"post",data:t})}function _(t){return Object(n["a"])({url:"/api/v1/user/get/authBook",method:"post",data:t})}function N(t){return Object(n["a"])({url:"/api/v1/user/check/authBook",method:"post",data:t})}function L(t){return Object(n["a"])({url:"/api/v1/user/purchase/check",method:"post",data:t})}function B(t){return Object(n["a"])({url:"/api/v1/zw/getAuthentication",method:"post",data:t})}function T(t){return Object(n["a"])({url:"api/v1/user/setLoginPassword",method:"post",data:t})}function z(t){return Object(n["a"])({url:"api/v1/dzq/getCarAuthFile",method:"post",data:t})}},acd9:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box"},[r("div",[r("section",{staticClass:"et-slide",staticStyle:{"min-height":"100px","margin-top":"50px"},attrs:{id:"tab-zq"}},[r("h3",{staticStyle:{"margin-left":"20px"}},[t._v("产品数"+t._s(t.total))]),r("div",{staticClass:"box2"},[r("div",{staticClass:"cont"},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[r("el-table-column",{attrs:{label:"序号",type:"index",width:"50"}}),r("el-table-column",{attrs:{prop:"XZQH_NAME",label:"注册地",width:"200"}}),r("el-table-column",{attrs:{prop:"STANDARD_CODE",label:"标准编号",width:"200"}}),r("el-table-column",{attrs:{prop:"STANDARD_NAME",label:"标准名称",width:"240"}}),r("el-table-column",{attrs:{prop:"PUBLIC_DATE",label:"发布日期",width:"240"}}),r("el-table-column",{attrs:{prop:"PRODUCT_NAME",label:"产品名称"}})],1)],1),r("div",{staticClass:"pagination"},[r("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleChange}})],1)])])])])},a=[],u=r("2423"),o={data:function(){return{query:{entName:"",phone:"",page:1,pageSize:10},total:0,list:[]}},created:function(){var t=this;this.query.entName=localStorage.getItem("entName"),this.query.phone=localStorage.getItem("phone"),Object(u["w"])(this.query).then((function(e){t.total=e.data.paging.total,t.list=e.data.result}))},methods:{handleChange:function(t){var e=this;this.list=[],this.query.page=t,Object(u["w"])(this.query).then((function(t){e.list=t.data.result}))}}},i=o,c=r("2877"),d=Object(c["a"])(i,n,a,!1,null,"d666cd90",null);e["default"]=d.exports}}]);