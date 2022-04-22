import React from 'react'
import { View } from 'react-native'

import { AllData } from 'Mock'
import Helper from 'Helper'
import Config from 'Config'

const Page2 = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}>
      <Helper navLink="Page3" navigation={navigation} />
      <Config data={AllData.page2} />
    </View>
  )
}

export default Page2
