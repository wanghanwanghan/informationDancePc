<template>
  <div class="box">
    <!-- 经营异常 -->
    <div class="cont">
      <el-table
        :data="list"
        border
        style="width: 100%"
      >
        <el-table-column
          label="序号"
          type="index"
          width="50"
        />
        <el-table-column
          prop="REASONIN"
          label="异常原因"
          width="160"
        />
        <el-table-column
          prop="DATEIN"
          label="列入日期"
          width="120"
        />
        <el-table-column
          prop="REGORGIN"
          label="决定机关"
          width="160"
        />
        <el-table-column
          prop="REASONOUT"
          label="移除异常原因"
          width="250"
        />
        <el-table-column
          prop="DATEOUT"
          label="移除日期"
          width="120"
        />
        <el-table-column
          prop="REGORGOUT"
          label="决定机关（移除）"
        />
      </el-table>
    </div>
  </div>
</template>
<script>
import { getOperatingExceptionRota } from '@/api/EnterpriseBackground'
export default {
  data() {
    return {
      query: {
        entName: '',
        phone: '',
        pageNo: '',
        pageSize: ''
      },
      list: []
    }
  },
  mounted() {
    this.query.entName = localStorage.getItem('entName')
    this.query.phone = localStorage.getItem('phone')
    getOperatingExceptionRota(this.query).then(res => {
      console.log(res)
      this.list = res.data.result
    })
  }
}
</script>
<style lang="scss" scoped>
.cont{
  width:94%;
  // min-height:500px;
  margin:40px;
  border:1px solid #EBEBEB;
}
</style>
