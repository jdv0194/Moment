import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {colorConstants} from '../../constants';

const LoginPage = () => {
  console.log(colorConstants);
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorConstants.primaryColor,
    height: '100%',
  },
});

export default LoginPage;
