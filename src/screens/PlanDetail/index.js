import React, { useState } from 'react'
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { Icons, Strings, Colors } from '../../common';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import { TaxDeduction, CalculatorDetailsModal, CalculatorModal } from '../../components';
import { Dropdown } from 'react-native-element-dropdown';
import Slider from "react-native-sliders";

/**
 * Plan details screen
 */

const PlanDetail = (props) => {
    const [selectPlan, setSelectPlan] = useState('SIP (0-10% returns)');
    const [planList, setPlanList] = useState([
        { label: 'SIP (0-10% returns)', value: 'SIP (0-10% returns)' },
        { label: 'Fixed deposit', value: 'Fixed deposit' },
        { label: 'SIP Long Term', value: 'SIP Long Term' },
    ]);
    const [selectDuration, setSelectDuration] = useState('YR');
    const [durationList, setDurationList] = useState([
        { label: 'MO', value: 'MO' },
        { label: 'YR', value: 'YR' }
    ]);
    const [isVisible, setIsVisible] = useState(false);
    const [reportVisible, setReportVisible] = useState(false);
    const [sliderMonthlyValue, setSliderMonthlyValue] = useState([0.1]);
    const [sliderTimeValue, setSliderTimeValue] = useState([0.1]);

    const onCloseCalModal = () => {
        setIsVisible(false)
        setReportVisible(true);
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image style={styles.backStyle} source={Icons.back} resizeMode='contain' />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Calculator</Text>
                <Image style={styles.translateImg} source={Icons.translate} resizeMode='contain' />
            </View>
            <View style={{ backgroundColor: Colors.Primary }}>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={styles.iconStyle}
                    data={planList}
                    value={selectPlan}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder='Select Plan'
                    onChange={item => setSelectPlan(item.value)}
                />
            </View>
            <View style={styles.subView}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.sipView}>
                        <View style={styles.monthlyView}>
                            <Text style={styles.monthlyText}>MONTHLY {`\n`}INVESTMENT</Text>
                            <View style={styles.monthlyAmount}>
                                <Text>10000</Text>
                            </View>
                        </View>
                        <Slider
                            value={sliderMonthlyValue}
                            onValueChange={value => setSliderMonthlyValue(value)}
                            thumbTintColor={Colors.Black}
                            minimumTrackTintColor={Colors.Primary}
                            maximumTrackTintColor={Colors.Gainsboro1}
                            thumbStyle={styles.sliderThump}
                            trackStyle={styles.trackView}
                        />
                    </View>
                    <View style={styles.returnView}>
                        <View style={styles.rateView}>
                            <Text style={styles.returnTxt}>RETURN RATE %</Text>
                            <View style={styles.ratePer}>
                                <Text>9%</Text>
                            </View>
                            <Text style={styles.historyRate}>0-10% historical trend</Text>
                            <Text style={styles.web}>source: etmoney.com</Text>
                        </View>
                        <View style={styles.timeView}>
                            <Text style={styles.returnTxt}>TIME PERIOD</Text>
                            <View style={styles.returnView}>
                                <View style={styles.timePer}>
                                    <Text>10</Text>
                                </View>
                                <Dropdown
                                    style={styles.durationDropdown}
                                    placeholderStyle={styles.placeholderDurationStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    iconStyle={styles.iconStyle}
                                    value={selectDuration}
                                    data={durationList}
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder='Time'
                                    onChange={item => setSelectDuration(item.value)}
                                />
                            </View>
                            <Slider
                                value={sliderTimeValue}
                                onValueChange={value => setSliderTimeValue(value)}
                                thumbTintColor={Colors.Black}
                                minimumTrackTintColor={Colors.Primary}
                                maximumTrackTintColor={Colors.Gainsboro1}
                                thumbStyle={styles.sliderThump}
                                trackStyle={styles.trackView}
                            />
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => setIsVisible(true)}>
                        <LinearGradient colors={['#1B5966', '#006281', '#003C68']} style={styles.calBtn}
                            start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
                            <Text style={styles.calBtnTxt}>CALCULATE</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <View style={styles.sectionView}>
                        <View style={styles.rowView}>
                            <Text style={styles.sectionTitle}>{Strings.TaxDeductionTitle}</Text>
                            <Text style={styles.linkTxt}>source: etmoney.com</Text>
                        </View>
                        <TaxDeduction />
                    </View>
                </ScrollView>
            </View>
            {
                isVisible &&
                <CalculatorModal
                    isVisible={isVisible}
                    onClose={() => setIsVisible(false)}
                    onDetail={() => onCloseCalModal()}
                />
            }
            {
                reportVisible &&
                <CalculatorDetailsModal
                    isVisible={reportVisible}
                    onClose={() => setReportVisible(false)}
                />
            }
        </View>
    );

};

export default PlanDetail;