<template>
  <div class="robot-wrapper">
    <div>
      <el-tree
        ref="el_tree"
        :data="data"
        show-checkbox
        node-key="id"
        :default-expanded-keys="['G5331',4,8,11]"
        :default-checked-keys="['G5331',4,8,11]"
        @check-change="getCheckedNodes"
        :props="defaultProps">
      </el-tree>
    </div>
  </div>
</template>

<script>
import req from '@/utils/req'
import { nicid_wuliu } from '@/data/nicid_wuliu'

export default {
  name: '',
  components: {},
  // filters: {},
  props: {},
  // provide() {
  //   return {}
  // },
  data() {
    return {
      nicid_wuliu: nicid_wuliu,
      data: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      treeNode: []
    }
  },
  // inject: [],
  computed: {},
  // watch: {},
  mounted() {
    req.post('admin/v1/grocerystore/wuliuNode', {}, localStorage.getItem('token')).then(res => {
      if (res.data.code === 200) {
        this.data = res.data.result
        this.data[0]['children'][0]['children'][3]['children'] = this.nicid_wuliu
      }
    })
  },
  methods: {
    getNode() {
      return this.treeNode
    },
    getCheckedNodes() {
      let node = this.$refs.el_tree.getCheckedNodes(true)
      this.treeNode = []
      node.forEach(ele => {
        this.treeNode.push({
          name: ele.label,
          cond: ele.cond || 'basic_nicid|' + ele.id
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.robot-wrapper {
}
</style>
