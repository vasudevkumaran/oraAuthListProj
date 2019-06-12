import React, {Component} from 'react';
import {Text,View,ActivityIndicator} from 'react-native';

export class Register extends Component{
    static navigationOptions = {
        title:"Register"
    }
    
    constructor(props){
        super(props)
        this.checkLogin();
    }

    checkLogin = () => {
        
    }

    render(){
        return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Register</Text>
        </View>
    }
}
