import { StyleSheet } from 'react-native';
import { Colors } from '../../common';

/**
 * Common styles for CalculatorDetailsModal Component
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
        marginLeft: 15
    },
    modalSub: {
        margin: 15,
        marginBottom: 0
    },
    closeStyle: {
        height: 22,
        width: 22,
        tintColor: Colors.Primary,
    },
    lineStyle: {
        height: 1,
        backgroundColor: Colors.Primary,
    },
    chartView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    dotColor: {
        height: 14,
        width: 14,
        borderRadius: 7,
        marginRight: 10,
        borderColor: Colors.Black,
        borderWidth: 1
    },
    chartLabel: {
        flex: 1,
        fontSize: 12,
        color: Colors.Nero1,
        fontWeight: '500',
        lineHeight: 18
    },
    chartValue: {
        fontSize: 12,
        color: Colors.Black,
        fontWeight: '500',
        lineHeight: 18
    },
    listView: {
        borderColor: Colors.Primary,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 20
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    headerTitle: {
        flex: 1,
        fontSize: 12,
        color: Colors.Black,
        fontWeight: '500',
        lineHeight: 18,
    },
    headerValue: {
        flex: 1,
        fontSize: 12,
        color: Colors.Black,
        fontWeight: '500',
        lineHeight: 18,
        marginLeft: 5
    },
    renderView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    subView: {
        flex: 1,
        margin: 20,
        marginBottom: 0
    },
    flexOne: {
        flex: 1,
        backgroundColor: 'red',
        height: 80,
        marginBottom: 20
    },
    pieChartView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    col1: {
        flex: 0.26
    },
    col2: {
        flex: 0.37
    }
});

export default styles;
