import React from 'react'
import { View, Text, Button, Image } from '@tarojs/components'
import './index.scss'
import Heading from '../../components/Heading/heading'
import CustomSwiper from '../../components/Swiper/swiper'
import qr from '../../assets/icons/qr.png'
import myform from '../../assets/icons/myform.png'
import cards from '../../assets/icons/cards.png'

const images = [
  'https://via.placeholder.com/300x120/09f/fff.png?text=active 1',
  'https://via.placeholder.com/300x120/efd/fff.png?text=activ 2',
  'https://via.placeholder.com/300x120/123/fff.png?text=active 3',
  'https://via.placeholder.com/300x120/1ed/fff.png?text=active 4',
  'https://via.placeholder.com/300x120/edf/fff.png?text=active 5'
]

const mine = [
  { path: qr, text: '会员码' },
  { path: cards, text: '我的卡包' },
  { path: myform, text: '我的订单' }
]
export default function Index () {
  return (
    <View className='index'>
      <Heading />
      <CustomSwiper images={images} />
      <View className='greetings'>
        <Text>晚上好，xx</Text>
      </View>
      <View className='orderBtn'>
        <Button>开始点餐</Button>
      </View>
      <View className='myServices'>
        {
          mine.map(({ path, text }) =>
            <View key={path}>
              <Image src={path} />
              <View>{text}</View>
            </View>
          )
        }
      </View>
    </View>
  )
}
