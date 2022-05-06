<template>
  <div style="padding-left: 20px">
    <el-tag size="mini" type="success" class="biaoqian" >企业规模:{{ businessScale }}</el-tag>
    <el-tag size="mini" class="biaoqian">团队规模:{{employmen}}</el-tag>
  </div>
</template>

<script>
import { getBusinessScaleInfo, getEmploymenInfo } from '@/api/JudicialDecisions'

export default {
  name: 'BiaoQianInfo',
  data() {
    return {
      businessScale: '',
      employmen: '',
      query: {
        entname: '',
        phone: '',
        xd_id: ''
      }
    }
  },
  mounted() {
    this.query.entname = localStorage.getItem('entName')
    this.query.phone = localStorage.getItem('phone')
    this.query.xd_id = localStorage.getItem('xd_id')
    getBusinessScaleInfo(this.query).then(res => {
      if (res.data.code === 200) {
        this.businessScale = res.data.result.label
      }
    })
    getEmploymenInfo(this.query).then(res => {
      if (res.data.code === 200) {
        this.employmen = res.data.result.num
      }
    })
  }
}
</script>

<style scoped>
.biaoqian{
  width: 84px;
  margin-left: 15px;
  text-align: center;
}
</style>
