import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MenuScreenProps } from './props';

const MyTextView = () => {
  return (
    <View style={styles.root}>
      <Text>Hello</Text>
    </View>
  );
};

const MenuScreen = ({}: MenuScreenProps) => {
  return <MyTextView></MyTextView>;
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default MenuScreen;
