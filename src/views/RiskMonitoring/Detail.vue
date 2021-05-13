<template>
  <RiskMonitoring :entName="entName"></RiskMonitoring>
</template>

<script>
import RiskMonitoring from '@/components/RiskMonitoring/RiskMonitoring'

export default {
  name: '',
  components: {
    RiskMonitoring
  },
  // filters: {},
  props: {},
  // provide() {
  //   return {}
  // },
  data() {
    return {
      entName: '呵呵'
    }
  },
  // inject: [],
  computed: {},
  // watch: {},
  mounted() {
  },
  // beforeCreate() {
  // },
  created() {
    this.entName = this.$route.params.entName
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

</style>
