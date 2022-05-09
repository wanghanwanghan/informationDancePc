<template>
  <el-drawer
    v-if="drawer"
    :size="size"
    :before-close="handleClose"
    :visible.sync="drawer"
    :with-header="false"
  >
    <div class="bg">
      <!--      <div class="title-wrapper">{{ entname }}-->
      <!--        <span :title="name" style="padding-left: 25px;font-size: 14px;color: #409EFF;cursor: pointer;">曾用名</span>-->
      <!--      </div>-->
      <BiaoQianInfo />
      <div class="nav-wrapper">
        <el-tabs v-model="activeName" style="width:95%;margin:0 auto" @tab-click="entHandleClick">
          <el-tab-pane label="工商信息" name="base">
            <BaseInfo v-if="Base" />
          </el-tab-pane>
          <el-tab-pane label="业务/商品" name="business">
            <BusinessIfo v-if="Business" />
          </el-tab-pane>
          <el-tab-pane label="专业资质 荣誉称号" name="rych">
            <RychInfo v-if="Rych" />
          </el-tab-pane>
          <el-tab-pane label="App" name="product">
            <ProductInfo v-if="Product" />
          </el-tab-pane>
          <el-tab-pane label="司法裁决" name="sifa">
            <SiFaInfo v-if="Sifa" />
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
import RychInfo from '@/components/AdvancedSearch/components/Rych/RychInfo'
import BiaoQianInfo from '@/components/AdvancedSearch/components/BiaoQianInfo'
import BusinessIfo from '@/components/AdvancedSearch/components/Business/BusinessIfo'
export default {
  name: 'Drawer',
  components: {
    BaseInfo,
    SiFaInfo,
    ProductInfo,
    RychInfo,
    BiaoQianInfo,
    BusinessIfo
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
  data() {
    return {
      activeName: 'base',
      query: {
        entname: '',
        phone: ''
      },
      businessScale: '',
      Base: true,
      Sifa: true,
      Rych: true,
      Product: true,
      Business: true
    }
  },

  // inject: [],
  // computed: {},
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
      this.activeName = 'base'
      this.Base = true
      this.$emit('set-drawer-type', false)
    },
    entHandleClick(tab) {
      if (tab.name === 'base' && this.Base === false) {
        this.Base = true
      } else if (tab.name === 'sifa' && this.Sifa === false) {
        this.Sifa = true
      } else if (tab.name === 'rych' && this.Rych === false) {
        this.Rych = true
      } else if (tab.name === 'product' && this.Product === false) {
        this.Product = true
      } else if (tab.name === 'business' && this.Business === false) {
        this.Business = true
      }
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
