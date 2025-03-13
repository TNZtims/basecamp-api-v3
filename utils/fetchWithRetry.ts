interface FetchDataWithRetryParams<T = any> {
  url: string
  options?: RequestInit
  retryCount?: number
  delay?: number
}

interface FetchSuccess<T = any> {
  success: true
  status: number
  data: T
  message: string
}

interface FetchError {
  success: false
  status?: number
  message: string
}

export const fetchDataWithRetry = async <T = any>({
  url,
  options = {},
  retryCount = 1,
  delay = 1000
}: FetchDataWithRetryParams<T>): Promise<FetchSuccess<T> | FetchError> => {
  try {
    const response: Response = await fetch(url, options)

    if (response.status === 204) {
      return { success: true, status: 204, data: {} as T, message: "No Content" }
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: T = await response.json()

    return {
      success: true,
      status: response.status,
      data: data,
      message: 'Success'
    }

  } catch (error) {
    const fetchError = error as Error

    if (retryCount > 0) {
      console.warn(`Retrying request in ${delay}ms (${retryCount} attempts left)...`)
      await new Promise(resolve => setTimeout(resolve, delay))
      return fetchDataWithRetry({ url, options, retryCount: retryCount - 1, delay: delay + 1000 })
    }

    if (fetchError.message.includes('HTTP error')) {
      console.error(`Request failed with status ${fetchError.message}`)
      return { 
        success: false, 
        status: parseInt(fetchError.message.split('status: ')[1]), 
        message: `API Error: ${fetchError.message}` 
      }
    } else {
      console.error('Request error:', fetchError.message)
      return { 
        success: false, 
        message: `Unexpected Error: ${fetchError.message}` 
      }
    }
  }
}