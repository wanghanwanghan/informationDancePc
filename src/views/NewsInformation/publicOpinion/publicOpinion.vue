<template>
  <div class="box">
    <!-- 新闻舆情 -->
    <section class="et-hero-tabs">
      <div :class="isFixed?'et-hero-tabs-containerf':'et-hero-tabs-container'">
        <!-- <div class="et-hero-tabs-container"> -->
        <a class="et-hero-tab" href="#tab-xwyq">新闻舆情</a>
        <a class="et-hero-tab" href="#tab-wzxx">网站信息</a>
        <a class="et-hero-tab" href="#tab-wb">微博</a>
        <span class="et-hero-tab-slider" />
      </div>
    </section>
    <main class="et-main">
      <section id="tab-xwyq" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">新闻舆情</h3>
        <div class="box2">
          <!-- 新闻舆情 -->
          <div class="cont">
            <el-table
              :data="SearchNews"
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
                prop="Title"
                label="标题"
                width="360"
              />
              <el-table-column
                align="center"
                prop="NewsTags"
                label="标签"
                width="300"
              />
              <el-table-column
                align="center"
                prop="Source"
                label="来源"
                width="150"
              />
              <el-table-column
                align="center"
                prop="PublishTime"
                label="时间"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/NewsInformation/xwyqDetail/'+scope.row.NewsId">
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
              :total="totalSearchNews"
              @current-change="handleChangeSearchNews"
            />
          </div>
        </div>
      </section>
      <section id="tab-wzxx" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">网站信息</h3>
        <div class="box2">
          <!-- 网站信息 -->
          <div class="cont">
            <el-table
              :data="CompanyWebSite"
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
                prop="HomeSite"
                label="网址"
                width="200"
              />
              <el-table-column
                align="center"
                prop="Title"
                label="网站名称"
                width="250"
              />
              <el-table-column
                align="center"
                prop="SDate"
                label="审核时间"
                width="150"
              />
              <el-table-column
                align="center"
                prop="BeiAn"
                label="备案号"
                width="200"
              />
              <el-table-column
                align="center"
                prop="YuMing"
                label="域名"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalCompanyWebSite"
              @current-change="handleChangeCompanyWebSite"
            />
          </div>
        </div>
      </section>
      <section id="tab-wb" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">微博</h3>
        <div class="box2">
          <!-- 微博 -->
          <div class="cont">
            <el-table
              :data="MicroblogGetList"
              border
              style="width: 100%"
            >
              <el-table-column
                align="center"
                label="序号"
                type="index"
                width="50"
              />
              <!-- <image class="img" src="{{item.ImageUrl}}"></image> -->
              <el-table-column
                align="center"
                prop="Name"
                label="名称"
                width="160"
              />
              <el-table-column
                align="center"
                prop="Description"
                label="描述"
                width="250"
              />
              <el-table-column
                align="center"
                prop="DetailUrl"
                label="详情连接"
                width="250"
              />
              <el-table-column
                align="center"
                prop="Tags"
                label="标签"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalMicroblogGetList"
              @current-change="handleChangeMicroblogGetList"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import { getSearchNews, getCompanyWebSite, getMicroblogGetList } from '@/api/NewsInformation'
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
      SearchNews: [],
      totalSearchNews: 0,
      CompanyWebSite: [],
      totalCompanyWebSite: 0,
      MicroblogGetList: [],
      totalMicroblogGetList: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
    this.query.entName = this.entName = localStorage.getItem('entName')
    this.query.phone = localStorage.getItem('phone')

    // 新闻舆情
    getSearchNews(this.query).then(res => {
      // console.log(res)
      this.SearchNews = res.data.result
      this.totalSearchNews = res.data.paging.total
    })
    // 网站信息
    getCompanyWebSite(this.query).then(res => {
      // console.log(res)
      this.CompanyWebSite = res.data.result
      this.totalCompanyWebSite = res.data.paging.total
    })
    // 微博
    getMicroblogGetList(this.query).then(res => {
      // console.log(res)
      this.MicroblogGetList = res.data.result
      this.totalMicroblogGetList = res.data.paging.total
    })
  },
  methods: {
    // 吸顶效果
    initHeight() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      this.isFixed = scrollTop > this.scrollHeight
    },

    // 新闻舆情分页
    handleChangeSearchNews(val) {
      this.SearchNews = []
      this.query.page = val
      getSearchNews(this.query).then(res => {
        this.SearchNews = res.data.result
      })
    },
    // 网站信息分页
    handleChangeCompanyWebSite(val) {
      this.CompanyWebSite = []
      this.query.page = val
      getCompanyWebSite(this.query).then(res => {
        this.CompanyWebSite = res.data.result
      })
    },
    // 微博分页
    handleChangeMicroblogGetList(val) {
      this.MicroblogGetList = []
      this.query.page = val
      getMicroblogGetList(this.query).then(res => {
        this.MicroblogGetList = res.data.result
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

