<template>
  <div class="box1">
    <div v-if="list === '' || list === null" class="cont">暂无相关信息</div>
    <div v-if=" list !== '' || list !== null" class="cont">
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
            <el-tooltip
              class="item"
              effect="light"
              content="说明：通过对主板、创业板、新三板等各类大中小型企业公开财务规模指标的规范化处理，
                              建立了对应企业规模类型的各类企业行为因素关系，在剔除不显著行为因素的同时提取显著行为因素重新进行回归分析，
                              建立了由企业行为因素通过专有编码分析反应至普适化企业群体规模的分析模型，
                              最终得到了适用于绝大部分企业规模参考的分析标签结果。
                              结果仅供参考，在任何情况下本公司不保证真实性、准确性和时效性，不作为任何决策的唯一、实质性参考依据。"
              placement="bottom"
            >
              <i
                style="color: #409eff;cursor: pointer"
                class="el-icon-info"
              />
            </el-tooltip>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { getBasicDetails } from '@/api/EnterpriseBackground'

export default {
  name: 'BaseInfo',
  data() {
    return {
      list: '',
      query: {
        entName: '',
        phone: ''
      }
    }
  },
  mounted() {
    // window.addEventListener('scroll', this.initHeight)
    this.query.entName = localStorage.getItem('entName')
    this.query.phone = localStorage.getItem('phone')
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
</style>
