import instance from '@/utils/http'

/**
 * @typedef { import('@/utils/request').Result } Result
 */

/**
 * 获取奖励列表
 * @returns {Promise<Result<Object[]>>>}
 */
export const getPrizeList = async () => {
  const res = await instance.get('/api/prize/')
  return res.data
}
