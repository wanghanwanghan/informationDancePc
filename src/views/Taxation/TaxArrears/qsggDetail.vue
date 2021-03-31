<template>
  <div class="box">
    <div v-if="detail.length === 0" class="box2">
      暂无相关信息
    </div>
    <div v-if="detail.length !== 0" class="box2">
      <h3>{{ detail[0].title }}</h3>
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>公司名称：</span><span>{{ detail[0].pname }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>法人代表：</span><span>{{ detail[0].legalRepresentative }}</span>
        </el-col>
      </el-row>
      <!-- <div v-for="(item,index) in detail[0].partys" :key="index">
        <el-row class="cont">
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span>原因：</span><span>{{ item.jtqx }}</span>
          </el-col>
          <el-col :span="12"><div class="grid-content bg-purple" />
            <span>被执行人：</span><span> {{ item.pname }} </span>
          </el-col>
        </el-row>
      </div> -->
      <el-row class="cont">
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>原因：</span><span>{{ detail[0].eventName }}</span>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" />
          <span>类别：</span><span>{{ detail[0].taxCategory }}</span>
        </el-col>
      </el-row>
      <el-row class="cont">
        <el-col :span="24"><div class="grid-content bg-purple" />
          <span>纳税人ID：</span><span>{{ detail[0].taxpayerId }}</span>
        </el-col>
        <!-- <el-col :span="12"><div class="grid-content bg-purple" />
          <span>类型：</span><span>{{ detail[0].objectType }}</span>
        </el-col> -->
      </el-row>
      <el-row class="cont">
        <el-col :span="24"><div class="grid-content bg-purple" />
          <!-- <span v-html="detail[0].body" /> -->
          <span>内容：</span><span>{{ detail[0].body }}</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { getSatpartyQsDetail } from '@/api/Taxation'
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
      detail: []
    }
  },
  created() {
    // console.log(this.$route.params.id)
    this.query.entName = localStorage.getItem('entName')
    this.query.id = this.$route.params.id
    this.query.phone = localStorage.getItem('phone')
    getSatpartyQsDetail(this.query).then(res => {
      // console.log(res)
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

