import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { Icons, Strings, Constants } from '../../common';

/**
 * Common CalculatorItem component
 */

const CalculatorItem = (props) => {
    const { item, index } = props;
    return (
        <View key={index} style={styles.container}>
            <View style={styles.titleView}>
                <View style={styles.flex}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.title}>{Strings.Calculator}</Text>
                </View>
                <Image style={styles.iconStyle} source={Icons.plan} resizeMode='contain' />
            </View>
            <View style={styles.lineView} />
            <View style={styles.detailView}>
                <Text style={styles.taxTxt}>{Strings.TaxDeduction}:</Text>
                <View style={styles.rowView}>
                    <View style={styles.flex}>
                        <Text style={styles.desTxt}>{item.taxDesc1}</Text>
                        <Text style={styles.desTxt}>{item.taxDesc2}</Text>
                    </View>
                    <TouchableOpacity onPress={() => props.navigation.navigate(Constants.Screen.PlanDetail)}>
                    <Image style={styles.upActionStyle} source={Icons.upAction} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CalculatorItem;