import React, { useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from './style';
import { ReturnRateList } from '../../dummyData';
import { Strings, Icons } from '../../common';
import { EmptyView } from '../../components';

/**
 * Common ReturnRates component
 */

const ReturnRates = (props) => {
    const [returnRates, setReturnRates] = useState(ReturnRateList);

    const headerComp = () => {
        return (
            <View style={styles.headerView}>
                <Text style={styles.headerTitle}>{Strings.Trend}</Text>
                <View style={styles.returnView}>
                    <Text style={styles.headerTxt}>{Strings.Return} %</Text>
                </View>
                <View style={styles.treadView}>
                    <Text style={styles.headerTxt}>{Strings.Trend}</Text>
                </View>
            </View>
        )
    }

    const rateComp = (item, index) => {
        return (
            <View key={index} style={styles.rowCenter}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.returnView}>
                    <Text style={styles.returnTxt}>{item.return}</Text>
                </View>
                <View style={styles.treadView}>
                    {
                        item.marketUp ?
                            <Image style={styles.upIcon} source={Icons.upMarket} resizeMode='contain' />
                            :
                            <View style={styles.dashLine} />
                    }
                </View>
            </View>
        )
    }

    return (
        <FlatList
            data={returnRates}
            bounces={false}
            scrollEnabled={false}
            renderItem={({ item, index }) => rateComp(item, index)}
            ListHeaderComponent={() => headerComp()}
            ItemSeparatorComponent={() => <View style={styles.lineView} />}
            ListEmptyComponent={() => <EmptyView message={Strings.ReturnRateEmptyText} />}
            keyExtractor={(item, index) => index.toString()}
        />
    )
};

export default ReturnRates;