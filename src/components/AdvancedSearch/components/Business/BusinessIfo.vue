<template>
  <div style="height: 600px; ">
    <div class="box1">
      <!--    <div v-if="list === '' || list === null" class="cont">暂无相关信息</div>-->
      <div class="cont">
        公司简介:
        <div style="overflow: scroll; min-height: 100px;max-height:430px;padding: 0px 20px; line-height: 30px;" v-for="(val) of list.gong_si_jian_jie_data_arr"><span style="padding-left: 30px" />{{ val }}</div>
      </div>
    </div>
    <div class="box2" style="margin-top: 20px;">
      <!-- 变更信息 -->
      <div class="cont" style="max-height: 300px">
        商品类型：<el-tag v-for="(v) of spList" :type="searchText.length>0 && v.name.includes(searchText)?'danger':''" style="margin: 0px 2px;">{{ v.name }}</el-tag>
      </div>
      <div v-if="totalSp>100" class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="totalSp"
          page-size="80"
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
      items: '',
      totalSp: 0,
      list: '',
      query: {
        xd_id: '',
        phone: '',
        page: 1,
        size: 80
      },
      spList: '',
      searchText: ''
    }
  },
  mounted() {
    this.query.xd_id = localStorage.getItem('xd_id')
    this.query.phone = localStorage.getItem('phone')
    this.searchText = localStorage.getItem('searchText')
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
        this.spList.forEach(v => {
          const base64 = btoa(encodeURI(v))

          const r_str = base64.slice(0, 9)
          const g_str = base64.slice(10, 19)
          const b_str = base64.slice(20, 29)

          let r_int = 0
          let g_int = 0
          let b_int = 0

          r_str.split('').forEach(item => {
            if (typeof item.charCodeAt(item) === 'number' && !isNaN(item.charCodeAt(item))) {
              r_int += item.charCodeAt(item)
            }
          })

          g_str.split('').forEach(item => {
            if (typeof item.charCodeAt(item) === 'number' && !isNaN(item.charCodeAt(item))) {
              g_int += item.charCodeAt(item)
            }
          })

          b_str.split('').forEach(item => {
            if (typeof item.charCodeAt(item) === 'number' && !isNaN(item.charCodeAt(item))) {
              b_int += item.charCodeAt(item)
            }
          })

          r_int >= 255 ? r_int = r_int % 255 : r_int
          g_int >= 255 ? g_int = g_int % 255 : g_int
          b_int >= 255 ? b_int = b_int % 255 : b_int

          this.items.push({
            type: '',
            label: v,
            rgb: 'rgb(' + r_int + ',' + g_int + ',' + b_int + ')'
          })
        })
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
