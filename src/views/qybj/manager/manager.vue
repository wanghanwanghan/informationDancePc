<template>
  <div class="box">
    <!-- 企业主要管理人 -->
    <div v-if="list.legth === 0 || list === null" class="cont">暂无相关信息</div>
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
          prop="NAME"
          label="姓名"
          width="350"
        />
        <el-table-column
          prop="POSITION"
          label="职务"
          width="350"
        />
        <el-table-column
          prop="ISFRDB"
          label="是否为法人"
        />
      </el-table>
    </div>
  </div>
</template>
<script>
import { getMainManagerInfo } from '@/api/EnterpriseBackground'
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
    getMainManagerInfo(this.query).then(res => {
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
