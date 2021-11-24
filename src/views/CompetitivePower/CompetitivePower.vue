<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%;margin-top: 10%">
      <el-table-column align="center" label="序号" type="index" width="50"></el-table-column>
      <el-table-column prop="field" label="企业竞争力" width="180" align="center"></el-table-column>
      <el-table-column prop="level" label="等级" width="180" align="center"></el-table-column>
      <el-table-column prop="sorce" label="评分" width="180" align="center"></el-table-column>
      <el-table-column prop="desc" label="评分说明"></el-table-column>
    </el-table>
  </div>
</template>

<script>

import {
  getEntScoreList
} from '@/api/EnterpriseDevelopment'

export default {
  name: 'CompetitivePower',
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
      tableData: []
    }
  },
  // inject: [],
  computed: {},
  // watch: {},
  mounted() {
    this.query.entName = localStorage.getItem('entName')
    this.query.phone = localStorage.getItem('phone')
    getEntScoreList(this.query).then(res => {
      let data = res.data.result
      data.forEach(ele => {
        let tableData = []
        let obj1 = {
          field: '企业综合竞争力',
          level: ele.STRENGTH_G,
          sorce: ele.STRENGTH,
          desc: '企业综合竞争力评价指标，从企业活跃度、企业合法合规、企业创新能力、企业社会贡献、企业成长能力、企业身份特征6个维度综合评价企业的整体竞争力水平，企业综合竞争力评分越高，整体实力越强，抗风险能力越强，越不容易受外界宏观环境影响'
        }
        tableData.push(obj1)
        let obj2 = {
          field: '企业活跃度',
          level: ele.ACTIVITY_G,
          sorce: ele.ACTIVITY,
          desc: '企业活跃度，表征企业在市场活动中的活跃程度，从经营活动、投融资、设立分支、国际贸易、资质荣誉、知识产权、人才需求、社会关系等维度的信息评价企业在市场中的活跃程度，依据事件发生变更的频率、对企业的影响大小设置不同的权重，企业活跃度评分越高，企业各种生产经营活动越活跃，企业经营状况越好。'
        }
        tableData.push(obj2)
        let obj3 = {
          field: '企业合法合规',
          level: ele.LEGAL_G,
          sorce: ele.LEGAL,
          desc: '企业合法合规评价指标，表征企业在生产经营中隐含的风险大小以及对风险的抵抗能力，反映企业经营的稳定性。合法合规指标综合企业失信、严重违法失信、涉诉、行政处罚、股权出质、动产抵押、司法协助、清算等负面信息评价企业在市场活动中的合法合规程度，企业合法合规评分越高，企业在生产经营活动中的负面行为越少，企业风险越小。'
        }
        tableData.push(obj3)
        let obj4 = {
          field: '企业创新能力',
          level: ele.INNOVATE_G,
          sorce: ele.INNOVATE,
          desc: '企业创新能力评价指标，表征企业在技术、经营模式等方面的创新程度，从自主创新、创新辐射、技术创新、模式创新等多方面评价企业的创新能力。企业知识产权获得的数量与频率，购买知识产权服务行为、对新技术、新模式的应用，技术成果的转化能力等都体现了企业的创新能力。企业创新能力评分越高，企业专业技术水平越高，科技成果转化能力也越强，核心竞争力越强。 '
        }
        tableData.push(obj4)
        let obj5 = {
          field: '企业社会贡献',
          level: ele.SOCIALCON_G,
          sorce: ele.SOCIALCON,
          desc: '企业社会贡献评价指标，表征企业对国家经济发展的贡献大小，从就业贡献、收入贡献、贸易贡献、税收贡献等维度综合评价企业的社会贡献能力。企业在创造利润、对股东利益负责的同时，还要承担对社会公众、区域发展的社会责任，企业社会贡献评分高，承担的社会责任越多，越有利于整个经济生态系统的均衡与持续发展。'
        }
        tableData.push(obj5)
        let obj6 = {
          field: '企业成长能力',
          level: ele.GROWTH_G,
          sorce: ele.GROWTH,
          desc: '企业成长能力指标，表征企业近期在经济社会环境中的成长能力，从企业资本增长速度、规模成长能力、投资成长能力、技术成长能力、收入成长能力、人才需求扩张情况等方面的现状及变化趋势来评价企业在现有经济社会环境的成长能力。企业成长能力评分越高的企业代表成长空间越大、发展潜力越强，是广大中小型企业的榜样。'
        }
        tableData.push(obj6)
        let obj7 = {
          field: '企业身份特征',
          level: ele.SCALE_G,
          sorce: ele.SCALE,
          desc: '企业身份特征指标，表征企业开展经营活动的天然优势，体现市场和社会公众对企业的基础认知，主要从企业的行业准入、融资成本、所有制结构和商业模式等方面来评价。企业身份特征指标包括企业经过多年经营积累积淀下的身份特征和股东、法定代表人、高层管理人员为企业增加的商誉特征，这些指标将潜移默化地影响企业未来的经营与发展。'
        }
        tableData.push(obj7)
        this.tableData = tableData
      })
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
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
