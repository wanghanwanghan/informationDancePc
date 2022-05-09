<template>
  <el-drawer
    v-if="drawer"
    :size="size"
    :before-close="handleClose"
    :visible.sync="drawer"
    :with-header="false"
  >
    <div class="bg">
      <BiaoQianInfo />
    </div>
  </el-drawer>
</template>

<script>
import BiaoQianInfo from '@/components/AdvancedSearch/components/BiaoQianInfo'
export default {
  name: 'Drawer',
  components: {
    BiaoQianInfo
  },
  props: {
    entname: {
      type: String,
      default: ''
    },
    xd_id: {
      type: Number
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
    height: 55px;
    line-height: 55px;
    padding-left: 35px;
  }

  .nav-wrapper {
    width: 100%;
    height: 45px;
    line-height: 35px;
    padding-left: 10px;
  }
}
</style>
