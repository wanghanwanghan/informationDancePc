<template>
  <div class="title-wrapper" style="height: 65px; padding-top: 15px;line-height: 25px;/* padding-left: 20px; */">{{ entname }}
    <span v-if="tag" :title="name" style="padding-left: 25px;font-size: 14px;color: #409EFF;cursor: pointer;">曾用名</span>
    <div>
      <el-tag v-for="(item,key) of tag" :type="tagStyleMap[key]" size="mini" class="biaoqian">{{ item }}</el-tag>
    </div>
  </div>
</template>

<script>
import { getBusinessScaleInfo, getEmploymenInfo, getTagInfo } from '@/api/JudicialDecisions'
import { getNamesInfo } from '@/api/EnterpriseBackground'

export default {
  name: 'BiaoQianInfo',
  data() {
    return {
      tagStyleMap: ['', 'success', 'info', 'warning', 'danger', '', 'success', 'info', 'warning'],
      name: '',
      businessScale: '',
      employmen: '',
      entname: '',
      tag: [],
      query: {
        entname: '',
        phone: '',
        xd_id: ''
      }
    }
  },
  mounted() {
    this.entname = localStorage.getItem('entName')
    this.query.entname = localStorage.getItem('entName')
    this.query.phone = localStorage.getItem('phone')
    this.query.xd_id = localStorage.getItem('xd_id')
    getBusinessScaleInfo(this.query).then(res => {
      if (res.data.code === 200) {
        this.businessScale = res.data.result.label
      }
    })
    getEmploymenInfo(this.query).then(res => {
      if (res.data.code === 200) {
        this.employmen = res.data.result.num
      }
    })
    getTagInfo(this.query).then(res => {
      if (res.data.code === 200) {
        for (var i in res.data.result){
          this.tag.push(res.data.result[i])
        }
      }
    })
    getNamesInfo(this.query).then(res => {
      var name = ''
      if (res.data.code === 200) {
        res.data.result.forEach((v) => {
          if (name.length === 0) {
            name = v
          } else {
            name = name + ',' + v
          }
        })
      }
      this.name = name
    })
  }
}
</script>

<style scoped>
.biaoqian{
  width: 84px;
  margin-left: 3px;
  text-align: center;
}
</style>
