<template>
  <div class="box">
    <!-- 主营产品 -->
    <div>
      <section id="tab-zq" class="et-slide" style="min-height:100px;margin-top:50px;">
        <h3 style="margin-left:20px;">产品数{{ total }}</h3>
        <div class="box2">
          <div class="cont">
            <el-table
              :data="list"
              border
              style="width: 100%"
            >
              <el-table-column
                label="序号"
                type="index"
                width="50"
              />
              <el-table-column
                prop="XZQH_NAME"
                label="注册地"
                width="200"
              />
              <el-table-column
                prop="STANDARD_CODE"
                label="标准编号"
                width="200"
              />
              <el-table-column
                prop="STANDARD_NAME"
                label="标准名称"
                width="240"
              />
              <el-table-column
                prop="PUBLIC_DATE"
                label="发布日期"
                width="240"
              />
              <el-table-column
                prop="PRODUCT_NAME"
                label="产品名称"
              />
            </el-table>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="total"
              @current-change="handleChange"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { getProductStandard } from '@/api/article'
export default {
  data() {
    return {
      query: {
        entName: '',
        phone: '',
        page: 1,
        pageSize: 10
      },
      total: 0,
      list: []
    }
  },
  created() {
    this.query.entName = localStorage.getItem('entName')
    this.query.phone = localStorage.getItem('phone')
    getProductStandard(this.query).then(res => {
      // console.log(res)
      this.total = res.data.paging.total
      this.list = res.data.result
    })
  },
  methods: {
    handleChange(val) {
      this.list = []
      this.query.page = val
      getProductStandard(this.query).then(res => {
        this.list = res.data.result
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
