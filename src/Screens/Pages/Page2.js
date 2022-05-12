import React, { useContext } from 'react'
import { View } from 'react-native'

import Helper from 'Helper'
import { Transform } from 'Animation'
import { GlobalState } from 'Config'

const Page2 = ({ navigation }) => {
  const state = useContext(GlobalState)
  const [data] = state.data
  return (
    <View style={{
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}>
      <Helper nav='Page1'  navLink="Page3" navigation={navigation} />
      <Transform data={data.page2} />
    </View>
  )
}

export default Page2
