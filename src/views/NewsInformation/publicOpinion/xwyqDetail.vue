<template>
  <div class="box">
    <div class="box2">
      <div v-if="detail === null">
        暂无相关信息
      </div>
      <div v-if="detail !== null">
        <div class="cont" v-html="detail.Content" />
      </div>
    </div>
  </div>
</template>
<script>
import { getSearchNewsDetail } from '@/api/NewsInformation'
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
    getSearchNewsDetail(this.query).then(res => {
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

