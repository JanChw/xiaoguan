import React, { useState } from 'react'
import { View, Text, Button, ScrollView } from '@tarojs/components'
import Taro, { useReady } from '@tarojs/taro'
import './order.scss'


const contents = [
  {
    category: '1',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti omnis dolorem, quaerat quae excepturi dolorum culpa vitae, suscipit asperiores blanditiis deserunt ipsum, quibusdam delectus sint necessitatibus similique rerum. Nulla, ullam!'},
  {
    category: '2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia minus ducimus illum voluptatem soluta culpa beatae alias illo! Quod voluptates tempora repellat aut alias blanditiis fugit dolore? Modi, consequuntuLorem ipsum dolor sit amet consectetur, adipisicing elit. Eum molestias omnis blanditiis! Quibusdam autem perferendis deserunt odit rerum soluta! Modi minus dignissimos iste corrupti in sit laborum necessitatibus unde nemo!'
  },
  {
    category: '3',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti omnis dolorem, quaerat quae excepturi dolorum culpa vitae, suscipit asperiores blanditiis deserunt ipsum, quibusdam delectus sint necessitatibus similique rerum. Nulla, ullam!'
  }
]

export default function Order () {
  const [currentView, setCurrentView] = useState('view1')
  const [scrollViewHeight, setScrolViewHeight] = useState(0)
  const [scrollArr, setScrollArr] = useState([])
  const [currentActiveBtn, setCurrentActiveBtn] = useState(1)

  const handleScroll = (e) => {
    let scrollTop=e.detail.scrollTop
    // 忽略了view间margin的影响
      if(scrollTop >= scrollArr[scrollArr.length-1]-scrollViewHeight){
        setCurrentActiveBtn(scrollArr.length - 1)
      }  else  {
        for(let i=0;i<scrollArr.length;i++) {
          if(scrollTop>=0&&scrollTop<scrollArr[0]) {
            setCurrentActiveBtn(0)
          }  else if(scrollTop>=scrollArr[i-1]&&scrollTop<scrollArr[i]) {
            setCurrentActiveBtn(i)
          }
        }
      }
  }

  useReady(() => {
    let height: number = 0
    let _heights: number[] = []
    const query = Taro.createSelectorQuery()
    query.select('.scrollview').boundingClientRect(rect => {
      console.log(rect.height)
      setScrolViewHeight(rect.height)
    }).exec()
    query.selectAll('.content').boundingClientRect(rects => {
      (rects as any).forEach(rect => {
        height += rect.height;
        _heights.push(height)
      })
    setScrollArr(_heights)
    }).exec()
    
  })

  return (
    <View className='order'>
      <Text>Hello world! --- 点单</Text>
      <View>
        <View>
          {
            contents.map((content, index) => <Button key={index} className={index == currentActiveBtn ? 'active': ''} onClick={() => setCurrentView(() => `view${index + 1}`)}>{content.category}</Button>)
          }
        </View>
        <View className='list'>
          <ScrollView scrollY scrollWithAnimation scrollIntoView={currentView} onScroll={handleScroll} className='scrollview'>
            {
              contents.map((content, index) => <View key={index} id={`view${index + 1}`} className='content'>{content.text}</View>)
            }
          </ScrollView>
        </View>
      </View>
    </View>
  )
}
