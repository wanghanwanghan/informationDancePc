(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af9a75c4"],{"006a":function(t,e,a){"use strict";a("be91")},"04b5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("section",{staticClass:"et-hero-tabs"},[a("div",{class:t.isFixed?"et-hero-tabs-containerf":"et-hero-tabs-container"},[a("a",{staticClass:"et-hero-tab",attrs:{href:"#tab-jb"}},[t._v("基本信息")]),a("a",{staticClass:"et-hero-tab",attrs:{href:"#tab-gd"}},[t._v("股东")]),a("a",{staticClass:"et-hero-tab",attrs:{href:"#tab-contor"}},[t._v("实际控制人")]),a("a",{staticClass:"et-hero-tab",attrs:{href:"#tab-manger"}},[t._v("企业主要管理人")]),a("a",{staticClass:"et-hero-tab",attrs:{href:"#tab-banch"}},[t._v("分支机构")]),a("a",{staticClass:"et-hero-tab",attrs:{href:"#tab-change"}},[t._v("变更信息")]),a("a",{staticClass:"et-hero-tab",attrs:{href:"#tab-frbg"}},[t._v("法人变更")]),a("a",{staticClass:"et-hero-tab",attrs:{href:"#tab-errinfo"}},[t._v("经营异常")]),a("span",{staticClass:"et-hero-tab-slider"})])]),a("main",{staticClass:"et-main"},[a("section",{staticClass:"et-slide",staticStyle:{"min-height":"100px","margin-top":"50px"},attrs:{id:"tab-jb"}},[a("h3",{staticStyle:{"margin-left":"20px"}},[t._v("基本信息")]),a("div",{staticClass:"box1"},[""===t.list||null===t.list?a("div",{staticClass:"cont"},[t._v("暂无相关信息")]):t._e(),""!==t.list||null!==t.list?a("div",{staticClass:"cont"},[a("table",[a("tr",[a("td",{staticClass:"type1"},[t._v("法人代表")]),a("td",{staticClass:"type2"},[t._v(t._s(t.list.OperName))]),a("td",[t._v("企业名称")]),a("td",[t._v(t._s(t.list.Name))]),a("td",[t._v("公司类型")]),a("td",{staticClass:"type3"},[t._v(t._s(t.list.EconKind))])]),a("tr",[a("td",[t._v("统一社会信用代码")]),a("td",[t._v(t._s(t.list.CreditCode))]),a("td",[t._v("注册资本（万元）")]),a("td",[t._v(t._s(t.list.RegistCapi))]),a("td",[t._v("成立日期")]),a("td",{staticClass:"type3"},[t._v(t._s(t.list.TermStart))])]),a("tr",[a("td",[t._v("营业期限")]),a("td",[t._v(t._s(t.list.TermStart)+"至"+t._s(t.list.TeamEnd))]),a("td",[t._v("登记机关")]),a("td",[t._v(t._s(t.list.BelongOrg))]),a("td",[t._v("核准日期")]),a("td",{staticClass:"type3"},[t._v(t._s(t.list.CheckDate))])]),a("tr",[a("td",[t._v("注册地址")]),a("td",{staticClass:"type3",attrs:{colspan:"5"}},[t._v(t._s(t.list.Address))])]),a("tr",[a("td",{staticClass:"type4"},[t._v("经营范围")]),a("td",{staticClass:"type3 type4",attrs:{colspan:"5"}},[t._v(t._s(t.list.Scope))])])])]):t._e()])]),a("section",{staticClass:"et-slide",staticStyle:{"min-height":"100px","margin-top":"50px"},attrs:{id:"tab-gd"}},[a("h3",{staticStyle:{"margin-left":"20px"}},[t._v("股东")]),a("div",{staticClass:"box2"},[""!==t.gd||null!==t.list?a("div",{staticClass:"cont"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.gd,border:""}},[a("el-table-column",{attrs:{label:"序号",type:"index",align:"center",width:"50"}}),a("el-table-column",{attrs:{prop:"INV",label:"股东名称",align:"center",width:"180"}}),a("el-table-column",{attrs:{prop:"SHXYDM",label:"统一社会信用代码",align:"center",width:"180"}}),a("el-table-column",{attrs:{prop:"INVTYPE",label:"股东类型",align:"center",width:"160"}}),a("el-table-column",{attrs:{prop:"SUBCONAM",label:"认缴出资额(万元)",align:"center",width:"160"}}),a("el-table-column",{attrs:{prop:"CONCUR",label:"出资币种",align:"center",width:"100"}}),a("el-table-column",{attrs:{prop:"CONRATIO",align:"center",label:"出资比例",width:"100"}}),a("el-table-column",{attrs:{prop:"CONDATE",align:"center",label:"出资时间"}})],1)],1):t._e()])]),a("section",{staticClass:"et-slide",staticStyle:{"min-height":"100px","margin-top":"50px"},attrs:{id:"tab-contor"}},[a("h3",{staticStyle:{"margin-left":"20px"}},[t._v(" 实际控制人 "),t.show?a("span",[t._v(" ( 最大股东 : "+t._s(this.finalBeneficiary.name)+" 持股比例 : "+t._s(this.finalBeneficiary.total)+" ) ")]):t._e()]),a("div",{staticClass:"box2"},[t.show?t._e():a("div",{staticClass:"cont1"},[t._v(" 此信息需要付费 "),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:t.pay}},[t._v("点击查看")])],1),t.show?a("div",{staticClass:"cont"},[0===t.contor.length||null===t.contor?a("div",{staticClass:"cont"},[t._v("因穿透股东中有政府部门或国资单位等特殊机构，故不予显示（消耗费用将返还）")]):t._e(),0!==t.contor.length?a("div",{staticClass:"cont"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.contor.DetailInfoList,border:""}},[a("el-table-column",{attrs:{label:"序号",type:"index",align:"center",width:"50"}}),a("el-table-column",{attrs:{prop:"StockType",label:"持股方式",align:"center",width:"180"}}),a("el-table-column",{attrs:{prop:"StockPercent",label:"占比",align:"center",width:"180"}}),a("el-table-column",{attrs:{prop:"Path",align:"center",label:"股权链"}})],1)],1):t._e()]):t._e()])]),a("section",{staticClass:"et-slide",staticStyle:{"min-height":"100px","margin-top":"50px"},attrs:{id:"tab-manger"}},[a("h3",{staticStyle:{"margin-left":"20px"}},[t._v("企业主要管理人")]),a("div",{staticClass:"box2"},[0===t.manger.legth||null===t.manger?a("div",{staticClass:"cont"},[t._v("暂无相关信息")]):t._e(),a("div",{staticClass:"cont"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.manger,border:""}},[a("el-table-column",{attrs:{label:"序号",type:"index",align:"center",width:"50"}}),a("el-table-column",{attrs:{prop:"NAME",label:"姓名",align:"center",width:"350"}}),a("el-table-column",{attrs:{prop:"POSITION",label:"职务",align:"center",width:"350"}}),a("el-table-column",{attrs:{prop:"ISFRDB",label:"是否为法人",align:"center"}})],1)],1)])]),a("section",{staticClass:"et-slide",staticStyle:{"min-height":"100px","margin-top":"50px"},attrs:{id:"tab-banch"}},[a("h3",{staticStyle:{"margin-left":"20px"}},[t._v("分支机构")]),a("div",{staticClass:"box2"},[a("div",{staticClass:"cont"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.branch,border:""}},[a("el-table-column",{attrs:{label:"序号",type:"index",align:"center",width:"50"}}),a("el-table-column",{attrs:{prop:"ENTNAME",label:"分支机构名称",align:"center",width:"360"}}),a("el-table-column",{attrs:{prop:"SHXYDM",label:"统一社会信用代码",align:"center",width:"180"}}),a("el-table-column",{attrs:{prop:"FRDB",label:"负责人",align:"center",width:"100"}}),a("el-table-column",{attrs:{prop:"ESDATE",label:"成立日期",align:"center",width:"140"}}),a("el-table-column",{attrs:{prop:"ENTSTATUS",label:"经营状态",align:"center",width:"140"}}),a("el-table-column",{attrs:{prop:"PROVINCE",label:"登记地省份",align:"center"}})],1)],1)])]),a("section",{staticClass:"et-slide",staticStyle:{"min-height":"100px","margin-top":"50px"},attrs:{id:"tab-change"}},[a("h3",{staticStyle:{"margin-left":"20px"}},[t._v("变更信息")]),a("div",{staticClass:"box2"},[a("div",{staticClass:"cont"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.ChangeInfo,border:""}},[a("el-table-column",{attrs:{label:"序号",type:"index",align:"center",width:"50"}}),a("el-table-column",{attrs:{prop:"ALTITEM",label:"变更事项",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"ALTBE",label:"变更前内容",align:"center",width:"400"}}),a("el-table-column",{attrs:{prop:"ALTAF",label:"变更后内容",align:"center",width:"400"}}),a("el-table-column",{attrs:{prop:"ALTDATE",label:"变更时间",align:"center"}})],1)],1)])]),a("section",{staticClass:"et-slide",staticStyle:{"min-height":"100px","margin-top":"50px"},attrs:{id:"tab-frbg"}},[a("h3",{staticStyle:{"margin-left":"20px"}},[t._v("法人变更")]),a("div",{staticClass:"box2"},[a("div",{staticClass:"cont"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.frbg,border:""}},[a("el-table-column",{attrs:{label:"序号",type:"index",align:"center",width:"50"}}),a("el-table-column",{attrs:{prop:"ALTDATE",label:"变更时间",align:"center",width:"160"}}),a("el-table-column",{attrs:{prop:"ALTBE",label:"变更前",align:"center",width:"400"}}),a("el-table-column",{attrs:{prop:"ALTAF",label:"变更后",align:"center"}})],1)],1)])]),a("section",{staticClass:"et-slide",staticStyle:{"min-height":"100px","margin-top":"50px"},attrs:{id:"tab-errinfo"}},[a("h3",{staticStyle:{"margin-left":"20px"}},[t._v("经营异常")]),a("div",{staticClass:"box2"},[a("div",{staticClass:"cont"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.jyyc,border:""}},[a("el-table-column",{attrs:{label:"序号",type:"index",align:"center",width:"50"}}),a("el-table-column",{attrs:{prop:"REASONIN",label:"异常原因",align:"center",width:"160"}}),a("el-table-column",{attrs:{prop:"DATEIN",label:"列入日期",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"REGORGIN",label:"决定机关",align:"center",width:"160"}}),a("el-table-column",{attrs:{prop:"REASONOUT",label:"移除异常原因",align:"center",width:"250"}}),a("el-table-column",{attrs:{prop:"DATEOUT",label:"移除日期",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"REGORGOUT",label:"决定机关（移除）",align:"center"}})],1)],1)])])])])},l=[],i=(a("b0c0"),a("b775"));function r(t){return Object(i["a"])({url:"/api/v1/qcc/getBasicDetailsByEntName",method:"post",data:t})}function s(t){return t.pageSize||(t.pageSize=100),Object(i["a"])({url:"/api/v1/ts/getShareHolderInfo",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/api/v1/qcc/getBeneficiary",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/api/v1/ts/getMainManagerInfo",method:"post",data:t})}function d(t){return Object(i["a"])({url:"/api/v1/ts/getBranchInfo",method:"post",data:t})}function u(t){return Object(i["a"])({url:"/api/v1/ts/getRegisterChangeInfo",method:"post",data:t})}function p(t){return Object(i["a"])({url:"/api/v1/ts/frbg",method:"post",data:t})}function h(t){return Object(i["a"])({url:"/api/v1/ts/getOperatingExceptionRota",method:"post",data:t})}function b(t){return Object(i["a"])({url:"/api/v1/comm/refundToWallet",method:"post",data:t})}a("de75");var g={data:function(){return{isFixed:!1,scrollHeight:258,query:{entName:"",phone:""},list:"",gd:[],query1:{entName:"",phone:"",pay:""},contor:[],finalBeneficiary:{name:"",total:""},show:!1,manger:[],branch:[],query2:{entName:"",phone:"",pageNo:"",pageSize:""},ChangeInfo:[],frbg:[],jyyc:[]}},mounted:function(){var t=this;window.addEventListener("scroll",this.initHeight),this.query.entName=localStorage.getItem("entName"),this.query.phone=localStorage.getItem("phone"),this.query1.entName=localStorage.getItem("entName"),this.query1.phone=localStorage.getItem("phone"),this.query2.entName=localStorage.getItem("entName"),this.query2.phone=localStorage.getItem("phone"),r(this.query).then((function(e){for(var a in t.list=e.data.result[0],t.list)"CreditCode"===a&&localStorage.setItem("CreditCode",t.list[a])})),s(this.query).then((function(e){t.gd=e.data.result})),o(this.query1).then((function(e){200===e.data.code?(t.contor=e.data.result,t.finalBeneficiary.name=e.data.result.Name,t.finalBeneficiary.total=e.data.result.TotalStockPercent,t.show=!0):t.show=!1})),c(this.query2).then((function(e){t.manger=e.data.result,t.mangerTotal=e.data.paging.total})),d(this.query2).then((function(e){t.branch=e.data.result})),u(this.query2).then((function(e){t.ChangeInfo=e.data.result})),p(this.query).then((function(e){t.frbg=e.data.result})),h(this.query2).then((function(e){t.jyyc=e.data.result}))},methods:{initHeight:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.isFixed=t>this.scrollHeight},pay:function(){var t=this;this.query1.entName=localStorage.getItem("entName"),this.query1.phone=localStorage.getItem("phone"),o(this.query1).then((function(e){200===e.data.code?t.contor=e.data.result:t.$confirm(e.data.msg,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.query1.pay=1,o(t.query1).then((function(e){220===e.data.code?t.$confirm("余额不足，是否前往充值？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$router.push("/login"),localStorage.setItem("activeName","third")})).catch((function(){t.$router.go(0)})):(t.contor=e.data.result,t.finalBeneficiary.name=e.data.result.Name,t.finalBeneficiary.total=e.data.result.TotalStockPercent,0===t.contor.length&&b({phone:localStorage.getItem("phone"),entName:localStorage.getItem("entName"),moduleNum:14}).then((function(t){console.log(t)})),t.$message({type:"success",message:"查询成功!"}),t.show=!0)}))})).catch((function(){t.$message({type:"info",message:"已取消操作"})}))}))}}},m=g,f=(a("006a"),a("2877")),v=Object(f["a"])(m,n,l,!1,null,"2437e91e",null);e["default"]=v.exports},be91:function(t,e,a){},de75:function(t,e,a){"use strict";a.d(e,"i",(function(){return l})),a.d(e,"j",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"d",(function(){return s})),a.d(e,"e",(function(){return o})),a.d(e,"f",(function(){return c})),a.d(e,"o",(function(){return d})),a.d(e,"p",(function(){return u})),a.d(e,"k",(function(){return p})),a.d(e,"l",(function(){return h})),a.d(e,"m",(function(){return b})),a.d(e,"n",(function(){return g})),a.d(e,"g",(function(){return m})),a.d(e,"h",(function(){return f})),a.d(e,"q",(function(){return v})),a.d(e,"a",(function(){return y})),a.d(e,"b",(function(){return C}));var n=a("b775");function l(t){return Object(n["a"])({url:"/api/v1/fh/getKtgg",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/api/v1/fh/getKtggDetail",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/api/v1/fh/getCpws",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/api/v1/fh/getCpwsDetail",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/api/v1/fh/getFygg",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/api/v1/fh/getFyggDetail",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/api/v1/fh/getZxgg",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/api/v1/fh/getZxggDetail",method:"post",data:t})}function p(t){return Object(n["a"])({url:"/api/v1/fh/getShixin",method:"post",data:t})}function h(t){return Object(n["a"])({url:"/api/v1/fh/getShixinDetail",method:"post",data:t})}function b(t){return Object(n["a"])({url:"/api/v1/fh/getSifacdk",method:"post",data:t})}function g(t){return Object(n["a"])({url:"/api/v1/fh/getSifacdkDetail",method:"post",data:t})}function m(t){return Object(n["a"])({url:"/api/v1/qcc/getJudicialSaleList",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/api/v1/qcc/getJudicialSaleListDetail",method:"post",data:t})}function v(t){return Object(n["a"])({url:"/api/v1/user/get/oneSaid",method:"post",data:t})}function y(t){return Object(n["a"])({url:"/api/v1/user/create/oneSaid",method:"post",data:t})}function C(t){return Object(n["a"])({url:"/api/v1/user/edit/oneSaid",method:"post",data:t})}}}]);