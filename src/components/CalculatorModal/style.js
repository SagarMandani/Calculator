import { StyleSheet } from 'react-native';
import { Colors } from '../../common';

/**
 * Common styles for CalculatorModal Component
 */

const styles = StyleSheet.create({
    modalHeaderView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15 
    },
    modalHeaderTitle: {
        flex: 1,
        fontSize: 16,
        color: Colors.Primary,
        marginLeft: 5
    },
    modalSub: {
        margin: 15,
        marginBottom: 0
    },
    closeStyle: {
        height: 16, 
        width: 16,
        tintColor: Colors.Primary,
        marginRight: 10
    },
    lineStyle: {
        height: 1,
        backgroundColor: Colors.Primary,
    },
    sectionView: {
        borderColor: Colors.DimGray,
        borderWidth: 1,
        padding: 15,
        borderRadius: 10
    },
    sectionTitle: {
        flex: 1,
        fontSize: 12,
        fontWeight: '500',
        color: Colors.Black,
        lineHeight: 18
    },
    reportView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    rightArrowStyle: {
        height: 20,
        width: 20,
        marginLeft: 10,
        tintColor: Colors.Primary
    },
    viewReport: {
        fontSize: 13,
        fontWeight: '500',
        color: Colors.Primary,
        lineHeight: 22
    },
    chartView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    dotColor: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginRight: 10,
        borderColor: Colors.Black,
        borderWidth: 1
    },
    chartLabel: {
        flex: 1,
        fontSize: 10,
        color: Colors.Nero1,
        fontWeight: '500',
        lineHeight: 18
    },
    chartValue: {
        fontSize: 10,
        color: Colors.Black,
        fontWeight: '500',
        lineHeight: 18
    },
    noteView: {
        backgroundColor: Colors.Primary,
        padding: 15
    },
    noteHView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    noteTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.White,
        lineHeight: 22
    },
    noteDes: {
        fontSize: 13,
        fontWeight: '400',
        color: Colors.Whisper,
        lineHeight: 22
    },
    bulbStyle: {
        height: 20,
        width: 20,
        marginRight: 10,
        tintColor: Colors.White
    },
    calDetailsView: {
        flex: 1,
        margin: 20 
    },
    chartMainView: {
        flexDirection: 'row',
        marginVertical: 15
    },
    flexOne: {
        flex: 1
    },
    pieChartView: {
        width: 70,
        marginRight: 15
    }
});

export default styles;
