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
        label="重点对象">
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
        prop="expireTime"
        label="监控过期时间"
        width="120">
        <template slot-scope="{row}">
          <i class="el-icon-warning" style="color: red;cursor: pointer;" v-if="row.isExpire === 1"
             @click="toMonitor(row.entName)"></i>
          <i class="el-icon-umbrella" style="color: green" v-if="row.isExpire === 0"></i>
          <span style="margin-left: 10px">{{ row.expireTime | parseTime('{y}-{m}-{d}') }}</span>
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
    <el-dialog
      title="提示"
      :visible.sync="supervisor_dialog"
      width="30%"
      :style="{'text-align': 'center'}">
      <span style="color: red;font-size: 15px;">请选择要监控的风险分类</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="supervisor_dialog = false">取消</el-button>
    <el-button type="primary" @click="doMonitor('重点对象')">重点对象</el-button>
    <el-button type="primary" @click="doMonitor('合作方')">合作方</el-button>
    <el-button type="primary" @click="doMonitor('全部')">全部</el-button>
  </span>
    </el-dialog>
    <div class="my-divider"></div>
    <el-button type="primary" @click="exportExcel">导出列表为excel</el-button>
  </div>
</template>
<script>
import { Supervisor, supervisor, supervisorExportExcel } from '@/api/article'
import { parseTime } from '@/utils/index'

export default {
  name: 'RiskMonitoringList',
  inject: ['reload'],
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
      query2: {
        phone: '',
        entName: '',
        type: 3,
        email: '',
        pay: 0
      },
      supervisor_dialog: false,
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
          label: '重点对象',
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
            row.type = '重点对象'
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
    toMonitor(e) {
      this.supervisor_dialog = true
      this.query2.phone = localStorage.getItem('phone')
      this.query2.entName = e
    },
    doMonitor(val) {
      if (val === '重点对象') {
        this.query2.type = 1
      } else if (val === '合作方') {
        this.query2.type = 2
      } else {
        this.query2.type = 3
      }
      Supervisor(this.query2).then(res => {
        if (res.data.code === 210) {
          this.$confirm(res.data.msg, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.query2.pay = 1
            Supervisor(this.query2).then(res => {
              if (res.data.code === 200) {
                this.$message({
                  message: '添加成功',
                  type: 'success'
                })
                this.supervisor_dialog = false
              } else {
                this.$message.error('添加失败')
              }
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
            })
          }).catch(() => {
          })
        } else {
          this.reload()
          //this.supervisor_dialog = false
          // this.$router.push({
          //   path: '/login',
          //   query: {
          //     activeName: 'fourth'
          //   }
          // })
          // localStorage.setItem('activeName', 'fourth')
        }
      })
    },
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
      } else {
        this.$message({
          type: 'info',
          message: '请选择要导出的企业'
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
                row.type = '重点对象'
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
      if (columnIndex === 4 && row.currentNum.zyf > 0) {
        return 'word-red'
      }
      if (columnIndex === 5 && row.currentNum.hzf.sf > 0) {
        return 'word-red'
      }
      if (columnIndex === 6 && row.currentNum.hzf.gs > 0) {
        return 'word-red'
      }
      if (columnIndex === 7 && row.currentNum.hzf.gl > 0) {
        return 'word-red'
      }
      if (columnIndex === 8 && row.currentNum.hzf.jy > 0) {
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
