<template style="overflow: scroll ">
  <div>
    <div class="table-wrapper">
      <h3 style="margin-left:20px;">开庭公告（{{ totalKtgg }}）</h3>
      <div class="box2">
        <!-- 变更信息 -->
        <div class="cont" >
          <el-table :data="Ktgg" border style="width: 100%">
            <el-table-column
              label="案号"
              prop="caseno"
              width="200"
            />
            <el-table-column
              prop="title"
              label="标题"
              width="400"
            />
            <el-table-column
              prop="sdate"
              label="发布日期"
              width="100"
            />
            <el-table-column
              prop="courtname"
              label="法院名称"
            />
            <el-table-column
              prop="causename"
              label="案由"
            />
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="primary" size="mini" @click="handlektggDetail(scope.row.mid)">查看详情</el-button>
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
        <div class="cont" >
          <el-table
            :data="Cpws"
            border
            style="width: 100%"
          >
            <el-table-column
              label="案号"
              prop="caseno"
              width="200"
            />
            <el-table-column
              prop="title"
              label="标题"
              width="450"
            />
            <el-table-column
              prop="sdate"
              label="发布日期"
              width="100"
            />
            <el-table-column
              prop="pdate"
              label="裁定日期"
              width="100"
            />
            <el-table-column
              prop="procedure"
              label="审理程序"
            />
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="primary" size="mini" @click="handlePjwsDetail(scope.row.mid)">查看详情</el-button>
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
            <td style="width:100px">案号：</td><td>{{ktggDetail.caseno}}</td>
          </tr>
          <tr>
            <td>法院名称：</td><td>{{ ktggDetail.courtroom  }}</td>
          </tr>
          <tr>
            <td>法官：</td><td>{{ ktggDetail.judge  }}</td>
          </tr>
          <tr>
            <td>立案时间：</td><td>{{ktggDetail.sdate}}</td>
          </tr>
          <tr>
            <td>当事人(被告)：</td><td>{{ktggDetail.pname }}</td>
          </tr>
          <tr>
            <td>原告：</td><td>{{ktggDetail.plaintiff}}</td>
          </tr>
          <tr>
            <td>法庭名称：</td><td>{{ktggDetail.courtroom}}</td>
          </tr>
          <tr>
            <td>案由：</td><td>{{ktggDetail.causename}}</td>
          </tr>
          <tr>
            <td>案由类型：</td><td>{{ktggDetail.causeaction}}</td>
          </tr>
          <tr>
            <td>发布时间：</td><td>{{ktggDetail.ptime }}</td>
          </tr>
          <tr>
            <td>组织者：</td><td>{{ktggDetail.organizer}}</td>
          </tr>
          <tr>
            <td>原告被告文本：</td><td>{{ktggDetail.party }}</td>
          </tr>
          <tr>
            <td>主体类型：</td><td>{{ktggDetail.ptype  }}</td>
          </tr>
          <tr>
            <td>正文内容：</td><td>{{ktggDetail.content  }}</td>
          </tr>

        </table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="ktggdialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
    <el-dialog
      :visible.sync="cpwsDialogVisible"
      z-index="100"
      width="50%">
      <div class="box" v-html=" cpwsDetail.content ">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="cpwsDialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getCpwsDetailXd,
  getCpwsList,
  getKtggDetailXd,
  getKtggList
} from '@/api/JudicialDecisions'

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
      cpwsRelated: {},
      cpwsQuery: {
        entName: '',
        phone: '',
        pageNo: 1,
        pageSize: 10,
        mid: '',
        pay: 0
      }
    }
  },
  mounted() {
    // window.addEventListener('scroll', this.initHeight)
    this.query.entName = this.query2.entName = this.query1.entName = this.entName = localStorage.getItem('entName')
    this.query.phone = this.query2.phone = this.query1.phone = this.phone = localStorage.getItem('phone')
    // 开庭公告
    getKtggList(this.query).then(res => {
      // console.log(res)
      this.Ktgg = res.data.result
      this.totalKtgg = res.data.paging.total
    })
    // 判决文书
    getCpwsList(this.query).then(res => {
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
      getKtggList(this.query).then(res => {
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
      getCpwsList(this.query).then(res => {
        this.Cpws = res.data.result
      })
    },
    handlektggDetail(id) {
      this.ktggQuery.entName = localStorage.getItem('entName')
      this.ktggQuery.mid = id
      this.ktggQuery.phone = localStorage.getItem('phone')
      getKtggDetailXd(this.ktggQuery).then(res => {
        this.ktggdialogVisible = true
        this.ktggDetail = res.data.result
        this.ktggTitle = this.ktggDetail.title
        this.caseCauseT = this.ktggDetail.partys[0].caseCauseT
      })
    },
    handlePjwsDetail(id) {
      this.cpwsQuery.entName = localStorage.getItem('entName')
      this.cpwsQuery.mid = id
      this.cpwsQuery.phone = localStorage.getItem('phone')
      getCpwsDetailXd(this.cpwsQuery).then(res => {
        this.cpwsDialogVisible = true
        this.cpwsDetail = res.data.result.basic_info
        this.cpwsRelated = res.data.result.related
        this.cpwsTitle = this.cpwsDetail.title
      })
    }
  }
}
</script>

<style scoped>
</style>
