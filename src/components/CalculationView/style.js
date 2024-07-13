import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../common';

/**
 * Common styles for CalculationView Component
 */

export default StyleSheet.create({
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    title: {
        fontSize: 13,
        color: Colors.Charcoal,
        fontWeight: '500',
        lineHeight: 22
    },
    amountTxt: {
        fontSize: 14,
        color: Colors.Black,
        textAlign: 'center',
        fontWeight: '500',
        lineHeight: 22
    },
    lineView: {
        backgroundColor: Colors.EasternBlue,
        height: 1,
        marginVertical: 5
    },
    calItemView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoView: {
        height: 16,
        width: 16,
        marginLeft: 10
    }
});