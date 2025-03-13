import { fetchDataWithRetry } from '../utils/fetchWithRetry'

interface GetAllPeopleParams {
  accountId: string
  authorization: string
}

export const getAllPeople = async (params: GetAllPeopleParams): Promise<any> => {
  let allPeople: any[] = []
  let page = 1

  while (true) {
    const url = `https://3.basecampapi.com/${params.accountId}/people.json?page=${page}`
    const options = {
      method: 'get',
      headers: { Authorization: `Bearer ${params.authorization}` }
    }

    const result = await fetchDataWithRetry({ url, options })

    if (!result.success) {
      console.error(`Failed to fetch people: ${result.message}`)
      return []
    }

    if (!result.data || result.data.length === 0) break
    allPeople = [...allPeople, ...result.data]
    page++
  }

  return { success: true, status: 200, data: allPeople, message: 'Success' }
}

interface GetPeopleOnAProjectParams {
  accountId: string
  authorization: string
  projectId: string
}

export const getPeopleOnAProject = async (params: GetPeopleOnAProjectParams): Promise<any> => {
  let allPeople: any[] = []
  let page = 1

  while (true) {
    const url = `https://3.basecampapi.com/${params.accountId}/projects/${params.projectId}/people.json?page=${page}`
    const options = {
      method: 'get',
      headers: { Authorization: `Bearer ${params.authorization}` }
    }

    const result = await fetchDataWithRetry({ url, options })

    if (!result.success) {
      console.error(`Failed to fetch project people: ${result.message}`)
      return []
    }

    if (!result.data || result.data.length === 0) break
    allPeople = [...allPeople, ...result.data]
    page++
  }

  return { success: true, status: 200, data: allPeople, message: 'Success' }
}

interface GetPingablePeopleParams {
  accountId: string
  authorization: string
}

export const getPingablePeople = async (params: GetPingablePeopleParams): Promise<any> => {
  const url = `https://3.basecampapi.com/${params.accountId}/circles/people.json`
  const options = {
    method: 'get',
    headers: { Authorization: `Bearer ${params.authorization}` }
  }

  return await fetchDataWithRetry({ url, options })
}

interface GetMyPersonalInfoParams {
  accountId: string
  authorization: string
}

export const getMyPersonalInfo = async (params: GetMyPersonalInfoParams): Promise<any> => {
  const url = `https://3.basecampapi.com/${params.accountId}/my/profile.json`
  const options = {
    method: 'get',
    headers: { Authorization: `Bearer ${params.authorization}` }
  }

  return await fetchDataWithRetry({ url, options })
}

interface GetPersonParams {
  accountId: string
  authorization: string
  peopleId: string
}

export const getPerson = async (params: GetPersonParams): Promise<any> => {
  const url = `https://3.basecampapi.com/${params.accountId}/people/${params.peopleId}.json`
  const options = {
    method: 'get',
    headers: { Authorization: `Bearer ${params.authorization}` }
  }

  return await fetchDataWithRetry({ url, options })
}