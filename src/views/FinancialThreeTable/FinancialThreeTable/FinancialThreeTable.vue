<template>
  <div>
    <div class="auth-btn-wrapper" v-show="auth_btn_show">
      <div style="color: red;margin: 30px auto">您还没有完成 {{ entName }} 取数授权操作</div>
      <el-button type="primary" @click.prevent="getAuth">开始授权</el-button>
    </div>
    <div class="auth-page-wrapper" v-show="auth_page_show">
      <div>授权流程完成10分钟左右后刷新页面查看数据</div>
      <iframe id="myframe" width="100%" height="100%" frameborder="no" border="0" marginwidth="0" marginheight="0"
              scrolling="no" allowtransparency="yes"></iframe>
    </div>
    <div class="box" v-show="show_box">
      <el-dialog :title="ly_table_title" :visible.sync="ly_year_table_show" width="75%">
        <el-table :data="ly_el_table_data" border>
          <el-table-column property="projectName" label="项目名称" width="400"></el-table-column>
          <el-table-column property="sequence" label="栏次"></el-table-column>
          <el-table-column property="currentYearAccumulativeAmount" label="本年累计数"></el-table-column>
          <el-table-column property="lastYearAccumulativeAmount" label="上年累计数"></el-table-column>
        </el-table>
      </el-dialog>
      <el-dialog :title="ly_table_title" :visible.sync="ly_month_table_show" width="75%">
        <el-table :data="ly_el_table_data" border>
          <el-table-column property="projectName" label="项目名称" width="400"></el-table-column>
          <el-table-column property="sequence" label="栏次"></el-table-column>
          <el-table-column property="currentYearAccumulativeAmount" label="本年累计金额"></el-table-column>
          <el-table-column property="currentMonthAmount" label="本期金额"></el-table-column>
        </el-table>
      </el-dialog>
      <el-dialog :title="zc_table_title" :visible.sync="zc_year_table_show" width="75%">
        <el-table :data="zc_el_table_data" border>
          <el-table-column property="projectName" label="名称" width="400"></el-table-column>
          <el-table-column property="columnSequence" label="栏次"></el-table-column>
          <el-table-column property="endingBalance" label="期末余额"></el-table-column>
          <el-table-column property="initialBalance" label="年初余额"></el-table-column>
        </el-table>
      </el-dialog>
      <el-dialog :title="zc_table_title" :visible.sync="zc_month_table_show" width="75%">
        <el-table :data="zc_el_table_data" border>
          <el-table-column property="projectName" label="项目名称" width="400"></el-table-column>
          <el-table-column property="columnSequence" label="栏次"></el-table-column>
          <el-table-column property="endingBalance" label="期末余额"></el-table-column>
          <el-table-column property="initialBalance" label="上年年末余额"></el-table-column>
        </el-table>
      </el-dialog>
      <el-dialog :title="sds_table_title" :visible.sync="sds_month_table_show" width="75%">
        <el-table :data="sds_el_table_data" border>
          <el-table-column property="projectName" label="项目名称"></el-table-column>
          <el-table-column property="projectType" label="项目类别" width="250"></el-table-column>
          <el-table-column property="columnSequence" label="栏次" width="50"></el-table-column>
          <el-table-column property="currentAmount" label="本期金额" width="120"></el-table-column>
          <el-table-column property="accumulativeAmount" label="累计金额" width="120"></el-table-column>
        </el-table>
      </el-dialog>
      <el-dialog :title="zzs_table_title" :visible.sync="zzs_month_table_show" width="75%">
        <el-table :data="zzs_el_table_data" border>
          <el-table-column property="projectName" label="项目名称"></el-table-column>
          <el-table-column property="projectType" label="项目类别"></el-table-column>
          <el-table-column property="columnSequence" label="栏次"></el-table-column>
          <el-table-column property="currentGoods" label="本期数-货物及劳务"></el-table-column>
          <el-table-column property="currentYearAccumulativeService" label="本年累计-服务、不动产和无形资产"></el-table-column>
          <el-table-column property="immediateRetreatYearAccumulativeAmount" label="即征即退项目-本年累计"></el-table-column>
          <el-table-column property="currentYearAccumulativeGoods" label="本年累计-货物及劳务"></el-table-column>
          <el-table-column property="generalMonthAmount" label="一般项目-本月数"></el-table-column>
          <el-table-column property="currentService" label="本期数-服务、不动产和无形资产"></el-table-column>
          <el-table-column property="generalYearAccumulativeAmount" label="一般项目-本年累计"></el-table-column>
          <el-table-column property="immediateRetreatMonthAmount" label="即征即退项目-本月数"></el-table-column>
        </el-table>
      </el-dialog>
      <section class="et-hero-tabs">
        <div :class="isFixed?'et-hero-tabs-containerf':'et-hero-tabs-container'">
          <a class="et-hero-tab" href="#tab-lr-year">利润表 - 年报</a>
          <a class="et-hero-tab" href="#tab-lr-month">利润表 - 季度</a>
          <a class="et-hero-tab" href="#tab-zc-year">资产负债表 - 年报</a>
          <a class="et-hero-tab" href="#tab-zc-month">资产负债表 - 季度</a>
          <a class="et-hero-tab" href="#tab-sds-month">所得税 - 季度</a>
          <a class="et-hero-tab" href="#tab-zzs-month">增值税 - 月</a>
          <span class="et-hero-tab-slider"/>
        </div>
      </section>
      <main class="et-main">
        <section id="tab-lr-year" class="et-slide" style="min-height:100px;margin-top:50px;">
          <h3 style="margin-left:20px;">利润表 - 年报</h3>
          <div class="box2">
            <div class="cont">
              <div class="data-index-div" v-for="(item,index) in ly_year_table_index" :key="index">
                <el-button type="primary" @click.prevent="show_lr_table('year',item)">{{ item }}</el-button>
              </div>
            </div>
          </div>
        </section>
        <section id="tab-lr-month" class="et-slide" style="min-height:100px;margin-top:50px;">
          <h3 style="margin-left:20px;">利润表 - 季度</h3>
          <div class="box2">
            <div class="cont">
              <div class="data-index-div" v-for="(item,index) in ly_month_table_index" :key="index">
                <el-button type="primary" @click.prevent="show_lr_table('month',item)">{{ item }}</el-button>
              </div>
            </div>
          </div>
        </section>
        <section id="tab-zc-year" class="et-slide" style="min-height:100px;margin-top:50px;">
          <h3 style="margin-left:20px;">资产负债表 - 年报</h3>
          <div class="box2">
            <div class="cont">
              <div class="data-index-div" v-for="(item,index) in zc_year_table_index" :key="index">
                <el-button type="primary" @click.prevent="show_zc_table('year',item)">{{ item }}</el-button>
              </div>
            </div>
          </div>
        </section>
        <section id="tab-zc-month" class="et-slide" style="min-height:100px;margin-top:50px;">
          <h3 style="margin-left:20px;">资产负债表 - 季度</h3>
          <div class="box2">
            <div class="cont">
              <div class="data-index-div" v-for="(item,index) in zc_month_table_index" :key="index">
                <el-button type="primary" @click.prevent="show_zc_table('month',item)">{{ item }}</el-button>
              </div>
            </div>
          </div>
        </section>
        <section id="tab-sds-month" class="et-slide" style="min-height:100px;margin-top:50px;">
          <h3 style="margin-left:20px;">所得税 - 季度</h3>
          <div class="box2">
            <div class="cont">
              <div class="data-index-div" v-for="(item,index) in sds_month_table_index" :key="index">
                <el-button type="primary" @click.prevent="show_sds_table('month',item)">{{ item }}</el-button>
              </div>
            </div>
          </div>
        </section>
        <section id="tab-zzs-month" class="et-slide" style="min-height:100px;margin-top:50px;">
          <h3 style="margin-left:20px;">增值税 - 月</h3>
          <div class="box2">
            <div class="cont">
              <div class="data-index-div" v-for="(item,index) in zzs_month_table_index" :key="index">
                <el-button type="primary" @click.prevent="show_zzs_table('month',item)">{{ item }}</el-button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import req from '@/utils/req'
import { parseTime } from '@/utils'

export default {
  name: 'FinancialThreeTable',
  components: {},
  filters: {
    parseTime: parseTime
  },
  props: {},
  data() {
    return {
      auth_btn_show: true,
      auth_page_show: false,
      show_box: false,
      ly_year_table_index: [],
      ly_year_table_data: [],
      ly_month_table_index: [],
      ly_month_table_data: [],
      ly_el_table_data: [],
      ly_table_title: '',
      ly_year_table_show: false,
      ly_month_table_show: false,
      zc_year_table_index: [],
      zc_year_table_data: [],
      sds_year_table_data: [],
      zzs_year_table_data: [],
      zc_month_table_index: [],
      sds_month_table_index: [],
      zzs_month_table_index: [],
      zc_month_table_data: [],
      sds_month_table_data: [],
      zzs_month_table_data: [],
      zc_el_table_data: [],
      sds_el_table_data: [],
      zzs_el_table_data: [],
      zc_table_title: '',
      sds_table_title: '',
      zzs_table_title: '',
      zc_year_table_show: false,
      zc_month_table_show: false,
      sds_month_table_show: false,
      zzs_month_table_show: false,
      phone: '',
      token: '',
      entName: '',
      CreditCode: '',
      isFixed: false,
      scrollHeight: 258
    }
  },
  inject: ['reload'],
  computed: {},
  mounted() {
    this.phone = localStorage.getItem('phone')
    this.token = localStorage.getItem('token')
    this.entName = localStorage.getItem('entName')
    this.CreditCode = localStorage.getItem('CreditCode')
    window.addEventListener('scroll', this.initHeight)
    this.checkAuth()
    this.getData_lr_year()
    this.getData_lr_month()
    this.getData_zc_year()
    this.getData_zc_month()
    this.getData_sds_month()
    this.getData_zzs_month()
  },
  methods: {
    show_lr_table(type, index) {
      this.ly_year_table_show = false
      this.ly_month_table_show = false
      if (type === 'year') {
        this.ly_el_table_data = this.ly_year_table_data[index]
        this.ly_table_title = '利润表 - 年度 - ' + index
        this.ly_year_table_show = true
      } else {
        this.ly_el_table_data = this.ly_month_table_data[index]
        this.ly_table_title = '利润表 - 季度 - ' + index
        this.ly_month_table_show = true
      }
    },
    getData_lr_year() {
      req.post('api/v1/zw/getFinanceIncomeStatementAnnualReport', {
        'phone': this.phone,
        'code': this.CreditCode,
        'pay': 1
      }, this.token).then(res => {
        for (let key in res.data.result) {
          this.ly_year_table_index.push(key)
        }
        this.ly_year_table_data = res.data.result
      })
    },
    getData_lr_month() {
      req.post('api/v1/zw/getFinanceIncomeStatement', {
        'phone': this.phone,
        'code': this.CreditCode,
        'pay': 1
      }, this.token).then(res => {
        for (let key in res.data.result) {
          this.ly_month_table_index.push(key)
        }
        this.ly_month_table_data = res.data.result
      })
    },
    show_zc_table(type, index) {
      this.zc_year_table_show = false
      this.zc_month_table_show = false
      if (type === 'year') {
        this.zc_el_table_data = this.zc_year_table_data[index]
        this.zc_table_title = '资产负债表 - 年度 - ' + index
        this.zc_year_table_show = true
      } else {
        this.zc_el_table_data = this.zc_month_table_data[index]
        this.zc_table_title = '资产负债表 - 季度 - ' + index
        this.zc_month_table_show = true
      }
    },
    show_sds_table(type, index) {
      this.sds_year_table_show = false
      this.sds_month_table_show = false
      if (type === 'year') {
        this.sds_el_table_data = this.sds_year_table_data[index]
        this.sds_table_title = '所得税 - 年度 - ' + index
        this.sds_year_table_show = true
      } else {
        this.sds_el_table_data = this.sds_month_table_data[index]
        this.sds_table_title = '所得税 - 季度 - ' + index
        this.sds_month_table_show = true
      }
    },
    show_zzs_table(type, index) {
      this.zzs_year_table_show = false
      this.zzs_month_table_show = false
      if (type === 'year') {
        this.zzs_el_table_data = this.zzs_year_table_data[index]
        this.zzs_table_title = '增值税 - 年度 - ' + index
        this.zzs_year_table_show = true
      } else {
        this.zzs_el_table_data = this.zzs_month_table_data[index]
        this.zzs_table_title = '增值税 - 月 - ' + index
        this.zzs_month_table_show = true
      }
    },
    getData_zc_year() {
      req.post('api/v1/zw/getFinanceBalanceSheetAnnual', {
        'phone': this.phone,
        'code': this.CreditCode,
        'pay': 1
      }, this.token).then(res => {
        for (let key in res.data.result) {
          this.zc_year_table_index.push(key)
        }
        this.zc_year_table_data = res.data.result
      })
    },
    getData_zc_month() {
      req.post('api/v1/zw/getFinanceBalanceSheet', {
        'phone': this.phone,
        'code': this.CreditCode,
        'pay': 1
      }, this.token).then(res => {
        for (let key in res.data.result) {
          this.zc_month_table_index.push(key)
        }
        this.zc_month_table_data = res.data.result
      })
    },
    getData_sds_month() {
      req.post('api/v1/zw/getIncometaxMonthlyDeclaration', {
        'phone': this.phone,
        'code': this.CreditCode,
        'pay': 1
      }, this.token).then(res => {
        for (let key in res.data.result) {
          this.sds_month_table_index.push(key)
        }
        this.sds_month_table_data = res.data.result
      })
    },
    getData_zzs_month() {
      req.post('api/v1/zw/getVatReturn', {
        'phone': this.phone,
        'code': this.CreditCode,
        'pay': 1
      }, this.token).then(res => {
        for (let key in res.data.result) {
          this.zzs_month_table_index.push(key)
        }
        this.zzs_month_table_data = res.data.result
      })
    },
    initHeight() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isFixed = scrollTop > this.scrollHeight
    },
    getAuth() {
      req.post('api/v1/zw/getAuthentication', {
        'phone': this.phone,
        'entName': this.entName
      }, this.token).then(res => {
        this.auth_btn_show = false
        this.auth_page_show = true
        document.getElementById('myframe').src = res.data.result
      })
    },
    checkAuth() {
      req.post('api/v1/user/check/auth', {
        'phone': this.phone,
        'entName': this.entName
      }, this.token).then(res => {
        if (res.data.result !== null) {
          let check = localStorage.getItem(this.entName + 'threeTable')
          if (check) {
            this.auth_btn_show = false
            this.auth_page_show = false
            this.show_box = true
          } else {
            this.$confirm('此信息需消耗 200 元，有效期 7 天', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              localStorage.setItem(this.entName + 'threeTable', Date.now() + '')
              this.auth_btn_show = false
              this.auth_page_show = false
              this.show_box = true
            })
          }
        } else {
          this.auth_btn_show = true
          this.auth_page_show = true
          this.show_box = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-btn-wrapper {
  width: 100%;
  height: 200px;
  text-align: center;
  margin-top: 200px;
}

.auth-page-wrapper {
  width: 100%;
  height: 800px;
  text-align: center;
}

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
      top: 0;

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
    margin: 40px;
    overflow: hidden;

    .data-index-div {
      cursor: pointer;
      padding-top: 3px;
      margin: 8px;
      height: 0;
      float: left;
      width: 8%;
      padding-bottom: 5%;
      //border: 1px solid #EBEEF5;
      text-align: center;
      border-radius: 10px;
    }
  }
}

.cont1 {
  padding: 40px 0 40px 400px;
  width: 94%;
  border: 1px solid #EBEBEB;
}
</style>
