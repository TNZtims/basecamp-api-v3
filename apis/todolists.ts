import { fetchDataWithRetry } from '../utils/fetchWithRetry'

interface GetTodolistsParams {
  accountId: string
  authorization: string
  projectId: string
  todosetId: string
}

export const getTodolists = async(params: GetTodolistsParams): Promise<any> => {
  const url = `https://3.basecampapi.com/${params.accountId}/buckets/${params.projectId}/todosets/${params.todosetId}/todolists.json`
  const options = {
    method: 'get',
    headers: { Authorization: `Bearer ${params.authorization}` }
  }

  return await fetchDataWithRetry({ url, options })
}

interface GetATodolistParams {
  accountId: string
  authorization: string
  projectId: string
  todolistId: string
}

export const getATodolist = async(params: GetATodolistParams): Promise<any> => {
  const url = `https://3.basecampapi.com/${params.accountId}/buckets/${params.projectId}/todolists/${params.todolistId}.json`
  const options = {
    method: 'get',
    headers: { Authorization: `Bearer ${params.authorization}` }
  }

  return await fetchDataWithRetry({ url, options })
}

interface CreateATodolistParams {
  accountId: string
  authorization: string
  projectId: string
  todosetId: string
  name: string
  description?: string
}

export const createATodolist = async(params: CreateATodolistParams): Promise<any> => {
  const url = `https://3.basecampapi.com/${params.accountId}/buckets/${params.projectId}/todosets/${params.todosetId}/todolists.json`
  const options = {
    method: "post",
    headers: { 
      Authorization: `Bearer ${params.authorization}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ name: params.name, description: params.description }),
    muteHttpExceptions: true
  }

  return await fetchDataWithRetry({ url, options })
}

interface UpdateATodolistParams {
  accountId: string
  authorization: string
  projectId: string
  todolistId: string
  name: string
  description?: string
}

export const updateATodolist = async(params: UpdateATodolistParams): Promise<any> => {
  const url = `https://3.basecampapi.com/${params.accountId}/buckets/${params.projectId}/todolists/${params.todolistId}.json`
  const options = {
    method: "put",
    headers: {
      Authorization: `Bearer ${params.authorization}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: params.name, description: params.description }),
    muteHttpExceptions: true
  }

  return await fetchDataWithRetry({ url, options })
}