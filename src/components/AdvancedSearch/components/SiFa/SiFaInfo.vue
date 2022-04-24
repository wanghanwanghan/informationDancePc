<template style="overflow: scroll ">
  <div>
    <div class="table-wrapper">
      <h3 style="margin-left:20px;">开庭公告（{{ totalKtgg }}）</h3>
      <div class="box2">
        <!-- 变更信息 -->
        <div class="cont" style="overflow: scroll;height: 200px; ">
          <el-table :data="Ktgg" border style="width: 100%">
            <el-table-column
              label="序号"
              type="index"
              width="50"
            />
            <el-table-column
              prop="title"
              label="标题"
              width="400"
            />
            <el-table-column
              prop="body"
              label="内容"
              width="350"
            />
            <el-table-column
              prop="sortTimeString"
              label="时间"
            />
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="primary" size="mini" @click="handlektggDetail(scope.row.entryId)">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="totalKtgg"
            @current-change="handleChangeKtgg"
          />
        </div>
      </div>
      <h3 style="margin-left:20px;">判决文书（{{ totalCpws }}）</h3>
      <div class="box2">
        <!-- 变更信息 -->
        <div class="cont" style="overflow: scroll;height: 200px; ">
          <el-table
            :data="Cpws"
            border
            style="width: 100%"
          >
            <el-table-column
              label="序号"
              type="index"
              width="50"
            />
            <el-table-column
              prop="title"
              label="标题"
              width="400"
            />
            <el-table-column
              prop="body"
              label="内容"
              width="350"
            />
            <el-table-column
              prop="sortTimeString"
              label="时间"
            />
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="primary" size="mini" @click="handlePjwsDetail(scope.row.entryId)">查看详情</el-button>
              </template>

            </el-table-column>
          </el-table>
        </div>
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="totalCpws"
            @current-change="handleChangeCpws"
          />
        </div>
      </div>
    </div>
    <el-dialog
      :title="ktggTitle"
      :visible.sync="ktggdialogVisible"
      z-index="100"
      width="50%">
      <div class="box">
        <table>
          <tr>
            <td>案号：</td><td>{{ktggDetail.caseNo}}}</td>
          </tr>
          <tr>
            <td>承办单位：</td><td>{{ ktggDetail.court }}</td>
          </tr>
          <tr>
            <td>法庭：</td><td>{{ ktggDetail.courtroom }}</td>
          </tr>
          <tr>
            <td>案由：</td><td>{{ caseCauseT }}</td>
          </tr>
          <tr v-for="(item,index) in ktggDetail.partys" :key="index">
            <td>{{ item.partyTitleT }}：</td>
            <td>{{ item.pname }}</td>
          </tr>
        </table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="ktggdialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
    <el-dialog
      :title="cpwsTitle"
      :visible.sync="cpwsDialogVisible"
      z-index="100"
      width="50%">
      <div class="box">
        <table>
          <tr>
            <td style="width: 100px">案号：</td><td>{{cpwsDetail.caseNo}}}</td>
          </tr>
          <tr>
            <td>承办单位：</td><td>{{ cpwsDetail.court }}</td>
          </tr>
          <tr>
            <td>审判：</td><td>{{ cpwsDetail.judge }}</td>
          </tr>
          <tr>
            <td>审判依据：</td><td>{{ cpwsDetail.yiju }}</td>
          </tr>
          <tr>
            <td>审判结果：</td><td>{{ cpwsDetail.judgeResult }}</td>
          </tr>
          <tr>
            <td>案由：</td><td>{{ cpwscaseCauseT }}</td>
          </tr>
          <tr v-for="(item,index) in cpwsDetail.partys" :key="index">
            <td>{{ item.partyTitleT }}：</td>
            <td>{{ item.pname }}</td>
          </tr>
        </table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="cpwsDialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {getCpws, getCpwsDetail, getKtgg, getKtggDetail} from '@/api/JudicialDecisions'

export default {
  name: 'BusinessInfo',
  data() {
    return {
      entName: '',
      phone: '',
      query: {
        entName: '',
        phone: '',
        page: 1,
        pageSize: 10
      },
      Ktgg: [],
      Cpws: [],
      list: '',
      pjwsdesc: '',
      totalCpws: 0,
      totalKtgg: 0,
      ktggdesc: '',
      ktggTitle: '',
      cpwsTitle: '',
      caseCauseT: '',
      cpwscaseCauseT: '',
      query1: {
        entName: '',
        phone: '',
        moduleId: '1'
      },
      query2: {
        entName: '',
        phone: '',
        moduleId: ''
      },
      ktggdialogVisible: false,
      cpwsDialogVisible: false,
      ktggDetail: {},
      ktggQuery: {
        entName: '',
        phone: '',
        pageNo: 1,
        pageSize: 10,
        id: '',
        pay: 0
      },
      cpwsDetail: {},
      cpwsQuery: {
        entName: '',
        phone: '',
        pageNo: 1,
        pageSize: 10,
        id: '',
        pay: 0
      }
    }
  },
  mounted() {
    // window.addEventListener('scroll', this.initHeight)
    this.query.entName = this.query2.entName = this.query1.entName = this.entName = localStorage.getItem('entName')
    this.query.phone = this.query2.phone = this.query1.phone = this.phone = localStorage.getItem('phone')
    // 开庭公告
    getKtgg(this.query).then(res => {
      // console.log(res)
      this.Ktgg = res.data.result
      this.totalKtgg = res.data.paging.total
    })
    // 判决文书
    getCpws(this.query).then(res => {
      // console.log(res)
      this.Cpws = res.data.result
      this.totalCpws = res.data.paging.total
    })
    // 判决文书留言
    this.query2.entName = localStorage.getItem('entName')
    this.query2.phone = localStorage.getItem('phone')
  },
  methods: {
    // 开庭公告分页
    handleChangeKtgg(val) {
      // console.log(val)
      this.Ktgg = []
      this.query.page = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getKtgg(this.query).then(res => {
        // console.log(res)
        this.Ktgg = res.data.result
      })
    },
    // 判决文书分页
    handleChangeCpws(val) {
      this.Cpws = []
      this.query.page = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getCpws(this.query).then(res => {
        this.Cpws = res.data.result
      })
    },
    handlektggDetail(id) {
      this.ktggQuery.entName = localStorage.getItem('entName')
      this.ktggQuery.id = id
      this.ktggQuery.phone = localStorage.getItem('phone')
      getKtggDetail(this.ktggQuery).then(res => {
        if (res.data.code === 210) {
          this.$confirm(res.data.msg, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.ktggQuery.pay = 1
            getKtggDetail(this.ktggQuery).then(res => {
              // console.log(res)
              if (res.data.code === 220) {
                this.$confirm('余额不足，是否前往充值？', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  this.$router.push('/login')
                  localStorage.setItem('activeName', 'third')
                }).catch(() => {
                  this.$router.go(-1)
                })
              }
            })
          }).catch(() => {
            this.$router.go(-1)
          })
        } else {
          this.ktggdialogVisible = true
          this.ktggDetail = res.data.result[0]
          this.ktggTitle = this.ktggDetail.title
          this.caseCauseT = this.ktggDetail.partys[0].caseCauseT
        }
      })
    },
    handlePjwsDetail(id) {

      this.cpwsQuery.entName = localStorage.getItem('entName')
      this.cpwsQuery.id = id
      this.cpwsQuery.phone = localStorage.getItem('phone')
      getCpwsDetail(this.cpwsQuery).then(res => {
        if (res.data.code === 210) {
          this.$confirm(res.data.msg, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.cpwsQuery.pay = 1
            getKtggDetail(this.cpwsQuery).then(res => {
              // console.log(res)
              if (res.data.code === 220) {
                this.$confirm('余额不足，是否前往充值？', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  this.$router.push('/login')
                  localStorage.setItem('activeName', 'third')
                }).catch(() => {
                  this.$router.go(-1)
                })
              }
            })
          }).catch(() => {
            this.$router.go(-1)
          })
        } else {
          this.cpwsDialogVisible = true
          this.cpwsDetail = res.data.result[0]
          this.cpwsTitle = this.cpwsDetail.title
          this.cpwscaseCauseT = this.cpwsDetail.partys[0].caseCauseT
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
