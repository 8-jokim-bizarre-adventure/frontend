'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface stickHeaderItemType {
  id: number
  title: string
  value: string
  url: string
}

const stickHeaderItemData: stickHeaderItemType[] = [
  {
    id: 1,
    title: 'Home',
    value: 'home',
    url: '/',
  },
  {
    id: 2,
    title: 'Event',
    value: 'event',
    url: '/',
  },
  {
    id: 3,
    title: 'Deal',
    value: 'deal',
    url: '/',
  },
  {
    id: 4,
    title: 'Best',
    value: 'best',
    url: '/',
  },
  {
    id: 5,
    title: 'S.I.Live',
    value: 'silive',
    url: '/',
  },
  {
    id: 6,
    title: 'Content',
    value: 'content',
    url: '/',
  },
  {
    id: 7,
    title: 'SSG DF',
    value: 'ssgdf',
    url: '/',
  },
]

export default function MainStickeyHeader() {
  const stickeyHeaderItems: stickHeaderItemType[] = stickHeaderItemData
  const pathName = usePathname()

  const currentSegment = pathName.split('/').pop()

  return (
    <nav className="z-10 sticky top-0 left-0 no-scrollbar w-full px-[15px] grid grid-flow-col overflow-x-scroll bg-[#fefefe] border-b border-[#e0e0e0]">
      {stickeyHeaderItems?.map((item) => (
        <Link
          className={`${currentSegment === item.value ? 'border-b-2 border-black text-black font-[500]' : 'text-[#929292] font-[0]'} inline-block mx-[9px] h-[48px] text-[16px]  text-center leading-[48px] tracking-[0.4px] text-ellipsis whitespace-nowrap`}
          key={item.id}
          href={item.url}
        >
          <span className={`${currentSegment === item.value ? ' ' : ''}`}>{item.title}</span>
        </Link>
      ))}
    </nav>
  )
}
