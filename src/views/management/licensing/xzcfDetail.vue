<template>
  <div class="box">
    <div class="box2">
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>行政相对人名称：</span><span>{{ detail.CompanyName }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>决定文书号：</span><span>{{ detail.CaseNo }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>违法行为类型：</span><span>{{ detail.CaseReason }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>行政处罚内容：</span><span>{{ detail.Content }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>处罚决定日期：</span><span>{{ detail.DecideDate }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>决定机关：</span><span>{{ detail.ExecuteGov }}</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { getAdministrativePenaltyListDetail } from '@/api/management'
export default {
  data() {
    return {
      query: {
        entName: '',
        phone: '',
        pageNo: 1,
        pageSize: 10,
        id: ''
      },
      detail: ''
    }
  },
  created() {
    // console.log(this.$route.params.id)
    this.query.entName = localStorage.getItem('entName')
    this.query.id = this.$route.params.id
    this.query.phone = localStorage.getItem('phone')
    getAdministrativePenaltyListDetail(this.query).then(res => {
    //   console.log(res)
      this.detail = res.data.result
    })
  }
}
</script>
<style lang="scss" scoped>
.cont{
    margin:30px 10px
}
</style>

