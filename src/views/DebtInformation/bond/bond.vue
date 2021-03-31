<template>
  <div class="box">
    <!-- 保证金质押登记 -->
    <section class="et-hero-tabs">
      <div :class="isFixed?'et-hero-tabs-containerf':'et-hero-tabs-container'">
        <!-- <div class="et-hero-tabs-container"> -->
        <a class="et-hero-tab" href="#tab-bzjzy">保证金质押登记</a>
        <a class="et-hero-tab" href="#tab-cdzy">仓单质押登记</a>
        <a class="et-hero-tab" href="#tab-zldj">租赁登记</a>
        <a class="et-hero-tab" href="#tab-dcrz">其他动产融资</a>
        <span class="et-hero-tab-slider" />
      </div>
    </section>
    <main class="et-main">
      <section id="tab-bzjzy" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">保证金质押登记</h3>
        <div class="box2">
          <!-- 保证金质押登记 -->
          <div class="cont">
            <el-table
              :data="CompanyZdwYszkdsr"
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
              :total="totalCompanyZdwYszkdsr"
              @current-change="handleChangeCompanyZdwYszkdsr"
            />
          </div>
        </div>
      </section>
      <section id="tab-cdzy" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">仓单质押登记</h3>
        <div class="box2">
          <!-- 仓单质押登记 -->
          <div class="cont">
            <el-table
              :data="CompanyZdwCdzydsr"
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
              :total="totalCompanyZdwCdzydsr"
              @current-change="handleChangeCompanyZdwCdzydsr"
            />
          </div>
        </div>
      </section>
      <section id="tab-zldj" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">租赁登记</h3>
        <div class="box2">
          <!-- 租赁登记 -->
          <div class="cont">
            <el-table
              :data="CompanyZdwZldjdsr"
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
              :total="totalCompanyZdwZldjdsr"
              @current-change="handleChangeCompanyZdwZldjdsr"
            />
          </div>
        </div>
      </section>
      <section id="tab-dcrz" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">其他动产融资</h3>
        <div class="box2">
          <!-- 其他动产融资 -->
          <div class="cont">
            <el-table
              :data="CompanyZdwQtdcdsr"
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
              :total="totalCompanyZdwQtdcdsr"
              @current-change="handleChangeCompanyZdwQtdcdsr"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import { getCompanyZdwYszkdsr, getCompanyZdwCdzydsr, getCompanyZdwZldjdsr, getCompanyZdwQtdcdsr } from '@/api/DebtInformation'
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
      CompanyZdwCdzydsr: [],
      totalCompanyZdwCdzydsr: 0,
      CompanyZdwZldjdsr: [],
      totalCompanyZdwZldjdsr: 0,
      CompanyZdwQtdcdsr: [],
      totalCompanyZdwQtdcdsr: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
    this.query.entName = this.entName = localStorage.getItem('entName')
    this.query.phone = this.phone = localStorage.getItem('phone')

    // 保证金质押登记
    getCompanyZdwYszkdsr(this.query).then(res => {
      // console.log(res)
      this.CompanyZdwYszkdsr = res.data.result
      this.totalCompanyZdwYszkdsr = res.data.paging.total
    })

    // 仓单质押登记
    getCompanyZdwCdzydsr(this.query).then(res => {
      // console.log(res)
      this.CompanyZdwCdzydsr = res.data.result
      this.totalCompanyZdwCdzydsr = res.data.paging.total
    })

    // 租赁登记
    getCompanyZdwZldjdsr(this.query).then(res => {
      // console.log(res)
      this.CompanyZdwZldjdsr = res.data.result
      this.totalCompanyZdwZldjdsr = res.data.paging.total
    })

    // 其他动产融资
    getCompanyZdwQtdcdsr(this.query).then(res => {
      // console.log(res)
      this.CompanyZdwQtdcdsr = res.data.result
      this.totalCompanyZdwQtdcdsr = res.data.paging.total
    })
  },
  methods: {
    // 吸顶效果
    initHeight() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      this.isFixed = scrollTop > this.scrollHeight
    },

    // 保证金质押登记分页
    handleChangeCompanyZdwYszkdsr(val) {
      this.CompanyZdwYszkdsr = []
      this.query.page = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getCompanyZdwYszkdsr(this.query).then(res => {
        this.CompanyZdwYszkdsr = res.data.result
      })
    },
    // 仓单质押登记
    handleChangeCompanyZdwCdzydsr(val) {
      this.CompanyZdwCdzydsr = []
      this.query.page = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getCompanyZdwCdzydsr(this.query).then(res => {
        this.CompanyZdwCdzydsr = res.data.result
      })
    },
    // 租赁登记分页
    handleChangeCompanyZdwZldjdsr(val) {
      this.CompanyZdwZldjdsr = []
      this.query.page = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getCompanyZdwZldjdsr(this.query).then(res => {
        this.CompanyZdwZldjdsr = res.data.result
      })
    },
    // 其他动产融资分页
    handleChangeCompanyZdwQtdcdsr(val) {
      this.CompanyZdwQtdcdsr = []
      this.query.page = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getCompanyZdwQtdcdsr(this.query).then(res => {
        this.CompanyZdwQtdcdsr = res.data.result
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

