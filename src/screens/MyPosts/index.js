import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const MyPostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>My Posts Screen</Text>
    </View>
  );
};
 
export default MyPostsScreen;