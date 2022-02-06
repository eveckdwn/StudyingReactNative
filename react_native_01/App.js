/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// react에서 Component Class를 import
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './src/header';

// App Class를 정의할 때, Component Class를 상속
class App extends Component {
  // 화면을 렌더링하는 함수가 있고, 그 안에 return되는 것들이 화면을 구성

  state = {
    appName: 'My First App'
  }
  render() {
    return (
        /*<View style={styles.mainView}>
          <View style={styles.subView}>
            <Text style={styles.mainText}>Hello World</Text>
          </View>
          <View style={styles.subView}>
            <Text>Hello World</Text>
          </View>
          <View style={styles.anotherSubView}>
            <Text style={styles.mainText}>Hello World</Text>
          </View>
        </View>*/
        /*<View style={styles.mainView}>
          <Header name={this.state.appName}/>
        </View>*/
        <View style={styles.mainView}>
          <Text
              style={styles.mainText}
              onPress={()=>alert('text touch event')}
          >Hello World</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  subView: {
    flex: 1,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '50%'
  },

  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  mainText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
    padding: 20
  }
})

export default App;
