import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {Button} from '../components/Button';

export default class ProfileScreen extends Component {
    render() {
        var {params} = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Button style={styles.btn_settings}
                        source={require('../images/btn_settings.png')}/>
                <Image style={styles.img_profile}
                       source={require('../images/img_profile.png')}/>
                <Text style={styles.txt_user}>{params.name}</Text>
                <Text style={styles.txt_user_type}>{params.type}</Text>
                <View style={styles.bottom_container}>
                    <Image
                        style={{position: 'relative'}}
                        source={require('../images/img_gradient_bg.png')}/>
                    <Image
                        style={{
                            position: 'absolute',
                            marginLeft: 180,
                            marginTop: 50,
                            width: 400,
                            height: 400,
                            resizeMode: 'contain'
                        }}
                        source={require('../images/img_profile_status.png')}/>

                </View>
            </View>

        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    btn_settings: {
        width: 40,
        height: 40,
        marginLeft: 350,
        marginTop: 20
    },
    img_profile: {
        width: 130,
        height: 130,
        marginTop: 10
    },
    txt_user: {
        color: '#2b0e50',
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    txt_user_type: {
        fontSize: 16,
        marginTop: 5,
        opacity: 30
    },
    bottom_container: {},
});