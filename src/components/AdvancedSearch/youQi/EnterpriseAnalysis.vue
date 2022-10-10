<template>
  <div>
    <div style="padding-left: 20px;padding-bottom: 10px;position: absolute;width: 1200px;">
      <el-button style="background-color: #ec944d;color: #FFFFFF;font-weight: bold" @click="goKeDong()"> 更多优企</el-button>
      <el-button type="primary" style="font-weight: bold" @click="goTeZheng()"> 查看优企特征组合</el-button>
      <el-button type="primary" style="font-weight: bold" @click="goShouKe"> 自定义查询优企</el-button>
      <span style="color: darkred"><span style="color: orange" class="el-icon-warning" />提示：如果本次分析结果不是您要分析的企业名单。可返回<a style="color: #0b09f3" @click="goShouKe">优企添加</a>页重新编辑</span>
    </div>
    <div style="display: flow-root;">
      <div class="div_style" style="margin-top: 50px">
        <div style="width: 100%;color: #0b09f3;font-size: 14px">以下分析结果中默认勾选的是最优客户画像，已为您推荐不少于1万家近似优企，具体请点击【更多优企】请稍等1分钟左右刷新查看。</div>

        <div style="float: left;min-width:100px;width: 10%;font-size: 20px;height: 350px;line-height: 350px;text-align: end;">经营规模：</div>
        <div id="mychart" style="float: left" class="echart" :style="myChartStyle1" />
      </div>
      <div class="div_style">
        <div style="float: left;min-width:100px;width: 10%;font-size: 20px;height: 350px;line-height: 350px;text-align: end;">国标行业：</div>
        <div id="guoBiao" style="float: left" class="echart" :style="myChartStyle2" />
      </div>
      <div class="div_style">
        <div style="float: left;min-width:100px;width: 10%;font-size: 20px;height: 350px;line-height: 350px;text-align: end;">成立年限：</div>
        <div id="nianxian" style="float: left" class="echart" :style="myChartStyle3" />
      </div>
      <div class="div_style">
        <div style="float: left;min-width:100px;width: 10%;font-size: 20px;height: 350px;line-height: 350px;text-align: end;">经营地域：</div>
        <div id="diYu" style="float: left" class="echart" :style="myChartStyle4" />
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
// import { getKeDongFeature, startAnalysis } from '../../../../api/userMG'

export default {
  name: 'EnterpriseAnalysis',
  data() {
    return {
      xData: [], // 横坐标
      yData: [], // 数据
      xDataG: [], // 横坐标
      yDataG: [], // 数据
      xDataC: [], // 横坐标
      yDataC: [], // 数据
      xDataJ: [], // 横坐标
      yDataJ: [], // 数据
      myChartStyle1: { float: 'left', width: '90%', height: '350px' }, // 图表样式
      myChartStyle2: { float: 'left', width: '90%', height: '350px' }, // 图表样式
      myChartStyle3: { float: 'left', width: '90%', height: '350px' }, // 图表样式
      myChartStyle4: { float: 'left', width: '90%', height: '350px' } // 图表样式
    }
  },
  mounted() {
  },
  created() {
    const from = { phone: localStorage.getItem('phone') }
    if (this.$route.query.history_id) {
      from.history_id = this.$route.query.history_id
    }
    // getKeDongFeature(from).then(res => {
    //   if (res.data.code == 200) {
    //     const data = res.data.result
    //     this.initEcharts(data.nicX, data.nicY, 'guoBiao')
    //     this.initEcharts(data.areaX, data.areaY, 'diYu')
    //     this.initEcharts(data.YingShouX, data.YingShouY, 'mychart')
    //     this.initEcharts(data.openFromX, data.openFromY, 'nianxian')
    //   }
    //   console.log(res)
    // })
  },
  methods: {
    goTeZheng() {
      this.$router.push({ path: '/system/souke/youQi/teZheng' })
    },
    goKeDong() {
      this.$router.push({ path: '/system/souke/youQi/keDong' })
    },
    goShouKe() {
      this.$router.push({ path: '/system/souke/souKeList' })
    },
    initEcharts(x, y, id) {
      // 基本柱状图
      const option = {
        // tooltip:{
        //   trigger:'item',
        //   formatter:'{c}%',
        // },
        grid: {
          borderWidth: 0,
          y: 80,
          y2: 60
        },
        xAxis: {
          type: 'category',
          show: true,
          axisLabel: {
            interval: 0, rotate: -15,
            grid: { left: '90%', bottom: '5%' }
            //
            // show: true,
            // interval: 0,//使x轴上的文字显示完全,
            // //设置一行显示几个字,自己设置
            // formatter: function (params) {
            //   var newParamsName = "";
            //   var paramsNameNumber = params.length;
            //   var provideNumber = 4;
            //   var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
            //   if (paramsNameNumber > provideNumber) {
            //     for (var p = 0; p < rowNumber; p++) {
            //       var tempStr = "";
            //       var start = p * provideNumber;
            //       var end = start + provideNumber;
            //       if (p == rowNumber - 1) {
            //         tempStr = params.substring(start, paramsNameNumber);
            //       } else {
            //         tempStr = params.substring(start, end) + "\n";
            //       }
            //       newParamsName += tempStr;
            //     }
            //   } else {
            //     newParamsName = params;
            //   }
            //   return newParamsName;
            // }
          },

          data: x
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value}%'
          },
          splitLine: {
            lineStyle: { color: '#d4d7da' }
          },
          boundaryGap: [0.2, 0.2]
        },
        series: [
          {
            type: 'bar', // 形状为柱状图
            data: y,
            barWidth: 30,

            // barGap:'5%',
            // barCategoryGap:'5%',
            itemStyle: {
              // barBorderRadius: [50, 50, 0, 0],
              normal: {
                color: function(params) {
                  const colorList = [
                    // new echarts.graphic.LinearGradient(
                    //   0,
                    //   1,
                    //   0,
                    //   0,
                    //   [
                    //     { offset: 0, color: '#89d9b5' },
                    //     { offset: 1, color: '#09774d' }
                    //   ],
                    //   // false
                    // ),
                    '#f30606',
                    '#e76b46',
                    '#ee8d19',
                    '#e3a60a',
                    '#e3df0a',
                    '#98ea0b',
                    '#0ae527',
                    '#07e7cd',
                    '#0abce3',
                    '#0384c9',
                    '#1664f5',
                    '#1425f1',
                    '#3801c7',
                    '#a309e0',
                    '#e009dc',
                    '#e009a3',
                    '#e0094a',
                    '#f30606'
                  ]
                  return colorList[params.dataIndex]
                }
              }

            },
            label: {
              show: true,
              position: 'top',
              formatter: '{c}%',// 这是关键，在需要的地方加上就行了
              distance: 15
            }
          }
        ]
      }
      const myChart = echarts.init(document.getElementById(id))
      myChart.setOption(option)
      // 随着屏幕大小调节图表
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
  }
}
</script>

<style >
.div_style{
  padding: 20px;
  height: 350px;
  border: 1px solid #c9c8c8;
}
</style>
