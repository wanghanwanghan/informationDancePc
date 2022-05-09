<template style="height:100%">
  <div class="table-wrapper"  style="overflow: scroll;height: 100%; ">
    <h3 style="margin-left:20px;">高新技术</h3>
    <div class="box2">
      <div class="cont" style="overflow: scroll;height: 200px; ">
        <el-table :data="list" border style="width: 100%">
          <el-table-column
            label="认证机构"
            prop="cert_org"
          />
          <el-table-column
            label="到期日期"
            prop="dateto"
          />
          <el-table-column
            label="撤销日期"
            prop="end_date"
          />
          <el-table-column
            label="URL"
            prop="url"
          />
          <el-table-column
            label="证书编号"
            prop="wnum"
          />
        </el-table>
      </div>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          @current-change="getList"
        />
      </div>
    </div>
<!--    <h3 style="margin-left:20px;">瞪羚</h3>-->
<!--    <div class="box2">-->
<!--      <div class="cont" style="overflow: scroll;height: 200px; ">-->
<!--        <el-table :data="listDL" border style="width: 100%">-->
<!--          <el-table-column-->
<!--            label="企业名称"-->
<!--            prop="ENTNAME"-->
<!--            width="400"-->
<!--          />-->
<!--          <el-table-column-->
<!--            label="统一社会信用代码"-->
<!--            prop="UNISCID"-->
<!--            width="400"-->
<!--          />-->
<!--          <el-table-column-->
<!--            label="更新时间"-->
<!--            prop="updated"-->
<!--            width="400"-->
<!--          />-->
<!--        </el-table>-->
<!--      </div>-->
<!--      <div class="pagination">-->
<!--        <el-pagination-->
<!--          background-->
<!--          layout="prev, pager, next"-->
<!--          :total="totalDL"-->
<!--          @current-change="getListDL"-->
<!--        />-->
<!--      </div>-->
<!--    </div>-->
    <h3 style="margin-left:20px;">ISO</h3>
    <div class="box2">
      <div class="cont" style="overflow: scroll;height: 200px; ">
        <el-table :data="listISO" border style="width: 100%">
          <el-table-column
            label="颁证日期"
            prop="award_date"
          />
          <el-table-column
            label="证书编号"
            prop="cert_num"
          />
          <el-table-column
            label="项目名称"
            prop="cert_project"
          />
          <el-table-column
            label="证书状态"
            prop="cert_status"
          />
          <el-table-column
            label="认证依据"
            prop="certificate_basis"
          />
          <el-table-column
            label="认证覆盖的业务范围"
            prop="certificate_scope"
          />
          <el-table-column
            label="证书到期日期"
            prop="expire_date"
          />
          <el-table-column
            label="发证机构"
            prop="org_num"
          />
        </el-table>
      </div>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="totalISO"
          @current-change="getListISO"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {getDengLingQualifications, getHighTecQualifications, getIsoQualifications} from "@/api/JudicialDecisions";

export default {
  name: "RychInfo",
  data() {
    return {
      total: 0,
      list: [],
      query: {
        entName: '',
        phone: '',
        xd_id: '',
        page: 1,
        pageSize: 10
      },
      totalDL: 0,
      listDL: [],
      queryDL: {
        entName: '',
        phone: '',
        xd_id: '',
        page: 1,
        pageSize: 10
      },
      totalISO: 0,
      listISO: [],
      queryISO: {
        entName: '',
        phone: '',
        xd_id: '',
        page: 1,
        pageSize: 10
      }
    }
  },
  mounted() {
    this.getList(1)
    this.getListDL(1)
  },
  methods: {
    getList(val) {
      // console.log(val)
      this.query.page = val
      this.query.entName = localStorage.getItem('entName')
      this.query.phone = localStorage.getItem('phone')
      this.query.xd_id = localStorage.getItem('xd_id')
      getHighTecQualifications(this.query).then(res => {
        // console.log(res)
        // var state_code_map = []
        this.list = res.data.result
        // this.list.forEach((v,k)=>{
        //   this.list[k].state_name = v.state_code
        // })
      })
    },
    getListDL(val) {
      // console.log(val)
      this.queryDL.page = val
      this.queryDL.entName = localStorage.getItem('entName')
      this.queryDL.phone = localStorage.getItem('phone')
      this.queryDL.xd_id = localStorage.getItem('xd_id')
      getDengLingQualifications(this.queryDL).then(res => {
        this.listDL = res.data.result
      })
    },
    getListISO(val) {
      // console.log(val)
      this.queryISO.page = val
      this.queryISO.entName = localStorage.getItem('entName')
      this.queryISO.phone = localStorage.getItem('phone')
      this.queryISO.xd_id = localStorage.getItem('xd_id')
      getIsoQualifications(this.queryISO).then(res => {
        // console.log(res)
        this.listISO = res.data.result
      })
    }
  }
}
</script>

<style scoped>

</style>
