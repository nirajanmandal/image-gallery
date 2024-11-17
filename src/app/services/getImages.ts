import { queryOptions } from '@tanstack/react-query'
import { ImageType } from '../types/image'
import { API_URL } from '@/lib/constants'

export const getImages = (page: number = 1) => queryOptions({
  queryKey: ['images', page],
  queryFn: async (): Promise<ImageType[]> => {
    const response = await fetch(`${API_URL}&page=${page}`)
    return response.json()
  },
})
