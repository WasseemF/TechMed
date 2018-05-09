import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import * as firebase from 'firebase';
import {Input} from '../components/Input';
import {Button} from '../components/Button';
import {StackNavigator} from 'react-navigation';
import CheckBox from 'react-native-check-box';

export default class LoginScreen extends Component {
    state = {
        email: '',
        password: '',
    };

    componentWillMount() {
        const firebaseconfig = {
            apiKey: '',
            authDomain: '',
        };
        firebase.initializeApp(firebaseconfig);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.img_logo} source={require('../images/logo.png')}/>


                {/* INPUT FIELDS */}
                <KeyboardAvoidingView behavior='padding'>
                    <Input
                        label='E-mail'
                        keyboardType='email-address'
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}/>
                    <Input
                        label='Password'
                        onChangeText={password => this.setState({password})}
                        secureTextEntry={true}
                        value={this.state.password}/>
                </KeyboardAvoidingView>
                <View style={{marginTop: 15}}>
                    <CheckBox checkBoxColor={'#2b0e50'} rightText={'Remember me'} rightTextStyle={{color: '#2b0e50'}}
                              isChecked={false} onClick={() => this.state}/>
                </View>

                {/* SIGN BUTTONS */}
                <Button
                    style={styles.btn_fingerprint}
                    source={require('../images/fingerprint_scanner_login.png')}
                    hitSlop={{top: 0, bottom: 0, left: 0, right: 0}}/>
                <Button
                    style={styles.btn_sign_in}
                    source={require('../images/sign_in_button.png')}/>

                {/* FOOTER */}
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: "#2b0e50"}}>Don't have an account?</Text>
                </View>
                <Button>Register here!</Button>
                <Button>Work Offline</Button>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    img_logo: {
        width: 115,
        height: 115,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 150,
        marginBottom: 10
    },
    btn_fingerprint: {
        width: 70,
        height: 70,
        marginTop: 50
    },
    btn_sign_in: {
        width: 200,
        height: 100,
        resizeMode: 'contain'
    }

});
