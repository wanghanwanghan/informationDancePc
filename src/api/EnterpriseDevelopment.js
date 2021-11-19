import request from '@/utils/request'

// 融资历史
export function getEntFinancing(data) {
  return request({
    url: '/api/v1/qcc/getEntFinancing',
    method: 'post',
    data
  })
}

// 对外投资
export function getInvestmentAbroadInfo(data) {
  return request({
    url: '/api/v1/ts/getInvestmentAbroadInfo',
    method: 'post',
    data
  })
}

// 招投标
export function getTenderSearch(data) {
  return request({
    url: '/api/v1/qcc/tenderSearch',
    method: 'post',
    data
  })
}

// 招投标详情
export function tenderSearchDetail(data) {
  return request({
    url: '/api/v1/qcc/tenderSearchDetail',
    method: 'post',
    data
  })
}

// 购地信息
export function getlandPurchaseList(data) {
  return request({
    url: '/api/v1/qcc/landPurchaseList',
    method: 'post',
    data
  })
}

// 购地信息详情
export function landPurchaseListDetail(data) {
  return request({
    url: '/api/v1/qcc/landPurchaseListDetail',
    method: 'post',
    data
  })
}

// 土地公示
export function getlandPublishList(data) {
  return request({
    url: '/api/v1/qcc/landPublishList',
    method: 'post',
    data
  })
}

// 土地公示详情
export function landPublishListDetail(data) {
  return request({
    url: '/api/v1/qcc/landPublishListDetail',
    method: 'post',
    data
  })
}

// 土地转让
export function getlandTransferList(data) {
  return request({
    url: '/api/v1/qcc/landTransferList',
    method: 'post',
    data
  })
}

// 土地转让详情
export function landTransferListDetail(data) {
  return request({
    url: '/api/v1/qcc/landTransferListDetail',
    method: 'post',
    data
  })
}

// 招聘信息
export function getRecruitmentList(data) {
  return request({
    url: '/api/v1/qcc/getRecruitmentList',
    method: 'post',
    data
  })
}

// 招聘信息详情
export function getRecruitmentListDetail(data) {
  return request({
    url: '/api/v1/qcc/getRecruitmentListDetail',
    method: 'post',
    data
  })
}

// 建筑资格证书
export function getQualificationList(data) {
  return request({
    url: '/api/v1/qcc/getQualificationList',
    method: 'post',
    data
  })
}

// 建筑资格证书详情
export function getQualificationListDetail(data) {
  return request({
    url: '/api/v1/qcc/getQualificationListDetail',
    method: 'post',
    data
  })
}

// 建筑工程项目
export function getBuildingProjectList(data) {
  return request({
    url: '/api/v1/qcc/getBuildingProjectList',
    method: 'post',
    data
  })
}

// 建筑工程项目详情
export function getBuildingProjectListDetail(data) {
  return request({
    url: '/api/v1/qcc/getBuildingProjectListDetail',
    method: 'post',
    data
  })
}

// 债券
export function getBondList(data) {
  return request({
    url: '/api/v1/qcc/getBondList',
    method: 'post',
    data
  })
}

// 债券详情
export function getBondListDetail(data) {
  return request({
    url: '/api/v1/qcc/getBondListDetail',
    method: 'post',
    data
  })
}

// 竞争力
export function getEntScoreList(data) {
  return request({
    url: '/api/v1/ts/getEntScore',
    method: 'post',
    data
  })
}
