import React, { useEffect } from 'react';
import { StatusBar, SafeAreaView, TextInput, Text } from 'react-native';
import RootNavigator from './navigation';
import { Colors } from './common';

if (Text.defaultProps == null) {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps == null) {
    TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;
}

const App = () => {

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={Colors.Primary} />
            <SafeAreaView style={{ backgroundColor: Colors.Primary }} />
            <RootNavigator />
        </>
    );
};

export default App;
