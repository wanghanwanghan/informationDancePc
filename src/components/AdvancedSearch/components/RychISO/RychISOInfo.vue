<template>
  <div class="table-wrapper">
    <div class="box2">
      <div class="cont" style="overflow: scroll;height: 500px; ">
        <el-table :data="list" border style="width: 100%">
          <el-table-column
            label="颁证日期"
            prop="award_date"
            width="95"
          />
          <el-table-column
            label="证书编号cert_num"
            prop="cert_num"
            width="180"
          />
          <el-table-column
            label="项目名称"
            prop="cert_project"
            width="105"
          />
          <el-table-column
            label="证书状态"
            prop="cert_status"
            width="50"
          />
          <el-table-column
            label="认证依据"
            prop="certificate_basis"
            width="150"
          />
          <el-table-column
            label="认证覆盖的业务范围"
            prop="certificate_scope"
            width="300"
          />
          <el-table-column
            label="证书到期日期"
            prop="expire_date"
            width="100"
          />
          <el-table-column
            label="发证机构"
            prop="org_num"
            width="150"
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
  </div>
</template>

<script>
import {getIsoQualifications} from "@/api/JudicialDecisions";

export default {
  name: "RychISOInfo",
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
      }
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList(val) {
      // console.log(val)
      this.query.page = val
      this.query.entName = localStorage.getItem('entName')
      this.query.phone = localStorage.getItem('phone')
      this.query.xd_id = localStorage.getItem('xd_id')
      getIsoQualifications(this.query).then(res => {
        // console.log(res)
        this.list = res.data.result
      })
    }
  }
}
</script>

<style scoped>

</style>
