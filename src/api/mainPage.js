import instance from '@/utils/http'
const credit = async (uuid) => {
  const res = await instance.get('/api/user/credit', {
    headers: {
      token: uuid
    }
  })
  return res.data
}

const chance = async (uuid) => {
  const res = await instance.get('/api/draw/chance', {
  })
  return res.data
}

const buyChance = async (uuid) => {
  const res = await instance.post('/api/draw/buy-chance', {
  })
  return res.data
}

const task = async (uuid) => {
  const res = await instance.get('/api/task/', {})
  return res.data
}

const loginTask = async (uuid) => {
  const res = await instance.post('/api/task/login', {})
  return res.data
}

export {
  credit,
  chance,
  buyChance,
  task,
  loginTask
}
