import React, { useContext } from 'react'
import { View } from 'react-native'

import { GlobalState } from 'Config'
import Helper from 'Helper'
import { Transform } from 'Animation'

const Page4 = ({ navigation }) => {
  const state = useContext(GlobalState)
  const [data] = state.data
  return (
    <View style={{
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}>
      <Helper nav='Page3' navLink="Page5" navigation={navigation} />
        <Transform data={data.page4} boxAll={true} />
    </View>
  )
}

export default Page4

