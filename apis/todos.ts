import { fetchDataWithRetry } from '../utils/fetchWithRetry'

interface GetTodosParams {
  accountId: string
  authorization: string
  projectId: string
  todolistId: string
  status?: string
  completed?: boolean
}

export const getTodos = async(params: GetTodosParams): Promise<any> => {
  const queryStringArr = [
    `status=${params.status||''}`,
    `completed=${params.completed||''}`,
  ]
  const queryString = queryStringArr.join('&')
  const url = `https://3.basecampapi.com/${params.accountId}/buckets/${params.projectId}/todolists/${params.todolistId}/todos.json?${queryString}`
  const options = {
    method: 'get',
    headers: { Authorization: `Bearer ${params.authorization}` }
  }

  return await fetchDataWithRetry({ url, options })
}

interface GetATodoParams {
  accountId: string
  authorization: string
  projectId: string
  todoId: string
}

export const getATodo = async(params: GetATodoParams): Promise<any> => {
  const url = `https://3.basecampapi.com/${params.accountId}/buckets/${params.projectId}/todos/${params.todoId}.json`
  const options = {
    method: 'get',
    headers: { Authorization: `Bearer ${params.authorization}` }
  }

  return await fetchDataWithRetry({ url, options })
}

interface CreateATodoParams {
  accountId: string
  authorization: string
  projectId: string
  todolistId: string
  content: string
  description?: string
  assignee_ids?: string[]
  completion_subscriber_ids?: string[]
  notify?: boolean
  due_on?: string
  starts_on?: string
}

export const createATodo = async(params: CreateATodoParams): Promise<any> => {
  const { content, description, assignee_ids, completion_subscriber_ids, notify, due_on, starts_on } = params
  const url = `https://3.basecampapi.com/${params.accountId}/buckets/${params.projectId}/todolists/${params.todolistId}/todos.json`
  const options = {
    method: "post",
    headers: {
      Authorization: `Bearer ${params.authorization}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ content, description, assignee_ids, completion_subscriber_ids, notify, due_on, starts_on }),
    muteHttpExceptions: true
  }

  return fetchDataWithRetry({ url, options })
}

interface UpdateATodoParams {
  accountId: string
  authorization: string
  projectId: string
  todoId: string
  content: string
  description?: string
  assignee_ids?: string[]
  completion_subscriber_ids?: string[]
  notify?: boolean
  due_on?: string
  starts_on?: string
}

export const updateATodo = async(params: UpdateATodoParams): Promise<any> => {
  const { content, description, assignee_ids, completion_subscriber_ids, notify, due_on, starts_on } = params
  const url = `https://3.basecampapi.com/${params.accountId}/buckets/${params.projectId}/todos/${params.todoId}.json`
  const options = {
    method: "put",
    headers: {
      Authorization: `Bearer ${params.authorization}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ content, description, assignee_ids, completion_subscriber_ids, notify, due_on, starts_on }),
    muteHttpExceptions: true
  }

  return fetchDataWithRetry({ url, options })
}

interface CompleteATodoParams {
  accountId: string
  authorization: string
  projectId: string
  todoId: string
}

export const completeATodo = async(params: CompleteATodoParams): Promise<any> => {
  const url = `https://3.basecampapi.com/${params.accountId}/buckets/${params.projectId}/todos/${params.todoId}/completion.json`
  const options = {
    method: "post",
    headers: {
      Authorization: `Bearer ${params.authorization}`,
    },
    muteHttpExceptions: true
  }

  return fetchDataWithRetry({ url, options })
}

interface UncompleteATodoParams {
  accountId: string
  authorization: string
  projectId: string
  todoId: string
}

export const uncompleteATodo = async(params: UncompleteATodoParams): Promise<any> => {
  const url = `https://3.basecampapi.com/${params.accountId}/buckets/${params.projectId}/todos/${params.todoId}/completion.json`
  const options = {
    method: "delete",
    headers: {
      Authorization: `Bearer ${params.authorization}`,
    },
    muteHttpExceptions: true
  }

  return fetchDataWithRetry({ url, options })
}

interface RepositionATodoPrams {
  accountId: string
  authorization: string
  projectId: string
  todoId: string
  position: number
}

export const repositionATodo = async(params: RepositionATodoPrams): Promise<any> => {
  const url = `https://3.basecampapi.com/${params.accountId}/buckets/${params.projectId}/todos/${params.todoId}/position.json`
  const options = {
    method: "put",
    headers: {
      Authorization: `Bearer ${params.authorization}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ position: params.position }),
    muteHttpExceptions: true
  }

  return fetchDataWithRetry({ url, options })
}