(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-commons"],{"2a3a":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container"},[s("img",{staticClass:"panel-image",attrs:{src:"https://api.meirixindong.com/Static/Image/Image/xdzd_logo_big.jpeg",alt:""},on:{click:t.jumpBack}}),t._m(0),s("div",{staticClass:"panel-body"},[s("div",{staticClass:"left"},[s("div",{staticClass:"leftQ"},[s("el-button",{staticClass:"title",attrs:{type:"primary",plain:"",size:"mini"}},[t._v("监控企业")]),s("el-select",{staticStyle:{width:"240px"},attrs:{filterable:"",placeholder:"请选择"},on:{change:t.choose},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return s("el-option",{key:t.value,attrs:{label:t.entName,value:t.entName}})})),1),s("span",{staticClass:"set",on:{click:t.showM}},[t._v("设置每周扫描的短信提示风险阈值")])],1),s("div",{staticClass:"leftFL"},[s("el-button",{staticClass:"title",attrs:{type:"primary",plain:"",size:"mini"}},[t._v("监控类型")]),t._l(t.fxfl,(function(e,i){return s("div",{key:e.index,class:{activefxfl:t.index_fxfl===i},on:{click:function(s){return t.changefxfl(i,e)}}},[t._v(t._s(e)+" ")])}))],2),s("div",{staticClass:"leftF"},[s("el-button",{staticClass:"title",attrs:{type:"primary",plain:"",size:"mini"}},[t._v("风险等级")]),t._l(t.fxdj,(function(e,i){return s("div",{key:e.index,class:{active:t.index_fxdj===i},on:{click:function(s){return t.change(i,e)}}},[t._v(t._s(e)+" ")])}))],2),t.show_fxlx?s("div",{staticClass:"leftL"},[s("el-button",{staticClass:"title",attrs:{type:"primary",plain:"",size:"mini"}},[t._v("风险类型")]),t._l(t.fxlx,(function(e,i){return s("div",{key:e.index,class:{activefxlx:t.index_fxlx===i},on:{click:function(s){return t.changefxlx(i,e)}}},[t._v(t._s(e)+" ")])}))],2):t._e(),s("el-dialog",{attrs:{title:"设置每周扫描的短信提示风险阈值",visible:t.dialogVisible,width:"50%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[s("div",{staticClass:"yzts"},[s("el-button",{staticClass:"Kbtn",attrs:{type:"primary",plain:""}},[t._v("司法风险阈值")]),s("el-input-number",{attrs:{min:0,max:10,label:"描述文字"},model:{value:t.num1,callback:function(e){t.num1=e},expression:"num1"}})],1),s("div",{staticClass:"yzts"},[s("el-button",{staticClass:"Kbtn",attrs:{type:"primary",plain:""}},[t._v("工商风险阈值")]),s("el-input-number",{attrs:{min:0,max:10,label:"描述文字"},model:{value:t.num2,callback:function(e){t.num2=e},expression:"num2"}})],1),s("div",{staticClass:"yzts"},[s("el-button",{staticClass:"Kbtn",attrs:{type:"primary",plain:""}},[t._v("管理风险阈值")]),s("el-input-number",{attrs:{min:0,max:10,label:"描述文字"},model:{value:t.num3,callback:function(e){t.num3=e},expression:"num3"}})],1),s("div",{staticClass:"yzts"},[s("el-button",{staticClass:"Kbtn",attrs:{type:"primary",plain:""}},[t._v("经营风险阈值")]),s("el-input-number",{attrs:{min:0,max:10,label:"描述文字"},model:{value:t.num4,callback:function(e){t.num4=e},expression:"num4"}})],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.tijiaoY}},[t._v("确 定")])],1)]),t.show_zyfdt?s("div",{staticClass:"leftZ"},[s("el-button",{staticClass:"title",attrs:{type:"primary",plain:"",size:"mini"}},[t._v("重点对象")]),t._l(t.zyfdt,(function(e,i){return s("div",{key:e.index,class:{activezydt:t.index_zyfdt===i},on:{click:function(s){return t.changezydt(i,e)}}},[t._v(t._s(e)+" ")])}))],2):t._e(),t.show_sffx?s("div",{staticClass:"leftS"},[s("el-button",{staticClass:"title",attrs:{type:"primary",plain:"",size:"mini"}},[t._v("司法风险")]),t._l(t.sffx,(function(e,i){return s("div",{key:e.index,class:{activesffx:t.index_sffx===i},on:{click:function(s){return t.changesffx(i,e)}}},[t._v(t._s(e)+" ")])}))],2):t._e(),t.show_gsfx?s("div",{staticClass:"leftG"},[s("el-button",{staticClass:"title",attrs:{type:"primary",plain:"",size:"mini"}},[t._v("工商风险")]),t._l(t.gsfx,(function(e,i){return s("div",{key:e.index,class:{activegsfx:t.index_gsfx===i},on:{click:function(s){return t.changegsfx(i,e)}}},[t._v(t._s(e)+" ")])}))],2):t._e(),t.show_glfx?s("div",{staticClass:"leftGL"},[s("el-button",{staticClass:"title",attrs:{type:"primary",plain:"",size:"mini"}},[t._v("管理风险")]),t._l(t.glfx,(function(e,i){return s("div",{key:e.index,class:{activeglfx:t.index_glfx===i},on:{click:function(s){return t.changeglfx(i,e)}}},[t._v(t._s(e)+" ")])}))],2):t._e(),t.show_jyfx?s("div",{staticClass:"leftJ"},[s("el-button",{staticClass:"title",attrs:{type:"primary",plain:"",size:"mini"}},[t._v("经营风险")]),t._l(t.jyfx,(function(e,i){return s("div",{key:e.index,class:{activejyfx:t.index_jyfx===i},on:{click:function(s){return t.changejyfx(i,e)}}},[t._v(t._s(e)+" ")])}))],2):t._e(),s("div",{staticClass:"leftSJ"},[s("el-button",{staticClass:"title",attrs:{type:"primary",plain:"",size:"mini"}},[t._v("时间选择")]),t._l(t.sjxz,(function(e,i){return s("div",{key:e.index,class:{activesjxz:t.index_sjxz===i},on:{click:function(s){return t.changesjxz(i,e)}}},[t._v(t._s(e)+" ")])}))],2)],1),s("div",{staticClass:"right"})]),s("div",{staticClass:"panel panel-info myShadowFather",staticStyle:{"margin-top":"30px"}},[s("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[s("el-table-column",{attrs:{width:"350",align:"center",label:"企业名称"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[s("span",[t._v(t._s(i.entName))])]}}])}),s("el-table-column",{attrs:{width:"96",align:"center",label:"风险等级"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[s("span",[t._v(t._s(t.levelToWord(i.level)))])]}}])}),s("el-table-column",{attrs:{width:"200",align:"center",label:"风险说明"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[s("span",[t._v(t._s(i.desc))])]}}])}),s("el-table-column",{attrs:{align:"center",label:"风险内容"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[s("span",{domProps:{innerHTML:t._s(i.content)}},[t._v(t._s(i.content))])]}}])}),s("el-table-column",{attrs:{width:"200",align:"center",label:"监控时间"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[s("span",[t._v(t._s(t._f("parseTime")(i.updated_at,"{y}-{m}-{d} {h}:{i}")))])]}}])})],1)],1),s("div",{staticClass:"pagination"},[s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalsupervisor},on:{"current-change":t.handleChangesupervisor}})],1)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel-heading"},[s("div",{staticClass:"panel-title"},[s("h3",[t._v("风险动态")])]),s("div",[s("span",{staticStyle:{"font-size":"12px"}},[t._v("基于公开信息分析生成，仅供参考，并不代表任何明示，暗示之观点或保证")])])])}],n=s("2423"),l=s("ed08"),r={name:"RiskMonitoring",props:{},filters:{parseTime:l["a"]},mounted:function(){var t=this;this.sType=this.$route.params.sType,this.entName=this.$route.params.entName,this.value=this.entName,this.query.phone=localStorage.getItem("phone"),this.query1.phone=localStorage.getItem("phone"),this.query2.phone=localStorage.getItem("phone"),this.query.entName=this.entName,this.query1.entName=this.entName,this.query2.entName=this.entName,"重点对象"===this.sType&&(this.sType=1),"合作"===this.sType&&(this.sType=2),"全部"===this.sType&&(this.sType=3),this.query.supervisorType=this.sType,Object(n["C"])(this.query).then((function(e){t.list=[],t.totalsupervisor=0,t.totalsupervisor=e.data.paging.total,t.list=e.data.result.detail,t.options=e.data.result.entList}))},data:function(){return{options:[],value:"",fxfl:["全部","重点对象","合作/投资对象"],index_fxfl:0,fxdj:["全部","高风险","风险","警示","提示","利好"],index_fxdj:0,fxlx:["全部","司法风险","工商风险","管理风险","经营风险"],index_fxlx:0,show_fxlx:!1,zyfdt:["全部","股东变更","注销/吊销","行政处罚","开庭公告","失信被执行人","被执行人","裁判文书","新闻舆情"],index_zyfdt:0,show_zyfdt:!1,sffx:["全部","股权冻结","法院公告","查封冻结扣押"],index_sffx:0,show_sffx:!1,gsfx:["全部","工商变更","实际控制人变更","最终受益人变更","对外投资","主要成员"],index_gsfx:0,show_gsfx:!1,glfx:["全部","严重违法","环保处罚","税收违法","欠税公告","海关处罚","一行两会","环保监测","环保监控","环评公示"],index_glfx:0,show_glfx:!1,jyfx:["全部","经营异常","动产抵押","土地抵押","股权出质","股权质押","对外担保"],index_jyfx:0,show_jyfx:!1,sjxz:["全部","近7天","近30天","今年"],index_sjxz:0,RQ:"",list:[],totalsupervisor:0,dialogVisible:!1,num1:1,num2:1,num3:1,num4:1,query1:{phone:"",entName:""},query2:{phone:"",entName:"",sf:"",gs:"",gl:"",jy:""},query:{phone:"",entName:"",title:"",level:"",type:"",supervisorType:"",typeDetail:"",timeRange:"",page:1,pageSize:10}}},methods:{jumpBack:function(){this.$router.go(-1)},levelToWord:function(t){return 1===t?"高风险":2===t?"风险":3===t?"警示":4===t?"提示":5===t?"利好":void 0},changefxfl:function(t,e){var s=this;this.index_fxfl=t,this.query.title=e,this.query.level="",this.query.page=1,"重点对象"===e&&(this.sType=1),"合作/投资对象"===e&&(this.sType=2),"全部"===e&&(this.sType=3),this.query.supervisorType=this.sType,Object(n["C"])(this.query).then((function(t){s.list=[],s.totalsupervisor=0,s.list=t.data.result.detail,s.totalsupervisor=t.data.paging.total})),this.show_zyfdt=!1,this.show_fxlx=!1,this.show_sffx=!1,this.show_gsfx=!1,this.show_glfx=!1,this.show_jyfx=!1,"重点对象"===e&&(this.show_zyfdt=!0,this.show_fxlx=!1,this.show_sffx=!1,this.show_gsfx=!1,this.show_glfx=!1,this.show_jyfx=!1,this.query.type="重点对象",this.query.typeDetail="全部"),"合作/投资对象"===e&&(this.show_zyfdt=!1,this.show_fxlx=!0,this.query.type="合作/投资对象",this.query.typeDetail="全部")},change:function(t,e){var s=this;this.index_fxdj=t,this.query.level=e,this.query.page=1,Object(n["C"])(this.query).then((function(t){s.list=[],s.totalsupervisor=0,s.list=t.data.result.detail,s.totalsupervisor=t.data.paging.total}))},changefxlx:function(t,e){var s=this;this.index_fxlx=t,this.query.type=e,this.query.page=1,Object(n["C"])(this.query).then((function(t){s.list=[],s.totalsupervisor=0,s.list=t.data.result.detail,s.totalsupervisor=t.data.paging.total})),"司法风险"===e&&(this.show_sffx=!0,this.show_gsfx=!1,this.show_glfx=!1,this.show_jyfx=!1),"工商风险"===e&&(this.show_sffx=!1,this.show_gsfx=!0,this.show_glfx=!1,this.show_jyfx=!1),"管理风险"===e&&(this.show_sffx=!1,this.show_gsfx=!1,this.show_glfx=!0,this.show_jyfx=!1),"经营风险"===e&&(this.show_sffx=!1,this.show_gsfx=!1,this.show_glfx=!1,this.show_jyfx=!0)},changezydt:function(t,e){var s=this;this.index_zyfdt=t,this.query.title="重点对象",this.query.type="重点对象",this.query.typeDetail=e,this.query.page=1,Object(n["C"])(this.query).then((function(t){s.list=[],s.totalsupervisor=0,s.list=t.data.result.detail,s.totalsupervisor=t.data.paging.total}))},changesffx:function(t,e){var s=this;this.index_sffx=t,this.query.typeDetail=e,this.query.page=1,Object(n["C"])(this.query).then((function(t){s.list=[],s.totalsupervisor=0,s.list=t.data.result.detail,s.totalsupervisor=t.data.paging.total}))},changegsfx:function(t,e){var s=this;this.index_gsfx=t,this.query.typeDetail=e,this.query.page=1,Object(n["C"])(this.query).then((function(t){s.list=[],s.totalsupervisor=0,s.list=t.data.result.detail,s.totalsupervisor=t.data.paging.total}))},changeglfx:function(t,e){var s=this;this.index_glfx=t,this.query.typeDetail=e,this.query.page=1,Object(n["C"])(this.query).then((function(t){s.list=[],s.totalsupervisor=0,s.list=t.data.result.detail,s.totalsupervisor=t.data.paging.total}))},changejyfx:function(t,e){var s=this;this.index_jyfx=t,this.query.typeDetail=e,this.query.page=1,Object(n["C"])(this.query).then((function(t){s.list=[],s.totalsupervisor=0,s.list=t.data.result.detail,s.totalsupervisor=t.data.paging.total}))},changesjxz:function(t,e){var s=this;this.index_sjxz=t,this.query.page=1,"近7天"===e&&(this.query.timeRange=7,Object(n["C"])(this.query).then((function(t){s.list=[],s.totalsupervisor=0,s.list=t.data.result.detail,s.totalsupervisor=t.data.paging.total}))),"近30天"===e&&(this.query.timeRange=30,Object(n["C"])(this.query).then((function(t){s.list=[],s.totalsupervisor=0,s.list=t.data.result.detail,s.totalsupervisor=t.data.paging.total}))),"今年"===e&&(this.query.timeRange=365,Object(n["C"])(this.query).then((function(t){s.list=[],s.totalsupervisor=0,s.list=t.data.result.detail,s.totalsupervisor=t.data.paging.total})))},choose:function(t){var e=this;this.query.entName=t,this.query1.entName=t,this.query2.entName=t,Object(n["C"])(this.query).then((function(t){e.list=[],e.totalsupervisor=0,e.list=t.data.result.detail,e.totalsupervisor=t.data.paging.total}))},handleChangesupervisor:function(t){var e=this;this.list=[],this.query.page=t,Object(n["C"])(this.query).then((function(t){e.list=t.data.result.detail}))},showM:function(){var t=this;this.dialogVisible=!0,Object(n["E"])(this.query1).then((function(e){t.num1=e.data.result.sf,t.num2=e.data.result.gs,t.num3=e.data.result.gl,t.num4=e.data.result.jy}))},tijiaoY:function(){this.dialogVisible=!1,this.query2.sf=this.num1,this.query2.gs=this.num2,this.query2.gl=this.num3,this.query2.jy=this.num4,Object(n["F"])(this.query2).then((function(t){console.log(t)}))}}},o=r,u=(s("a296"),s("2877")),h=Object(u["a"])(o,i,a,!1,null,"3c56bdee",null);e["a"]=h.exports},a296:function(t,e,s){"use strict";s("b4c8")},b4c8:function(t,e,s){}}]);