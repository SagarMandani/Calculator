import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';
import { Icons, Strings, Colors } from '../../common';
import { ModalView, CalculationView } from '../../components';
import PieChart from 'react-native-pie-chart';

/**
 * Common CalculatorModal component
 */

const CalculatorModal = (props) => {
    const { isVisible, onClose, onDetail } = props;

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
                    <Text style={styles.modalHeaderTitle}>{Strings.Calculate}</Text>
                    <TouchableOpacity onPress={() => onClose()}>
                        <Image source={Icons.close} style={styles.closeStyle} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
                <View style={styles.lineStyle} />
                <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                    <View style={styles.calDetailsView}>
                        <View style={[styles.sectionView, { borderColor: Colors.Primary }]}>
                            <Text style={styles.sectionTitle}>{Strings.Calculate}</Text>
                            <CalculationView />
                            <TouchableOpacity style={styles.reportView} onPress={() => onDetail()}>
                                <Text style={styles.viewReport}>{Strings.ViewReport}</Text>
                                <Image style={styles.rightArrowStyle} source={Icons.rightArrow} resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.sectionView, { borderColor: Colors.Primary, marginTop: 20 }]}>
                            <Text style={styles.sectionTitle}>{Strings.Insights}</Text>
                            <View style={styles.chartMainView}>
                                <View style={styles.pieChartView}>
                                    <PieChart
                                        widthAndHeight={70}
                                        series={[35, 5, 60]}
                                        sliceColor={[Colors.Black, Colors.White, Colors.Primary]}
                                        coverRadius={0.50}
                                        coverFill={'#FFF'}
                                        style={{ borderColor: '#000' }}
                                    />
                                </View>
                                <View style={styles.flexOne}>
                                    {chartList(Colors.Primary, 'Total Investment', '30,00,000')}
                                    {chartList(Colors.Black, 'Total Returns', '28,08,477')}
                                    {chartList(Colors.White, 'Tax Reductions', '-2,808')}
                                </View>
                            </View>
                            <Text style={[styles.viewReport, { color: Colors.Black }]}>{Strings.AmountDes}</Text>
                        </View>
                    </View>
                    <View style={styles.noteView}>
                        <View style={styles.noteHView}>
                            <Image style={styles.bulbStyle} source={Icons.bulb} resizeMode='contain' />
                            <Text style={styles.noteTitle}>{Strings.Suggestion}:</Text>
                        </View>
                        <Text style={styles.noteDes}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.  Lorem ipsum dolor sit.</Text>
                    </View>
                </ScrollView>
            </View>
        </ModalView>
    )
}

export default CalculatorModal;