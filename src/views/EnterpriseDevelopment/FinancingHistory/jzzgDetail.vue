<template>
  <div class="box">
    <div class="box2">
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>证书名称：</span><span>{{ detail.Category }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>公司名称：</span><span>{{ detail.EntName }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>证书编号：</span><span>{{ detail.CertNo }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>资质名称：</span><span>{{ detail.CertName }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>有效期至：</span><span>{{ detail.CertEndDate }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>资质类别：</span><span>{{ detail.OldOwner.Name }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>资质范围：</span><span>{{ detail.CertScope }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>发证机关：</span><span>{{ detail.SignDept }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>发证日期：</span><span>{{ detail.SignDate }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>备注：</span><span>{{ detail.Remark }}</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { getQualificationListDetail } from '@/api/EnterpriseDevelopment'
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
    getQualificationListDetail(this.query).then(res => {
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

