import { View,  Text, StyleSheet } from 'react-native'
import InputField from './components/InputField'
import { themes } from '@/globals/themes'
import { Link } from 'expo-router'



export default function Login() {


  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <Text style={styles.textTitle}>Bem-vindo(a)!</Text>
      </View>
      <InputField/>
      <View style={styles.boxBottom}>
        <Text>Não tem um conta?</Text>
        <Link href={'/pages/Register'} style={styles.textBottom}>Cadastre-se</Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    gap: 100,
    backgroundColor: '#fff',
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
    color: themes.colors.textDark
  },
  linkPage: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 50,
    width: 200,
    borderRadius: 10,
    backgroundColor: '#f4f4f4',
  },
  btnGoToHome: {
    width: 200,
    backgroundColor: themes.colors.green,
    height: 50,
    borderRadius: 10,
    padding: 10,
  },
  boxBottom: {
    height: 50,
    width: '100%', 
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    marginTop: 60,
  },
  textBottom: {
    color: '#1FCC79',
    top: 3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    height: 35,
  },
})


