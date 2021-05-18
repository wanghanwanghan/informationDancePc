<template>
  <div>
    <el-select v-model="value" filterable placeholder="请选择监控类别" @change="selectChange">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div class="my-divider"></div>
    <el-table
      ref="multipleTable"
      :data="listData"
      tooltip-effect="dark"
      style="width: 100%"
      :row-class-name="addStyle"
      :cell-class-name="addCellStyle"
      @selection-change="handleSelectionChange">
      <el-table-column
        align="center"
        type="selection"
        width="50">
      </el-table-column>
      <el-table-column
        align="center"
        prop="indexId"
        label="序号"
        width="50">
      </el-table-column>
      <el-table-column
        align="center"
        prop="entName"
        label="企业名称">
      </el-table-column>
      <el-table-column
        align="center"
        prop="type"
        label="监控类别">
      </el-table-column>
      <el-table-column
        align="center"
        prop="currentNum.zyf"
        label="争议方">
      </el-table-column>
      <el-table-column
        align="center"
        label="合作方">
        <el-table-column
          align="center"
          prop="currentNum.hzf.sf"
          label="司法">
        </el-table-column>
        <el-table-column
          align="center"
          prop="currentNum.hzf.gs"
          label="工商">
        </el-table-column>
        <el-table-column
          align="center"
          prop="currentNum.hzf.gl"
          label="管理">
        </el-table-column>
        <el-table-column
          align="center"
          prop="currentNum.hzf.jy"
          label="经营">
        </el-table-column>
      </el-table-column>
      <el-table-column
        align="center"
        prop="updated_at"
        label="时间"
        width="110">
        <template slot-scope="{row}">
          <span>{{ row.updated_at | parseTime('{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        width="105">
        <template slot-scope="scope">
          <router-link :to="'/RiskMonitoringDetail/'+scope.row.type+'/'+scope.row.entName">
            <el-button
              size="mini"
            >查看详情
            </el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <div class="my-divider"></div>
    <el-button type="primary" @click="exportExcel">导出列表为excel</el-button>
  </div>
</template>
<script>
import { supervisor, supervisorExportExcel } from '@/api/article'
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
      multipleSelection: [],
      getSupervisorListQuery: {
        phone: '',
        entName: '',
        level: '',
        supervisorType: 3,
        type: '',
        typeDetail: '',
        timeRange: '',
        page: 1,
        pageSize: 10
      },
      listData: [],
      options: [
        {
          label: '争议方',
          value: 1
        },
        {
          label: '合作方',
          value: 2
        },
        {
          label: '全部',
          value: 3
        }
      ],
      value: ''
    }
  },
  // inject: [],
  computed: {},
  // watch: {},
  mounted() {
    this.getSupervisorListQuery.phone = localStorage.getItem('phone')
    supervisor(this.getSupervisorListQuery).then(res => {
      this.listData = res.data.result.entList
      this.listData.forEach(row => {
        switch (row.type) {
          case 1:
            row.type = '争议'
            break
          case 2:
            row.type = '合作'
            break
          case 3:
            row.type = '全部'
            break
        }
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
  methods: {
    exportExcel() {
      if (this.multipleSelection.length > 0) {
        let entNameList = ''
        this.multipleSelection.forEach(item => {
          entNameList += ',' + item.entName
        })
        supervisorExportExcel({
          phone: localStorage.getItem('phone'),
          entNameList: entNameList
        }).then(res => {
          if (res.data.code === 200) {
            window.location.href = 'https://api.meirixindong.com/' + res.data.result
          }
        })
      }
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    selectChange(val) {
      this.getSupervisorListQuery.supervisorType = val
      this.multipleSelection = []
      supervisor(this.getSupervisorListQuery).then(res => {
        if (res.data.code !== 200) {
          this.listData = []
        } else {
          this.listData = res.data.result.entList
          this.listData.forEach(row => {
            switch (row.type) {
              case 1:
                row.type = '争议'
                break
              case 2:
                row.type = '合作'
                break
              case 3:
                row.type = '全部'
                break
            }
          })
        }
      })
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
    },
    addCellStyle({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 3 && row.currentNum.zyf > 0) {
        return 'word-red'
      }
      if (columnIndex === 4 && row.currentNum.hzf.sf > 0) {
        return 'word-red'
      }
      if (columnIndex === 5 && row.currentNum.hzf.gs > 0) {
        return 'word-red'
      }
      if (columnIndex === 6 && row.currentNum.hzf.gl > 0) {
        return 'word-red'
      }
      if (columnIndex === 7 && row.currentNum.hzf.jy > 0) {
        return 'word-red'
      }
    }
  }
}
</script>

<style lang="scss">
.my-divider {
  margin-top: 10px;
}

.el-table .RML-warning-row {
  background: oldlace;
}

.el-table .word-red {
  color: red;
}
</style>
