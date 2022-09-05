<template>
  <div>
    <div class="title-wrapper" style="padding-left: 30px;height: 65px; padding-top: 15px;line-height: 25px;/* padding-left: 20px; */">{{ entname }}
      <span v-if="name" :title="name" style="padding-left: 25px;font-size: 14px;color: #409EFF;cursor: pointer;">曾用名</span>
      <div>
        <el-tag v-for="(item,key) of tag" :type="tagStyleMap[key]" size="mini" class="biaoqian">{{ item }}</el-tag>
      </div>
    </div>
    <div class="nav-wrapper">
      <el-tabs v-model="activeName" style="width:95%;margin:0 auto" @tab-click="entHandleClick">
        <el-tab-pane :label="gongShangNum" name="base">
          <BaseInfo v-if="Base" />
        </el-tab-pane>
        <el-tab-pane :label="businessNum" name="business">
          <BusinessIfo v-if="Business" />
        </el-tab-pane>
        <el-tab-pane :label="rychNum" name="rych">
          <RychInfo v-if="Rych" />
        </el-tab-pane>
        <el-tab-pane :label="AppNum" name="product">
          <ProductInfo v-if="Product" />
        </el-tab-pane>
        <el-tab-pane :label="carInsurance" name="carInsurance">
          <CarInsurance v-if="CarInsurance" />
        </el-tab-pane>
        <el-tab-pane label="司法裁决" name="sifa">
          <SiFaInfo v-if="Sifa" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { getBusinessScaleInfo, getEmploymenInfo, getTagInfo } from '@/api/JudicialDecisions'
import { getCountInfo, getNamesInfo } from '@/api/EnterpriseBackground'
import BaseInfo from '@/components/AdvancedSearch/components/Base/BaseInfo'
import SiFaInfo from '@/components/AdvancedSearch/components/SiFa/SiFaInfo'
import ProductInfo from '@/components/AdvancedSearch/components/Product/ProductInfo'
import RychInfo from '@/components/AdvancedSearch/components/Rych/RychInfo'
import BusinessIfo from '@/components/AdvancedSearch/components/Business/BusinessIfo'
import CarInsurance from '@/components/AdvancedSearch/components/CarInsurance/CarInsurance'
export default {
  name: 'BiaoQianInfo',
  components: {
    BaseInfo,
    SiFaInfo,
    ProductInfo,
    RychInfo,
    BusinessIfo,
    CarInsurance
  },
  data() {
    return {
      tagStyleMap: ['', 'success', 'warning', 'danger', '', 'success', 'warning', '', 'success', 'warning'],
      name: '',
      businessScale: '',
      employmen: '',
      entname: '',
      tag: [],
      query: {
        entname: '',
        phone: '',
        xd_id: ''
      },
      Base: true,
      Sifa: false,
      Rych: false,
      Product: false,
      Business: false,
      CarInsurance: false,
      numData: '',
      gongShangNum: '工商信息(0)',
      businessNum: '业务/商品(0)',
      rychNum: '荣誉资质(0)',
      AppNum: 'App(0)',
      carInsurance: '车辆保险'
    }
  },
  created() {
    if (this.$route.query.activeName === undefined) {
      this.activeName = 'base'
    } else {
      this.activeName = this.$route.query.activeName
    }
    this.entname = localStorage.getItem('entName')
    this.query.entname = localStorage.getItem('entName')
    this.query.phone = localStorage.getItem('phone')
    this.query.xd_id = localStorage.getItem('xd_id')
    getBusinessScaleInfo(this.query).then(res => {
      if (res.data.code === 200) {
        this.businessScale = res.data.result.label
      }
    })
    getEmploymenInfo(this.query).then(res => {
      if (res.data.code === 200) {
        this.employmen = res.data.result.num
      }
    })
    getTagInfo(this.query).then(res => {
      if (res.data.code === 200) {
        for (var i in res.data.result) {
          this.tag.push(res.data.result[i])
        }
      }
    })
    getNamesInfo(this.query).then(res => {
      var name = ''
      if (res.data.code === 200) {
        res.data.result.forEach((v) => {
          if (name.length === 0) {
            name = v
          } else {
            name = name + ',' + v
          }
        })
      }
      this.name = name
    })
    getCountInfo(this.query).then(res => {
      if (res.data.code === 200) {
        this.gongShangNum = '工商信息(' + res.data.result.gong_shang + ')'
        this.businessNum = '业务/商品(' + res.data.result.shang_pin + ')'
        this.rychNum = '荣誉资质(' + res.data.result.rong_yu + ')'
        this.AppNum = 'App(' + res.data.result.app + ')'
      }
    })
  },
  methods: {
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
      } else if (tab.name === 'carInsurance' && this.CarInsurance === false) {
        this.CarInsurance = true
      }
      localStorage.setItem('activeName', tab.name)
    }
  }
}
</script>

<style scoped>
.biaoqian{
  width: 84px;
  margin-left: 3px;
  text-align: center;
}
</style>
