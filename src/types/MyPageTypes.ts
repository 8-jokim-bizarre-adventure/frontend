//MyPage Info Type
export interface myInfoType {
  myGradeUrl: string
  myGradeName: string
  myName: string
  myCouponCount: number
  myReviewCount: number
}

//MyPage LookUp Type
export interface myLookUpType {
  order: number
  productPrepare: number
  deliveryPrepare: number
  delivering: number
  deliveryComplete: number
}

//MyPage WishTap Type
export interface myTabType {
  id: number
  name: string
  link: string
}

//MyPage WishProduct Type
export interface myWishProductType {
  id: number
  wishImageUrl: string
  wishBrand: string
  wishName: string
  wishAmmount: number
  wishPrice: number
}

//MyPage WishEvent Type
export interface myWishEventType {
  id: number
  wishImageUrl: string
  wishSubTitle: string
  wishTitle: string
  wishDescription: string
  wishStartDate: string
  wishEndDate: string
}

//MyPage Register Type
export interface myRegisterType {
  id: number
  registerName: string
  currentLink?: string | undefined
}

//MyPage Size Option Type
export interface mySizeOptionType {
  id: number
  optionName: string
  optionNameEn: string
  optionType?: string | undefined
}

//MyPage Size Type
export interface mySizeType {
  id: number
  height?: number | undefined
  weight?: number | undefined
  topSize?: string | undefined
  bottomSize?: string | undefined
  footSize?: string | undefined
}

//MyPage Top, Bottom, Foot Size Data Type
export interface selectSizeType {
  id: number
  option: string
}
