import { StringDecoder } from 'string_decoder'

///////////////////////// TAB /////////////////////////
//MyPage WishTap Type
export interface myTabType {
  id: number
  name: string
  link: string
}

///////////////////////// MyPage Main /////////////////////////
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

///////////////////////// MyPage Wish /////////////////////////
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

///////////////////////// Register /////////////////////////
//MyPage Register Type
export interface myRegisterType {
  id: number
  registerName: string
  currentLink: String
}

///////////////////////// BeautySize /////////////////////////
//MyPage Size Type
export interface mySizeType {
  id: number
  height?: number | undefined
  weight?: number | undefined
  topSize?: string | undefined
  bottomSize?: string | undefined
  footSize?: string | undefined
  agreement: boolean
}

//MyPage Top, Bottom, Foot Size Data Type
export interface selectSizeType {
  id: number
  option: string
}

///////////////////////// Review /////////////////////////
//MyPage Review Count Type
export interface reviewCountType {
  id: number
  productCount: number
  ableCount: number
  alreadyCount: number
}

//MyPage Writen Review Count Type
export interface writenReviewType {
  id: number
  productName: string
  imageUrl: string
  review: string
  writeDate: string
}

///////////////////////// Delivery /////////////////////////
export interface defaultDeliveryType {
  id: number
  default: number
}

export interface deliveryType {
  addressId: number
  addressName: string
  dispCellNo: string
  recipient: string
  phone: string
  zipCode: string
  addressRoad: string
  addressJibeon: string
  addressDetail: string
  checkDefault?: boolean | false
  deliveryPolicy?: boolean | false
}

export interface phoneType {
  id: number
  dispCellNo: string
}
