import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { themes } from '@/globals/themes';
import { LogOut } from 'lucide-react-native'; 
import React from 'react';
export default function Logout() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.replace("/")} style={styles.btnLogout}>
        {/* <Ionicons name='log-out-outlined' size={24} color={themes.colors.green}/> */}
        <LogOut size={24} color={themes.colors.green}/>
        <Text style={{ color: themes.colors.gray }}>Logout</Text>
        
        
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLogout: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    borderRadius: 30,
    padding: 15,
  }
})
