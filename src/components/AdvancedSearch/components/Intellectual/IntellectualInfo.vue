<template>
  <div>
    <main class="et-main" style="overflow: scroll;height: 600px; ">
      <section id="tab-sb" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">商标</h3>
        <div class="box2" style="overflow: scroll;height: 200px; ">
          <!-- 商标 -->
          <div class="cont">
            <el-table
              :data="getTmSearch"
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
                prop="Name"
                label="名称"
                width="150"
              />
              <el-table-column
                align="center"
                prop="RegNo"
                label="申请/注册号"
                width="150"
              />
              <el-table-column
                align="center"
                prop="AppDate"
                label="申请日期"
                width="150"
              />
              <el-table-column
                align="center"
                prop="Agent"
                label="代理/代办机构"
                width="250"
              />
              <el-table-column
                align="center"
                prop="ApplicantCn"
                label="申请人名称"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button type="primary" size="mini" @click="sbHandleDetail(scope.row.Id)">查看详情</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalgetTmSearch"
              @current-change="handleChangegetTmSearch"
            />
          </div>
        </div>
      </section>
      <section id="tab-zl" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">专利（{{ totalPatentV4Search }}）</h3>
        <div class="box2" style="overflow: scroll;height: 200px; ">
          <!-- 专利 -->
          <div class="cont">
            <el-table
              :data="PatentV4Search"
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
                prop="Title"
                label="标题"
                width="200"
              />
              <el-table-column
                align="center"
                prop="ApplicationNumber"
                label="申请号"
                width="150"
              />
              <el-table-column
                align="center"
                prop="ApplicationDate"
                label="申请日期"
                width="100"
              />
              <el-table-column
                align="center"
                prop="PublicationNumber"
                label="公开（公告）号"
                width="140"
              />
              <el-table-column
                align="center"
                prop="PublicationDate"
                label="公开（公告）日"
                width="200"
              />
              <el-table-column
                align="center"
                prop="InventorStringList"
                label="发明人"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/intellectualProperty/zlDetail/'+scope.row.Id">
                    <el-button
                      size="mini"
                    >查看详情
                    </el-button>
                  </router-link>
                </template>

              </el-table-column>
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalPatentV4Search"
              @current-change="handleChangePatentV4Search"
            />
          </div>
        </div>
      </section>
      <section id="tab-rjzzq" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">软件著作权</h3>
        <div class="box2" style="overflow: scroll;height: 200px; ">
          <!-- 软件著作权 -->
          <div class="cont">
            <el-table
              :data="SearchSoftwareCr"
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
                prop="Name"
                label="名称"
                width="200"
              />
              <el-table-column
                align="center"
                prop="ShortName"
                label="软件简称"
                width="150"
              />
              <el-table-column
                align="center"
                prop="RegisterNo"
                label="登记号"
                width="200"
              />
              <el-table-column
                align="center"
                prop="Owner"
                label="归属"
                width="200"
              />
              <el-table-column
                align="center"
                prop="RegisterAperDate"
                label="登记批准日期"
                width="180"
              />
              <el-table-column
                align="center"
                prop="VersionNo"
                label="版本号"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalSearchSoftwareCr"
              @current-change="handleChangeSearchSoftwareCr"
            />
          </div>
        </div>
      </section>
      <section id="tab-zpzzq" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">作品著作权</h3>
        <div class="box2" style="overflow: scroll;height: 200px; ">
          <!-- 作品著作权 -->
          <div class="cont">
            <el-table
              :data="SearchCopyRight"
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
                prop="Name"
                label="名称"
                width="200"
              />
              <el-table-column
                align="center"
                prop="Category"
                label="类型"
                width="100"
              />
              <el-table-column
                align="center"
                prop="RegisterNo"
                label="登记号"
                width="200"
              />
              <el-table-column
                align="center"
                prop="RegisterDate"
                label="登记日期"
                width="200"
              />
              <el-table-column
                align="center"
                prop="FinishDate"
                label="完成日期"
                width="180"
              />
              <el-table-column
                align="center"
                prop="PublishDate"
                label="首次发表日期"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalSearchCopyRight"
              @current-change="handleChangeSearchCopyRight"
            />
          </div>
        </div>
      </section>
      <section id="tab-qyzs" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">企业证书查询</h3>
        <div class="box2" style="overflow: scroll;height: 200px; ">
          <!-- 企业证书查询 -->
          <div class="cont">
            <el-table
              :data="SearchCertification"
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
                prop="Name"
                label="名称"
                width="200"
              />
              <el-table-column
                align="center"
                prop="Type"
                label="类型"
                width="130"
              />
              <el-table-column
                align="center"
                prop="No"
                label="证书编号"
                width="200"
              />
              <el-table-column
                align="center"
                prop="StartDate"
                label="发证日期"
                width="180"
              />
              <el-table-column
                align="center"
                prop="EndDate"
                label="截止日期"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/intellectualProperty/qyzsDetail/'+scope.row.Id">
                    <el-button
                      size="mini"
                    >查看详情
                    </el-button>
                  </router-link>
                </template>

              </el-table-column>
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalSearchCertification"
              @current-change="handleChangeSearchCertification"
            />
          </div>
        </div>
      </section>
    </main>
    <el-dialog
      :title="sbDetail.Name"
      :visible.sync="satpartyXinDialogVisible"
      z-index="100"
      width="50%">
      <div class="box">
        <table>
          <tr>
            <td style="width: 100px">公司名称：</td>
            <td>{{ sbDetail.Name }}}</td>
          </tr>
          <tr>
            <td>评级机构：</td>
            <td>{{ sbDetail.authority }}</td>
          </tr>
          <tr>
            <td>等级：</td>
            <td>{{ sbDetail.eventResult }}</td>
          </tr>
          <tr>
            <td>纳税人ID：</td>
            <td>{{ sbDetail.taxpayerId }}</td>
          </tr>
          <tr>
            <td>内容：</td>
            <td>{{ sbDetail.body }}</td>
          </tr>
        </table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="satpartyXinDialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getPatentV4Search,
  getSearchCertification,
  getSearchCopyRight,
  getSearchSoftwareCr,
  getTmSearch, getTmSearchDetail
} from '@/api/intellectualProperty'

export default {
  name: 'IntellectualInfo',
  data() {
    return {
      isFixed: false,
      scrollHeight: 258,
      entname: '',
      query: {
        entName: '',
        phone: '',
        page: 1,
        pageSize: 10
      },
      getTmSearch: [],
      totalgetTmSearch: 0,
      PatentV4Search: [],
      totalPatentV4Search: 0,
      SearchSoftwareCr: [],
      totalSearchSoftwareCr: 0,
      SearchCopyRight: [],
      totalSearchCopyRight: 0,
      SearchCertification: [],
      totalSearchCertification: 0,
      sbQuery: {
        entName: '',
        phone: '',
        pageNo: 1,
        pageSize: 10,
        id: ''
      },
      sbDetail: ''
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
    this.query.entName = this.entName = localStorage.getItem('entName')
    this.query.phone = localStorage.getItem('phone')

    // 商标
    getTmSearch(this.query).then(res => {
      // console.log(res)
      this.getTmSearch = res.data.result
      this.totalgetTmSearch = res.data.paging.total
    })
    // 专利
    getPatentV4Search(this.query).then(res => {
      // console.log(res)
      this.PatentV4Search = res.data.result
      this.totalPatentV4Search = res.data.paging.total
    })
    // 软件著作权
    getSearchSoftwareCr(this.query).then(res => {
      // console.log(res)
      this.SearchSoftwareCr = res.data.result
      this.totalSearchSoftwareCr = res.data.paging.total
    })
    // 作品著作权
    getSearchCopyRight(this.query).then(res => {
      // console.log(res)
      this.SearchCopyRight = res.data.result
      this.totalSearchCopyRight = res.data.paging.total
    })
    // 企业证书查询
    getSearchCertification(this.query).then(res => {
      // console.log(res)
      this.SearchCertification = res.data.result
      this.totalSearchCertification = res.data.paging.total
    })
  },
  methods: {
    // 吸顶效果
    initHeight() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      this.isFixed = scrollTop > this.scrollHeight
    },

    // 商标分页
    handleChangegetTmSearch(val) {
      this.getTmSearch = []
      this.query.page = val
      getTmSearch(this.query).then(res => {
        this.getTmSearch = res.data.result
      })
    },
    // 专利分页
    handleChangePatentV4Search(val) {
      this.PatentV4Search = []
      this.query.page = val
      getPatentV4Search(this.query).then(res => {
        this.PatentV4Search = res.data.result
      })
    },
    // 软件著作权分页
    handleChangeSearchSoftwareCr(val) {
      this.SearchSoftwareCr = []
      this.query.page = val
      getSearchSoftwareCr(this.query).then(res => {
        this.SearchSoftwareCr = res.data.result
      })
    },
    // 作品著作权分页
    handleChangeSearchCopyRight(val) {
      this.SearchCopyRight = []
      this.query.page = val
      getSearchCopyRight(this.query).then(res => {
        this.SearchCopyRight = res.data.result
      })
    },
    // 企业证书查询分页
    handleChangeSearchCertification(val) {
      this.SearchCertification = []
      this.query.page = val
      getSearchCertification(this.query).then(res => {
        this.SearchCertification = res.data.result
      })
    },
    sbHandleDetail(id) {
      this.sbQuery.entName = localStorage.getItem('entName')
      this.sbQuery.id = id
      this.sbQuery.phone = localStorage.getItem('phone')
      getTmSearchDetail(this.sbQuery).then(res => {
        this.sbDetail = res.data.result
      })
    }

  }
}
</script>

<style scoped>

</style>
