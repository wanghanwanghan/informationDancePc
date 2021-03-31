<template>
  <div class="box">
    <!-- 财务数据 -->
    <section class="et-hero-tabs">
      <div :class="isFixed?'et-hero-tabs-containerf':'et-hero-tabs-container'">
        <!-- <div class="et-hero-tabs-container"> -->
        <a class="et-hero-tab" href="#tab-jb">财务数据</a>
        <a class="et-hero-tab" href="#tab-gd">财务数据（需授权）</a>
        <!-- <a class="et-hero-tab" href="#tab-swsj">税务数据（需授权）</a> -->
        <span class="et-hero-tab-slider" />
      </div>
    </section>
    <main class="et-main">
      <section id="tab-jb" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">财务数据</h3>
        <div class="box2">
          <!-- 财务数据 -->
          <div v-show="!show" class="contF">
            <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
              <div style="margin:20px 0">此信息需要付费查看</div>
              <el-button type="primary" style="margin:10px 0 30px 0" @click="payM">点击查看</el-button>
            </div>
          </div>
          <div v-show="show" class="cont">
            <div id="main" :style="{width: '1000px', height: '600px'}" />
          </div>
        </div>
      </section>
      <div style="border-bottom:1px solid #DCDFE6" />
      <section id="tab-gd" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">财务数据（需取得目标企业授权）</h3>
        <div class="box2">
          <!-- 财务数据（需授权） -->
          <div class="box22">
            <div class="box22-t">
              请先下载授权书，提交审核通过后查看
            </div>
            <div class="box22-b">
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
          </div>
        </div>
      </section>

    </main>
  </div>
</template>
<script>
import {
  getThreeYearsData,
  authBook,
  getFinanceNotAuth
} from '@/api/article'
const echarts = require('echarts/lib/echarts')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/grid')
require('echarts/lib/component/legend')
require('echarts/lib/chart/bar')
var token = localStorage.getItem('token')
export default {
  data() {
    return {
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
      show: false,
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
        dataCount: 5,
        phone: '',
        pay: 1
      },
      Essential: [],
      IncometaxMonthlyDeclaration: [],
      IncometaxAnnualReport: [],
      FinanceIncomeStatementAnnualReport: [],
      FinanceIncomeStatement: [],
      FinanceBalanceSheetAnnual: [],
      FinanceBalanceSheet: [],
      VatReturn: []
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
    this.query.entName = this.query1.entName = this.query4.entName = this.entName = localStorage.getItem('entName')
    this.query.phone = this.query1.phone = this.query4.phone = this.phone = localStorage.getItem('phone')

    // 龙信 近n年财务数据，不需授权
    this.query4.code = localStorage.getItem('CreditCode')
    var myDate = new Date()
    this.query4.year = myDate.getFullYear() - 1
    getFinanceNotAuth(this.query4).then(res => {
      // console.log(res)
    })
    const _this = this
    window.onresize = function() {
      _this.myChart.resize()
    }

    getThreeYearsData(this.query).then(res => {
      console.log(res.data.result)
      if (res.data.code === 200) {
        this.show = true
        var obj = res.data.result
        for (const key in obj) {
          this.year.push(key)
          this.num.push(obj[key])
        }
      }

      // console.log(this.year)
      // console.log(this.num)
      this.drawLine()
    })
  },
  methods: {
    // 吸顶效果
    initHeight() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      this.isFixed = scrollTop > this.scrollHeight
    },

    drawLine() {
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: [this.year[0], this.year[1]]
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
            data: [this.num[0].ASSGRO_REL, this.num[0].LIAGRO_REL, this.num[0].VENDINC_REL, this.num[0].MAIBUSINC_REL, this.num[0].PROGRO_REL, this.num[0].NETINC_REL, this.num[0].RATGRO_REL, this.num[0].TOTEQU_REL, this.num[0].SOCNUM]
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
            data: [this.num[1].ASSGRO_REL, this.num[1].LIAGRO_REL, this.num[1].VENDINC_REL, this.num[1].MAIBUSINC_REL, this.num[1].PROGRO_REL, this.num[1].NETINC_REL, this.num[1].RATGRO_REL, this.num[1].TOTEQU_REL, this.num[1].SOCNUM]
          }
        ]
      }

      option && myChart.setOption(option)
    },

    payM() {
      getThreeYearsData(this.query).then(res => {
        // console.log(res)
        if (res.data.code === 210) {
          this.$confirm(res.data.msg, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
          // this.$message({
          //   type: 'success',
          //   message: '删除成功!'
          // });
            this.query.pay = 1
            getThreeYearsData(this.query).then(res => {
              // console.log(res)
              if (res.data.code === 220) {
                this.$confirm('余额不足，是否前往充值？', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  // this.$message({
                  //   type: 'success',
                  //   message: '删除成功!'
                  // })
                  this.$router.push('./login')
                  localStorage.setItem('activeName', 'third')
                }).catch(() => {
                  // this.$message({
                  //   type: 'info',
                  //   message: '已取消删除'
                  // })
                  this.$router.go(0)
                })
              } else {
                this.show = true
                var obj = res.data.result
                for (const key in obj) {
                  this.year.push(key)
                  this.num.push(obj[key])
                }
                this.drawLine()
              }
            })
          }).catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: '已取消删除'
          // });
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
.box{
  .et-hero-tabs{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 51px;
    position: relative;
    background: #eee;
    text-align: center;
    .et-hero-tabs-containerf{
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
    .et-main{
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
        .cont{
          width:94%;
          margin:40px;
          border:1px solid #EBEBEB;
        }
      }
    }
  }
}
.box1{
  width: 100%;
  .cont{
    width:94%;
    min-height:500px;
    margin:40px;
    border:1px solid #EBEBEB;

      tr{
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
      td{
        border-bottom: 1px solid #EBEBEB;
        border-right: 1px solid #EBEBEB;
        line-height: 1.5;
        padding: 8px 6px;
      }
      .type1{
        width:100px
      }
      .type2{
        width:200px
      }
      .type3{
        border-right:none
      }
      .type4{
        border-bottom: none;
      }
    }
  }

}
.box2{
  .cont{
    width:94%;
    margin:40px;
    border:1px solid #EBEBEB;
    .clic{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .box22{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .box22-t{
      margin:40px 0;
    }
    .box22-b{
      margin:40px 0;
    }
  }
}
.cont1{
  padding:40px 0 40px 400px;
  width:94%;
  border:1px solid #EBEBEB;
}
</style>
