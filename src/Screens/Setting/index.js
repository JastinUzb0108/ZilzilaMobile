import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useTheme } from 'styled-components'
import { McText, McVectorIcon } from 'Components'
import { GlobalState } from 'Config'
import { useThemeContext } from 'Themes'

const Setting = ({ navigation }) => {
  const state = useContext(GlobalState)
  const [language] = state.language
  const [data] = state.data
  const changeLanguage = state.changeLanguage
  const theme = useTheme()
  const themeContext = useThemeContext()

  return (
    <View>
      <View style={[
        styles.container, {
          backgroundColor: theme.colors.boxBackground
        }
      ]}>
        <McVectorIcon
          type='AntDesign'
          name="arrowleft"
          color='#fff'
          size={26}
          onPress={() => {
            navigation.goBack()
          }}
          style={styles.icons}
        />
        <McText
          semi
          size={24}
          color='#fff'
        >
          Zilzila mobile
        </McText>
      </View>

      <McText
        semi
        size={20}
        color={theme.colors.text1}
        style={{
          textAlign: 'center',
          marginTop: 20
        }}
      >
        {data.mainContext.settings.languageContext}
      </McText>
      <View style={
        styles.buttomContainer
      }>
        {
          data.mainContext.settings.data.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  changeLanguage(item.name)
                }}
                style={[
                  styles.buttom,
                  {
                    backgroundColor: language === item.name ? theme.colors.boxBackground : '#FFAC30'
                  }
                ]}
              >
                <McText
                  semi
                  size={16}
                  color={theme.colors.text1}>
                  {
                    item.title
                  }
                </McText>
              </TouchableOpacity>
            )
          })
        }
      </View>

      <McText
        semi
        size={20}
        color={theme.colors.text1}
        style={{
          textAlign: 'center',
          marginTop: 20
        }}
      >
        {data.mainContext.settings.themeContext}
      </McText>
      <View
        style={styles.buttomContainer}
      >
        {
          data.mainContext.settings.themeMode.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  themeContext.setMode(item.mode)
                }}
                style={[{
                  backgroundColor: themeContext.mode === item.mode ? theme.colors.boxBackground : '#FFAC30' ,
                },
                styles.buttomMode]}
                key={index}
              >
                <McText
                  semi
                  size={16}
                  color={theme.colors.text1}
                >
                  {
                    item.title
                  }
                </McText>
              </TouchableOpacity>
            )
          })
        }
      </View>
    </View >
  )
}

export default Setting

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 10
  },
  icons: {
    position: 'absolute',
    left: 20
  },
  buttomContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 10
  },
  buttom: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5
  },
  buttomMode: {
    width: '49%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 12,
  }
})