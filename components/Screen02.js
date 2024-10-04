import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';

const Screen02 = ({ navigation }) => {  
  const [search, setSearch] = useState('');

  const [listJobs, setListJobs] = useState([
    { id: 1, name: 'To check email' },
    { id: 2, name: 'UI task web page' },
    { id: 3, name: 'Learn javascript basic' },
    { id: 4, name: 'Learn HTML Advance' },
    { id: 5, name: 'Medical App UI' },
    { id: 6, name: 'Learn Java' },
  ]);

  // Hàm lọc dữ liệu dựa trên từ khóa tìm kiếm
  const filterJob = listJobs.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View
      style={{
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 15,
        gap: 10,
        marginVertical: 2,
        backgroundColor: '#d2d5d8',
      }}>
      <AntDesign name="checksquareo" size={30} color="#5dac7b" />
      <Text
        style={{
          width: '100%',
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        {item.name}
      </Text>
      <Octicons name="pencil" size={30} color="#df7c7d"
        onPress={() => navigation.navigate('Screen03', { data: listJobs, item, setListJobs })} />
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}>
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
            padding: 10,
          }}>
          <AntDesign name="search1" size={20} color="black" />
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor="#888"
            value={search}
            onChangeText={setSearch}
            style={{
              width: '100%',
              padding: 5,
              fontSize: 20,
            }}></TextInput>
        </View>
      </View>
      <View
        style={{
          flex: 4,
        }}>
        <FlatList
          data={filterJob}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AntDesign
          onPress={() => navigation.navigate('Screen03', { data: listJobs, setListJobs: setListJobs})}
          name="plus"
          size={30}
          color="white"
          style={{
            borderRadius: '50%',
            width: 50,
            height: 50,
            textAlign: 'center',
            backgroundColor: '#26c3d9',
          }}
        />
      </View>
    </View>
  );
};

export default Screen02;
