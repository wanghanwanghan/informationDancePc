<template>
  <div class="box">
    <div class="box2">
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <h3>{{ detail.Title }}</h3>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>薪资：</span><span>{{ detail.Salary }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>招聘公司：</span><span>{{ detail.CompanyName }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>办公地点：</span><span>{{ detail.Area }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>工作经验：</span><span>{{ detail.Experience }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>学历：</span><span>{{ detail.Education }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>信息来源：</span><span>{{ detail.Source }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>职位描述</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>{{ detail.Description }}</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { getRecruitmentListDetail } from '@/api/EnterpriseDevelopment'
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
    getRecruitmentListDetail(this.query).then(res => {
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

