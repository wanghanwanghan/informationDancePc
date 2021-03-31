<template>
  <div>
    <div class="cont">
      <div class="img">
        <img src="http://api.meirixindong.com/Static/Image/Image/xdzd_logo_big.jpeg" alt="">
        <!-- <img src="http://api.meirixindong.com/Static/Image/ReportImage/wh_logo.png" alt=""> -->
      </div>
      <div class="search">
        <el-input v-model="input" placeholder="请输入内容" class="input-with-select" @change="sousuo">
          <el-button slot="append" icon="el-icon-search" @click="sousuo" />
        </el-input>
      </div>
    </div>
  </div>
</template>
<script>
import { getEntList } from '@/api/article'
export default {
  name: 'HomeCont',
  data() {
    return {
      input: '',
      query: {
        entName: '',
        page: 1,
        pageSize: 100000,
        phone: ''
      }
      // query1: {
      //   name: '刘明灿',
      //   idcardNo: '362127198106073116',
      //   phone: '15236137977',
      //   docType: '',
      //   page: 1,
      //   pageSize: 15
      // },
      // query2: {
      //   id: 'c2021hu0101zhi1425_t20210204_pliumingcan',
      //   phone: '15236137977',
      //   docType: 'bgt'
      // }
    }
  },
  // created() {
  //   getPersonSifa(this.query1).then(res => {
  //     console.log(res)
  //   })
  //   getPersonSifaDetail(this.query2).then(res => {
  //     console.log(res)
  //   })
  // },
  methods: {
    sousuo() {
      if (localStorage.getItem('token')) {
        this.query.entName = this.input
        this.query.phone = localStorage.getItem('phone')
        getEntList(this.query).then(res => {
          if (res.data.code === 200) {
            this.$router.push({
              path: './SearchList',
              query: {
                entName: this.input
              }
            })
          } else {
            this.$message.error('登录过期，请重新登录')
            localStorage.clear()
            this.$router.go(0)
          }
        })
      } else {
        this.$message.error('未登录，请先进行登录操作')
      }
    }
  }
}
</script>
<style lang="scss" scoped>

.cont{
  width:700px;
  margin: auto;
  .img{
    text-align: center;
    padding: 40px 0;
    img{
      display: block;
      width: 300px;
      height: 120px;
      margin: auto;
    }
  }
}
</style>
