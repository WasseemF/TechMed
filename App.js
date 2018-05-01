import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import * as firebase from 'firebase';
import {Input} from './components/Input';

export default class App extends Component {
    state = {
        email: '',
        password: '',
    };

    componentWillMount(){
        const firebaseconfig ={
            apiKey: '',
            authDomain: '',
        };
        firebase.initializeApp(firebaseconfig);
    }

    render() {
        return (
            <View style={styles.container}>
                <Input style={styles.input}
                       label='E-mail'
                       onChangeText={email => this.setState({email})}
                       value={this.state.email}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
