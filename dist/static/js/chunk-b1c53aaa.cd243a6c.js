(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1c53aaa"],{"337a":function(t,e,a){"use strict";a("d3b7");var n=a("bc3a"),o=a.n(n),l={Authorization:"K.","Access-Control-Allow-Origin":"*","Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},s="https://api.meirixindong.com/";e["a"]={post:function(t,e,a){return l.Authorization=a,new Promise((function(a,n){o()({url:s+t,method:"post",headers:l,params:e}).then((function(t){a(t)})).catch((function(t){n(t)}))}))}}},"53d5":function(t,e,a){t.exports=a.p+"static/img/zcgm.be16abdc.png"},"7f2c":function(t,e,a){t.exports=a.p+"static/img/ysgm.2dcce672.png"},a15b:function(t,e,a){"use strict";var n=a("23e7"),o=a("44ad"),l=a("fc6a"),s=a("a640"),r=[].join,i=o!=Object,c=s("join",",");n({target:"Array",proto:!0,forced:i||!c},{join:function(t){return r.call(l(this),void 0===t?",":t)}})},a3fb:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"finance-wrapper"},[n("div",{staticClass:"header-wrapper"}),n("div",{staticClass:"content-wrapper"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showBtn,expression:"!showBtn"}],staticClass:"search-wrapper"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-input",{staticClass:"el-btn",attrs:{placeholder:"模糊搜索企业名称",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search.apply(null,arguments)}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),n("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("搜索")])],1),t._l(t.entList,(function(e,a){return n("div",{key:a,staticClass:"text item ent-list-wrapper"},[n("div",{staticClass:"ent-list-item"},[t._v(t._s(e.Name))]),n("div",{staticClass:"diff-btn",on:{click:function(a){return t.addDiff(e.Name)}}},[t._v("加入对比")])])}))],2)],1),n("el-col",{attrs:{span:12}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",{staticStyle:{"margin-right":"20px"}},[t._v("对比列表")]),n("el-button",{attrs:{type:"primary"},on:{click:t.drowPic}},[t._v("生成财务图")])],1),t._l(t.diffList,(function(e,a){return n("div",{key:a,staticClass:"text item ent-list-wrapper"},[n("div",{staticClass:"ent-list-item"},[t._v(t._s(e))]),n("div",{staticClass:"undiff-btn",on:{click:function(a){return t.unDiff(e)}}},[t._v("移出对比列表")])])}))],2)],1)],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showBtn,expression:"showBtn"}],staticClass:"finance-btn"},[n("el-button",{attrs:{type:"warning",round:""},on:{click:t.getData}},[t._v("点击查看企业财务表现")]),n("div",{staticStyle:{color:"red","font-size":"14px","margin-top":"20px"}},[t._v("还有 "+t._s(t.lookCount)+" 次免费机会")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showBtn,expression:"showBtn"}]},[n("div",{staticClass:"block"},[n("div",{staticStyle:{width:"100%",height:"100px","font-size":"30px","font-weight":"800",color:"red","line-height":"100px"}},[t._v("营收规模 - 数据样例 ")]),n("el-image",{attrs:{src:a("7f2c")}})],1),n("div",{staticClass:"block"},[n("div",{staticStyle:{width:"100%",height:"100px","font-size":"30px","font-weight":"800",color:"red","line-height":"100px"}},[t._v("盈利能力 - 数据样例 ")]),n("el-image",{attrs:{src:a("aada")}})],1),n("div",{staticClass:"block"},[n("div",{staticStyle:{width:"100%",height:"100px","font-size":"30px","font-weight":"800",color:"red","line-height":"100px"}},[t._v("资产规模 - 数据样例 ")]),n("el-image",{attrs:{src:a("53d5")}})],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showBtn,expression:"!showBtn"}],staticClass:"VENDINC-scale-wrapper"},[n("div",{staticStyle:{float:"left","margin-bottom":"10px","margin-top":"10px",color:"rgb(142,143,151)"}},[t._v("营收规模标签")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.VENDINC_scale_label_data,border:"","header-cell-style":{color:"#006eda"}}},[n("el-table-column",{attrs:{label:"序号",type:"index",align:"center",width:"100"}}),n("el-table-column",{attrs:{prop:"entname",label:"企业名称",align:"center"}}),n("el-table-column",{attrs:{prop:"label",label:"标签",align:"center"}}),n("el-table-column",{attrs:{prop:"desc",label:"描述",align:"center"}})],1),t._m(0)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showBtn,expression:"!showBtn"}],staticClass:"VENDINC-ec-wrapper"},[n("div",{ref:"VENDINC",staticClass:"VENDINC-ec-pic"}),n("el-collapse",{attrs:{accordion:""}},[n("el-collapse-item",{attrs:{title:t.bestEntForVENDINC}},[[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.scoreDataForVENDINC,border:"","header-cell-style":{color:"#006eda"}}},[n("el-table-column",{attrs:{align:"center",prop:"index",label:"序号",width:"50"}}),n("el-table-column",{attrs:{align:"center",prop:"entName",label:"企业名称",width:"200"}}),n("el-table-column",{attrs:{align:"center",prop:"score",label:"综合评分",width:"100"}}),n("el-table-column",{attrs:{align:"center",label:"详细"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("el-table",{attrs:{data:t.row.detail,border:"","header-cell-style":{color:"#006eda"}}},[n("el-table-column",{attrs:{align:"center",prop:"desc",label:"评分说明",width:"450"}}),n("el-table-column",{attrs:{align:"center",prop:"features",label:"业务特征"}}),n("el-table-column",{attrs:{align:"center",prop:"score",label:"评分"}})],1)]}}])})],1)]],2)],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showBtn,expression:"!showBtn"}],staticClass:"PROGRO-ec-wrapper"},[n("div",{ref:"PROGRO",staticClass:"PROGRO-ec-pic"}),n("el-collapse",{attrs:{accordion:""}},[n("el-collapse-item",{attrs:{title:t.bestEntForPROGRO}},[[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.scoreDataForPROGRO,border:"","header-cell-style":{color:"#006eda"}}},[n("el-table-column",{attrs:{align:"center",prop:"index",label:"序号",width:"50"}}),n("el-table-column",{attrs:{align:"center",prop:"entName",label:"企业名称",width:"200"}}),n("el-table-column",{attrs:{align:"center",prop:"score",label:"综合评分",width:"100"}}),n("el-table-column",{attrs:{align:"center",label:"详细"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("el-table",{attrs:{data:t.row.detail,border:"","header-cell-style":{color:"#006eda"}}},[n("el-table-column",{attrs:{align:"center",prop:"desc",label:"评分说明",width:"450"}}),n("el-table-column",{attrs:{align:"center",prop:"features",label:"业务特征"}}),n("el-table-column",{attrs:{align:"center",prop:"score",label:"评分"}})],1)]}}])})],1)]],2)],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showBtn,expression:"!showBtn"}],staticClass:"ASSGRO-ec-wrapper"},[n("div",{ref:"ASSGRO",staticClass:"ASSGRO-ec-pic"}),n("el-collapse",{attrs:{accordion:""}},[n("el-collapse-item",{attrs:{title:t.bestEntForASSGRO}},[[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.scoreDataForASSGRO,border:"","header-cell-style":{color:"#006eda"}}},[n("el-table-column",{attrs:{align:"center",prop:"index",label:"序号",width:"50"}}),n("el-table-column",{attrs:{align:"center",prop:"entName",label:"企业名称",width:"200"}}),n("el-table-column",{attrs:{align:"center",prop:"score",label:"综合评分",width:"100"}}),n("el-table-column",{attrs:{align:"center",label:"详细"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("el-table",{attrs:{data:t.row.detail,border:"","header-cell-style":{color:"#006eda"}}},[n("el-table-column",{attrs:{align:"center",prop:"desc",label:"评分说明",width:"450"}}),n("el-table-column",{attrs:{align:"center",prop:"features",label:"业务特征"}}),n("el-table-column",{attrs:{align:"center",prop:"score",label:"评分"}})],1)]}}])})],1)]],2)],1)],1)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"font-size":"12px","margin-bottom":"10px","margin-top":"10px",color:"rgb(142,143,151)","text-align":"left"}},[a("p",[t._v("说明：通过对主板、创业板、新三板等各类大中小型企业公开财务规模指标的规范化处理，建立了对应企业规模类型的各类企业行为因素关系")]),a("p",[t._v("在剔除不显著行为因素的同时提取显著行为因素重新进行回归分析，建立了由企业行为因素通过专有编码分析反应至普适化企业群体规模的分析模型")]),a("p",[t._v("最终得到了适用于绝大部分企业规模参考的分析标签结果。结果仅供参考，在任何情况下本公司不保证真实性、准确性和时效性，不作为任何决策的唯一、实质性参考依据。")])])}],l=(a("c975"),a("a15b"),a("a434"),a("b0c0"),a("337a")),s=a("313e"),r={name:"FinancialPerformance",components:{},inject:["reload"],props:{},data:function(){return{VENDINC_scale_label_data:[],bestEntForVENDINC:"",bestEntForPROGRO:"",bestEntForASSGRO:"",scoreDataForVENDINC:[],scoreDataForPROGRO:[],scoreDataForASSGRO:[],colorList:["#5470c6","#91cc75","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#fac858"],colorIndex:0,tData:{},fData:{},lookCount:0,phone:"",token:"",showBtn:!0,input:"",entList:[],diffList:[]}},computed:{},mounted:function(){this.phone=localStorage.getItem("phone"),this.token=localStorage.getItem("token"),this.entName=localStorage.getItem("entName"),this.diffList.push(this.entName),this.getLookCount()},methods:{getVendincScale:function(){var t=this;l["a"].post("api/v1/xd/getVendincScale",{entName:this.diffList.join(),phone:this.phone,pay:1},this.token).then((function(e){200===e.data.code&&(t.VENDINC_scale_label_data=e.data.result)}))},getLookCount:function(){var t=this;l["a"].post("api/v1/lx/getFinanceTemp",{phone:this.phone,getLookCount:"123"},this.token).then((function(e){5-e.data.result>0&&(t.lookCount=5-e.data.result)}))},getData:function(){var t=this;this.getVendincScale(),l["a"].post("api/v1/lx/getFinanceTemp",{entName:this.diffList.join(),phone:this.phone,pay:0},this.token).then((function(e){210===e.data.code&&t.$confirm(e.data.msg,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){l["a"].post("api/v1/lx/getFinanceTemp",{entName:t.diffList.join(),phone:t.phone,pay:1},t.token).then((function(a){200===a.data.code&&(t.fData=e.data.result,t.showBtn=!t.showBtn,t.handlerPData(a.data.result),t.handlerAData(a.data.result),t.handlerVData(a.data.result),t.scoreDataForVENDINC=a.data.ext.VENDINC,t.scoreDataForPROGRO=a.data.ext.PROGRO,t.scoreDataForASSGRO=a.data.ext.ASSGRO,t.bestEntForVENDINC="基于对同类企业对应行为信息的智能算法评估分析，< "+a.data.ext.VENDINC[0].entName+" > 为目前对比群体中的较优者(点击查看评估依据)",t.bestEntForPROGRO="基于对同类企业对应行为信息的智能算法评估分析，< "+a.data.ext.PROGRO[0].entName+" > 为目前对比群体中的较优者(点击查看评估依据)",t.bestEntForASSGRO="基于对同类企业对应行为信息的智能算法评估分析，< "+a.data.ext.ASSGRO[0].entName+" > 为目前对比群体中的较优者(点击查看评估依据)")}))})).catch((function(){})),200===e.data.code&&(t.fData=e.data.result,t.showBtn=!t.showBtn,t.handlerPData(e.data.result),t.handlerAData(e.data.result),t.handlerVData(e.data.result),t.scoreDataForVENDINC=e.data.ext.VENDINC,t.scoreDataForPROGRO=e.data.ext.PROGRO,t.scoreDataForASSGRO=e.data.ext.ASSGRO,t.bestEntForVENDINC="基于对同类企业对应行为信息的智能算法评估分析，< "+e.data.ext.VENDINC[0].entName+" > 为目前对比群体中的较优者(点击查看评估依据)",t.bestEntForPROGRO="基于对同类企业对应行为信息的智能算法评估分析，< "+e.data.ext.PROGRO[0].entName+" > 为目前对比群体中的较优者(点击查看评估依据)",t.bestEntForASSGRO="基于对同类企业对应行为信息的智能算法评估分析，< "+e.data.ext.ASSGRO[0].entName+" > 为目前对比群体中的较优者(点击查看评估依据)")})).catch((function(e){t.$message.error("查询失败")}))},handlerPData:function(t){var e=this.$refs.PROGRO,a=s["init"](e),n={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{}},legend:{data:["盈利能力","同比"]},xAxis:[{type:"category",data:["2018","2019","2020"],axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"盈利能力",min:null,max:null,interval:null,axisLabel:{formatter:"{value} 万元"}},{type:"value",name:"同比",min:null,max:null,interval:null,axisLabel:{formatter:"{value} %"}}],series:[{name:"盈利能力",type:"bar",data:[]},{name:"同比",type:"line",yAxisIndex:1,data:[]}]},o=[],l=[];for(var r in this.colorIndex=0,t){o.push(r+"盈利能力"),o.push(r+"同比");for(var i=[],c=[],d=2018;d<=2020;d++)i.push(t[r][d]["PROGRO"]),c.push(t[r][d]["PROGRO_yoy"]);var p={name:r+"盈利能力",type:"bar",data:i,itemStyle:{color:this.colorList[this.colorIndex]}},h={name:r+"同比",type:"line",yAxisIndex:1,data:c,smooth:!0,color:this.colorList[this.colorIndex],lineStyle:{color:this.colorList[this.colorIndex]}};this.colorIndex++,l.push(p),l.push(h)}n.legend.data=o,n.yAxis.name="盈利能力",n.series=l,a.setOption(n,!0)},handlerVData:function(t){var e=this.$refs.VENDINC,a=s["init"](e),n={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{}},legend:{data:["营收规模","同比"]},xAxis:[{type:"category",data:["2018","2019","2020"],axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"营收规模",min:null,max:null,interval:null,axisLabel:{formatter:"{value} 万元"}},{type:"value",name:"同比",min:null,max:null,interval:null,axisLabel:{formatter:"{value} %"}}],series:[{name:"营收规模",type:"bar",data:[]},{name:"同比",type:"line",yAxisIndex:1,data:[]}]},o=[],l=[];for(var r in this.colorIndex=0,t){o.push(r+"营收规模"),o.push(r+"同比");for(var i=[],c=[],d=2018;d<=2020;d++)i.push(t[r][d]["VENDINC"]),c.push(t[r][d]["VENDINC_yoy"]);var p={name:r+"营收规模",type:"bar",data:i,itemStyle:{color:this.colorList[this.colorIndex]}},h={name:r+"同比",type:"line",yAxisIndex:1,data:c,smooth:!0,color:this.colorList[this.colorIndex],lineStyle:{color:this.colorList[this.colorIndex]}};this.colorIndex++,l.push(p),l.push(h)}n.legend.data=o,n.yAxis.name="营收规模",n.series=l,a.setOption(n,!0)},handlerAData:function(t){var e=this.$refs.ASSGRO,a=s["init"](e),n={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{}},legend:{data:["资产规模","同比"]},xAxis:[{type:"category",data:["2018","2019","2020"],axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"资产规模",min:null,max:null,interval:null,axisLabel:{formatter:"{value} 万元"}},{type:"value",name:"同比",min:null,max:null,interval:null,axisLabel:{formatter:"{value} %"}}],series:[{name:"资产规模",type:"bar",data:[]},{name:"同比",type:"line",yAxisIndex:1,data:[]}]},o=[],l=[];for(var r in this.colorIndex=0,t){o.push(r+"资产规模"),o.push(r+"同比");for(var i=[],c=[],d=2018;d<=2020;d++)i.push(t[r][d]["ASSGRO"]),c.push(t[r][d]["ASSGRO_yoy"]);var p={name:r+"资产规模",type:"bar",data:i,itemStyle:{color:this.colorList[this.colorIndex]}},h={name:r+"同比",type:"line",yAxisIndex:1,data:c,smooth:!0,color:this.colorList[this.colorIndex],lineStyle:{color:this.colorList[this.colorIndex]}};this.colorIndex++,l.push(p),l.push(h)}n.legend.data=o,n.yAxis.name="资产规模",n.series=l,a.setOption(n,!0)},search:function(){var t=this;l["a"].post("api/v1/qcc/getEntList",{entName:this.input,phone:this.phone,page:1,pageSize:15},this.token).then((function(e){200===e.data.code&&(t.entList=e.data.result)})).catch((function(e){t.$message.error("查询失败")}))},drowPic:function(){var t=this;this.diffList.length>5?this.$message.error("最多选5家企业"):this.diffList.length<1?this.$message.error("至少选1家企业"):l["a"].post("api/v1/lx/getFinanceTemp",{entName:this.diffList.join(),phone:this.phone,pay:0},this.token).then((function(e){210===e.data.code&&t.$confirm(e.data.msg,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){l["a"].post("api/v1/lx/getFinanceTemp",{entName:t.diffList.join(),phone:t.phone,pay:1},t.token).then((function(e){200===e.data.code&&(t.getVendincScale(),t.handlerPData(e.data.result),t.handlerAData(e.data.result),t.handlerVData(e.data.result),t.scoreDataForVENDINC=e.data.ext.VENDINC,t.scoreDataForPROGRO=e.data.ext.PROGRO,t.scoreDataForASSGRO=e.data.ext.ASSGRO,t.bestEntForVENDINC="基于对同类企业对应行为信息的智能算法评估分析，< "+e.data.ext.VENDINC[0].entName+" > 为目前对比群体中的较优者(点击查看评估依据)",t.bestEntForPROGRO="基于对同类企业对应行为信息的智能算法评估分析，< "+e.data.ext.PROGRO[0].entName+" > 为目前对比群体中的较优者(点击查看评估依据)",t.bestEntForASSGRO="基于对同类企业对应行为信息的智能算法评估分析，< "+e.data.ext.ASSGRO[0].entName+" > 为目前对比群体中的较优者(点击查看评估依据)")}))})).catch((function(){})),200===e.data.code&&(t.handlerPData(e.data.result),t.handlerAData(e.data.result),t.handlerVData(e.data.result),t.scoreDataForVENDINC=e.data.ext.VENDINC,t.scoreDataForPROGRO=e.data.ext.PROGRO,t.scoreDataForASSGRO=e.data.ext.ASSGRO,t.bestEntForVENDINC="基于对同类企业对应行为信息的智能算法评估分析，< "+e.data.ext.VENDINC[0].entName+" > 为目前对比群体中的较优者(点击查看评估依据)",t.bestEntForPROGRO="基于对同类企业对应行为信息的智能算法评估分析，< "+e.data.ext.PROGRO[0].entName+" > 为目前对比群体中的较优者(点击查看评估依据)",t.bestEntForASSGRO="基于对同类企业对应行为信息的智能算法评估分析，< "+e.data.ext.ASSGRO[0].entName+" > 为目前对比群体中的较优者(点击查看评估依据)")})).catch((function(e){t.$message.error("查询失败")}))},addDiff:function(t){var e=this.diffList.indexOf(t);-1===e&&this.diffList.push(t)},unDiff:function(t){var e=this.diffList.indexOf(t);-1!==e&&this.diffList.splice(e,1)}}},i=r,c=(a("e5d0"),a("2877")),d=Object(c["a"])(i,n,o,!1,null,"19aac424",null);e["default"]=d.exports},a434:function(t,e,a){"use strict";var n=a("23e7"),o=a("23cb"),l=a("a691"),s=a("50c4"),r=a("7b0b"),i=a("65f0"),c=a("8418"),d=a("1dde"),p=a("ae40"),h=d("splice"),u=p("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,f=Math.min,x=9007199254740991,b="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!h||!u},{splice:function(t,e){var a,n,d,p,h,u,v=r(this),g=s(v.length),y=o(t,g),w=arguments.length;if(0===w?a=n=0:1===w?(a=0,n=g-y):(a=w-2,n=f(m(l(e),0),g-y)),g+a-n>x)throw TypeError(b);for(d=i(v,n),p=0;p<n;p++)h=y+p,h in v&&c(d,p,v[h]);if(d.length=n,a<n){for(p=y;p<g-n;p++)h=p+n,u=p+a,h in v?v[u]=v[h]:delete v[u];for(p=g;p>g-n+a;p--)delete v[p-1]}else if(a>n)for(p=g-n;p>y;p--)h=p+n-1,u=p+a-1,h in v?v[u]=v[h]:delete v[u];for(p=0;p<a;p++)v[p+y]=arguments[p+2];return v.length=g-n+a,d}})},aada:function(t,e,a){t.exports=a.p+"static/img/ylnl.de6089dc.png"},e5d0:function(t,e,a){"use strict";a("efbb")},efbb:function(t,e,a){}}]);