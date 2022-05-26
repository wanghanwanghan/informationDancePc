<template>
  <div>
    <div class="cont">
      <el-table
        :data="carList"
        border
        style="width: 100%;margin-top: 30px"
      >
        <el-table-column
          label="vin"
          prop="vin"
        />
        <el-table-column
          prop="carDamage"
          label="是否购买车损险"
        />
        <el-table-column
          prop="carPurchasePrice"
          label="新车购置价"
        />
        <el-table-column
          prop="effectivePolicyCi"
          label="是否有效交强险保单"
        />
        <el-table-column
          prop="effectivePolicyCo"
          label="是否有效商业险保单"
        />
        <el-table-column
          prop="maxLossAmount"
          label="最大损失金额"
        />
        <el-table-column
          prop="risksNumber"
          label="车辆历史出险次数"
        />
        <el-table-column
          prop="robberRisk"
          label="是否购买盗抢险"
        />
        <el-table-column
          prop="settlemenOfClaVehHis"
          label="车辆历史上理赔情况"
        />
        <el-table-column
          prop="strengthenRisk"
          label="是否购买交强险"
        />
        <el-table-column
          prop="threePartyRisks"
          label="是否购买三者险"
        />
        <el-table-column
          prop="transferNumber"
          label="过户次数"
        />
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="total,prev, pager, next"
        :total="total"
        :page-size="5"
        @current-change="handleChange"
      />
    </div>
  </div>
</template>
<script>
import { getCarsInsurance } from '@/api/EnterpriseBackground'

export default {
  name: 'CarInsurance',
  data() {
    return {
      total: 0,
      a: '',
      carList: [],
      query: {
        entName: '',
        phone: '',
        socialCredit: ''
      }
    }
  },
  mounted() {
    this.carsInsurance(1)
  },
  methods: {
    handleChange(val) {
      this.carsInsurance(val)
    },
    carsInsurance(val) {
      getCarsInsurance({ page: val, entName: localStorage.getItem('entName'), socialCredit: localStorage.getItem('CreditCode'), phone: localStorage.getItem('phone') }).then(res => {
        if (res.data.code === 200) {
          this.carList = res.data.result
          this.total = res.data.paging.total
        }
        console.log(this.carList)
      })
    }
  }
}
</script>

<style scoped>

</style>
