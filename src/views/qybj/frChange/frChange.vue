<template>
  <div class="box">
    <!-- 法人变更 -->
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
          prop="ALTDATE"
          label="变更时间"
          width="160"
        />
        <el-table-column
          prop="ALTBE"
          label="变更前"
          width="400"
        />
        <el-table-column
          prop="ALTAF"
          label="变更后"
        />
      </el-table>
    </div>
  </div>
</template>
<script>
import { frbg } from '@/api/EnterpriseBackground'
export default {
  data() {
    return {
      query: {
        entName: '',
        phone: ''
      },
      list: []
    }
  },
  mounted() {
    this.query.entName = localStorage.getItem('entName')
    this.query.phone = localStorage.getItem('phone')
    frbg(this.query).then(res => {
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
