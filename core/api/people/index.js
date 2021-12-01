import axiosClient from '@/core/utils/axios'

const get = (slug) => {
  return axiosClient({
    method: 'get',
    url: slug,
  })
}

const films = { get }

export default films
