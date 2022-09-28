<template>
  <div class="box">
    <div class="box2">
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>行政区：</span><span>{{ detail.AdminArea }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>项目名称：</span><span>{{ detail.ProjectName }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>面积（公顷）：</span><span>{{ detail.Area }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>项目位置：</span><span>{{ detail.Address}}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>土地资源：</span><span>{{ detail.LandSource }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>土地用途：</span><span>{{ detail.LandUse }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>供地方式：</span><span>{{ detail.SupplyWay }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>土地使用年限：</span><span>{{ detail.LandUseYears }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>行业分类：</span><span>{{ detail.Industry }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>土地级别：</span><span>{{ detail.LandLevel }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>成交价格（万元）：</span><span>{{ detail.TransAmt }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>土地使用权人：</span><span>{{ detail.LandHolder.Name }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>约定交地时间：</span><span>{{ detail.AgreeLandDate }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>约定开工时间：</span><span>{{ detail.AgreeStartDate }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>约定竣工时间：</span><span>{{ detail.AgreeEndDate }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>实际开工时间：</span><span>{{ detail.ActualStartDate }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>实际竣工时间：</span><span>{{ detail.ActualEndDate }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>批准单位：</span><span>{{ detail.ApprovalUnit }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>合同签订日期：</span><span>{{ detail.SignDate }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>支付期号：</span><span>{{ detail.PaymentRound }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>约定支付日期：</span><span>{{ detail.AgreePayDate }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>约定支付金额（万元）：</span><span>{{ detail.AgreePayAmt }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>备注：</span><span>{{ detail.Remarks }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>约定容积率下限：</span><span>{{ detail.AgreeRateMin }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>约定容积率上限：</span><span>{{ detail.AgreeRateMax }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>电子监管号：</span><span>{{ detail.ElecSuNum }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />

        </el-col>
      </el-row>
      <!-- <div>
        <span>行政区：</span><span>{{ detail.AdminArea }}</span>
      </div> -->
    </div>
  </div>
</template>
<script>
import { landPurchaseListDetail } from '@/api/EnterpriseDevelopment'
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
    landPurchaseListDetail(this.query).then(res => {
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

