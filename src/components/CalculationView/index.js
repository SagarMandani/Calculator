import React, { useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from './style';
import { calculationTotalList } from '../../dummyData';
import { Strings, Icons } from '../../common';
import { EmptyView } from '../../components';

/**
 * Common CalculationView component
 */

const CalculationView = (props) => {
    const [calculationTotal, setCalculationTotal] = useState(calculationTotalList);

    const calculationItem = (item, index) => {
        return (
            <View key={index} style={styles.rowCenter}>
                <View style={styles.calItemView}>
                    <Text style={styles.title}>{item.title}</Text>
                    {item.info && <Image source={Icons.info} style={styles.infoView} />}
                </View>
                <Text style={styles.amountTxt}>{item.amount}</Text>
            </View>
        )
    }

    return (
        <FlatList
            data={calculationTotal}
            bounces={false}
            scrollEnabled={false}
            renderItem={({ item, index }) => calculationItem(item, index)}
            ListEmptyComponent={() => <EmptyView message={Strings.EmptyText} />}
            keyExtractor={(item, index) => index.toString()}
        />
    )
};

export default CalculationView;