// import request from '@/utils/request'
// import { httpGet, httpPost } from '@/utils/request'
import request from '@/utils/request'

// 欠税公告
export function getSatpartyQs(data) {
  return request({
    url: '/api/v1/fh/getSatpartyQs',
    method: 'post',
    data
  })
}
// 欠税公告详情
export function getSatpartyQsDetail(data) {
  return request({
    url: '/api/v1/fh/getSatpartyQsDetail',
    method: 'post',
    data
  })
}
// 涉税处罚公示
export function getSatpartyChufa(data) {
  return request({
    url: '/api/v1/fh/getSatpartyChufa',
    method: 'post',
    data
  })
}
// 涉税处罚公示详情
export function getSatpartyChufaDetail(data) {
  return request({
    url: '/api/v1/fh/getSatpartyChufaDetail',
    method: 'post',
    data
  })
}
// 税务非正常户公示
export function getSatpartyFzc(data) {
  return request({
    url: '/api/v1/fh/getSatpartyFzc',
    method: 'post',
    data
  })
}
// 税务非正常户公示详情
export function getSatpartyFzcDetail(data) {
  return request({
    url: '/api/v1/fh/getSatpartyFzcDetail',
    method: 'post',
    data
  })
}
// 纳税信用等级
export function getSatpartyXin(data) {
  return request({
    url: '/api/v1/fh/getSatpartyXin',
    method: 'post',
    data
  })
}
// 纳税信用等级详情
export function getSatpartyXinDetail(data) {
  return request({
    url: '/api/v1/fh/getSatpartyXinDetail',
    method: 'post',
    data
  })
}
// 税务登记
export function getSatpartyReg(data) {
  return request({
    url: '/api/v1/fh/getSatpartyReg',
    method: 'post',
    data
  })
}
// 税务登记详情
export function getSatpartyRegDetail(data) {
  return request({
    url: '/api/v1/fh/getSatpartyRegDetail',
    method: 'post',
    data
  })
}
// 税务许可
export function getSatpartyXuke(data) {
  return request({
    url: '/api/v1/fh/getSatpartyXuke',
    method: 'post',
    data
  })
}
// 税务许可详情
export function getSatpartyXukeDetail(data) {
  return request({
    url: '/api/v1/fh/getSatpartyXukeDetail',
    method: 'post',
    data
  })
}
