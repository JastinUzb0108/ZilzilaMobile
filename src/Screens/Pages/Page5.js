import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import Helper from 'Helper'
import { GlobalState } from 'Config'
import { Small } from 'Animation'
import { Images } from 'Constants'

const Page5 = ({ navigation }) => {
  const state = useContext(GlobalState)
  const [data] = state.data
  return (
    <View style={styles.container}>
      <Helper nav='Page4' navLink="Page6" navigation={navigation} />
      <Small data={data.page5} Image={Images.img15} />
    </View>
  )
}

export default Page5

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})