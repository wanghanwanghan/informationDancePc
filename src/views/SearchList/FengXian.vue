<template>
  <div style="width:100%;background-color: #162960;padding-top: 10px;height: inherit;">
    <div style="width: 1200px;margin: auto;height: 910px">
      <div style="width: 1200px;margin: auto;text-align: center;background-color: #0a153a">
        <div style="margin: auto;color: #FFFFFF;font-size: 24px;font-weight: bold;height: 44px;line-height: 44px;">
          企业风险评估
        </div>
      </div>
      <div style="height: 460px;width: 100%;margin: 30px 0px">
        <div style="width: 28%;float: left">
          <div>
            <div
              style="background:linear-gradient(to right, #2b5990 , #162960);color:white;width: 200px;line-height: 30px;padding-left: 10px">
              <div>企业查询</div>
            </div>

          </div>

          <div
            style="background-color: #132655;width: 100%;height: 300px;border: 1px solid #1f3a70;margin: 10px 0px;padding: 10px">
            <div style="height: 50px">
              <div style="float: left;color: #FFFFFF;font-size: 12px;font-weight: bold;line-height: 34px">企业搜索：</div>
              <div style="float: right;">
                <el-input style="width: 250px" size="small" v-model="entName">
                  <el-button slot="append" icon="el-icon-search"
                             style="color: rgb(255, 255, 255);width: 56px;background-color: #4c95f7;padding: 10px 1px;"
                             @click="searchEnt">
                    搜索
                  </el-button>
                </el-input>
              </div>
            </div>
            <div style="font-size: 12px">
              <div style="color: #405b84;height: 30px;width: 100%; cursor:pointer" @click="searchData=[]" >清空历史记录<i class="el-icon-delete" ></i></div>
              <div style="width: 100%;height: 140px">
                <div style="color: #96c5e6;float: left;width: 60px">历史记录:</div>
                <div style="color: #384571;float: left">
                  <div v-for="v in searchData">{{v}}</div>
                </div>
              </div>
              <div style="color: #96c5e6">企业业务、团队稳定性、企业股东层稳定性、履约能力方面分析，抗风险能力较弱</div>
            </div>
          </div>
        </div>
        <div style="width: 44%;float: left">
          <img src="../../assets/diqiu2.png" style="width: 100%;height: 100%">
        </div>
        <div style="width: 24%;float: left">

          <div>
            <div
              style="background:linear-gradient(to right, #2b5990 , #162960);color:white;width: 200px;line-height: 30px;padding-left: 10px">
              <div>综合风险评估</div>
            </div>
            <div>
              <div ref="leftChart" style="width: 240px; height: 210px" id="leftChart"></div>
            </div>
            <div style="font-weight: bold;margin: 20px 0px">
              <span style="color: #FFFFFF">综合评估结果：</span>
              <span style="display: none;color: #5cc73b" class="you tag">优</span>
              <span style="display: none;color: #3ba2c7" class="zhongshang tag">中上</span>
              <span style="display: none;color: #f49f44" class="zhong tag">中</span>
              <span style="display: none;color: #d444f4" class="zhongxia tag">中下</span>
              <span style="display: none;color: #d7485f" class="cha tag">差</span>
            </div>
          </div>

          <div
            style="background:linear-gradient(to right, #2b5990 , #162960);color:white;width: 200px;line-height: 30px;padding-left: 10px">
            <div>分值区间</div>

          </div>
          <div style="color: #96c5e6;line-height: 30px;font-size: 12px">
            <div>【优】分值区间是0-30</div>
            <div>【中上】分值区间是30-50</div>
            <div>【中】分值区间是40-60</div>
            <div>【中下】分值区间是60-80</div>
            <div>【差】分值区间是80-100</div>
          </div>
        </div>
        <div style="float: right;width: 4%;color: #FFFFFF;margin-top: 170px;">
          <div style="height: 30px">
            <div style="float:left;width: 20px;height: 15px;background-color: #5cc73b"></div>
            <div style="float: right">优</div>
          </div>
          <div style="height: 30px">
            <div style="float:left;width: 20px;height: 15px;background-color: #f49f44"></div>
            <div style="float: right">中</div>
          </div>
          <div style="height: 30px">
            <div style="float:left;width: 20px;height: 15px;background-color: #d7485f"></div>
            <div style="float: right">差</div>
          </div>
        </div>
      </div>
      <div style="height: 200px">
        <div
          style="background:linear-gradient(to right, #2b5990 , #162960);color:white;width: 200px;line-height: 30px;padding-left: 10px">
          <div>各项风险评估</div>
        </div>
        <div ref="rightChart" style="width: 170px; height: 170px;float:left;" id="rightChart1"></div>
        <div ref="rightChart" style="width: 170px; height: 170px;float:left;" id="rightChart2"></div>
        <div ref="rightChart" style="width: 170px; height: 170px;float:left;" id="rightChart3"></div>
        <div ref="rightChart" style="width: 170px; height: 170px;float:left;" id="rightChart4"></div>
        <div ref="rightChart" style="width: 170px; height: 170px;float:left;" id="rightChart5"></div>
        <div ref="rightChart" style="width: 170px; height: 170px;float:left;" id="rightChart6"></div>
        <div ref="rightChart" style="width: 170px; height: 170px;float:left;" id="rightChart7"></div>
      </div>
    </div>


  </div>
</template>

<script>
import * as echarts from "echarts";
import {getEntList, getFengXian} from "@/api/article";

export default {
  name: "FengXian",
  data() {
    return {
      searchData:[],
      phone: localStorage.getItem('phone'),
      query: {
        entName: '',
        phone: ''
      },
      zongFen: 0,
      entName: '',
    }
  },
  created() {

  },
  mounted() {
    this.searchData.push(this.$route.query.entName)
    this.entName = this.$route.query.entName
    this.query.entName = this.$route.query.entName
    this.query.phone = localStorage.getItem('phone')
    getFengXian(this.query).then(res => {
      console.log(res)
      if (res.data.code == 200) {
        var result = res.data.result.result
        this.zongFen = (0 + result.caiwu + result.gaofengxian + result.gongshang + result.sifa + result.shuiwu + result.tuandui + result.xingzheng).toFixed(2)
        console.log(this.zongFen)
        this.drawMyLeftChart(this.zongFen)
        this.$el.getElementsByClassName('you').item(0).style.display = 'none'
        this.$el.getElementsByClassName('zhongshang').item(0).style.display = 'none'
        this.$el.getElementsByClassName('zhong').item(0).style.display = 'none'
        this.$el.getElementsByClassName('zhongxia').item(0).style.display = 'none'
        this.$el.getElementsByClassName('cha').item(0).style.display = 'none'
        if (this.zongFen < 31) {
          this.$el.getElementsByClassName('you').item(0).style.display = ''
        } else if (this.zongFen > 31 && this.zongFen < 41) {
          this.$el.getElementsByClassName('zhongshang').item(0).style.display = ''
        } else if (this.zongFen > 41 && this.zongFen < 61) {
          this.$el.getElementsByClassName('zhong').item(0).style.display = ''
        } else if (this.zongFen > 61 && this.zongFen < 81) {
          this.$el.getElementsByClassName('zhongxia').item(0).style.display = ''
        } else if (this.zongFen > 81) {
          this.$el.getElementsByClassName('cha').item(0).style.display = ''
        }
        this.drawMyChart('rightChart1', '司法风险', result.sifa.toFixed(2))
        this.drawMyChart('rightChart2', '团队风险', result.tuandui.toFixed(2))
        this.drawMyChart('rightChart3', '涉税风险', result.shuiwu.toFixed(2))
        this.drawMyChart('rightChart4', '重大风险', result.gaofengxian.toFixed(2))
        this.drawMyChart('rightChart5', '财务风险', result.caiwu.toFixed(2))
        this.drawMyChart('rightChart6', '工商风险', result.gongshang.toFixed(2))
        this.drawMyChart('rightChart7', '舆情风险', result.xingzheng.toFixed(2))
      } else {
        this.drawMyLeftChart(0)
        this.$el.getElementsByClassName('you').item().style.display = ''
      }
    })
      this.drawMyChart('rightChart7', '舆情风险', 0)
  },
  methods: {
    searchEnt() {
      this.searchData.push(this.entName)
      this.query.entName = this.entName
      this.query.phone = localStorage.getItem('phone')
      getFengXian(this.query).then(res => {
        console.log(res)
        if (res.data.code == 200) {
          var result = res.data.result.result
          this.zongFen = (0 + result.caiwu + result.gaofengxian + result.gongshang + result.sifa + result.shuiwu + result.tuandui + result.xingzheng).toFixed(2)
          console.log(this.zongFen)
          this.drawMyLeftChart(this.zongFen)
          this.$el.getElementsByClassName('you').item(0).style.display = 'none'
          this.$el.getElementsByClassName('zhongshang').item(0).style.display = 'none'
          this.$el.getElementsByClassName('zhong').item(0).style.display = 'none'
          this.$el.getElementsByClassName('zhongxia').item(0).style.display = 'none'
          this.$el.getElementsByClassName('cha').item(0).style.display = 'none'
          if (this.zongFen < 31) {
            this.$el.getElementsByClassName('you').item(0).style.display = ''
          } else if (this.zongFen > 31 && this.zongFen < 41) {
            this.$el.getElementsByClassName('zhongshang').item(0).style.display = ''
          } else if (this.zongFen > 41 && this.zongFen < 61) {
            this.$el.getElementsByClassName('zhong').item(0).style.display = ''
          } else if (this.zongFen > 61 && this.zongFen < 81) {
            this.$el.getElementsByClassName('zhongxia').item(0).style.display = ''
          } else if (this.zongFen > 81) {
            this.$el.getElementsByClassName('cha').item(0).style.display = ''
          }
          this.drawMyChart('rightChart1', '司法风险', result.sifa.toFixed(2))
          this.drawMyChart('rightChart2', '团队风险', result.tuandui.toFixed(2))
          this.drawMyChart('rightChart3', '涉税风险', result.shuiwu.toFixed(2))
          this.drawMyChart('rightChart4', '重大风险', result.gaofengxian.toFixed(2))
          this.drawMyChart('rightChart5', '财务风险', result.caiwu.toFixed(2))
          this.drawMyChart('rightChart6', '工商风险', result.gongshang.toFixed(2))
          this.drawMyChart('rightChart7', '舆情风险', result.xingzheng.toFixed(2))
        } else {
          this.drawMyLeftChart(0)
          this.$el.getElementsByClassName('you').item().style.display = ''
        }
      })
    },
    drawMyChart(id, name, value) {
      // let myChart = echarts.init(this.$refs.chart);
      // const myChart = echarts.init(document.getElementById(id));
      const myChart = echarts.init(document.getElementById(id));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        toolbox: {
          show: false,
          feature: {
            restore: {},
            saveAsImage: {},
          },
        },
        // 配置
        series: [
          {
            name: name,
            type: "gauge",
            axisLabel: {
              distance: 10, fontWeight: 200, shadowOffsetY: 100, height: 170, color: '#ffffff', fontSize: 12
            },
            axisLine: {
              // distance:10,
              lineStyle: {

                // width: 5 // 修改仪表盘宽度的属性
                "show": false,
                "width": 8,
                "opacity": 1,
                "curveness": 0,
                "type": "solid",
                "color": [
                  [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0.1,
                      color: "#69cbed"
                    },
                    {
                      offset: 0.8,
                      color: "#c45892"
                    }
                  ])
                  ]
                ]
              }
            },
            axisTick: {
              distance: -8,
            },
            splitLine: {
              distance: -8,
              // 分割线
              // show: false,
            },
            title: {offsetCenter: [0, '85%'], color: "#6acef4", fontSize: 18},
            detail: {
              color: '#ffffff',
              formatter: "{value}",
              offsetCenter: [0, '45%'],
              fontStyle: "oblique",
              fontSize: 16
            },
            pointer: {width: 2},
            data: [{value: value, name: name}]
          },
        ],
      });
    },
    drawMyLeftChart(value) {
      // let myChart = echarts.init(this.$refs.chart);
      // const myChart = echarts.init(document.getElementById(id));
      const myChart = echarts.init(document.getElementById("leftChart"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        toolbox: {
          show: false,
          feature: {
            restore: {},
            saveAsImage: {},
          },
        },
        // 配置
        series: [
          {
            // name: "综合评估",
            type: "gauge",
            z: 3,
            min: 0,
            max: 100,
            splitNumber: 10,
            radius: '60%',
            axisLabel: {
              distance: -40, fontWeight: 200, shadowOffsetY: 100, height: 100, color: '#ffffff'
            },
            axisLine: {
              // distance:-10,
              lineStyle: {
                // width: 5 // 修改仪表盘宽度的属性
                "show": false,
                "width": 10,
                "opacity": 1,
                "curveness": 0,
                "type": "solid",
                "color": [
                  [
                    0.3,
                    "#5cc73b"
                  ],
                  [
                    0.4,
                    "#3ba2c7"
                  ],
                  [
                    0.6,
                    "#f49f44"
                  ],
                  [
                    0.8,
                    "#d444f4"
                  ],
                  [
                    1,
                    "#d7485f"
                  ]
                ]
              },
              'splitLine': {
                'length': -6,
                'lineStyle': {
                  'opacity': 0
                }
              },
            },

            axisTick: {
              distance: -10,
            },
            // splitLine: {
            //   distance:-8,
            // },
            // title: {offsetCenter: [0, '85%'], color: 'red', fontSize: 24},
            detail: {
              formatter: "{value}",
              offsetCenter: [0, '65%'],
              fontStyle: "oblique",
              fontSize: 20,
              color: '#ffffff'
            },
            pointer: {width: 3},
            data: [{value: value,}]
          },
        ],
      });
    },
  }
}
</script>

<style scoped>

</style>
