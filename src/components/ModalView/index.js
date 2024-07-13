import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { Colors, Icons } from '../../common';
import styles from './style';

/**
 * Common ModalView Component
 */

const ModalView = ({ containerStyle, isVisible, dismissModal, children }) => {

    return (
        <Modal
            style={[styles.container, containerStyle]}
            isVisible={isVisible}
            backdropColor={Colors.Black}
            onBackdropPress={() => dismissModal()}>
            <View style={styles.flexOne}>
                <TouchableOpacity style={styles.topBg} onPress={() => dismissModal()} />
                <View style={styles.bottomModel}>
                    {children}
                </View>
            </View>
        </Modal>
    );
};

export default ModalView;
