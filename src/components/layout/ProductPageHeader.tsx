'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import BasketIcon from '../icons/auth-service-header/BasketIcon'
import SearchIcon from '../icons/auth-service-header/SearchIcon'
import TitleHeader from '../ui/TitleHeader'
import LeftArrowIcon from '../icons/auth-service-header/LeftArrowIcon'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function ProductPageHeader() {
  return (
    <header className="flex flex-col justify-center w-full h-[56px] px-[16px]">
      <nav>
        <ul className="flex justify-between items-center">
          <li>
            <Link href={'/'}>
              <LeftArrowIcon />
            </Link>
          </li>

          <Link href={'/'} className="w-full border-b border-[#000] mx-[16px]  pb-[5px] text-left ">
            <span className="text-[#787878] text-[14px] leading-[17px] tracking-[-0.035em] pt-[10px] pb-[8px]">
              놓칠 수 없는 최대 30% 페이백
            </span>
          </Link>

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
