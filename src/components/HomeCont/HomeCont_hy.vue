<template>
  <div class="body-wrapper">
    <div class="logo-wrapper">
      <img class="logo" src="https://api.meirixindong.com/Static/Image/Image/xdzd_logo_big.jpeg" alt=""/>
<!--      <img class="logo" src="https://api.meirixindong.com/Static/Image/Image/zhlc_logo.jpg" alt=""/>-->
    </div>
    <div class="header-wrapper">
      <div class="one-row">
        <el-input placeholder="查产品，查标签" @keyup.enter.native="search" v-model="cond.keyword" clearable
                  class="input-with-select keyword-input">
          <el-button class="keyword-btn" slot="append" @click="search">搜索</el-button>
        </el-input>
        <el-input placeholder="查公司" @keyup.enter.native="searchEnt" v-model="cond.keywordSearchEnt" clearable
                  class="input-with-select keyword-input">
          <el-button class="keyword-btn" slot="append" @click="searchEnt">搜索</el-button>
        </el-input>
      </div>
      <div class="one-row">
        <div class="one-row-left">业务标签</div>
        <div class="one-row-right">
          <div :class="{oneTag:true,onTagClickClass:tag1CurrentIndex === index}" v-for="(item,index) of tag1list"
               @click="tag1click($event,index)">{{ item }}
          </div>
        </div>
      </div>
      <div class="one-row">
        <div class="one-row-left">添加标签</div>
        <div class="one-row-right">
          <el-input style="width: 30%;margin-left: 8px" placeholder="请输入业务标签名称" v-model="labelInput"
                    class="input-with-select">
            <el-button slot="append" icon="el-icon-plus" @click="addLabel"></el-button>
          </el-input>
        </div>
      </div>
      <div class="one-row">
        <div class="one-row-left">融资轮次</div>
        <div class="one-row-right">
          <div :class="{oneTag:true,onTagClickClass:tag2CurrentIndex === index}" v-for="(item,index) of tag2list"
               @click="tag2click($event,index)">{{ item }}
          </div>
        </div>
      </div>
      <div class="one-row">
        <div class="one-row-left">成立时间</div>
        <div class="one-row-right">
          <div :class="{oneTag:true,onTagClickClass:tag3CurrentIndex === index}" v-for="(item,index) of tag3list"
               @click="tag3click($event,index)">{{ item }}
          </div>
        </div>
      </div>
      <div class="one-row">
        <div class="one-row-left">国家地区</div>
        <div class="one-row-right">
          <div :class="{oneTag:true,onTagClickClass:tag4CurrentIndex === index}" v-for="(item,index) of tag4list"
               @click="tag4click($event,index)">{{ item }}
          </div>
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <el-table :data="tableData" border @row-click="rowClick" height="600"
                :header-cell-style="{color:'#006eda'}">
        <el-table-column
          align="center"
          prop="company_name"
          label="企业名称">
        </el-table-column>
        <el-table-column
          align="center"
          label="产品"
          width="550">
          <template slot-scope="scope">
            <el-table :show-header="true" :data="scope.row.enterprise_business" border
                      :header-cell-style="{color:'#006eda'}">
              <el-table-column
                align="center"
                prop="name"
                label="名称">
              </el-table-column>
              <el-table-column
                align="center"
                prop="tag"
                label="标签">
              </el-table-column>
              <el-table-column
                align="center"
                prop="desc"
                label="描述">
              </el-table-column>
              <el-table-column
                align="center"
                prop="create_time"
                label="时间">
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="business_information.company_cate"
          label="行业领域"
          :formatter="col_formatter">
        </el-table-column>
        <el-table-column
          align="center"
          prop="company_region[0].province"
          label="地区"
          width="65"
          :formatter="col_formatter">
        </el-table-column>
        <el-table-column
          align="center"
          prop="financing_process[0].round_level"
          label="投资轮次"
          :formatter="col_formatter">
        </el-table-column>
        <el-table-column
          align="center"
          prop="financing_process[0].date"
          label="投资时间"
          :formatter="col_formatter">
        </el-table-column>
        <el-table-column
          align="center"
          prop="financing_process[0].money"
          label="投资金额"
          :formatter="col_formatter">
        </el-table-column>
        <el-table-column
          align="center"
          prop="financing_process[0].investfirms"
          label="投资方"
          :formatter="col_formatter">
        </el-table-column>
      </el-table>
    </div>
    <div class="footer-wrapper">
      <div class="total-count">共 {{ cond.total }} 条</div>
      <el-pagination
        layout="prev, pager, next"
        :total="cond.total"
        @current-change="pageChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import req from '@/utils/req'

export default {
  name: 'HomeCont_hy',
  components: {},
  data() {
    return {
      labelInput: '',
      cond: {
        keywordSearchEnt: '',
        keyword: '',
        tag: '不限',
        financing: '不限',
        time: '不限',
        province: '不限',
        page: 1,
        total: 0
      },
      tag1CurrentIndex: 0,
      tag1list: [
        '不限', '企业服务', '医疗健康', '生活服务', '人工智能', '大数据', '区块链', '教育培训', '文娱传媒', '金融', '电子商务', 'VR/AR',
        '旅游户外', '餐饮业', '房产家居', '汽车交通', '体育健身', '食品饮料', '物联网', '硬件', '游戏', '生产制造', '物流运输', '农业',
        '批发零售', '先进制造', '社交社区', '工具软件', '服装纺织', '建筑', '开采', '能源电力', '消费升级', '新基建', '硬科技'
      ],
      tag2CurrentIndex: 0,
      tag2list: [
        '不限', '天使轮', 'A轮', 'B轮', 'C轮', '战略融资'
      ],
      tag2TempList: [
        '不限', '种子轮', '天使轮', 'Pre-A轮', 'A轮', 'A+轮', 'Pre-B轮', 'B轮', 'B+轮', 'C轮', 'C+轮', 'D轮', 'Pro-IPO轮',
        '战略融资', '并购', '战略合并'
      ],
      tag3CurrentIndex: 0,
      tag3list: [
        '不限', '1-3年', '3-5年', '5年以上'
      ],
      tag4CurrentIndex: 0,
      tag4list: [
        '不限', '北京', '上海', '重庆', '天津', '广东', '江苏', '山东', '浙江', '河南', '四川', '湖北', '河北', '湖南', '福建',
        '安徽', '辽宁', '陕西', '江西', '广西', '云南', '黑龙江', '内蒙古', '吉林', '山西', '贵州', '新疆', '甘肃', '海南',
        '宁夏', '青海', '西藏', '香港', '澳门', '台湾'
      ],
      tableData: []
    }
  },
  mounted() {
    let userLabels = localStorage.getItem('userLabels')
    if (userLabels !== null && userLabels.length > 1) {
      let userLabels = JSON.parse(localStorage.getItem('userLabels'))
      this.tag1list.push(...userLabels)
    }
    this.getData()
  },
  methods: {
    col_formatter(row, column, cellValue, index) {
      if (cellValue === undefined) {
        return '--'
      }
      return cellValue
    },
    tag1click(e, index) {
      this.tag1CurrentIndex = index
      this.cond.tag = e.target.innerText
      this.cond.page = 1
      this.getData()
    },
    tag2click(e, index) {
      this.tag2CurrentIndex = index
      this.cond.financing = e.target.innerText
      this.cond.page = 1
      this.getData()
    },
    tag3click(e, index) {
      this.tag3CurrentIndex = index
      this.cond.time = e.target.innerText
      this.cond.page = 1
      this.getData()
    },
    tag4click(e, index) {
      this.tag4CurrentIndex = index
      this.cond.province = e.target.innerText
      this.cond.page = 1
      this.getData()
    },
    getData() {
      req.post('api/v1/hy/getData', this.cond, '').then(res => {
        if (res.data.result === null) {
          this.cond.total = 0
        } else {
          this.cond.total = res.data.paging.total
        }
        this.tableData = this.handleTableData(res.data.result)
      }).catch(err => {
        this.$message.error('查询失败')
        this.tableData = []
      })
    },
    handleTableData(data) {
      if (data === null) {
        this.$message.warning('查询无记录')
        return []
      }
      for (let i = 0; i < data.length; i++) {
        if (data[i].financing_process !== undefined && data[i].financing_process.length > 0) {
          data[i].financing_process = data[i].financing_process.reverse()
        }
      }
      return data
    },
    pageChange(index) {
      this.cond.page = index
      this.getData()
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    rowClick(row, column, event) {
      let token = localStorage.getItem('token')
      if (token != null) {
        let routeUrl = this.$router.resolve({
          path: './SearchList',
          query: {
            entName: row.company_name
          }
        })
        window.open(routeUrl.href, '_blank')
      } else {
        this.$message.error('登录过期，请重新登录')
        localStorage.clear()
      }
    },
    searchEnt() {
      let token = localStorage.getItem('token')
      if (token != null) {
        let routeUrl = this.$router.resolve({
          path: './SearchList',
          query: {
            entName: this.cond.keywordSearchEnt
          }
        })
        window.open(routeUrl.href, '_blank')
      } else {
        this.$message.error('登录过期，请重新登录')
        localStorage.clear()
      }
    },
    search() {
      this.cond.page = 1
      this.getData()
    },
    addLabel() {
      this.labelInput = this.labelInput.trim()
      if (this.labelInput.length > 0) {
        this.tag1list.push(this.labelInput)
        let userLabels = localStorage.getItem('userLabels')
        if (userLabels == null) {
          localStorage.setItem('userLabels', JSON.stringify([this.labelInput]))
        } else {
          let tmp = JSON.parse(userLabels)
          tmp.push(this.labelInput)
          localStorage.setItem('userLabels', JSON.stringify(tmp))
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.onTagClickClass {
  background-color: #006eda;
  color: #fff;
}

.body-wrapper {
  font-size: 14px;
  margin: 0 auto;
  width: 1300px;

  .logo-wrapper {
    margin: 0 auto;
    text-align: center;

    .logo {
      width: 450px;
      height: 130px;
    }
  }

  .header-wrapper {
    .one-row {
      display: flex;
      padding-left: 25px;
      margin-bottom: 25px;

      .keyword-input {
        width: 42%;
        margin: 0 auto;
      }

      .keyword-btn {
        background-color: #006eda;
        color: #fff;
      }

      .one-row-left {
        width: 5%;
        margin-top: 10px;
        color: #006eda;
      }

      .one-row-right {
        width: 95%;

        .oneTag {
          cursor: pointer;
          padding-top: 3px;
          margin: 8px;
          height: 0;
          float: left;
          width: 6%;
          padding-bottom: 1.5%;
          border: 1px solid #EBEEF5;
          text-align: center;
          border-radius: 10px;
        }
      }
    }
  }

  .content-wrapper {

  }

  .footer-wrapper {
    text-align: right;

    .total-count {
      margin-top: 8px;
      margin-right: 16px;
      margin-bottom: 3px;
    }
  }
}
</style>
