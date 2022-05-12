import React, { useContext } from "react";
import { StatusBar, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import { Bars } from 'react-native-loader';
import {
    Test,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
} from 'Screens'
import { useTheme } from "styled-components";
import { GlobalState } from "Config";
import { McText } from 'Components'
import TabStacks from './Tabs'

const Stack = createStackNavigator()

export default function Stacks() {

    const state = useContext(GlobalState)
    const [loading] = state.loading
    const theme = useTheme()

    if (!loading) {
        return (
            <>
                <StatusBar hidden />
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
            </>
        )
    }

    return (
        <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen
                name="Dashboard"
                component={TabStacks}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Test"
                component={Test}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Page1"
                component={Page1}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Page2"
                component={Page2}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Page3"
                component={Page3}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Page4"
                component={Page4}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Page5"
                component={Page5}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}
