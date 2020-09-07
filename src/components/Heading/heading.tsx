import React from 'react'
import { View, Text, Navigator } from '@tarojs/components'
import './heading.scss'

export default function Heading () {
  return (
    <View className='heading'>
      <Text>欢迎xx</Text>
      <View className='gap' />
      <Navigator>注册</Navigator>
    </View>
  )
}
