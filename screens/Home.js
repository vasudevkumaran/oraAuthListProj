import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class Home extends Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        return {
            title: "Home",
            headerRight: params.headerRightFromComp
        }
    }

    

    constructor(props) {
        super(props)
        this.props.navigation.setParams(
            {headerRightFromComp:<View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ marginRight: 10, flex:1 }} onPress={ () => { this.props.navigation.navigate('AddEditView',{index:-1,backBtn:this.onReceiveData.bind(this)}) }}>
                <Text style={{ color: 'white' }}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginRight: 10, flex:1 }} onPress={async () => { await AsyncStorage.clear(); this.props.navigation.navigate('BaseView') }}>
                <Text style={{ color: 'white' }}>Logout</Text>
            </TouchableOpacity>
        </View>}
        );
        this.state = {items:[{item:'Mango',qty:'10',price:'100',key:Math.random()}]}
        
    }

    onReceiveData = ({item,qty,price,index}) => {
        console.log(item+ ' received');
        console.log(qty+ ' received');
        console.log(price+ ' received');
        let {items} = this.state;
        itemObj = {item:item,qty:qty,price:price,key:Math.random()};
        if (index == -1){
            items.push(itemObj);
        }else{
            items[index] = itemObj; 
        }
        
        this.setState({items:items});
    }


    onPressEdit = (obj,index) => {
        console.log(obj);
        this.props.navigation.navigate('AddEditView', {index:index,itemName:obj.item,itemQty:obj.qty,itemPrice:obj.price,itemKey:obj.key, backBtn:this.onReceiveData});
    }

    showDeleteWarning = (index) => {
        Alert.alert('Wait','Do you really want to delete this item',[
            {text:'Yes', onPress:() =>{
                let {items} = this.state;
                items.splice(index,1);
                this.setState({items:items});
            }},
            {text:'No'}
        ], {cancelable:false})
    }


    render() {
        return <ScrollView>
            {
                this.state.items.map((obj,index)=>
                    <TouchableOpacity key={obj.key} style={{flexDirection:'row', padding:10}} onPress={()=>this.onPressEdit(obj,index)} onLongPress={()=>this.showDeleteWarning(index)}>
                        <Image source={{uri:'https://cdn3.iconfinder.com/data/icons/map-and-location-fill/144/Place_Shopping-512.png', width:60,height:60}} style={{flex:1}}/>
                        <Text style={{margin:20,fontWeight:'bold',flex:3}}>{obj.item}</Text>
                    </TouchableOpacity>
                )
            }
        </ScrollView>
    }
}
