/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

const Header = (props) => (
    <TouchableOpacity
        style = {styles.header}
        // onPress={()=>alert('hello world')}
        // onLongPress={()=>alert('hello world')}
        // onPressIn={()=>alert('hello world')}
        onPressOut={()=>alert('hello world')}
    >
        <View>
            {/*<Text>This is Header</Text>*/}
            <Text>{props.name}</Text>
        </View>
    </TouchableOpacity>
    /*<TouchableWithoutFeedback
        onPress={()=>alert('hello world')}
    >
        <View style = {styles.header}>
            {/!*<Text>This is Header</Text>*!/}
            <Text>{props.name}</Text>
        </View>
    </TouchableWithoutFeedback>*/
)

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'pink',
        alignItems: 'center',
        padding: 5,
        width: '100%'
    }
})

export default Header;
