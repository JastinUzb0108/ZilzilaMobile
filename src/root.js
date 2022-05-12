import React from 'react'
import { DataProvider } from 'Config';
import ThemeManager from 'Themes';
import { AppNavigator } from 'Navigation';

const Root = ({ params }) => {
    return (
        <DataProvider>
            <ThemeManager>
                <AppNavigator />
            </ThemeManager>
        </DataProvider>
    )
};

export default Root;
