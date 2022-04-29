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
      <BiaoQianInfo />
      <div class="nav-wrapper">
        <el-tabs v-model="activeName" style="width:95%;margin:0 auto" @tab-click="entHandleClick">
          <el-tab-pane label="基本信息" name="base">
<!--            <transition>-->
<!--            <keep-alive>-->
<!--              <router-view v-if="Base">-->
                <BaseInfo  v-if="Base"/>
<!--              </router-view>-->
<!--            </keep-alive>-->
<!--              </transition>-->
          </el-tab-pane>
          <el-tab-pane  label="司法裁决" name="sifa">
<!--            <transition>-->
<!--            <keep-alive>-->
<!--              <router-view v-if="Sifa">-->
                <SiFaInfo  v-if="Sifa"/>
<!--              </router-view>-->
<!--            </keep-alive>-->
<!--              </transition>-->
          </el-tab-pane>
          <el-tab-pane  label="专业资质 荣誉称号" name="rych">
            <RychInfo v-if="Rych" />
          </el-tab-pane>
          <el-tab-pane  label="主营产品" name="product">
            <ProductInfo v-if="Product" />
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
import { getBusinessScaleInfo } from '@/api/JudicialDecisions'
import BiaoQianInfo from '@/components/AdvancedSearch/components/BiaoQianInfo'
export default {
  name: 'Drawer',
  components: {
    BaseInfo,
    SiFaInfo,
    ProductInfo,
    RychInfo,
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
  data() {
    return {
      activeName: 'base',
      query: {
        entname: '',
        phone: ''
      },
      businessScale: '',
      Base: true,
      Sifa: false,
      Rych: false,
      Product: false
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
    this.query.entname = this.entname
    this.query.phone = localStorage.getItem('phone')
    getBusinessScaleInfo(this.query).then(res => {
      console.log(res.data)
      this.businessScale = res.data.result.label
    })
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
