import { fetchDataWithRetry } from '../utils/fetchWithRetry'

interface ListTodolistGroupsParams {
  accountId: string
  authorization: string
  projectId: string
  todolistId: string
}

export const listTodolistGroups = async(params: ListTodolistGroupsParams): Promise<any> => {
  const url = `https://3.basecampapi.com/${params.accountId}/buckets/${params.projectId}/todolists/${params.todolistId}/groups.json`
  const options = {
    method: 'get',
    headers: { Authorization: `Bearer ${params.authorization}` }
  }

  return await fetchDataWithRetry({ url, options })
}

interface GetATodolistGroupParams {
  accountId: string
  authorization: string
  projectId: string
  todolistId: string
}

export const getATodolistGroup = async(params: GetATodolistGroupParams): Promise<any> => {
  const url = `https://3.basecampapi.com/${params.accountId}/buckets/${params.projectId}/todolists/${params.todolistId}.json`
  const options = {
    method: 'get',
    headers: { Authorization: `Bearer ${params.authorization}` }
  }

  return await fetchDataWithRetry({ url, options })
}

interface CreateATodolistGroupParams {
  accountId: string
  authorization: string
  projectId: string
  todolistId: string
  name: string
  color?: string
}

export const createATodolistGroup = async(params: CreateATodolistGroupParams): Promise<any> => {
  const url = `https://3.basecampapi.com/${params.accountId}/buckets/${params.projectId}/todolists/${params.todolistId}/groups.json`
  const options = {
    method: "post",
    headers: {
      Authorization: `Bearer ${params.authorization}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: params.name, color: params.color }),
    muteHttpExceptions: true
  }

  return await fetchDataWithRetry({ url, options })
}