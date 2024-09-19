import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { mySizeType, selectSizeType } from '@/types/MyPageTypes'
import SizeFormItem from './SizeFormItem'

interface beautySizeType {
  mySizeData: mySizeType
  topSizeDatas: selectSizeType[]
  bottomSizeDatas: selectSizeType[]
  footSizeDatas: selectSizeType[]
}

export default function SizeInput({ mySizeData, topSizeDatas, bottomSizeDatas, footSizeDatas }: beautySizeType) {
  return (
    <>
      <SizeFormItem label="키">
        <Input
          className="w-10/12 border-r-0"
          type="text"
          name="height"
          placeholder="입력"
          defaultValue={mySizeData.height}
        />
        <span className="w-1/6 h-[48px] border border-[#e0e0e0] border-l-0 text-center leading-10">cm</span>
      </SizeFormItem>

      <SizeFormItem label="몸무게">
        <Input
          className="w-10/12 border-r-0"
          type="text"
          name="weight"
          placeholder="입력"
          defaultValue={mySizeData.weight}
        />
        <span className="w-1/6 h-[48px] border border-[#e0e0e0] border-l-0 text-center leading-10">kg</span>
      </SizeFormItem>

      <SizeFormItem label="평소 상의 사이즈">
        <Select name="topSize" defaultValue={mySizeData.topSize}>
          <SelectTrigger>
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent>
            {topSizeDatas?.map((item) => (
              <SelectItem key={item.id} value={item.option}>
                {item.option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </SizeFormItem>

      <SizeFormItem label="평소 하의 사이즈">
        <Select name="bottomSize" defaultValue={mySizeData.bottomSize}>
          <SelectTrigger>
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent>
            {bottomSizeDatas?.map((item) => (
              <SelectItem key={item.id} value={item.option}>
                {item.option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </SizeFormItem>

      <SizeFormItem label="평소 신발 사이즈">
        <Select name="footSize" defaultValue={mySizeData.footSize}>
          <SelectTrigger>
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent>
            {footSizeDatas?.map((item) => (
              <SelectItem key={item.id} value={item.option}>
                {item.option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </SizeFormItem>
    </>
  )
}
