import request from '@/utils/request'

// 获取基本信息
export function getRegisterInfo(data) {
  return request({
    url: '/api/v1/ts/getRegisterInfo',
    method: 'post',
    data
  })
}

// 获取基本信息
export function getBasicDetails(data) {
  return request({
    url: '/api/v1/qcc/getBasicDetailsByEntName',
    method: 'post',
    data
  })
}

// 获取基本信息 （老耿）
export function getCompanyBasicInfo(data) {
  return request({
    url: '/api/v1/xd/getCompanyBasicInfo',
    method: 'post',
    data
  })
}

// 获取股东信息 （老耿）
export function getInvestorInfo(data) {
  return request({
    url: '/api/v1/xd/getInvestorInfo',
    method: 'post',
    data
  })
}

// 获取企业主要成员 （老耿）
export function getStaffInfo(data) {
  return request({
    url: '/api/v1/xd/getStaffInfo',
    method: 'post',
    data
  })
}

// 获取企业曾用名（老耿）
export function getNamesInfo(data) {
  return request({
    url: '/api/v1/xd/getNamesInfo',
    method: 'post',
    data
  })
}
// 获取股东信息
export function getShareHolderInfo(data) {
  if (!data.pageSize) {
    data.pageSize = 100
  }
  return request({
    url: '/api/v1/ts/getShareHolderInfo',
    method: 'post',
    data
  })
}
// 实际控制人和控制路径
export function getBeneficiary(data) {
  return request({
    url: '/api/v1/qcc/getBeneficiary',
    method: 'post',
    data
  })
}
// 企业主要管理人
export function getMainManagerInfo(data) {
  return request({
    url: '/api/v1/ts/getMainManagerInfo',
    method: 'post',
    data
  })
}
// 分支机构
export function getBranchInfo(data) {
  return request({
    url: '/api/v1/ts/getBranchInfo',
    method: 'post',
    data
  })
}
// 变更信息
export function getRegisterChangeInfo(data) {
  return request({
    url: '/api/v1/ts/getRegisterChangeInfo',
    method: 'post',
    data
  })
}
// 法人变更
export function frbg(data) {
  return request({
    url: '/api/v1/ts/frbg',
    method: 'post',
    data
  })
}
// 经营异常
export function getOperatingExceptionRota(data) {
  return request({
    url: '/api/v1/ts/getOperatingExceptionRota',
    method: 'post',
    data
  })
}
// 业务特征
export function getFeatures(data) {
  return request({
    url: '/api/v1/xd/getFeatures',
    method: 'post',
    data
  })
}
// 退款
export function refundToWallet(data) {
  return request({
    url: '/api/v1/comm/refundToWallet',
    method: 'post',
    data
  })
}

// 搜客搜索条件接口
export function getSearchOption(data) {
  return request({
    url: '/api/v1/xd/getSearchOption',
    method: 'post',
    data
  })
}

// 高级搜索条件接口
export function advancedSearch(data) {
  return request({
    url: '/api/v1/xd/advancedSearch',
    method: 'post',
    data
  })
}
// 保存用户搜索历史
export function saveSearchHistroy(data) {
  return request({
    url: '/api/v1/xd/saveSearchHistroy',
    method: 'post',
    data
  })
}


