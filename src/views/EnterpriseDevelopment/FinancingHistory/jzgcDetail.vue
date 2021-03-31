<template>
  <div class="box">
    <div class="box2">
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>项目名称：</span><span>{{ detail.ProjectName }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>项目编号：</span><span>{{ detail.No }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>省级项目编号：</span><span>{{ detail.ProvinceNo }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>所在区划：</span><span>{{ detail.Region }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>建设单位：</span><span>{{ detail.ConsCoyList[0].Name }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>合同备案</span>
        </el-col>
      </el-row>
      <div v-for="item in detail.ContractRecordList" :key="item">
        <el-row class="cont">
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span>合同类型：</span><span>{{ item.Category }}</span>
          </el-col>
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span>合同金额：</span><span>{{ item.Amount }}</span>
          </el-col>
        </el-row>
        <el-row class="cont">
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span>合同签订日期：</span><span>{{ item.SignDate }}</span>
          </el-col>
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span>合同备案编号：</span><span>{{ item.RecordNo }}</span>
          </el-col>
        </el-row>
        <el-row class="cont">
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span>省级合同备案编号：</span><span>{{ item.PrRecordNo }}</span>
          </el-col>
        </el-row>
      </div>

      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>施工图审查</span>
        </el-col>
      </el-row>
      <div v-for="item in detail.DrawingCheckList" :key="item">
        <el-row class="cont">
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span>施工图审查合格书编号：</span><span>{{ item.DocNo }}</span>
          </el-col>
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span>省级施工图审查合格书编号：</span><span>{{ item.PrDocNo }}</span>
          </el-col>
        </el-row>
        <el-row class="cont">
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span>勘察单位名称：</span><span>{{ item.AuditCoy.Name }}</span>
          </el-col>
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span>设计单位名称：</span><span>{{ item.DesignCoy.Name }}</span>
          </el-col>
        </el-row>
        <el-row class="cont">
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span>施工图审查机构名称：</span><span>{{ item.InvestigateCoy.Name }}</span>
          </el-col>
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span>审查完成日期：</span><span>{{ item.FinishDate }}</span>
          </el-col>
        </el-row>
      </div>

      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>竣工验收备案</span>
        </el-col>
      </el-row>
      <div v-for="item in detail.FinishVerifyList" :key="item">
        <el-row class="cont">
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span>实际造价：</span><span>{{ item.Price }}</span>
          </el-col>
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span>实际面积：</span><span>{{ item.Area }}</span>
          </el-col>
        </el-row>
        <el-row class="cont">
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span>实际开工日期：</span><span>{{ item.StartDate }}</span>
          </el-col>
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span>实际竣工验收日期：</span><span>{{ item.VerifyDate }}</span>
          </el-col>
        </el-row>
        <el-row class="cont">
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span>竣工备案编号：</span><span>{{ item.RecordNo }}</span>
          </el-col>
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span>省级竣工备案编号：</span><span>{{ item.PrRecordNo }}</span>
          </el-col>
        </el-row>
      </div>

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

