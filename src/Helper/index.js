import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useTheme } from 'styled-components'

import { McText, McVectorIcon } from 'Components'

const Helper = ({ navigation, navLink }) => {
    const theme = useTheme()
    return (
        <View style={[
            styles.container,{
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
            />
            <McText
                semi
                size={24}
                color='#fff'
            >
                Zilzila mobile
            </McText>
            <McVectorIcon
                type='AntDesign'
                name="arrowright"
                color='#fff'
                size={26}
                onPress={() => {
                    navigation.navigate(`${navLink}`)
                }}
            />
        </View>
    )
}

export default Helper

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 65,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingHorizontal: 10
    }
})