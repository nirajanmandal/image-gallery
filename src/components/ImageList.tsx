'use client'

import React from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getImages } from '../app/services/getImages'
import { ParallaxScroll } from './ui/parallax-scroll'
import { useRouter, useSearchParams } from 'next/navigation'
import { Loader2 } from 'lucide-react'

export function ImageList() {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const router = useRouter()

  const { data, isFetching, isLoading } = useSuspenseQuery(getImages(currentPage))

  const handlePageChange = (newPage: number) => {
    router.push(`?page=${newPage}`)
  }

  return (
    <section>
      {isLoading ?
        <p className="flex h-screen w-screen items-center justify-center">
          <Loader2 className="animate-spin" />
        </p>
        :
        <figure>
          <ParallaxScroll images={data} onPageChange={handlePageChange}
            currentPage={currentPage}
            isLoading={isFetching} />;
        </figure>
      }
    </section>
  )
}
