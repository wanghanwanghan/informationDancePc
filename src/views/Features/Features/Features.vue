<template>
  <div>
    <div class="header" v-if="showBtn === true">
      <el-button type="primary" @click="btnGetFeatures">付费查看企业 < 业务特征 > 分析结果列表</el-button>
    </div>
    <div class="example-img" v-if="showBtn === true">
      <div>
        <span style="font-size: 30px;color: red;font-weight: 800;text-align: center">数据样例</span>
      </div>
      <img class="example-img" :src="require('../../../assets/features.png')"/>
    </div>
    <div class="box">
      <div class="cont">
        <el-table :data="list" border style="width: 100%">
          <el-table-column label="序号" type="index" width="60"/>
          <el-table-column prop="name" label="企业特征" width="200"/>
          <el-table-column prop="score" label="评分结果" width="80"/>
          <el-table-column prop="desc" label="评分说明">
            <template slot-scope="scope">
              <div v-html="scope.row.desc"></div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="remarks" v-if="!showBtn">
        备注：以上主要基于多源异构信息、同类企业数据指标、数学算法、评估模型、企业经营理论，构建的企业智能商调评估逻辑
      </div>
    </div>
  </div>
</template>

<script>
import { getFeatures } from '@/api/EnterpriseBackground'

export default {
  name: '',
  components: {},
  // filters: {},
  props: {},
  // provide() {
  //   return {}
  // },
  data() {
    return {
      query: {
        entName: '',
        phone: ''
      },
      list: [],
      showBtn: true
    }
  },
  // inject: [],
  computed: {},
  // watch: {},
  mounted() {
    this.query.entName = localStorage.getItem('entName')
    this.query.phone = localStorage.getItem('phone')
    getFeatures(this.query).then(res => {
      if (res.data.code === 200) {
        this.showBtn = false
        this.list = this.handleData(res.data.result)
      } else {
        this.showBtn = true
      }
    })
  },
  // beforeCreate() {
  // },
  // created() {
  // },
  // beforeMount() {
  // },
  // beforeUpdate() {
  // },
  // updated() {
  // },
  // beforeDestroy() {
  // },
  // destroyed() {
  // },
  // activated() {
  // },
  // deactivated() {
  // },
  methods: {
    btnGetFeatures() {
      this.query.entName = localStorage.getItem('entName')
      this.query.phone = localStorage.getItem('phone')
      getFeatures(this.query).then(res => {
        this.$confirm((res.data.msg), '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.query.entName = localStorage.getItem('entName')
          this.query.phone = localStorage.getItem('phone')
          this.query.pay = 1
          getFeatures(this.query).then(res => {
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
            }
            if (res.data.code === 200) {
              this.showBtn = false
              this.list = this.handleData(res.data.result)
            } else {
              this.showBtn = true
            }
          })
        }).catch(() => {
        })
      })
    },
    handleData(data) {
      //name
      //score
      //desc
      let tmpList = []
      for (let key in data) {
        let row = data[key]
        let desc = '--'
        switch (row.field) {
          case 'ASSGROPROFIT_REL':
            desc = '<p>1.按0分到100分划分，评分越高，企业营运能力越强</p><p>2.通过分析企业的各项资产利用效率以及产生利润行为的效率，评估企业营运能力。反映企业的竞争实力和发展能力</p>'
            break
          case 'DEBTL':
            desc = '<p>1.按0分到100分划分，评分越高，企业的财务杠杆越小经营风险越低</p><p>2.通过分析企业与资产负债有关行为后的结果。主要反映企业利用债权人资金进行经营活动的能力指标，也是反映债权人发放贷款的安全程度指标</p>'
            break
          case 'PROGRO':
            desc = '<p>1.按0分到100分划分，评分越高，企业盈利实力越强</p><p>2.通过分析可为企业贡献利润有关行为后的评估结果。主要反映企业当前的盈利水平</p>'
            break
          case 'MAIBUSINC_yoy':
            desc = '<p>1.按0分到100分划分，评分越高，企业发展与经营的增速越高</p><p>2.通过分析与企业营收能力有关行为后的评估结果。主要反映企业的成长速度，供判断企业的高成长性价值</p>'
            break
          case 'PROGRO_yoy':
            desc = '<p>1.按0分到100分划分，评分越高，企业持续盈利能力越强</p><p>2.通过分析可为企业贡献净利润有关行为，以及对应行为同比增速后的评估结果。主要反映企业的盈利趋势，供判断企业今后一段时期的盈利能力</p>'
            break
          case 'DEBTL_H':
            desc = '<p>1.按0分到100分划分，评分越高，企业的主营业务稳定性越强</p><p>2.通过分析企业与主营业务经营、企业类型等有关行为后的结果。主要反映企业在核心业务领域的合作价值与健康度</p>'
            break
          case 'TOTEQU':
            desc = '<p>1.按0分到100分划分，评分越高，企业的资本保全状况越好，债权人的债务越有保障</p><p>2.通过分析企业与资本运营效益与安全状况有关行为后的结果。主要反映企业投资者投入企业资本的保全性和增长性</p>'
            break
          case 'PERCAPITA_C':
            desc = '<p>1.按0分到100分划分，评分越高，企业的人均收益能力越强，人效比越高</p><p>2.通过分析企业与营收产值及从业人员有关行为后的结果。主要反映企业人均劳效水平，供判断企业的数字化与管理化水平</p>'
            break
          case 'PERCAPITA_Y':
            desc = '<p>1.按0分到100分划分，评分越高，企业的人均盈利能力越强</p><p>2.通过分析企业与盈利及从业人员有关行为后的结果。主要反映企业单位人员的盈利水平，供判断企业的管理化与盈利能力的综合分析</p>'
            break
          case 'RATGRO':
            desc = '<p>1.按0分到100分划分，评分越高，企业税收贡献能力越强</p><p>2.通过分析与企业纳税有关行为后的结果。主要反映企业的当前的纳税水平</p>'
            break
          case 'ASSETS':
            desc = '<p>1.按0分到100分划分，评分越高，企业在投资收益方面能力越高</p><p>2.通过分析企业与资本效益有关行为后的结果。主要反映企业资本获得收益的水平，供间接判断企业的投资价值</p>'
            break
          case 'ATOL':
            desc = '<p>1.按0分到100分划分，评分越高，企业的销售能力越强,资产投资效益越好</p><p>2.通过分析企业与营收及资产有关行为后的结果。主要反映企业资产经营效率，供判断企业财务安全性及资产收益能力，以进行相应的投资决策参考</p>'
            break
          case 'ASSGRO_yoy':
            desc = '<p>1.按0分到100分划分，评分越高，企业规模增长的能力越强</p><p>2.通过分析与企业资产维度有关行为后的评估结果。主要反映企业的资产变化情况，供判断企业的整体规模与合作能力</p>'
            break
          case 'TBR':
            desc = '<p>1.按0分到100分划分，评分越高，企业的税率越高纳税负担越重</p><p>2.通过分析企业纳税与营收有关行为后的结果。主要反映企业税负率的合理程度</p>'
            break
          case 'RepaymentAbility':
            desc = '<p>1.按0分到100分划分，评分越高，企业对债权人的还款能力越强</p><p>2.通过分析企业资产健康、资产保值及人均创收有关行为后的结果。主要反映企业偿还债务的能力，供判断其授信与借款能力</p>'
            break
          case 'GuaranteeAbility':
            desc = '<p>1.按0分到100分划分，评分越高，企业的对外担保能力越强</p><p>2.通过分析企业抵质押 出质及企业类型等经营行为后的结果。主要反映企业在外部担保合作的能力，供判断担保合作可行性</p>'
            break
          default:
            continue
        }
        tmpList.push({
          name: row.name,
          score: row.score,
          desc: desc
        })
      }
      return tmpList
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 94%;
  margin: 40px;
}

.example-img {
  width: 90%;
  margin-left: 15px;

  span {
    margin-left: 20px;
  }
}

.cont {
  width: 94%;
  margin: 40px;
  border: 1px solid #EBEBEB;
}

.remarks {
  margin-left: 40px;
  margin-bottom: 100px;
}
</style>
