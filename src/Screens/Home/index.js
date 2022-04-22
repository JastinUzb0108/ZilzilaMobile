import { ScrollView, StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { useTheme } from 'styled-components'
import { McText, McImage } from 'Components'
import { AllData } from 'Mock'

const { width, height } = Dimensions.get('screen')


const Home = ({ navigation }) => {
    const theme = useTheme()
    return (
        <View style={styles.container}>
            <View style={[{
                backgroundColor: theme.colors.boxBackground
            },
            styles.boxContainer
            ]}>
                <McText bold color='#fff' size={24}>
                    LOGO
                </McText>

                <McText bold color='#fff' size={24}>
                    Zilzila mobile
                </McText>
            </View>
            <ScrollView style={styles.bodyCOntainer}>
                {
                    AllData.AllTheme?.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    navigation.navigate(`Page${index + 1}`)
                                }}
                                style={[
                                    styles.buttomStyle,
                                    {
                                        backgroundColor: theme.colors.success
                                    }
                                ]}
                            >
                                <McText
                                    semi
                                    size={20}
                                    style={{
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    {
                                        item.title
                                    }
                                </McText>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height
    },
    boxContainer: {
        width: '100%',
        height: 65,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    bodyCOntainer: {
        width: width,
        height: height - 70,
        flex: 1,
        paddingHorizontal: 15,
        marginTop: 10
    },
    buttomStyle: {
        width: '100%',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderRadius: 10
    }
})