import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const TimelineScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Timeline Screen</Text>
    </View>
  );
};
 
export default TimelineScreen;