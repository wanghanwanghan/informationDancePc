<template>
  <div class="box">
    <div class="box2">
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>行政相对人名称：</span><span v-for="(v,k) in detail.OwnInfoList">{{ v.Name }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>决定文书号：</span><span>{{ detail.DocNo }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>处罚项名称：</span><span>{{ detail.CaseName }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>处罚状态：</span><span>{{ detail.Status }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>处罚依据：</span><span>{{ detail.According }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>处罚结果：</span><span>{{ detail.Result }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>处罚单位：</span><span>{{ detail.PunishOffice }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>处罚日期：</span><span>{{ detail.PunishDate }}</span>
        </el-col>
      </el-row>

      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>处罚金额（元）：</span><span>{{ detail.PunishAmt }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>没收金额(元)：</span><span>{{ detail.ConfiscateAmt }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>违法行为类型：</span><span>{{ detail.PunishType }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>违法事实：</span><span>{{ detail.PunishReason }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>发布日期：</span><span>{{ detail.PublishDate }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { getAdministrativePenaltyListDetail } from '@/api/management'
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
    getAdministrativePenaltyListDetail(this.query).then(res => {
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

