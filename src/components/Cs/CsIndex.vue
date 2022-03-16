<template>
  <iframe id="iframe-1" :src=" url " style="width: 100%;height: 700px;border: aliceblue;" />
</template>
<script>
import { directUrl } from '@/api/article'
export default {
  name: 'CsIndex',
  components: {},
  props: {},
  data() {
    return {
      query: {
        phone: ''
      },
      url: ''
    }
  },
  created() {
    this.query.phone = localStorage.getItem('phone')
    directUrl(this.query).then(res => {
      this.url = res.data.result.url
    })
  }
}
</script>

