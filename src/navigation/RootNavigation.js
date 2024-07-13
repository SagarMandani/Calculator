import { createNavigationContainerRef } from '@react-navigation/native';
import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function navigateReplace(name, params) {
  navigationRef.current.reset({ index: 0, routes: [{ name, params }] });
}

export function goBack() {
  navigationRef.current?.goBack();
}