import React from 'react'

import ThemeManager from 'Themes';
import { AppNavigator } from 'Navigation';

const Root = ({ params }) => {
    return (
        <ThemeManager>
            <AppNavigator />
        </ThemeManager>
    )
};

export default Root;
