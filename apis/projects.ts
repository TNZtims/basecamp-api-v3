import { fetchDataWithRetry } from '../utils/fetchWithRetry'

interface GetAllProjectsParams {
  accountId: string
  authorization: string
  status?: string
}

export const getAllProjects = async (params: GetAllProjectsParams): Promise<any> => {
  const queryStringArr = [`status=${params.status || ''}`]
  const queryString = queryStringArr.join('&')
  const url = `https://3.basecampapi.com/${params.accountId}/projects.json?${queryString}`
  const options = {
    method: 'get',
    headers: { Authorization: `Bearer ${params.authorization}` }
  }

  return await fetchDataWithRetry({ url, options })
}

interface GetAProjectParams {
  accountId: string
  authorization: string
  projectId: string
}

export const getAProject = async (params: GetAProjectParams): Promise<any> => {
  const url = `https://3.basecampapi.com/${params.accountId}/projects/${params.projectId}.json`
  const options = {
    method: 'get',
    headers: { Authorization: `Bearer ${params.authorization}` }
  }

  return await fetchDataWithRetry({ url, options })
}