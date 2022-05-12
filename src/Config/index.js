import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AllData, AllDataEng, AllDataRu } from "Mock";

export const GlobalState = createContext()

export const DataProvider = ({ children }) => {
    const [language, setLanguage] = useState('uzb')
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        try {
            const result = await AsyncStorage.getItem('language')
            result ? setLanguage(result) : setLanguage('uzb')
        } catch (err) {
            console.log(err);
        }
    }

    const writeData = async ({ item }) => {
        try {
            await AsyncStorage.setItem('language', item)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {

        setTimeout(() => {
            setLoading(true)
        }, 500)

        setTimeout(() => {
            language === 'uzb' ?
                setData(AllData)
                : language === 'ru'
                    ? setData(AllDataRu)
                    : setData(AllDataEng)

        }, 250)

    })

    const changeLanguage = (name) => {
        name === 'uzb' ?
            setData(AllData)
            : name === 'ru'
                ? setData(AllDataRu)
                : setData(AllDataEng)

        setLanguage(name)
        writeData({ item: name })
    }

    const state = {
        language: [language, setLanguage],
        data: [data, setData],
        loading: [loading, setLoading],
        changeLanguage: changeLanguage
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}