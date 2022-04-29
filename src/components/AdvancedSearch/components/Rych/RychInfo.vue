<template>
  <div class="table-wrapper">
    <div class="box2">
      <div class="cont" style="overflow: scroll;height: 500px; ">
        <el-table :data="list" border style="width: 100%">
          <el-table-column
            label="认证机构"
            prop="cert_org"
            width="200"
          />
          <el-table-column
            label="state_code"
            prop="state_code"
            width="100"
          />
          <el-table-column
            label="到期日期"
            prop="dateto"
            width="100"
          />
          <el-table-column
            label="撤销日期"
            prop="end_date"
            width="100"
          />
          <el-table-column
            label="URL"
            prop="url"
            width="200"
          />
          <el-table-column
            label="证书编号"
            prop="wnum"
            width="80"
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
import {getHighTecQualifications} from "@/api/JudicialDecisions";

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
      }
    }
  },
  mounted() {
    this.getList(1)
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
    }
  }
}
</script>

<style scoped>

</style>
