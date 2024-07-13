import { StyleSheet } from 'react-native';
import { Colors } from '../../common';

/**
 * Common styles for CalculatorItem Component
 */

const styles = StyleSheet.create({
    container: {
       backgroundColor: Colors.White,
       borderColor: Colors.Primary,
       borderWidth: 1,
       borderRadius: 10,
       padding: 15,
       marginRight: 10,
       marginTop: 20
    },
    titleView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10
    },
    flex: {
        flex: 1
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.Primary
    },
    iconStyle: {
        height: 30,
        width: 30
    },
    lineView: {
        backgroundColor: Colors.Black,
        height: 1,
        marginVertical: 10
    },
    detailView: {
        marginHorizontal: 10
    },
    taxTxt: {
        fontSize: 11,
        fontWeight: '500',
        color: Colors.Primary,
        marginVertical: 10
    },
    desTxt: {
        fontSize: 11,
        fontWeight: '500',
        color: Colors.Black
    },
    upActionStyle: {
        height: 30,
        width: 30,
        marginLeft: 20,
        justifyContent: 'flex-end'
    },
    rowView: {
        flexDirection: 'row'
    }
});

export default styles;
