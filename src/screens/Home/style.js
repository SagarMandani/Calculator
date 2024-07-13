import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../common';

/**
 * Common styles for home screen
 */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    headerStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    appName: {
        height: 25,
        width: 90
    },
    translateImg: {
        height: 25,
        width: 25
    },
    subView: {
        flex: 1
    },
    sectionView: {
        backgroundColor: Colors.White,
        padding: 20,
        marginTop: 20 
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: '500',
        color: Colors.Black
    }
})

export default styles;