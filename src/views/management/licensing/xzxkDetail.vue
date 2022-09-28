<template>
  <div class="box">
    <div class="box2">
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>行政许可决定文书号：</span><span>{{ detail.LicenseNo }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>行政许可决定文书名称：</span><span>{{ detail.LicenseName }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>许可编号：</span><span>{{ detail.LicenseNumber }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>许可证书名称：</span><span>{{ detail.CertificateName }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>有效期自：</span><span>{{ detail.ValidityFrom }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>有效期至：</span><span>{{ detail.ValidityTo }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>许可决定日期：</span><span>{{ detail.DecideDate }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>许可类别：</span><span>{{ detail.LicenseType }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>许可机关：</span><span>{{ detail.LicenseOffice }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>许可机关统一社会信用代码：</span><span>{{ detail.OfficeNo }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>数据来源单位：</span><span>{{ detail.SourceUnit }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>数据来源单位统一社会信用代码：</span><span>{{ detail.UnitNo }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>许可内容：</span><span>{{ detail.LicensContent }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { getAdministrativeLicenseListDetail } from '@/api/management'
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
    getAdministrativeLicenseListDetail(this.query).then(res => {
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

