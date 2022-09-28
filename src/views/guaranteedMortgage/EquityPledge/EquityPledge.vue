<template>
  <div class="box">
    <!-- 股权出质 -->
    <section class="et-hero-tabs">
      <div :class="isFixed?'et-hero-tabs-containerf':'et-hero-tabs-container'">
        <!-- <div class="et-hero-tabs-container"> -->
        <a class="et-hero-tab" href="#tab-gqcz">股权出质</a>
        <a class="et-hero-tab" href="#tab-dcdy">动产抵押</a>
        <a class="et-hero-tab" href="#tab-tddb">土地抵押</a>
        <a class="et-hero-tab" href="#tab-dwdb">对外担保</a>
        <span class="et-hero-tab-slider" />
      </div>
    </section>
    <main class="et-main">
      <section id="tab-gqcz" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">股权出质</h3>
        <div class="box2">
          <!-- 股权出质 -->
          <div class="cont">
            <el-table
              :data="StockPledgeList"
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
                prop="RegistNo"
                label="登记编号"
              />
              <el-table-column
                align="center"
                prop="PledgorInfo.Name"
                label="出质人"
                width="180"
              >
                <template slot-scope="scope">
                  <div v-for="v in scope.row.PledgorList">{{v.Name}}</div>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="PledgeeInfo.Name"
                label="质权人"
                width="260"
              >
                <template slot-scope="scope">
                  <div v-for="v in scope.row.PledgeeList">{{v.Name}}</div>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="RelatedCompanyName"
                label="出质股权标的企业"
                width="250"
              />
              <el-table-column
                align="center"
                prop="PledgedAmount"
                label="出质股权数额"
                width="120"
              />
              <el-table-column
                align="center"
                prop="RegDate"
                label="登记日期"
                width="110"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalStockPledgeList"
              @current-change="handleChangeStockPledgeList"
            />
          </div>
        </div>
      </section>
      <section id="tab-dcdy" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">动产抵押</h3>
        <div class="box2">
          <!-- 动产抵押 -->
          <div class="cont">
            <el-table
              :data="ChattelMortgage"
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
                prop="Status"
                label="状态"
                width="110"
              />
              <el-table-column
                align="center"
                prop="RegisterDate"
                label="登记时间"
                width="100"
              />
              <el-table-column
                align="center"
                prop="RegisterOffice"
                label="登记机关"
                width="100"
              />

              <el-table-column
                align="center"
                label="抵押权人"
                >
              <template slot-scope="scope">
                  <div v-for="v in scope.row.Detail.PledgeeList">{{ v.Name }}</div>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="Detail.SecuredClaim"
                label="被担保债权概况"
              />
              <el-table-column
                align="center"
                label="抵押物信息"
              >
                <template slot-scope="scope">
                  <div v-for="v in scope.row.Detail.GuaranteeList">{{ v.Name }}</div>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="Detail.SecuredClaim.Amount"
                label="被担保主债权数额"
                width="100"
              />

            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalChattelMortgage"
              @current-change="handleChangeChattelMortgage"
            />
          </div>
        </div>
      </section>
      <section id="tab-tddb" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">土地抵押</h3>
        <div class="box2">
          <!-- 土地抵押 -->
          <div class="cont">
            <el-table
              :data="getLandMortgageList"
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
                prop="Address"
                label="地址"
                width="200"
              />
              <el-table-column
                align="center"
                prop="MortgageAcreage"
                label="抵押面积（公顷）"
                width="180"
              />
              <el-table-column
                align="center"
                prop="MortgageAcreage"
                label="抵押土地用途"
                width="200"
              />
              <el-table-column
                align="center"
                prop="StartDate"
                label="开始日期"
                width="180"
              />
              <el-table-column
                align="center"
                prop="EndDate"
                label="截止日期"
              />
              <el-table-column
                align="center"
                prop="MortgagePrice"
                label="抵押金额（万元）"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/guaranteedMortgage/tddyDetail/'+scope.row.Id">
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
              :total="totalgetLandMortgageList"
              @current-change="handleChangegetLandMortgageList"
            />
          </div>
        </div>
      </section>
      <section id="tab-dwdb" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">对外担保</h3>
        <div class="box2">
          <!-- 对外担保 -->
          <div class="cont">
            <el-table
              :data="AnnualReport"
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
                prop="Year"
                label="年份"
                width="260"
              />
              <el-table-column
                align="center"
                prop="ProvideAssuranceList[0].Creditor"
                label="债权人"
                width="260"
              />
              <el-table-column
                align="center"
                prop="ProvideAssuranceList[0].Debtor"
                label="债务人"
                width="260"
              />
              <el-table-column
                align="center"
                prop="ProvideAssuranceList[0].CreditorCategory"
                label="主债权种类"
                width="260"
              />
              <el-table-column
                align="center"
                prop="ProvideAssuranceList[0].CreditorAmount"
                label="主债权数额"
                width="260"
              />
              <el-table-column
                align="center"
                prop="ProvideAssuranceList[0].FulfillObligation"
                label="履行债务的期限"
                width="200"
              />
              <el-table-column
                align="center"
                prop="ProvideAssuranceList[0].AssuranceDurn"
                label="保证的期间"
                width="200"
              />
              <el-table-column
                align="center"
                prop="ProvideAssuranceList[0].AssuranceType"
                label="保证的方式"
                width="180"
              />
              <el-table-column
                align="center"
                prop="ProvideAssuranceList[0].AssuranceScope"
                label="保证担保的范围"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalAnnualReport"
              @current-change="handleChangeAnnualReport"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import { getStockPledgeList, getChattelMortgage, getLandMortgageList, getAnnualReport } from '@/api/guaranteedMortgage'
export default {
  data() {
    return {
      isFixed: false,
      scrollHeight: 258,
      query: {
        entName: '',
        phone: '',
        page: 1,
        pageSize: 10
      },
      StockPledgeList: [],
      totalStockPledgeList: 0,
      ChattelMortgage: [],
      totalChattelMortgage: 0,
      getLandMortgageList: [],
      totalgetLandMortgageList: 0,
      AnnualReport: [],
      totalAnnualReport: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
    this.query.entName = this.entName = localStorage.getItem('entName')
    this.query.phone = this.phone = localStorage.getItem('phone')

    // 股权出质
    getStockPledgeList(this.query).then(res => {
      // console.log(res)
      if(res.data.result.Data != '--'){
        this.StockPledgeList = res.data.result.Data
        this.totalStockPledgeList = res.data.paging.total
      }
    })
    // 动产抵押
    getChattelMortgage(this.query).then(res => {
      // console.log(res)
        if(res.data.result.Data != '--'){
          this.ChattelMortgage = res.data.result.Data
          this.totalChattelMortgage = res.data.paging.total
        }

    })
    // 土地抵押
    getLandMortgageList(this.query).then(res => {
      // console.log(res)
        if(res.data.result.Data != '--'){
          this.getLandMortgageList = res.data.result.Data
          this.totalgetLandMortgageList = res.data.paging.total
        }

    })
    // 对外担保
    getAnnualReport(this.query).then(res => {
      // console.log(res)
      this.AnnualReport = res.data.result
      this.totalAnnualReport = res.data.paging.total
    })
  },
  methods: {
    // 吸顶效果
    initHeight() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      this.isFixed = scrollTop > this.scrollHeight
    },

    // 股权出质分页
    handleChangeStockPledgeList(val) {
      this.StockPledgeList = []
      this.query.page = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getStockPledgeList(this.query).then(res => {
        this.StockPledgeList = res.data.result.Data
      })
    },
    // 动产抵押分页
    handleChangeChattelMortgage(val) {
      this.ChattelMortgage = []
      this.query.page = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getChattelMortgage(this.query).then(res => {
        this.ChattelMortgage = res.data.result.Data
      })
    },
    // 土地抵押分页
    handleChangegetLandMortgageList(val) {
      this.getLandMortgageList = []
      this.query.page = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getLandMortgageList(this.query).then(res => {
        this.getLandMortgageList = res.data.result.Data
      })
    },
    // 对外担保分页
    handleChangeAnnualReport(val) {
      this.AnnualReport = []
      this.query.page = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getAnnualReport(this.query).then(res => {
        this.AnnualReport = res.data.result
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

