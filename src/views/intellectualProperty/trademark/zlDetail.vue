<template>
  <div class="box">
    <div class="box2">
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>发明名称：</span><span>{{ detail.Title }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>申请号：</span><span>{{ detail.PublicationNumber }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>申请日：</span><span>{{ detail.ApplicationDate }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>公开（公告）号：</span><span>{{ detail.ApplicationNumber }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>公开（公告）日期：</span><span>{{ detail.ApplicationDate }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <h3>IPC分类号</h3>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
        </el-col>
      </el-row>
      <div v-for="item in detail.IPCList" :key="item">
        <div class="cont">{{ item }}</div>
      </div>

      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <h3>申请/代理机构</h3>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
        </el-col>
      </el-row>
      <div class="cont">
        申请（专利权）人：
      </div>
      <div v-for="item in detail.AssigneestringList" :key="item">
        <div class="cont">{{ item }}</div>
      </div>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>发明人：</span><span>{{ detail.Agent }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>代理机构：</span><span>{{ detail.Agency[0] }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>发明人：</span><span>{{ detail.Agent }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="24"><div class="grid-content bg-purple" />
          <span>摘要:</span><span>{{ detail.Abstract }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>法律状态：</span><span>{{ detail.LegalStatusDesc }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { getPatentV4SearchDetail } from '@/api/intellectualProperty'
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
    getPatentV4SearchDetail(this.query).then(res => {
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

