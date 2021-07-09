<template>
  <div>
    <div>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card class="box-card" style="text-align: center;">
            <div slot="header" class="clearfix">
              <el-input placeholder="模糊搜索企业名称" @keyup.enter.native="search('fz')" class="el-btn" v-model="fz.search"
                        clearable></el-input>
              <el-button type="primary" @click="search('fz')">搜索</el-button>
            </div>
            <div v-for="(item,index) of fz.search_list" :key="index" class="text item ent-list-wrapper">
              <div class="ent-list-item">{{ item.Name }}</div>
              <div class="diff-btn" @click="addDiff(item.Name,'fz')">加入对比</div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="box-card" style="text-align: center;">
            <div slot="header" class="clearfix">
              <el-input placeholder="模糊搜索企业名称" @keyup.enter.native="search('fm')" style="width: 40%" v-model="fm.search"
                        clearable></el-input>
              <el-button type="primary" @click="search('fm')">搜索</el-button>
              <el-select v-model="fm.select_value" placeholder="快速选择行业" style="margin-left: 25px"
                         @change="quickSelectChange">
                <el-option
                  v-for="item in fm.select_list"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div v-for="(item,index) of fm.search_list" :key="index" class="text item ent-list-wrapper">
              <div class="ent-list-item">{{ item.Name }}</div>
              <div class="diff-btn" @click="addDiff(item.Name,'fm')">加入对比</div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card class="box-card" style="text-align: center;">
            <div slot="header" class="clearfix">
              分子企业
            </div>
            <div v-for="(name,index) of fz.list" :key="index" class="text item ent-list-wrapper">
              <div class="ent-list-item">{{ name }}</div>
              <div class="undiff-btn" @click="unDiff(name,'fz')">移出对比</div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="box-card" style="text-align: center;">
            <div slot="header" class="clearfix">
              分母企业
            </div>
            <div v-for="(name,index) of fm.list" :key="index" class="text item ent-list-wrapper">
              <div class="ent-list-item">{{ name }}</div>
              <div class="undiff-btn" @click="unDiff(name,'fm')">移出对比</div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div style="width: 100%;text-align: center;margin-top: 30px">
        <el-button type="primary" style="width: 300px" @click="doExpr">开始计算</el-button>
      </div>
    </div>
    <div ref="industryPic2019" style="width: 100%;height: 600px;margin-top: 35px"></div>
    <!--    <div ref="industryPic2018" style="width: 100%;height: 600px;margin-top: 35px"></div>-->
    <!--    <div ref="industryPic2017" style="width: 100%;height: 600px;margin-top: 35px"></div>-->
  </div>
</template>

<script>
import req from '@/utils/req'
import * as echarts from 'echarts'

export default {
  name: 'IndustryTop',
  components: {},
  data() {
    return {
      fz: {
        search: '',
        search_list: [],
        list: []
      },
      fm: {
        search: '',
        search_list: [],
        list: [],
        select_list: [
          { label: '新能源汽车', value: '新能源汽车' },
          { label: '云计算行业', value: '云计算行业' },
          { label: '互联网教育', value: '互联网教育' }
        ],
        select_value: ''
      },
      ec_opt_2019: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: []
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['营业总收入', '资产总额', '主营业务收入', '所有者权益', '纳税总额', '利润总额', '净利润', '负债总额']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '万元'
          }
        ],
        series: []
      },
      ec_opt_2018: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: []
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['VENDINC', 'ASSGRO', 'MAIBUSINC', 'TOTEQU', 'RATGRO', 'PROGRO', 'NETINC', 'LIAGRO']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: []
      },
      ec_opt_2017: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: []
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['VENDINC', 'ASSGRO', 'MAIBUSINC', 'TOTEQU', 'RATGRO', 'PROGRO', 'NETINC', 'LIAGRO']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: []
      }
    }
  },
  inject: ['reload'],
  mounted() {
    this.fz.list.push(this.entName)
  },
  created() {
    this.phone = localStorage.getItem('phone')
    this.entName = localStorage.getItem('entName')
    this.token = localStorage.getItem('token')
  },
  methods: {
    search(type) {
      let key = null
      if (type === 'fz') {
        key = this.fz.search
      } else {
        key = this.fm.search
      }
      req.post('api/v1/qcc/getEntList', {
        'entName': key,
        'phone': this.phone,
        'page': 1,
        'pageSize': 10
      }, this.token).then(res => {
        if (res.data.code === 200) {
          if (type === 'fz') {
            this.fz.search_list = res.data.result
          } else {
            this.fm.search_list = res.data.result
          }
        }
      }).catch(err => {
        this.$message.error('查询失败')
      })
    },
    addDiff(ent, type) {
      if (type === 'fz') {
        let num = this.fz.list.indexOf(ent)
        if (num === -1) {
          this.fz.list.push(ent)
        }
      } else {
        let num = this.fm.list.indexOf(ent)
        if (num === -1) {
          this.fm.list.push(ent)
        }
      }
    },
    unDiff(ent, type) {
      if (type === 'fz') {
        let num = this.fz.list.indexOf(ent)
        if (num !== -1) {
          this.fz.list.splice(num, 1)
        }
      } else {
        let num = this.fm.list.indexOf(ent)
        if (num !== -1) {
          this.fm.list.splice(num, 1)
        }
      }
    },
    quickSelectChange(industryName) {
      if (industryName === '新能源汽车') {
        this.fm.list = [
          '上汽通用五菱汽车股份有限公司',
          '比亚迪股份有限公司',
          '特斯拉（上海）有限公司',
          '长城汽车股份有限公司',
          '上海汽车集团股份有限公司',
          '奇瑞汽车股份有限公司',
          '一汽—大众汽车有限公司',
          '上汽大众汽车有限公司',
          '广州汽车集团股份有限公司',
          '蔚来控股有限公司',
          '北京汽车股份有限公司',
          '东风汽车股份有限公司',
          '广东小鹏汽车科技有限公司',
          '北京车和家信息技术有限公司',
          '浙江吉利控股集团有限公司',
          '重庆长安汽车股份有限公司'
        ]
      } else if (industryName === '云计算行业') {
        this.fm.list = [
          '阿里云计算有限公司',
          '腾讯云计算（北京）有限责任公司',
          '华为云计算技术有限公司',
          '百度云计算技术（北京）有限公司',
          '珠海金山云科技有限公司',
          '优刻得科技股份有限公司',
          '京东云计算有限公司',
          '新华三云计算技术有限公司',
          '杭州朗和科技有限公司',
          '浪潮云信息技术股份公司'
        ]
      } else if (industryName === '互联网教育') {
        this.fm.list = [
          '新东方教育科技集团有限公司',
          '北京世纪好未来教育科技有限公司',
          '北京高途云集教育科技有限公司',
          '中公教育科技股份有限公司',
          '北京新东方迅程网络科技股份有限公司',
          '神州天立控股集团有限公司',
          '深圳中教控股集团有限公司',
          '四川希望教育产业集团有限公司',
          '作业帮教育科技（北京）有限公司',
          '北京猿力教育科技有限公司'
        ]
      }
    },
    doExpr() {
      req.post('api/v1/xd/industryTop', {
        'phone': this.phone,
        'pay': 0,
        'fz_list': this.fz.list.join(),
        'fm_list': this.fm.list.join()
      }, this.token).then(res => {
        if (res.data.code === 200) {
          //=======2019=======
          let chartDom = this.$refs.industryPic2019
          let myChart = echarts.init(chartDom)
          this.ec_opt_2019.series = []
          this.ec_opt_2019.legend.data = []
          //分子
          for (let i in res.data.result) {
            for (let entName in res.data.result[i]) {
              this.ec_opt_2019.legend.data.push(entName)
              for (let year in res.data.result[i][entName]) {
                if (i === 'fz_list' && year === '2019') {
                  let VENDINC = res.data.result[i][entName][year]['VENDINC'] === '--' ? null : res.data.result[i][entName][year]['VENDINC'].toFixed(1)
                  let ASSGRO = res.data.result[i][entName][year]['ASSGRO'] === '--' ? null : res.data.result[i][entName][year]['ASSGRO'].toFixed(1)
                  let MAIBUSINC = res.data.result[i][entName][year]['MAIBUSINC'] === '--' ? null : res.data.result[i][entName][year]['MAIBUSINC'].toFixed(1)
                  let TOTEQU = res.data.result[i][entName][year]['TOTEQU'] === '--' ? null : res.data.result[i][entName][year]['TOTEQU'].toFixed(1)
                  let RATGRO = res.data.result[i][entName][year]['RATGRO'] === '--' ? null : res.data.result[i][entName][year]['RATGRO'].toFixed(1)
                  let PROGRO = res.data.result[i][entName][year]['PROGRO'] === '--' ? null : res.data.result[i][entName][year]['PROGRO'].toFixed(1)
                  let NETINC = res.data.result[i][entName][year]['NETINC'] === '--' ? null : res.data.result[i][entName][year]['NETINC'].toFixed(1)
                  let LIAGRO = res.data.result[i][entName][year]['LIAGRO'] === '--' ? null : res.data.result[i][entName][year]['LIAGRO'].toFixed(1)
                  //行业占比
                  let VENDINC_i = res.data.result[i][entName][year]['industryTopVENDINC'] === '--' ? 0 : res.data.result[i][entName][year]['industryTopVENDINC'] * 100
                  VENDINC_i = VENDINC_i.toFixed(2)
                  VENDINC_i = VENDINC_i + ''
                  VENDINC_i = VENDINC_i + '%'
                  this.ec_opt_2019.series.push({
                    name: entName,
                    type: 'bar',
                    emphasis: {
                      focus: 'series'
                    },
                    markPoint: {
                      symbolSize: 70,
                      data: [
                        { name: '年最高', value: VENDINC_i, xAxis: 0, yAxis: VENDINC }
                      ]
                    },
                    data: [VENDINC, ASSGRO, MAIBUSINC, TOTEQU, RATGRO, PROGRO, NETINC, LIAGRO]
                  })
                }
              }
            }
          }
          //分母
          for (let i in res.data.result) {
            for (let entName in res.data.result[i]) {
              if (i === 'fm_list') {
                this.ec_opt_2019.legend.data.push(entName + '.')
              }
              for (let year in res.data.result[i][entName]) {
                if (i === 'fm_list' && year === '2019') {
                  let VENDINC = res.data.result[i][entName][year]['VENDINC'] === '--' ? null : res.data.result[i][entName][year]['VENDINC'].toFixed(1)
                  let ASSGRO = res.data.result[i][entName][year]['ASSGRO'] === '--' ? null : res.data.result[i][entName][year]['ASSGRO'].toFixed(1)
                  let MAIBUSINC = res.data.result[i][entName][year]['MAIBUSINC'] === '--' ? null : res.data.result[i][entName][year]['MAIBUSINC'].toFixed(1)
                  let TOTEQU = res.data.result[i][entName][year]['TOTEQU'] === '--' ? null : res.data.result[i][entName][year]['TOTEQU'].toFixed(1)
                  let RATGRO = res.data.result[i][entName][year]['RATGRO'] === '--' ? null : res.data.result[i][entName][year]['RATGRO'].toFixed(1)
                  let PROGRO = res.data.result[i][entName][year]['PROGRO'] === '--' ? null : res.data.result[i][entName][year]['PROGRO'].toFixed(1)
                  let NETINC = res.data.result[i][entName][year]['NETINC'] === '--' ? null : res.data.result[i][entName][year]['NETINC'].toFixed(1)
                  let LIAGRO = res.data.result[i][entName][year]['LIAGRO'] === '--' ? null : res.data.result[i][entName][year]['LIAGRO'].toFixed(1)
                  this.ec_opt_2019.series.push({
                    name: entName + '.',
                    type: 'bar',
                    stack: '分组',
                    emphasis: {
                      focus: 'series'
                    },
                    data: [VENDINC, ASSGRO, MAIBUSINC, TOTEQU, RATGRO, PROGRO, NETINC, LIAGRO]
                  })
                }
              }
            }
          }
          myChart.setOption(this.ec_opt_2019, true)
        }
      }).catch(err => {
        console.log(err)
        this.$message.error('查询失败')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-btn {
  width: 70%;
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
</style>
