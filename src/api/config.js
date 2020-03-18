import axios from '@/utils/axios'
export default {
  queryUserInfo (params) {
    return axios.post('/queryUserInfo', params).then(resp => {
      return resp
    })
  },
  queryBanners (params) {
    return axios.post('/queryBanners', params).then(resp => {
      return resp
    })
  },
  queryGrid (params) {
    return axios.post('/queryGrid', params).then(resp => {
      return resp
    })
  },
}
