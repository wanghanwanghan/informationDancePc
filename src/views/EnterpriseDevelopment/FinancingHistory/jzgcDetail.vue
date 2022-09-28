<template>
  <div class="box">
    <div class="box2">
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>建设单位信息：</span>
          <span v-for="(v,k) in detail.BuildUnitList">{{ v.Name }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>总投资（万元）：</span><span>{{ detail.InvestAmt }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>项目类别：</span><span>{{ detail.ProjectType }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>工程用途：</span><span>{{ detail.UsePurpose }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>建设性质：</span><span>{{ detail.BuildNature}}</span>
        </el-col>

        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>建设规模：</span><span>{{ detail.BuildScale}}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>总面积（平房米）:</span><span>{{ detail.TotalAcreage}}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>总长度（米）:</span><span>{{ detail.TotalLength}}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>项目编号：</span><span>{{ detail.ItemNo}}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>省级项目编号：</span><span>{{ detail.ProvinceItemNo}}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>建设用地规划许可证编号：</span><span>{{ detail.LandPerNo}}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>建设工程规划许可证编号：</span><span>{{ detail.ProPerNo}}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>行政区划L：</span><span>{{ detail.Area}}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>具体地点：</span><span>{{ detail.DetailLocation}}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>立项文号：</span><span>{{ detail.ItemDocNo}}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>立项级别：</span><span>{{ detail.ItemLevel}}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>立项批复机关：</span><span>{{ detail.ApproveUnit}}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>立项批复时间：</span><span>{{ detail.ApproveDate}}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>计划开工时间：</span><span>{{ detail.StartDate}}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>计划竣工时间：</span><span>{{ detail.EndDate}}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>数据等级：</span><span>{{ detail.DataLevel}}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { getBuildingProjectListDetail } from '@/api/EnterpriseDevelopment'
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
    getBuildingProjectListDetail(this.query).then(res => {
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

