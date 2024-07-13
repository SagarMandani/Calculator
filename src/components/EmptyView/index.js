import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

/**
 * Common EmptyView component
 */

const EmptyView = (props) => {

    const { message } = props;
    return (
        <View style={styles.emptyView}>
            <Text style={styles.emptyText}>{message}</Text>
        </View>
    )
}

export default EmptyView;