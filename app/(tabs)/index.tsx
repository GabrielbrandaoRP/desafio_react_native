/* eslint-disable import/no-unresolved */
import { StyleSheet, View } from 'react-native';
import '../../gesture-handler.js';
import Routes from '../../routes/index.routes.js';
import { NavigationContainer } from '@react-navigation/native';
export default function HomeScreen() {
  return (
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
});
