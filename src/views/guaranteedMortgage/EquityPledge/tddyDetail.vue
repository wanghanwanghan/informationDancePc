<template>
  <div class="box">
    <div class="box2">
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>宗地标识：</span><span>{{ detail.LandSign }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>宗地编号：</span><span>{{ detail.LandNo }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>占地面积（公顷）：</span><span>{{ detail.Acreage }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>宗地坐落：</span><span>{{ detail.Address }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>土地他项权利人证号：</span><span>{{ detail.ObligeeNo }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>土地使用权证号：</span><span>{{ detail.UsufructNo }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>土地抵押人名称：</span><span>{{ detail.MortgagorName.Name }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>土地抵押人性质：</span><span>{{ detail.MortgagorNature }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>土地抵押权人：</span><span>{{ detail.MortgagePeople.Name }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>抵押土地用途：</span><span>{{ detail.MortgagePurpose }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>抵押土地权属性质与使用权类型：</span><span>{{ detail.NatureAndType }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>抵押面积（公顷）：</span><span>{{ detail.MortgageAcreage }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>评估金额（万元）：</span><span>{{ detail.AssessmentPrice }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>抵押金额（万元）：</span><span>{{ detail.MortgagePrice }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>土地抵押登记起始时间：</span><span>{{ detail.OnBoardStartTime }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>土地抵押登记结束时间：</span><span>{{ detail.OnBoardEndTime }}</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { getLandMortgageListDetail } from '@/api/guaranteedMortgage'
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
    getLandMortgageListDetail(this.query).then(res => {
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

