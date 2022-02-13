/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class Input extends Component {
    state = {
        myTextInput: ''
    }

    onChangeInput = (event) => {
        this.setState({
            myTextInput: event
        })
    }

    render() {
        return(
            <View style={styles.mainView}>
            <TextInput
                //  TextInput에 입력값을 받아오는 속성
                value={this.state.myTextInput}
                style={styles.input}

                //  값이 변경될 때 Trigger
                onChangeText={this.onChangeInput}

                //  multiline이 true인 경우, 개행을 해줌
                multiline={true}

                //  입력값 최대 길이 설정
                maxLength={100}

                //  대문자 자동 수정 여부
                autoCapitalize={'none'}

                //  수정가능여부
                editable={true}
            />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
      width: '100%',
    },
    input: {
        width: '100%',
        backgroundColor: '#cecece',
        marginTop: 20,
        fontSize: 25,
        padding: 10
    }
})

export default Input;
