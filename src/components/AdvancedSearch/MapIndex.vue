<template>
  <div class="bg" style="width:100%; height:100vh;">
    <amap zoom="10">
      <el-form :inline="true" class="user-search">
        <!--        <el-form-item>-->
        <!--          <el-button v-if="drawer.mode === 'none'" @click="drawer.mode = 'polygon'">多边形</el-button>-->
        <!--          <el-button v-if="drawer.mode === 'none'"  @click="drawer.mode = 'rectangle'">矩形</el-button>-->
        <!--          <el-button v-if="drawer.mode === 'none'"  @click="drawer.mode = 'circle'">圆形</el-button>-->
        <!--          <el-button v-if="drawer.mode != 'none'" @click="drawer.mode = 'none'">取消</el-button>-->
        <!--        </el-form-item>-->
        <el-form-item label="卫星图" style="float:right;color:#000000;position:relative">
          <el-switch v-model="satellite">卫星图</el-switch>
        </el-form-item>
        <el-form-item>
          <el-button @click="getDrawer">查询</el-button>
          <el-button @click="drawerClose">清除多边形</el-button>
        </el-form-item>
      </el-form>
      <amap-satellite-layer :visible="satellite" />
      <amap-scale />
      <amap-mouse-tool
        :mode.sync="drawer.mode"
        clear-when-close
        @draw="onDraw"
      />
      <amap-polygon
        :path.sync="drawer.polygon"
        :fill-color="styles.fill"
        :stroke-color="styles.stroke"
        :fill-opacity="0.5"
        editable
      />
      <!--    <amap-circle-->
      <!--      v-else-if="drawer.circle"-->
      <!--      :center.sync="drawer.circle.center"-->
      <!--      :radius.sync="drawer.circle.radius"-->
      <!--      :fill-color="styles.fill"-->
      <!--      :stroke-color="styles.stroke"-->
      <!--      :fill-opacity="0.5"-->
      <!--      editable-->
      <!--    />-->
      <!--      <amap-rectangle-->
      <!--        v-else-if="drawer.rectangle"-->
      <!--        :bounds.sync="drawer.rectangle"-->
      <!--        :fill-color="styles.fill"-->
      <!--        :stroke-color="styles.stroke"-->
      <!--        :fill-opacity="0.5"-->
      <!--        editable-->
      <!--      />-->
    </amap>
    <MapDrawer
      :areas="drawer_data.areas"
      :drawer="show.show_drawer"
      @set-drawer-type="setDrawerType"
      @close="drawerClose"
    />
  </div>
</template>
<script>
import { Amap, Polygon } from '@amap/amap-vue'
import MapDrawer from '@/components/AdvancedSearch/Map/MapDrawer'
// import Drawer from "./Drawer/Drawer";
function makeBounds(value) {
  const sw = new window.AMap.LngLat(value[0][0], value[0][1])
  const ne = new window.AMap.LngLat(value[1][0], value[1][1])
  return new window.AMap.Bounds(sw, ne)
}

export default {
  name: 'MapIndex',
  components: {
    Amap: Amap,
    AmapPolygon: Polygon,
    MapDrawer
  },
  data() {
    return {
      ready: true,
      styles: {
        fill: '#409EFF',
        stroke: '#000A58'
      },
      satellite: false,
      drawer: {
        type: 'polygon',
        mode: 'polygon',
        polygon: [
        ],
        circle: null,
        rectangle: null
      },
      show: {
        cond_down: false,
        show_drawer: false
      },
      drawer_data: {
        areas: ''
      }
    }
  },
  computed: {
  },
  watch: {
    'drawer.mode'(mode) {
      // console.log('drawer.mode', mode)
      // if (mode !== 'none') {
      //   const { drawer } = this;
      //   drawer.type = 'none';
      //   drawer.polygon = null;
      //
      // }
    }
  },
  methods: {
    drawerClose() {
      this.drawer.mode = 'polygon'
      this.drawer.type = 'polygon'
      this.drawer.polygon = {}
    },
    getDrawer() {
      const ip = JSON.stringify(this.drawer[this.drawer.type], null, '  ')
      // this.$message.success(ip);
      localStorage.setItem('areas', ip)
      this.drawer_data.areas = ip
      this.show.show_drawer = !this.show.show_drawer
    },
    setDrawerType(type) {
      this.show.show_drawer = type
    },
    onDraw(type, res) {
      this.drawer.type = type
      this.drawer[type] = res
      this.drawer.mode = 'none'
    }
  }
}
</script>

<style scoped>
.controls {
  /*position: absolute;*/
  left: 6px;
  top: 0;
}
.info {
  /*position: absolute;*/
  right: 6px;
  top: 0;
}
.el-drawer__body{
  overflow: auto;
}
.el-drawer__body {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: auto;
}
</style>

