import React, {Component} from 'react';
import {createAppContainer,createStackNavigator, createSwitchNavigator} from 'react-navigation';
import { Login } from './screens/Login';
import { Register } from './screens/Register';
import { Home } from './screens/Home';
import { AddEdit } from './screens/AddEdit';
import { Base } from './screens/Base';

const AuthStack = createStackNavigator({
    LoginView:{screen:Login},
    RegisterView:{screen:Register}
});

const MainStack = createStackNavigator({
    HomeView:{screen:Home},
    AddEditView:{screen:AddEdit}
});

const AppContainer = createAppContainer(createSwitchNavigator(
    {
        BaseView:{screen:Base},
        AuthView:{screen:AuthStack},
        MainView:{screen:MainStack}
    },
    {
        initialRouteName:'BaseView'
    }
));

export class MyContainer extends Component{
    render(){
        return <AppContainer/>
    }
}