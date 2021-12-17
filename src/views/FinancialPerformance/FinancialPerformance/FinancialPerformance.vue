<template>
  <div class="finance-wrapper">
    <div class="header-wrapper"></div>
    <div class="content-wrapper">
      <div class="search-wrapper" v-show="!showBtn">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <el-input placeholder="模糊搜索企业名称" @keyup.enter.native="search" class="el-btn" v-model="input"
                          clearable></el-input>
                <el-button type="primary" @click="search">搜索</el-button>
              </div>
              <div v-for="(item,index) of entList" :key="index" class="text item ent-list-wrapper">
                <div class="ent-list-item">{{ item.Name }}</div>
                <div class="diff-btn" @click="addDiff(item.Name)">加入对比</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="margin-right: 20px">对比列表</span>
                <el-button type="primary" @click="drowPic">生成财务图</el-button>
              </div>
              <div v-for="(item,index) of diffList" :key="index" class="text item ent-list-wrapper">
                <div class="ent-list-item">{{ item }}</div>
                <div class="undiff-btn" @click="unDiff(item)">移出对比列表</div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="finance-btn" v-show="showBtn">
        <el-button type="warning" round @click="getData">点击查看企业财务表现</el-button>
        <div style="color: red;font-size: 14px;margin-top: 20px">还有 {{ lookCount }} 次免费机会</div>
      </div>
      <div v-show="showBtn">
        <div class="block">
          <div style="width: 100%;height: 100px;font-size: 30px;font-weight: 800;color: red;line-height: 100px">营收规模 -
            数据样例
          </div>
          <el-image :src="require('../../../assets/ysgm.png')"></el-image>
        </div>
        <div class="block">
          <div style="width: 100%;height: 100px;font-size: 30px;font-weight: 800;color: red;line-height: 100px">盈利能力 -
            数据样例
          </div>
          <el-image :src="require('../../../assets/ylnl.png')"></el-image>
        </div>
        <div class="block">
          <div style="width: 100%;height: 100px;font-size: 30px;font-weight: 800;color: red;line-height: 100px">资产规模 -
            数据样例
          </div>
          <el-image :src="require('../../../assets/zcgm.png')"></el-image>
        </div>
      </div>
      <div class="VENDINC-scale-wrapper" v-show="!showBtn">
        <div style="float: left;margin-bottom: 10px;margin-top:10px;color: rgb(142,143,151)">营收规模标签</div>
        <el-table
          :data="VENDINC_scale_label_data"
          border
          style="width: 100%"
          :header-cell-style="{color:'#006eda'}">
          <el-table-column
            label="序号"
            type="index"
            align="center"
            width="100">
          </el-table-column>
          <el-table-column
            prop="entname"
            label="企业名称"
            align="center">
          </el-table-column>
          <el-table-column
            prop="label"
            label="标签"
            align="center">
          </el-table-column>
          <el-table-column
            prop="desc"
            label="描述"
            align="center">
          </el-table-column>
        </el-table>
        <div style="font-size:12px;margin-bottom: 10px;margin-top:10px;color: rgb(142,143,151);text-align: left">
          <p>说明：通过对主板、创业板、新三板等各类大中小型企业公开财务规模指标的规范化处理，建立了对应企业规模类型的各类企业行为因素关系</p>
          <p>在剔除不显著行为因素的同时提取显著行为因素重新进行回归分析，建立了由企业行为因素通过专有编码分析反应至普适化企业群体规模的分析模型</p>
          <p>最终得到了适用于绝大部分企业规模参考的分析标签结果。结果仅供参考，在任何情况下本公司不保证真实性、准确性和时效性，不作为任何决策的唯一、实质性参考依据。</p>
        </div>
      </div>
      <div class="VENDINC-ec-wrapper" v-show="!showBtn">
        <div class="VENDINC-ec-pic" ref="VENDINC"></div>
        <el-collapse accordion>
          <el-collapse-item :title="bestEntForVENDINC">
            <template>
              <el-table
                :data="scoreDataForVENDINC"
                style="width: 100%"
                border
                :header-cell-style="{color:'#006eda'}">
                <el-table-column
                  align="center"
                  prop="index"
                  label="序号"
                  width="50">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="entName"
                  label="企业名称"
                  width="200">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="score"
                  label="综合评分"
                  width="100">
                </el-table-column>
                <el-table-column
                  align="center"
                  label="详细">
                  <template slot-scope="scope">
                    <el-table :data="scope.row.detail" border :header-cell-style="{color:'#006eda'}">
                      <el-table-column
                        align="center"
                        prop="desc"
                        label="评分说明"
                        width="450">
                      </el-table-column>
                      <el-table-column
                        align="center"
                        prop="features"
                        label="业务特征">
                      </el-table-column>
                      <el-table-column
                        align="center"
                        prop="score"
                        label="评分">
                      </el-table-column>
                    </el-table>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="PROGRO-ec-wrapper" v-show="!showBtn">
        <div class="PROGRO-ec-pic" ref="PROGRO"></div>
        <el-collapse accordion>
          <el-collapse-item :title="bestEntForPROGRO">
            <template>
              <el-table
                :data="scoreDataForPROGRO"
                style="width: 100%"
                border
                :header-cell-style="{color:'#006eda'}">
                <el-table-column
                  align="center"
                  prop="index"
                  label="序号"
                  width="50">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="entName"
                  label="企业名称"
                  width="200">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="score"
                  label="综合评分"
                  width="100">
                </el-table-column>
                <el-table-column
                  align="center"
                  label="详细">
                  <template slot-scope="scope">
                    <el-table :data="scope.row.detail" border :header-cell-style="{color:'#006eda'}">
                      <el-table-column
                        align="center"
                        prop="desc"
                        label="评分说明"
                        width="450">
                      </el-table-column>
                      <el-table-column
                        align="center"
                        prop="features"
                        label="业务特征">
                      </el-table-column>
                      <el-table-column
                        align="center"
                        prop="score"
                        label="评分">
                      </el-table-column>
                    </el-table>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="ASSGRO-ec-wrapper" v-show="!showBtn">
        <div class="ASSGRO-ec-pic" ref="ASSGRO"></div>
        <el-collapse accordion>
          <el-collapse-item :title="bestEntForASSGRO">
            <template>
              <el-table
                :data="scoreDataForASSGRO"
                style="width: 100%"
                border
                :header-cell-style="{color:'#006eda'}">
                <el-table-column
                  align="center"
                  prop="index"
                  label="序号"
                  width="50">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="entName"
                  label="企业名称"
                  width="200">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="score"
                  label="综合评分"
                  width="100">
                </el-table-column>
                <el-table-column
                  align="center"
                  label="详细">
                  <template slot-scope="scope">
                    <el-table :data="scope.row.detail" border :header-cell-style="{color:'#006eda'}">
                      <el-table-column
                        align="center"
                        prop="desc"
                        label="评分说明"
                        width="450">
                      </el-table-column>
                      <el-table-column
                        align="center"
                        prop="features"
                        label="业务特征">
                      </el-table-column>
                      <el-table-column
                        align="center"
                        prop="score"
                        label="评分">
                      </el-table-column>
                    </el-table>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import req from '@/utils/req'
import * as ec from 'echarts'

export default {
  name: 'FinancialPerformance',
  components: {},
  inject: ['reload'],
  props: {},
  data() {
    return {
      VENDINC_scale_label_data: [],
      bestEntForVENDINC: '',
      bestEntForPROGRO: '',
      bestEntForASSGRO: '',
      scoreDataForVENDINC: [],
      scoreDataForPROGRO: [],
      scoreDataForASSGRO: [],
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
      colorIndex: 0,
      tData: {},
      fData: {},
      lookCount: 0,
      phone: '',
      token: '',
      showBtn: true,
      input: '',
      entList: [],
      diffList: []
    }
  },
  computed: {},
  mounted() {
    this.phone = localStorage.getItem('phone')
    this.token = localStorage.getItem('token')
    this.entName = localStorage.getItem('entName')
    this.diffList.push(this.entName)
    this.getLookCount()
  },
  methods: {
    getVendincScale() {
      req.post('api/v1/xd/getVendincScale', {
        'entName': this.diffList.join(),
        'phone': this.phone,
        'pay': 1
      }, this.token).then(res => {
        if (res.data.code === 200) {
          this.VENDINC_scale_label_data = res.data.result
        }
      })
    },
    getLookCount() {
      req.post('api/v1/lx/getFinanceTemp', {
        'phone': this.phone,
        'getLookCount': '123'
      }, this.token).then(res => {
        if (5 - res.data.result > 0) {
          this.lookCount = 5 - res.data.result
        }
      })
    },
    getData() {
      this.getVendincScale()
      req.post('api/v1/lx/getFinanceTemp', {
        'entName': this.diffList.join(),
        'phone': this.phone,
        'pay': 0
      }, this.token).then(res => {
        if (res.data.code === 210) {
          this.$confirm(res.data.msg, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            req.post('api/v1/lx/getFinanceTemp', {
              'entName': this.diffList.join(),
              'phone': this.phone,
              'pay': 1
            }, this.token).then(res_s => {
              if (res_s.data.code === 200) {
                this.fData = res.data.result
                this.showBtn = !this.showBtn
                this.handlerPData(res_s.data.result)
                this.handlerAData(res_s.data.result)
                this.handlerVData(res_s.data.result)
                this.scoreDataForVENDINC = res_s.data.ext.VENDINC
                this.scoreDataForPROGRO = res_s.data.ext.PROGRO
                this.scoreDataForASSGRO = res_s.data.ext.ASSGRO
                this.bestEntForVENDINC = '基于对同类企业对应行为信息的智能算法评估分析，< ' + res_s.data.ext.VENDINC[0].entName + ' > 为目前对比群体中的较优者(点击查看评估依据)'
                this.bestEntForPROGRO = '基于对同类企业对应行为信息的智能算法评估分析，< ' + res_s.data.ext.PROGRO[0].entName + ' > 为目前对比群体中的较优者(点击查看评估依据)'
                this.bestEntForASSGRO = '基于对同类企业对应行为信息的智能算法评估分析，< ' + res_s.data.ext.ASSGRO[0].entName + ' > 为目前对比群体中的较优者(点击查看评估依据)'
              }
            })
          }).catch(() => {

          })
        }
        if (res.data.code === 200) {
          this.fData = res.data.result
          this.showBtn = !this.showBtn
          this.handlerPData(res.data.result)
          this.handlerAData(res.data.result)
          this.handlerVData(res.data.result)
          this.scoreDataForVENDINC = res.data.ext.VENDINC
          this.scoreDataForPROGRO = res.data.ext.PROGRO
          this.scoreDataForASSGRO = res.data.ext.ASSGRO
          this.bestEntForVENDINC = '基于对同类企业对应行为信息的智能算法评估分析，< ' + res.data.ext.VENDINC[0].entName + ' > 为目前对比群体中的较优者(点击查看评估依据)'
          this.bestEntForPROGRO = '基于对同类企业对应行为信息的智能算法评估分析，< ' + res.data.ext.PROGRO[0].entName + ' > 为目前对比群体中的较优者(点击查看评估依据)'
          this.bestEntForASSGRO = '基于对同类企业对应行为信息的智能算法评估分析，< ' + res.data.ext.ASSGRO[0].entName + ' > 为目前对比群体中的较优者(点击查看评估依据)'
        }
      }).catch(err => {
        this.$message.error('查询失败')
      })
    },
    handlerPData(data) {
      let PROGRO_dom = this.$refs.PROGRO
      let PROGRO_ec = ec.init(PROGRO_dom)
      let PROGRO_op = {
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
          data: ['盈利能力', '同比']
        },
        xAxis: [
          {
            type: 'category',
            data: ['2018', '2019', '2020'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '盈利能力',
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} 万元'
            }
          },
          {
            type: 'value',
            name: '同比',
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: [
          {
            name: '盈利能力',
            type: 'bar',
            data: []
          },
          {
            name: '同比',
            type: 'line',
            yAxisIndex: 1,
            data: []
          }
        ]
      }
      let legend = []
      let series = []
      this.colorIndex = 0
      for (let key in data) {
        legend.push(key + '盈利能力')
        legend.push(key + '同比')
        let yearData = []
        let yearDataYoy = []
        for (let i = 2018; i <= 2020; i++) {
          yearData.push(data[key][i]['PROGRO'])
          yearDataYoy.push(data[key][i]['PROGRO_yoy'])
        }
        let objData = {
          name: key + '盈利能力',
          type: 'bar',
          data: yearData,
          itemStyle: {
            color: this.colorList[this.colorIndex]
          }
        }
        let objYoy = {
          name: key + '同比',
          type: 'line',
          yAxisIndex: 1,
          data: yearDataYoy,
          smooth: true,
          color: this.colorList[this.colorIndex],
          lineStyle: {
            color: this.colorList[this.colorIndex]
          }
        }
        this.colorIndex++
        series.push(objData)
        series.push(objYoy)
      }
      PROGRO_op.legend.data = legend
      PROGRO_op.yAxis.name = '盈利能力'
      PROGRO_op.series = series
      PROGRO_ec.setOption(PROGRO_op, true)
    },
    handlerVData(data) {
      let VENDINC_dom = this.$refs.VENDINC
      let VENDINC_ec = ec.init(VENDINC_dom)
      let VENDINC_op = {
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
          data: ['营收规模', '同比']
        },
        xAxis: [
          {
            type: 'category',
            data: ['2018', '2019', '2020'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '营收规模',
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} 万元'
            }
          },
          {
            type: 'value',
            name: '同比',
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: [
          {
            name: '营收规模',
            type: 'bar',
            data: []
          },
          {
            name: '同比',
            type: 'line',
            yAxisIndex: 1,
            data: []
          }
        ]
      }
      let legend = []
      let series = []
      this.colorIndex = 0
      for (let key in data) {
        legend.push(key + '营收规模')
        legend.push(key + '同比')
        let yearData = []
        let yearDataYoy = []
        for (let i = 2018; i <= 2020; i++) {
          yearData.push(data[key][i]['VENDINC'])
          yearDataYoy.push(data[key][i]['VENDINC_yoy'])
        }
        let objData = {
          name: key + '营收规模',
          type: 'bar',
          data: yearData,
          itemStyle: {
            color: this.colorList[this.colorIndex]
          }
        }
        let objYoy = {
          name: key + '同比',
          type: 'line',
          yAxisIndex: 1,
          data: yearDataYoy,
          smooth: true,
          color: this.colorList[this.colorIndex],
          lineStyle: {
            color: this.colorList[this.colorIndex]
          }
        }
        this.colorIndex++
        series.push(objData)
        series.push(objYoy)
      }
      VENDINC_op.legend.data = legend
      VENDINC_op.yAxis.name = '营收规模'
      VENDINC_op.series = series
      VENDINC_ec.setOption(VENDINC_op, true)
    },
    handlerAData(data) {
      let ASSGRO_dom = this.$refs.ASSGRO
      let ASSGRO_ec = ec.init(ASSGRO_dom)
      let ASSGRO_op = {
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
          data: ['资产规模', '同比']
        },
        xAxis: [
          {
            type: 'category',
            data: ['2018', '2019', '2020'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '资产规模',
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} 万元'
            }
          },
          {
            type: 'value',
            name: '同比',
            min: null,
            max: null,
            interval: null,
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: [
          {
            name: '资产规模',
            type: 'bar',
            data: []
          },
          {
            name: '同比',
            type: 'line',
            yAxisIndex: 1,
            data: []
          }
        ]
      }
      let legend = []
      let series = []
      this.colorIndex = 0
      for (let key in data) {
        legend.push(key + '资产规模')
        legend.push(key + '同比')
        let yearData = []
        let yearDataYoy = []
        for (let i = 2018; i <= 2020; i++) {
          yearData.push(data[key][i]['ASSGRO'])
          yearDataYoy.push(data[key][i]['ASSGRO_yoy'])
        }
        let objData = {
          name: key + '资产规模',
          type: 'bar',
          data: yearData,
          itemStyle: {
            color: this.colorList[this.colorIndex]
          }
        }
        let objYoy = {
          name: key + '同比',
          type: 'line',
          yAxisIndex: 1,
          data: yearDataYoy,
          smooth: true,
          color: this.colorList[this.colorIndex],
          lineStyle: {
            color: this.colorList[this.colorIndex]
          }
        }
        this.colorIndex++
        series.push(objData)
        series.push(objYoy)
      }
      ASSGRO_op.legend.data = legend
      ASSGRO_op.yAxis.name = '资产规模'
      ASSGRO_op.series = series
      ASSGRO_ec.setOption(ASSGRO_op, true)
    },
    search() {
      req.post('api/v1/qcc/getEntList', {
        'entName': this.input,
        'phone': this.phone,
        'page': 1,
        'pageSize': 15
      }, this.token).then(res => {
        if (res.data.code === 200) {
          this.entList = res.data.result
        }
      }).catch(err => {
        this.$message.error('查询失败')
      })
    },
    drowPic() {
      if (this.diffList.length > 5) {
        this.$message.error('最多选5家企业')
        return
      }
      if (this.diffList.length < 1) {
        this.$message.error('至少选1家企业')
        return
      }
      req.post('api/v1/lx/getFinanceTemp', {
        'entName': this.diffList.join(),
        'phone': this.phone,
        'pay': 0
      }, this.token).then(res => {
        if (res.data.code === 210) {
          this.$confirm(res.data.msg, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            req.post('api/v1/lx/getFinanceTemp', {
              'entName': this.diffList.join(),
              'phone': this.phone,
              'pay': 1
            }, this.token).then(res_s => {
              if (res_s.data.code === 200) {
                this.getVendincScale()
                this.handlerPData(res_s.data.result)
                this.handlerAData(res_s.data.result)
                this.handlerVData(res_s.data.result)
                this.scoreDataForVENDINC = res_s.data.ext.VENDINC
                this.scoreDataForPROGRO = res_s.data.ext.PROGRO
                this.scoreDataForASSGRO = res_s.data.ext.ASSGRO
                this.bestEntForVENDINC = '基于对同类企业对应行为信息的智能算法评估分析，< ' + res_s.data.ext.VENDINC[0].entName + ' > 为目前对比群体中的较优者(点击查看评估依据)'
                this.bestEntForPROGRO = '基于对同类企业对应行为信息的智能算法评估分析，< ' + res_s.data.ext.PROGRO[0].entName + ' > 为目前对比群体中的较优者(点击查看评估依据)'
                this.bestEntForASSGRO = '基于对同类企业对应行为信息的智能算法评估分析，< ' + res_s.data.ext.ASSGRO[0].entName + ' > 为目前对比群体中的较优者(点击查看评估依据)'
              }
            })
          }).catch(() => {

          })
        }
        if (res.data.code === 200) {
          this.handlerPData(res.data.result)
          this.handlerAData(res.data.result)
          this.handlerVData(res.data.result)
          this.scoreDataForVENDINC = res.data.ext.VENDINC
          this.scoreDataForPROGRO = res.data.ext.PROGRO
          this.scoreDataForASSGRO = res.data.ext.ASSGRO
          this.bestEntForVENDINC = '基于对同类企业对应行为信息的智能算法评估分析，< ' + res.data.ext.VENDINC[0].entName + ' > 为目前对比群体中的较优者(点击查看评估依据)'
          this.bestEntForPROGRO = '基于对同类企业对应行为信息的智能算法评估分析，< ' + res.data.ext.PROGRO[0].entName + ' > 为目前对比群体中的较优者(点击查看评估依据)'
          this.bestEntForASSGRO = '基于对同类企业对应行为信息的智能算法评估分析，< ' + res.data.ext.ASSGRO[0].entName + ' > 为目前对比群体中的较优者(点击查看评估依据)'
        }
      }).catch(err => {
        this.$message.error('查询失败')
      })
    },
    addDiff(ent) {
      let num = this.diffList.indexOf(ent)
      if (num === -1) {
        this.diffList.push(ent)
      }
    },
    unDiff(ent) {
      let num = this.diffList.indexOf(ent)
      if (num !== -1) {
        this.diffList.splice(num, 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.finance-wrapper {
  text-align: center;

  .header-wrapper {
    width: 100%;
    height: 60px;
  }

  .content-wrapper {
    .search-wrapper {
      .el-btn {
        width: 30%;
      }

      .finance-btn {
        display: flex;
        flex-direction: column;
      }

      .ent-list-wrapper {
        display: flex;
        justify-content: space-between;
        padding-left: 50px;
        padding-right: 50px;

        .ent-list-item {
          margin: 5px 0;
        }

        .diff-btn {
          color: #4c84ff;
          cursor: pointer;
        }

        .undiff-btn {
          color: red;
          cursor: pointer;
        }
      }
    }

    .PROGRO-ec-wrapper {
      .PROGRO-ec-pic {
        margin-top: 20px;
        width: 1258px;
        height: 700px;
      }
    }

    .VENDINC-scale-wrapper {

    }

    .VENDINC-ec-wrapper {
      margin-top: 30px;

      .VENDINC-ec-pic {
        width: 1258px;
        height: 700px;
      }
    }

    .ASSGRO-ec-wrapper {
      .ASSGRO-ec-pic {
        width: 1258px;
        height: 700px;
      }
    }
  }

}
</style>
