<template>
  <div class="box">
    <!-- 开庭公告 -->
    <section class="et-hero-tabs">
      <div :class="isFixed?'et-hero-tabs-containerf':'et-hero-tabs-container'">
        <!-- <div class="et-hero-tabs-container"> -->
        <a class="et-hero-tab" href="#tab-kt">开庭公告</a>
        <a class="et-hero-tab" href="#tab-pj">判决文书</a>
        <a class="et-hero-tab" href="#tab-fy">法院公告</a>
        <a class="et-hero-tab" href="#tab-zx">执行公告</a>
        <a class="et-hero-tab" href="#tab-sx">失信公告</a>
        <a class="et-hero-tab" href="#tab-sf">司法查封冻结扣押</a>
        <a class="et-hero-tab" href="#tab-pm">司法拍卖</a>
        <span class="et-hero-tab-slider" />
      </div>
    </section>
    <main class="et-main">
      <section id="tab-kt" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">开庭公告（{{ totalKtgg }}）</h3>
        <div style="width:70%;margin-left:40px">
          <el-collapse>
            <el-collapse-item title="评估意见（此板块信息的经验判断）">
              <el-input
                v-model="ktggdesc"
                type="textarea"
                maxlength="255"
                show-word-limit
                placeholder="请输入内容"
              />
              <div style="margin-top:20px;margin-left:600px">
                <el-button v-if="ktggdesc" type="warning" @click="modMsg(1)">修改</el-button>
                <el-button v-else type="success" @click="addMsg(1)">添加</el-button>
              </div>
            </el-collapse-item>
          </el-collapse>

        </div>
        <div class="box2">
          <!-- 变更信息 -->
          <div class="cont">
            <el-table
              :data="Ktgg"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                type="index"
                width="50"
              />
              <el-table-column
                prop="title"
                label="标题"
                width="400"
              />
              <el-table-column
                prop="body"
                label="内容"
                width="350"
              />
              <el-table-column
                prop="sortTimeString"
                label="时间"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/JudicialDecisions/ktggDetail/'+scope.row.entryId">
                    <el-button
                      size="mini"
                    >查看详情</el-button>
                  </router-link>
                </template>

              </el-table-column>
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalKtgg"
              @current-change="handleChangeKtgg"
            />
          </div>
        </div>
      </section>
      <section id="tab-pj" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">判决文书（{{ totalCpws }}）</h3>
        <div style="width:70%;margin-left:40px">
          <el-collapse>
            <el-collapse-item title="评估意见（此板块信息的经验判断）">
              <el-input
                v-model="pjwsdesc"
                type="textarea"
                maxlength="255"
                show-word-limit
                placeholder="请输入内容"
              />
              <div style="margin-top:20px;margin-left:600px">
                <el-button v-if="pjwsdesc" type="warning" @click="modMsg(2)">修改</el-button>
                <el-button v-else type="success" @click="addMsg(2)">添加</el-button>
              </div>
            </el-collapse-item>
          </el-collapse>

        </div>
        <div class="box2">
          <!-- 变更信息 -->
          <div class="cont">
            <el-table
              :data="Cpws"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                type="index"
                width="50"
              />
              <el-table-column
                prop="title"
                label="标题"
                width="400"
              />
              <el-table-column
                prop="body"
                label="内容"
                width="350"
              />
              <el-table-column
                prop="sortTimeString"
                label="时间"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/JudicialDecisions/pjwsDetail/'+scope.row.entryId">
                    <el-button
                      size="mini"
                    >查看详情</el-button>
                  </router-link>
                </template>

              </el-table-column>
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalCpws"
              @current-change="handleChangeCpws"
            />
          </div>
        </div>
      </section>
      <section id="tab-fy" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">法院公告（{{ totalFygg }}）</h3>
        <div style="width:70%;margin-left:40px">
          <el-collapse>
            <el-collapse-item title="评估意见（此板块信息的经验判断）">
              <el-input
                v-model="fyggdesc"
                type="textarea"
                maxlength="255"
                show-word-limit
                placeholder="请输入内容"
              />
              <div style="margin-top:20px;margin-left:600px">
                <el-button v-if="fyggdesc" type="warning" @click="modMsg(3)">修改</el-button>
                <el-button v-else type="success" @click="addMsg(3)">添加</el-button>
              </div>
            </el-collapse-item>
          </el-collapse>

        </div>
        <div class="box2">
          <!-- 变更信息 -->
          <div class="cont">
            <el-table
              :data="Fygg"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                type="index"
                width="50"
              />
              <el-table-column
                prop="title"
                label="标题"
                width="400"
              />
              <el-table-column
                prop="body"
                label="内容"
                width="350"
              />
              <el-table-column
                prop="sortTimeString"
                label="时间"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/JudicialDecisions/fyggDetail/'+scope.row.entryId">
                    <el-button
                      size="mini"
                    >查看详情</el-button>
                  </router-link>
                </template>

              </el-table-column>
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalFygg"
              @current-change="handleChangeFygg"
            />
          </div>
        </div>
      </section>
      <section id="tab-zx" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">执行公告（{{ totalZxgg }}）</h3>
        <div style="width:70%;margin-left:40px">
          <el-collapse>
            <el-collapse-item title="评估意见（此板块信息的经验判断）">
              <el-input
                v-model="zxggdesc"
                type="textarea"
                maxlength="255"
                show-word-limit
                placeholder="请输入内容"
              />
              <div style="margin-top:20px;margin-left:600px">
                <el-button v-if="zxggdesc" type="warning" @click="modMsg(4)">修改</el-button>
                <el-button v-else type="success" @click="addMsg(4)">添加</el-button>
              </div>
            </el-collapse-item>
          </el-collapse>

        </div>
        <div class="box2">
          <!-- 变更信息 -->
          <div class="cont">
            <el-table
              :data="Zxgg"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                type="index"
                width="50"
              />
              <el-table-column
                prop="title"
                label="标题"
                width="400"
              />
              <el-table-column
                prop="body"
                label="内容"
                width="350"
              />
              <el-table-column
                prop="sortTimeString"
                label="时间"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/JudicialDecisions/zxggDetail/'+scope.row.entryId">
                    <el-button
                      size="mini"
                    >查看详情</el-button>
                  </router-link>
                </template>

              </el-table-column>
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalZxgg"
              @current-change="handleChangeZxgg"
            />
          </div>
        </div>
      </section>
      <section id="tab-sx" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">失信公告（{{ totalShixin }}）</h3>
        <div style="width:70%;margin-left:40px">
          <el-collapse>
            <el-collapse-item title="评估意见（此板块信息的经验判断）">
              <el-input
                v-model="sxggdesc"
                type="textarea"
                maxlength="255"
                show-word-limit
                placeholder="请输入内容"
              />
              <div style="margin-top:20px;margin-left:600px">
                <el-button v-if="sxggdesc" type="warning" @click="modMsg(5)">修改</el-button>
                <el-button v-else type="success" @click="addMsg(5)">添加</el-button>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="box2">
          <!-- 变更信息 -->
          <div class="cont">
            <el-table
              :data="Shixin"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                type="index"
                width="50"
              />
              <el-table-column
                prop="title"
                label="标题"
                width="350"
              />
              <el-table-column
                prop="body"
                label="内容"
                width="400"
              />
              <el-table-column
                prop="sortTimeString"
                label="时间"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/JudicialDecisions/sxggDetail/'+scope.row.entryId">
                    <el-button
                      size="mini"
                    >查看详情</el-button>
                  </router-link>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalShixin"
              @current-change="handleChangeShixin"
            />
          </div>
        </div>
      </section>
      <section id="tab-sf" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">司法查封冻结扣押（{{ totalSifacdk }}）</h3>
        <div style="width:70%;margin-left:40px">
          <el-collapse>
            <el-collapse-item title="评估意见（此板块信息的经验判断）">
              <el-input
                v-model="sfkycfdesc"
                type="textarea"
                maxlength="255"
                show-word-limit
                placeholder="请输入内容"
              />
              <div style="margin-top:20px;margin-left:600px">
                <el-button v-if="sfkycfdesc" type="warning" @click="modMsg(6)">修改</el-button>
                <el-button v-else type="success" @click="addMsg(6)">添加</el-button>
              </div>
            </el-collapse-item>
          </el-collapse>

        </div>
        <div class="box2">
          <!-- 变更信息 -->
          <div class="cont">
            <el-table
              :data="Sifacdk"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                type="index"
                width="50"
              />
              <el-table-column
                prop="title"
                label="标题"
                width="350"
              />
              <el-table-column
                prop="body"
                label="内容"
                width="400"
              />
              <el-table-column
                prop="sortTimeString"
                label="时间"
              />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link :to="'/JudicialDecisions/kydjDetail/'+scope.row.entryId">
                    <el-button
                      size="mini"
                    >查看详情</el-button>
                  </router-link>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalSifacdk"
              @current-change="handleChangeSifacdk"
            />
          </div>
        </div>
      </section>
      <section id="tab-pm" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">司法拍卖（{{ totalJudicialSaleList }}）</h3>
        <div style="width:70%;margin-left:40px">
          <el-collapse>
            <el-collapse-item title="评估意见（此板块信息的经验判断）">
              <el-input
                v-model="sfpmdesc"
                type="textarea"
                maxlength="255"
                show-word-limit
                placeholder="请输入内容"
              />
              <div style="margin-top:20px;margin-left:600px">
                <el-button v-if="sfpmdesc" type="warning" @click="modMsg(7)">修改</el-button>
                <el-button v-else type="success" @click="addMsg(7)">添加</el-button>
              </div>
            </el-collapse-item>
          </el-collapse>

        </div>
        <div class="box2">
          <!-- 变更信息 -->
          <div class="cont">
            <el-table
              :data="JudicialSaleList"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                type="index"
                width="50"
              />
              <el-table-column
                prop="Name"
                label="标题"
              />
              <el-table-column label="操作" width="150">
                <template slot-scope="scope">
                  <router-link :to="'/JudicialDecisions/sfpmDetail/'+scope.row.Id">
                    <el-button
                      size="mini"
                    >查看详情</el-button>
                  </router-link>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalJudicialSaleList"
              @current-change="handleChangeJudicialSaleList"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import {
  getKtgg,
  getCpws,
  getFygg,
  getZxgg,
  getShixin,
  getSifacdk,
  getJudicialSaleList,
  getoneSaid,
  createoneSaid,
  editoneSaid
} from '@/api/JudicialDecisions'
export default {
  data() {
    return {
      entName: '',
      phone: '',
      isFixed: false,
      scrollHeight: 258,
      query: {
        entName: '',
        phone: '',
        page: 1,
        pageSize: 10
      },
      Ktgg: [],
      totalKtgg: 0,
      Cpws: [],
      totalCpws: 0,
      Fygg: [],
      totalFygg: 0,
      Zxgg: [],
      totalZxgg: 0,
      Shixin: [],
      totalShixin: 0,
      Sifacdk: [],
      totalSifacdk: 0,
      JudicialSaleList: [],
      totalJudicialSaleList: 0,
      ktggdesc: '',
      pjwsdesc: '',
      fyggdesc: '',
      zxggdesc: '',
      sxggdesc: '',
      sfkycfdesc: '',
      sfpmdesc: '',
      query1: {
        entName: '',
        phone: '',
        moduleId: '1'
      },
      query2: {
        entName: '',
        phone: '',
        moduleId: '2'
      },
      query3: {
        entName: '',
        phone: '',
        moduleId: '3'
      },
      query4: {
        entName: '',
        phone: '',
        moduleId: '4'
      },
      query5: {
        entName: '',
        phone: '',
        moduleId: '5'
      },
      query6: {
        entName: '',
        phone: '',
        moduleId: '6'
      },
      query7: {
        entName: '',
        phone: '',
        moduleId: '7'
      },
      query8: {
        entName: '',
        phone: '',
        oneSaid: '',
        moduleId: ''
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
    this.query.entName = this.query8.entName = this.query1.entName = this.entName = localStorage.getItem('entName')
    this.query.phone = this.query8.phone = this.query1.phone = this.phone = localStorage.getItem('phone')
    // 开庭公告
    getKtgg(this.query).then(res => {
      // console.log(res)
      this.Ktgg = res.data.result
      this.totalKtgg = res.data.paging.total
    })
    // 开庭公告留言
    getoneSaid(this.query1).then(res => {
      // console.log(res)
      this.ktggdesc = res.data.result.oneSaid
    })
    // 判决文书
    getCpws(this.query).then(res => {
      // console.log(res)
      this.Cpws = res.data.result
      this.totalCpws = res.data.paging.total
    })
    // 判决文书留言
    this.query2.entName = localStorage.getItem('entName')
    this.query2.phone = localStorage.getItem('phone')
    getoneSaid(this.query2).then(res => {
      // console.log(res)
      this.pjwsdesc = res.data.result.oneSaid
    })
    // 法院公告
    getFygg(this.query).then(res => {
      // console.log(res)
      this.Fygg = res.data.result
      this.totalFygg = res.data.paging.total
    })
    // 法院公告留言
    this.query3.entName = localStorage.getItem('entName')
    this.query3.phone = localStorage.getItem('phone')
    getoneSaid(this.query3).then(res => {
      // console.log(res)
      this.fyggdesc = res.data.result.oneSaid
    })
    // 执行公告
    getZxgg(this.query).then(res => {
      // console.log(res)
      this.Zxgg = res.data.result
      this.totalZxgg = res.data.paging.total
    })
    // 执行公告留言
    this.query4.entName = localStorage.getItem('entName')
    this.query4.phone = localStorage.getItem('phone')
    getoneSaid(this.query4).then(res => {
      // console.log(res)
      this.zxggdesc = res.data.result.oneSaid
    })
    // 失信公告
    getShixin(this.query).then(res => {
      // console.log(res)
      this.Shixin = res.data.result
      this.totalShixin = res.data.paging.total
    })
    // 失信公告留言
    this.query5.entName = localStorage.getItem('entName')
    this.query5.phone = localStorage.getItem('phone')
    getoneSaid(this.query5).then(res => {
      // console.log(res)
      this.sxggdesc = res.data.result.oneSaid
    })
    // 司法查封冻结扣押
    getSifacdk(this.query).then(res => {
      // console.log(res)
      this.Sifacdk = res.data.result
      this.totalSifacdk = res.data.paging.total
    })
    // 司法查封冻结扣押留言
    this.query6.entName = localStorage.getItem('entName')
    this.query6.phone = localStorage.getItem('phone')
    getoneSaid(this.query6).then(res => {
      // console.log(res)
      this.sfkycfdesc = res.data.result.oneSaid
    })
    // 司法拍卖
    getJudicialSaleList(this.query).then(res => {
      // console.log(res)
      this.JudicialSaleList = res.data.result
      this.totalJudicialSaleList = res.data.paging.total
    })
    // // 司法拍卖留言
    this.query7.entName = localStorage.getItem('entName')
    this.query7.phone = localStorage.getItem('phone')
    getoneSaid(this.query7).then(res => {
      // console.log(res)
      this.sfpmdesc = res.data.result.oneSaid
    })
  },
  methods: {
    // 吸顶效果
    initHeight() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      this.isFixed = scrollTop > this.scrollHeight
    },

    // 开庭公告分页
    handleChangeKtgg(val) {
      // console.log(val)
      this.Ktgg = []
      this.query.page = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getKtgg(this.query).then(res => {
        // console.log(res)
        this.Ktgg = res.data.result
      })
    },
    // 判决文书分页
    handleChangeCpws(val) {
      this.Cpws = []
      this.query.page = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getCpws(this.query).then(res => {
        this.Cpws = res.data.result
      })
    },
    // 法院公告分页
    handleChangeFygg(val) {
      this.Fygg = []
      this.query.page = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getFygg(this.query).then(res => {
        this.Fygg = res.data.result
      })
    },
    // 执行公告分页
    handleChangeZxgg(val) {
      this.Zxgg = []
      this.query.page = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getZxgg(this.query).then(res => {
        this.Zxgg = res.data.result
      })
    },
    // 失信公告分页
    handleChangeShixin(val) {
      this.Shixin = []
      this.query.page = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getShixin(this.query).then(res => {
        this.Shixin = res.data.result
      })
    },
    // 司法查封冻结扣押分页
    handleChangeSifacdk(val) {
      this.Sifacdk = []
      this.query.page = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getSifacdk(this.query).then(res => {
        this.Sifacdk = res.data.result
      })
    },
    // 司法拍卖分页
    handleChangeJudicialSaleList(val) {
      this.JudicialSaleList = []
      this.query.page = val
      this.query.entName = this.entName
      this.query.phone = this.phone
      getJudicialSaleList(this.query).then(res => {
        this.JudicialSaleList = res.data.result
      })
    },

    // 添加留言
    addMsg(e) {
      if (e === 1) {
        if (this.ktggdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.ktggdesc
          this.query8.moduleId = '1'
          createoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '添加成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 2) {
        if (this.pjwsdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.pjwsdesc
          this.query8.moduleId = '2'
          createoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '添加成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 3) {
        if (this.fyggdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.fyggdesc
          this.query8.moduleId = '3'
          createoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '添加成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 4) {
        if (this.zxggdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.zxggdesc
          this.query8.moduleId = '4'
          createoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '添加成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 5) {
        if (this.sxggdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.sxggdesc
          this.query8.moduleId = '5'
          createoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '添加成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 6) {
        if (this.sfkycfdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.sfkycfdesc
          this.query8.moduleId = '6'
          createoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '添加成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 7) {
        if (this.sfpmdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.sfpmdesc
          this.query8.moduleId = '7'
          createoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '添加成功',
                type: 'success'
              })
            }
          })
        }
      }
    },
    // 修改留言
    modMsg(e) {
      if (e === 1) {
        if (this.ktggdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.ktggdesc
          this.query8.moduleId = '1'
          editoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '修改成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 2) {
        if (this.pjwsdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.pjwsdesc
          this.query8.moduleId = '2'
          editoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '修改成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 3) {
        if (this.fyggdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.fyggdesc
          this.query8.moduleId = '3'
          editoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '修改成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 4) {
        if (this.zxggdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.zxggdesc
          this.query8.moduleId = '4'
          editoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '修改成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 5) {
        if (this.sxggdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.sxggdesc
          this.query8.moduleId = '5'
          editoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '修改成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 6) {
        if (this.sfkycfdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.sfkycfdesc
          this.query8.moduleId = '6'
          editoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '修改成功',
                type: 'success'
              })
            }
          })
        }
      }
      if (e === 7) {
        if (this.sfpmdesc === '') {
          this.$message({
            message: '内容不能为空',
            type: 'warning'
          })
        } else {
          this.query8.oneSaid = this.sfpmdesc
          this.query8.moduleId = '7'
          editoneSaid(this.query8).then(res => {
            // console.log(res)
            if (res.data.code === 200) {
              this.$message({
                message: '修改成功',
                type: 'success'
              })
            }
          })
        }
      }
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

