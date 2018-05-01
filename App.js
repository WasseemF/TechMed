import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import * as firebase from 'firebase';
import {Input} from './components/Input';
import {Button} from './components/Button';
import Splash from './components/Splash';

export default class App extends Component {
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
                <Input
                       label='E-mail'
                       onChangeText={email => this.setState({email})}
                       value={this.state.email}
                />
                <Input style={styles.password}
                       label='Password'
                       onChangeText={password => this.setState({password})}
                       value={this.state.password}
                       secureTextEntry={true}/>
                <Button>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
