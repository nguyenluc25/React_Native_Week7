
import { Text, View, TextInput, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from "react";
const Screen03 = ({ route, navigation }) => {
    const listJobs = route?.params?.data;
    const setListJobs = route?.params?.setListJobs;
    const item = route?.params?.item;
    const [name, setName] = useState(route?.params?.item?.name ?? '');

    const handleFinish = () => {
        if (/\w/.test(name)) {
            if (!item) {
                setListJobs([{ id: listJobs.length + 1, name }, ...listJobs]);
            } else {
                setListJobs(listJobs.map((i) => i.id === item.id ? { ...item, name } : i));
            }
        }
        navigation.navigate('Screen02');
    }

    return (
        <View style={{
            flex: 1,
            padding: 10,
        }}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                }}>
                    ADD YOUR JOB
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
                        padding: 10,
                    }}>
                    <Entypo name="news" size={24} color="green" />
                    <TextInput
                        placeholder="Input your job"
                        placeholderTextColor="#888"
                        value={name}
                        onChangeText={setName}
                        style={{
                            width: '100%',
                            paddingVertical: 10,
                            fontSize: 20,
                        }}></TextInput>
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Text
                    onPress={() => handleFinish()}
                    style={{
                        textAlign: 'center',
                        backgroundColor: '#00bdd6',
                        width: 200,
                        color: '#f9fafb',
                        alignItems: 'center',
                        padding: 8,
                        borderWidth: 1,
                        borderColor: 'white',
                        borderRadius: 10,
                        fontSize: 20,
                    }}>
                    FINISH <AntDesign name="arrowright" size={20} color="#f9fafb" />
                </Text>
            </View>
            <View style={{
                flex: 4,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Image style={{
                    width: '50%',
                    height: '50%',
                }}
                    source={require('../assets/image.png')}></Image>
            </View>
        </View>
    )
}
export default Screen03;