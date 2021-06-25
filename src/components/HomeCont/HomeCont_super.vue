<template>
  <div class="body-wrapper">
    <div class="logo-wrapper">
      <img class="logo" src="https://api.meirixindong.com/Static/Image/Image/xdzd_logo_big.jpeg" alt=""/>
<!--      <img class="logo" src="https://api.meirixindong.com/Static/Image/Image/zhlc_logo.jpg" alt=""/>-->
    </div>
    <div class="content-wrapper">
      <div class="block">
        <span class="demonstration">多选可搜索</span>
        <el-cascader ref="nicid_ref" placeholder="支持模糊搜索" :options="options"
                     :props="{multiple: true}"
                     :show-all-levels="false"
                     collapse-tags
                     @change="getCheckedNodes"
        ></el-cascader>
      </div>
    </div>
  </div>
</template>

<script>
import req from '@/utils/req'
import { nicid } from '@/data/nicid'
import { enttype } from '@/data/enttype'
import { address } from '@/data/address'

export default {
  name: 'HomeCont',
  components: {},
  props: {},
  data() {
    return {
      options: address
    }
  },
  inject: ['reload'],
  computed: {},
  mounted() {
  },
  methods: {
    getCheckedNodes() {
      let res = this.$refs.nicid_ref.getCheckedNodes(true)
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
.body-wrapper {
  font-size: 14px;
  margin: 0 auto;
  width: 90%;
  background-color: goldenrod;

  .logo-wrapper {
    text-align: center;

    .logo {
      width: 450px;
      height: 130px;
    }
  }

  .content-wrapper {
    background-color: #bce8f1;
  }
}
</style>
