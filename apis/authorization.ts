import { fetchDataWithRetry } from '../utils/fetchWithRetry'

interface GenerateCodeByBasecampLoginParams {
  url: string
  email: string
  password: string
  sphereKey: string
}

export const generateCodeByBasecampLogin = async(params: GenerateCodeByBasecampLoginParams): Promise<any> => {
  const baseUrl = `http://sphere.outdoorequippedservice.com/api/v1/cookie/provide/basecamp`
  const queryParams = [
    `username=${params.email}`,
    `password=${params.password}`,
    `url=${params.url}`
  ]
  const queryString = queryParams.join('&')
  const url = `${baseUrl}?${queryString}`
  const options = { 
    method: 'get', 
    headers: { Authorization: params.sphereKey }
  }

  const response = await fetchDataWithRetry({ url, options })

  if ('data' in response) {
    console.log(response)
    const cookieUrl = response.data?.data?.cookie?.[0]
    console.log(cookieUrl)
    const code = cookieUrl ? new URL(cookieUrl).searchParams.get('code') : null

    return {
      status: response.status,
      message: response.message,
      data: {
        code
      }
    }
  }

  throw new Error(response.message || 'Failed to fetch data')
}

interface GenerateAccessTokenParams {
  clientId: string
  clientSecret: string
  code: string
  redirectUri: string
}

export const generateAccessTokenByCode = async(params: GenerateAccessTokenParams): Promise<any> => {
  const baseUrl = `https://launchpad.37signals.com/authorization/token`
  const queryParams = [
    `client_id=${params.clientId}`,
    `client_secret=${params.clientSecret}`,
    `type=web_server`,
    `code=${params.code}`,
    `redirect_uri=${params.redirectUri}`,
  ]
  const queryString = queryParams.join('&')
  const url = `${baseUrl}?${queryString}`
  const options = { method: 'post' }

  return await fetchDataWithRetry({ url, options })
}

interface GenerateAccessTokenByResfreshTokenParams {
  clientId: string
  clientSecret: string
  refreshToken: string
}

export const generateAccessTokenByResfreshToken = async(params: GenerateAccessTokenByResfreshTokenParams): Promise<any> => {
  const baseUrl = `https://launchpad.37signals.com/authorization/token`
  const queryParams = [
    `client_id=${params.clientId}`,
    `client_secret=${params.clientSecret}`,
    `type=refresh`,
    `refresh_token=${params.refreshToken}`,
  ]
  const queryString = queryParams.join('&')
  const url = `${baseUrl}?${queryString}`
  const options = { method: 'post' }

  return await fetchDataWithRetry({ url, options })
}