import React from 'react'
import { View, StyleSheet } from 'react-native'

import { AllData } from 'Mock'
import Helper from 'Helper'
import Config from 'Config'

const Page4 = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}>
      <Helper navLink="Page5" navigation={navigation} />
        <Config data={AllData.page4} boxAll={true} />
    </View>
  )
}

export default Page4

