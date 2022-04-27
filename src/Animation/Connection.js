import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from 'styled-components'
import { McText, McBoldText, McImage } from 'Components'
import { Images } from 'Constants'

const Connection = ({ data }) => {
    const theme = useTheme()

    return (
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
                        width: "98%",
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
                {
                    data.blood?.map((item, index) => {
                        return (
                            <View key={index}>
                                <McBoldText
                                    style={styles.textStyle}
                                    size={20}
                                    color={theme.colors.text1}
                                >
                                    {
                                        item.title
                                    }
                                </McBoldText>
                                {
                                    item.desc?.map((item, index) => {
                                        return (
                                            <McText
                                                semi
                                                color={theme.colors.text1}
                                                style={styles.textStyle}
                                                key={index}>
                                                {
                                                    item.text
                                                }
                                            </McText>
                                        )
                                    })
                                }
                                {
                                    item.desc2?.map((item, index) => {
                                        return (
                                            <McText
                                                semi
                                                color={theme.colors.text1}
                                                style={styles.textStyle}
                                                key={index}>
                                                {
                                                    item.text
                                                }
                                            </McText>
                                        )
                                    })
                                }
                                {
                                    item.boldText ?
                                        <McText
                                            secondary
                                            size={18}
                                            style={styles.textStyle}
                                            h4
                                            colors={theme.colors.text1}>
                                            {item.boldText}
                                        </McText>
                                        :
                                        null
                                }
                                {
                                    item.imgData ?
                                        <McImage
                                            style={[
                                                styles.imgStyle,
                                            {
                                                height: index === 5 || index === 6 ? 250 : 200
                                            }]
                                            }
                                            source={
                                                item.imgData
                                            } />
                                        :
                                        null
                                }


                            </View>
                        )
                    })
                }
            </View>
        </>
    )
}

export default Connection

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
    },
    textStyle: {
        margin: 5
    },
    imgStyle: {
        width: '98%',
        height: 200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})