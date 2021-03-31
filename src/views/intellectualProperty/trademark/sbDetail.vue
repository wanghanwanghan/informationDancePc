<template>
  <div class="box">
    <div class="box2">
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>商标名称：</span><span>{{ detail.Name }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>商标类别：</span><span>{{ detail.TmType }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>申请注册号：</span><span>{{ detail.RegNo }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>商标状态：</span><span>{{ detail.FlowStatusDesc }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>商标申请日期：</span><span>{{ detail.AppDate }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>申请人名称：</span><span>{{ detail.ApplicantCn }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>申请人地址：</span><span>{{ detail.AddressCn }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>代理/代办机构：</span><span>{{ detail.Agent }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <h3>商品/服务项目</h3>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
        </el-col>
      </el-row>
      <div v-for="item in detail.ListGroupItems" :key="item">
        <div class="cont">{{ item }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { getTmSearchDetail } from '@/api/intellectualProperty'
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
    getTmSearchDetail(this.query).then(res => {
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

