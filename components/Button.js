import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native'

const Button = ({onPress, children}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{children}</Text>
        </TouchableOpacity>
    )
};
export {Button};