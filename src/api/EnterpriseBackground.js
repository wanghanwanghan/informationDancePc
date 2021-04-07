import request from '@/utils/request'

// 获取基本信息
export function getBasicDetails(data) {
  return request({
    url: '/api/v1/qcc/getBasicDetailsByEntName',
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
// 二次特征
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
