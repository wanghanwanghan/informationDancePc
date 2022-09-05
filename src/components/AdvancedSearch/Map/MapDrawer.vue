<template>
  <el-drawer
    :append-to-body="true"
    :inner="true"
    v-if="drawer"
    width="100%"
    :size="size"
    :before-close="handleClose"
    :visible.sync="drawer"
    :with-header="false"
  >
    <div class="bg" style="overflow: scroll;background: #F5F8FA;padding-bottom: 20px;">
      <search />
    </div>
  </el-drawer>
</template>

<script>

import search from "@/components/AdvancedSearch/Map/search";

export default {
  name: 'Drawer',
  components: {
    search
  },
  props: {
    areas: {
      type: String
    },
    drawer: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: '1260px'
    },
    closable: {
      type: Boolean,
      default: true
    },
  },
  data(){
    return {
      searchQuery:{
        phone: localStorage.getItem('phone')
      }
    }
  },
  methods:{
    handleClose(down) {
      this.$emit('set-drawer-type', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-drawer__body {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: auto;
}
</style>
