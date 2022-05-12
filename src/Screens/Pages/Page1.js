import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import Helper from 'Helper'
import { Small } from 'Animation'
import { Images } from 'Constants'
import { GlobalState } from 'Config'

const Page1 = ({ navigation }) => {
  const state = useContext(GlobalState)
  const [data] = state.data
  return (
    <View style={styles.container}>
      <Helper navLink='Page2' nav='Home' navigation={navigation} />
      <Small data={data.page1} Image={Images.img1} />
    </View>
  )
}

export default Page1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
})