const fs = require('fs')
const path = require('path')
const axios = require('axios')

const clientID = 'a03a30cd8596c3faf592'
const clientSecret = 'c7f61114fd513d4261e8d4a2b81f3d258f2cb6be'

async function getAccessToken(code) {
  const file = path.join(__dirname, '../config/token.json')
  const text = fs.readFileSync(file, 'utf8')
  
  const tokenInfo = JSON.parse(text)
  if (new Date().getTime() < tokenInfo.expired) {
    return tokenInfo.token
  }

  const tokenResponse = await axios.post(`https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${code}`, {}, {
    headers: {
      accept: 'application/json'
    }
  })
  const accessToken = tokenResponse.data.access_token;

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
  const result = await axios.get('https://api.github.com/user', {
    headers: {
      accept: 'application/json',
      Authorization: `token ${accessToken}`
    }
  })
  return result.data
}

module.exports = {
  getAccessToken,
  getGuestInfo
}