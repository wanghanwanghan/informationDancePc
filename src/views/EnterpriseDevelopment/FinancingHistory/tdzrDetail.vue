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
          <span>宗地座落：</span><span>{{ detail.Address }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>所在行政区：</span><span>{{ detail.AdminArea }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>土地用途：</span><span>{{ detail.Purpose }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>原土地使用权人：</span><span>{{ detail.OldOwner.Name }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>现土地使用权人：</span><span>{{ detail.NewOwner.Name }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>面积（公顷）：</span><span>{{ detail.Acreage }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>成交时间：</span><span>{{ detail.TransTime }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>土地使用权类型：</span><span>{{ detail.UseType }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>土地使用年限：</span><span>{{ detail.UseYears }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>土地利用状况：</span><span>{{ detail.LandUseStatus }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>土地级别：</span><span>{{ detail.Level }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>转让方式：</span><span>{{ detail.TransferType }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>转让价格（万元）：</span><span>{{ detail.TransAmt }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { landTransferListDetail } from '@/api/EnterpriseDevelopment'
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
    landTransferListDetail(this.query).then(res => {
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

