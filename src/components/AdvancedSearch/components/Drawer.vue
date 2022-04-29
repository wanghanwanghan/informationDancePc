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
            <BaseInfo />
          </el-tab-pane>
          <el-tab-pane label="司法裁决" name="sifa">
            <SiFaInfo />
          </el-tab-pane>
          <el-tab-pane label="专业资质 荣誉称号" name="rych">
            <RychInfo />
          </el-tab-pane>
<!--          <el-tab-pane label="专业资质 荣誉称号(瞪羚)" name="rychDl">-->
<!--            <RychDlInfo />-->
<!--          </el-tab-pane>-->
<!--          <el-tab-pane label="专业资质(ISO)" name="rychISO">-->
<!--            <RychISOInfo />-->
<!--          </el-tab-pane>-->
          <el-tab-pane label="主营产品" name="product">
            <ProductInfo />
          </el-tab-pane>
          <!--          <el-tab-pane label="涉税信息" name="sheshui">-->
          <!--            <SheShuiInfo />-->
          <!--          </el-tab-pane>-->
          <!--          <el-tab-pane label="知识产权" name="intellectual">-->
          <!--            <IntellectualInfo/>-->
          <!--          </el-tab-pane>-->
        </el-tabs>
      </div>
    </div>
  </el-drawer>
</template>

<script>
import BaseInfo from '@/components/AdvancedSearch/components/Base/BaseInfo'
import SiFaInfo from '@/components/AdvancedSearch/components/SiFa/SiFaInfo'
import ProductInfo from '@/components/AdvancedSearch/components/Product/ProductInfo'
// import SheShuiInfo from '@/components/AdvancedSearch/components/SheShui/SheShuiInfo'
// import IntellectualInfo from '@/components/AdvancedSearch/components/Intellectual/IntellectualInfo'
import RychInfo from '@/components/AdvancedSearch/components/Rych/RychInfo'
// import RychDlInfo from '@/components/AdvancedSearch/components/RychDl/RychDlInfo'
// import RychISOInfo from '@/components/AdvancedSearch/components/RychISO/RychISOInfo'
import { getBusinessScaleInfo } from '@/api/JudicialDecisions'
import BiaoQianInfo from '@/components/AdvancedSearch/components/BiaoQianInfo'
export default {
  name: 'Drawer',
  components: {
    BaseInfo,
    SiFaInfo,
    ProductInfo,
    // SheShuiInfo,
    // IntellectualInfo,
    RychInfo,
    // RychDlInfo,
    // RychISOInfo,
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
      businessScale: ''
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
