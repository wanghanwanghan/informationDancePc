<template>
  <div class="box">
    <!-- 财务数据 -->
    <section class="et-hero-tabs">
      <div :class="isFixed?'et-hero-tabs-containerf':'et-hero-tabs-container'">
        <!-- <div class="et-hero-tabs-container"> -->
        <a class="et-hero-tab" href="#tab-jb">财务资产同比</a>
        <a class="et-hero-tab" href="#tab-gd">财务资产数据（需授权）</a>
        <!-- <a class="et-hero-tab" href="#tab-swsj">税务数据（需授权）</a> -->
        <span class="et-hero-tab-slider"/>
      </div>
    </section>
    <main class="et-main">
      <section id="tab-jb" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">财务资产同比</h3>
        <div class="box2">
          <!-- 财务数据 -->
          <div v-show="!show" class="contF">
            <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
              <div style="margin:20px 0">此信息需要付费查看</div>
              <el-button type="primary" style="margin:10px 0 30px 0" @click="payM">点击查看</el-button>
            </div>
          </div>
          <div v-show="show" class="cont">
            <div ref="ASSGRO_yoy1" :style="{width: '1000px', height: '600px'}"/>
            <div ref="LIAGRO_yoy1" :style="{width: '1000px', height: '600px'}"/>
            <div ref="VENDINC_yoy1" :style="{width: '1000px', height: '600px'}"/>
            <div ref="MAIBUSINC_yoy1" :style="{width: '1000px', height: '600px'}"/>
            <div ref="PROGRO_yoy1" :style="{width: '1000px', height: '600px'}"/>
            <div ref="NETINC_yoy1" :style="{width: '1000px', height: '600px'}"/>
            <div ref="RATGRO_yoy1" :style="{width: '1000px', height: '600px'}"/>
            <div ref="TOTEQU_yoy1" :style="{width: '1000px', height: '600px'}"/>
          </div>
        </div>
      </section>
      <div style="border-bottom:1px solid #DCDFE6"/>
      <section id="tab-gd" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">财务资产数据（需取得目标企业授权）</h3>
        <div class="box2">
          <!-- 财务数据（需授权） -->
          <div class="box22">
            <div class="box22-t" v-if="!showMin2">
              请先下载授权书，提交审核通过后查看
            </div>
            <div class="box22-b" v-if="!showMin2">
              <el-upload
                ref="upload"
                class="upload-demo"
                action="https://api.meirixindong.com/api/v1/comm/image/upload"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :file-list="fileList"
                :auto-upload="false"
                :headers="myHeaders"
                :data="{type:'auth',phone:phone}"
                multiple
              >
                <el-button slot="trigger" size="small" type="primary">选取图片</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传图片</el-button>
                <el-button style="margin-left: 10px;" size="small" type="info" @click="down">下载授权书模板</el-button>
              </el-upload>
            </div>
            <div v-show="showMin2" class="cont">
              <div ref="ASSGRO1" :style="{width: '1000px', height: '600px'}"/>
              <div ref="LIAGRO1" :style="{width: '1000px', height: '600px'}"/>
              <div ref="VENDINC1" :style="{width: '1000px', height: '600px'}"/>
              <div ref="MAIBUSINC1" :style="{width: '1000px', height: '600px'}"/>
              <div ref="PROGRO1" :style="{width: '1000px', height: '600px'}"/>
              <div ref="NETINC1" :style="{width: '1000px', height: '600px'}"/>
              <div ref="RATGRO1" :style="{width: '1000px', height: '600px'}"/>
              <div ref="TOTEQU1" :style="{width: '1000px', height: '600px'}"/>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import {
  authBook,
  getFinanceNotAuth,
  getFinanceNeedAuth,
  getFinanceNotAuthNew,
  getFinanceNeedAuthNew
} from '@/api/article'
import { refundToWallet } from '@/api/EnterpriseBackground'
import * as ec from 'echarts'

var token = localStorage.getItem('token')
export default {
  data() {
    return {
      colorList: [
        '#5470c6',
        '#91cc75',
        '#ee6666',
        '#73c0de',
        '#3ba272',
        '#fc8452',
        '#9a60b4',
        '#ea7ccc',
        '#fac858'
      ],
      fileList: [],
      myHeaders: { Authorization: token },
      arr: [],
      phone: '',
      query1: {
        entName: '',
        phone: '',
        path: '',
        type: 1
      },
      isFixed: false,
      scrollHeight: 258,
      query: {
        entName: '',
        phone: '',
        pay: 0
      },
      year: [],
      num: [],
      yearMain2: [],
      numMain2: [],
      show: false,
      showMin2: false,
      query2: {
        entName: '',
        phone: ''
      },
      query3: {
        phone: '',
        code: '91110108MA01KPGK0L'
      },
      query4: {
        entName: '',
        code: '',
        year: '',
        dataCount: 3,
        phone: '',
        pay: 1
      },
      query5: {
        entName: '',
        code: '',
        year: '',
        dataCount: 3,
        phone: '',
        pay: 1//需要授权的财务接口
      },
      Essential: [],
      IncometaxMonthlyDeclaration: [],
      IncometaxAnnualReport: [],
      FinanceIncomeStatementAnnualReport: [],
      FinanceIncomeStatement: [],
      FinanceBalanceSheetAnnual: [],
      FinanceBalanceSheet: [],
      VatReturn: [],
      queryString: {
        entName: localStorage.getItem('entName'),
        code: '',
        year: 2019,
        dataCount: 3,
        phone: localStorage.getItem('phone'),
        pay: 0
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
    this.query.entName = this.query1.entName = this.query4.entName = this.entName = localStorage.getItem('entName')
    this.query.phone = this.query1.phone = this.query4.phone = this.phone = localStorage.getItem('phone')
    this.query5.entName = localStorage.getItem('entName')
    this.query5.phone = localStorage.getItem('phone')

    // 龙信 近n年财务数据，不需授权
    this.query4.code = localStorage.getItem('CreditCode')
    this.query5.code = localStorage.getItem('CreditCode')
    var myDate = new Date()
    this.query4.year = myDate.getFullYear() - 2
    this.query5.year = myDate.getFullYear() - 2
    this.query4.pay = 0
    this.query5.pay = 1

    this.queryString.year = myDate.getFullYear() - 2

    getFinanceNotAuthNew(this.queryString).then(res => {
      if (res.data.code === 200) {
        this.show = true
        this.drawLineNewByMe(res.data.result, 'not auth')
      }
    })

    getFinanceNeedAuthNew(this.queryString).then(res => {
      if (res.data.code === 200) {
        this.showMin2 = true
        this.drawLineNewByMe(res.data.result, 'need auth')
      }
      // if (res.data.code === 250) {
      //   refundToWallet({
      //     'phone': localStorage.getItem('phone'),
      //     'entName': localStorage.getItem('entName'),
      //     'moduleNum': 51
      //   }).then(res => {
      //     this.$message({
      //       type: 'error',
      //       message: res.data.msg
      //     })
      //   })
      // }
    })

    const _this = this
    window.onresize = function() {
      _this.myChart.resize()
    }
  },
  methods: {
    // 吸顶效果
    initHeight() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      this.isFixed = scrollTop > this.scrollHeight
    },

    drawLineNewByMe(data, type) {
      if (type === 'not auth') {
        this.handleASSGRO_yoy(data)
        this.handleLIAGRO_yoy(data)
        this.handleVENDINC_yoy(data)
        this.handleMAIBUSINC_yoy(data)
        this.handlePROGRO_yoy(data)
        this.handleNETINC_yoy(data)
        this.handleRATGRO_yoy(data)
        this.handleTOTEQU_yoy(data)
      } else {
        this.handleASSGRO(data)
        this.handleLIAGRO(data)
        this.handleVENDINC(data)
        this.handleMAIBUSINC(data)
        this.handlePROGRO(data)
        this.handleNETINC(data)
        this.handleRATGRO(data)
        this.handleTOTEQU(data)
      }
    },

    handleASSGRO(data) {
      let arrKey = 'ASSGRO'
      let picName = '资产总额'
      let dom = this.$refs.ASSGRO1
      let myec = ec.init(dom)
      let opt = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            //dataView: {show: true, readOnly: false},
            //magicType: {show: true, type: ['line', 'bar']},
            //restore: {show: true},
            //saveAsImage: {show: true}
          }
        },
        legend: {
          data: []//
        },
        xAxis: [
          {
            type: 'category',
            data: [2018, 2019, 2020],//
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',//
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} 万元'
            }
          },
          {
            type: 'value',
            name: '',//
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: []
      }
      let legend = []
      let series = []
      for (let key in data) {
        legend.push(picName)
        legend.push('同比')
        let yearData = []
        let yearDataYoy = []
        for (let i = 2018; i <= 2020; i++) {
          yearData.push(data[key][i][arrKey])
          yearDataYoy.push(data[key][i][arrKey + '_yoy'])
        }
        let objData = {
          name: picName,
          type: 'bar',
          data: yearData,
          barWidth: 60
        }
        let objYoy = {
          name: '同比',
          type: 'line',
          yAxisIndex: 1,
          data: yearDataYoy,
          smooth: true
        }
        series.push(objData)
        series.push(objYoy)
      }
      opt.legend.data = legend
      opt.yAxis.name = picName
      opt.series = series
      myec.setOption(opt, true)
    },
    handleLIAGRO(data) {
      let arrKey = 'LIAGRO'
      let picName = '负债总额'
      let dom = this.$refs.LIAGRO1
      let myec = ec.init(dom)
      let opt = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            //dataView: {show: true, readOnly: false},
            //magicType: {show: true, type: ['line', 'bar']},
            //restore: {show: true},
            //saveAsImage: {show: true}
          }
        },
        legend: {
          data: []//
        },
        xAxis: [
          {
            type: 'category',
            data: [2018, 2019, 2020],//
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',//
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} 万元'
            }
          },
          {
            type: 'value',
            name: '',//
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: []
      }
      let legend = []
      let series = []
      for (let key in data) {
        legend.push(picName)
        legend.push('同比')
        let yearData = []
        let yearDataYoy = []
        for (let i = 2018; i <= 2020; i++) {
          yearData.push(data[key][i][arrKey])
          yearDataYoy.push(data[key][i][arrKey + '_yoy'])
        }
        let objData = {
          name: picName,
          type: 'bar',
          data: yearData,
          barWidth: 60
        }
        let objYoy = {
          name: '同比',
          type: 'line',
          yAxisIndex: 1,
          data: yearDataYoy,
          smooth: true
        }
        series.push(objData)
        series.push(objYoy)
      }
      opt.legend.data = legend
      opt.yAxis.name = picName
      opt.series = series
      myec.setOption(opt, true)
    },
    handleVENDINC(data) {
      let arrKey = 'VENDINC'
      let picName = '营业总收入'
      let dom = this.$refs.VENDINC1
      let myec = ec.init(dom)
      let opt = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            //dataView: {show: true, readOnly: false},
            //magicType: {show: true, type: ['line', 'bar']},
            //restore: {show: true},
            //saveAsImage: {show: true}
          }
        },
        legend: {
          data: []//
        },
        xAxis: [
          {
            type: 'category',
            data: [2018, 2019, 2020],//
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',//
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} 万元'
            }
          },
          {
            type: 'value',
            name: '',//
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: []
      }
      let legend = []
      let series = []
      for (let key in data) {
        legend.push(picName)
        legend.push('同比')
        let yearData = []
        let yearDataYoy = []
        for (let i = 2018; i <= 2020; i++) {
          yearData.push(data[key][i][arrKey])
          yearDataYoy.push(data[key][i][arrKey + '_yoy'])
        }
        let objData = {
          name: picName,
          type: 'bar',
          data: yearData,
          barWidth: 60
        }
        let objYoy = {
          name: '同比',
          type: 'line',
          yAxisIndex: 1,
          data: yearDataYoy,
          smooth: true
        }
        series.push(objData)
        series.push(objYoy)
      }
      opt.legend.data = legend
      opt.yAxis.name = picName
      opt.series = series
      myec.setOption(opt, true)
    },
    handleMAIBUSINC(data) {
      let arrKey = 'MAIBUSINC'
      let picName = '主营业务收入'
      let dom = this.$refs.MAIBUSINC1
      let myec = ec.init(dom)
      let opt = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            //dataView: {show: true, readOnly: false},
            //magicType: {show: true, type: ['line', 'bar']},
            //restore: {show: true},
            //saveAsImage: {show: true}
          }
        },
        legend: {
          data: []//
        },
        xAxis: [
          {
            type: 'category',
            data: [2018, 2019, 2020],//
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',//
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} 万元'
            }
          },
          {
            type: 'value',
            name: '',//
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: []
      }
      let legend = []
      let series = []
      for (let key in data) {
        legend.push(picName)
        legend.push('同比')
        let yearData = []
        let yearDataYoy = []
        for (let i = 2018; i <= 2020; i++) {
          yearData.push(data[key][i][arrKey])
          yearDataYoy.push(data[key][i][arrKey + '_yoy'])
        }
        let objData = {
          name: picName,
          type: 'bar',
          data: yearData,
          barWidth: 60
        }
        let objYoy = {
          name: '同比',
          type: 'line',
          yAxisIndex: 1,
          data: yearDataYoy,
          smooth: true
        }
        series.push(objData)
        series.push(objYoy)
      }
      opt.legend.data = legend
      opt.yAxis.name = picName
      opt.series = series
      myec.setOption(opt, true)
    },
    handlePROGRO(data) {
      let arrKey = 'PROGRO'
      let picName = '利润总额'
      let dom = this.$refs.PROGRO1
      let myec = ec.init(dom)
      let opt = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            //dataView: {show: true, readOnly: false},
            //magicType: {show: true, type: ['line', 'bar']},
            //restore: {show: true},
            //saveAsImage: {show: true}
          }
        },
        legend: {
          data: []//
        },
        xAxis: [
          {
            type: 'category',
            data: [2018, 2019, 2020],//
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',//
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} 万元'
            }
          },
          {
            type: 'value',
            name: '',//
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: []
      }
      let legend = []
      let series = []
      for (let key in data) {
        legend.push(picName)
        legend.push('同比')
        let yearData = []
        let yearDataYoy = []
        for (let i = 2018; i <= 2020; i++) {
          yearData.push(data[key][i][arrKey])
          yearDataYoy.push(data[key][i][arrKey + '_yoy'])
        }
        let objData = {
          name: picName,
          type: 'bar',
          data: yearData,
          barWidth: 60
        }
        let objYoy = {
          name: '同比',
          type: 'line',
          yAxisIndex: 1,
          data: yearDataYoy,
          smooth: true
        }
        series.push(objData)
        series.push(objYoy)
      }
      opt.legend.data = legend
      opt.yAxis.name = picName
      opt.series = series
      myec.setOption(opt, true)
    },
    handleNETINC(data) {
      let arrKey = 'NETINC'
      let picName = '净利润'
      let dom = this.$refs.NETINC1
      let myec = ec.init(dom)
      let opt = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            //dataView: {show: true, readOnly: false},
            //magicType: {show: true, type: ['line', 'bar']},
            //restore: {show: true},
            //saveAsImage: {show: true}
          }
        },
        legend: {
          data: []//
        },
        xAxis: [
          {
            type: 'category',
            data: [2018, 2019, 2020],//
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',//
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} 万元'
            }
          },
          {
            type: 'value',
            name: '',//
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: []
      }
      let legend = []
      let series = []
      for (let key in data) {
        legend.push(picName)
        legend.push('同比')
        let yearData = []
        let yearDataYoy = []
        for (let i = 2018; i <= 2020; i++) {
          yearData.push(data[key][i][arrKey])
          yearDataYoy.push(data[key][i][arrKey + '_yoy'])
        }
        let objData = {
          name: picName,
          type: 'bar',
          data: yearData,
          barWidth: 60
        }
        let objYoy = {
          name: '同比',
          type: 'line',
          yAxisIndex: 1,
          data: yearDataYoy,
          smooth: true
        }
        series.push(objData)
        series.push(objYoy)
      }
      opt.legend.data = legend
      opt.yAxis.name = picName
      opt.series = series
      myec.setOption(opt, true)
    },
    handleRATGRO(data) {
      let arrKey = 'RATGRO'
      let picName = '纳税总额'
      let dom = this.$refs.RATGRO1
      let myec = ec.init(dom)
      let opt = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            //dataView: {show: true, readOnly: false},
            //magicType: {show: true, type: ['line', 'bar']},
            //restore: {show: true},
            //saveAsImage: {show: true}
          }
        },
        legend: {
          data: []//
        },
        xAxis: [
          {
            type: 'category',
            data: [2018, 2019, 2020],//
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',//
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} 万元'
            }
          },
          {
            type: 'value',
            name: '',//
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: []
      }
      let legend = []
      let series = []
      for (let key in data) {
        legend.push(picName)
        legend.push('同比')
        let yearData = []
        let yearDataYoy = []
        for (let i = 2018; i <= 2020; i++) {
          yearData.push(data[key][i][arrKey])
          yearDataYoy.push(data[key][i][arrKey + '_yoy'])
        }
        let objData = {
          name: picName,
          type: 'bar',
          data: yearData,
          barWidth: 60
        }
        let objYoy = {
          name: '同比',
          type: 'line',
          yAxisIndex: 1,
          data: yearDataYoy,
          smooth: true
        }
        series.push(objData)
        series.push(objYoy)
      }
      opt.legend.data = legend
      opt.yAxis.name = picName
      opt.series = series
      myec.setOption(opt, true)
    },
    handleTOTEQU(data) {
      let arrKey = 'TOTEQU'
      let picName = '所有者权益'
      let dom = this.$refs.TOTEQU1
      let myec = ec.init(dom)
      let opt = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            //dataView: {show: true, readOnly: false},
            //magicType: {show: true, type: ['line', 'bar']},
            //restore: {show: true},
            //saveAsImage: {show: true}
          }
        },
        legend: {
          data: []//
        },
        xAxis: [
          {
            type: 'category',
            data: [2018, 2019, 2020],//
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',//
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} 万元'
            }
          },
          {
            type: 'value',
            name: '',//
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: []
      }
      let legend = []
      let series = []
      for (let key in data) {
        legend.push(picName)
        legend.push('同比')
        let yearData = []
        let yearDataYoy = []
        for (let i = 2018; i <= 2020; i++) {
          yearData.push(data[key][i][arrKey])
          yearDataYoy.push(data[key][i][arrKey + '_yoy'])
        }
        let objData = {
          name: picName,
          type: 'bar',
          data: yearData,
          barWidth: 60
        }
        let objYoy = {
          name: '同比',
          type: 'line',
          yAxisIndex: 1,
          data: yearDataYoy,
          smooth: true
        }
        series.push(objData)
        series.push(objYoy)
      }
      opt.legend.data = legend
      opt.yAxis.name = picName
      opt.series = series
      myec.setOption(opt, true)
    },

    handleASSGRO_yoy(data) {
      let arrKey = 'ASSGRO_yoy'
      let dom = this.$refs.ASSGRO_yoy1
      let myec = ec.init(dom)
      let option = {
        title: {
          text: '',
          subtext: '',
          left: 'center'
        },
        legend: {
          data: [2018, 2019, 2020]
        },
        xAxis: {
          type: 'category',
          data: [2018, 2019, 2020]
        },
        yAxis: {
          type: 'value',
          name: '%'
        },
        series: []
      }
      let series = []
      for (let key in data) {
        let yearDataYoy = []
        for (let i = 2018; i <= 2020; i++) {
          yearDataYoy.push(data[key][i][arrKey])
        }
        let objYoy = {
          type: 'line',
          data: yearDataYoy,
          smooth: true
        }
        series.push(objYoy)
      }
      option.title.text = '资产总额同比'
      option.title.subtext = ''
      option.series = series
      myec.setOption(option, true)
    },
    handleLIAGRO_yoy(data) {
      let arrKey = 'LIAGRO_yoy'
      let dom = this.$refs.LIAGRO_yoy1
      let myec = ec.init(dom)
      let option = {
        title: {
          text: '',
          subtext: '',
          left: 'center'
        },
        legend: {
          data: [2018, 2019, 2020]
        },
        xAxis: {
          type: 'category',
          data: [2018, 2019, 2020]
        },
        yAxis: {
          type: 'value',
          name: '%'
        },
        series: []
      }
      let series = []
      for (let key in data) {
        let yearDataYoy = []
        for (let i = 2018; i <= 2020; i++) {
          yearDataYoy.push(data[key][i][arrKey])
        }
        let objYoy = {
          type: 'line',
          data: yearDataYoy,
          smooth: true
        }
        series.push(objYoy)
      }
      option.title.text = '负债总额同比'
      option.title.subtext = ''
      option.series = series
      myec.setOption(option, true)
    },
    handleVENDINC_yoy(data) {
      let arrKey = 'VENDINC_yoy'
      let dom = this.$refs.VENDINC_yoy1
      let myec = ec.init(dom)
      let option = {
        title: {
          text: '',
          subtext: '',
          left: 'center'
        },
        legend: {
          data: [2018, 2019, 2020]
        },
        xAxis: {
          type: 'category',
          data: [2018, 2019, 2020]
        },
        yAxis: {
          type: 'value',
          name: '%'
        },
        series: []
      }
      let series = []
      for (let key in data) {
        let yearDataYoy = []
        for (let i = 2018; i <= 2020; i++) {
          yearDataYoy.push(data[key][i][arrKey])
        }
        let objYoy = {
          type: 'line',
          data: yearDataYoy,
          smooth: true
        }
        series.push(objYoy)
      }
      option.title.text = '营业总收入同比'
      option.title.subtext = ''
      option.series = series
      myec.setOption(option, true)
    },
    handleMAIBUSINC_yoy(data) {
      let arrKey = 'MAIBUSINC_yoy'
      let dom = this.$refs.MAIBUSINC_yoy1
      let myec = ec.init(dom)
      let option = {
        title: {
          text: '',
          subtext: '',
          left: 'center'
        },
        legend: {
          data: [2018, 2019, 2020]
        },
        xAxis: {
          type: 'category',
          data: [2018, 2019, 2020]
        },
        yAxis: {
          type: 'value',
          name: '%'
        },
        series: []
      }
      let series = []
      for (let key in data) {
        let yearDataYoy = []
        for (let i = 2018; i <= 2020; i++) {
          yearDataYoy.push(data[key][i][arrKey])
        }
        let objYoy = {
          type: 'line',
          data: yearDataYoy,
          smooth: true
        }
        series.push(objYoy)
      }
      option.title.text = '主营业务收入同比'
      option.title.subtext = ''
      option.series = series
      myec.setOption(option, true)
    },
    handlePROGRO_yoy(data) {
      let arrKey = 'PROGRO_yoy'
      let dom = this.$refs.PROGRO_yoy1
      let myec = ec.init(dom)
      let option = {
        title: {
          text: '',
          subtext: '',
          left: 'center'
        },
        legend: {
          data: [2018, 2019, 2020]
        },
        xAxis: {
          type: 'category',
          data: [2018, 2019, 2020]
        },
        yAxis: {
          type: 'value',
          name: '%'
        },
        series: []
      }
      let series = []
      for (let key in data) {
        let yearDataYoy = []
        for (let i = 2018; i <= 2020; i++) {
          yearDataYoy.push(data[key][i][arrKey])
        }
        let objYoy = {
          type: 'line',
          data: yearDataYoy,
          smooth: true
        }
        series.push(objYoy)
      }
      option.title.text = '利润总额同比'
      option.title.subtext = ''
      option.series = series
      myec.setOption(option, true)
    },
    handleNETINC_yoy(data) {
      let arrKey = 'NETINC_yoy'
      let dom = this.$refs.NETINC_yoy1
      let myec = ec.init(dom)
      let option = {
        title: {
          text: '',
          subtext: '',
          left: 'center'
        },
        legend: {
          data: [2018, 2019, 2020]
        },
        xAxis: {
          type: 'category',
          data: [2018, 2019, 2020]
        },
        yAxis: {
          type: 'value',
          name: '%'
        },
        series: []
      }
      let series = []
      for (let key in data) {
        let yearDataYoy = []
        for (let i = 2018; i <= 2020; i++) {
          yearDataYoy.push(data[key][i][arrKey])
        }
        let objYoy = {
          type: 'line',
          data: yearDataYoy,
          smooth: true
        }
        series.push(objYoy)
      }
      option.title.text = '净利润同比'
      option.title.subtext = ''
      option.series = series
      myec.setOption(option, true)
    },
    handleRATGRO_yoy(data) {
      let arrKey = 'RATGRO_yoy'
      let dom = this.$refs.RATGRO_yoy1
      let myec = ec.init(dom)
      let option = {
        title: {
          text: '',
          subtext: '',
          left: 'center'
        },
        legend: {
          data: [2018, 2019, 2020]
        },
        xAxis: {
          type: 'category',
          data: [2018, 2019, 2020]
        },
        yAxis: {
          type: 'value',
          name: '%'
        },
        series: []
      }
      let series = []
      for (let key in data) {
        let yearDataYoy = []
        for (let i = 2018; i <= 2020; i++) {
          yearDataYoy.push(data[key][i][arrKey])
        }
        let objYoy = {
          type: 'line',
          data: yearDataYoy,
          smooth: true
        }
        series.push(objYoy)
      }
      option.title.text = '纳税总额同比'
      option.title.subtext = ''
      option.series = series
      myec.setOption(option, true)
    },
    handleTOTEQU_yoy(data) {
      let arrKey = 'TOTEQU_yoy'
      let dom = this.$refs.TOTEQU_yoy1
      let myec = ec.init(dom)
      let option = {
        title: {
          text: '',
          subtext: '',
          left: 'center'
        },
        legend: {
          data: [2018, 2019, 2020]
        },
        xAxis: {
          type: 'category',
          data: [2018, 2019, 2020]
        },
        yAxis: {
          type: 'value',
          name: '%'
        },
        series: []
      }
      let series = []
      for (let key in data) {
        let yearDataYoy = []
        for (let i = 2018; i <= 2020; i++) {
          yearDataYoy.push(data[key][i][arrKey])
        }
        let objYoy = {
          type: 'line',
          data: yearDataYoy,
          smooth: true
        }
        series.push(objYoy)
      }
      option.title.text = '所有者权益同比'
      option.title.subtext = ''
      option.series = series
      myec.setOption(option, true)
    },

    drawLine() {
      let chartDom = document.getElementById('main1')
      let myChart = echarts.init(chartDom)
      let option

      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: [
            this.year[0],
            this.year[1],
            this.year[2]
          ]
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: [
          {
            type: 'value',
            // name: '%',
            axisLabel: {
              formatter: '{value}%'
            }
          }
        ],
        xAxis: [
          {
            type: 'category',
            axisTick: {
              show: true
            },
            axisLabel: {
              interval: 0,
              rotate: -40
            },
            //data: ['资产总额', '负债总额', '营业总收入', '主营业务收入', '利润总额', '净利润', '纳税总额', '所有者权益合计', '社保人数']
            data: ['资产总额', '负债总额', '营业总收入', '主营业务收入', '利润总额', '净利润', '纳税总额', '所有者权益合计']
          }
        ],
        series: [
          {
            name: this.year[0],
            type: 'bar',
            label: {
              show: true,
              position: 'inside'
            },
            emphasis: {
              focus: 'series'
            },
            data: [this.num[0].ASSGRO_yoy, this.num[0].LIAGRO_yoy, this.num[0].VENDINC_yoy, this.num[0].MAIBUSINC_yoy, this.num[0].PROGRO_yoy, this.num[0].NETINC_yoy, this.num[0].RATGRO_yoy, this.num[0].TOTEQU_yoy]
          },
          {
            name: this.year[1],
            type: 'bar',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [this.num[1].ASSGRO_yoy, this.num[1].LIAGRO_yoy, this.num[1].VENDINC_yoy, this.num[1].MAIBUSINC_yoy, this.num[1].PROGRO_yoy, this.num[1].NETINC_yoy, this.num[1].RATGRO_yoy, this.num[1].TOTEQU_yoy]
          },
          {
            name: this.year[2],
            type: 'bar',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [
              this.num[2].ASSGRO_yoy,
              this.num[2].LIAGRO_yoy,
              this.num[2].VENDINC_yoy,
              this.num[2].MAIBUSINC_yoy,
              this.num[2].PROGRO_yoy,
              this.num[2].NETINC_yoy,
              this.num[2].RATGRO_yoy,
              this.num[2].TOTEQU_yoy
            ]
          }
        ]
      }

      option && myChart.setOption(option)
    },

    drawLineMain2() {
      let chartDom = document.getElementById('main2')
      let myChart = echarts.init(chartDom)
      let option

      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: [
            this.year[0],
            this.year[1],
            this.year[2]
          ]
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: [
          {
            type: 'value',
            // name: '%',
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        xAxis: [
          {
            type: 'category',
            axisTick: {
              show: true
            },
            axisLabel: {
              interval: 0,
              rotate: -40
            },
            data: ['资产总额', '负债总额', '营业总收入', '主营业务收入', '利润总额', '净利润', '纳税总额', '所有者权益合计', '社保人数']
          }
        ],
        series: [
          {
            name: this.year[0],
            type: 'bar',
            label: {
              show: true,
              position: 'inside'
            },
            emphasis: {
              focus: 'series'
            },
            data: [
              this.numMain2[0].ASSGRO,
              this.numMain2[0].LIAGRO,
              this.numMain2[0].VENDINC,
              this.numMain2[0].MAIBUSINC,
              this.numMain2[0].PROGRO,
              this.numMain2[0].NETINC,
              this.numMain2[0].RATGRO,
              this.numMain2[0].TOTEQU,
              this.numMain2[0].SOCNUM
            ]
          },
          {
            name: this.year[1],
            type: 'bar',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [
              this.numMain2[1].ASSGRO,
              this.numMain2[1].LIAGRO,
              this.numMain2[1].VENDINC,
              this.numMain2[1].MAIBUSINC,
              this.numMain2[1].PROGRO,
              this.numMain2[1].NETINC,
              this.numMain2[1].RATGRO,
              this.numMain2[1].TOTEQU,
              this.numMain2[1].SOCNUM
            ]
          },
          {
            name: this.year[2],
            type: 'bar',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [
              this.numMain2[2].ASSGRO,
              this.numMain2[2].LIAGRO,
              this.numMain2[2].VENDINC,
              this.numMain2[2].MAIBUSINC,
              this.numMain2[2].PROGRO,
              this.numMain2[2].NETINC,
              this.numMain2[2].RATGRO,
              this.numMain2[2].TOTEQU,
              this.numMain2[2].SOCNUM
            ]
          }
        ]
      }

      option && myChart.setOption(option)
    },

    payM() {
      this.queryString.pay = 0
      getFinanceNotAuthNew(this.queryString).then(res => {
        if (res.data.code === 210) {
          this.$confirm(res.data.msg, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.queryString.pay = 1
            getFinanceNotAuthNew(this.queryString).then(res => {
              if (res.data.code === 220) {
                this.$confirm('余额不足，是否前往充值？', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  this.$router.push('/login')
                  localStorage.setItem('activeName', 'third')
                }).catch(() => {
                  this.$router.go(0)
                })
              } else {
                if (res.data.code === 200) {
                  this.show = true
                  //画图
                }
                if (res.data.code === 250) {
                  refundToWallet({
                    'phone': localStorage.getItem('phone'),
                    'entName': localStorage.getItem('entName'),
                    'moduleNum': 51
                  }).then(res => {
                    this.$message({
                      type: 'error',
                      message: res.data.msg
                    })
                  })
                }
                this.drawLineNewByMe(res.data.result, 'not auth')
              }
            })
          }).catch(() => {

          })
        }
      })
    },
    handleSuccess(response, file, fileList) {
      // console.log(response.result.file)
      this.arr.push(response.result.file)
      this.query1.path = this.arr.toString()
      // console.log(this.query1.path)
      authBook(this.query1).then(res => {
        // console.log(res)
        if (res.data.code === 200) {
          this.$message({
            message: '提交成功',
            type: 'success'
          })
        }
      })
    },
    handleRemove(file, fileList) {
      // console.log(file, fileList)
    },
    handlePreview(file) {
      // console.log(file)
    },
    submitUpload(element, index) {
      this.$refs.upload.submit()
    },
    down() {
      window.open(`http://mrxd-file.oss-cn-beijing.aliyuncs.com/download/example.docx`, '_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  .et-hero-tabs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 51px;
    position: relative;
    background: #eee;
    text-align: center;

    .et-hero-tabs-containerf {
      display: flex;
      flex-direction: row;
      bottom: 0;
      width: 85%;
      height: 51px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      background: #fff;
      z-index: 10;
      position: fixed;
      top: 0px;

      a {
        text-decoration: none;
      }

      .et-hero-tab {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        color: #000;
        letter-spacing: 0.1rem;
        transition: all 0.5s ease;
        font-size: 14px;
      }

      .et-hero-tab:hover {
        color: white;
        background: rgba(102, 177, 241, 0.8);
        transition: all 0.5s ease;
      }

      .et-hero-tab-slider {
        position: absolute;
        bottom: 0;
        width: 0;
        height: 6px;
        background: #66B1F1;
        transition: left 0.3s ease;
      }
    }

    .et-hero-tabs-container {
      display: flex;
      flex-direction: row;
      bottom: 0;
      width: 100%;
      height: 51px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      background: #fff;
      z-index: 10;

      a {
        text-decoration: none;
      }

      .et-hero-tab {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        color: #000;
        letter-spacing: 0.1rem;
        transition: all 0.5s ease;
        font-size: 14px;
      }

      .et-hero-tab:hover {
        color: white;
        background: rgba(102, 177, 241, 0.8);
        transition: all 0.5s ease;
      }

      .et-hero-tab-slider {
        position: absolute;
        bottom: 0;
        width: 0;
        height: 6px;
        background: #66B1F1;
        transition: left 0.3s ease;
      }
    }

    .et-hero-tabs-container--top {
      position: fixed;
      top: 0;
    }

    .et-main {
      .et-slide {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        position: relative;
        background: #eee;
        text-align: center;
        padding: 0 2em;

        .cont {
          width: 94%;
          margin: 40px;
          border: 1px solid #EBEBEB;
        }
      }
    }
  }
}

.box1 {
  width: 100%;

  .cont {
    width: 94%;
    min-height: 500px;
    margin: 40px;
    border: 1px solid #EBEBEB;

    tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;

      td {
        border-bottom: 1px solid #EBEBEB;
        border-right: 1px solid #EBEBEB;
        line-height: 1.5;
        padding: 8px 6px;
      }

      .type1 {
        width: 100px
      }

      .type2 {
        width: 200px
      }

      .type3 {
        border-right: none
      }

      .type4 {
        border-bottom: none;
      }
    }
  }

}

.box2 {
  .cont {
    width: 94%;
    margin: 40px;
    border: 1px solid #EBEBEB;

    .clic {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .box22 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .box22-t {
      margin: 40px 0;
    }

    .box22-b {
      margin: 40px 0;
    }
  }
}

.cont1 {
  padding: 40px 0 40px 400px;
  width: 94%;
  border: 1px solid #EBEBEB;
}
</style>
