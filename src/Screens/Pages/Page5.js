import { StyleSheet, View } from 'react-native'
import React from 'react'
import Helper from 'Helper'
import { AllData } from 'Mock'
import { Small } from 'Animation'
import { Images } from 'Constants'

const Page5 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Helper nav='Page4' navLink="Page6" navigation={navigation} />
      <Small data={AllData.page5} Image={Images.img15} />
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