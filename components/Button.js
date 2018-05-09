import React from 'react'
import {StyleSheet, TouchableOpacity, Text, TouchableHighlight, Image} from 'react-native'

const Button = ({onPress, source, style, children}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image style={style} source={source}/>
            <Text style={{fontWeight: 'bold', color: "#2b0e50", marginTop: 5}}>{children}</Text>
</TouchableOpacity>
)
};
const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export {Button};