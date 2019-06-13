import React, {Component} from 'react';
import {Text,View,TextInput,Button} from 'react-native';



export class AddEdit extends Component{
    static navigationOptions = {
        title:"AddEdit"
    }
    
    constructor(props){
        super(props)
        if (this.props.navigation.state.params.index == -1){
            this.props.itemName = '';
            this.props.itemPrice = '';
            this.props.itemQty = '';
            this.state = {itemText:'',itemPrice:'',itemQty:''};
        }else{
            const {itemName,itemQty,itemPrice} = this.props.navigation.state.params;
            console.log(itemName+','+itemQty);
            
            this.state = {itemText:itemName,itemPrice:itemPrice,itemQty:itemQty};
        }
        
        
    }

    onSave = () =>{
        this.props.navigation.state.params.backBtn({item:this.state.itemText,qty:this.state.itemQty,price:this.state.itemPrice,index:this.props.navigation.state.params.index});
        this.props.navigation.goBack();
        //console.log(this.props.navigation.state.params.index)

    }

    onChangeItemText = (text) => this.setState({itemText:text});
    onChangeItemPrice = (text) => this.setState({itemPrice:text});
    onChangeItemQty = (text) => this.setState({itemQty:text});

    render(){
        return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Item Name</Text>
            <TextInput placeholder="Enter Item name" value={this.state.itemText}
                onChangeText={this.onChangeItemText}
                style={{width:200,height:50,borderWidth:1, borderColor:'red', borderRadius:3, marginBottom: 10}}
            />
            <Text>Item Qty</Text>
            <TextInput placeholder="Enter Item qty" value={this.state.itemQty}
                onChangeText={this.onChangeItemQty} keyboardType='number-pad'
                style={{width:200,height:50,borderWidth:1, borderColor:'red', borderRadius:3, marginBottom: 10}}
            />
            <Text>Item Price</Text>
            <TextInput placeholder="Enter Item Price" value={this.state.itemPrice}
                onChangeText={this.onChangeItemPrice} keyboardType='number-pad'
                style={{width:200,height:50,borderWidth:1, borderColor:'red', borderRadius:3, marginBottom: 10}}
            />
            <Button title="Save" onPress={this.onSave} />
        </View>
    }
}
