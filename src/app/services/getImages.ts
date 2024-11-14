import { queryOptions } from '@tanstack/react-query'
import { ImageType } from '../types/image'

export const getImages = queryOptions({
  queryKey: ['images'],
  queryFn: async (): Promise<ImageType[]> => {
    const response = await fetch('https://picsum.photos/v2/list')

    return response.json()
  },
})
