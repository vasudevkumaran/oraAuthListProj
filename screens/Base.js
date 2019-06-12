import React, {Component} from 'react';
import {Text,View,ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class Base extends Component{
    constructor(props){
        super(props)
        this.checkLogin();
    }

    checkLogin = async () => {
        // AsyncStorage.clear() use it when logout
        username = await AsyncStorage.getItem('username');
        if (username){ // user logged in
            this.props.navigation.navigate('MainView');
        }else{ //logged out
            this.props.navigation.navigate('AuthView');
        }
    }

    render(){
        return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator />
        </View>
    }
}
