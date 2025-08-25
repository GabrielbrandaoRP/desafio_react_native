
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react'
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { themes } from '@/globals/themes';

export default function InputRef() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  async function testeLogin() {
    try {
      setLoading(true);
      if (!email || !password) {
        return Alert.alert('Erro', 'Preencha todos os campos');
      }
      setTimeout(() => { 

        Alert.alert('Logado!');
        setLoading(false);
      },3000)
    }catch (error) {
      console.log(error)
    }
  }
  const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  return (
    
      <View style={styles.boxInput}>      
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}/>
        <View>
            <TextInput style={styles.inputPassword}
              placeholder='Password'
              value={password}
              secureTextEntry={!showPassword}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={styles.iconBtn}
              onPress={handleShowPassword}
          >
            <Ionicons
              name={true ? "eye-off" : "eye"}
              size={24}
            color="#9FA5C0"
            
            />
          </TouchableOpacity>
        </View>
        <View style={styles.forgot}>
          <View><Text style={styles.textForgot}>Esqueceu sua senha?</Text></View>
        </View> 
        <View>
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => router.replace("/(tabs)/user")}>
            {
              loading?
                <ActivityIndicator color={'#fff'} size={'small'} />
              :
                <Text style={styles.btnLoginText}>Login</Text>
            }
          </TouchableOpacity>
        </View>
      </View>
    
  )
}

const styles = StyleSheet.create({
  boxInput: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    height: 50,
    width: '100%', 

  },
  input: {
    borderWidth: 1,
    borderColor: themes.colors.border,
    padding: 10,
    borderRadius: 30,
    width: 327,
    height: 56,
    paddingHorizontal: 20,
  },
  inputPassword: {
    borderWidth: 1,
    borderColor: themes.colors.border,
    padding: 15,
    borderRadius: 30,
    width: 327,
    height: 56,
    paddingHorizontal: 20,
  },

  iconBtn: {
    position: "absolute",
    right: 12,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  forgot: {
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 15,
  },
  textForgot: {
    fontFamily: 'Inter',
    fontWeight: '700',
    color: themes.colors.textDark,
  },
  btnLogin: {
    backgroundColor: themes.colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    height: 56,
    width: 327,
    shadowColor: '#fff',
    shadowOffset: {
        width: 0,
        height: 6,
      },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
  },
  btnLoginText: {
    color: '#fff',
    fontFamily: 'Inter',
    fontWeight: '700',
  },
 
});