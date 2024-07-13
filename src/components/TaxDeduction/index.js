import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './style';
import { TaxDeductionList } from '../../dummyData';
import { Strings } from '../../common';
import { EmptyView } from '../../components';

/**
 * Common TaxDeduction component
 */

const TaxDeduction = (props) => {
    const [taxDeduction, setTaxDeduction] = useState(TaxDeductionList);

    const rateComp = (item, index) => {
        return (
            <View key={index} style={styles.rowCenter}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.returnView}>
                    <Text style={styles.returnTxt}>{item.return}</Text>
                </View>          
            </View>
        )
    }

    return (
        <FlatList
            data={taxDeduction}
            bounces={false}
            scrollEnabled={false}
            renderItem={({ item, index }) => rateComp(item, index)}
            ListEmptyComponent={() => <EmptyView message={Strings.ReturnRateEmptyText} />}
            keyExtractor={(item, index) => index.toString()}
        />
    )
};

export default TaxDeduction;