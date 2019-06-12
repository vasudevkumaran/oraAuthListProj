import React, {Component} from 'react';
import {Text,View,ActivityIndicator} from 'react-native';

export class AddEdit extends Component{
    static navigationOptions = {
        title:"AddEdit"
    }
    
    constructor(props){
        super(props)
        
    }


    render(){
        return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>AddEdit</Text>
        </View>
    }
}
