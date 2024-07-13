import { StyleSheet } from 'react-native';
import { Colors } from '../../common';

/**
 * Common styles for EmptyView Component
 */

const styles = StyleSheet.create({
    emptyView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyText: {
        color: Colors.Black,
        fontWeight: '500',
        fontSize: 14,
        textAlign: 'center'
    }
});

export default styles;