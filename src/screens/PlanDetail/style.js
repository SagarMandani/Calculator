import { StyleSheet } from 'react-native';
import { Colors } from '../../common';

/**
 * Common styles for plan details screen
 */

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.Primary,
        paddingHorizontal: 20,
        paddingTop: 20
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.White,
        flex: 1
    },
    backStyle: {
        height: 25,
        width: 25,
        marginRight: 15,
        tintColor: Colors.White
    },
    translateImg: {
        height: 25,
        width: 25,
        tintColor: Colors.White
    },
    subView: {
        flex: 1,
        margin: 20
    },
    sectionView: {
        borderColor: Colors.DimGray,
        borderWidth: 1,
        padding: 15,
        borderRadius: 10,
        marginVertical: 10
    },
    sectionTitle: {
        flex: 1,
        fontSize: 12,
        fontWeight: '500',
        color: Colors.Black,
        lineHeight: 18
    },
    sipView: {
        backgroundColor: Colors.White,
        padding: 15,
    },
    monthlyView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    monthlyText: {
        fontSize: 12,
        color: Colors.DimGray1,
        flex: 1,
        lineHeight: 18
    },
    monthlyAmount: {
        backgroundColor: Colors.WhiteSmoke,
        width: 135,
        paddingHorizontal: 10,
        paddingVertical: 13,
        borderRadius: 8,
        borderColor: Colors.Gainsboro,
        borderWidth: 1
    },
    returnView: {
        flexDirection: 'row',
        marginVertical: 10
    },
    sliderThump: {
        height: 25,
        width: 25,
        borderRadius: 8,
    },
    trackView: {
        height: 6,
        borderRadius: 10
    },
    returnTxt: {
        fontSize: 12,
        color: Colors.DimGray1,
        lineHeight: 18
    },
    rateView: {
        backgroundColor: Colors.White,
        flex: 0.55,
        marginRight: 10,
        padding: 10
    },
    ratePer: {
        backgroundColor: Colors.WhiteSmoke,
        width: 78,
        paddingHorizontal: 10,
        paddingVertical: 13,
        borderRadius: 8,
        borderColor: Colors.Gainsboro,
        borderWidth: 1,
        marginVertical: 10
    },
    historyRate: {
        color: Colors.Charcoal,
        fontSize: 12,
        fontWeight: "500"
    },
    web: {
        color: Colors.Eclipse,
        fontSize: 10,
        fontWeight: "500"
    },
    timeView: {
        backgroundColor: Colors.White,
        flex: 0.45,
        padding: 10
    },
    timePer: {
        backgroundColor: Colors.WhiteSmoke,
        width: 65,
        paddingHorizontal: 10,
        paddingVertical: 13,
        borderRadius: 8,
        borderColor: Colors.Gainsboro,
        borderWidth: 1,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },
    dropdown: {
        height: 50,
        backgroundColor: Colors.White,
        borderRadius: 10,
        paddingHorizontal: 10,
        margin: 20,
        marginBottom: 30
    },
    durationDropdown: {
        height: 50,
        backgroundColor: Colors.White,
        borderRadius: 10,
        paddingHorizontal: 10,
        width: 70,
        borderColor: Colors.Gainsboro,
        borderWidth: 1,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeftWidth: 0
    },
    placeholderStyle: {
        fontSize: 16,
    },
    placeholderDurationStyle: {
        fontSize: 11,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    calBtn: {
        justifyContent: 'center',
        height: 50,
        borderRadius: 5,
        marginVertical: 10
    },
    calBtnTxt: {
        color: Colors.White,
        fontWeight: '500',
        fontSize: 14,
        textAlign: 'center'
    },
    rowView: {
        flexDirection: 'row'
    },
    linkTxt: {
        fontSize: 10,
        fontWeight: '500',
        color: Colors.Nero
    }
})

export default styles;