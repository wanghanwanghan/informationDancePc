<template>
  <div class="layer-wrapper">
    <div class="layer-wrapper-1">
      <div class="title-wrapper">财务两表</div>
      <router-link to='/FinancialThreeTable/TwoTable'>
        <el-button class="btn-class" type="primary">查看</el-button>
      </router-link>
    </div>
    <div class="layer-wrapper-2">
      <div class="title-wrapper">税务能力</div>
      <router-link to='/FinancialThreeTable/Fapiao'>
        <el-button class="btn-class" type="primary">查看</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.layer-wrapper {
  margin-left: 100px;
  .layer-wrapper-1 {
    margin-top: 40px;
    width: 100%;
    height: 200px;
  }

  .layer-wrapper-2 {
    width: 100%;
  }

  .title-wrapper {
    font-size: 20px;
    font-weight: 800;
  }

  .btn-class {
    width: 200px;
    margin-top: 20px;
  }
}
</style>
