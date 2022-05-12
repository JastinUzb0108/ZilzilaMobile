import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { useTheme } from 'styled-components'
import YoutubeIframe from 'react-native-youtube-iframe'

import { McText, McImage, McBoldText } from 'Components'

const Small = ({ data, Image }) => {
    const theme = useTheme()
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
                data.youtube ?
                    <YoutubeIframe
                        videoId={data.youtube}
                        height={300}
                    />

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