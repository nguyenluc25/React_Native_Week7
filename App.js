import { Text, SafeAreaView, StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';
// or any files within the Snack
import Screen01 from './components/Screen01';
import Screen02 from './components/Screen02';
import Screen03 from './components/Screen03';
import { TouchableOpacity } from 'react-native';
import { createContext, useState } from 'react';

export default function App() {
  const Stack = createNativeStackNavigator();

  const [nameU, setNameU] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen01" >
          <Stack.Screen name="Screen01" component={Screen01}
            initialParams={{ nameU, setNameU }}
          />
          <Stack.Screen name="Screen02" component={Screen02}
            options={({ navigation, route }) => ({
              title: '',
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Screen01')}
                  style={{
                    padding: 10,
                  }}
                >
                  <AntDesign name="arrowleft" size={30} color="black" />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                  margin: 10,
                }}>
                  <View>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        backgroundColor: '#dacff3',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 10,
                        borderRadius: 50,
                      }}
                      source={require('./assets/user.png')}></Image>
                  </View>
                  <View>
                    <Text style={{
                      fontSize: 20,
                      fontWeight: 'bold',

                    }}>Hi {nameU}</Text>
                    <Text style={{
                      color: '#696b6f',
                    }}>Have agrate day a head</Text>
                  </View>
                </View>
              ),
            })}
          />
          <Stack.Screen name="Screen03" component={Screen03}
            options={({ navigation, route }) => ({
              title: '',
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Screen02')}
                  style={{
                    padding: 10,
                  }}
                >
                  <AntDesign name="arrowleft" size={30} color="black" />
                </TouchableOpacity>
              ),
              headerLeft: () => (
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                  margin: 10,
                }}>
                  <View>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        backgroundColor: '#dacff3',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 10,
                        borderRadius: 50,
                      }}
                      source={require('./assets/user.png')}></Image>
                  </View>
                  <View>
                    <Text style={{
                      fontSize: 20,
                      fontWeight: 'bold',

                    }}>Hi {nameU}</Text>
                    <Text style={{
                      color: '#696b6f',
                    }}>Have agrate day a head</Text>
                  </View>
                </View>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
