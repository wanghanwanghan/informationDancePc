// import request from '@/utils/request'
// import { httpGet, httpPost } from '@/utils/request'
import request from '@/utils/request'

// 应收账款登记
export function getCompanyZdwYszkdsr(data) {
  return request({
    url: '/api/v1/fh/getCompanyZdwYszkdsr',
    method: 'post',
    data
  })
}
// 所有权保留
export function getCompanyZdwSyqbldsr(data) {
  return request({
    url: '/api/v1/fh/getCompanyZdwSyqbldsr',
    method: 'post',
    data
  })
}
