<template>
  <div class="app">
    <Nav />
    <!-- <el-button type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button> -->

  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'
import Nav from '@/components/Nav/Nav'

export default {
  // name: 'Home',
  components: {
    Nav
  },
  data() {
    return {

    }
  },
  methods: {
    handleLogin() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style lang="scss" scoped>
.app{
  min-height: 100%;
  width: 100%;
  // overflow: hidden;
  overflow-y: scroll;
}
</style>
