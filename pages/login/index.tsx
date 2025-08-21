import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import InputRef from '@/components/input'

export default function Login() {

  
  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <Text style={styles.textTitle}>Bem-vindo(a)!</Text>
      </View>
      <InputRef/>
  
      <View style={styles.boxBottom}>
        <Text>Não tem um conta?</Text>
        <Text style={styles.textBottom}>Cadastre-se</Text>
      </View>
    </View>
  )
}
