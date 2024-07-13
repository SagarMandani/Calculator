import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../common';

/**
 * Common styles for TaxDeduction Component
 */

export default StyleSheet.create({
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    title: {
        flex: 1,
        fontSize: 12,
        color: Colors.Black,
        fontWeight: '500'
    },
    returnView: {
        height: 30,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    returnTxt: {
        fontSize: 12,
        color: Colors.Black,
        textAlign: 'center',
        fontWeight: '500'
    },
    lineView: {
        backgroundColor: Colors.EasternBlue,
        height: 1,
        marginVertical: 5
    },
});