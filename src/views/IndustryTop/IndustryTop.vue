<template>
  <div>
    <div class="select-wrapper">

    </div>
  </div>
</template>

<script>
export default {
  name: 'IndustryTop',
  components: {},
  // filters: {},
  props: {},
  // provide() {
  //   return {}
  // },
  data() {
    return {}
  },
  // inject: [],
  computed: {},
  // watch: {},
  mounted() {

  },
  // beforeCreate() {
  // },
  created() {
    this.phone = localStorage.getItem('phone')
    this.entName = localStorage.getItem('entName')
    this.token = localStorage.getItem('token')
  },
  // beforeMount() {
  // },
  // beforeUpdate() {
  // },
  // updated() {
  // },
  // beforeDestroy() {
  // },
  // destroyed() {
  // },
  // activated() {
  // },
  // deactivated() {
  // },
  methods: {}
}
</script>

<style lang="scss" scoped>
.select-wrapper {
  width: 100px;
}
</style>
