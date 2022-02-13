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
        // onPress: 눌렀을 때 이벤트가 발생하여 메소드 실행
        // onPress={()=>alert('hello world')}

        // onLongPress: 오래 눌렀을 때 이벤트가 발생하여 메소드 실행
        // onLongPress={()=>alert('hello world')}

        // onPressIn: 누르자마자 바로 이벤트가 발생하여 메소드 실행
        // onPressIn={()=>alert('hello world')}

        // onPressOut: 터치했다가 손을 놓았을 때 이벤트가 발생하여 메소드 실행
        onPressOut={()=>alert('hello world')}
    >
        <View>
            <Text>{props.name}</Text>
        </View>
    </TouchableOpacity>
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

/**
 * @description TouchableWithoutFeedback: View의 아무런 변화를 일으키지 않고 알림 발생
 */
/*
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

const Header = (props) => (
    <TouchableWithoutFeedback
        onPress={()=>alert('hello world')}
    >
        <View style = {styles.header}>
            <Text>This is Header</Text>
        </View>
    </TouchableWithoutFeedback>
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
*/
