<template>
  <div class="box">
    <div class="box2">
      <div v-for="(item,key) in detail.Data" :key="item">
        <el-row class="cont">
          <el-col :span="24"><div class="grid-content bg-purple" />
            <span>{{ key }} :</span><span>{{ item }}</span>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import { getSearchCertificationDetail } from '@/api/intellectualProperty'
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
    getSearchCertificationDetail(this.query).then(res => {
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

