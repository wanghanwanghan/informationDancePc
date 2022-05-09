<template>
  <div class="table-wrapper">
    <div class="box2">
      <div class="cont" style="overflow: scroll;height: 500px; ">
        <el-table :data="list" border style="width: 100%">
          <el-table-column
            label="公司"
            prop="ENTNAME"
            width="200"
          />
          <el-table-column
            label="统一社会信用代码"
            prop="UNISCID"
            width="200"
          />
          <el-table-column
            label="更新时间"
            prop="updated"
            width="200"
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
import {getDengLingQualifications} from "@/api/JudicialDecisions";

export default {
  name: "RychDlInfo",
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
      getDengLingQualifications(this.query).then(res => {
        // console.log(res)
        this.list = res.data.result
      })
    }
  }
}
</script>

<style scoped>

</style>
