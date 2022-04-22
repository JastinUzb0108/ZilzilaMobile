import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useTheme } from 'styled-components'
import { McText, McImage, McBoldText } from 'Components'
import Helper from 'Helper'
import { AllData } from 'Mock'
import { Images } from 'Constants'

const Page1 = ({ navigation }) => {
  const data = AllData.page1
  const theme = useTheme()
  return (
    <View style={styles.container}>
      <Helper navLink='Page2' navigation={navigation} />

      <ScrollView style={styles.textContainer}>
        <McImage
        style={{
          width: "100%",
          height: 200,
          marginBottom: 10,
          marginTop: 10
        }}
          source={
            Images.img1
          } />
        <McBoldText
          color={theme.colors.text1}
          size={20}
          style={{
            marginBottom: 5
          }}
        >
          {
            data.title
          }
        </McBoldText>
        {
          data.description?.map((item, index) => {
            return (
              <McText
                color={theme.colors.text1}
                size={16}
                key={index}
                semi
                style={{
                  marginBottom: 4
                }}
              >
                {
                  item.text
                }
              </McText>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default Page1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 10
  }
})