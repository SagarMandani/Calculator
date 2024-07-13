import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from './style';
import { Icons, Strings, Colors } from '../../common';
import { ModalView, EmptyView } from '../../components';
import PieChart from 'react-native-pie-chart';

/**
 * Common CalculatorDetailsModal component
 */

const CalculatorDetailsModal = (props) => {
    const { isVisible, onClose } = props;

    const headerComp = () => {
        return (
            <View style={styles.headerView}>
                <View style={styles.col1}>
                    <Text style={styles.headerTitle}>{Strings.Years}</Text>
                </View>
                <View style={styles.col2}>
                    <Text style={styles.headerTitle}>{Strings.Investments}</Text>
                </View>
                <View style={styles.col2}>
                    <Text style={styles.headerTitle}>{Strings.EetReturns}</Text>
                </View>
            </View>
        )
    }

    const renderItem = (item, index) => {
        return (
            <View key={index} style={[styles.renderView, { backgroundColor: index % 2 == 0 ? Colors.White : Colors.WhiteSmoke1 },
            index == 5 && { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }]}>
                <View style={styles.col1}>
                    <Text style={styles.headerValue}>{index + 1}</Text>
                </View>
                <View style={styles.col2}>
                    <Text style={styles.headerValue}>12000</Text>
                </View>
                <View style={styles.col2}>
                    <Text style={styles.headerValue}>12809</Text>
                </View>
            </View>
        )
    }

    const chartList = (color, label, value) => {
        return (
            <View style={styles.chartView}>
                <View style={[styles.dotColor, { backgroundColor: color }]} />
                <Text style={styles.chartLabel}>{label}</Text>
                <Text style={styles.chartValue}>{value}</Text>
            </View>
        )
    }

    return (
        <ModalView
            isVisible={isVisible}
            dismissModal={() => onClose()}
        >
            <View>
                <View style={styles.modalHeaderView}>
                    <TouchableOpacity onPress={() => onClose()}>
                        <Image source={Icons.back} style={styles.closeStyle} resizeMode='contain' />
                    </TouchableOpacity>
                    <Text style={styles.modalHeaderTitle}>Detailed Report</Text>
                </View>
                <View style={styles.lineStyle} />
                <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                    <View style={styles.subView}>
                        <View style={styles.pieChartView}>
                            <PieChart
                                widthAndHeight={180}
                                series={[35, 5, 60]}
                                sliceColor={[Colors.Black, Colors.White, Colors.Primary]}
                                coverRadius={0.50}
                                coverFill={'#FFF'}
                            />
                        </View>
                        {chartList(Colors.Primary, 'Total Investment', '30,00,000')}
                        {chartList(Colors.Black, 'Total Returns', '28,08,477')}
                        {chartList(Colors.White, 'Tax Reductions', '-2,808')}
                        <FlatList
                            data={[1, 2, 3, 4, 5, 6]}
                            bounces={false}
                            scrollEnabled={false}
                            style={styles.listView}
                            renderItem={({ item, index }) => renderItem(item, index)}
                            ListHeaderComponent={() => headerComp()}
                            ListEmptyComponent={() => <EmptyView message={Strings.EmptyText} />}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </ScrollView>
            </View>
        </ModalView>
    )
}

export default CalculatorDetailsModal;