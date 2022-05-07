<template>
  <div>
    <main class="et-main" style="overflow: scroll;height: 630px; ">
      <section id="tab-zpzzq" class="et-slide" style="min-height:100px;">
        <h3 style="margin-left:20px;">Android</h3>
        <div class="box2" style="overflow: scroll;height: 230px; ">
          <div class="cont">
            <el-table
              :data="listAndoriod"
              border
              style="width: 100%"
            >
              <el-table-column
                align="center"
                label="序号"
                type="index"
                width="50"
              />
              <el-table-column
                align="center"
                prop="appname"
                label="APP名称"
                width="200"
              />
              <el-table-column
                align="center"
                prop="ENTNAME"
                label="开发者/开发公司"
                width="100"
              />
              <el-table-column
                align="center"
                prop="atype"
                label="APP类别"
                width="200"
              />
              <el-table-column
                align="center"
                prop="language"
                label="语言"
                width="200"
              />
              <el-table-column
                align="center"
                prop="appversion"
                label="版本号"
                width="180"
              />
              <el-table-column
                align="center"
                prop="systemre"
                label="系统要求"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalAndoriod"
              @current-change="getListAndoriod"
            />
          </div>
        </div>
      </section>
      <section class="et-slide" style="min-height:100px;">
        <h3 style="margin-left:20px;">IOS</h3>
        <div class="box2" style="overflow: scroll;height: 240px; ">
          <div class="cont">
            <el-table
              :data="listIOS"
              border
              style="width: 100%"
            >
              <el-table-column
                align="center"
                label="序号"
                type="index"
                width="50"
              />
              <el-table-column
                align="center"
                prop="appname"
                label="APP名称"
                width="200"
              />
              <el-table-column
                align="center"
                prop="ENTNAME"
                label="开发者/开发公司"
                width="100"
              />
              <el-table-column
                align="center"
                prop="atype"
                label="APP类别"
                width="200"
              />
              <el-table-column
                align="center"
                prop="language"
                label="语言"
                width="200"
              />
              <el-table-column
                align="center"
                prop="appversion"
                label="版本号"
                width="180"
              />
              <el-table-column
                align="center"
                prop="systemre"
                label="系统要求"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalIOS"
              @current-change="getListIOS"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { getMainProducts } from '@/api/JudicialDecisions'

export default {
  name: 'ProductInfo',
  components: {},
  // filters: {},
  props: {},
  // provide() {
  //   return {}
  // },
  data() {
    return {
      queryAndoriod: {
        page: 1,
        pageSize: 10,
        xd_id: '',
        type: '',
        phone: ''
      },
      queryIOS: {
        page: 1,
        pageSize: 10,
        xd_id: '',
        type: '',
        phone: ''
      },
      listAndoriod: [],
      totalAndoriod: 0,
      listIOS: [],
      totalIOS: 0,
      showBtn: true,
      hasTop: false
    }
  },
  // inject: [],
  computed: {},
  // watch: {},
  mounted() {
    this.getListAndoriod(1)
    this.getListIOS(1)
  },
  methods: {
    getListAndoriod(val) {
      this.queryAndoriod.page = val
      this.queryAndoriod.type = 'andoriod'
      this.queryAndoriod.xd_id = localStorage.getItem('xd_id')
      this.queryAndoriod.phone = localStorage.getItem('phone')
      getMainProducts(this.queryAndoriod).then(res => {
        if (res.data.code === 200) {
          this.listAndoriod = res.data.result
          this.totalAndoriod = res.data.paging.total
        }
      })
    },
    getListIOS(val) {
      this.queryIOS.page = val
      this.queryIOS.type = 'ios'
      this.queryIOS.xd_id = localStorage.getItem('xd_id')
      this.queryIOS.phone = localStorage.getItem('phone')
      getMainProducts(this.queryIOS).then(res => {
        if (res.data.code === 200) {
          this.listIOS = res.data.result
          this.totalIOS = res.data.paging.total
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
