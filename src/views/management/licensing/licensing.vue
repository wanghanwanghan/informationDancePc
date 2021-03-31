<template>
  <div class="box">
    <!-- 行政许可 -->
    <section class="et-hero-tabs">
      <div :class="isFixed?'et-hero-tabs-containerf':'et-hero-tabs-container'">
        <!-- <div class="et-hero-tabs-container"> -->
        <a class="et-hero-tab" href="#tab-xzxk">行政许可</a>
        <a class="et-hero-tab" href="#tab-xzcf">行政处罚</a>
        <a class="et-hero-tab" href="#tab-hbcf">环保处罚</a>
        <a class="et-hero-tab" href="#tab-zdjkmd">环保监控名单</a>
        <a class="et-hero-tab" href="#tab-hbqyzc">环保企业监测</a>
        <a class="et-hero-tab" href="#tab-hpsj">环评公示</a>
        <a class="et-hero-tab" href="#tab-hgqy">海关企业</a>
        <a class="et-hero-tab" href="#tab-hgxk">海关许可</a>
        <a class="et-hero-tab" href="#tab-hgxy">海关信用</a>
        <a class="et-hero-tab" href="#tab-hgcf">海关处罚</a>
        <span class="et-hero-tab-slider" />
      </div>
    </section>
    <main class="et-main">
      <section id="tab-xzxk" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">行政许可</h3>
        <div class="box2">
          <!-- 行政许可 -->
          <div class="cont">
            <el-table
              :data="AdministrativeLicenseList"
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
                prop="CaseNo"
                label="决定文书号"
                width="300"
              />
              <el-table-column
                align="center"
                prop="Ownername"
                label="公司名称"
                width="300"
              />
              <el-table-column
                align="center"
                prop="LianDate"
                label="决定日期"
                width="150"
              />
              <el-table-column
                align="center"
                prop="Province"
                label="地域"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/management/xzxkDetail/'+scope.row.Id">
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
              :total="totalAdministrativeLicenseList"
              @current-change="handleChangeAdministrativeLicenseList"
            />
          </div>
        </div>
      </section>
      <section id="tab-xzcf" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">行政处罚</h3>
        <div class="box2">
          <!-- 行政处罚 -->
          <div class="cont">
            <el-table
              :data="AdministrativePenaltyList"
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
                prop="CaseNo"
                label="决定文书号"
                width="280"
              />
              <el-table-column
                align="center"
                prop="OwnerName"
                label="处罚公司"
                width="250"
              />
              <el-table-column
                align="center"
                prop="CaseReason"
                label="处罚是由"
                width="250"
              />
              <el-table-column
                align="center"
                prop="LianDate"
                label="处罚日期"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/management/xzcfDetail/'+scope.row.Id">
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
              :total="totalAdministrativePenaltyList"
              @current-change="handleChangeAdministrativePenaltyList"
            />
          </div>
        </div>
      </section>
      <section id="tab-hbcf" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">环保处罚</h3>
        <div class="box2">
          <!-- 环保处罚 -->
          <div class="cont">
            <el-table
              :data="Epbparty"
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
                prop="title"
                label="标题"
                width="450"
              />
              <el-table-column
                align="center"
                prop="sortTimeString"
                label="处罚日期"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalEpbparty"
              @current-change="handleChangeEpbparty"
            />
          </div>
        </div>
      </section>
      <section id="tab-zdjkmd" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">重点监控企业名单</h3>
        <div class="box2">
          <!-- 重点监控企业名单 -->
          <div class="cont">
            <el-table
              :data="EpbpartyJkqy"
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
                prop="title"
                label="标题"
                width="800"
              />
              <el-table-column
                align="center"
                prop="sortTimeString"
                label="处罚日期"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalEpbpartyJkqy"
              @current-change="handleChangeEpbpartyJkqy"
            />
          </div>
        </div>
      </section>
      <section id="tab-hbqyzc" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">环保企业自行监测结果</h3>
        <div class="box2">
          <!-- 环保企业自行监测结果 -->
          <div class="cont">
            <el-table
              :data="EpbpartyZxjc"
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
                prop="title"
                label="公司名称"
                width="800"
              />
              <el-table-column
                align="center"
                prop="sortTimeString"
                label="自测时间"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalEpbpartyZxjc"
              @current-change="handleChangeEpbpartyZxjc"
            />
          </div>
        </div>
      </section>
      <section id="tab-hpsj" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">环评公示数据</h3>
        <div class="box2">
          <!-- 环评公示数据 -->
          <div class="cont">
            <el-table
              :data="EpbpartyHuanping"
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
                prop="title"
                label="环评名称"
                width="800"
              />
              <el-table-column
                align="center"
                prop="sortTimeString"
                label="环评公示时间"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalEpbpartyHuanping"
              @current-change="handleChangeEpbpartyHuanping"
            />
          </div>
        </div>
      </section>
      <section id="tab-hgqy" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">海关企业</h3>
        <div class="box2">
          <!-- 海关企业 -->
          <div class="cont">
            <el-table
              :data="CustomQy"
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
                prop="title"
                label="标题"
                width="400"
              />
              <el-table-column
                align="center"
                prop="body"
                label="内容"
                width="400"
              />
              <el-table-column
                align="center"
                prop="sortTimeString"
                label="日期"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalCustomQy"
              @current-change="handleChangeCustomQy"
            />
          </div>
        </div>
      </section>
      <section id="tab-hgxk" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">海关许可</h3>
        <div class="box2">
          <!-- 海关许可 -->
          <div class="cont">
            <el-table
              :data="CustomXuke"
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
                prop="title"
                label="许可范围"
                width="400"
              />
              <el-table-column
                align="center"
                prop="body"
                label="说明"
                width="400"
              />
              <el-table-column
                align="center"
                prop="sortTimeString"
                label="许可时间"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalCustomXuke"
              @current-change="handleChangeCustomXuke"
            />
          </div>
        </div>
      </section>
      <section id="tab-hgxy" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">海关信用</h3>
        <div class="box2">
          <!-- 海关信用 -->
          <div class="cont">
            <el-table
              :data="CustomCredit"
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
                prop="title"
                label="标题"
                width="400"
              />
              <el-table-column
                align="center"
                prop="body"
                label="内容"
                width="400"
              />
              <el-table-column
                align="center"
                prop="sortTimeString"
                label="日期"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalCustomCredit"
              @current-change="handleChangeCustomCredit"
            />
          </div>
        </div>
      </section>
      <section id="tab-hgcf" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">海关处罚</h3>
        <div class="box2">
          <!-- 海关处罚 -->
          <div class="cont">
            <el-table
              :data="CustomPunish"
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
                prop="title"
                label="标题"
                width="400"
              />
              <el-table-column
                align="center"
                prop="body"
                label="内容"
                width="400"
              />
              <el-table-column
                align="center"
                prop="sortTimeString"
                label="日期"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalCustomPunish"
              @current-change="handleChangeCustomPunish"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import {
  getAdministrativeLicenseList,
  getAdministrativePenaltyList,
  getEpbparty,
  getEpbpartyJkqy,
  getEpbpartyZxjc,
  getEpbpartyHuanping,
  getCustomQy,
  getCustomXuke,
  getCustomCredit,
  getCustomPunish
} from '@/api/management'
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
      AdministrativeLicenseList: [],
      totalAdministrativeLicenseList: 0,
      AdministrativePenaltyList: [],
      totalAdministrativePenaltyList: 0,
      Epbparty: [],
      totalEpbparty: 0,
      EpbpartyJkqy: [],
      totalEpbpartyJkqy: 0,
      EpbpartyZxjc: [],
      totalEpbpartyZxjc: 0,
      EpbpartyHuanping: [],
      totalEpbpartyHuanping: 0,
      CustomQy: [],
      totalCustomQy: 0,
      CustomXuke: [],
      totalCustomXuke: 0,
      CustomCredit: [],
      totalCustomCredit: 0,
      CustomPunish: [],
      totalCustomPunish: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
    this.query.entName = this.entName = localStorage.getItem('entName')
    this.query.phone = localStorage.getItem('phone')

    // 行政许可
    getAdministrativeLicenseList(this.query).then(res => {
      // console.log(res)
      this.AdministrativeLicenseList = res.data.result
      this.totalAdministrativeLicenseList = res.data.paging.total
    })
    // 行政处罚
    getAdministrativePenaltyList(this.query).then(res => {
      // console.log(res)
      this.AdministrativePenaltyList = res.data.result
      this.totalAdministrativePenaltyList = res.data.paging.total
    })
    // 环保处罚
    getEpbparty(this.query).then(res => {
      // console.log(res)
      this.Epbparty = res.data.result
      this.totalEpbparty = res.data.paging.total
    })
    // 重点监控企业名单
    getEpbpartyJkqy(this.query).then(res => {
      // console.log(res)
      this.EpbpartyJkqy = res.data.result
      this.totalEpbpartyJkqy = res.data.paging.total
    })
    // 环保企业自行监测结果
    getEpbpartyZxjc(this.query).then(res => {
      // console.log(res)
      this.EpbpartyZxjc = res.data.result
      this.totalEpbpartyZxjc = res.data.paging.total
    })
    // 环评公示数据
    getEpbpartyHuanping(this.query).then(res => {
      // console.log(res)
      this.EpbpartyHuanping = res.data.result
      this.totalEpbpartyHuanping = res.data.paging.total
    })
    // 海关企业
    getCustomQy(this.query).then(res => {
      // console.log(res)
      this.CustomQy = res.data.result
      this.totalCustomQy = res.data.paging.total
    })
    // 海关许可
    getCustomXuke(this.query).then(res => {
      // console.log(res)
      this.CustomXuke = res.data.result
      this.totalCustomXuke = res.data.paging.total
    })
    // 海关信用
    getCustomCredit(this.query).then(res => {
      // console.log(res)
      this.CustomCredit = res.data.result
      this.totalCustomCredit = res.data.paging.total
    })
    // 海关处罚
    getCustomPunish(this.query).then(res => {
      // console.log(res)
      this.CustomPunish = res.data.result
      this.totalCustomPunish = res.data.paging.total
    })
  },
  methods: {
    // 吸顶效果
    initHeight() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      this.isFixed = scrollTop > this.scrollHeight
    },

    // 行政许可分页
    handleChangeAdministrativeLicenseList(val) {
      this.AdministrativeLicenseList = []
      this.query.page = val
      getAdministrativeLicenseList(this.query).then(res => {
        this.AdministrativeLicenseList = res.data.result
      })
    },
    // 行政处罚分页
    handleChangeAdministrativePenaltyList(val) {
      this.AdministrativePenaltyList = []
      this.query.page = val
      getAdministrativePenaltyList(this.query).then(res => {
        this.AdministrativePenaltyList = res.data.result
      })
    },
    // 环保处罚分页
    handleChangeEpbparty(val) {
      this.Epbparty = []
      this.query.page = val
      getEpbparty(this.query).then(res => {
        this.Epbparty = res.data.result
      })
    },
    // 重点监控企业名单分页
    handleChangeEpbpartyJkqy(val) {
      this.EpbpartyJkqy = []
      this.query.page = val
      getEpbpartyJkqy(this.query).then(res => {
        this.EpbpartyJkqy = res.data.result
      })
    },
    // 环保企业自行监测结果分页
    handleChangeEpbpartyZxjc(val) {
      this.EpbpartyZxjc = []
      this.query.page = val
      getEpbpartyZxjc(this.query).then(res => {
        this.EpbpartyZxjc = res.data.result
      })
    },
    // 环评公示数据分页
    handleChangeEpbpartyHuanping(val) {
      this.EpbpartyHuanping = []
      this.query.page = val
      getEpbpartyHuanping(this.query).then(res => {
        this.EpbpartyHuanping = res.data.result
      })
    },
    // 海关企业分页
    handleChangeCustomQy(val) {
      this.CustomQy = []
      this.query.page = val
      getCustomQy(this.query).then(res => {
        this.CustomQy = res.data.result
      })
    },
    // 海关许可分页
    handleChangeCustomXuke(val) {
      this.CustomXuke = []
      this.query.page = val
      getCustomXuke(this.query).then(res => {
        this.CustomXuke = res.data.result
      })
    },
    // 海关信用分页
    handleChangeCustomCredit(val) {
      this.CustomCredit = []
      this.query.page = val
      getCustomCredit(this.query).then(res => {
        this.CustomCredit = res.data.result
      })
    },
    // 海关处罚分页
    handleChangeCustomPunish(val) {
      this.CustomPunish = []
      this.query.page = val
      getCustomPunish(this.query).then(res => {
        this.CustomPunish = res.data.result
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

