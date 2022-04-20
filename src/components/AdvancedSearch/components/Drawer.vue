<template>
  <el-drawer
    :size="size"
    :before-close="handleClose"
    :visible.sync="drawer"
    :with-header="false">
    <div class="bg">
      <div class="title-wrapper">{{ entname }}</div>
      <div class="nav-wrapper">{{ shx }}</div>
    </div>
  </el-drawer>
</template>

<script>
export default {
  name: 'Drawer',
  components: {},
  props: {
    entname: {
      type: String,
      default: ''
    },
    shx: {
      type: String,
      default: ''
    },
    drawer: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: '1200px'
    }
  },
  data() {
    return {}
  },
  // inject: [],
  computed: {},
  // watch: {},
  mounted() {
    console.log(this.entname)
  },
  methods: {
    handleClose(down) {
      this.$emit('set-drawer-type', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;

  .title-wrapper {
    width: 100%;
    height: 100px;
    background-color: red;
  }

  .nav-wrapper {
    width: 100%;
    height: 100px;
    background-color: green;
  }
}
</style>
