import { styles } from '../input/styles';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react'
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function InputRef() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
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

  return (
    <View>
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
            
            onChangeText={setPassword}
            />
            <TouchableOpacity
            style={styles.iconBtn}
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
            onPress={() => testeLogin()}>
            {
              loading?
                <ActivityIndicator color={'#fff'} size={'small'} />
              :
                <Text style={styles.btnLoginText}>Login</Text>
            }
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
