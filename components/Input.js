import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextField} from 'react-native-material-textfield';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry, keyboardType}) => {
    return (
        <View>
            <TextField
                tintColor={"#2b0e50"}
                textColor={"#2b0e50"}
                baseColor={"#2b0e50"}
                keyboardType={keyboardType}
                labelTextStyle={{fontWeight: '100'}}
                label={label}
                autoCorrect={false}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}/>
        </View>
    )
};
export {Input};