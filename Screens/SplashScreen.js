import React, {Component} from 'react';
import {StyleSheet, View, Image, StatusBar} from 'react-native';

export default class SplashScreen extends Component {

    componentWillMount(){
        setTimeout(
            () => {
               this.props.navigation.navigate("Login");
            },3000
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Image
                    style={styles.splash}
                    resizeMode='stretch'
                    source={require('../images/splashscreen.png')}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    splash: {
        flex: 1,
        width: undefined,
        height: undefined
    }
});