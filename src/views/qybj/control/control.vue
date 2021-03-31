<template>
  <div class="box">
    <!-- 实际控制人和控制路径 -->
    <div v-if="list.length === 0" class="cont">因穿透股东中有政府部门或国资单位等特殊机构，故不予显示</div>
    <div v-if="list.length !== 0" class="cont">
      <el-table
        :data="list.DetailInfoList"
        border
        style="width: 100%"
      >
        <el-table-column
          label="序号"
          type="index"
          width="50"
        />
        <el-table-column
          prop="StockType"
          label="持股方式"
          width="180"
        />
        <el-table-column
          prop="StockPercent"
          label="占比"
          width="180"
        />
        <el-table-column
          prop="Path"
          label="股权链"
        />
      </el-table>
    </div>
  </div>
</template>
<script>
import { getBeneficiary } from '@/api/EnterpriseBackground'
export default {
  data() {
    return {
      query: {
        entName: '',
        phone: '',
        pay: ''
      },
      list: []
    }
  },
  mounted() {
    this.query.entName = localStorage.getItem('entName')
    this.query.phone = localStorage.getItem('phone')
    getBeneficiary(this.query).then(res => {
      // console.log(res)
      if (res.data.code === 200) {
        this.list = res.data.result
        // console.log(typeof (this.list))
      } else {
        this.$confirm((res.data.msg), '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.query.pay = 1
          getBeneficiary(this.query).then(res => {
            this.$message({
              type: 'success',
              message: '查询成功!'
            })
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          })
        })
      }
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
