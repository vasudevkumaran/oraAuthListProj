import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export class Home extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Home",
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: 'white'
            },
            headerRight: (
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ marginRight: 10, flex:1 }} onPress={ () => { navigation.navigate('AddEditView') }}>
                        <Text style={{ color: 'white' }}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginRight: 10, flex:1 }} onPress={async () => { await AsyncStorage.clear(); navigation.navigate('BaseView') }}>
                        <Text style={{ color: 'white' }}>Logout</Text>
                    </TouchableOpacity>
                </View>

            )
        }
    }

    constructor(props) {
        super(props)
        
    }


    render() {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home</Text>
        </View>
    }
}
