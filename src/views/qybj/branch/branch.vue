<template>
  <div class="box">
    <!-- 分支机构 -->
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
          prop="ENTNAME"
          label="分支机构名称"
          width="360"
        />
        <el-table-column
          prop="SHXYDM"
          label="统一社会信用代码"
          width="180"
        />
        <el-table-column
          prop="FRDB"
          label="负责人"
          width="100"
        />
        <el-table-column
          prop="ESDATE"
          label="成立日期"
          width="140"
        />
        <el-table-column
          prop="ENTSTATUS"
          label="经营状态"
          width="140"
        />
        <el-table-column
          prop="PROVINCE"
          label="登记地省份"
        />
      </el-table>
    </div>
  </div>
</template>
<script>
import { getBranchInfo } from '@/api/EnterpriseBackground'
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
    getBranchInfo(this.query).then(res => {
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
