import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'

import Helper from 'Helper'

const Page5 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Helper navLink="Page6" navigation={navigation} />
      <ScrollView>
        
      </ScrollView>
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