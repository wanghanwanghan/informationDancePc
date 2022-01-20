<template>
  <div>
    <div id="biaoti" >
      每日信动SCRM一站式客户运营管理平台
    </div>
    <div style="width: 90%; margin: 5% 5% 0% 5%; height: 60px;">
      <div class="gongneng" style="float: left;margin-left: 0%;">市场获客提升</div>
      <div class="gongneng">营销转化增长</div>
      <div class="gongneng" style="margin-right: 0;float: right;">高效便捷运营</div>
    </div>
    <div style="margin: 2% 5%;width: 90%;height: 260px;">
      <table style="width: 100%">
        <tr>
          <td class = 'bigtd'>
            <div class="zuofu" >
              <p class="wenan2">寻找目标</p>
            </div>
            <div class = 'wenan'>海量企业库</div>
          </td>
          <td class="smalltd"><div class="youbian" >》 </div></td>
          <td class = 'bigtd'>
            <div class="zuofu" >
              <p class="wenan2">行业聚焦</p>
            </div>
            <div class = 'wenan'>行业四级分类</div>
          </td>
          <td class="smalltd"><div class="youbian" >》 </div></td>
          <td class = 'bigtd'>
            <div class="zuofu" >
              <p class="wenan2">销售分配</p>
            </div>
            <div class = 'wenan'>准确匹配销售</div>
          </td>
          <td class="smalltd"><div class="youbian" >》 </div></td>
          <td class = 'bigtd'>
            <div class="zuofu" >
              <p class="wenan2">线索公海</p>
            </div>
            <div class = 'wenan'>精准线索挖掘</div>
          </td>
          <td class="smalltd"><div class="youbian" >》 </div></td>
          <td class = 'bigtd'>
            <div class="zuofu" >
              <p class="wenan2" >深度转化</p>
            </div>
            <div class = 'wenan'>高粘性复合产品</div>
          </td>
          <td class="smalltd"><div class="youbian" >》 </div></td>
          <td class = 'bigtd'>
            <div class="zuofu" >
              <p class="wenan2" >成单复购</p>
            </div>
            <div class = 'wenan'>其它精细运营</div>
          </td>
        </tr>
      </table>
    </div>
    <div class="footwenan">敬请期待</div>
  </div>
</template>

<script>
export default {
  name: 'Crm',
  data() {
    return {}
  }
}
</script>

<style scoped>
#biaoti {
  font-size: 40px;
  font-weight: bolder;
  color: #1b2559;
  text-align: center;
  width: 100%;
  line-height: 100px
}
.gongneng{
  background-color: blue;
  width: 27%;
  float: left;
  line-height: 50px;
  color: white;
  text-align: center;
  height: 50px;
  margin: 0% 4.7%;
  font-size: 20px;
  letter-spacing: 7px;
}
.zuofu{
  width: 140px;
  height: 140px;
  text-align: center;
  box-shadow: 3px 3px 10px 0px #bbd0e5;
  line-height: 140px;
  color: #1b2559;
  padding: 30%;
}
.youbian{
  height: 140px;
  line-height: 85px;
  text-align: center;
  color: #a9a4a4;
  font-size: 28px;
  font-weight: bolder;
}
.wenan{
  width: 140px;
  padding-top: 30px;
  color: gray;
  text-align: center;
  letter-spacing: 2px;
}
.wenan2{
  width: 100%;
  height: 100%;
  font-size: 23px;
  letter-spacing: 2px;
  color: #233387;
  line-height: 100%;
  margin: 0px;
}
.footwenan{
  line-height: 60px;
  box-shadow: rgb(187 208 229) 3px 3px 10px 0px;
  height: 60px;
  width: 90%;
  color: #2525a3;
  font-size: 23px;
  letter-spacing: 7px;
  text-align: center;
  margin: 1% 5%;
}
/*.bigtd{*/
/*  width: 17%;*/
/*}*/
.smalltd{
  width: 10%;
}

</style>
