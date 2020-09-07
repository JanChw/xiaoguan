import React from 'react'
import { Swiper, SwiperItem, Image } from '@tarojs/components'

export default function (props) {
  const { images, mode } = props
  return (
    <Swiper autoplay indicatorDots>
      {
        images.map(
          (image, index) =>
            <SwiperItem key={index}>
              <Image src={image} mode={mode || 'widthFix'} />
            </SwiperItem>)
      }
    </Swiper>
  )
}
