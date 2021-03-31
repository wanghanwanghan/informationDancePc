<template>
  <div class="box">
    <!-- 债权信息 -->
    <section class="et-hero-tabs">
      <div :class="isFixed?'et-hero-tabs-containerf':'et-hero-tabs-container'">
        <!-- <div class="et-hero-tabs-container"> -->
        <a class="et-hero-tab" href="#tab-yszk">应收账款登记</a>
        <a class="et-hero-tab" href="#tab-syq">所有权保留</a>
        <span class="et-hero-tab-slider" />
      </div>
    </section>
    <main class="et-main">
      <section id="tab-yszk" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">应收账款登记</h3>
        <div class="box2">
          <!-- 应收账款登记 -->
          <div class="cont">
            <el-table
              :data="CompanyZdwYszkdsr"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                align="center"
                type="index"
                width="50"
              />
              <!-- <el-table-column
                prop="title"
                label="标题"
                width="400"
              /> -->
              <el-table-column
                prop="body"
                label="内容"
                align="center"
                width="600"
              />
              <el-table-column
                prop="sortTimeString"
                align="center"
                label="时间"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalCompanyZdwYszkdsr"
              @current-change="handleChangeCompanyZdwYszkdsr"
            />
          </div>
        </div>
      </section>
      <section id="tab-syq" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">所有权保留</h3>
        <div class="box2">
          <!-- 所有权保留 -->
          <div class="cont">
            <el-table
              :data="CompanyZdwSyqbldsr"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                type="index"
                align="center"
                width="50"
              />
              <!-- <el-table-column
                prop="title"
                label="标题"
                width="400"
              /> -->
              <el-table-column
                prop="body"
                label="内容"
                align="center"
                width="600"
              />
              <el-table-column
                prop="sortTimeString"
                align="center"
                label="时间"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalCompanyZdwSyqbldsr"
              @current-change="handleChangeCompanyZdwSyqbldsr"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import { getCompanyZdwYszkdsr, getCompanyZdwSyqbldsr } from '@/api/CreditInformation'
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
      CompanyZdwYszkdsr: [],
      totalCompanyZdwYszkdsr: 0,
      CompanyZdwSyqbldsr: [],
      totalCompanyZdwSyqbldsr: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
    this.query.entName = this.entName = localStorage.getItem('entName')
    this.query.phone = this.phone = localStorage.getItem('phone')
    getCompanyZdwYszkdsr(this.query).then(res => {
      // console.log(res)
      this.CompanyZdwYszkdsr = res.data.result
      this.totalCompanyZdwYszkdsr = res.data.paging.total
    })
    getCompanyZdwSyqbldsr(this.query).then(res => {
      // console.log(res)
      this.CompanyZdwSyqbldsr = res.data.result
      this.totalCompanyZdwSyqbldsr = res.data.paging.total
    })
  },
  methods: {
    // 吸顶效果
    initHeight() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      this.isFixed = scrollTop > this.scrollHeight
    },

    // 应收账款登记分页
    handleChangeCompanyZdwYszkdsr(val) {
      this.CompanyZdwYszkdsr = []
      this.query.page = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getCompanyZdwYszkdsr(this.query).then(res => {
        this.CompanyZdwYszkdsr = res.data.result
      })
    },
    // 所有权保留分页
    handleChangeCompanyZdwSyqbldsr(val) {
      this.CompanyZdwSyqbldsr = []
      this.query.page = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getCompanyZdwSyqbldsr(this.query).then(res => {
        this.CompanyZdwSyqbldsr = res.data.result
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

