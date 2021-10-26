<template>
  <div class="body-wrapper">
    <div class="logo-wrapper">
      <img class="logo" src="https://api.meirixindong.com/Static/Image/Image/xdzd_logo_big.jpeg" alt=""/>
    </div>
    <div class="content-wrapper">
      <div>
        <div class="search-res-wrapper">
          <el-table
            :data="group_res"
            v-loading="group_loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.6)"
            min-height="100"
            max-height="600"
            style="width: 100%">
            <el-table-column
              type="selection"
              width="55"
              align="center">
            </el-table-column>
            <el-table-column
              label="组名称"
              prop="group"
              align="center">
            </el-table-column>
            <el-table-column
              label="组描述"
              prop="groupDesc"
              align="center">
            </el-table-column>
            <el-table-column
              label="企业个数"
              prop="num"
              align="center">
            </el-table-column>
            <el-table-column label="详情" align="center" width="150">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="getGroupRow(scope.$index, scope.row)">查看
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div style="text-align: right">
          <el-pagination
            background
            layout="total, prev, pager, next"
            :total="group_paginate.total"
            :page-size="10"
            @current-change="pageChange">
          </el-pagination>
        </div>
      </div>
      <div style="text-align: center;line-height: 100px">
        <el-button style="width: 150px;" type="primary" @click="exportCsv">导出详情列表</el-button>
      </div>
      <div>
        <div class="search-res-wrapper">
          <el-table
            :data="search_res"
            v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.6)"
            min-height="100"
            max-height="600"
            style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="经营范围">
                    <span>{{ props.row.detail.OPSCOPE }}</span>
                  </el-form-item>
                  <el-form-item label="统一代码">
                    <span>{{ props.row.detail.UNISCID }}</span>
                  </el-form-item>
                  <el-form-item label="登记机关">
                    <span>{{ props.row.detail.REGORG }}</span>
                  </el-form-item>
                  <el-form-item label="行业">
                    <span>{{ props.row.detail.nic_id }}</span>
                  </el-form-item>
                  <el-form-item label="注册地">
                    <span>{{ props.row.detail.DOM }}</span>
                  </el-form-item>
                  <el-form-item label="地区">
                    <span>{{ props.row.detail.region_id }}</span>
                  </el-form-item>
                  <el-form-item label="网址">
                    <span>{{ props.row.detail.website }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column
              label="名称"
              prop="entName"
              align="center">
            </el-table-column>
            <el-table-column
              label="法人"
              prop="detail.faren"
              width="130"
              align="center">
            </el-table-column>
            <el-table-column
              label="状态"
              prop="ENTSTATUS"
              width="130"
              align="center">
            </el-table-column>
            <el-table-column
              label="类型"
              prop="detail.ENTTYPE"
              align="center">
            </el-table-column>
            <el-table-column
              label="成立日期"
              prop="ESDATE"
              width="100"
              align="center">
            </el-table-column>
            <el-table-column
              label="注册资本"
              prop="detail.REGCAP"
              width="180"
              align="center">
            </el-table-column>
            <el-table-column
              label="风险"
              prop="fengxian"
              width="76"
              align="center">
            </el-table-column>
            <el-table-column
              label="营收"
              prop="caiwu"
              width="76"
              align="center">
            </el-table-column>
            <el-table-column
              label="链接"
              prop="lianjie"
              width="76"
              align="center">
            </el-table-column>
            <el-table-column label="详情" align="center" width="150">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                >查看
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div style="text-align: right;margin-top: 15px">
      <el-button type="warning" @click="runFengXian">风险扫描</el-button>
      <el-button type="warning" @click="runCaiWu">营收标签</el-button>
      <el-button type="warning" @click="runLianJie">链接标签</el-button>
    </div>
    <div class="footer-wrapper">
      <el-pagination
        background
        layout="total, prev, pager, next"
        :total="paginate.total"
        :page-size="10"
        @current-change="pageChange">
      </el-pagination>
    </div>
    <div>
      <el-dialog
        title="查看"
        :visible.sync="group_dialog_show_flag"
        width="30%">

        <el-form :model="group_form">
          <el-form-item label="组名称">
            <el-input v-model="group_form.group" autocomplete="off" disabled></el-input>
          </el-form-item>
          <el-form-item label="组描述">
            <el-input v-model="group_form.group_desc" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
          <el-button @click="group_dialog_show_flag = false">查看数据</el-button>
          <el-button type="primary" @click="editGroupDesc">确定修改</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>

import req from '@/utils/req'

export default {
  name: 'FinancesSearchSecondPage',
  components: {},
  props: {},
  data() {
    return {
      group_form: {
        group: '',
        group_desc: '',
        phone: localStorage.getItem('phone')
      },
      group_dialog_show_flag: false,
      group_name: '',
      multipleSelection: [],
      group_loading: true,
      loading: false,
      group_res: [],
      group_cond: {
        page: 1,
        phone: localStorage.getItem('phone')
      },
      search_res: [],
      search_cond: {
        page: 1,
        phone: localStorage.getItem('phone')
      },
      group_paginate: {
        total: 0
      },
      paginate: {
        total: 0
      }
    }
  },
  computed: {},
  mounted() {
    console.log(localStorage.getItem('financesSearchIndex_search_cond'))
    console.log(localStorage.getItem('financesSearchIndex_next_page_use_target'))
    this.group_search()
  },
  methods: {
    exportCsv() {
      let obj = {
        group: this.group_name,
        phone: this.group_form.phone
      }
      req.post('api/v1/xd/financesSearchExportDetail', obj, localStorage.getItem('token')).then(res => {
        if (res.data.code === 200) {
          window.open('https://api.meirixindong.com/Static/Temp/' + res.data.result, '_blank')
        }
      })
    },
    editGroupDesc() {
      let obj = {
        groupDesc: this.group_form.group_desc,
        group: this.group_form.group,
        phone: this.group_form.phone
      }
      req.post('api/v1/xd/financesSearchEditGroupDesc', obj, localStorage.getItem('token')).then(res => {
        if (res.data.code === 200) {

        }
      })
      location.reload()
      this.group_dialog_show_flag = false
    },
    runFengXian() {
      this.$confirm('确定处理这批企业的 <风险> 标签吗', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '正在处理'
        })
        let obj = {
          group_name: this.group_name,
          phone: localStorage.getItem('phone')
        }
        req.post('api/v1/xd/financesSearchHandleFengXianLabel', obj, localStorage.getItem('token')).then(res => {
          if (res.data.code === 200) {

          }
        })
      }).catch(() => {
      })
    },
    runLianJie() {
      this.$confirm('确定处理这批企业的 <链接> 标签吗', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '正在处理'
        })
        let obj = {
          group_name: this.group_name,
          phone: localStorage.getItem('phone')
        }
        req.post('api/v1/xd/financesSearchHandleLianJieLabel', obj, localStorage.getItem('token')).then(res => {
          if (res.data.code === 200) {

          }
        })
      }).catch(() => {
      })
    },
    runCaiWu() {
      this.$confirm('确定处理这批企业的 <财务> 标签吗', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '正在处理'
        })
        let obj = {
          group_name: this.group_name,
          phone: localStorage.getItem('phone')
        }
        req.post('api/v1/xd/financesSearchHandleCaiWuLabel', obj, localStorage.getItem('token')).then(res => {
          if (res.data.code === 200) {

          }
        })
      }).catch(() => {
      })
    },
    group_search() {
      req.post('api/v1/xd/financesGroupSearch', this.group_cond, localStorage.getItem('token')).then(res => {
        if (res.data.code === 200) {
          this.group_res = res.data.result
          this.group_paginate.total = res.data.paging.total
          this.group_loading = false
        }
      })
    },
    getGroupRow(index, row) {
      this.loading = true
      this.group_name = row.group
      this.group_form.group = row.group
      this.group_form.group_desc = row.groupDesc
      this.group_dialog_show_flag = true
      let obj = {
        page: 1,
        phone: localStorage.getItem('phone'),
        group_name: row.group
      }
      req.post('api/v1/xd/financesGroupSearch', obj, localStorage.getItem('token')).then(res => {
        if (res.data.code === 200) {
          this.search_res = res.data.result
          this.paginate.total = res.data.paging.total
          this.loading = false
        }
      })
    },
    pageChange(index) {
      this.loading = true
      let obj = {
        page: index,
        phone: localStorage.getItem('phone'),
        group_name: this.group_name
      }
      req.post('api/v1/xd/financesGroupSearch', obj, localStorage.getItem('token')).then(res => {
        if (res.data.code === 200) {
          this.search_res = res.data.result
          this.paginate.total = res.data.paging.total
          this.loading = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-table-expand {
  font-size: 0;
}

.demo-table-expand ::v-deep label {
  width: 90px;
  color: #409EFF;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
}

.body-wrapper {
  font-size: 14px;
  margin: 0 auto;
  width: 95%;

  .logo-wrapper {
    text-align: center;

    .logo {
      width: 450px;
      height: 130px;
    }
  }

  .content-wrapper {
    .search-table {
      width: 100%;

      .bg-color {
        font-weight: 700;
        color: #409EFF !important;
      }

      .search-table-td {
        width: 24%;
        color: #6f6f79;
      }

      .search-table-input {
        width: 100%;
      }

      .search-res-wrapper {

      }
    }
  }

  .footer-wrapper {
    margin-top: 15px;
    text-align: right;
  }
}
</style>
