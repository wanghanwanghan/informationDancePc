(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30719240"],{1831:function(t,a,e){"use strict";e.d(a,"e",(function(){return r})),e.d(a,"f",(function(){return i})),e.d(a,"a",(function(){return s})),e.d(a,"b",(function(){return u})),e.d(a,"c",(function(){return o})),e.d(a,"d",(function(){return c})),e.d(a,"i",(function(){return l})),e.d(a,"j",(function(){return p})),e.d(a,"g",(function(){return d})),e.d(a,"h",(function(){return f})),e.d(a,"k",(function(){return h})),e.d(a,"l",(function(){return v}));var n=e("b775");function r(t){return Object(n["a"])({url:"/api/v1/fh/getSatpartyQs",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/api/v1/fh/getSatpartyQsDetail",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/api/v1/fh/getSatpartyChufa",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/api/v1/fh/getSatpartyChufaDetail",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/api/v1/fh/getSatpartyFzc",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/api/v1/fh/getSatpartyFzcDetail",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/api/v1/fh/getSatpartyXin",method:"post",data:t})}function p(t){return Object(n["a"])({url:"/api/v1/fh/getSatpartyXinDetail",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/api/v1/fh/getSatpartyReg",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/api/v1/fh/getSatpartyRegDetail",method:"post",data:t})}function h(t){return Object(n["a"])({url:"/api/v1/fh/getSatpartyXuke",method:"post",data:t})}function v(t){return Object(n["a"])({url:"/api/v1/fh/getSatpartyXukeDetail",method:"post",data:t})}},"38f5":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"box"},[0===t.detail.length?e("div",{staticClass:"box2"},[t._v(" 暂无相关信息 ")]):t._e(),0!==t.detail.length?e("div",{staticClass:"box2"},[e("h3",[t._v(t._s(t.detail[0].title))]),e("el-row",{staticClass:"cont"},[e("el-col",{attrs:{span:12}},[e("div",{staticClass:"grid-content bg-purple"}),e("span",[t._v("公司名称：")]),e("span",[t._v(t._s(t.detail[0].pname))])]),e("el-col",{attrs:{span:12}},[e("div",{staticClass:"grid-content bg-purple"}),e("span",[t._v("法人代表：")]),e("span",[t._v(t._s(t.detail[0].legalRepresentative))])])],1),e("el-row",{staticClass:"cont"},[e("el-col",{attrs:{span:12}},[e("div",{staticClass:"grid-content bg-purple"}),e("span",[t._v("类别：")]),e("span",[t._v(t._s(t.detail[0].eventName))])]),e("el-col",{attrs:{span:12}},[e("div",{staticClass:"grid-content bg-purple"}),e("span",[t._v("纳税人ID：")]),e("span",[t._v(t._s(t.detail[0].taxpayerId))])])],1),e("el-row",{staticClass:"cont"},[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"grid-content bg-purple"}),e("span",[t._v("内容：")]),e("span",[t._v(t._s(t.detail[0].body))])])],1)],1):t._e()])},r=[],i=e("1831"),s={data:function(){return{query:{entName:"",phone:"",pageNo:1,pageSize:10,id:""},detail:[]}},created:function(){var t=this;this.query.entName=localStorage.getItem("entName"),this.query.id=this.$route.params.id,this.query.phone=localStorage.getItem("phone"),Object(i["l"])(this.query).then((function(a){t.detail=a.data.result}))}},u=s,o=(e("fe69"),e("2877")),c=Object(o["a"])(u,n,r,!1,null,"162b482d",null);a["default"]=c.exports},f0a4:function(t,a,e){},fe69:function(t,a,e){"use strict";e("f0a4")}}]);