'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import BasketIcon from '../icons/auth-service-header/BasketIcon'
import SearchIcon from '../icons/auth-service-header/SearchIcon'
import TitleHeader from '../ui/TitleHeader'
import LeftArrowIcon from '../icons/auth-service-header/LeftArrowIcon'
import Link from 'next/link'

export default function AuthServiceHeader() {
  const pathName = usePathname()

  const [title, setTitle] = useState<string>('')
  const lastSegment = pathName.split('/').pop()

  console.log(pathName, lastSegment)

  useEffect(() => {
    if (lastSegment === 'sign-in') {
      setTitle('로그인')
    } else if (lastSegment === 'sign-up') {
      setTitle('회원가입')
    } else if (lastSegment === 'phone') {
      setTitle('통합 멤버십 가입')
    } else if (lastSegment === 'simple') {
      setTitle('온라인 간편가입')
    }
  }, [lastSegment])

  return (
    <header className="flex flex-col justify-center w-full h-[56px] px-[16px]">
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link href={'/'}>
              <LeftArrowIcon />
            </Link>{' '}
          </li>
          <li className="absolute left-[50%] translate-x-[-50%] ">
            <TitleHeader title={title} textStyle="text-[18px] font-medium leading-[34px]" />
          </li>
          <li>
            <ul className="flex gap-4">
              <li>
                <Link href={'/'}>
                  <SearchIcon />
                </Link>
              </li>
              <li className="relative">
                <Link href={'/'}>
                  <BasketIcon />
                </Link>
                <span
                  className={`absolute
                                                top-[-4px]
                                                right-[-6px]
                                                flex
                                                w-[20px]
                                                h-[20px]
                                                text-[10px]
                                                bg-[rgb(217,156,99)]
                                                text-white
                                                items-center
                                                justify-center
                                                rounded-full
                                                leading-[0]`}
                >
                  12
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}
