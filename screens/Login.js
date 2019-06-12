import React, {Component} from 'react';
import {Text,View,TextInput,Button, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export class Login extends Component{
    
    static navigationOptions = {
        title:"Login",
        headerStyle:{
            backgroundColor:'#f4511e'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold',
            color:'white'
        }
    }
    
    constructor(props){
        super(props)
        this.state = {username:'',password:''};
    }

    checkLogin = () =>{
        if (this.state.username === 'admin' && this.state.password === 'admin'){
            // log in success
            this.storeLogin()
        }else{
            //failed
            Alert.alert('Failed',
            'Username / Password wrong',
            [
                {text:'OK', onPress:()=>{console.log('User pressed OK')}}
            ],
            {cancelable:false});
        }
    }

    storeLogin = async () => {
        await AsyncStorage.setItem('username',this.state.username);
        this.props.navigation.navigate('MainView');
    }

    onChangeUserName = (t) => this.setState({username:t});
    onChangePassword = (t) => this.setState({password:t});
    render(){
        return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TextInput onChangeText={this.onChangeUserName}
            placeholder="Enter Username here" style={{width:200, height:50, borderWidth:0.5, borderColor:'blue', marginBottom:15}}/>
            <TextInput onChangeText={this.onChangePassword}
            secureTextEntry={true} placeholder="Enter Password here" style={{width:200, height:50, borderWidth:0.5, borderColor:'blue', marginBottom:15}}/>
            <Button title="Login" onPress={this.checkLogin}/>
        </View>
    }
}
