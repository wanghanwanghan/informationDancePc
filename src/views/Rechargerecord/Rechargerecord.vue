<template>
  <div>
    <div class="cont">

      <div class="panel panel-info myShadowFather" style="margin-top: 60px">
        <el-page-header content="充值记录" @back="goBack" />
        <el-table :data="Rlist" border fit highlight-current-row style="width: 100%;margin-top:20px;">

          <el-table-column width="250" align="center" label="订单号">
            <template slot-scope="{row}">
              <span>{{ row.orderId }}</span>
            </template>
          </el-table-column>

          <el-table-column width="200" align="center" label="充值金额">
            <template slot-scope="{row}">
              <span>{{ row.payMoney }}元</span>
            </template>
          </el-table-column>

          <el-table-column width="200" align="center" label="订单状态">
            <template slot-scope="{row}">
              <span>{{ row.orderStatus }}</span>
            </template>
          </el-table-column>

          <el-table-column width="350" align="center" label="充值方式">
            <template slot-scope="{row}">
              <span>{{ row.payWay }}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="创建时间">
            <template slot-scope="{row}">
              <span>{{ row.created_at | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="totalreportlist"
          @current-change="handleChangereportlist"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { list } from '@/api/article'
import { parseTime } from '@/utils/index'
export default {
  name: 'DownLoad',
  filters: {
    parseTime: parseTime
  },
  data() {
    return {
      query: {
        phone: '',
        page: 1,
        pageSize: 10
      },
      Rlist: [],
      totalreportlist: 0,
      loading: true
    }
  },
  created() {
    this.query.phone = localStorage.getItem('phone')
    list(this.query).then(res => {
      // console.log(res)
      this.Rlist = res.data.result.list
      this.totalreportlist = res.data.paging.total
    })
  },
  methods: {

    // 分页
    handleChangereportlist(val) {
      this.Rlist = []
      this.query.page = val
      this.query.phone = localStorage.getItem('phone')
      list(this.query).then(res => {
        this.Rlist = res.data.result.list
      })
    },

    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>

.cont{
  width:90%;
  margin: auto;
  .img{
    text-align: center;
    padding: 40px 0;
    img{
      display: block;
      width: 300px;
      height: 120px;
      margin: auto;
    }
  }
}
</style>
