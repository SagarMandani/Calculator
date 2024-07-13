import { StyleSheet } from 'react-native';
import { Colors } from '../../common';

/**
 * Common styles for TextBox Component
 */

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BlackRussian,
        height: 55,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 15,
        marginBottom: 10
    },
    container2: {
        backgroundColor: Colors.BlackRussian,
        height: 55,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 15,
        marginBottom: 10
    },
    iconView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    icon: {
        width: 18,
        height: 18,
    },
    textInput: {
        flex: 1,
        color: Colors.WhiteRGB(0.5),
        fontSize: 15,
    }
});

export default styles;