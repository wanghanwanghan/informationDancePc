<template>
  <div class="bg">
    <div class="search-wrapper">
      <el-input v-model="search_val" placeholder="请输入搜索内容" class="input-with-select">
        <el-select slot="prepend" v-model="search_type" placeholder="请选择">
          <el-option label="智能搜索" value="1" />
        </el-select>
        <el-button slot="append" icon="el-icon-search" />
      </el-input>
    </div>
    <div class="cond-wrapper">
      <div v-model="optionCheckBox" class="cond-up" @change="handleChange_option">
        <Cond
          v-for="(item,index) of list"
          :key="index"
          :type="item.type"
          :title="item.title"
          :list="item.list"
          @set-value="setValue"
        />
      </div>
      <div v-show="show.cond_down" class="cond-down" />
      <el-button type="primary" @click="contrl_cond_down_show">更多筛选项目</el-button>
      <div class="cond-choice-wrapper">
        <div class="cond-word">已选(5)</div>
        <div class="cond-cond">
          <el-tag
            v-for="tag in tags"
            :key="tag.name"
            closable
            :type="tag.type"
          >
            {{ tag.name }}

          </el-tag>
        </div>
      </div>
    </div>
    <div class="search-res-wrapper">
      <div class="search-res-count">为您找到 2000+ 企业</div>
      <div class="pagination-wrapper">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
        />
      </div>
      <el-divider content-position="center">查询结果</el-divider>
      <div class="slide-div">
        <div class="search-res-info">
          <div class="logo-wrapper">
            <img
              class="logo"
              src="https://img1.baidu.com/it/u=4275492597,3128508246&fm=253&fmt=auto&app=138&f=JPEG?w=529&h=500"
            >
          </div>
          <div class="content-wrapper">
            <div class="ent-info-wrapper">
              <div class="info-wrapper">
                <div class="ent-name" @click="getDrawer('安利（中国）日用品有限公司','ABABABABABABABABAB')">安利（中国）日用品有限公司</div>
                <div class="ent-label">
                  <el-tag size="mini">标签一</el-tag>
                  <el-tag size="mini" type="success">标签二</el-tag>
                  <el-tag size="mini" type="info">标签三</el-tag>
                  <el-tag size="mini" type="warning">标签四</el-tag>
                  <el-tag size="mini" type="danger">标签五</el-tag>
                </div>
                <div class="ent-other-wrapper">
                  <el-row :gutter="10">
                    <el-col :span="2">
                      <div class="row-h">企业法人 :</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="row-h under">相亲对象</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="row-h">成立日期 :</div>
                    </el-col>
                    <el-col :span="3">
                      <div class="row-h under">2018-08-08</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="row-h">注册资本 :</div>
                    </el-col>
                    <el-col :span="3">
                      <div class="row-h under">100万</div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="2">
                      <div class="row-h">企业规模 :</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="row-h under">50-99人</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="row-h">企业网址 :</div>
                    </el-col>
                    <el-col :span="3">
                      <div class="row-h under">www.kengni.com</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="row-h">国标行业 :</div>
                    </el-col>
                    <el-col :span="6">
                      <div class="row-h under">金融业 > 其他金融业</div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="4">
                      <div class="row-h">统一社会信用代码 :</div>
                    </el-col>
                    <el-col :span="100">
                      <div class="row-h under">ABABABABABABABABABABABAB</div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="2">
                      <div class="row-h">经营地址 :</div>
                    </el-col>
                    <el-col :span="100">
                      <div class="row-h under">12312312312312312312312</div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="3">
                      <div class="row-h">基本信息 (99)</div>
                    </el-col>
                    <el-col :span="3">
                      <div class="row-h">工商详情 (99)</div>
                    </el-col>
                    <el-col :span="3">
                      <div class="row-h">招聘信息 (99)</div>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <div class="action-wrapper">
                <el-badge :value="12" class="item">
                  <el-button size="small" type="primary">领取线索</el-button>
                </el-badge>
              </div>
            </div>
            <div class="ent-desc-wrapper">
              <i class="el-icon-lightning" />
              <div>百度百科，百度百科，百度百科，百度百科，百度百科，百度百科，百度百科，百度百科，百度百科，百度百科</div>
            </div>
            <el-divider content-position="right" />
          </div>
        </div>
        <div class="search-res-info">
          <div class="logo-wrapper">
            <img
              class="logo"
              src="https://img1.baidu.com/it/u=4275492597,3128508246&fm=253&fmt=auto&app=138&f=JPEG?w=529&h=500"
            >
          </div>
          <div class="content-wrapper">
            <div class="ent-info-wrapper">
              <div class="info-wrapper">
                <div class="ent-name" @click="getDrawer('北京百程国际旅游股份有限公司','ABABABABABABABABAB')">北京百程国际旅游股份有限公司</div>
                <div class="ent-label">
                  <el-tag size="mini">标签一</el-tag>
                  <el-tag size="mini" type="success">标签二</el-tag>
                  <el-tag size="mini" type="info">标签三</el-tag>
                  <el-tag size="mini" type="warning">标签四</el-tag>
                  <el-tag size="mini" type="danger">标签五</el-tag>
                </div>
                <div class="ent-other-wrapper">
                  <el-row :gutter="10">
                    <el-col :span="2">
                      <div class="row-h">企业法人 :</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="row-h under">相亲对象</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="row-h">成立日期 :</div>
                    </el-col>
                    <el-col :span="3">
                      <div class="row-h under">2018-08-08</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="row-h">注册资本 :</div>
                    </el-col>
                    <el-col :span="3">
                      <div class="row-h under">100万</div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="2">
                      <div class="row-h">企业规模 :</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="row-h under">50-99人</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="row-h">企业网址 :</div>
                    </el-col>
                    <el-col :span="3">
                      <div class="row-h under">www.kengni.com</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="row-h">国标行业 :</div>
                    </el-col>
                    <el-col :span="6">
                      <div class="row-h under">金融业 > 其他金融业</div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="4">
                      <div class="row-h">统一社会信用代码 :</div>
                    </el-col>
                    <el-col :span="100">
                      <div class="row-h under">ABABABABABABABABABABABAB</div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="2">
                      <div class="row-h">经营地址 :</div>
                    </el-col>
                    <el-col :span="100">
                      <div class="row-h under">12312312312312312312312</div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="3">
                      <div class="row-h">基本信息 (99)</div>
                    </el-col>
                    <el-col :span="3">
                      <div class="row-h">工商详情 (99)</div>
                    </el-col>
                    <el-col :span="3">
                      <div class="row-h">招聘信息 (99)</div>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <div class="action-wrapper">
                <el-badge :value="12" class="item">
                  <el-button size="small" type="primary">领取线索</el-button>
                </el-badge>
              </div>
            </div>
            <div class="ent-desc-wrapper">
              <i class="el-icon-lightning" />
              <div>百度百科，百度百科，百度百科，百度百科，百度百科，百度百科，百度百科，百度百科，百度百科，百度百科</div>
            </div>
            <el-divider content-position="right" />
          </div>
        </div>
      </div>
    </div>
    <Drawer
      :entname="drawer_data.entname"
      :shx="drawer_data.shx"
      :drawer="show.show_drawer"
      @set-drawer-type="setDrawerType"
    />
  </div>
</template>

<script>
import Cond from '@/components/AdvancedSearch/components/Cond'
import Drawer from '@/components/AdvancedSearch/components/Drawer'

export default {
  name: 'ASIndex',
  components: { Drawer, Cond },
  props: {},
  data() {
    return {
      list: [],
      drawer_data: {
        entname: '',
        shx: ''
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
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ],
      optionCheckBox: []
    }
  },
  computed: {},
  created() {
    this.phone = localStorage.getItem('phone')
    this.token = localStorage.getItem('token')
  },
  mounted() {
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
        type: this.mt_rand_int(50) > 20 ? 'radio' : '',
        title: this.mt_rand_str(10),
        list: temp
      })
    }
    this.list = list

    this.$http.post('api/v1/xd/sdfadfadfadfadf', {}).then(({
      data: res
    }) => {
    }).catch((err) => {
    })
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
    },
    setValue(val) {
      this.value = val
    },
    getDrawer(entname, shx) {
      localStorage.setItem('entName', entname)
      this.drawer_data.entname = entname
      this.drawer_data.shx = shx
      this.show.show_drawer = !this.show.show_drawer
    },
    setDrawerType(type) {
      this.show.show_drawer = type
    },
    handleChange_option(val) {
      const itemTitle = val.path['9'].getElementsByClassName('title-wrapper').item(0).innerHTML
      this.tags = []
      val.currentTarget.getElementsByClassName('el-checkbox__original').forEach((value) => {
        const kidTitle = value.parentElement.parentElement.getElementsByClassName('el-checkbox__label').item(0).innerHTML
        if (value.checked) {
          this.tags.push({ name: itemTitle + '-' + kidTitle.replace(/<!---->/g, ""), type: value.value })
        }
      })
      val.currentTarget.getElementsByClassName('el-radio__original').forEach((value) => {
        const kidTitle = value.parentElement.parentElement.getElementsByClassName('el-radio__label').item(0).innerHTML
        if (value.checked) {
          this.tags.push({ name: itemTitle + '-' + kidTitle.replace(/<!---->/g, ""), type: value.value })
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
      height: 300px;
    }

    .cond-choice-wrapper {
      width: 100%;
      display: flex;
      height: 40px;
      line-height: 40px;

      .cond-word {
        width: 10%;
        height: 40px;
        line-height: 40px;
        text-align: center;
      }

      .cond-cond {
        flex: 1;
        height: 40px;
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
            width: 70%;
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
</style>
