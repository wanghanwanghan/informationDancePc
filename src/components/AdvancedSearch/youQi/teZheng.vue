<template>
  <div>

    <div style="width: 99%;padding:0px 0.5% ">
      <el-form :inline="true" :model="formInline" class="user-search">
        <el-form-item label="企业特征分析时间">
          <el-date-picker
            v-model="formInline.created"
            :style="{width:'300px'}"
            value-format="yyyy-MM-dd"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="date_change"
          />
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        </el-form-item>
      </el-form>
      <el-table
        size="small"
        :data="listData"
        highlight-current-row
        border
        element-loading-text="拼命加载中"
        style="width: 100%;"
      >
        <el-table-column label="序号" type="index" width="50" align="center">
          <template slot-scope="scope">
            <span>{{ (pageparm.currentPage - 1) * pageparm.pageSize + scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="企业特征分析时间" width="150">
          <template slot-scope="scope">
            <div>{{
              scope.row.created_at|parseTime('{y}-{m}-{d} {h}:{i}')
            }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="ying_shou_gui_mo_cname" label="经营规模" :render-header="renderHeader" />
        <el-table-column prop="NIC_ID_CNAME" label="国标行业" :render-header="renderHeader" />
        <el-table-column prop="OPFROM" label="成立年限" :render-header="renderHeader" />
        <el-table-column prop="DOMDISTRICT_CNAME" label="经营地域" :render-header="renderHeader" />
        <el-table-column prop="company_nums" label="添加的企业数量" />
        <el-table-column align="center" label="操作" width="350">
          <template slot-scope="scope">
            <el-button size="mini" type="success" @click="showEntTu(scope.row.id)">查看用户画像</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页组件 -->
      <Pagination :child-msg="pageparm" @callFather="callFather" />
    </div>
  </div>
</template>

<script>
// import { analyzeHistory } from '../../../../api/userMG'
// import Pagination from '../../../../components/Pagination'
// import { parseTime } from '../../../../utils'

import { Pagination } from 'element-ui'
import { parseTime } from '@/utils'

export default {
  name: 'TeZheng',
  components: {
    Pagination
  },
  filters: {
    parseTime: parseTime
  },
  data() {
    return {
      formInline: {
        phone: localStorage.getItem('phone'),
        page: 1,
        pageSize: 10,
        created_at: '',
        created: ''
      },
      listData: [],
      pageparm: {
        currentPage: 1,
        pageSize: 10,
        total: 10
      }
    }
  },
  created() {
    this.search()
  },
  methods: {
    showEntTu(id) {
      this.$router.push({ path: '/system/souke/youQi/EnterpriseAnalysis?history_id=' + id })
    },
    search() {
      this.getConfig(this.formInline)
    },
    date_change() {
      this.formInline.created_at = this.formInline.created[0] + '|||' + this.formInline.created[1]
      this.getConfig(this.formInline)
    },
    getConfig(parameter) {
      this.loading = true
      // analyzeHistory(parameter)
      //   .then(res => {
      //     this.loading = false
      //     if (res.data.code !== 200) {
      //       this.$message({
      //         type: 'info',
      //         message: res.data.msg
      //       })
      //     } else {
      //       // console.log(res.data.result)
      //       this.listData = res.data.result
      //       this.listData.forEach((v, k) => {
      //         this.listData[k].feature_json = JSON.parse(v.feature_json)
      //       })
      //       // 分页赋值
      //       this.pageparm.currentPage = this.formInline.page
      //       this.pageparm.pageSize = this.formInline.pageSize
      //       this.pageparm.total = res.data.paging.total
      //     }
      //   })
    },
    // 分页插件事件
    callFather(parm) {
      this.formInline.page = parm.currentPage
      this.formInline.pageSize = parm.pageSize
      this.getConfig(this.formInline)
    },
    renderHeader(h, { column }) {
      return [
        column.label,
        h(
          'el-tooltip',
          {
            props: {
              content: (function() {
                return '优企特征分析是指根据您自行添加的企业群体，在经营规模、国标行业、成立年限、经营地域四个维度的分布占比采取最高者的组合'
              })(),
              placement: 'top'
            }
          },
          [
            h('span', {
              class: {
                'el-icon-question': true
              },
              style: {
                'color': '#aaa'
              }
            })
          ]
        )
      ]
    }
  }
}
</script>

<style scoped>

</style>
