<template>
  <div class="box">
    <!-- 变更信息 -->
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
          prop="ALTITEM"
          label="变更事项"
          width="120"
        />
        <el-table-column
          prop="ALTBE"
          label="变更前内容"
          width="400"
        />
        <el-table-column
          prop="ALTAF"
          label="变更后内容"
          width="400"
        />
        <el-table-column
          prop="ALTDATE"
          label="变更时间"
        />
      </el-table>
    </div>
  </div>
</template>
<script>
import { getRegisterChangeInfo } from '@/api/EnterpriseBackground'
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
    getRegisterChangeInfo(this.query).then(res => {
      // console.log(res)
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
