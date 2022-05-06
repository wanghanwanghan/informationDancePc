<template>
  <div>
  <div class="box1">
    <div v-if="list === '' || list === null" class="cont">暂无相关信息</div>
    <div v-else-if=" list !== '' || list !== null" class="cont">
      <table>
        <tr>
          <td class="type1">法人代表:</td>
          <td>{{ list.legal_person_name }}</td>
          <td class="type2">企业名称:</td>
          <td>{{ list.name }}</td>
        </tr>
        <tr>
          <td>营业状态:</td>
          <td>{{ list.reg_status }}</td>
          <td>统一社会信用代码:</td>
          <td>{{ list.property1 }}</td>
        </tr>
        <tr>
          <td>公司类型:</td>
          <td>{{ list.company_org_type }}</td>
          <td>注册资本（万元）:</td>
          <td>{{ list.reg_capital }}</td>
        </tr>
        <tr>
          <td>成立日期:</td>
          <td>{{ list.from_time }}</td>
          <td>营业期限:</td>
          <td>{{ list.from_time }}至{{ list.to_time === '0000-00-00 00:00:00' ? '无固定期限' : list.to_time }}</td>
        </tr>
        <tr>
          <td>核准日期:</td>
          <td>{{ list.approved_time }}</td>
          <td>登记机关:</td>
          <td>{{ list.reg_institute }}</td>
        </tr>
        <tr>
          <td>注册地址:</td>
          <td colspan="3">{{ list.reg_location }}</td>
        </tr>
        <tr>
          <td>经营范围:</td>
          <td colspan="3">{{ list.business_scope }}</td>
        </tr>
      </table>
    </div>
  </div>
  <h3 style="margin-left:20px;">股东信息（{{ totalGd }}）</h3>
    <div class="box2">
      <!-- 变更信息 -->
      <div class="cont" style="overflow: scroll;height: 200px; ">
<!--        <el-table-->
<!--          :data="Cpws"-->
<!--          border-->
<!--          style="width: 100%"-->
<!--        >-->
<!--          <el-table-column-->
<!--            label="案号"-->
<!--            prop="caseno"-->
<!--            width="200"-->
<!--          />-->
<!--          <el-table-column-->
<!--            prop="title"-->
<!--            label="标题"-->
<!--            width="450"-->
<!--          />-->
<!--          <el-table-column-->
<!--            prop="sdate"-->
<!--            label="发布日期"-->
<!--            width="100"-->
<!--          />-->
<!--          <el-table-column-->
<!--            prop="pdate"-->
<!--            label="裁定日期"-->
<!--            width="100"-->
<!--          />-->
<!--          <el-table-column-->
<!--            prop="procedure"-->
<!--            label="审理程序"-->
<!--          />-->
<!--        </el-table>-->
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
  </div>
</template>

<script>
import { getCompanyBasicInfo, getInvestorInfo } from '@/api/EnterpriseBackground'

export default {
  name: 'BaseInfo',
  data() {
    return {
      list: '',
      gudonglList: '',
      totalGd: 0,
      query: {
        entName: '',
        phone: ''
      }
    }
  },
  mounted() {
    // window.addEventListener('scroll', this.initHeight)
    // console.log(localStorage.getItem('xd_id'))
    this.query.xd_id = localStorage.getItem('xd_id')
    this.query.phone = localStorage.getItem('phone')
    // 基本信息
    getCompanyBasicInfo(this.query).then(res => {
      // console.log(res.data)
      this.list = res.data.result
    })
    getInvestorInfo(this.query).then(res => {
      // console.log(res.data)
      this.gudonglList = res.data.result
      this.totalGd = res.data.paging.total
    })
  }
}
</script>

<style  lang="scss"  scoped>
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
        width: 150px
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
