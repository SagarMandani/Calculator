import { StyleSheet } from 'react-native';
import { Colors } from '../../common';

/**
 * Common styles for ModalView Component
 */

const styles = StyleSheet.create({
    container: {
        margin: 0,
    },
    bottomModel: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: Colors.White
    },
    subView: {
        margin: 15,
        marginBottom: 0
    },
    titleStyle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: Colors.Black,
    },
    flexOne: {
        flex: 1
    },
    topBg: {
        flex: 1,
        backgroundColor: Colors.BlackRGB(0.1)
    }
});

export default styles;
