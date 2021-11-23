<template>
  <div class="body-wrapper">
    <div class="logo-wrapper">
      <!--      <img class="logo" src="https://api.meirixindong.com/Static/Image/Image/xdzd_logo_big.jpeg" alt=""/>-->
      <div class="logo-text">智能评价服务系统</div>
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
            border
            style="width: 100%">
            <el-table-column
              label="优企信息包编号"
              prop="group"
              align="center">
            </el-table-column>
            <el-table-column
              label="优企群名称"
              prop="groupDesc"
              align="center">
            </el-table-column>
            <el-table-column
              label="企业数量"
              prop="num"
              align="center">
            </el-table-column>
            <el-table-column label="详情" align="center" width="250">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="getGroupRow(scope.$index, scope.row)">查看
                </el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="delGroupRow(scope.$index, scope.row)">删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div style="text-align: right;margin-top: 15px">
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
            border
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
              label="企业名称"
              prop="entName"
              align="center">
            </el-table-column>
            <el-table-column
              label="法人代表"
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
              width="80"
              align="center">
              <template slot-scope="props">
                <el-tag class="tag-wrapper-xx" type="danger" @click="jumpFengXianDetail(props.row.id)">
                  {{ props.row.fengxian }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column
              label="规模"
              prop="caiwu"
              width="80"
              align="center">
            </el-table-column>
            <el-table-column
              label="连接"
              width="80"
              align="center">
              <template slot-scope="props">
                <el-tag class="tag-wrapper-xx" type="success" @click="jumpLianXiDetail(props.row.id)">
                  {{ props.row.lianjie }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column
              label="备注"
              prop="remarks"
              align="center">
            </el-table-column>
            <el-table-column label="操作" align="center" width="160">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">查看
                </el-button>
                <el-button
                  size="mini"
                  type="primary"
                  @click="showEditRemarksDia(scope.$index, scope.row)">填备注
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div style="text-align: right;margin-top: 15px">
      <el-button type="warning" @click="runFengXian">风险扫描</el-button>
      <el-button type="warning" @click="runCaiWu">规模特征</el-button>
      <el-button type="warning" @click="runLianJie">连接优企</el-button>
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
      <el-dialog title="查看" :visible.sync="group_dialog_show_flag" width="30%">
        <el-form :model="group_form">
          <el-form-item label="优企信息包编号">
            <el-input v-model="group_form.group" autocomplete="off" disabled></el-input>
          </el-form-item>
          <el-form-item label="优企群名称">
            <el-input v-model="group_form.group_desc" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="group_dialog_show_flag = false">查看数据</el-button>
          <el-button type="primary" @click="editGroupDesc">确定修改</el-button>
        </span>
      </el-dialog>
      <el-dialog title="" :visible.sync="fengxianDia" width="80%">
        <el-table :data="showDiaData" border>
          <el-table-column property="title" label="标题" align="center"></el-table-column>
          <el-table-column property="desc" label="描述" align="center"></el-table-column>
          <el-table-column property="content" label="详情" align="center"></el-table-column>
          <el-table-column property="date" label="日期" align="center"></el-table-column>
          <el-table-column property="remarks" label="备注" align="center"></el-table-column>
          <el-table-column property="reservedFields" label="保留字段" align="center" width="80"></el-table-column>
        </el-table>
      </el-dialog>
      <el-dialog title="" :visible.sync="lianxiDia" width="80%">
        <el-table :data="showDiaData" border>
          <el-table-column property="duty" label="职位" align="center"></el-table-column>
          <el-table-column property="source" label="来源" align="center"></el-table-column>
          <el-table-column property="quhao" label="区号" align="center"></el-table-column>
          <el-table-column property="lianxi" label="号码" align="center"></el-table-column>
          <el-table-column property="lianxitype" label="联系方式" align="center"></el-table-column>
        </el-table>
      </el-dialog>
      <el-dialog title="修改备注" :visible.sync="show_edit_remarks_flag" width="30%">
        <el-form>
          <el-form-item label="">
            <el-input v-model="remarks.val" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="show_edit_remarks_flag = false">取消</el-button>
          <el-button type="primary" @click="editRemarks">确定</el-button>
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
      remarks: {
        table_index: '',
        group_id: '',
        val: ''
      },
      show_edit_remarks_flag: false,
      fengxianDia: false,
      lianxiDia: false,
      showDiaData: [],
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
    //console.log(localStorage.getItem('financesSearchIndex_search_cond'))
    //console.log(localStorage.getItem('financesSearchIndex_next_page_use_target'))
    this.group_search()
  },
  methods: {
    showEditRemarksDia(index, row) {
      this.show_edit_remarks_flag = true
      this.remarks.group_id = row.id
      this.remarks.val = ''
      this.remarks.table_index = index
    },
    editRemarks() {
      let obj = {
        id: this.remarks.group_id,
        remarks: this.remarks.val,
        phone: this.group_form.phone
      }
      console.log(obj)
      this.search_res.forEach(item => {
        if (item.id === this.remarks.group_id) {
          item.remarks = this.remarks.val
        }
      })
      req.post('api/v1/xd/editGroupRemarks', obj, localStorage.getItem('token')).then(res => {
        if (res.data.code === 200) {
          this.show_edit_remarks_flag = false
        }
      })
    },
    handleEdit(index, row) {
      let routeUrl = this.$router.resolve({
        path: './SearchList',
        query: {
          entName: row.entName
        }
      })
      window.open(routeUrl.href, '_blank')
    },
    jumpFengXianDetail(id) {
      this.fengxianDia = true
      this.search_res.forEach(item => {
        if (item.id === id) {
          this.showDiaData = item.fengxianDetail.length > 5 ? JSON.parse(item.fengxianDetail) : []
        }
      })
    },
    jumpLianXiDetail(id) {
      this.lianxiDia = true
      this.search_res.forEach(item => {
        if (item.id === id) {
          this.showDiaData = item.lianjieDetail.length > 5 ? JSON.parse(item.lianjieDetail) : []
        }
      })
    },
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
          location.reload()
        }
      })
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
    delGroupRow(index, row) {
      this.$confirm('确认要删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let obj = {
          group: row.group,
          userId: row.userId,
          phone: localStorage.getItem('phone')
        }
        console.log(obj)
        req.post('api/v1/xd/delUserGroupList', obj, localStorage.getItem('token')).then(res => {
          if (res.data.code === 200) {
            this.$message({
              type: 'success',
              message: '成功'
            })
            location.reload()
          }
        })
      }).catch(() => {
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

.search-res-wrapper ::v-deep .tag-wrapper-xx {
  cursor: pointer;
}

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

    .logo-text {
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 50px;
      font-weight: 800;
      color: rgb(64, 158, 255, 1);
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
