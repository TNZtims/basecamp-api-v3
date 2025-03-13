import { fetchDataWithRetry } from '../utils/fetchWithRetry'

interface GetCommentsParams {
  accountId: string
  authorization: string
  projectId: string
  recordingId: string
}

export const getComments = async(params: GetCommentsParams): Promise<any> => {
  let allComments: any[] = []
  let page = 1

  while (true) {
    const url = `https://3.basecampapi.com/${params.accountId}/buckets/${params.projectId}/recordings/${params.recordingId}/comments.json?page=${page}`
    const options = {
      method: 'get',
      headers: { Authorization: `Bearer ${params.authorization}` }
    }

    const result = await fetchDataWithRetry({ url, options })

    if (!result.success) {
      console.error(`Failed to fetch comments: ${result.message}`)
      return []
    }

    if (!result.data || result.data.length === 0) break
    allComments = [...allComments, ...result.data]
    page++
  }

  return { success: true, status: 200, data: allComments, message: 'Success' }
}

interface GetACommentParams {
  accountId: string
  authorization: string
  projectId: string
  commentId: string
}

export const getAComment = async(params: GetACommentParams): Promise<any> => {
  const url = `https://3.basecampapi.com/${params.accountId}/buckets/${params.projectId}/comments/${params.commentId}.json`
  const options = {
    method: 'get',
    headers: { Authorization: `Bearer ${params.authorization}` }
  }

  return await fetchDataWithRetry({ url, options })
}

interface CreateACommentParams {
  accountId: string
  authorization: string
  projectId: string
  recordingId: string
  content: string
}

export const createAComment = async(params: CreateACommentParams): Promise<any> => {
  const url = `https://3.basecampapi.com/${params.accountId}/buckets/${params.projectId}/recordings/${params.recordingId}/comments.json`
  const options = {
    method: "post",
    headers: {
      Authorization: `Bearer ${params.authorization}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ content: params.content }),
    muteHttpExceptions: true
  }

  return fetchDataWithRetry({ url, options })
}

interface UpdateACommentParams {
  accountId: string
  authorization: string
  projectId: string
  commentId: string
  content: string
}

export const updateAComment = async(params: UpdateACommentParams): Promise<any> => {
  const url = `https://3.basecampapi.com/${params.accountId}/buckets/${params.projectId}/comments/${params.commentId}.json`
  const options = {
    method: "put",
    headers: {
      Authorization: `Bearer ${params.authorization}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ content: params.content }),
    muteHttpExceptions: true
  }

  return fetchDataWithRetry({ url, options })
}