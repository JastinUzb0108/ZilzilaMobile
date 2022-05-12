import React, { useEffect, useState, useContext } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useTheme } from 'styled-components'
import { Bars } from 'react-native-loader';
import { GlobalState } from 'Config'

import { McText, McBoldText } from 'Components'
import { AllData } from 'Mock'
import Helper from 'Helper'

function random_elems(arr, count) {
  let len = arr.length;
  let lookup = {};
  let tmp = [];

  if (count > len)
    count = len;

  for (let i = 0; i < count; i++) {
    let index;
    do {
      index = ~~(Math.random() * len);
    } while (index in lookup);
    lookup[index] = null;
    tmp.push(arr[index]);
  }

  return tmp;
}

const Test = ({ navigation }) => {

  const state = useContext(GlobalState)
  const [dataContext] = state.data
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answare, setAnsware] = useState([])
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true)

  const theme = useTheme()
  const data = AllData.page6

  useEffect(() => {
    const result = random_elems(data.tests, data.tests.length)
    setAnsware(result)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  })

  const handleAnswerOptionClick = ({ isCorrect }) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < answare.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  if (loading) {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
      }}>
        <View>
          <Bars size={50} color={theme.colors.success} />
          <McText size={24} bold color={theme.colors.text3}>Loading...</McText>
        </View>
      </View>
    )
  }

  return (
    <View style={{
      flex: 1,
      alignItems: 'center'
    }}>
      <Helper navLink="Home" navigation={navigation} />

      {
        showScore ? (
          <View style={[{
            backgroundColor: theme.colors.boxBackground
          },
          styles.score
          ]}>
            <McText
              semi
              color={theme.colors.text1}
              size={18}
            >
              {dataContext.mainContext.testContext.quesiton}: {answare.length} {'\n'}
              {dataContext.mainContext.testContext.correct}: {score}
            </McText>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setShowScore(false)
                const result = random_elems(data.tests, data.tests.length)
                setAnsware(result)
                setCurrentQuestion(0)
              }}
              activeOpacity={0.8}
            >
              <McText
                semi
                size={18}
                color='#000'
              >
                {dataContext.mainContext.testContext.buttunText}
              </McText>
            </TouchableOpacity>
          </View>
        )
          :
          (
            <ScrollView style={styles.container}>
              <McBoldText
                color={theme.colors.text1}
                size={20}
                style={
                  styles.textStyle
                }
              >
                {
                  data.title
                }
              </McBoldText>

              <McText
                semi
                size={18}
                color={theme.colors.text1}
                style={
                  styles.textStyle
                }
              >
                {
                  data.context
                }
              </McText>

              <McBoldText
                color={theme.colors.text1}
                size={20}
                style={
                  [
                    {
                      textAlign: 'center'
                    },
                    styles.textStyle
                  ]
                }
              >
                {
                  data.title2
                }
              </McBoldText>

              {
                <View
                  style={styles.testBox}
                >
                  <View
                    style={{
                      marginBottom: 15
                    }}
                  >
                    <McText
                      semi
                      size={18}
                      color={theme.colors.text1}
                    >
                      {
                        currentQuestion + 1
                      }
                      ){' '}
                      {
                        answare[currentQuestion].answare
                      }
                    </McText>
                  </View>
                  <View>
                    {
                      random_elems(answare[currentQuestion].variant, answare[currentQuestion].variant.length).map((variantItem, variantIndex) => {
                        return (
                          <TouchableOpacity
                            key={variantIndex}
                            activeOpacity={0.8}
                            onPress={() => handleAnswerOptionClick({ isCorrect: variantItem.i })}
                            style={[
                              styles.testCard,
                            ]
                            }
                          >
                            <McText
                              semi
                              size={16}
                              color={theme.colors.text1}
                            >
                              {
                                variantItem.item
                              }
                            </McText>
                          </TouchableOpacity>
                        )
                      })
                    }
                  </View>
                </View>
              }
            </ScrollView>
          )
      }
    </View>
  )
}

export default Test

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  textStyle: {
    marginBottom: 10,
  },
  testBox: {
    borderWidth: 1,
    borderColor: '#FFAC30',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10
  },
  testCard: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFAC30',
    marginBottom: 10
  },
  score: {
    width: 300,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%',
    borderRadius: 10
  },
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
})