import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextField} from 'react-native-material-textfield';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Label</Text>
            <TextField
                label={label}
                autoCorrect={false}
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                value={value}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        border: '#eee',
        borderBottomWidth: 2,
    },
    label: {
        padding: 5,
        paddingBottom: 0,
        color: '#333',
        fontSize: 17,
        fontWeight: '700',
        width: '100%',
    },
    input: {
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 2,
        color: '#333',
        fontSize: 18,
        fontWeight: '700',
        width: '100%',
    },
});

export {Input};