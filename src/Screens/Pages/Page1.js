import React from 'react'
import { StyleSheet, View } from 'react-native'
import Helper from 'Helper'
import { AllData } from 'Mock'
import { Small } from 'Animation'
import { Images } from 'Constants'

const Page1 = ({ navigation }) => {
  const data = AllData.page1
  return (
    <View style={styles.container}>
      <Helper navLink='Page2' nav='Home' navigation={navigation} />
      <Small data={data} Image={Images.img1} />
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