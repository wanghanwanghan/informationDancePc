<template>
  <div class="bg">
    <div class="search-wrapper">
      <el-input id="search_input" v-model="search_val" placeholder="请根据企业名称，经营范围，业务商品等关键词内容搜索" class="input-with-select">
        <el-select slot="prepend" v-model="search_type" placeholder="请选择">
          <el-option label="智能搜索" value="1" />
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="submit" />
      </el-input>
      <el-button style="width:10%;background-color: #409EFF;  margin-top: 10px;  border-color: #409EFF;color: #FFF;" @click="saveParam">保存筛选条件</el-button>
    </div>
    <div class="cond-wrapper">
      <div v-bind="optionCheckBox" class="cond-up" @change="handleChange_option">
        <Cond
          v-for="(item,index) of list"
          :id="item.id"
          :key="index"
          :type="item.type"
          :title="item.title"
          :list="item.list"
          @set-value="setValue"
        />
      </div>
      <div v-show="show.cond_down" class="cond-down">
        <table class="search-table" cellspacing="15" style="width: 100%;padding-left: 20px;">
          <tr class="search-table-tr">
            <td class="search-table-td bg-color">国标行业</td>
            <td class="search-table-td">
              <el-cascader
                ref="nicid_ref"
                class="search-table-input"
                :options="nicid"
                :props="{multiple: true}"
                :show-all-levels="false"
                collapse-tags
                clearable
                @change="getCheckedNodes"
              />
            </td>
            <td class="search-table-td bg-color">战略新兴产业</td>
            <td class="search-table-td">
              <el-cascader
                ref="jlxxcy_ref"
                class="search-table-input"
                :options="jlxxcy"
                :props="{multiple: true}"
                :show-all-levels="false"
                collapse-tags
                clearable
                @change="getCheckedNodes"
              />
            </td>
            <td class="search-table-td bg-color">企业所属地区</td>
            <td class="search-table-td">
              <el-cascader
                ref="address_ref"
                class="search-table-input"
                :options="address"
                :props="{multiple: true}"
                :show-all-levels="false"
                collapse-tags
                clearable
                @change="getCheckedNodes"
              />
            </td>
            <td class="search-table-td bg-color">经营范围</td>
            <td class="search-table-td">
              <el-input
                v-model="search_cond.basic_opscope"
                class="search-table-input"
                placeholder="支持模糊搜索 空格分割"
                clearable
              />
            </td>
          </tr>
        </table>
      </div>
      <el-button id="gengduo" type="primary" @click="contrl_cond_down_show">更多筛选项目</el-button>
      <div class="cond-choice-wrapper">
        <div class="cond-word">已选({{ tags.length }})</div>
        <div class="cond-cond">
          <el-tag
            v-for="tag in tags"
            :key="tag.name"
            v-model="tagItem"
            :type="tag.type"
            closable
            @close="closeOption(tag.type)"
          >
            {{ tag.name }}

          </el-tag>
        </div>
      </div>
    </div>
    <div class="search-res-wrapper">
      <div class="search-res-count">为您找到 {{ paginate.total }}+ 企业</div>
      <div class="pagination-wrapper">
        <el-pagination
          background
          layout=" prev, pager, next"
          :total="paginate.total"
          :page-size="20"
          @current-change="BasePageChange"
        />
      </div>
      <el-divider content-position="center">查询结果</el-divider>
      <div v-for="(item,index) in data" :key="index" class="slide-div">
        <div class="search-res-info">
          <div class="logo-wrapper">
            <img
              class="logo"
              src="https://fakeimg.pl/200x200/?text=LOGO"
            >
          </div>
          <div class="content-wrapper">
            <div class="ent-info-wrapper">
              <div class="info-wrapper">
                <div class="ent-name" @click="getDrawer(item._source.name,item._source.xd_id)">{{ item._source.name }}</div>
                <div class="ent-label">
                  <el-tag v-for="(v,k) of item._source.tags" :type="tagStyleMap[k]" size="mini" >{{ v }}</el-tag>
                </div>
                <div class="ent-other-wrapper">
                  <el-row :gutter="10">
                    <el-col :span="2">
                      <div class="row-h">企业法人 :</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="row-h under">{{ item._source.legal_person_name }}</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="row-h">成立日期 :</div>
                    </el-col>
                    <el-col :span="5">
                      <div class="row-h under">{{ item._source.from_time }}</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="row-h">企业网址 :</div>
                    </el-col>
                    <el-col :span="4">
                      <div class="row-h under">{{ item._source.web }}</div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="2">
                      <div class="row-h">企业规模 :</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="row-h under">{{ item._source.tuan_dui_ren_shu }}人</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="row-h">注册资本 :</div>
                    </el-col>
                    <el-col :span="5">
                      <div class="row-h under">{{ item._source.reg_capital }}</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="row-h">国标行业 :</div>
                    </el-col>
                    <el-col :span="10">
                      <div class="row-h under">{{ item._source.si_ji_fen_lei_full_name }}</div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="4">
                      <div class="row-h">统一社会信用代码 :</div>
                    </el-col>
                    <el-col :span="7">
                      <div class="row-h under">{{ item._source.property1 }}</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="row-h">经营状态 :</div>
                    </el-col>
                    <el-col :span="6">
                      <div class="row-h under">{{ item._source.reg_status }}</div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="2">
                      <div class="row-h">经营地址 :</div>
                    </el-col>
                    <el-col :span="100">
                      <div class="row-h under">{{ item._source.tong_xun_di_zhi }}</div>
                    </el-col>
                  </el-row>
<!--                  <el-row :gutter="10">-->
<!--                    <el-col :span="3">-->
<!--                      <div class="row-h" style="cursor: pointer;" @click="getDrawer(item._source.name,item._source.xd_id)">工商信息</div>-->
<!--                    </el-col>-->
<!--                    <el-col :span="3">-->
<!--                      <div class="row-h" style="cursor: pointer;">业务/商品</div>-->
<!--                    </el-col>-->
<!--                    <el-col :span="3">-->
<!--                      <div class="row-h" style="cursor: pointer;">招聘信息 (99)</div>-->
<!--                    </el-col>-->
<!--                  </el-row>-->
                </div>
              </div>
              <div class="action-wrapper">
                <el-badge  class="item">
                  <el-button size="small" type="primary">客户触达</el-button>
                </el-badge>
              </div>
            </div>
            <div class="ent-desc-wrapper">
              <i class="el-icon-lightning" />
              <div>{{ item._source.gong_si_jian_jie.length>3?item._source.gong_si_jian_jie.slice(0,70):'' }}...</div>
            </div>
            <el-divider content-position="right" />
          </div>
        </div>
      </div>
    </div>
    <Drawer
      :entname="drawer_data.entname"
      :xd_id="drawer_data.xd_id"
      :drawer="show.show_drawer"
      @set-drawer-type="setDrawerType"
    />
  </div>
</template>

<script>
import Cond from '@/components/AdvancedSearch/components/Cond'
import Drawer from '@/components/AdvancedSearch/components/Drawer'
import { address } from '@/data/address'
import { sonum } from '@/data/sonum'
import { nicid } from '@/data/nicid'
import { jlxxcy } from '@/data/jlxxcy'
import { advancedSearch, getSearchOption, saveSearchHistroy } from '@/api/EnterpriseBackground'

export default {
  name: 'ASIndex',
  components: { Drawer, Cond },
  props: {},
  data() {
    return {
      name: '',
      loading: true,
      data: [],
      list: [],
      tagStyleMap: ['', 'success', 'info', 'warning', 'danger', '', 'success', 'info', 'warning'],
      drawer_data: {
        entname: '',
        xd_id: 0
      },
      show: {
        cond_down: false,
        show_drawer: false
      },
      phone: '',
      token: '',
      search_type: '1',
      search_val: '',
      value: [],
      tags: [],
      // tags: [
      //   { name: '标签一', type: '' },
      //   { name: '标签二', type: 'success' },
      //   { name: '标签三', type: 'info' },
      //   { name: '标签四', type: 'warning' },
      //   { name: '标签五', type: 'danger' }
      // ],
      optionCheckBox: [],
      tagItem: [],
      address: address,
      sonum: sonum,
      nicid: nicid,
      jlxxcy: jlxxcy,
      search_cond: {
        page: 1,
        phone: localStorage.getItem('phone'),
        basic_entname: '',
        basic_person_name: '',
        basic_dom: '',
        basic_regcap: '',
        basic_nicid: '',
        basic_esdate: '',
        basic_enttype: '',
        basic_uniscid: '',
        basic_ygrs: '',
        basic_regionid: '',
        basic_jlxxcyid: '',
        jingying_vc_round: '',
        basic_opscope: '',
        basic_status: ''
      },
      query: {
        phone: ''
      },
      searchQuery: {
        page: 1,
        phone: '',
        searchText: '',
        searchOption: '',
        basic_nicid: '',
        basic_opscope: '',
        basic_regionid: '',
        basic_jlxxcyid: '',
      },
      paginate: {
        total: 0
      }
    }
  },
  computed: {},
  created() {
    this.phone = localStorage.getItem('phone')
    this.token = localStorage.getItem('token')
  },
  mounted() {
    this.submitForm(1)
    const list = []
    for (let i = 0; i < this.mt_rand_int(50); i++) {
      const temp = []
      for (let j = 0; j < this.mt_rand_int(50); j++) {
        temp.push({
          id: this.mt_rand_int(50),
          name: this.mt_rand_str(10)
        })
      }

      list.push({
        id: this.mt_rand_int(50),
        name: this.mt_rand_str(10),
        type: this.mt_rand_int(50) > 20 ? '' : '',
        title: this.mt_rand_str(10),
        list: temp
      })
    }
    // this.list = list
    this.query.phone = localStorage.getItem('phone')
    getSearchOption(this.query).then(res => {
      const list = []
      if (res.data.code === 200) {
        res.data.result.forEach((value) => {
          var temp = []
          for (var i in value.data) {
            temp.push({
              id: i,
              name: value.data[i]
            })
          }
          // value.data.forEach((val, key) => {
          //
          // })
          list.push({
            id: value.pid,
            name: value.desc,
            title: value.desc,
            type: '',
            list: temp
          })
        })
        this.list = list
      }
    })
    var searchDiv = document.getElementById('search_input').nextElementSibling
    searchDiv.style.backgroundColor = '#409EFF'
    searchDiv.style.paddingLeft = '40px'
    searchDiv.style.paddingRight = '40px'
    searchDiv.getElementsByClassName('el-icon-search')[0].style.color = 'white'
  },
  methods: {
    mt_rand_int(length) {
      // 生成随机数
      return Math.round(Math.random() * length)
    },
    mt_rand_str(length) {
      // 生成随机字符串
      const arr = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'
      ]
      const arr_length = arr.length - 1
      let str = ''
      for (let i = 0; i < length; i++) {
        str = str + arr[Math.round(Math.random() * arr_length)]
      }
      return str
    },
    contrl_cond_down_show() {
      this.show.cond_down = !this.show.cond_down
      document.getElementById('gengduo').style.display = 'none'
    },
    setValue(val, id) {
      if (typeof val === 'object' && val.length > 0) {
        const kArr = val[0].split('-')
        const key = kArr[0]
        this.value[key] = []
        val.forEach((v, k) => {
          const iArr = v.split('-')
          this.value[key][k] = iArr[1]
        })
      } else if (val.length > 0) {
        const vArr = val.split('-')
        this.value[vArr[0]] = [vArr[1]]
      } else {
        this.value[id] = []
      }
    },
    getDrawer(entname, xd_id) {
      localStorage.setItem('entName', entname)
      localStorage.setItem('xd_id', xd_id)
      this.drawer_data.entname = entname
      this.drawer_data.xd_id = xd_id
      this.show.show_drawer = !this.show.show_drawer
    },
    setDrawerType(type) {
      this.show.show_drawer = type
    },
    closeOption(type) {
      this.$el.getElementsByClassName('el-checkbox is-checked').forEach((v) => {
        v.getElementsByClassName('el-checkbox__original').forEach((val) => {
          const vStr = val.getAttributeNode('value').value
          if (type === vStr) {
            v.click()
          }
        })
      })
      this.tags.forEach((tag, index) => {
        if (tag.type === type) {
          this.tags.splice(index, 1)
        }
      })
    },
    handleChange_option() {
      // console.log(this.value)
      this.tags = []
      this.value.forEach((checkV, key) => {
        this.list.forEach((val) => {
          if (val.id === key) {
            const title = val.title
            val.list.forEach((v) => {
              checkV.forEach((cv) => {
                const id = v.id + ''
                console.log(cv + '--' + id + '--' + val.id + '--' + key)
                if (cv === id) {
                  console.log(cv + '-/-' + id + '-/-' + val.id + '-/-' + key)
                  this.tags.push({ name: title + '-' + v.name, type: val.id + '-' + v.id })
                }
              })
            })
          }
        })
      })
    },
    getCheckedNodes() {
      let nicid = this.$refs.nicid_ref.getCheckedNodes(true)
      if (nicid[0]) {
        let nicid_str = ''
        nicid.forEach(item => {
          nicid_str += item.value + ','
        })
        nicid = nicid_str.trim()
      } else {
        nicid = ''
      }
      this.search_cond.basic_nicid = nicid

      let address = this.$refs.address_ref.getCheckedNodes(true)
      if (address[0]) {
        let address_str = ''
        address.forEach(item => {
          address_str += item.value + ','
        })
        address = address_str.trim()
      } else {
        address = ''
      }
      this.search_cond.basic_regionid = address
      let jlxxcy = this.$refs.jlxxcy_ref.getCheckedNodes(true)
      if (jlxxcy[0]) {
        let jlxxcy_str = ''
        jlxxcy.forEach(item => {
          jlxxcy_str += item.value + ','
        })
        jlxxcy = jlxxcy_str.trim()
      } else {
        jlxxcy = ''
      }
      this.search_cond.basic_jlxxcyid = jlxxcy
    },
    BasePageChange(index) {
      this.submitForm(index)
    },
    submit() {
      this.submitForm(1)
    },
    submitForm(page) {
      var searchOption = []
      this.value.forEach((v, key) => {
        searchOption.push({
          pid: key,
          value: v
        })
      })
      // console.log(searchOption)
      // console.log(JSON.stringify(searchOption))
      this.searchQuery.phone = localStorage.getItem('phone')
      this.searchQuery.searchText = this.search_val
      this.searchQuery.searchOption = JSON.stringify(searchOption)
      this.searchQuery.basic_regionid = this.search_cond.basic_regionid
      this.searchQuery.basic_jlxxcyid = this.search_cond.basic_jlxxcyid
      this.searchQuery.basic_nicid = this.search_cond.basic_nicid
      this.searchQuery.basic_opscope = this.search_cond.basic_opscope
      this.searchQuery.page = page
      // console.log(12)
      advancedSearch(this.searchQuery).then(res => {
        if (res.data.code === 200) {
          this.paginate = res.data.paging
          var dataV = res.data.result
          // dataV.forEach((val, key) => {
          //   console.log(val._source.name)
          //   var biaoQianQuery = {}
          //   biaoQianQuery.entname = val._source.name
          //   biaoQianQuery.phone = localStorage.getItem('phone')
          //   biaoQianQuery.xd_id = val._source.xd_id
          //   console.log(biaoQianQuery)
          //   getBusinessScaleInfo(biaoQianQuery).then(resv => {
          //     if (resv.data.code === 200) {
          //       dataV[key]._source.businessScale = resv.data.result.label
          //     }
          //   })
          //   getEmploymenInfo(biaoQianQuery).then(resv2 => {
          //     if (resv2.data.code === 200) {
          //       dataV[key]._source.employmen = resv2.data.result.num
          //     }
          //   })
          // })
          this.data = dataV
        }
      })
    },
    saveParam() {
      saveSearchHistroy(this.searchQuery).then(res => {
        if (res.data.code === 200) {
          this.$message.success('保存成功')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;

  .search-wrapper {
    width: 100%;

    .el-select ::v-deep .el-input {
      width: 130px;
    }

    .input-with-select ::v-deep .el-input-group__prepend {
      background-color: #fff;
    }
  }
  .input-with-select{
    width:90%;
  }
  .cond-wrapper {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    .cond-up {
      width: 100%;
      overflow: hidden;
    }

    .cond-down {
      width: 100%;
      height: 73px;
    }

    .cond-choice-wrapper {
      width: 100%;
      display: flex;
      //height: 40px;
      line-height: 40px;

      .cond-word {
        width: 10%;
        height: 40px;
        line-height: 40px;
        text-align: center;
      }

      .cond-cond {
        flex: 1;
        //height: 40px;
        line-height: 40px;

        .el-tag {
          margin-right: 10px;
        }
      }
    }
  }

  .search-res-wrapper {
    .slide-div {
      .search-res-info {
        width: 100%;
        display: flex;

        .logo-wrapper {
          width: 8%;
          height: 300px;

          .logo {
            width: 100%;
          }
        }

        .content-wrapper {
          flex: 1;
          margin-left: 50px;

          .ent-info-wrapper {
            width: 100%;
            display: flex;

            .info-wrapper {
              width: 80%;

              .ent-name {
                font-size: 25px;
                margin-bottom: 20px;
                border-bottom: 1px solid black;
                cursor: pointer;
                display: inline-block;
              }

              .ent-label {
                .el-tag {
                  margin-right: 10px;
                }

                margin-bottom: 20px;
              }

              .ent-other-wrapper {
                .row-h {
                  margin-bottom: 15px;
                }

                .under {
                }
              }
            }

            .action-wrapper {
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

          .ent-desc-wrapper {
            i {
              line-height: 30px;
            }

            div {
              margin-left: 6px;
            }

            font-size: 13px;
            width: 80%;
            height: 30px;
            line-height: 30px;
            display: flex;
            background-color: #eeeeee;
            padding-left: 10px
          }

        }
      }
    }

    .search-res-count, .pagination-wrapper {
      text-align: center;
      padding: 5px;
    }

  }
}
.row-h{
  font-size: 15px
}
//#search_input{
  .el-input-group__append{
    background-color: blue;

  }
//}
</style>
