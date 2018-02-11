import React from 'react';
import {    
    View , Text,
    TextInput,Button
} from 'react-native';
//import LoginPage from '../pages/LoginPage';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            email:'',
            password:''
        };

        this.onSunmit=this.onSunmit.bind(this); //เป็นการเขียนฟังก์ั่น bind เรียกใช้งานตัวซ้าย
        //this.onChange=this.onChange.bind(this);
    }

    onSunmit(){
        //alert('onSubmit');
        //console.log(e.target);
        console.log('onSubmit',this.state);
    }
    render(){
        return(
            <View style={{padding: 10}}>
                <Text style={{fontSize:30 ,color:'#FFA500'}}>Login</Text>
                <TextInput 
                    style={{padding:5, marginTop : 10}}
                    placeholder="piphaptons@gmail.com"
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />

                <TextInput
                     style={{padding:5, marginTop : 10}}
                     secureTextEntry
                     placeholder="Password"
                     onChangeText={(password) => this.setState({password})}
                     value={this.state.password}
                />
            <Button
                //style={{backgroundColor:'#C0C0C0', marginTop : 10}}
                color ="#FFA500"
                title="LOGIN"
                onPress={this.onSunmit}
            />
            </View>
        );
    }
}

export default LoginForm;