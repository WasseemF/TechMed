import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Input } from './components/Input';

export default class App extends React.Component {
    render(){
        return (
          <View style={styles.container}>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
