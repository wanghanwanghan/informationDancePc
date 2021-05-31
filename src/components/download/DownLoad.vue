<template>
  <div>
    <div class="cont">
      <div class="panel panel-info myShadowFather" style="margin-top: 60px">
        <el-table :data="list" border fit highlight-current-row style="width: 100%;margin-top:20px;">

          <!-- <el-table-column width="100" align="center" label="序号">
            <template>
              <span>{{ index }}</span>
            </template>
          </el-table-column> -->

          <el-table-column
            align="center"
            type="index"
            label="序号"
            width="50"
          />

          <el-table-column width="350" align="center" label="公司名称">
            <template slot-scope="{row}">
              <span>{{ row.entName }}</span>
            </template>
          </el-table-column>

          <el-table-column width="180" align="center" label="创建时间">
            <template slot-scope="{row}">
              <span>{{ row.created_atWord }}</span>
            </template>
          </el-table-column>

          <el-table-column width="120" align="center" label="报告类型">
            <template slot-scope="{row}">
              <span v-if="row.type === 10 || row.type === 11">企业速览版</span>
              <span v-if="row.type === 30 || row.type === 31">企业商调版</span>
              <span v-if="row.type === 50 || row.type === 51">尽调版</span>
            </template>
          </el-table-column>

          <el-table-column width="120" align="center" label="报告格式">
            <template slot-scope="{row}">
              <span>{{ row.ext }}</span>
            </template>
          </el-table-column>

          <el-table-column width="120" align="center" label="状态">
            <template slot-scope="{row}">
              <span>{{ row.statusWord }}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button
                v-if="scope.row.status !== 2"
                size="mini"
                type="danger"
                :loading="loading"
              >生成中
                <span>（大概需要一分钟请耐心等待）</span>
              </el-button>
              <el-button
                v-if="scope.row.status === 2"
                size="mini"
                type="danger"
                @click="handleDelete(scope.row.filename,scope.row.ext)"
              >下载</el-button>
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
import { reportlist } from '@/api/article'
export default {
  name: 'DownLoad',
  data() {
    return {
      query: {
        phone: '',
        type: '255',
        page: 1,
        pageSize: 10
      },
      list: [],
      totalreportlist: 0,
      loading: true
    }
  },
  created() {
    this.query.phone = localStorage.getItem('phone')
    reportlist(this.query).then(res => {
      // console.log(res)
      this.list = res.data.result
      this.totalreportlist = res.data.paging.total
    })
  },
  methods: {
    handleDelete(e, val) {
    //   console.log(e, val)
      window.open(`https://api.meirixindong.com/Static/Report/${e}.${val}`, '_blank')
    },

    // 分页
    handleChangereportlist(val) {
      this.reportlist = []
      this.query.page = val
      this.query.phone = localStorage.getItem('phone')
      reportlist(this.query).then(res => {
        this.list = res.data.result
      })
    }
  }
}
</script>
<style lang="scss" scoped>

body .el-table th.gutter{
    display: table-cell!important;
}

body .el-table colgroup.gutter{
    display: table-cell!important;
}

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
