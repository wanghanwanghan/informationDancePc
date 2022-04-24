<template>
  <div class="box">
    <!-- 基本信息 -->
    <section class="et-hero-tabs">
      <div :class="isFixed?'et-hero-tabs-containerf':'et-hero-tabs-container'">
        <a class="et-hero-tab" href="#tab-jb">基本信息</a>
        <a class="et-hero-tab" href="#tab-gd">股东</a>
        <a class="et-hero-tab" href="#tab-contor">实际控制人</a>
        <a class="et-hero-tab" href="#tab-manger">企业主要管理人</a>
        <a class="et-hero-tab" href="#tab-banch">分支机构</a>
        <a class="et-hero-tab" href="#tab-change">变更信息</a>
        <a class="et-hero-tab" href="#tab-frbg">法人变更</a>
        <a class="et-hero-tab" href="#tab-errinfo">经营异常</a>
        <span class="et-hero-tab-slider"/>
      </div>
    </section>
    <main class="et-main">
      <section id="tab-jb" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">基本信息</h3>
        <div class="box1">
          <div v-if="list === '' || list === null" class="cont">暂无相关信息</div>
          <div v-if="list !== '' || list !== null" class="cont">
            <table>
              <tr>
                <td class="type1">法人代表</td>
                <td class="type2">{{ list.OperName }}</td>
                <td>企业名称</td>
                <td>{{ list.Name }}</td>
                <td>公司类型</td>
                <td class="type3">{{ list.EconKind }}</td>
              </tr>
              <tr>
                <td>统一社会信用代码</td>
                <td>{{ list.CreditCode }}</td>
                <td>注册资本（万元）</td>
                <td>{{ list.RegistCapi }}</td>
                <td>成立日期</td>
                <td class="type3">{{ list.TermStart.slice(0, 10) }}</td>
              </tr>
              <tr>
                <td>营业期限</td>
                <td>{{ list.TermStart }}至{{ list.TeamEnd === '--' ? '无固定期限' : list.TeamEnd }}</td>
                <td>登记机关</td>
                <td>{{ list.BelongOrg }}</td>
                <td>核准日期</td>
                <td class="type3">{{ list.CheckDate.slice(0, 10) }}</td>
              </tr>
              <tr>
                <td>注册地址</td>
                <td colspan="3" class="type3">{{ list.Address }}</td>
                <td>行业</td>
                <td class="type3">{{ INDUSTRY }}</td>
              </tr>
              <tr>
                <td>经营范围</td>
                <td colspan="5" class="type3">{{ list.Scope }}</td>
              </tr>
              <tr v-show="isShowVendincDesc">
                <td class="type4">规模类型</td>
                <td colspan="4" class="type3 type4">
                  {{ list.VENDINC.desc.split('，')[0] }}
                  <el-tooltip class="item" effect="light"
                              content="说明：通过对主板、创业板、新三板等各类大中小型企业公开财务规模指标的规范化处理，
                              建立了对应企业规模类型的各类企业行为因素关系，在剔除不显著行为因素的同时提取显著行为因素重新进行回归分析，
                              建立了由企业行为因素通过专有编码分析反应至普适化企业群体规模的分析模型，
                              最终得到了适用于绝大部分企业规模参考的分析标签结果。
                              结果仅供参考，在任何情况下本公司不保证真实性、准确性和时效性，不作为任何决策的唯一、实质性参考依据。"
                              placement="bottom">
                    <i style="color: #409eff;cursor: pointer"
                       class="el-icon-info"></i>
                  </el-tooltip>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>
      <section id="tab-gd" class="et-slide" style="min-height:100px;margin-top:50px;">
        <!-- <h1>股东</h1> -->
        <h3 style="margin-left:20px;">股东</h3>
        <div class="box2">
          <!-- 股东 -->
          <!-- <div v-if="list === '' || list === null" class="cont">暂无相关信息</div> -->
          <div v-if="gd !== '' || list !== null" class="cont">
            <el-table
              :data="gd"
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
                prop="INV"
                label="股东名称"
                align="center"
                width="180"
              />
              <el-table-column
                prop="SHXYDM"
                label="统一社会信用代码"
                align="center"
                width="180"
              />
              <!-- <span>{{ SHXYDM }}</span>
                <span>{{ 123 }}</span>
              </el-table-column> -->
              <el-table-column
                prop="INVTYPE"
                label="股东类型"
                align="center"
                width="160"
              />
              <el-table-column
                prop="SUBCONAM"
                label="认缴出资额(万元)"
                align="center"
                width="160"
              />
              <el-table-column
                prop="CONCUR"
                label="出资币种"
                align="center"
                width="100"
              />
              <el-table-column
                prop="CONRATIO"
                align="center"
                label="出资比例"
                width="100"
              />
              <el-table-column
                prop="CONDATE"
                align="center"
                label="出资时间"
              />
            </el-table>
          </div>
        </div>
      </section>
      <section id="tab-contor" class="et-slide" style="min-height:100px;margin-top:50px;">
        <!-- <h1>实际控制人和控制路径</h1> -->
        <h3 style="margin-left:20px;">
          实际控制人
          <span v-if="show">
            ( 最大股东 : {{ this.finalBeneficiary.name }} 持股比例 : {{ this.finalBeneficiary.total }} )
          </span>
        </h3>
        <div class="box2">
          <div v-if="!show" class="cont1">
            此信息需要付费
            <el-button type="primary" style="margin-left:20px;" @click="pay">点击查看</el-button>
          </div>
          <div v-if="show" class="cont">
            <div v-if="contor.length === 0 || contor === null" class="cont">因穿透股东中有政府部门或国资单位等特殊机构，故不予显示（消耗费用将返还）</div>
            <div v-if="contor.length !== 0" class="cont">
              <el-table
                :data="contor.DetailInfoList"
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
                  prop="StockType"
                  label="持股方式"
                  align="center"
                  width="180"
                />
                <el-table-column
                  prop="StockPercent"
                  label="占比"
                  align="center"
                  width="180"
                />
                <el-table-column
                  prop="Path"
                  align="center"
                  label="股权链"
                />
              </el-table>
            </div>
          </div>
        </div>
      </section>
      <section id="tab-manger" class="et-slide" style="min-height:100px;margin-top:50px;">
        <!-- <h1>企业主要管理人</h1> -->
        <h3 style="margin-left:20px;">企业主要管理人</h3>
        <div class="box2">
          <!-- 企业主要管理人 -->
          <div v-if="manger.legth === 0 || manger === null" class="cont">暂无相关信息</div>
          <div class="cont">
            <el-table
              :data="manger"
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
                prop="NAME"
                label="姓名"
                align="center"
                width="350"
              />
              <el-table-column
                prop="POSITION"
                label="职务"
                align="center"
                width="350"
              />
              <el-table-column
                prop="ISFRDB"
                label="是否为法人"
                align="center"
              />
            </el-table>
          </div>
        </div>
      </section>
      <section id="tab-banch" class="et-slide" style="min-height:100px;margin-top:50px;">
        <!-- <h1>分支机构</h1> -->
        <h3 style="margin-left:20px;">分支机构</h3>
        <div class="box2">
          <div class="cont">
            <el-table
              :data="branch"
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
                label="分支机构名称"
                align="center"
                width="360"
              />
              <el-table-column
                prop="SHXYDM"
                label="统一社会信用代码"
                align="center"
                width="180"
              />
              <el-table-column
                prop="FRDB"
                label="负责人"
                align="center"
                width="100"
              />
              <el-table-column
                prop="ESDATE"
                label="成立日期"
                align="center"
                width="140"
              />
              <el-table-column
                prop="ENTSTATUS"
                label="经营状态"
                align="center"
                width="140"
              />
              <el-table-column
                prop="PROVINCE"
                label="登记地省份"
                align="center"
              />
            </el-table>
          </div>
        </div>
      </section>
      <section id="tab-change" class="et-slide" style="min-height:100px;margin-top:50px;">
        <!-- <h1>变更信息</h1> -->
        <h3 style="margin-left:20px;">变更信息</h3>
        <div class="box2">
          <!-- 变更信息 -->
          <div class="cont">
            <el-table
              :data="ChangeInfo"
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
                prop="ALTITEM"
                label="变更事项"
                align="center"
                width="120"
              />
              <el-table-column
                prop="ALTBE"
                label="变更前内容"
                align="center"
                width="400"
              />
              <el-table-column
                prop="ALTAF"
                label="变更后内容"
                align="center"
                width="400"
              />
              <el-table-column
                prop="ALTDATE"
                label="变更时间"
                align="center"
              />
            </el-table>
          </div>
        </div>
      </section>
      <section id="tab-frbg" class="et-slide" style="min-height:100px;margin-top:50px;">
        <!-- <h1>法人变更</h1> -->
        <h3 style="margin-left:20px;">法人变更</h3>
        <div class="box2">
          <!-- 法人变更 -->
          <div class="cont">
            <el-table
              :data="frbg"
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
                prop="ALTDATE"
                label="变更时间"
                align="center"
                width="160"
              />
              <el-table-column
                prop="ALTBE"
                label="变更前"
                align="center"
                width="400"
              />
              <el-table-column
                prop="ALTAF"
                label="变更后"
                align="center"
              />
            </el-table>
          </div>
        </div>
      </section>
      <section id="tab-errinfo" class="et-slide" style="min-height:100px;margin-top:50px;">
        <!-- <h1>经营异常</h1> -->
        <h3 style="margin-left:20px;">经营异常</h3>
        <div class="box2">
          <!-- 经营异常 -->
          <div class="cont">
            <el-table
              :data="jyyc"
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
                prop="REASONIN"
                label="异常原因"
                align="center"
                width="160"
              />
              <el-table-column
                prop="DATEIN"
                label="列入日期"
                align="center"
                width="120"
              />
              <el-table-column
                prop="REGORGIN"
                label="决定机关"
                align="center"
                width="160"
              />
              <el-table-column
                prop="REASONOUT"
                label="移除异常原因"
                align="center"
                width="250"
              />
              <el-table-column
                prop="DATEOUT"
                label="移除日期"
                align="center"
                width="120"
              />
              <el-table-column
                prop="REGORGOUT"
                label="决定机关（移除）"
                align="center"
              />
            </el-table>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import {
  getRegisterInfo,
  getBasicDetails,
  getShareHolderInfo,
  getBeneficiary,
  getMainManagerInfo,
  getBranchInfo,
  getRegisterChangeInfo,
  frbg,
  getOperatingExceptionRota,
  refundToWallet
} from '@/api/EnterpriseBackground'
import { getCpws } from '@/api/JudicialDecisions'
// import $ from 'jquery'
export default {
  data() {
    return {
      isFixed: false,
      isShowVendincDesc: false,
      scrollHeight: 258,
      query: {
        entName: '',
        phone: ''
      },
      list: '',
      gd: [],
      query1: {
        entName: '',
        phone: '',
        mode: 2,
        pay: ''
      },
      contor: [],
      finalBeneficiary: {
        name: '',
        total: ''
      },
      show: false,
      manger: [],
      branch: [],
      query2: {
        entName: '',
        phone: '',
        pageNo: '',
        pageSize: ''
      },
      ChangeInfo: [],
      frbg: [],
      jyyc: []
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
    this.query.entName = localStorage.getItem('entName')
    this.query.phone = localStorage.getItem('phone')
    this.query1.entName = localStorage.getItem('entName')
    this.query1.phone = localStorage.getItem('phone')
    this.query2.entName = localStorage.getItem('entName')
    this.query2.phone = localStorage.getItem('phone')
    // 基本信息
    getRegisterInfo(this.query).then(res => {
      this.INDUSTRY = res.data.result[0].INDUSTRY
    })
    // 基本信息
    getBasicDetails(this.query).then(res => {
      this.list = res.data.result[0]
      if (Object.keys(this.list.VENDINC).length > 0 && this.list.VENDINC.desc !== '未找到') {
        this.isShowVendincDesc = true
      }
      for (const key in this.list) {
        if (key === 'CreditCode') {
          // console.log(this.list[key])
          localStorage.setItem('CreditCode', this.list[key])
        }
      }
    })
    // 股东
    getShareHolderInfo(this.query).then(res => {
      // console.log(res)
      this.gd = res.data.result
    })
    // 实际控制人和控制路径
    getBeneficiary(this.query1).then(res => {
      // console.log(res)
      if (res.data.code === 200) {
        this.contor = res.data.result
        this.finalBeneficiary.name = res.data.result.Name
        this.finalBeneficiary.total = res.data.result.TotalStockPercent
        this.show = true
      } else {
        this.show = false
      }
    })
    // 企业主要管理人
    getMainManagerInfo(this.query2).then(res => {
      // console.log(res)
      this.manger = res.data.result
      this.mangerTotal = res.data.paging.total
    })
    // 分支机构
    getBranchInfo(this.query2).then(res => {
      // console.log(res)
      this.branch = res.data.result
    })
    // 变更信息
    getRegisterChangeInfo(this.query2).then(res => {
      // console.log(res)
      this.ChangeInfo = res.data.result
    })
    // 法人变更
    frbg(this.query).then(res => {
      // console.log(res)
      this.frbg = res.data.result
    })
    // 经营异常
    getOperatingExceptionRota(this.query2).then(res => {
      // console.log(res)
      this.jyyc = res.data.result
    })
  },
  methods: {
    // 吸顶效果
    initHeight() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      this.isFixed = scrollTop > this.scrollHeight
    },

    // 实际控制人和控制路径付费
    pay() {
      this.query1.entName = localStorage.getItem('entName')
      this.query1.phone = localStorage.getItem('phone')
      getBeneficiary(this.query1).then(res => {
        // console.log(res)
        if (res.data.code === 200) {
          this.contor = res.data.result
          // console.log(typeof (this.list))
        } else {
          this.$confirm((res.data.msg), '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.query1.pay = 1
            getBeneficiary(this.query1).then(res => {
              // console.log(res)
              if (res.data.code === 220) {
                this.$confirm('余额不足，是否前往充值？', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  // this.$message({
                  //   type: 'success',
                  //   message: '删除成功!'
                  // })
                  this.$router.push('/login')
                  localStorage.setItem('activeName', 'third')
                }).catch(() => {
                  // this.$message({
                  //   type: 'info',
                  //   message: '已取消删除'
                  // })
                  this.$router.go(0)
                })
              } else {
                this.contor = res.data.result
                this.finalBeneficiary.name = res.data.result.Name
                this.finalBeneficiary.total = res.data.result.TotalStockPercent
                if (this.contor.length === 0) {
                  refundToWallet({
                    'phone': localStorage.getItem('phone'),
                    'entName': localStorage.getItem('entName'),
                    'moduleNum': 14
                  }).then(res => {
                    console.log(res)
                  })
                }
                this.$message({
                  type: 'success',
                  message: '查询成功!'
                })
                this.show = true
              }
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消操作'
            })
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
// .box{
//   .et-hero-tabs{
//     width: 100%;
//     height: 51px;
//     position: relative;
//     // .et-hero-tabs-container::-webkit-scrollbar {display:none}
//     .et-hero-tabs-container{
//         overflow-x: scroll;
//         white-space: nowrap;
//         width: 100%;
//       .et-hero-tab{
//         display: inline-block;
//         width:150px;
//         color: #000;
//         letter-spacing: 0.1rem;
//         transition: all 0.5s ease;
//         font-size: 0.6rem;
//       }
//     }
//   }
// }
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
        width: 150px;
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
    min-height: 200px;
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
        width: 150px
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
