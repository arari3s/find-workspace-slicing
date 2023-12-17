import React from 'react';
import Navigations from './src/navigations';
import { SafeAreaView, StyleSheet } from 'react-native';

function App(): React.JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            <Navigations />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
