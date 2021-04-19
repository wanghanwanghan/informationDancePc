import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/SearchList',
    name: 'SearchList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/SearchList/SearchList.vue'),
    hidden: true
  },
  {
    path: '/Rechargerecord',
    name: 'Rechargerecord',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Rechargerecord/Rechargerecord.vue'),
    hidden: true
  },
  {
    path: '/Consumptionrecord',
    name: 'Consumptionrecord',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Consumptionrecord/Consumptionrecord.vue'),
    hidden: true
  },
  {
    path: '/Reviewprogress',
    name: 'Reviewprogress',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Reviewprogress/Reviewprogress.vue'),
    hidden: true
  },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       name: 'Dashboard',
  //       component: () => import('@/views/dashboard/index'),
  //       meta: { title: '首页', icon: 'dashboard' }
  //     }
  //   ]
  // },
  {
    path: '/',
    name: 'Login',
    redirect: '/login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/login/index.vue')
  },
  // {
  //   path: '/ztbDetail',
  //   name: 'ztbDetail',
  //   redirect: '/ztbDetail',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/EnterpriseDevelopment/ztbDetail/ztbDetail.vue')
  // },
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/dashboard/index.vue'),
  //   hidden: true
  // },
  // {
  //   path: '/dashboard',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'dashboard',
  //       name: 'Dashboard',
  //       component: () => import('@/views/dashboard/index'),
  //       meta: { title: '首页', icon: 'dashboard' }
  //     }
  //   ]
  // },
  {
    path: '/qybj',
    component: Layout,
    redirect: '/qybj/jbxx',
    name: 'qybj',
    meta: {
      title: '企业背景',
      icon: 'excel'
    },
    children: [
      {
        path: 'jbxx',
        component: () => import('@/views/qybj/jbxx/jbxx'),
        name: 'Jbxx',
        // meta: { title: '基本信息' }
        meta: { title: '企业背景' }
      }
      // {
      //   path: 'gd',
      //   component: () => import('@/views/qybj/gd/gd'),
      //   name: 'gd',
      //   meta: { title: '股东' }
      // },
      // {
      //   path: 'control',
      //   component: () => import('@/views/qybj/control/control'),
      //   name: 'control',
      //   meta: { title: '实际控制人和控制路径' }
      // },
      // {
      //   path: 'manager',
      //   component: () => import('@/views/qybj/manager/manager'),
      //   name: 'manager',
      //   meta: { title: '企业主要管理人' }
      // },
      // {
      //   path: 'branch',
      //   component: () => import('@/views/qybj/branch/branch'),
      //   name: 'branch',
      //   meta: { title: '分支机构' }
      // },
      // {
      //   path: 'ChangeInformation',
      //   component: () => import('@/views/qybj/ChangeInformation/ChangeInformation'),
      //   name: 'ChangeInformation',
      //   meta: { title: '变更信息' }
      // },
      // {
      //   path: 'frChange',
      //   component: () => import('@/views/qybj/frChange/frChange'),
      //   name: 'frChange',
      //   meta: { title: '法人变更' }
      // },
      // {
      //   path: 'AbnormalOperation',
      //   component: () => import('@/views/qybj/AbnormalOperation/AbnormalOperation'),
      //   name: 'AbnormalOperation',
      //   meta: { title: '经营异常' }
      // }
    ]
  },
  {
    path: '/Features',
    component: Layout,
    redirect: '/Features/Features',
    name: 'Features',
    meta: {
      title: '业务特征'
    },
    children: [
      {
        path: 'Features',
        component: () => import('@/views/Features/Features/Features'),
        name: 'Features',
        meta: {
          title: '业务特征',
          icon: 'el-icon-star-off'
        }
      }
    ]
  },
  {
    path: '/AssetClues',
    component: Layout,
    redirect: '/AssetClues/LandAssets',
    name: 'AssetClues',
    meta: {
      title: '资产线索',
      icon: 'excel'
    },
    children: [
      {
        path: 'LandAssets',
        component: () => import('@/views/AssetClues/LandAssets/LandAssets'),
        name: 'LandAssets',
        // meta: { title: '土地资产类' }
        meta: { title: '资产线索' }
      }
      // {
      //   path: 'EquipmentAssets',
      //   component: () => import('@/views/AssetClues/EquipmentAssets/EquipmentAssets'),
      //   name: 'EquipmentAssets',
      //   meta: { title: '设备资产类' }
      // }
    ]
  },
  {
    path: '/JudicialDecisions',
    component: Layout,
    redirect: '/JudicialDecisions/CourtNotice',
    name: 'JudicialDecisions',
    meta: {
      title: '司法裁决',
      icon: 'excel'
    },
    children: [
      {
        path: 'CourtNotice',
        component: () => import('@/views/JudicialDecisions/CourtNotice/CourtNotice'),
        name: 'CourtNotice',
        // meta: { title: '开庭公告' }
        meta: { title: '司法裁决' }
      },
      {
        path: 'ktggDetail/:id',
        component: () => import('@/views/JudicialDecisions/CourtNotice/ktggDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'pjwsDetail/:id',
        component: () => import('@/views/JudicialDecisions/CourtNotice/pjwsDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'fyggDetail/:id',
        component: () => import('@/views/JudicialDecisions/CourtNotice/fyggDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'zxggDetail/:id',
        component: () => import('@/views/JudicialDecisions/CourtNotice/zxggDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'sxggDetail/:id',
        component: () => import('@/views/JudicialDecisions/CourtNotice/sxggDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'kydjDetail/:id',
        component: () => import('@/views/JudicialDecisions/CourtNotice/kydjDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'sfpmDetail/:id',
        component: () => import('@/views/JudicialDecisions/CourtNotice/sfpmDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      }
      // {
      //   path: 'JudgmentDocument',
      //   component: () => import('@/views/JudicialDecisions/JudgmentDocument/JudgmentDocument'),
      //   name: 'JudgmentDocument',
      //   meta: { title: '判决文书' }
      // },
      // {
      //   path: 'fyNotice',
      //   component: () => import('@/views/JudicialDecisions/fyNotice/fyNotice'),
      //   name: 'fyNotice',
      //   meta: { title: '法院公告' }
      // },
      // {
      //   path: 'ExecutiveNotice',
      //   component: () => import('@/views/JudicialDecisions/ExecutiveNotice/ExecutiveNotice'),
      //   name: 'ExecutiveNotice',
      //   meta: { title: '执行公告' }
      // },
      // {
      //   path: 'sxNotice',
      //   component: () => import('@/views/JudicialDecisions/sxNotice/sxNotice'),
      //   name: 'sxNotice',
      //   meta: { title: '失信公告' }
      // },
      // {
      //   path: 'sealUp',
      //   component: () => import('@/views/JudicialDecisions/sealUp/sealUp'),
      //   name: 'sealUp',
      //   meta: { title: '司法查封冻结扣押' }
      // },
      // {
      //   path: 'JudicialAuction',
      //   component: () => import('@/views/JudicialDecisions/JudicialAuction/JudicialAuction'),
      //   name: 'JudicialAuction',
      //   meta: { title: '司法拍卖' }
      // }
    ]
  },
  {
    path: '/CreditInformation',
    component: Layout,
    redirect: '/CreditInformation/accountsReceivable',
    name: 'CreditInformation',
    meta: {
      title: '债权信息',
      icon: 'excel'
    },
    children: [
      {
        path: 'accountsReceivable',
        component: () => import('@/views/CreditInformation/accountsReceivable/accountsReceivable'),
        name: 'accountsReceivable',
        // meta: { title: '应收账款登记' }
        meta: { title: '债权信息' }
      }
      // {
      //   path: 'ownership',
      //   component: () => import('@/views/CreditInformation/ownership/ownership'),
      //   name: 'ownership',
      //   meta: { title: '所有权保留' }
      // }
    ]
  },
  {
    path: '/DebtInformation',
    component: Layout,
    redirect: '/DebtInformation/bond',
    name: 'DebtInformation',
    meta: {
      title: '债务信息',
      icon: 'excel'
    },
    children: [
      {
        path: 'bond',
        component: () => import('@/views/DebtInformation/bond/bond'),
        name: 'bond',
        // meta: { title: '保证金质押登记' }
        meta: { title: '债务信息' }
      }
      // {
      //   path: 'WarehouseReceipt',
      //   component: () => import('@/views/DebtInformation/WarehouseReceipt/WarehouseReceipt'),
      //   name: 'WarehouseReceipt',
      //   meta: { title: '仓单质押登记' }
      // },
      // {
      //   path: 'lease',
      //   component: () => import('@/views/DebtInformation/lease/lease'),
      //   name: 'lease',
      //   meta: { title: '租赁登记' }
      // },
      // {
      //   path: 'ChattelFinancing',
      //   component: () => import('@/views/DebtInformation/ChattelFinancing/ChattelFinancing'),
      //   name: 'ChattelFinancing',
      //   meta: { title: '其他动产融资' }
      // }
    ]
  },
  {
    path: '/FinancialAssets',
    component: Layout,
    redirect: '/FinancialAssets/financialData',
    name: 'FinancialAssets',
    meta: {
      title: '财务资产',
      icon: 'excel'
    },
    children: [
      {
        path: 'financialData',
        component: () => import('@/views/FinancialAssets/financialData/financialData'),
        name: 'financialData',
        // meta: { title: '财务数据' }
        meta: { title: '财务资产' }
      }
      // {
      //   path: 'financialDataV',
      //   component: () => import('@/views/FinancialAssets/financialDataV/financialDataV'),
      //   name: 'financialDataV',
      //   meta: { title: '财务数据（需授权）' }
      // }
    ]
  },
  {
    path: '/guaranteedMortgage',
    component: Layout,
    redirect: '/guaranteedMortgage/EquityPledge',
    name: 'guaranteedMortgage',
    meta: {
      title: '担保抵押',
      icon: 'excel'
    },
    children: [
      {
        path: 'EquityPledge',
        component: () => import('@/views/guaranteedMortgage/EquityPledge/EquityPledge'),
        name: 'EquityPledge',
        // meta: { title: '股权出质' }
        meta: { title: '担保抵押' }
      },
      {
        path: 'tddyDetail/:id',
        component: () => import('@/views/guaranteedMortgage/EquityPledge/tddyDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      }
      // {
      //   path: 'ChattelMortgage',
      //   component: () => import('@/views/guaranteedMortgage/ChattelMortgage/ChattelMortgage'),
      //   name: 'ChattelMortgage',
      //   meta: { title: '动产抵押' }
      // },
      // {
      //   path: 'LandMortgage',
      //   component: () => import('@/views/guaranteedMortgage/LandMortgage/LandMortgage'),
      //   name: 'LandMortgage',
      //   meta: { title: '土地抵押' }
      // },
      // {
      //   path: 'ExternalGuarantee',
      //   component: () => import('@/views/guaranteedMortgage/ExternalGuarantee/ExternalGuarantee'),
      //   name: 'ExternalGuarantee',
      //   meta: { title: '对外担保' }
      // }
    ]
  },
  {
    path: '/EnterpriseDevelopment',
    component: Layout,
    redirect: '/EnterpriseDevelopment/FinancingHistory',
    name: 'EnterpriseDevelopment',
    meta: {
      title: '企业发展',
      icon: 'excel'
    },
    children: [
      {
        path: 'FinancingHistory',
        component: () => import('@/views/EnterpriseDevelopment/FinancingHistory/FinancingHistory'),
        name: 'FinancingHistory',
        // meta: { title: '融资历史' }
        meta: { title: '企业发展' }
      },
      {
        path: 'ztbDetail/:id',
        component: () => import('@/views/EnterpriseDevelopment/FinancingHistory/ztbDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'gdDetail/:id',
        component: () => import('@/views/EnterpriseDevelopment/FinancingHistory/gdDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'tdgsDetail/:id',
        component: () => import('@/views/EnterpriseDevelopment/FinancingHistory/tdgsDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'tdzrDetail/:id',
        component: () => import('@/views/EnterpriseDevelopment/FinancingHistory/tdzrDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'zpDetail/:id',
        component: () => import('@/views/EnterpriseDevelopment/FinancingHistory/zpDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'jzzgDetail/:id',
        component: () => import('@/views/EnterpriseDevelopment/FinancingHistory/jzzgDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'jzgcDetail/:id',
        component: () => import('@/views/EnterpriseDevelopment/FinancingHistory/jzgcDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'zqDetail/:id',
        component: () => import('@/views/EnterpriseDevelopment/FinancingHistory/zqDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      }
      // {
      //   path: 'outboundInvestment',
      //   component: () => import('@/views/EnterpriseDevelopment/outboundInvestment/outboundInvestment'),
      //   name: 'outboundInvestment',
      //   meta: { title: '对外投资' }
      // },
      // {
      //   path: 'Bidding',
      //   component: () => import('@/views/EnterpriseDevelopment/Bidding/Bidding'),
      //   name: 'Bidding',
      //   meta: { title: '招投标' }
      // },
      // {
      //   path: 'LandpurchaseInformation',
      //   component: () => import('@/views/EnterpriseDevelopment/LandpurchaseInformation/LandpurchaseInformation'),
      //   name: 'LandpurchaseInformation',
      //   meta: { title: '购地信息' }
      // },
      // {
      //   path: 'LandPublicity',
      //   component: () => import('@/views/EnterpriseDevelopment/LandPublicity/LandPublicity'),
      //   name: 'LandPublicity',
      //   meta: { title: '土地公示' }
      // },
      // {
      //   path: 'LandTransfer',
      //   component: () => import('@/views/EnterpriseDevelopment/LandTransfer/LandTransfer'),
      //   name: 'LandTransfer',
      //   meta: { title: '土地转让' }
      // },
      // {
      //   path: 'recruitmentInformation',
      //   component: () => import('@/views/EnterpriseDevelopment/recruitmentInformation/recruitmentInformation'),
      //   name: 'recruitmentInformation',
      //   meta: { title: '招聘信息' }
      // },
      // {
      //   path: 'Architecture',
      //   component: () => import('@/views/EnterpriseDevelopment/Architecture/Architecture'),
      //   name: 'Architecture',
      //   meta: { title: '建筑资格证书' }
      // },
      // {
      //   path: 'ConstructionProject',
      //   component: () => import('@/views/EnterpriseDevelopment/ConstructionProject/ConstructionProject'),
      //   name: 'ConstructionProject',
      //   meta: { title: '建筑工程项目' }
      // },
      // {
      //   path: 'bond',
      //   component: () => import('@/views/EnterpriseDevelopment/bond/bond'),
      //   name: 'bond',
      //   meta: { title: '债券' }
      // }
    ]
  },
  {
    path: '/MainProducts',
    component: Layout,
    redirect: '/MainProducts/MainProducts',
    name: 'MainProducts',
    meta: {
      title: '主营产品',
      icon: 'excel'
    },
    children: [
      {
        path: 'MainProducts',
        component: () => import('@/views/MainProducts/MainProducts'),
        name: 'MainProducts',
        meta: { title: '主营产品' }
      }
    ]
  },
  {
    path: '/management',
    component: Layout,
    redirect: '/management/licensing',
    name: 'management',
    meta: {
      title: '行政管理',
      icon: 'excel'
    },
    children: [
      {
        path: 'licensing',
        component: () => import('@/views/management/licensing/licensing'),
        name: 'licensing',
        // meta: { title: '行政许可' }
        meta: { title: '行政管理' }
      },
      {
        path: 'xzxkDetail/:id',
        component: () => import('@/views/management/licensing/xzxkDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'xzcfDetail/:id',
        component: () => import('@/views/management/licensing/xzcfDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      }
      // {
      //   path: 'sanction',
      //   component: () => import('@/views/management/sanction/sanction'),
      //   name: 'sanction',
      //   meta: { title: '行政处罚' }
      // },
      // {
      //   path: 'punishment',
      //   component: () => import('@/views/management/punishment/punishment'),
      //   name: 'punishment',
      //   meta: { title: '环保处罚' }
      // },
      // {
      //   path: 'monitoring',
      //   component: () => import('@/views/management/monitoring/monitoring'),
      //   name: 'monitoring',
      //   meta: { title: '重点监控企业名单' }
      // },
      // {
      //   path: 'MonitoringResults',
      //   component: () => import('@/views/management/MonitoringResults/MonitoringResults'),
      //   name: 'MonitoringResults',
      //   meta: { title: '环保企业自行监测结果' }
      // },
      // {
      //   path: 'EIAPublicity',
      //   component: () => import('@/views/management/EIAPublicity/EIAPublicity'),
      //   name: 'EIAPublicity',
      //   meta: { title: '环评公示数据' }
      // },
      // {
      //   path: 'CustomsEnterprises',
      //   component: () => import('@/views/management/CustomsEnterprises/CustomsEnterprises'),
      //   name: 'CustomsEnterprises',
      //   meta: { title: '海关企业' }
      // },
      // {
      //   path: 'CustomsClearance',
      //   component: () => import('@/views/management/CustomsClearance/CustomsClearance'),
      //   name: 'CustomsClearance',
      //   meta: { title: '海关许可' }
      // },
      // {
      //   path: 'CustomsCredit',
      //   component: () => import('@/views/management/CustomsCredit/CustomsCredit'),
      //   name: 'CustomsCredit',
      //   meta: { title: '海关信用' }
      // },
      // {
      //   path: 'CustomsPunishment',
      //   component: () => import('@/views/management/CustomsPunishment/CustomsPunishment'),
      //   name: 'CustomsPunishment',
      //   meta: { title: '海关处罚' }
      // }
    ]
  },
  {
    path: '/Taxation',
    component: Layout,
    redirect: '/Taxation/Taxation',
    name: 'Taxation',
    meta: {
      title: '涉税信息',
      icon: 'excel'
    },
    children: [
      {
        path: 'Taxation',
        component: () => import('@/views/Taxation/TaxArrears/TaxArrears'),
        name: 'Taxation',
        // meta: { title: '欠税公告' }
        meta: { title: '涉税信息' }
      },
      {
        path: 'qsggDetail/:id',
        component: () => import('@/views/Taxation/TaxArrears/qsggDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'sscfDetail/:id',
        component: () => import('@/views/Taxation/TaxArrears/sscfDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'swfzcDetail/:id',
        component: () => import('@/views/Taxation/TaxArrears/swfzcDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'xydjDetail/:id',
        component: () => import('@/views/Taxation/TaxArrears/xydjDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'swdjDetail/:id',
        component: () => import('@/views/Taxation/TaxArrears/swdjDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'swxkDetail/:id',
        component: () => import('@/views/Taxation/TaxArrears/swxkDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      }
      // {
      //   path: 'TaxRelated',
      //   component: () => import('@/views/Taxation/TaxRelated/TaxRelated'),
      //   name: 'TaxRelated',
      //   meta: { title: '涉税处罚公示' }
      // },
      // {
      //   path: 'taxAccounts',
      //   component: () => import('@/views/Taxation/taxAccounts/taxAccounts'),
      //   name: 'taxAccounts',
      //   meta: { title: '税务非正常户公示' }
      // },
      // {
      //   path: 'TaxCredit',
      //   component: () => import('@/views/Taxation/TaxCredit/TaxCredit'),
      //   name: 'TaxCredit',
      //   meta: { title: '纳税信用等级' }
      // },
      // {
      //   path: 'taxRegistration',
      //   component: () => import('@/views/Taxation/taxRegistration/taxRegistration'),
      //   name: 'taxRegistration',
      //   meta: { title: '税务登记' }
      // },
      // {
      //   path: 'TaxPermission',
      //   component: () => import('@/views/Taxation/TaxPermission/TaxPermission'),
      //   name: 'TaxPermission',
      //   meta: { title: '税务许可' }
      // }
    ]
  },
  {
    path: '/intellectualProperty',
    component: Layout,
    redirect: '/intellectualProperty/intellectualProperty',
    name: 'intellectualProperty',
    meta: {
      title: '知识产权',
      icon: 'excel'
    },
    children: [
      {
        path: 'trademark',
        component: () => import('@/views/intellectualProperty/trademark/trademark'),
        name: 'trademark',
        // meta: { title: '商标' }
        meta: { title: '知识产权' }
      },
      {
        path: 'sbDetail/:id',
        component: () => import('@/views/intellectualProperty/trademark/sbDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'zlDetail/:id',
        component: () => import('@/views/intellectualProperty/trademark/zlDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      },
      {
        path: 'qyzsDetail/:id',
        component: () => import('@/views/intellectualProperty/trademark/qyzsDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      }
      // {
      //   path: 'patent',
      //   component: () => import('@/views/intellectualProperty/patent/patent'),
      //   name: 'patent',
      //   meta: { title: '专利' }
      // },
      // {
      //   path: 'SoftwareCopyright',
      //   component: () => import('@/views/intellectualProperty/SoftwareCopyright/SoftwareCopyright'),
      //   name: 'SoftwareCopyright',
      //   meta: { title: '软件著作权' }
      // },
      // {
      //   path: 'CopyrightWorks',
      //   component: () => import('@/views/intellectualProperty/CopyrightWorks/CopyrightWorks'),
      //   name: 'CopyrightWorks',
      //   meta: { title: '作品著作权' }
      // },
      // {
      //   path: 'EnterpriseCertificate',
      //   component: () => import('@/views/intellectualProperty/EnterpriseCertificate/EnterpriseCertificate'),
      //   name: 'EnterpriseCertificate',
      //   meta: { title: '企业证书查询' }
      // }
    ]
  },
  {
    path: '/financialRegulation',
    component: Layout,
    redirect: '/financialRegulation/administrativePenalty',
    name: 'financialRegulation',
    meta: {
      title: '金融监管',
      icon: 'excel'
    },
    children: [
      {
        path: 'administrativePenalty',
        component: () => import('@/views/financialRegulation/administrativePenalty/administrativePenalty'),
        name: 'administrativePenalty',
        // meta: { title: '央行行政处罚' }
        meta: { title: '金融监管' }
      }
      // {
      //   path: 'CIRC',
      //   component: () => import('@/views/financialRegulation/CIRC/CIRC'),
      //   name: 'CIRC',
      //   meta: { title: '银保监会处罚公示' }
      // },
      // {
      //   path: 'securitiesRegulatory',
      //   component: () => import('@/views/financialRegulation/securitiesRegulatory/securitiesRegulatory'),
      //   name: 'securitiesRegulatory',
      //   meta: { title: '证监处罚公示' }
      // },
      // {
      //   path: 'CSRC',
      //   component: () => import('@/views/financialRegulation/CSRC/CSRC'),
      //   name: 'CSRC',
      //   meta: { title: '证监会许可批复等级' }
      // },
      // {
      //   path: 'PunishmentSafe',
      //   component: () => import('@/views/financialRegulation/PunishmentSafe/PunishmentSafe'),
      //   name: 'PunishmentSafe',
      //   meta: { title: '外汇局处罚' }
      // },
      // {
      //   path: 'PermissionSafe',
      //   component: () => import('@/views/financialRegulation/PermissionSafe/PermissionSafe'),
      //   name: 'PermissionSafe',
      //   meta: { title: '外汇局许可' }
      // }
    ]
  },
  {
    path: '/NewsInformation',
    component: Layout,
    redirect: '/NewsInformation/NewsInformation',
    name: 'NewsInformation',
    meta: {
      title: '新闻资讯',
      icon: 'excel'
    },
    children: [
      {
        path: 'publicOpinion',
        component: () => import('@/views/NewsInformation/publicOpinion/publicOpinion'),
        name: 'publicOpinion',
        // meta: { title: '新闻舆情' }
        meta: { title: '新闻资讯' }
      },
      {
        path: 'xwyqDetail/:id',
        component: () => import('@/views/NewsInformation/publicOpinion/xwyqDetail.vue'),
        name: '详情',
        meta: { title: '详情', noCache: true },
        hidden: true
      }
      // {
      //   path: 'WebsiteInformation',
      //   component: () => import('@/views/NewsInformation/WebsiteInformation/WebsiteInformation'),
      //   name: 'WebsiteInformation',
      //   meta: { title: '网站信息' }
      // },
      // {
      //   path: 'weibo',
      //   component: () => import('@/views/NewsInformation/weibo/weibo'),
      //   name: 'weibo',
      //   meta: { title: '微博' }
      // }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
