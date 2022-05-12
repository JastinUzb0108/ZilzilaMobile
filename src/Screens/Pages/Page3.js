import React, { useContext } from 'react'
import { View } from 'react-native'

import { GlobalState } from 'Config'
import Helper from 'Helper'
import { Transform } from 'Animation'

const Page3 = ({ navigation }) => {
  const state = useContext(GlobalState)
  const [data] = state.data
  return (
    <View style={{
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}>
      <Helper nav='Page2' navLink="Page4" navigation={navigation} />
      <Transform data={data.page3} />
    </View>
  )
}

export default Page3
