'use client'

import React from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getImages } from '../services/getImages'
import Image from 'next/image'

export function ImageList() {
  const { data } = useSuspenseQuery(getImages)

  return (
    <div>
      <figure>
        {data.map(item =>
          <section key={item.id}>
            <Image src={item.download_url} width={200} height={200} alt={item.author} />
            <h2>{item.author}</h2>
          </section>
        )}
      </figure>
    </div>
  )
}
