import React from 'react'
import { View, StyleSheet } from 'react-native'

import { AllData } from 'Mock'
import Helper from 'Helper'
import { Transform } from 'Animation'

const Page4 = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}>
      <Helper nav='Page3' navLink="Page5" navigation={navigation} />
        <Transform data={AllData.page4} boxAll={true} />
    </View>
  )
}

export default Page4

