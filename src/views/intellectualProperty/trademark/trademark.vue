<template>
  <div class="box">
    <!-- 商标 -->
    <section class="et-hero-tabs">
      <div :class="isFixed?'et-hero-tabs-containerf':'et-hero-tabs-container'">
        <!-- <div class="et-hero-tabs-container"> -->
        <a class="et-hero-tab" href="#tab-sb">商标</a>
        <a class="et-hero-tab" href="#tab-zl">专利</a>
        <a class="et-hero-tab" href="#tab-rjzzq">软件著作权</a>
        <a class="et-hero-tab" href="#tab-zpzzq">作品著作权</a>
        <a class="et-hero-tab" href="#tab-qyzs">企业证书查询</a>
        <span class="et-hero-tab-slider" />
      </div>
    </section>
    <main class="et-main">
      <section id="tab-sb" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">商标</h3>
        <div class="box2">
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
              <!-- <el-table-column
                width="400"
              >
                <img :src="getTmSearch.ImageUrl" alt="">
                <el-table-column /> -->
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
                  <router-link :to="'/intellectualProperty/sbDetail/'+scope.row.Id">
                    <el-button
                      size="mini"
                    >查看详情</el-button>
                  </router-link>
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
        <div class="box2">
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
                    >查看详情</el-button>
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
        <div class="box2">
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
        <div class="box2">
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
        <div class="box2">
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
                    >查看详情</el-button>
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
  </div>
</template>
<script>
import { getTmSearch, getPatentV4Search, getSearchSoftwareCr, getSearchCopyRight, getSearchCertification } from '@/api/intellectualProperty'
export default {
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
      totalSearchCertification: 0
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
    }

  }
}
</script>
<style lang="scss" scoped>
.box{
  .et-hero-tabs{
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
    .et-hero-tabs-containerf{
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
    .et-main{
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
        .cont{
          width:94%;
          // min-height:500px;
          margin:40px;
          border:1px solid #EBEBEB;
        }
      }
    }
  }
}
.box1{
  width: 100%;
  .cont{
    width:94%;
    min-height:500px;
    margin:40px;
    border:1px solid #EBEBEB;
      tr{
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
      td{
        border-bottom: 1px solid #EBEBEB;
        border-right: 1px solid #EBEBEB;
        line-height: 1.5;
        padding: 8px 6px;
      }
      .type1{
        width:100px
      }
      .type2{
        width:200px
      }
      .type3{
        // colspan:'4'
        border-right:none
      }
      .type4{
        border-bottom: none;
      }
    }
  }

}
.box2{
  .cont{
    width:94%;
    // min-height:500px;
    margin:40px;
    border:1px solid #EBEBEB;
  }
}
.cont1{
  padding:40px 0 40px 400px;
  width:94%;
  border:1px solid #EBEBEB;
}
</style>

