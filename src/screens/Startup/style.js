import { StyleSheet } from 'react-native';
import { Colors } from '../../common';

/**
 * Common styles for Startup screen
 */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.White
    },
    logoStyle: {
        height: 40,
        width: 100,
        marginBottom: 15
    }
})

export default styles;