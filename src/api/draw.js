import instance from '@/utils/http'
const draw = async (uuid) => {
  const res = await instance.post('/api/draw/draw-one', {})
  return res.data
}

/**
 * @typedef { import('@/utils/request').Result } Result
 */

/**
 * 获取翻牌中奖记录
 * @returns {Promise<Result<any>>}
 */
const getDrawRecordList = async (current, size) => {
  const res = await instance.get('/api/draw/records', {
    params: {
      current,
      size
    }
  })
  return res.data
}

export {
  draw,
  getDrawRecordList
}
