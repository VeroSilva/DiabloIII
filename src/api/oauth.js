import { post } from 'axios'

const clientId = '582b26a49f3b4f2aac0c07d19d90158b'
const clientSecret = 'vXSLiiJTK7QFY5eQqOmZZzOOgXQkh9TO'
const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  const body = new FormData()

  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }

  return post(API_URL, body, config)
}

export {
  getToken
}
