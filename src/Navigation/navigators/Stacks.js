import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
    Home,
    Setting,
    Test,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
} from 'Screens'
import TabStacks from './Tabs'
const Stack = createStackNavigator()

export default function Stacks() {
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
