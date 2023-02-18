import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tab from './tab';
import { useTheme } from 'styled-components/native';

// import { Container } from './styles';

const Routes: React.FC = () => {
    const { colors } = useTheme()
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={colors.contrast} barStyle='light-content' />
            <Tab />
        </NavigationContainer>
    )
}

export default Routes;