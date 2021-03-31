<template>
  <div>
    <div class="cont">
      <el-page-header style="margin-top:60px" content="审核进度" @back="goBack" />
      <el-tabs type="border-card" style="margin-top:20px" @tab-click="toCwzc">
        <el-tab-pane label="财务资产授权书">
          <div class="panel panel-info myShadowFather" style="margin-top: 60px">
            <el-table :data="Rlist" border fit highlight-current-row style="width: 100%;margin-top:20px;">

              <el-table-column width="50" align="center" label="序号" type="index" />

              <el-table-column width="250" align="center" label="上传账户">
                <template slot-scope="{row}">
                  <span>{{ row.phone }}</span>
                </template>
              </el-table-column>

              <el-table-column width="200" align="center" label="查询公司">
                <template slot-scope="{row}">
                  <span>{{ row.entName }}</span>
                </template>
              </el-table-column>

              <el-table-column width="350" align="center" label="上传图片">
                <template slot-scope="{row}">
                  <span>{{ row.moduleName }}</span>
                  <el-image
                    style="width: 100px; height: 100px"
                    :src="'https://api.meirixindong.com/Static/Image/AuthBook/'+row.name"
                    :preview-src-list="srcListt"
                  />
                </template>
              </el-table-column>

              <el-table-column width="200" align="center" label="审核状态">
                <template slot-scope="{row}">
                  <span>{{ row.statusWord }}</span>
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
        </el-tab-pane>
        <el-tab-pane label="深度报告授权书">
          <div class="panel panel-info myShadowFather" style="margin-top: 60px">
            <el-table :data="Rlist" border fit highlight-current-row style="width: 100%;margin-top:20px;">

              <el-table-column width="50" align="center" label="序号" type="index" />

              <el-table-column width="250" align="center" label="上传账户">
                <template slot-scope="{row}">
                  <span>{{ row.phone }}</span>
                </template>
              </el-table-column>

              <el-table-column width="200" align="center" label="查询公司">
                <template slot-scope="{row}">
                  <span>{{ row.entName }}</span>
                </template>
              </el-table-column>

              <el-table-column width="350" align="center" label="上传图片">
                <template slot-scope="{row}">
                  <span>{{ row.moduleName }}</span>
                  <el-image
                    style="width: 100px; height: 100px"
                    :src="'https://api.meirixindong.com/Static/Image/AuthBook/'+row.name"
                    :preview-src-list="srcListt"
                  />
                </template>
              </el-table-column>

              <el-table-column width="200" align="center" label="审核状态">
                <template slot-scope="{row}">
                  <span>{{ row.statusWord }}</span>
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
              :total="totalreportlist1"
              @current-change="handleChangereportlist1"
            />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import { authBookD } from '@/api/article'
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
        pageSize: 10,
        type: ''
      },
      Rlist: [],
      totalreportlist: 0,
      loading: true,
      srcList: [],
      srcListt: [],
      totalreportlist1: 0
    }
  },
  created() {
    this.query.phone = localStorage.getItem('phone')
    this.query.type = 1
    authBookD(this.query).then(res => {
      // console.log(res)
      this.Rlist = res.data.result
      this.totalreportlist = res.data.paging.total
      for (var i = 0; i < this.Rlist.length; i++) {
        // console.log(this.Rlist[i].name)
        if (this.Rlist[i].name.length > 36) {
          const srcListS = this.Rlist[i].name
          this.srcList = srcListS.split[',']
          for (var t = 0; t < this.srcList.length; t++) {
            this.srcListt.push('https://api.meirixindong.com/Static/Image/AuthBook/' + this.srcList[t])
          }
        } else {
          this.srcList.push(this.Rlist[i].name)
          this.srcListt.push('https://api.meirixindong.com/Static/Image/AuthBook/' + this.srcList[0])
        }
      }
    })
  },
  methods: {
    toCwzc(tab, event) {
      // console.log(tab, event)
      if (tab.label === '深度报告授权书') {
        // console.log(123)
        this.query.phone = localStorage.getItem('phone')
        this.query.type = 2
        authBookD(this.query).then(res => {
          // console.log(res)
          this.Rlist = res.data.result
          this.totalreportlist1 = res.data.paging.total
          for (var i = 0; i < this.Rlist.length; i++) {
            // console.log(this.Rlist[i].name)
            if (this.Rlist[i].name.length > 36) {
              const srcListS = this.Rlist[i].name
              this.srcList = srcListS.split[',']
              for (var t = 0; t < this.srcList.length; t++) {
                this.srcListt.push('https://api.meirixindong.com/Static/Image/AuthBook/' + this.srcList[t])
              }
            } else {
              this.srcList.push(this.Rlist[i].name)
              this.srcListt.push('https://api.meirixindong.com/Static/Image/AuthBook/' + this.srcList[0])
            }
          }
        })
      }
      if (tab.label === '财务资产授权书') {
        // console.log(456)
        this.query.phone = localStorage.getItem('phone')
        this.query.type = 1
        authBookD(this.query).then(res => {
          // console.log(res)
          this.Rlist = res.data.result
          this.totalreportlist = res.data.paging.total
          for (var i = 0; i < this.Rlist.length; i++) {
            // console.log(this.Rlist[i].name)
            if (this.Rlist[i].name.length > 36) {
              const srcListS = this.Rlist[i].name
              this.srcList = srcListS.split[',']
              for (var t = 0; t < this.srcList.length; t++) {
                this.srcListt.push('https://api.meirixindong.com/Static/Image/AuthBook/' + this.srcList[t])
              }
            } else {
              this.srcList.push(this.Rlist[i].name)
              this.srcListt.push('https://api.meirixindong.com/Static/Image/AuthBook/' + this.srcList[0])
            }
          }
        })
      }
    },
    // 分页
    handleChangereportlist(val) {
      this.Rlist = []
      this.query.page = val
      this.query.type = 1
      this.query.phone = localStorage.getItem('phone')
      authBookD(this.query).then(res => {
        this.Rlist = res.data.result.list
      })
    },
    handleChangereportlist1(val) {
      this.Rlist = []
      this.query.page = val
      this.query.type = 2
      this.query.phone = localStorage.getItem('phone')
      authBookD(this.query).then(res => {
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
