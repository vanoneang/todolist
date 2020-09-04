const fs = require('fs')
const path = require('path')
const axios = require('axios')
const Router = require('koa-router')

const clientID = 'a03a30cd8596c3faf592'
const clientSecret = 'c7f61114fd513d4261e8d4a2b81f3d258f2cb6be'


const router = new Router({
  prefix: '/oauth/github'
})

router.get('/callback', async ctx => {
  const requestToken = ctx.request.query.code;

  
  const accessToken = await getAccessToken(requestToken)
  const guestInfo = await getGuestInfo(accessToken)
  
  ctx.redirect(`http://localhost:8080/todo/${guestInfo.name}`)
  
})

async function getAccessToken(code) {
  const file = path.join(__dirname, '../../config/token.json')
  const text = fs.readFileSync(file, 'utf8')
  const tokenInfo = JSON.parse(text)
  if (new Date().getTime() < tokenInfo.expired) {
    return tokenInfo.token
  }

  const tokenResponse = await axios({
    method: 'POST',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${code}`,
    headers: {
      accept: 'application/json'
    }
  })
  const accessToken = tokenResponse.data.access_token;
  console.log('accessToken', accessToken);

  fs.writeFile(file, JSON.stringify({
    token: accessToken,
    expired: new Date().getTime() + 7000 * 1000
  }), function(err){ 
    if(err){
	    console.log('writeFile err: ', err);
    }
})

  return accessToken
  
}

async function getGuestInfo(accessToken) {
  const result = await axios({
    method: 'GET',
    url: 'https://api.github.com/user',
    headers: {
      accept: 'application/json',
      Authorization: `token ${accessToken}`
    }
  })
  return result.data
}

module.exports = router