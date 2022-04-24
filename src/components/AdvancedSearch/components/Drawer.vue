<template>
  <el-drawer
    v-if="drawer"
    :size="size"
    :before-close="handleClose"
    :visible.sync="drawer"
    :with-header="false"
  >
    <div class="bg">
      <div class="title-wrapper">{{ entname }}</div>
      <div class="nav-wrapper">
        <el-tabs v-model="activeName" style="width:95%;margin:0 auto" @tab-click="entHandleClick">
          <el-tab-pane label="基本信息" name="base">
            <BaseInfo />
          </el-tab-pane>
          <el-tab-pane label="司法裁决" name="sifa">
            <SiFaInfo/>
          </el-tab-pane>
<!--          <el-tab-pane label="主营产品" name="product">-->
<!--            <ProductInfo />-->
<!--          </el-tab-pane>-->
          <el-tab-pane label="涉税信息" name="sheshui">
            <SheShuiInfo />
          </el-tab-pane>
          <el-tab-pane label="知识产权" name="intellectual">
            <IntellectualInfo/>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </el-drawer>
</template>

<script>
import BaseInfo from '@/components/AdvancedSearch/components/Base/BaseInfo'
import SiFaInfo from '@/components/AdvancedSearch/components/SiFa/SiFaInfo'
import ProductInfo from '@/components/AdvancedSearch/components/Product/ProductInfo'
import SheShuiInfo from '@/components/AdvancedSearch/components/SheShui/SheShuiInfo'
import IntellectualInfo from "@/components/AdvancedSearch/components/Intellectual/IntellectualInfo";
export default {
  name: 'Drawer',
  components: {
    BaseInfo,
    SiFaInfo,
    ProductInfo,
    SheShuiInfo,
    IntellectualInfo
  },
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
    return {
      activeName: 'base'
    }
  },
  // inject: [],
  computed: {},
  // watch: {},
  mounted() {
    if (this.$route.query.activeName === undefined) {
      this.activeName = 'base'
    } else {
      this.activeName = this.$route.query.activeName
    }
  },
  methods: {
    handleClose(down) {
      this.$emit('set-drawer-type', false)
    },
    entHandleClick(tab) {
      localStorage.setItem('activeName', tab.name)
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
