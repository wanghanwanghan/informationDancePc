<template>
  <div style="height: 600px; ">
    <div class="box1">
      <!--    <div v-if="list === '' || list === null" class="cont">暂无相关信息</div>-->
      <div class="cont" >
        公司简介:
            <div   style="overflow: scroll; height: 500px;padding: 0px 20px; "><span style="padding-left: 30px"></span>{{ list.gong_si_jian_jie }}</div>
      </div>
    </div>
    <div class="box2" >
      <!-- 变更信息 -->
      <div class="cont" >
        商品类型：<span v-for="(v) of spList" style="padding: 0px 10px;" >{{v.name}}</span>
      </div>
      <div class="pagination" v-if="totalSp>20">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="totalSp"
          page-size="20"
          @current-change="handleChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getEsBasicInfo, getShangPinInfo } from '@/api/EnterpriseBackground'

export default {
  name: 'Business',
  data() {
    return {
      totalSp: 0,
      list: '',
      query: {
        xd_id: '',
        phone: '',
        page: 1,
        size: 20
      },
      spList: ''
    }
  },
  mounted() {
    this.query.xd_id = localStorage.getItem('xd_id')
    this.query.phone = localStorage.getItem('phone')
    // 基本信息
    getEsBasicInfo(this.query).then(res => {
      this.list = res.data.result
    })
    this.handleChange(1)
  },
  methods: {
    handleChange(val) {
      this.query.page = val
      this.query.xd_id = localStorage.getItem('xd_id')
      this.query.phone = localStorage.getItem('phone')
      getShangPinInfo(this.query).then(res => {
        // console.log(res.data)
        this.spList = res.data.result
        this.totalSp = res.data.paging.total
        // console.log(this.totalSp)
      })
    }
  }
}
</script>

<style scoped>
.type1 {
  width: 150px
}
.type2 {
  width: 150px
}
</style>
