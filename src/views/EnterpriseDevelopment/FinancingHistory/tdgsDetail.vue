<template>
  <div class="box">
    <div class="box2">
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>宗地编号：</span><span>{{ detail.LandNo }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>地块位置：</span><span>{{ detail.Address }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>面积（公顷）：</span><span>{{ detail.Acreage }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>项目名称：</span><span>{{ detail.ProjectName }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>土地用途：</span><span>{{ detail.Purpose }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>受让单位：</span><span>{{ detail.AssigneeUnit.Name }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>公示日期：</span><span>{{ detail.PublishTerm }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>意见反馈：</span><span>{{ detail.Explains }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>发布机关：</span><span>{{ detail.PublishGov }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>发布日期：</span><span>{{ detail.PublishDate }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>备注：</span><span>{{ detail.Remarks }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>联系单位：</span><span>{{ detail.ContactUnit }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>单位地址：</span><span>{{ detail.UnitAddress }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>邮政编码：</span><span>{{ detail.PostCode }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>联系电话：</span><span>{{ detail.ContactNumber }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>联系人：</span><span>{{ detail.ContactPerson }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>电子邮件：</span><span>{{ detail.Email }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { landPublishListDetail } from '@/api/EnterpriseDevelopment'
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
    landPublishListDetail(this.query).then(res => {
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

