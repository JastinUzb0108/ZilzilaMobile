import React from 'react'
import { View } from 'react-native'

import { AllData } from 'Mock'
import Helper from 'Helper'
import { Transform } from 'Animation'

const Page3 = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}>
      <Helper nav='Page2' navLink="Page4" navigation={navigation} />
      <Transform data={AllData.page3} />
    </View>
  )
}

export default Page3
