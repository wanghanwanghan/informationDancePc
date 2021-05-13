<template>
  <el-table
    :data="listData"
    style="width: 100%"
    :row-class-name="addStyle">
    <el-table-column
      align="center"
      prop="id"
      label="序号"
      width="50">
    </el-table-column>
    <el-table-column
      align="center"
      prop="entName"
      label="企业名称"
      width="270">
    </el-table-column>
    <el-table-column
      align="center"
      prop="currentNum.zyf"
      label="本次争议方动态总个数">
    </el-table-column>
    <el-table-column
      align="center"
      prop="currentNum.hzf.sf"
      label="本次合作方动态司法个数">
    </el-table-column>
    <el-table-column
      align="center"
      prop="currentNum.hzf.gs"
      label="本次合作方动态工商个数">
    </el-table-column>
    <el-table-column
      align="center"
      prop="currentNum.hzf.gl"
      label="本次合作方动态管理个数">
    </el-table-column>
    <el-table-column
      align="center"
      prop="currentNum.hzf.jy"
      label="本次合作方动态经营个数">
    </el-table-column>
    <el-table-column
      align="center"
      prop="updated_at"
      label="本次监控时间"
      width="110">
      <template slot-scope="{row}">
        <span>{{ row.updated_at | parseTime('{y}-{m}-{d}') }}</span>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <router-link :to="'/RiskMonitoringDetail/'+scope.row.entName">
          <el-button
            size="mini"
          >查看详情
          </el-button>
        </router-link>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { supervisor } from '@/api/article'
import { parseTime } from '@/utils/index'

export default {
  name: 'RiskMonitoringList',
  components: {},
  filters: {
    parseTime: parseTime
  },
  props: {},
  // provide() {
  //   return {}
  // },
  data() {
    return {
      getSupervisorListQuery: {
        phone: '',
        entName: '',
        level: '',
        type: '',
        typeDetail: '',
        timeRange: '',
        page: 1,
        pageSize: 10
      },
      listData: []
    }
  },
  // inject: [],
  computed: {},
  // watch: {},
  mounted() {
    this.getSupervisorListQuery.phone = localStorage.getItem('phone')
    supervisor(this.getSupervisorListQuery).then(res => {
      this.listData = res.data.result.entList
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
    wanghan(row) {
      console.log(row)
    },
    addStyle({ row, rowIndex }) {
      if (row.currentNum.zyf !== 0) {
        return 'RML-warning-row'
      }
      if (row.currentNum.hzf.sf !== 0) {
        return 'RML-warning-row'
      }
      if (row.currentNum.hzf.gs !== 0) {
        return 'RML-warning-row'
      }
      if (row.currentNum.hzf.gl !== 0) {
        return 'RML-warning-row'
      }
      if (row.currentNum.hzf.jy !== 0) {
        return 'RML-warning-row'
      }
      return ''
    }
  }
}
</script>

<style lang="scss">
.el-table .RML-warning-row {
  background: oldlace
}
</style>
