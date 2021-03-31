<template>
  <div class="box">
    <div class="box2">
      <h3>标题</h3>
      <span>{{ detail.Title }}</span>
      <h3>更新时间</h3>
      <span>{{ detail.PublishDate }}</span>
      <h3>内容链接</h3>
      <a :href="detail.ContentUrl" target="_blank">{{ detail.ContentUrl }}</a>
      <h3>内容</h3>
      <span v-html="detail.Data.Content" />
    </div>
  </div>
</template>
<script>
import { tenderSearchDetail } from '@/api/EnterpriseDevelopment'
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
    tenderSearchDetail(this.query).then(res => {
      // console.log(res)
      this.detail = res.data.result
    })
  }
}
</script>
<style lang="scss" scoped>
a:hover{ color:#40B8FF}
</style>

