import instance from '@/utils/http'
const channel = async (uuid) => {
  const res = await instance.get('/api/task/share/channels', {})
  return res.data
}

const backImg = async (uuid) => {
  const res = await instance.get('/api/oss/random-share-background', {})
  return res.data
}

const size = async (uuid) => {
  const res = await instance.get('/api/task/share/card-img-size', {})
  return res.data
}
export {
  channel,
  backImg,
  size
}
