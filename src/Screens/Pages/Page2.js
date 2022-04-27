import React from 'react'
import { View } from 'react-native'

import { AllData } from 'Mock'
import Helper from 'Helper'
import { Transform } from 'Animation'

const Page2 = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}>
      <Helper na='Page1' navLink="Page3" navigation={navigation} />
      <Transform data={AllData.page2} />
    </View>
  )
}

export default Page2
