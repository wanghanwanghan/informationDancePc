<template>
  <div class="box">
    <!-- 股东 -->
    <div v-if="list === '' || list === null" class="cont">暂无相关信息</div>
    <div v-if="list !== '' || list !== null" class="cont">
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
          prop="INV"
          label="股东名称"
          width="180"
        />
        <el-table-column
          prop="SHXYDM"
          label="统一社会信用代码"
          width="180"
        />
        <el-table-column
          prop="INVTYPE"
          label="股东类型"
          width="160"
        />
        <el-table-column
          prop="SUBCONAM"
          label="认缴出资额(万元)"
          width="160"
        />
        <el-table-column
          prop="CONCUR"
          label="出资币种"
          width="100"
        />
        <el-table-column
          prop="CONRATIO"
          label="出资比例"
          width="160"
        />
        <el-table-column
          prop="CONDATE"
          label="出资时间"
        />
      </el-table>
    </div>
  </div>
</template>
<script>
import { getShareHolderInfo } from '@/api/EnterpriseBackground'
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
    getShareHolderInfo(this.query).then(res => {
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
