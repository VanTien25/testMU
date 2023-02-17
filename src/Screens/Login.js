import { View, Text, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../common/CustomTextInput'
import CommonButton from '../common/CommonButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Loader from '../common/Loader'

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const login = () => {
    setModalVisible(true);
    if (email == '') {
      setModalVisible(false);
      setBadEmail(true);
    } else {
      setBadEmail(false);
      if (password == '') {
        setModalVisible(false);
        setBadPassword(true);
      } else {
        setBadPassword(false);
        setTimeout ( () => {
          setBadPassword(false);
          getData();
        }, 2000);
      }
    }
  };

  const getData = async () => {
    const mEmail = await AsyncStorage.getItem('EMAIL');
    const mPass = await AsyncStorage.getItem('PASSWORD');
    if (email === mEmail && password === mPass) {
      setModalVisible(false);
      navigation.navigate('Home');
    } else {
      setModalVisible(false);
    }
  };


  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../images/playstore.png')}
        style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 100, borderRadius: 100 }}
      />

      <Text style={{ marginTop: 50, alignSelf: 'center', fontSize: 24, fontWeight: '600', color: '#000' }}>
        Login
      </Text>
      <CustomTextInput
        placeholder={'Nhap Email...'}
        icon={require('../images/email.png')}
        value={email}
        onChangeText={txt => {
          setEmail(txt);
        }}
      />

      {
        badEmail === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>Hay nhap Email</Text>
        )
      }

      <CustomTextInput
        type={'password'}
        placeholder={'Nhap Password...'}
        icon={require('../images/lock.png')}
        value={password}
        onChangeText={txt => {
          setPassword(txt);
        }}
      />

      {
        badPassword === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>Hay nhap Password</Text>
        )
      }

      <CommonButton
        title={'Login'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={() => {
          login();
        }}
      />

      <Text
        style={{
          fontSize: 18,
          fontWeight: '800',
          alignSelf: 'center',
          marginTop: 20,
          textDecorationLine: 'underline'
        }}
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        Create New Account.
      </Text>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  )
}

export default Login