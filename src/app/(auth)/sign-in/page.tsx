import KakaoIcon from '@/components/icons/sign-in/KakaoIcon'
import PhoneIcon from '@/components/icons/sign-in/PhoneIcon'
import NaverIcon from '@/components/icons/sign-in/NaverIcon.png'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SignInField from '@/components/sign-in/SignInField'

export const metadata: Metadata = {
  title: '로그인',
}
export default function SignIn() {
  const handleSignIn = async (signInFormData: FormData) => {
    'use server'

    console.log('data', signInFormData)
  }
  return (
    <main className="min-h-[calc(100vh-112px)] px-[24px] pt-[28px] pb-[112px]">
      <section>
        <form className="flex flex-col gap-[8px]" action={handleSignIn}>
          <SignInField />
          <Button type="submit" size={'auth'} className="mt-[20px] w-full ">
            로그인
          </Button>
        </form>
      </section>
      {/* 아래 컴포넌트로 따로 뺄지 정할 것 */}
      <section>
        <ul className="mt-[32px] text-center">
          <li className="inline-block px-4">
            <Link href={'/'}>
              <PhoneIcon />
            </Link>
          </li>
          <li className="inline-block px-4">
            <Link href={'/'}>
              <KakaoIcon />
            </Link>
          </li>
          <li className="inline-block px-4">
            <Link href={'/'}>
              <Image src={NaverIcon} alt={'naverIcon'} style={{ maxWidth: 'none' }} />
            </Link>
          </li>
        </ul>
        <Link href={'/sign-up'}>
          <Button variant={'outline'} size={'auth'} className="mt-[52px] w-full">
            회원가입
          </Button>
        </Link>
        <Link href={'#'} className="mt-[25px] inline-block w-full text-center underline text-[14px] text-[#787878]">
          비회원 주문조회
        </Link>
      </section>
    </main>
  )
}
