import React, { useContext } from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { useTheme } from "styled-components";
import { GlobalState } from 'Config'

import {
    Home,
    Setting,
    Test,
} from 'Screens'
import { McVectorIcon } from 'Components'

const Tab = createMaterialBottomTabNavigator()

const TabStacks = ({ params }) => {
    const state = useContext(GlobalState)
    const [data] = state.data
    const theme = useTheme()
    return (
        <Tab.Navigator
            initialRouteName="Home"
            barStyle={{
                backgroundColor: theme.colors.boxBackground
            }}
            activeColor='#fff'
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: `${data.mainContext.nav[0]}`,
                    tabBarIcon: ({ color }) => (
                        <McVectorIcon type='Ionicons' name="ios-home" color={color} size={26} />
                    )
                }}
            />
            <Tab.Screen
                name="Page6"
                component={Test}
                options={{
                    tabBarColor: '#FFAC30',
                    tabBarLabel: `${data.mainContext.nav[1]}`,
                    tabBarIcon: ({ color }) => (
                        <McVectorIcon type='MaterialCommunityIcons' name="ab-testing" color={color} size={26} />
                    )
                }}
            />

            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarLabel: `${data.mainContext.nav[2]}`,
                    tabBarIcon: ({ color }) => (
                        <McVectorIcon type='Ionicons' name="settings-sharp" color={color} size={26} />
                    )
                }}
            />

        </Tab.Navigator>
    )
}

export default TabStacks