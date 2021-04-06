<template>
  <div class="dndList">
    <div>
      <div :style="{width:width1}" class="dndList-list">
        <h3>已选字段（以下生成报告的字段顺序可拖拽调整）</h3>
        <h4>支持已有文本材料内容智能提取完成报告</h4>
        <div class="demo-image__preview" style="margin-bottom:15px;margin-left:70px">
          <el-image
            style="width: 360px; height: 175px"
            :src="require('../../assets/ocr.png')"
            :preview-src-list="srcList"
          />
        </div>

        <el-button type="primary" @click="open">生成报告</el-button>
        <draggable :set-data="setData" :list="list1" group="article" class="dragArea">
          <div v-for="element in list1" :key="element.id" class="list-complete-item1">

            <div class="list-complete-item-handle">
              {{ element.id }} {{ element.title }}
            </div>
            <div style="position:absolute;right:0px;">
              <span style="float: right ;margin-top: -20px;margin-right:5px;" @click="deleteEle(element)">
                <i style="color:#ff4949" class="el-icon-delete" />
              </span>
              <el-upload
                ref="upload"
                class="upload-demo"
                action="https://api.meirixindong.com/api/v1/comm/image/upload"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :file-list="fileList"
                :auto-upload="false"
                :headers="myHeaders"
                :data="{type:'ocr',phone:phone}"
                multiple
              >
                <el-button slot="trigger" size="small" type="primary">选取图片</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload(element.id,element.index)">上传图片</el-button>
              </el-upload>
            </div>
          </div>
        </draggable>

      </div>

      <div :style="{width:width2}" class="dndList-list">
        <h3>选择字段（点击生成到报告中的字段）</h3>
        <draggable :list="list2" group="article" class="dragArea">
          <div v-for="element in list2" :key="element.id" class="list-complete-item">
            <div class="list-complete-item-handle2" @click="pushEle(element)">
              {{ element.id }}  {{ element.title }}
            </div>
          </div>
        </draggable>
      </div>

    </div>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      :modal-append-to-body="false"
      width="30%"
    >
      <span>{{ msg }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisibles">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { createEasy, queue } from '@/api/article'
// import ElementUI from 'element-ui'
var token = localStorage.getItem('token')
export default {
  name: 'DndList',
  components: { draggable },
  props: {
    list1: {
      type: Array,
      default() {
        return []
      }
    },
    list2: {
      type: Array,
      default() {
        return []
      }
    },
    list1Title: {
      type: String,
      default: 'list1'
    },
    list2Title: {
      type: String,
      default: 'list2'
    },
    width1: {
      type: String,
      default: '48%'
    },
    width2: {
      type: String,
      default: '48%'
    }
  },
  data() {
    return {
      srcList: [
        require('../../assets/ocr.png')
      ],
      fileList: [],
      myHeaders: { Authorization: token },
      pjone: '',
      query: {
        phone: '',
        entName: '',
        reportNum: '',
        email: '',
        type: 'xd',
        dataKey: '',
        pay: false
      },
      dialogVisible: false,
      msg: '',
      fullscreenLoading: false,
      time: 1000,
      value: '',
      dataKey: '',
      query1: {
        phone: '',
        reportNum: '',
        catalogueNum: '',
        catalogueName: '',
        type: 'pdf',
        filename: ''
      },
      arr: []
    }
  },
  created() {
    this.phone = localStorage.getItem('phone')
    this.query1.phone = localStorage.getItem('phone')
    var rand = ''
    for (var i = 0; i < 8; i++) {
      rand += Math.floor(Math.random() * 10)
    }
    // console.log(rand)
    const reportNum = Date.now() + rand
    this.query1.reportNum = reportNum
    this.query.reportNum = reportNum
  },
  methods: {
    isNotInList1(v) {
      return this.list1.every(k => v.id !== k.id)
    },
    isNotInList2(v) {
      return this.list2.every(k => v.id !== k.id)
    },
    deleteEle(ele) {
      for (const item of this.list1) {
        if (item.id === ele.id) {
          const index = this.list1.indexOf(item)
          this.list1.splice(index, 1)
          // console.log(this.list1)
          break
        }
      }
      if (this.isNotInList2(ele)) {
        this.list2.unshift(ele)
      }
    },
    pushEle(ele) {
      for (const item of this.list2) {
        if (item.id === ele.id) {
          const index = this.list2.indexOf(item)
          this.list2.splice(index, 1)
          break
        }
      }
      if (this.isNotInList1(ele)) {
        this.list1.push(ele)
        // console.log(this.list1)
      }
    },
    setData(dataTransfer) {
      // to avoid Firefox bug
      // Detail see : https://github.com/RubaXa/Sortable/issues/1012
      dataTransfer.setData('Text', '')
    },
    open() {
      var arr = []
      this.list1.forEach(element => {
        arr.push(element.id)
        // console.log(element.id)
      })
      if (arr.length > 10) {
        this.time = (arr.length / 10) * 1000
      }

      const str = arr.toString()
      // console.log(str)
      this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
      }).then(({ value }) => {
        // this.$message({
        //   type: 'success',
        //   message: '你的邮箱是: ' + value
        // })
        // console.log(str)
        this.query.phone = localStorage.getItem('phone')
        this.query.entName = localStorage.getItem('reportName')
        this.query.email = value
        this.query.dataKey = str
        this.value = value
        this.dataKey = str
        createEasy(this.query).then(res => {
          // console.log(res)
          if (res.data.code === 210) {
            this.msg = res.data.msg
            this.dialogVisible = true
          } else {
            this.$notify({
              title: '成功',
              message: '可在线生成并查看',
              type: 'success'
            })
            this.$router.push({
              path: '/login',
              query: {
                activeName: 'second'
              }
            })
            localStorage.setItem('activeName', 'second')
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    dialogVisibles() {
      this.dialogVisible = false
      this.query.phone = localStorage.getItem('phone')
      this.query.entName = localStorage.getItem('reportName')
      this.query.email = this.value
      this.query.dataKey = this.dataKey
      this.query.pay = true
      createEasy(this.query).then(res => {
        // console.log(res)
        if (res.data.code === 220) {
          this.$confirm('余额不足，是否前往充值？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            // this.$message({
            //   type: 'success',
            //   message: '删除成功!'
            // })
            this.$router.push('/login')
            localStorage.setItem('activeName', 'third')
          }).catch(() => {
            // this.$message({
            //   type: 'info',
            //   message: '已取消删除'
            // })
            this.$router.go(0)
          })
        } else {
          this.$notify({
            title: '成功',
            message: '可在线生成并查看',
            type: 'success'
          })
          this.$router.push({
            path: '/login',
            query: {
              activeName: 'second'
            }
          })
          localStorage.setItem('activeName', 'second')
        }
      })
    },

    // 上传图片
    // upload(element) {
    //   // console.log(element)

    // },
    handleSuccess(response, file, fileList) {
      // console.log(response.result.file)
      this.arr.push(response.result.file)
      this.query1.filename = this.arr.toString()
      console.log(this.query1.filename)
      this.func()
    },
    func() {
      queue(this.query1).then(res => {
        // console.log(res)
        if (res.data.code === 200) {
          this.$message({
            message: '上传成功',
            type: 'success'
          })
          this.arr = []
        }
      })
    },
    submitUpload(element, index) {
      // console.log(111, element, index)
      // console.log(this.$refs)
      // console.log(this.$refs['upload'][index])
      // this.$refs['upload'][index].submit()
      if (element === '0-0') {
        this.query1.catalogueNum = '0-0'
        this.$refs['upload'][index].submit()
      }
      if (element === '0-1') {
        this.query1.catalogueNum = '0-1'
        this.$refs['upload'][index].submit()
      }
      if (element === '0-2') {
        this.query1.catalogueNum = '0-2'
        this.$refs['upload'][index].submit()
      }
      if (element === '0-3') {
        this.query1.catalogueNum = '0-3'
        this.$refs['upload'][index].submit()
      }
      if (element === '0-4') {
        this.query1.catalogueNum = '0-4'
        this.$refs['upload'][index].submit()
      }
      if (element === '0-5') {
        this.query1.catalogueNum = '0-5'
        this.$refs['upload'][index].submit()
      }
      if (element === '0-6') {
        this.query1.catalogueNum = '0-6'
        this.$refs['upload'][index].submit()
      }
      if (element === '0-7') {
        this.query1.catalogueNum = '0-7'
        this.$refs['upload'][index].submit()
      }
      if (element === '1-0') {
        this.query1.catalogueNum = '1-0'
        this.$refs['upload'][index].submit()
      }
      if (element === '1-1') {
        this.query1.catalogueNum = '1-1'
        this.$refs['upload'][index].submit()
      }
      if (element === '1-2') {
        this.query1.catalogueNum = '1-2'
        this.$refs['upload'][index].submit()
      }
      if (element === '1-3') {
        this.query1.catalogueNum = '1-3'
        this.$refs['upload'][index].submit()
      }
      if (element === '1-4') {
        this.query1.catalogueNum = '1-4'
        this.$refs['upload'][index].submit()
      }
      if (element === '1-5') {
        this.query1.catalogueNum = '1-5'
        this.$refs['upload'][index].submit()
      }
      if (element === '1-6') {
        this.query1.catalogueNum = '1-6'
        this.$refs['upload'][index].submit()
      }
      if (element === '1-7') {
        this.query1.catalogueNum = '1-7'
        this.$refs['upload'][index].submit()
      }
      if (element === '1-8') {
        this.query1.catalogueNum = '1-8'
        this.$refs['upload'][index].submit()
      }
      if (element === '1-9') {
        this.query1.catalogueNum = '1-9'
        this.$refs['upload'][index].submit()
      }
      if (element === '1-10') {
        this.query1.catalogueNum = '1-10'
        this.$refs['upload'][index].submit()
      }
      if (element === '2-0') {
        this.query1.catalogueNum = '2-0'
        this.$refs['upload'][index].submit()
      }
      if (element === '2-1') {
        this.query1.catalogueNum = '2-1'
        this.$refs['upload'][index].submit()
      }
      if (element === '2-2') {
        this.query1.catalogueNum = '2-2'
        this.$refs['upload'][index].submit()
      }
      if (element === '3-0') {
        this.query1.catalogueNum = '3-0'
        this.$refs['upload'][index].submit()
      }
      if (element === '4-0') {
        this.query1.catalogueNum = '4-0'
        this.$refs['upload'][index].submit()
      }
      if (element === '5-0') {
        this.query1.catalogueNum = '5-0'
        this.$refs['upload'][index].submit()
      }
      if (element === '5-1') {
        this.query1.catalogueNum = '5-1'
        this.$refs['upload'][index].submit()
      }
      if (element === '5-2') {
        this.query1.catalogueNum = '5-2'
        this.$refs['upload'][index].submit()
      }
      if (element === '5-3') {
        this.query1.catalogueNum = '5-3'
        this.$refs['upload'][index].submit()
      }
      if (element === '5-4') {
        this.query1.catalogueNum = '5-4'
        this.$refs['upload'][index].submit()
      }
      if (element === '6-0') {
        this.query1.catalogueNum = '6-0'
        this.$refs['upload'][index].submit()
      }
      if (element === '6-1') {
        this.query1.catalogueNum = '6-1'
        this.$refs['upload'][index].submit()
      }
      if (element === '6-2') {
        this.query1.catalogueNum = '6-2'
        this.$refs['upload'][index].submit()
      }
      if (element === '6-3') {
        this.query1.catalogueNum = '6-3'
        this.$refs['upload'][index].submit()
      }
      if (element === '6-4') {
        this.query1.catalogueNum = '6-4'
        this.$refs['upload'][index].submit()
      }
      if (element === '6-5') {
        this.query1.catalogueNum = '6-5'
        this.$refs['upload'][index].submit()
      }
      if (element === '7-0') {
        this.query1.catalogueNum = '7-0'
        this.$refs['upload'][index].submit()
      }
      if (element === '7-1') {
        this.query1.catalogueNum = '7-1'
        this.$refs['upload'][index].submit()
      }
      if (element === '8-0') {
        this.query1.catalogueNum = '8-0'
        this.$refs['upload'][index].submit()
      }
      if (element === '8-1') {
        this.query1.catalogueNum = '8-1'
        this.$refs['upload'][index].submit()
      }
      if (element === '8-2') {
        this.query1.catalogueNum = '8-2'
        this.$refs['upload'][index].submit()
      }
      if (element === '8-3') {
        this.query1.catalogueNum = '8-3'
        this.$refs['upload'][index].submit()
      }
      if (element === '9-0') {
        this.query1.catalogueNum = '9-0'
        this.$refs['upload'][index].submit()
      }
      if (element === '9-1') {
        this.query1.catalogueNum = '9-1'
        this.$refs['upload'][index].submit()
      }
      if (element === '9-2') {
        this.query1.catalogueNum = '9-2'
        this.$refs['upload'][index].submit()
      }
      if (element === '9-3') {
        this.query1.catalogueNum = '9-3'
        this.$refs['upload'][index].submit()
      }
      if (element === '10-0') {
        this.query1.catalogueNum = '10-0'
        this.$refs['upload'][index].submit()
      }
      if (element === '10-1') {
        this.query1.catalogueNum = '10-1'
        this.$refs['upload'][index].submit()
      }
      if (element === '10-2') {
        this.query1.catalogueNum = '10-2'
        this.$refs['upload'][index].submit()
      }
      if (element === '10-3') {
        this.query1.catalogueNum = '10-3'
        this.$refs['upload'][index].submit()
      }
      if (element === '10-4') {
        this.query1.catalogueNum = '10-4'
        this.$refs['upload'][index].submit()
      }
      if (element === '10-5') {
        this.query1.catalogueNum = '10-5'
        this.$refs['upload'][index].submit()
      }
      if (element === '11-0') {
        this.query1.catalogueNum = '11-0'
        this.$refs['upload'][index].submit()
      }
      if (element === '11-1') {
        this.query1.catalogueNum = '11-1'
        this.$refs['upload'][index].submit()
      }
      if (element === '11-2') {
        this.query1.catalogueNum = '11-2'
        this.$refs['upload'][index].submit()
      }
      if (element === '11-3') {
        this.query1.catalogueNum = '11-3'
        this.$refs['upload'][index].submit()
      }
      if (element === '11-4') {
        this.query1.catalogueNum = '11-4'
        this.$refs['upload'][index].submit()
      }
      if (element === '11-5') {
        this.query1.catalogueNum = '11-5'
        this.$refs['upload'][index].submit()
      }
      if (element === '11-6') {
        this.query1.catalogueNum = '11-6'
        this.$refs['upload'][index].submit()
      }
      if (element === '11-7') {
        this.query1.catalogueNum = '11-7'
        this.$refs['upload'][index].submit()
      }
      if (element === '11-8') {
        this.query1.catalogueNum = '11-8'
        this.$refs['upload'][index].submit()
      }
      if (element === '11-9') {
        this.query1.catalogueNum = '11-9'
        this.$refs['upload'][index].submit()
      }
      if (element === '11-10') {
        this.query1.catalogueNum = '11-10'
        this.$refs['upload'][index].submit()
      }
      if (element === '12-0') {
        this.query1.catalogueNum = '12-0'
        this.$refs['upload'][index].submit()
      }
      if (element === '12-1') {
        this.query1.catalogueNum = '12-1'
        this.$refs['upload'][index].submit()
      }
      if (element === '13-0') {
        this.query1.catalogueNum = '13-0'
        this.$refs['upload'][index].submit()
      }
      if (element === '13-1') {
        this.query1.catalogueNum = '13-1'
        this.$refs['upload'][index].submit()
      }
      if (element === '13-2') {
        this.query1.catalogueNum = '13-2'
        this.$refs['upload'][index].submit()
      }
      if (element === '13-3') {
        this.query1.catalogueNum = '13-3'
        this.$refs['upload'][index].submit()
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    }
  }
}
</script>

<style lang="scss" scoped>
.dndList {
  background: #fff;
  padding-bottom: 40px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  .dndList-list {
    float: left;
    padding-bottom: 30px;
    &:first-of-type {
      margin-right: 2%;
    }
    .dragArea {
      margin-top: 15px;
      min-height: 50px;
      padding-bottom: 30px;
    }
  }
}

.list-complete-item1 {
  cursor: pointer;
  width:295px;
  position: relative;
  font-size: 14px;
  padding: 5px 12px;
  margin-top: 4px;
  border: 1px solid #bfcbd9;
  transition: all 1s;
  float: left;
  margin-bottom:100px;
}
.list-complete-item {
  cursor: pointer;
  position: relative;
  font-size: 14px;
  padding: 5px 12px;
  margin-top: 4px;
  border: 1px solid #bfcbd9;
  transition: all 1s;
}
.upload-demo{
    position: absolute;
    right: -205px;
    top: -23px;
}

.list-complete-item-handle {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 50px;
}

.list-complete-item-handle2 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 20px;
}

.list-complete-item.sortable-chosen {
  background: #4AB7BD;
}

.list-complete-item.sortable-ghost {
  background: #30B08F;
}

.list-complete-enter,
.list-complete-leave-active {
  opacity: 0;
}
</style>
