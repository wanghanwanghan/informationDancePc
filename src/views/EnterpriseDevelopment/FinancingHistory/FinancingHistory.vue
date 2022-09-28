<template>
  <div class="box">
    <!-- 融资历史 -->
    <section class="et-hero-tabs">
      <div :class="isFixed?'et-hero-tabs-containerf':'et-hero-tabs-container'">
        <!-- <div class="et-hero-tabs-container"> -->
        <a class="et-hero-tab" href="#tab-rzls">融资历史</a>
        <a class="et-hero-tab" href="#tab-dwtz">对外投资</a>
        <a class="et-hero-tab" href="#tab-ztb">招投标</a>
        <a class="et-hero-tab" href="#tab-gdxx">购地信息</a>
        <a class="et-hero-tab" href="#tab-tdgs">土地公示</a>
        <a class="et-hero-tab" href="#tab-tdzr">土地转让</a>
        <a class="et-hero-tab" href="#tab-zpxx">招聘信息</a>
        <a class="et-hero-tab" href="#tab-jzzgzs">建筑资格证书</a>
        <a class="et-hero-tab" href="#tab-jzgcxm">建筑工程项目</a>
        <a class="et-hero-tab" href="#tab-zq">债券</a>
        <span class="et-hero-tab-slider" />
      </div>
    </section>
    <main class="et-main">
      <section id="tab-rzls" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">融资历史</h3>
        <div class="box2">
          <!-- 融资历史 -->
          <div class="cont">
            <el-table
              :data="EntFinancing"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                type="index"
                align="center"
                width="50"
              />
              <el-table-column
                prop="ProductName"
                label="公司名字"
                align="center"
                width="300"
              />
              <el-table-column
                prop="Date"
                label="时间"
                align="center"
                width="140"
              />
              <el-table-column
                prop="Round"
                label="轮次"
                align="center"
                width="160"
              />
              <el-table-column
                prop="Amount"
                label="金额"
                align="center"
                width="180"
              />
              <el-table-column
                prop="Investment"
                align="center"
                label="投资方"
              />
            </el-table>
          </div>
          <!-- <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalEntFinancing"
              @current-change="handleChangeEntFinancing"
            />
          </div> -->
        </div>
      </section>
      <section id="tab-dwtz" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">对外投资</h3>
        <div class="box2">
          <!-- 对外投资 -->
          <div class="cont">
            <el-table
              :data="InvestmentAbroadInfo"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                type="index"
                align="center"
                width="50"
              />
              <el-table-column
                prop="ENTNAME"
                label="公司名字"
                align="center"
                width="260"
              />
              <el-table-column
                prop="ENTSTATUS"
                label="经营状态"
                align="center"
                width="140"
              />
              <el-table-column
                prop="REGCAP"
                label="注册资本"
                align="center"
                width="80"
              />
              <el-table-column
                prop="SUBCONAM"
                label="认缴出资额"
                align="center"
                width="100"
              />
              <el-table-column
                prop="CONRATIO"
                label="出资比例"
                align="center"
                width="100"
              />
              <el-table-column
                prop="CONCUR"
                align="center"
                label="币种"
                width="80"
              />
              <el-table-column
                prop="ESDATE"
                align="center"
                label="成立日期"
                width="100"
              />
              <el-table-column
                prop="SHXYDM"
                align="center"
                label="统一社会信用码"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalInvestmentAbroadInfo"
              @current-change="handleChangeInvestmentAbroadInfo"
            />
          </div>
        </div>
      </section>
      <section id="tab-ztb" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">招投标</h3>
        <div class="box2">
          <!-- 招投标 -->
          <div class="cont">
            <el-table
              :data="TenderSearch"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                align="center"
                type="index"
                width="50"
              />
              <el-table-column
                prop="Title"
                align="center"
                label="内容"
                width="520"
              />
              <el-table-column
                prop="Pubdate"
                align="center"
                label="日期"
                width="140"
              />
              <el-table-column
                prop="ProvinceName"
                align="center"
                label="省份地区"
                width="120"
              />
              <el-table-column
                prop="ChannelName"
                align="center"
                label="渠道"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/EnterpriseDevelopment/ztbDetail/'+scope.row.Id">
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
              :total="totalTenderSearch"
              @current-change="handleChangeTenderSearch"
            />
          </div>
        </div>
      </section>
      <section id="tab-gdxx" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">购地信息</h3>
        <div class="box2">
          <!-- 购地信息 -->
          <div class="cont">
            <el-table
              :data="landPurchaseList"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                align="center"
                type="index"
                width="50"
              />
              <el-table-column
                prop="Address"
                label="地址"
                align="center"
                width="300"
              />
              <!--              <el-table-column-->
              <!--                prop="AdminArea"-->
              <!--                label="行政区"-->
              <!--                align="center"-->
              <!--                width="140"-->
              <!--              />-->
              <el-table-column
                prop="LandUse"
                label="土地用途"
                align="center"
                width="300"
              />
              <el-table-column
                prop="Area"
                align="center"
                label="总面积（公顷）"
                width="140"
              />
              <el-table-column
                prop="PublishDate"
                align="center"
                label="签订日期"
                width="140"
              />
              <!--              <el-table-column-->
              <!--                prop="SupplyWay"-->
              <!--                align="center"-->
              <!--                label="供地方式"-->
              <!--              />-->
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link v-show="scope.row.LandPurId!='--'" :to="'/EnterpriseDevelopment/gdDetail/'+scope.row.LandPurId">
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
              :total="totallandPurchaseList"
              @current-change="handleChangelandPurchaseList"
            />
          </div>
        </div>
      </section>
      <section id="tab-tdgs" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">土地公示</h3>
        <div class="box2">
          <!-- 土地公示 -->
          <div class="cont">
            <el-table
              :data="landPublishList"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                align="center"
                type="index"
                width="50"
              />
              <el-table-column
                prop="Address"
                align="center"
                label="地址"
                width="240"
              />
              <el-table-column
                prop="AdminArea"
                align="center"
                label="行政区"
                width="240"
              />
              <el-table-column
                prop="PublishGov"
                align="center"
                label="发布机关"
                width="240"
              />
              <el-table-column
                prop="PublishDate"
                align="center"
                label="发布日期"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link v-show="scope.row.LandPubId!='--'" :to="'/EnterpriseDevelopment/tdgsDetail/'+scope.row.LandPubId">
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
              :total="totallandPublishList"
              @current-change="handleChangelandPublishList"
            />
          </div>
        </div>
      </section>
      <section id="tab-tdzr" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">土地转让</h3>
        <div class="box2">
          <!-- 土地转让 -->
          <div class="cont">
            <el-table
              :data="landTransferList"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                align="center"
                type="index"
                width="50"
              />
              <el-table-column
                prop="Address"
                align="center"
                label="地址"
                width="240"
              />
              <el-table-column
                prop="AdminArea"
                align="center"
                label="行政区"
                width="240"
              />
              <el-table-column
                prop="OldOwner.Name"
                align="center"
                label="原土地使用权人"
                width="240"
              />
              <el-table-column
                prop="NewOwner.Name"
                align="center"
                label="现土地使用权人"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/EnterpriseDevelopment/tdzrDetail/'+scope.row.Id">
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
              :total="totallandTransferList"
              @current-change="handleChangelandTransferList"
            />
          </div>
        </div>
      </section>
      <section id="tab-zpxx" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">招聘信息</h3>
        <div class="box2">
          <!-- 招聘信息 -->
          <div class="cont">
            <el-table
              :data="RecruitmentList"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                align="center"
                type="index"
                width="50"
              />
              <el-table-column
                prop="Title"
                align="center"
                label="岗位"
                width="160"
              />
              <el-table-column
                prop="Salary"
                align="center"
                label="薪资范围（元）"
                width="120"
              />
              <el-table-column
                prop="CompanyName"
                align="center"
                label="招聘单位"
                width="200"
              />
              <el-table-column
                prop="PublishDate"
                align="center"
                label="发布日期"
                width="120"
              />
              <el-table-column
                prop="Experience"
                align="center"
                label="工作经验"
                width="100"
              />
              <el-table-column
                prop="Education"
                align="center"
                label="学历要求"
                width="100"
              />
              <el-table-column
                prop="ProvinceDesc"
                align="center"
                label="办公地点"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/EnterpriseDevelopment/zpDetail/'+scope.row.Id">
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
              :total="totalRecruitmentList"
              @current-change="handleChangeRecruitmentList"
            />
          </div>
        </div>
      </section>
      <section id="tab-jzzgzs" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">建筑资格证书</h3>
        <div class="box2">
          <!-- 建筑资格证书 -->
          <div class="cont">
            <el-table
              :data="QualificationList"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                align="center"
                type="index"
                width="50"
              />
              <el-table-column
                prop="CertNameList"
                align="center"
                label="资质名称"
                width="250"
              >
                <template slot-scope="scope">
                  <div v-for="(v,k) in scope.row.CertNameList">{{ v }}</div>
                </template>
              </el-table-column>
              <el-table-column
                prop="CertNo"
                align="center"
                label="证书编号"
                width="150"
              />

              <el-table-column
                prop="SignDate"
                align="center"
                label="发证日期"
                width="130"
              />
              <el-table-column
                prop="ValidPeriod"
                align="center"
                label="有效期至"
                width="130"
              />
              <el-table-column
                prop="CertScope"
                align="center"
                label="资质范围"
                width="200"
              />
              <el-table-column
                prop="SignDept"
                align="center"
                label="发证机关"
              />
              <el-table-column
                prop="Category"
                align="center"
                label="资质类型"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalQualificationList"
              @current-change="handleChangeQualificationList"
            />
          </div>
        </div>
      </section>
      <section id="tab-jzgcxm" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">建筑工程项目</h3>
        <div class="box2">
          <!-- 建筑工程项目 -->
          <div class="cont">
            <el-table
              :data="BuildingProjectList"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                align="center"
                type="index"
                width="50"
              />
              <el-table-column
                prop="ProjectName"
                align="center"
                label="项目名称"
                width="200"
              />
              <el-table-column
                prop="ProjectType"
                align="center"
                label="项目类别"
                width="200"
              />
              <el-table-column
                prop="BuildUnitList[0].Name"
                align="center"
                label="建设单位"
                width="240"
              />
              <el-table-column
                prop="ProjectArea"
                align="center"
                label="所在地区"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/EnterpriseDevelopment/jzgcDetail/'+scope.row.ProjectId">
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
              :total="totalBuildingProjectList"
              @current-change="handleChangeBuildingProjectList"
            />
          </div>
        </div>
      </section>
      <section id="tab-zq" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">债券</h3>
        <div class="box2">
          <!-- 债券 -->
          <div class="cont">
            <el-table
              :data="BondList"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                align="center"
                type="index"
                width="50"
              />
              <el-table-column
                prop="ShortName"
                align="center"
                label="名称"
                width="200"
              />
              <el-table-column
                prop="BondCode"
                align="center"
                label="债券代码"
                width="180"
              />
              <el-table-column
                prop="BondType"
                align="center"
                label="债券类型"
                width="170"
              />
              <el-table-column
                prop="ReleaseDate"
                align="center"
                label="发行日期"
                width="200"
              />
              <el-table-column
                prop="LaunchDate"
                align="center"
                label="上市日期"
              />
              <el-table-column
                prop="MaturityYears"
                align="center"
                label="债券期限(年)"
              />
              <el-table-column
                prop="RemainYears"
                align="center"
                label="剩余期限(年)"
              />
              <el-table-column
                prop="IssueScale"
                align="center"
                label="发行规模(亿元)"
              />
              <!--              <el-table-column label="操作">-->
              <!--                <template slot-scope="scope">-->
              <!--                  <router-link :to="'/EnterpriseDevelopment/zqDetail/'+scope.row.Id">-->
              <!--                    <el-button-->
              <!--                      size="mini"-->
              <!--                    >查看详情-->
              <!--                    </el-button>-->
              <!--                  </router-link>-->
              <!--                </template>-->

              <!--              </el-table-column>-->
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalBondList"
              @current-change="handleChangeBondList"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import {
  getEntFinancing,
  getInvestmentAbroadInfo,
  getTenderSearch,
  getlandPurchaseList,
  getlandPublishList,
  getlandTransferList,
  getRecruitmentList,
  getQualificationList,
  getBuildingProjectList,
  getBondList,
  getEntScoreList
} from '@/api/EnterpriseDevelopment'

export default {
  data() {
    return {
      isFixed: false,
      scrollHeight: 258,
      query: {
        entName: '',
        phone: '',
        pageNo: 1,
        pageSize: 10
      },
      query1: {
        entName: '',
        phone: '',
        page: 1,
        pageSize: 10
      },
      EntFinancing: [],
      InvestmentAbroadInfo: [],
      totalInvestmentAbroadInfo: 0,
      TenderSearch: [],
      totalTenderSearch: 0,
      landPurchaseList: [],
      totallandPurchaseList: 0,
      landPublishList: [],
      totallandPublishList: 0,
      landTransferList: [],
      totallandTransferList: 0,
      RecruitmentList: [],
      totalRecruitmentList: 0,
      QualificationList: [],
      totalQualificationList: 0,
      BuildingProjectList: [],
      totalBuildingProjectList: 0,
      BondList: [],
      totalBondList: 0,
      EntScoreList: [],
      totalEntScoreList: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
    this.query.entName = this.query1.entName = this.entName = localStorage.getItem('entName')
    this.query.phone = this.query1.phone = this.phone = localStorage.getItem('phone')

    // 融资历史
    getEntFinancing(this.query).then(res => {
      // console.log(res)
      this.EntFinancing = res.data.result.Data
    })
    // 对外投资
    getInvestmentAbroadInfo(this.query).then(res => {
      // console.log(res)
      this.InvestmentAbroadInfo = res.data.result
      this.totalInvestmentAbroadInfo = res.data.paging.total
    })
    // 招投标
    getTenderSearch(this.query1).then(res => {
      // console.log(res)
      this.TenderSearch = res.data.result
      this.totalTenderSearch = res.data.paging.total
    })
    // 购地信息
    getlandPurchaseList(this.query1).then(res => {
      // console.log(res)
      this.landPurchaseList = res.data.result.Data
      this.totallandPurchaseList = res.data.paging.total
    })
    // 土地公示
    getlandPublishList(this.query1).then(res => {
      // console.log(res)
      if (res.data.result.Data != '--') {
        this.landPublishList = res.data.result.Data
        this.totallandPublishList = res.data.paging.total
      }
    })
    // 土地转让
    getlandTransferList(this.query1).then(res => {
      // console.log(res)
      if (res.data.result.Data != '--') {
        this.landTransferList = res.data.result.Data
        this.totallandTransferList = res.data.paging.total
      }
    })
    // 招聘信息
    getRecruitmentList(this.query1).then(res => {
      // console.log(res)
      this.RecruitmentList = res.data.result
      this.totalRecruitmentList = res.data.paging.total
    })
    // 建筑资格证书
    getQualificationList(this.query1).then(res => {
      // console.log(res)
      if (res.data.result.Data != '--') {
        this.QualificationList = res.data.result.Data
      }
      if (res.data.paging.total) {
        this.totalQualificationList = res.data.paging.total
      }
    })
    // 建筑工程项目
    getBuildingProjectList(this.query1).then(res => {
      // console.log(res)
      this.BuildingProjectList = res.data.result.Data
      this.totalBuildingProjectList = res.data.paging.total
    })
    // 债券
    getBondList(this.query1).then(res => {
      // console.log(res)
      if (res.data.result.Data != '--') {
        this.BondList = res.data.result.Data
      }
      if (res.data.paging.total) {
        this.totalBondList = res.data.paging.total
      }
    })
    // 竞争力
    getEntScoreList(this.query1).then(res => {
      this.EntScoreList = res.data.result
    })
  },
  methods: {
    // 吸顶效果
    initHeight() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      this.isFixed = scrollTop > this.scrollHeight
    },
    // 跳转详情
    // toDetail(e) {
    //   console.log(111)
    //   console.log(e)
    //   this.$router.push({ name: '/ztbDetail', params: { id: e }})
    // },

    // 融资历史分页
    handleChangeEntFinancing(val) {
      this.EntFinancing = []
      this.query.pageNo = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getEntFinancing(this.query).then(res => {
        this.EntFinancing = res.data.result.Data
      })
    },
    // 对外投资分页
    handleChangeInvestmentAbroadInfo(val) {
      this.InvestmentAbroadInfo = []
      this.query.pageNo = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getInvestmentAbroadInfo(this.query).then(res => {
        console.log(res)
        this.InvestmentAbroadInfo = res.data.result
      })
    },
    // 招投标分页
    handleChangeTenderSearch(val) {
      this.TenderSearch = []
      this.query1.pageNo = val
      this.query1.entName = this.entName
      this.query1.phone = this.phone
      getTenderSearch(this.query1).then(res => {
        this.TenderSearch = res.data.result
      })
    },
    // 购地信息分页
    handleChangelandPurchaseList(val) {
      this.landPurchaseList = []
      this.query1.pageNo = val
      this.query1.entName = this.entName
      this.query1.phone = this.phone
      getlandPurchaseList(this.query1).then(res => {
        this.landPurchaseList = res.data.result
      })
    },
    // 土地公示分页
    handleChangelandPublishList(val) {
      this.landPublishList = []
      this.query1.pageNo = val
      this.query1.entName = this.entName
      this.query1.phone = this.phone
      getlandPublishList(this.query1).then(res => {
        this.landPublishList = res.data.result.Data
      })
    },
    // 土地转让分页
    handleChangeRecruitmentList(val) {
      this.RecruitmentList = []
      this.query1.pageNo = val
      this.query1.entName = this.entName
      this.query1.phone = this.phone
      getRecruitmentList(this.query1).then(res => {
        this.RecruitmentList = res.data.result.Data
      })
    },
    // 招聘信息分页
    handleChangelandTransferList(val) {
      this.landTransferList = []
      this.query1.pageNo = val
      this.query1.entName = this.entName
      this.query1.phone = this.phone
      getlandTransferList(this.query1).then(res => {
        this.landTransferList = res.data.result
      })
    },
    // 建筑资格证书分页
    handleChangeQualificationList(val) {
      this.QualificationList = []
      this.query1.pageNo = val
      this.query1.entName = this.entName
      this.query1.phone = this.phone
      getQualificationList(this.query1).then(res => {
        this.QualificationList = res.data.result
      })
    },
    // 建筑工程项目分页
    handleChangeBuildingProjectList(val) {
      this.BuildingProjectList = []
      this.query1.pageNo = val
      this.query1.entName = this.entName
      this.query1.phone = this.phone
      getBuildingProjectList(this.query1).then(res => {
        this.BuildingProjectList = res.data.result.Data
      })
    },
    // 债券分页
    handleChangeBondList(val) {
      this.BondList = []
      this.query1.pageNo = val
      this.query1.entName = this.entName
      this.query1.phone = this.phone
      getBondList(this.query1).then(res => {
        this.BondList = res.data.result.Data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  .et-hero-tabs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // height: 100vh;
    width: 100%;
    height: 51px;
    position: relative;
    background: #eee;
    text-align: center;
    // padding: 0 2em;
    .et-hero-tabs-containerf {
      display: flex;
      flex-direction: row;
      /* position: absolute; */
      bottom: 0;
      width: 85%;
      height: 51px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      background: #fff;
      z-index: 10;
      position: fixed;
      top: 0px;

      a {
        text-decoration: none;
      }

      .et-hero-tab {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        color: #000;
        letter-spacing: 0.1rem;
        transition: all 0.5s ease;
        font-size: 14px;
      }

      .et-hero-tab:hover {
        color: white;
        background: rgba(102, 177, 241, 0.8);
        transition: all 0.5s ease;
      }

      .et-hero-tab-slider {
        position: absolute;
        bottom: 0;
        width: 0;
        height: 6px;
        background: #66B1F1;
        transition: left 0.3s ease;
      }
    }

    .et-hero-tabs-container {
      display: flex;
      flex-direction: row;
      /* position: absolute; */
      bottom: 0;
      width: 100%;
      height: 51px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      background: #fff;
      z-index: 10;

      a {
        text-decoration: none;
      }

      .et-hero-tab {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        color: #000;
        letter-spacing: 0.1rem;
        transition: all 0.5s ease;
        font-size: 14px;
      }

      .et-hero-tab:hover {
        color: white;
        background: rgba(102, 177, 241, 0.8);
        transition: all 0.5s ease;
      }

      .et-hero-tab-slider {
        position: absolute;
        bottom: 0;
        width: 0;
        height: 6px;
        background: #66B1F1;
        transition: left 0.3s ease;
      }
    }

    .et-hero-tabs-container--top {
      position: fixed;
      top: 0;
    }

    .et-main {
      .et-slide {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        position: relative;
        background: #eee;
        text-align: center;
        padding: 0 2em;

        .cont {
          width: 94%;
          // min-height:500px;
          margin: 40px;
          border: 1px solid #EBEBEB;
        }
      }
    }
  }
}

.box1 {
  width: 100%;

  .cont {
    width: 94%;
    min-height: 500px;
    margin: 40px;
    border: 1px solid #EBEBEB;

    tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;

      td {
        border-bottom: 1px solid #EBEBEB;
        border-right: 1px solid #EBEBEB;
        line-height: 1.5;
        padding: 8px 6px;
      }

      .type1 {
        width: 100px
      }

      .type2 {
        width: 200px
      }

      .type3 {
        // colspan:'4'
        border-right: none
      }

      .type4 {
        border-bottom: none;
      }
    }
  }

}

.box2 {
  .cont {
    width: 94%;
    // min-height:500px;
    margin: 40px;
    border: 1px solid #EBEBEB;
  }
}

.cont1 {
  padding: 40px 0 40px 400px;
  width: 94%;
  border: 1px solid #EBEBEB;
}
</style>

