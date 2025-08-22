import { themes } from '@/globals/themes'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import InputRegister from '../components/InputRegister'
export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <Text style={styles.textTitle}>Cadastre sua conta.</Text>
      </View>
      <InputRegister />
      <View>
        <Link href={'./login'}>
          <Text style={styles.linkBackLogin}>Voltar para Login</Text>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 200,
  },
  boxTop: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    color: themes.colors.textDark,
  },
  linkBackLogin: {
    fontFamily: 'Inter',
    fontWeight: '700',
    color: themes.colors.green,
    textAlign: 'center',
    marginTop: 20,
  }
})
