import ProductDescriptionSection from '@/components/icons/product-detail/ProductDescriptionSection'
import ProductDetailSwiper from '@/components/product-detail/ProductDetailSwiper'
import ProductSummarySection from '@/components/product-detail/ProductSummarySection'
import Divider from '@/components/ui/Divider'
import { productDetailData } from '@/datas/dummy/product/ProductDetailData'

export default async function ProductDetail({ slug }: { slug: string }) {
  console.log(slug)

  const productDetail: ProductDetailType = productDetailData

  const res = await fetch('https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2406262361')
  const text = await res.text()
  console.log(text)

  return (
    <main>
      {/* ProductSummarySection */}
      <ProductDetailSwiper productDetailImages={productDetail.images} />
      <ProductSummarySection productDetailData={productDetail} />
      <Divider />
      {/* ProductDescriptionSection */}
      <ProductDescriptionSection />
      {/* FewReviewsSection */}
    </main>
  )
}
