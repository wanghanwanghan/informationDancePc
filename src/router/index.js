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
    path: '/FinancesSearchSecondPage',
    component: () => import('@/views/FinancesSearch/FinancesSearchSecondPage'),
    hidden: true
  },
  {
    path: '/financesSearchIndex',
    component: () => import('@/views/FinancesSearch/FinancesSearchIndex'),
    hidden: true
  },
  {
    path: '/HomeCont_hy',
    component: () => import('@/components/HomeCont/HomeCont_hy'),
    hidden: true
  },
  {
    path: '/RiskMonitoringDetail/:sType/:entName/',
    component: () => import('@/views/RiskMonitoring/Detail'),
    hidden: true
  },
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
  {
    path: '/SearchHistroy',
    name: 'SearchHistroy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/SearchHistroy/SearchHistroy.vue'),
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
  //       meta: { title: '??????', icon: 'dashboard' }
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
  //       meta: { title: '??????', icon: 'dashboard' }
  //     }
  //   ]
  // },
  {
    path: '/qybj',
    component: Layout,
    redirect: '/qybj/jbxx',
    name: 'qybj',
    meta: {
      title: '????????????',
      icon: 'excel'
    },
    children: [
      {
        path: 'jbxx',
        component: () => import('@/views/qybj/jbxx/jbxx'),
        name: 'Jbxx',
        // meta: { title: '????????????' }
        meta: { title: '????????????' }
      }
      // {
      //   path: 'gd',
      //   component: () => import('@/views/qybj/gd/gd'),
      //   name: 'gd',
      //   meta: { title: '??????' }
      // },
      // {
      //   path: 'control',
      //   component: () => import('@/views/qybj/control/control'),
      //   name: 'control',
      //   meta: { title: '??????????????????????????????' }
      // },
      // {
      //   path: 'manager',
      //   component: () => import('@/views/qybj/manager/manager'),
      //   name: 'manager',
      //   meta: { title: '?????????????????????' }
      // },
      // {
      //   path: 'branch',
      //   component: () => import('@/views/qybj/branch/branch'),
      //   name: 'branch',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'ChangeInformation',
      //   component: () => import('@/views/qybj/ChangeInformation/ChangeInformation'),
      //   name: 'ChangeInformation',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'frChange',
      //   component: () => import('@/views/qybj/frChange/frChange'),
      //   name: 'frChange',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'AbnormalOperation',
      //   component: () => import('@/views/qybj/AbnormalOperation/AbnormalOperation'),
      //   name: 'AbnormalOperation',
      //   meta: { title: '????????????' }
      // }
    ]
  },
  // {
  //   path: '/CompetitivePower',
  //   component: Layout,
  //   redirect: '/CompetitivePower/CompetitivePower',
  //   name: 'CompetitivePower',
  //   meta: {
  //     title: '?????????'
  //   },
  //   children: [
  //     {
  //       path: 'CompetitivePower',
  //       component: () => import('@/views/CompetitivePower/CompetitivePower'),
  //       name: 'CompetitivePower',
  //       meta: {
  //         title: '?????????',
  //         icon: 'el-icon-star-off'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/Features',
  //   component: Layout,
  //   redirect: '/Features/Features',
  //   name: 'Features',
  //   meta: {
  //     title: '????????????'
  //   },
  //   children: [
  //     {
  //       path: 'Features',
  //       component: () => import('@/views/Features/Features/Features'),
  //       name: 'Features',
  //       meta: {
  //         title: '????????????',
  //         icon: 'el-icon-star-off'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/FinancialPerformance',
  //   component: Layout,
  //   redirect: '/FinancialPerformance/FinancialPerformance',
  //   name: 'FinancialPerformance',
  //   meta: {
  //     title: '????????????'
  //   },
  //   children: [
  //     {
  //       path: 'FinancialPerformance',
  //       component: () => import('@/views/FinancialPerformance/FinancialPerformance/FinancialPerformance'),
  //       name: 'FinancialPerformance',
  //       meta: {
  //         title: '????????????',
  //         icon: 'el-icon-star-off'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/FinancialThreeTable',
  //   component: Layout,
  //   redirect: '/FinancialThreeTable/FinancialThreeTable',
  //   name: 'FinancialThreeTable',
  //   meta: {
  //     title: '????????????'
  //   },
  //   children: [
  //     {
  //       path: 'FinancialPerformance',
  //       component: () => import('@/views/FinancialThreeTable/index'),
  //       name: 'FinancialThreeTableFinancialPerformance',
  //       meta: {
  //         title: '????????????',
  //         icon: 'el-icon-star-off'
  //       }
  //     },
  //     {
  //       path: 'TwoTable',
  //       component: () => import('@/views/FinancialThreeTable/FinancialThreeTable/FinancialThreeTable'),
  //       name: 'TwoTable',
  //       meta: {
  //         title: '???',
  //         icon: 'el-icon-star-off'
  //       },
  //       hidden: true
  //     },
  //     {
  //       path: 'Fapiao',
  //       component: () => import('@/views/FinancialThreeTable/Fapiao/index'),
  //       name: 'Fapiao',
  //       meta: {
  //         title: '???',
  //         icon: 'el-icon-star-off'
  //       },
  //       hidden: true
  //     }
  //   ]
  // },
  // {
  //   path: '/FinancialPerformanceMergeData',
  //   component: Layout,
  //   redirect: '/FinancialPerformance/FinancialPerformanceMergeData',
  //   name: 'FinancialPerformance',
  //   meta: {
  //     title: '???????????????????????????'
  //   },
  //   children: [
  //     {
  //       path: 'FinancialPerformance',
  //       component: () => import('@/views/FinancialPerformance/FinancialPerformance/FinancialPerformanceMergeData'),
  //       name: 'FinancialPerformanceMergeData',
  //       meta: {
  //         title: '???????????????????????????',
  //         icon: 'el-icon-star-off'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/IndustryTop',
  //   component: Layout,
  //   redirect: '/IndustryTop/IndustryTop',
  //   name: 'IndustryTop',
  //   meta: {
  //     title: '??????Top'
  //   },
  //   children: [
  //     {
  //       path: 'IndustryTop',
  //       component: () => import('@/views/IndustryTop/IndustryTop'),
  //       name: 'IndustryTop',
  //       meta: {
  //         title: '??????Top',
  //         icon: 'el-icon-star-off'
  //       }
  //     }
  //   ]
  // },
  {
    path: '/AssetClues',
    component: Layout,
    redirect: '/AssetClues/LandAssets',
    name: 'AssetClues',
    meta: {
      title: '????????????',
      icon: 'excel'
    },
    children: [
      {
        path: 'LandAssets',
        component: () => import('@/views/AssetClues/LandAssets/LandAssets'),
        name: 'LandAssets',
        // meta: { title: '???????????????' }
        meta: { title: '????????????' }
      }
      // {
      //   path: 'EquipmentAssets',
      //   component: () => import('@/views/AssetClues/EquipmentAssets/EquipmentAssets'),
      //   name: 'EquipmentAssets',
      //   meta: { title: '???????????????' }
      // }
    ]
  },
  {
    path: '/JudicialDecisions',
    component: Layout,
    redirect: '/JudicialDecisions/CourtNotice',
    name: 'JudicialDecisions',
    meta: {
      title: '????????????',
      icon: 'excel'
    },
    children: [
      {
        path: 'CourtNotice',
        component: () => import('@/views/JudicialDecisions/CourtNotice/CourtNotice'),
        name: 'CourtNotice',
        // meta: { title: '????????????' }
        meta: { title: '????????????' }
      },
      {
        path: 'ktggDetail/:id',
        component: () => import('@/views/JudicialDecisions/CourtNotice/ktggDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'pjwsDetail/:id',
        component: () => import('@/views/JudicialDecisions/CourtNotice/pjwsDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'fyggDetail/:id',
        component: () => import('@/views/JudicialDecisions/CourtNotice/fyggDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'zxggDetail/:id',
        component: () => import('@/views/JudicialDecisions/CourtNotice/zxggDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'sxggDetail/:id',
        component: () => import('@/views/JudicialDecisions/CourtNotice/sxggDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'kydjDetail/:id',
        component: () => import('@/views/JudicialDecisions/CourtNotice/kydjDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'sfpmDetail/:id',
        component: () => import('@/views/JudicialDecisions/CourtNotice/sfpmDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      }
      // {
      //   path: 'JudgmentDocument',
      //   component: () => import('@/views/JudicialDecisions/JudgmentDocument/JudgmentDocument'),
      //   name: 'JudgmentDocument',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'fyNotice',
      //   component: () => import('@/views/JudicialDecisions/fyNotice/fyNotice'),
      //   name: 'fyNotice',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'ExecutiveNotice',
      //   component: () => import('@/views/JudicialDecisions/ExecutiveNotice/ExecutiveNotice'),
      //   name: 'ExecutiveNotice',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'sxNotice',
      //   component: () => import('@/views/JudicialDecisions/sxNotice/sxNotice'),
      //   name: 'sxNotice',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'sealUp',
      //   component: () => import('@/views/JudicialDecisions/sealUp/sealUp'),
      //   name: 'sealUp',
      //   meta: { title: '????????????????????????' }
      // },
      // {
      //   path: 'JudicialAuction',
      //   component: () => import('@/views/JudicialDecisions/JudicialAuction/JudicialAuction'),
      //   name: 'JudicialAuction',
      //   meta: { title: '????????????' }
      // }
    ]
  },
  {
    path: '/CreditInformation',
    component: Layout,
    redirect: '/CreditInformation/accountsReceivable',
    name: 'CreditInformation',
    meta: {
      title: '????????????',
      icon: 'excel'
    },
    children: [
      {
        path: 'accountsReceivable',
        component: () => import('@/views/CreditInformation/accountsReceivable/accountsReceivable'),
        name: 'accountsReceivable',
        // meta: { title: '??????????????????' }
        meta: { title: '????????????' }
      }
      // {
      //   path: 'ownership',
      //   component: () => import('@/views/CreditInformation/ownership/ownership'),
      //   name: 'ownership',
      //   meta: { title: '???????????????' }
      // }
    ]
  },
  {
    path: '/DebtInformation',
    component: Layout,
    redirect: '/DebtInformation/bond',
    name: 'DebtInformation',
    meta: {
      title: '????????????',
      icon: 'excel'
    },
    children: [
      {
        path: 'bond',
        component: () => import('@/views/DebtInformation/bond/bond'),
        name: 'bond',
        // meta: { title: '?????????????????????' }
        meta: { title: '????????????' }
      }
      // {
      //   path: 'WarehouseReceipt',
      //   component: () => import('@/views/DebtInformation/WarehouseReceipt/WarehouseReceipt'),
      //   name: 'WarehouseReceipt',
      //   meta: { title: '??????????????????' }
      // },
      // {
      //   path: 'lease',
      //   component: () => import('@/views/DebtInformation/lease/lease'),
      //   name: 'lease',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'ChattelFinancing',
      //   component: () => import('@/views/DebtInformation/ChattelFinancing/ChattelFinancing'),
      //   name: 'ChattelFinancing',
      //   meta: { title: '??????????????????' }
      // }
    ]
  },
  // {
  //   path: '/FinancialAssets',
  //   component: Layout,
  //   redirect: '/FinancialAssets/financialData',
  //   name: 'FinancialAssets',
  //   meta: {
  //     title: '????????????',
  //     icon: 'excel'
  //   },
  //   children: [
  //     {
  //       path: 'financialData',
  //       component: () => import('@/views/FinancialAssets/financialData/financialData'),
  //       name: 'financialData',
  //       // meta: { title: '????????????' }
  //       meta: { title: '????????????' }
  //     }
  //     // {
  //     //   path: 'financialDataV',
  //     //   component: () => import('@/views/FinancialAssets/financialDataV/financialDataV'),
  //     //   name: 'financialDataV',
  //     //   meta: { title: '???????????????????????????' }
  //     // }
  //   ]
  // },
  {
    path: '/guaranteedMortgage',
    component: Layout,
    redirect: '/guaranteedMortgage/EquityPledge',
    name: 'guaranteedMortgage',
    meta: {
      title: '????????????',
      icon: 'excel'
    },
    children: [
      {
        path: 'EquityPledge',
        component: () => import('@/views/guaranteedMortgage/EquityPledge/EquityPledge'),
        name: 'EquityPledge',
        // meta: { title: '????????????' }
        meta: { title: '????????????' }
      },
      {
        path: 'tddyDetail/:id',
        component: () => import('@/views/guaranteedMortgage/EquityPledge/tddyDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      }
      // {
      //   path: 'ChattelMortgage',
      //   component: () => import('@/views/guaranteedMortgage/ChattelMortgage/ChattelMortgage'),
      //   name: 'ChattelMortgage',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'LandMortgage',
      //   component: () => import('@/views/guaranteedMortgage/LandMortgage/LandMortgage'),
      //   name: 'LandMortgage',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'ExternalGuarantee',
      //   component: () => import('@/views/guaranteedMortgage/ExternalGuarantee/ExternalGuarantee'),
      //   name: 'ExternalGuarantee',
      //   meta: { title: '????????????' }
      // }
    ]
  },
  {
    path: '/EnterpriseDevelopment',
    component: Layout,
    redirect: '/EnterpriseDevelopment/FinancingHistory',
    name: 'EnterpriseDevelopment',
    meta: {
      title: '????????????',
      icon: 'excel'
    },
    children: [
      {
        path: 'FinancingHistory',
        component: () => import('@/views/EnterpriseDevelopment/FinancingHistory/FinancingHistory'),
        name: 'FinancingHistory',
        // meta: { title: '????????????' }
        meta: { title: '????????????' }
      },
      {
        path: 'ztbDetail/:id',
        component: () => import('@/views/EnterpriseDevelopment/FinancingHistory/ztbDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'gdDetail/:id',
        component: () => import('@/views/EnterpriseDevelopment/FinancingHistory/gdDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'tdgsDetail/:id',
        component: () => import('@/views/EnterpriseDevelopment/FinancingHistory/tdgsDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'tdzrDetail/:id',
        component: () => import('@/views/EnterpriseDevelopment/FinancingHistory/tdzrDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'zpDetail/:id',
        component: () => import('@/views/EnterpriseDevelopment/FinancingHistory/zpDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'jzzgDetail/:id',
        component: () => import('@/views/EnterpriseDevelopment/FinancingHistory/jzzgDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'jzgcDetail/:id',
        component: () => import('@/views/EnterpriseDevelopment/FinancingHistory/jzgcDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'zqDetail/:id',
        component: () => import('@/views/EnterpriseDevelopment/FinancingHistory/zqDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      }
      // {
      //   path: 'outboundInvestment',
      //   component: () => import('@/views/EnterpriseDevelopment/outboundInvestment/outboundInvestment'),
      //   name: 'outboundInvestment',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'Bidding',
      //   component: () => import('@/views/EnterpriseDevelopment/Bidding/Bidding'),
      //   name: 'Bidding',
      //   meta: { title: '?????????' }
      // },
      // {
      //   path: 'LandpurchaseInformation',
      //   component: () => import('@/views/EnterpriseDevelopment/LandpurchaseInformation/LandpurchaseInformation'),
      //   name: 'LandpurchaseInformation',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'LandPublicity',
      //   component: () => import('@/views/EnterpriseDevelopment/LandPublicity/LandPublicity'),
      //   name: 'LandPublicity',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'LandTransfer',
      //   component: () => import('@/views/EnterpriseDevelopment/LandTransfer/LandTransfer'),
      //   name: 'LandTransfer',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'recruitmentInformation',
      //   component: () => import('@/views/EnterpriseDevelopment/recruitmentInformation/recruitmentInformation'),
      //   name: 'recruitmentInformation',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'Architecture',
      //   component: () => import('@/views/EnterpriseDevelopment/Architecture/Architecture'),
      //   name: 'Architecture',
      //   meta: { title: '??????????????????' }
      // },
      // {
      //   path: 'ConstructionProject',
      //   component: () => import('@/views/EnterpriseDevelopment/ConstructionProject/ConstructionProject'),
      //   name: 'ConstructionProject',
      //   meta: { title: '??????????????????' }
      // },
      // {
      //   path: 'bond',
      //   component: () => import('@/views/EnterpriseDevelopment/bond/bond'),
      //   name: 'bond',
      //   meta: { title: '??????' }
      // }
    ]
  },
  {
    path: '/MainProducts',
    component: Layout,
    redirect: '/MainProducts/MainProducts',
    name: 'MainProducts',
    meta: {
      title: '????????????',
      icon: 'excel'
    },
    children: [
      {
        path: 'MainProducts',
        component: () => import('@/views/MainProducts/MainProducts'),
        name: 'MainProducts',
        meta: { title: '????????????' }
      }
    ]
  },
  {
    path: '/management',
    component: Layout,
    redirect: '/management/licensing',
    name: 'management',
    meta: {
      title: '????????????',
      icon: 'excel'
    },
    children: [
      {
        path: 'licensing',
        component: () => import('@/views/management/licensing/licensing'),
        name: 'licensing',
        // meta: { title: '????????????' }
        meta: { title: '????????????' }
      },
      {
        path: 'xzxkDetail/:id',
        component: () => import('@/views/management/licensing/xzxkDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'xzcfDetail/:id',
        component: () => import('@/views/management/licensing/xzcfDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      }
      // {
      //   path: 'sanction',
      //   component: () => import('@/views/management/sanction/sanction'),
      //   name: 'sanction',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'punishment',
      //   component: () => import('@/views/management/punishment/punishment'),
      //   name: 'punishment',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'monitoring',
      //   component: () => import('@/views/management/monitoring/monitoring'),
      //   name: 'monitoring',
      //   meta: { title: '????????????????????????' }
      // },
      // {
      //   path: 'MonitoringResults',
      //   component: () => import('@/views/management/MonitoringResults/MonitoringResults'),
      //   name: 'MonitoringResults',
      //   meta: { title: '??????????????????????????????' }
      // },
      // {
      //   path: 'EIAPublicity',
      //   component: () => import('@/views/management/EIAPublicity/EIAPublicity'),
      //   name: 'EIAPublicity',
      //   meta: { title: '??????????????????' }
      // },
      // {
      //   path: 'CustomsEnterprises',
      //   component: () => import('@/views/management/CustomsEnterprises/CustomsEnterprises'),
      //   name: 'CustomsEnterprises',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'CustomsClearance',
      //   component: () => import('@/views/management/CustomsClearance/CustomsClearance'),
      //   name: 'CustomsClearance',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'CustomsCredit',
      //   component: () => import('@/views/management/CustomsCredit/CustomsCredit'),
      //   name: 'CustomsCredit',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'CustomsPunishment',
      //   component: () => import('@/views/management/CustomsPunishment/CustomsPunishment'),
      //   name: 'CustomsPunishment',
      //   meta: { title: '????????????' }
      // }
    ]
  },
  {
    path: '/Taxation',
    component: Layout,
    redirect: '/Taxation/Taxation',
    name: 'Taxation',
    meta: {
      title: '????????????',
      icon: 'excel'
    },
    children: [
      {
        path: 'Taxation',
        component: () => import('@/views/Taxation/TaxArrears/TaxArrears'),
        name: 'Taxation',
        // meta: { title: '????????????' }
        meta: { title: '????????????' }
      },
      {
        path: 'qsggDetail/:id',
        component: () => import('@/views/Taxation/TaxArrears/qsggDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'sscfDetail/:id',
        component: () => import('@/views/Taxation/TaxArrears/sscfDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'swfzcDetail/:id',
        component: () => import('@/views/Taxation/TaxArrears/swfzcDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'xydjDetail/:id',
        component: () => import('@/views/Taxation/TaxArrears/xydjDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'swdjDetail/:id',
        component: () => import('@/views/Taxation/TaxArrears/swdjDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'swxkDetail/:id',
        component: () => import('@/views/Taxation/TaxArrears/swxkDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      }
      // {
      //   path: 'TaxRelated',
      //   component: () => import('@/views/Taxation/TaxRelated/TaxRelated'),
      //   name: 'TaxRelated',
      //   meta: { title: '??????????????????' }
      // },
      // {
      //   path: 'taxAccounts',
      //   component: () => import('@/views/Taxation/taxAccounts/taxAccounts'),
      //   name: 'taxAccounts',
      //   meta: { title: '????????????????????????' }
      // },
      // {
      //   path: 'TaxCredit',
      //   component: () => import('@/views/Taxation/TaxCredit/TaxCredit'),
      //   name: 'TaxCredit',
      //   meta: { title: '??????????????????' }
      // },
      // {
      //   path: 'taxRegistration',
      //   component: () => import('@/views/Taxation/taxRegistration/taxRegistration'),
      //   name: 'taxRegistration',
      //   meta: { title: '????????????' }
      // },
      // {
      //   path: 'TaxPermission',
      //   component: () => import('@/views/Taxation/TaxPermission/TaxPermission'),
      //   name: 'TaxPermission',
      //   meta: { title: '????????????' }
      // }
    ]
  },
  {
    path: '/intellectualProperty',
    component: Layout,
    redirect: '/intellectualProperty/intellectualProperty',
    name: 'intellectualProperty',
    meta: {
      title: '????????????',
      icon: 'excel'
    },
    children: [
      {
        path: 'trademark',
        component: () => import('@/views/intellectualProperty/trademark/trademark'),
        name: 'trademark',
        // meta: { title: '??????' }
        meta: { title: '????????????' }
      },
      {
        path: 'sbDetail/:id',
        component: () => import('@/views/intellectualProperty/trademark/sbDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'zlDetail/:id',
        component: () => import('@/views/intellectualProperty/trademark/zlDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      },
      {
        path: 'qyzsDetail/:id',
        component: () => import('@/views/intellectualProperty/trademark/qyzsDetail.vue'),
        name: '??????',
        meta: { title: '??????', noCache: true },
        hidden: true
      }
      // {
      //   path: 'patent',
      //   component: () => import('@/views/intellectualProperty/patent/patent'),
      //   name: 'patent',
      //   meta: { title: '??????' }
      // },
      // {
      //   path: 'SoftwareCopyright',
      //   component: () => import('@/views/intellectualProperty/SoftwareCopyright/SoftwareCopyright'),
      //   name: 'SoftwareCopyright',
      //   meta: { title: '???????????????' }
      // },
      // {
      //   path: 'CopyrightWorks',
      //   component: () => import('@/views/intellectualProperty/CopyrightWorks/CopyrightWorks'),
      //   name: 'CopyrightWorks',
      //   meta: { title: '???????????????' }
      // },
      // {
      //   path: 'EnterpriseCertificate',
      //   component: () => import('@/views/intellectualProperty/EnterpriseCertificate/EnterpriseCertificate'),
      //   name: 'EnterpriseCertificate',
      //   meta: { title: '??????????????????' }
      // }
    ]
  },
  {
    path: '/financialRegulation',
    component: Layout,
    redirect: '/financialRegulation/administrativePenalty',
    name: 'financialRegulation',
    meta: {
      title: '????????????',
      icon: 'excel'
    },
    children: [
      {
        path: 'administrativePenalty',
        component: () => import('@/views/financialRegulation/administrativePenalty/administrativePenalty'),
        name: 'administrativePenalty',
        // meta: { title: '??????????????????' }
        meta: { title: '????????????' }
      }
      // {
      //   path: 'CIRC',
      //   component: () => import('@/views/financialRegulation/CIRC/CIRC'),
      //   name: 'CIRC',
      //   meta: { title: '????????????????????????' }
      // },
      // {
      //   path: 'securitiesRegulatory',
      //   component: () => import('@/views/financialRegulation/securitiesRegulatory/securitiesRegulatory'),
      //   name: 'securitiesRegulatory',
      //   meta: { title: '??????????????????' }
      // },
      // {
      //   path: 'CSRC',
      //   component: () => import('@/views/financialRegulation/CSRC/CSRC'),
      //   name: 'CSRC',
      //   meta: { title: '???????????????????????????' }
      // },
      // {
      //   path: 'PunishmentSafe',
      //   component: () => import('@/views/financialRegulation/PunishmentSafe/PunishmentSafe'),
      //   name: 'PunishmentSafe',
      //   meta: { title: '???????????????' }
      // },
      // {
      //   path: 'PermissionSafe',
      //   component: () => import('@/views/financialRegulation/PermissionSafe/PermissionSafe'),
      //   name: 'PermissionSafe',
      //   meta: { title: '???????????????' }
      // }
    ]
  },
  // {
  //   path: '/NewsInformation',
  //   component: Layout,
  //   redirect: '/NewsInformation/NewsInformation',
  //   name: 'NewsInformation',
  //   meta: {
  //     title: '????????????',
  //     icon: 'excel'
  //   },
  //   children: [
  //     {
  //       path: 'publicOpinion',
  //       component: () => import('@/views/NewsInformation/publicOpinion/publicOpinion'),
  //       name: 'publicOpinion',
  //       // meta: { title: '????????????' }
  //       meta: { title: '????????????' }
  //     },
  //     {
  //       path: 'xwyqDetail/:id',
  //       component: () => import('@/views/NewsInformation/publicOpinion/xwyqDetail.vue'),
  //       name: '??????',
  //       meta: { title: '??????', noCache: true },
  //       hidden: true
  //     }
  //     // {
  //     //   path: 'WebsiteInformation',
  //     //   component: () => import('@/views/NewsInformation/WebsiteInformation/WebsiteInformation'),
  //     //   name: 'WebsiteInformation',
  //     //   meta: { title: '????????????' }
  //     // },
  //     // {
  //     //   path: 'weibo',
  //     //   component: () => import('@/views/NewsInformation/weibo/weibo'),
  //     //   name: 'weibo',
  //     //   meta: { title: '??????' }
  //     // }
  //   ]
  // },
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
