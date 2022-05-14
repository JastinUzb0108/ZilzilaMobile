import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'
import YoutubeIframe from 'react-native-youtube-iframe'

import { McText, McImage, McBoldText } from 'Components'

const Small = ({ data, Image }) => {
    const theme = useTheme()
    const [youtube, setYutube] = useState(false)
    return (
        <ScrollView style={styles.textContainer}>
            <McImage
                style={{
                    width: "100%",
                    height: 200,
                    marginBottom: 10,
                    marginTop: 10
                }}
                source={
                    Image
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

            {
                youtube && data.youtube ?
                    <View
                        style={{
                            width: '100%',
                            height: 218,
                            backgroundColor: '#000',
                            marginVertical: 10
                        }}
                    >
                        <YoutubeIframe
                            videoId={data.youtube}
                            height={218}
                        />
                    </View>
                    :
                    null
            }
            {
                data.youtube ?
                    <TouchableOpacity
                        style={{
                            width: '100%',
                            height: 55,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'red',
                            marginVertical: 10,
                            borderRadius: 10
                        }}

                        onPress={() => {
                            setYutube(!youtube)
                        }}
                    >
                        <McBoldText
                            size={18}
                            color='#fff'

                        >
                            Youtube
                        </McBoldText>
                    </TouchableOpacity>
                    :
                    null
            }

        </ScrollView>
    )
}

export default Small

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        paddingHorizontal: 12,
        paddingBottom: 10
    }
})