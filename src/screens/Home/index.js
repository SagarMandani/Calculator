import React, { useState } from 'react'
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import styles from './style';
import { Icons, Strings } from '../../common';
import { CalculatorItem, EmptyView, ReturnRates, TaxDeduction } from '../../components';
import { CalculatorPlanList } from '../../dummyData';

/**
 * Home screen
 */

const Home = (props) => {
    const [calculatorPlan, setCalculatorPlan] = useState(CalculatorPlanList);

    return (
        <View style={styles.container}>
            <View style={styles.headerStyle}>
                <Image style={styles.appName} source={Icons.fincal} resizeMode='contain' />
                <Image style={styles.translateImg} source={Icons.translate} resizeMode='contain' />
            </View>
            <View style={styles.subView}>
                <ScrollView showsVerticalScrollIndicator={false} bounces={false} nestedScrollEnabled={true}>
                    <FlatList
                        data={calculatorPlan}
                        horizontal
                        bounces={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => <CalculatorItem item={item} index={index} navigation={props.navigation} />}
                        ListEmptyComponent={() => <EmptyView message={Strings.CalculatorEmptyTxt} />}
                        keyExtractor={(item, index) => index.toString()} />
                    <View style={styles.sectionView}>
                        <Text style={styles.sectionTitle}>{Strings.ReturnRateTitle}</Text>
                        <ReturnRates />
                    </View>
                    <View style={styles.sectionView}>
                        <Text style={styles.sectionTitle}>{Strings.TaxDeductionTitle}</Text>
                        <TaxDeduction />
                    </View>
                </ScrollView>
            </View>
        </View>
    );

};

export default Home;