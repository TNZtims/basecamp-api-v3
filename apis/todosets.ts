import { fetchDataWithRetry } from '../utils/fetchWithRetry'

interface GetTodosetParams {
  accountId: string
  authorization: string
  projectId: string
  todosetId: string
}

export const getTodoset = async(params: GetTodosetParams): Promise<any> => {
  const url = `https://3.basecampapi.com/${params.accountId}/buckets/${params.projectId}/todosets/${params.todosetId}.json`
  const options = {
    method: 'get',
    headers: { Authorization: `Bearer ${params.authorization}` }
  }

  return await fetchDataWithRetry({ url, options })
}