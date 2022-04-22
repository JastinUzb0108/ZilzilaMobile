import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useTheme } from 'styled-components'
import { McText, McBoldText, McImage } from 'Components'
import { Images } from 'Constants'

const Config = ({ data, boxAll }) => {
    const theme = useTheme()
    return (
        <ScrollView style={styles.container}>
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

            <McBoldText
                size={20}
                style={{
                    marginVertical: 5,
                    textTransform: 'capitalize',
                    color: theme.colors.text1
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
                            key={index}>
                            {
                                item.text
                            }
                        </McText>
                    )
                })
            }
            {
                data.description?.map((item, index) => {
                    return (
                        <View key={index}>
                            <McBoldText
                                style={{
                                    marginVertical: 5
                                }}
                                size={18}
                                color={theme.colors.text1}
                            >
                                {item.descTitle}
                            </McBoldText>
                            {
                                item.descContext?.map((itemDesc, indexDesc) => {
                                    return (
                                        <McText
                                            key={indexDesc}
                                            semi
                                            color={theme.colors.text1}
                                            style={{
                                                marginVertical: 3
                                            }}
                                        >
                                            {
                                                itemDesc.text
                                            }
                                        </McText>
                                    )
                                })
                            }
                        </View>
                    )
                })
            }
            {
                boxAll ?
                    <>
                        {/* Table */}
                        <View style={styles.tableContainer}>
                            {
                                data.tableData.map((item, index) => {
                                    return (
                                        <View
                                            style={styles.tableBox}
                                            key={index}>
                                            {
                                                item.map((itemDesc, indexDesc) => {
                                                    return (
                                                        <View
                                                            style={[
                                                                styles.tableCard,
                                                                {

                                                                    width: indexDesc === 0 ? 30 : 90
                                                                }
                                                            ]}
                                                            key={indexDesc}
                                                        >
                                                            <McText
                                                                semi
                                                                size={15}
                                                                color={theme.colors.text1}
                                                            >
                                                                {
                                                                    itemDesc.title
                                                                }
                                                            </McText>
                                                        </View>
                                                    )
                                                })
                                            }
                                        </View>

                                    )
                                })
                            }
                        </View>

                        {/* InfoHead */}
                        <View>
                            {
                                data.smalData.map((item, index) => {
                                    return (
                                        <McText
                                            key={index}
                                            semi
                                            color={theme.colors.text1}
                                            style={{
                                                marginBottom: 5
                                            }}
                                        >
                                            {
                                                item.text
                                            }
                                        </McText>
                                    )
                                })
                            }


                        </View>

                        {/* infoHead */}
                        <View>
                            {
                                data.infoHead.map((item, index) => {
                                    return (
                                        <View
                                        key={index}>
                                            <McBoldText
                                                size={20}
                                                style={{
                                                    marginBottom: 5
                                                }}>
                                                {
                                                    item.title
                                                }

                                            </McBoldText>
                                            {
                                                item.descTitle.map((itemDesc, indexDesc) => {
                                                    return (
                                                        <McText
                                                            key={indexDesc}
                                                            style={{
                                                                marginBottom: 5
                                                            }}
                                                            semi
                                                            size={16}>
                                                            {
                                                                itemDesc.text
                                                            }
                                                        </McText>
                                                    )
                                                })
                                            }
                                        </View>
                                    )
                                })
                            }
                            <McImage
                                style={{
                                    width: "100%",
                                    height: 200,
                                    marginBottom: 10,
                                    marginTop: 10
                                }}
                                source={
                                    Images.img2
                                } />

                        </View>

                        {/* Qon Ketishi */}
                        <View>

                        </View>
                    </>
                    :
                    null
            }
        </ScrollView >
    )
}

export default Config

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    tableContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#FFAC30',
        marginVertical: 10
    },
    tableBox: {
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: '#FFAC30',
    },
    tableCard: {
        borderRightColor: '#FFAC30',
        borderRightWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})