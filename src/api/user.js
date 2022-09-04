import instance from '@/utils/http'

/**
 * @typedef { import('@/utils/request').Result } Result
 */

/**
 * 用户唤起授权页面
 */
export const authorize = async () => {
  window.fb.init({
    success: () => {
      window.fb.oAuth({
        oAuthUrl: 'https://draw-game.be.wizzstudio.com/api/user/redirect'
      }).then(function () {
        location.reload()
      })
    }
  })
}

/**
 * 用户登录 换取 uuid
 * @param code {string} 前端获取到的 code
 * @returns {Promise<Result<string>>}
 */
export const userLogin = async (code) => {
  const res = await instance.get('/api/user/login', {
    params: {
      code
    }
  })
  return res.data
}

/**
 * 获取用户地址
 * @returns {Promise<Result<Object>>}
 */
export const getUserAddress = async () => {
  const res = await instance.get('/api/user/address-info')
  return res.data
}

/**
 * 更新用户地址
 * @param user {any} 用户信息
 * @returns {Promise<Result<Object>>}
 */
export const updateUserAddress = async (user) => {
  const res = await instance.put('/api/user/address-info', user, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return res.data
}
