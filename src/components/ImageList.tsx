'use client'

import React from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getImages } from '../app/services/getImages'
import { ParallaxScroll } from './ui/parallax-scroll'
import { useRouter, useSearchParams } from 'next/navigation'

export function ImageList() {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const router = useRouter()

  const { data, isFetching } = useSuspenseQuery(getImages(currentPage))

  const handlePageChange = (newPage: number) => {
    router.push(`?page=${newPage}`)
  }

  return (
    <section>
      <figure className=''>
        <ParallaxScroll images={data} onPageChange={handlePageChange}
          currentPage={currentPage}
          isLoading={isFetching} />;
      </figure>

    </section>
  )
}
