<template>
  <div class="box">
    <div>
      <section id="tab-zq" class="et-slide" style="min-height:100px;margin-top:50px;">
        <div class="box2">
          <div class="cont">
            <el-table
              :data="ymData"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                type="index"
              />
              <el-table-column
                prop="l_17"
                label="企业名称"
                width="250"
              />
              <el-table-column
                prop="l_16"
                label="统一社会信用代码"
                width="170"
              />
              <el-table-column
                prop="l_15"
                label="云服务器名称"
                width="70"
              />
              <el-table-column
                prop="l_14"
                label="云合作量级"
                width="60"
              />
              <el-table-column
                prop="l_13"
                label="用云比例"
                width="300"
              />
              <el-table-column
                prop="l_12"
                label="IDC"
              />
              <el-table-column
                prop="l_11"
                label="CDN"
              />
              <el-table-column
                prop="l_10"
                label="waf"
              />
              <el-table-column
                prop="l_9"
                label="高防"
              />
              <el-table-column
                prop="l_8"
                label="建站"
              />
              <el-table-column
                prop="l_7"
                label="云用量等级"
              />
              <el-table-column
                prop="l_6"
                label="用云数量"
              />
              <el-table-column
                prop="l_5"
                label="是否自建机房"
              />
              <el-table-column
                prop="l_4"
                label="联系人姓名"
              />
              <el-table-column
                prop="l_3"
                label="联系人职位"
              />
              <el-table-column
                prop="l_2"
                label="联系人岗位"
              />
              <el-table-column
                prop="l_1"
                label="手机号码"
              />
              <el-table-column
                prop="l_0"
                label="信息来源"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="total"
              @current-change="handleChange"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import json from './json.json'
export default {
  name: 'ShangyunIndex',
  // json:json,
  data() {
    return {
      query: {
        entName: '',
        phone: '',
        page: 1,
        pageSize: 10
      },
      ymData: [],
      total: 7000,
      list: json
    }
  },
  created() {
    console.log((this.query.page - 1) * this.query.pageSize)
    console.log(this.query.page * this.query.pageSize)
    this.ymData = this.list.slice((this.query.page - 1) * this.query.pageSize, this.query.page * this.query.pageSize)
  },
  methods: {
    handleChange(val) {
      this.query.page = val
      console.log((this.query.page - 1) * this.query.pageSize, this.query.page * this.query.pageSize)
      // getProductStandard(this.query).then(res => {
      this.ymData = this.list.slice((this.query.page - 1) * this.query.pageSize, this.query.page * this.query.pageSize)
      // })
    }
  }
}
</script>

<style scoped>

</style>
