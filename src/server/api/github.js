
const Router = require('koa-router')
const { getAccessToken, getGuestInfo } = require('../service/token')

const router = new Router({
  prefix: '/oauth/github'
})

router.get('/callback', async ctx => {

  const requestToken = ctx.request.query.code;  
  const accessToken = await getAccessToken(requestToken)
  const guestInfo = await getGuestInfo(accessToken)
  
  ctx.redirect(`http://localhost:8080/todo/${guestInfo.name}`)
  
})



module.exports = router
