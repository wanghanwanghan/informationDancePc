<template style="overflow: scroll ">
  <div style="overflow: scroll; ">
    <div class="box1">
      <div v-if="list === '' || list === null" class="cont">暂无相关信息</div>
      <div v-else-if=" list !== '' || list !== null" class="cont">
        <table>
          <tr>
            <td class="type1">法人代表:</td>
            <td class="type2">{{ list.NAME }}</td>
            <td class="type1">企业名称:</td>
            <td class="type2">{{ list.ENTNAME }}</td>
          </tr>
          <tr>
            <td>营业状态:</td>
            <td>{{ list.ENTSTATUS_CNAME.name }}</td>
            <td>统一社会信用代码:</td>
            <td>{{ list.UNISCID }}</td>
          </tr>
          <tr>
            <td>公司类型:</td>
            <td>{{ list.ENTTYPE_CNAME.name }}</td>
            <td>注册资本（万元）:</td>
            <td>{{ list.REGCAP }}</td>
          </tr>
          <tr>
            <td>成立日期:</td>
            <td>{{ list.ESDATE }}</td>
            <td>营业期限:</td>
            <td>{{ list.OPFROM }}至{{ list.OPTO === '0000-00-00 00:00:00' ? '无固定期限' : list.OPTO }}</td>
          </tr>
          <tr>
            <td>核准日期:</td>
            <td>{{ list.APPRDATE }}</td>
            <td>登记机关:</td>
            <td>{{ list.REGORG }}</td>
          </tr>
          <tr>
            <td>注册地址:</td>
            <td >{{ list.DOM }}</td>
            <td>经营地址:</td>
            <td >{{ list.LAST_DOM }}</td>
          </tr>
          <tr>
            <td>邮箱:</td>
            <td colspan="3" >{{ list.LAST_EMAIL }}</td>
          </tr>
          <tr>
            <td>经营范围:</td>
            <td colspan="3" v-html="list.OPSCOPE">{{ list.OPSCOPE }}</td>
          </tr>
        </table>
      </div>
    </div>
    <h3 style="margin-left:20px;">股东信息（{{ totalGd }}）</h3>
    <div class="box2">
      <!-- 变更信息 -->
      <div class="cont" >
        <el-table
          :data="gudonglList"
          border
          style="width: 100%"
        >
          <el-table-column
            label="姓名"
            prop="INV"
          />
          <el-table-column
            prop="BLICNO"
            label="证照/证件号码"
          />
          <el-table-column
            prop="SUBCONAM"
            label="认缴资金"
          />
          <el-table-column
            prop="ACCONAM"
            label="实缴资金"
          />
          <el-table-column
            prop="AMOUNT"
            label="投资金额"
          />
        </el-table>
      </div>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="totalGd"
          @current-change="handleChangeGd"
        />
      </div>
    </div>
    <h3 style="margin-left:20px;">主要成员（{{ StaffInfoTotal }}）</h3>
    <div class="box2">
      <!-- 变更信息 -->
      <div class="cont" >
        <el-table
          :data="StaffInfoList"
          border
          style="width: 100%"
        >
          <el-table-column
            label="职位"
            prop="POSITION"
          />
          <el-table-column
            prop="NAME"
            label="姓名"
          />
        </el-table>
      </div>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="StaffInfoTotal"
          @current-change="handleChangeS"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getCompanyBasicInfo, getInvestorInfo, getStaffInfo } from '@/api/EnterpriseBackground'

export default {
  name: 'BaseInfo',
  data() {
    return {
      list: '',
      name: '',
      gudonglList: '',
      StaffInfoList: '',
      StaffInfoTotal: 0,
      totalGd: 0,
      query: {
        entName: '',
        phone: ''
      },
      queryS: {
        page: 1,
        pageSize: 10,
        entName: '',
        phone: ''
      },
      queryGd: {
        entName: '',
        page: 1,
        pageSize: 10,
        phone: ''
      }
    }
  },
  mounted() {
    this.query.xd_id = localStorage.getItem('xd_id')
    this.query.phone = localStorage.getItem('phone')
    // 基本信息
    getCompanyBasicInfo(this.query).then(res => {
      // console.log(res.data)
      this.list = res.data.result
      var searchText = localStorage.getItem('searchText')
      if (searchText.length > 0) {
        this.list.business_scope = this.list.business_scope.replaceAll(searchText, "<span style='color: red'>" + searchText + '</span>')
      }
    })
    this.getStaffInfoList(1)
    this.getGdList(1)
  },
  methods: {
    getStaffInfoList(val) {
      this.queryS.page = val
      this.queryS.xd_id = localStorage.getItem('xd_id')
      this.queryS.phone = localStorage.getItem('phone')
      getStaffInfo(this.queryS).then(res => {
        if (res.data.code === 200) {
          this.StaffInfoList = res.data.result
          this.StaffInfoTotal = res.data.paging.total
        }
      })
    },
    handleChangeS(val) {
      this.getStaffInfoList(val)
    },
    handleChangeGd(val) {
      this.getGdList(val)
    },
    getGdList(val) {
      this.queryGd.page = val
      this.queryGd.xd_id = localStorage.getItem('xd_id')
      this.queryGd.phone = localStorage.getItem('phone')
      getInvestorInfo(this.queryGd).then(res => {
        if (res.data.code === 200) {
          this.gudonglList = res.data.result
          this.totalGd = res.data.paging.total
        }
      })
    }
  }
}
</script>

<style  lang="scss" >
.cell ,.el-table thead {
  color: black;
}
.box1 {
  width: 100%;
  .cont {
    width: 94%;
    min-height: 200px;
    //margin: 40px;
    //border: 1px solid #EBEBEB;
    tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;
      td {
        //border-bottom: 1px solid #EBEBEB;
        //border-right: 1px solid #EBEBEB;
        line-height: 1.5;
        padding: 8px 6px;
      }
      .type1 {
        width: 150px
      }
      .type2 {
        width: 350px
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

</style>
