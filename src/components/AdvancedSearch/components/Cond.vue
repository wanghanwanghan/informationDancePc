<template>
  <div class="bg-wrapper">
    <div class="title-wrapper">
      {{ title }}
    </div>
    <div class="cond-wrapper">
      <div class="cond-absolute" :class="show_more?'show':''">
        <el-form>
          <el-form-item>
            <el-checkbox-group v-model="checkList_val" @change="changeSelect(id)">
              <el-checkbox v-for="item in list" :label="id+'-'+item.id">{{ item.name }}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="more-wrapper" @click="more">更多</div>
  </div>
</template>

<script>
export default {
  name: 'Cond',
  components: {},
  props: {
    title: {
      type: String,
      default: '默认title'
    },
    id: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'single'
    },
    has_more: {
      type: String,
      default: 'n'
    },
    row_count: {
      type: Number,
      default: 4
    },
    show_more: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => [
        { id: 1, name: '默认item1' },
        { id: 2, name: '默认item2' },
        { id: 3, name: '默认item3' },
        { id: 4, name: '默认item4' },
        { id: 5, name: '默认item5' },
        { id: 6, name: '默认item6' },
        { id: 7, name: '默认item7' },
        { id: 8, name: '默认item8' },
        { id: 9, name: '默认item9' }
      ]
    }
  },
  data() {
    return {
      radio_val: '',
      checkList_val: []
    }
  },
  computed: {},
  mounted() {
  },
  methods: {
    more() {
      this.show_more = !this.show_more
    },
    changeSelect(val) {
      this.$emit('set-value', this.checkList_val, val)
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-wrapper {
  display: flex;

  .title-wrapper {
    width: 10%;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }

  .cond-wrapper {
    width: 85%;
    min-height: 40px;
    line-height: 40px;

    .cond-absolute.show {
      height: auto;
    }

    .cond-absolute {
      width: 100%;
      height: 40px;
      overflow: hidden;
    }

    .cond-absolute ::v-deep .el-radio, .cond-absolute ::v-deep .el-checkbox {
      line-height: 40px;
      margin-left: 10px;
      width: 100px;
    }
  }

  .more-wrapper {
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
  }
}
</style>
