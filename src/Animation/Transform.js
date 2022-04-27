import React, { useRef, useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Transition, Transitioning } from 'react-native-reanimated'

import { useTheme } from 'styled-components'
import { McText, McBoldText } from 'Components'
import Connection from './Connection'

const transition = (
    <Transition.Together>
        <Transition.In type='fade' durationMs={200} />
        <Transition.Change />
        <Transition.Out type='fade' durationMs={200} />
    </Transition.Together>
);

const Transform = ({ data }) => {
    const [number, setNumber] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(null)
    const ref = useRef()
    const theme = useTheme()

    return (
        <ScrollView
            style={styles.container}
        >
            <Transitioning.View
                ref={ref}
                transition={transition}
            >
                {
                    data?.context ?
                        <McText
                            semi
                            size={18}
                            align='center'
                            style={{
                                marginTop: 5,
                                color: theme.colors.text1
                            }}
                        >
                            {
                                data?.context
                            }
                        </McText>
                        :
                        null
                }


                <McBoldText
                    size={20}
                    style={{
                        marginVertical: 5,
                        color: theme.colors.text1,
                        paddingHorizontal: 10
                    }}
                >
                    {
                        data?.title
                    }
                </McBoldText>

                {
                    data.desc2?.map((item, index) => {
                        return (
                            <McText
                                color={theme.colors.text1}
                                semi
                                size={16}
                                key={index}
                                style={{
                                    marginTop: 5,
                                    paddingHorizontal: 7
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
                    data.description?.map((item, index) => {
                        if (index.lenght === 4) {
                            setNumber(true)
                        }
                        return (
                            <ScrollView
                                key={index}
                            >
                                <TouchableOpacity
                                    onPress={() => {
                                        ref.current
                                        setCurrentIndex(index === currentIndex ? null : index)
                                    }}
                                    style={[{
                                        backgroundColor: theme.colors.boxBackground
                                    }, styles.cardContainer
                                    ]}
                                    activeOpacity={0.8}
                                >
                                    <McBoldText
                                        style={{
                                            marginVertical: 5,
                                        }}
                                        size={18}
                                        color={theme.colors.text1}
                                    >
                                        {item.descTitle}
                                    </McBoldText>
                                </TouchableOpacity>
                                {
                                    index === currentIndex && (
                                        item.descContext?.map((itemDesc, indexDesc) => {
                                            return (
                                                <McText
                                                    key={indexDesc}
                                                    semi
                                                    color={theme.colors.text1}
                                                    style={{
                                                        marginVertical: 3,
                                                        paddingHorizontal: 5
                                                    }}
                                                >
                                                    {
                                                        itemDesc.text
                                                    }
                                                </McText>
                                            )
                                        })
                                    )
                                }
                            </ScrollView>
                        )
                    })
                }

                {
                    number ?
                        null
                        :
                        currentIndex === 4 ? <Connection data={data} />
                            :
                            null

                }

            </Transitioning.View>
        </ScrollView>
    )
}

export default Transform

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12
    },
    cardContainer: {
        padding: 10,
        borderRadius: 15,
        marginVertical: 5
    }
})