import { Text, SafeAreaView, StyleSheet, View, TextInput, Image } from 'react-native';
import { useEffect, useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Screen01 = ({ navigation, route}) => {
  const { nameU, setNameU } = route.params; 
  const [name, setName] = useState(nameU);

  const handleTextChange = (text) => {
    setName(text);
    setNameU(text);
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}>
      <View style={{
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Image
          style={{
            width: '80%',
            height: '80%',
          }}
          source={require('../assets/image.png')}></Image>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 40,
        }}>
        <Text
          style={{
            color: '#8353e2',
            fontWeight: 'bold',
            fontSize: 20,
            width: 200,
            textAlign: 'center',
          }}>
          MANAGE YOUR TASK
        </Text>
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#888',
            borderRadius: 10,
            padding: 5,
          }}>
          <MaterialCommunityIcons
            name="email-outline"
            size={20}
            color="black"
          />
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor="#888"
            value={name}
            onChangeText={handleTextChange}
            style={{
              width: '100%',
              padding: 3,
              fontSize: 20,
            }}></TextInput>
        </View>
      </View>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          onPress={() => navigation.navigate('Screen02')}
          style={{
            textAlign: 'center',
            backgroundColor: '#00bdd6',
            width: 120,
            color: '#f9fafb',
            alignItems: 'center',
            padding: 8,
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 10,
          }}>
          GET STARTED <AntDesign name="arrowright" size={10} color="#f9fafb" />
        </Text>
      </View>
    </View>
  );
};

export default Screen01;
