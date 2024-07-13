import { Alert } from 'react-native';

// common function utils

export const Capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const alertDialog = (message, onPress) => {
  Alert.alert('', message, [{ text: 'ok', style: 'cancel', onPress: () => onPress() }]);
}