import React, { useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, Navigator } from '@tarojs/components'
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

const pics = [
  'https://via.placeholder.com/170x80/09f/fff.png?text=product 1',
  'https://via.placeholder.com/170x80/14e/fff.png?text=product 2'
]

const url = 'http://localhost:3000/api/v1/goods'
const mine = [
  { path: qr, text: '会员码' },
  { path: cards, text: '我的卡包' },
  { path: myform, text: '我的订单' }
]
export default function Index () {
  // useEffect(() => {

  // }, [])
  return (
    <View className='index'>
      <Heading />
      <CustomSwiper images={images} />
      <View className='greetings'>
        <Text>晚上好，xx</Text>
      </View>
      <View className='orderBtn'>
        <Navigator url='/pages/order/order' open-type='switchTab'>开始点餐</Navigator>
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
      <View className='pics'>
        {
          pics.map((pic, index) => <Image src={pic} key={index} />)
        }
      </View>
    </View>
  )
}
