import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../common';

/**
 * Common styles for ReturnRates Component
 */

export default StyleSheet.create({
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    title: {
        flex: 1,
        fontSize: 11,
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
    headerTitle: {
        flex: 1,
        fontSize: 11,
        color: Colors.NobelGray,
        fontWeight: '500'
    },
    headerTxt: {
        fontSize: 11,
        color: Colors.NobelGray,
        textAlign: 'center',
        fontWeight: '500'
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
    treadView: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    upIcon: {
        height: 22,
        width: 22,
        tintColor: Colors.Green,
        alignSelf: 'center'
    },
    dashLine: {
        height: 2,
        width: 11,
        backgroundColor: Colors.Black
    }
});