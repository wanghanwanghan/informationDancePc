<template>
  <div class="box">
    <div class="box2">
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>债券名称：</span><span>{{ detail.FullName }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>债券简称：</span><span>{{ detail.ShortName }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>债券代码：</span><span>{{ detail.BondCode }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>债券类型：</span><span>{{ detail.BondType }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>债券面值（元）：</span><span>{{ detail.BondValue }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>债券年限（年）：</span><span>{{ detail.YearLimit }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>票面利率（%）：</span><span>{{ detail.CertScope }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>到期日：</span><span>{{ detail.PayDate }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>兑付日：</span><span>{{ detail.MaturityDate }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>计息方式：</span><span>{{ detail.PlanBreathWay }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>发行规模（亿元）：</span><span>{{ detail.Issuance }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>上市日期：</span><span>{{ detail.LaunchDate }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>发行日期：</span><span>{{ detail.ReleaseDate }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { getBondListDetail } from '@/api/EnterpriseDevelopment'
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
    getBondListDetail(this.query).then(res => {
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

