<template>
  <div class="body-wrapper">
    <div class="logo-wrapper">
<!--      <img class="logo" src="https://api.meirixindong.com/Static/Image/Image/xdzd_logo_big.jpeg" alt=""/>-->
            <img class="logo" src="https://api.meirixindong.com/Static/Image/Image/xdkd.png" alt="">
    </div>
    <div class="content-wrapper">
      <div>
        <table class="search-table" cellspacing="15">
          <tr>
            <td class="search-table-td bg-color">企业名称</td>
            <td class="search-table-td bg-color">企业人名</td>
            <td class="search-table-td bg-color">企业地址</td>
            <td class="search-table-td bg-color">企业注册资金</td>
          </tr>
          <tr>
            <td class="search-table-td">
              <el-input
                class="search-table-input"
                placeholder="支持模糊搜索"
                v-model="search_cond.basic_entname"
                clearable>
              </el-input>
            </td>
            <td class="search-table-td">
              <el-input
                class="search-table-input"
                placeholder=""
                v-model="search_cond.basic_person_name"
                clearable>
              </el-input>
            </td>
            <td class="search-table-td">
              <el-input
                class="search-table-input"
                placeholder="支持模糊搜索"
                v-model="search_cond.basic_dom"
                clearable>
              </el-input>
            </td>
            <td class="search-table-td">
              <el-cascader
                class="search-table-input"
                ref="regcap_ref"
                :options="regcap"
                :show-all-levels="false"
                collapse-tags
                clearable
                @change="getCheckedNodes"
              ></el-cascader>
            </td>
          </tr>
          <tr class="search-table-tr">
            <td class="search-table-td bg-color">企业行业</td>
            <td class="search-table-td bg-color">成立日期</td>
            <td class="search-table-td bg-color">企业类型</td>
            <td class="search-table-td bg-color">统一信用代码</td>
          </tr>
          <tr>
            <td class="search-table-td">
              <el-cascader
                class="search-table-input"
                ref="nicid_ref"
                :options="nicid"
                :props="{multiple: true}"
                :show-all-levels="false"
                collapse-tags
                clearable
                @change="getCheckedNodes"
              ></el-cascader>
            </td>
            <td class="search-table-td">
              <el-date-picker
                v-model="search_cond.basic_esdate"
                style="width: 100%"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </td>
            <td class="search-table-td">
              <el-cascader
                class="search-table-input"
                ref="enttype_ref"
                :options="enttype"
                :props="{multiple: true}"
                :show-all-levels="false"
                collapse-tags
                clearable
                @change="getCheckedNodes"
              ></el-cascader>
            </td>
            <td class="search-table-td">
              <el-input
                class="search-table-input"
                placeholder="支持模糊搜索"
                v-model="search_cond.basic_uniscid"
                clearable>
              </el-input>
            </td>
          </tr>
          <tr class="search-table-tr">
            <td class="search-table-td bg-color">员工社保人数</td>
            <td class="search-table-td bg-color">企业所属地区</td>
            <td class="search-table-td bg-color">融资轮次</td>
            <td class="search-table-td bg-color">经营范围</td>
          </tr>
          <tr>
            <td class="search-table-td">
              <el-cascader
                class="search-table-input"
                ref="sonum_ref"
                :options="sonum"
                :show-all-levels="false"
                collapse-tags
                clearable
                @change="getCheckedNodes"
              ></el-cascader>
            </td>
            <td class="search-table-td">
              <el-cascader
                class="search-table-input"
                ref="address_ref"
                :options="address"
                :props="{multiple: true}"
                :show-all-levels="false"
                collapse-tags
                clearable
                @change="getCheckedNodes"
              ></el-cascader>
            </td>
            <td class="search-table-td">
              <el-cascader
                class="search-table-input"
                ref="vc_round_ref"
                :options="vc_round"
                :props="{multiple: true}"
                :show-all-levels="false"
                collapse-tags
                clearable
                @change="getCheckedNodes"
              ></el-cascader>
            </td>
            <td class="search-table-td">
              <el-input
                class="search-table-input"
                placeholder="支持模糊搜索 空格分割"
                v-model="search_cond.basic_opscope"
                clearable>
              </el-input>
            </td>
          </tr>
        </table>
      </div>
      <RobotPick ref="getNodeRef"></RobotPick>
      <div style="text-align: center;line-height: 100px">
        <el-button slot="reference" style="width: 150px;" type="success" @click="IntelligentSearch">智能搜索</el-button>
        <el-button style="width: 150px;" type="primary" @click="search(1)">搜索</el-button>
        <!--        <el-button style="width: 150px;" type="primary" @click="jumpHY">创投企业搜产品</el-button>-->
      </div>
      <div>
        <div class="search-res-wrapper">
          <el-table
            :data="search_res"
            v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.6)"
            min-height="100"
            max-height="600"
            style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="经营范围">
                    <span>{{ props.row.OPSCOPE }}</span>
                  </el-form-item>
                  <el-form-item label="统一代码">
                    <span>{{ props.row.UNISCID }}</span>
                  </el-form-item>
                  <el-form-item label="登记机关">
                    <span>{{ props.row.REGORG }}</span>
                  </el-form-item>
                  <el-form-item label="行业">
                    <span>{{ props.row.nic_id }}</span>
                  </el-form-item>
                  <el-form-item label="注册地">
                    <span>{{ props.row.DOM }}</span>
                  </el-form-item>
                  <el-form-item label="地区">
                    <span>{{ props.row.region_id }}</span>
                  </el-form-item>
                  <el-form-item label="网址">
                    <span>{{ props.row.website }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column
              label="名称"
              prop="ENTNAME"
              align="center">
            </el-table-column>
            <el-table-column
              label="法人"
              prop="faren"
              align="center">
            </el-table-column>
            <el-table-column
              label="状态"
              prop="ENTSTATUS"
              width="130"
              align="center">
            </el-table-column>
            <el-table-column
              label="类型"
              prop="ENTTYPE"
              align="center">
            </el-table-column>
            <el-table-column
              label="成立日期"
              prop="ESDATE"
              width="100"
              align="center">
            </el-table-column>
            <el-table-column
              label="注册资本"
              prop="REGCAP"
              width="180"
              align="center">
            </el-table-column>
            <el-table-column label="规模" width="100" align="center">
              <template slot-scope="props">
                <el-tooltip placement="right" effect="light">
                  <div slot="content">{{ props.row.vendincScale[1] }}</div>
                  <el-tag>{{ props.row.vendincScaleDesc }}</el-tag>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column label="详情" align="center" width="150">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">查看
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="footer-wrapper">
      <el-pagination
        background
        layout="total, prev, pager, next"
        :total="paginate.total"
        :page-size="20"
        @current-change="pageChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import req from '@/utils/req'
import { nicid } from '@/data/nicid'
import { enttype } from '@/data/enttype'
import { address } from '@/data/address'
import { regcap } from '@/data/regcap'
import { sonum } from '@/data/sonum'
import { vc_round } from '@/data/vs_round'
import RobotPick from '@/components/RobotPick'

export default {
  name: 'HomeCont',
  components: { RobotPick },
  props: {},
  data() {
    return {
      loading: true,
      nicid: nicid,
      enttype: enttype,
      address: address,
      regcap: regcap,
      sonum: sonum,
      vc_round: vc_round,
      search_res: [],
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
        jingying_vc_round: '',
        basic_opscope: '',
        basic_status: ''
      },
      paginate: {
        total: 0
      }
    }
  },
  inject: ['reload'],
  computed: {},
  mounted() {
    this.search(1)
  },
  methods: {
    IntelligentSearch() {
      let treeNode = this.$refs.getNodeRef.getNode()
      if (treeNode.length > 0) {
        this.search_cond.basic_entname = ''
        this.search_cond.basic_nicid = ''
        this.search_cond.basic_status = ''
        this.search_cond.basic_opscope = ''
        //拼接查询条件
        treeNode.forEach(ele => {
          let arr = ele.cond.split('|')
          if (arr[0] === 'basic_entname') {
            this.search_cond.basic_entname += arr[1] + ' '
          } else if (arr[0] === 'basic_nicid') {
            this.search_cond.basic_nicid += arr[1] + ','
          } else if (arr[0] === 'basic_status') {
            this.search_cond.basic_status += arr[1] + ','
          } else if (arr[0] === 'basic_opscope') {
            this.search_cond.basic_opscope += arr[1] + ' '
          } else {
          }
        })
        this.search(1)
      }
    },
    jumpHY() {
      this.$router.push({ path: '/HomeCont_hy' })
    },
    handleEdit(index, row) {
      let routeUrl = this.$router.resolve({
        path: './SearchList',
        query: {
          entName: row.ENTNAME
        }
      })
      window.open(routeUrl.href, '_blank')
    },
    pageChange(index) {
      this.search(index)
    },
    search(page) {
      this.loading = true
      this.search_cond.page = page
      req.post('api/v1/lx/superSearch', this.search_cond, localStorage.getItem('token')).then(res => {
        if (res.data.code === 200) {
          this.paginate = res.data.paging

          if (res.data.result.length > 0) {
            res.data.result.forEach(item => {
              if (item.vendincScale[1] !== '未找到') {
                let desc = item.vendincScale[1].split('，')
                item.vendincScaleDesc = desc[0]
              }
            })
          }

          this.search_res = res.data.result
          this.loading = false
        } else {
          this.loading = false
        }
      })
    },
    getCheckedNodes() {
      let regcap = this.$refs.regcap_ref.getCheckedNodes(true)
      this.search_cond.basic_regcap = regcap[0] ? regcap[0].value : ''

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

      let vc_id = this.$refs.vc_round_ref.getCheckedNodes(true)
      if (vc_id[0]) {
        let vc_id_str = ''
        vc_id.forEach(item => {
          vc_id_str += item.value + ','
        })
        vc_id = vc_id_str.trim()
      } else {
        vc_id = ''
      }
      this.search_cond.jingying_vc_round = vc_id

      let enttype = this.$refs.enttype_ref.getCheckedNodes(true)
      if (enttype[0]) {
        let enttype_str = ''
        enttype.forEach(item => {
          enttype_str += item.value + ','
        })
        enttype = enttype_str.trim()
      } else {
        enttype = ''
      }
      this.search_cond.basic_enttype = enttype

      let sonum = this.$refs.sonum_ref.getCheckedNodes(true)
      this.search_cond.basic_ygrs = sonum[0] ? sonum[0].value : ''

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
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-table-expand {
  font-size: 0;
}

.demo-table-expand ::v-deep label {
  width: 90px;
  color: #409EFF;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
}

.body-wrapper {
  font-size: 14px;
  margin: 0 auto;
  width: 95%;

  .logo-wrapper {
    text-align: center;

    .logo {
      width: 450px;
      height: 130px;
    }
  }

  .content-wrapper {
    .search-table {
      width: 100%;

      .bg-color {
        font-weight: 700;
        color: #409EFF !important;
      }

      .search-table-td {
        width: 24%;
        color: #6f6f79;
      }

      .search-table-input {
        width: 100%;
      }

      .search-res-wrapper {

      }
    }
  }

  .footer-wrapper {
    margin-top: 15px;
    text-align: right;
  }
}
</style>
