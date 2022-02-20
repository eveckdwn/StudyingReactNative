/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput, ScrollView} from 'react-native';
import Picker from "./src/picker";

class App extends Component {
  state = {
    myTextInput: '',
    alphabet: ['a', 'b', 'c', 'e']
  }

  onChangeInput = (event) => {
    this.setState({
      myTextInput: event
    })
  }

  onAddTextInput = () => {
    this.setState(preState => {
      return {
        myTextInput: '',
        alphabet: [...preState.alphabet, preState.myTextInput]
      }
    })
  }

  render() {
    return (
        <View style={styles.mainView}>
          <Picker/>
          <TextInput
              value={this.state.myTextInput}
              style={styles.input}
              onChangeText={this.onChangeInput}
              multiline={true}
              maxLength={100}
              autoCapitalize={'none'}

          />
          <Button
              title="Add Text Input"
              onPress={this.onAddTextInput}
          />
          <ScrollView style={ {width: '100%'} }>
            {
              this.state.alphabet.map( (item, idx) => (
                  <Text
                      style={styles.mainText}
                      key={idx}
                  >
                    {item}
                  </Text>
              ) )
            }
          </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'center'
  },

  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    backgroundColor: 'pink',
    margin: 20,
    padding: 20
  },

  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10
  }
})

export default App;

/**
 * @description Button, ScrollView, TextInput 심화
 */
/*
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput, ScrollView} from 'react-native';

class App extends Component {
  state = {
    myTextInput: '',
    alphabet: ['a', 'b', 'c', 'e']
  }

  onChangeInput = (event) => {
    this.setState({
      myTextInput: event
    })
  }

  onAddTextInput = () => {
    this.setState(preState => {
      return {
        myTextInput: '',
        alphabet: [...preState.alphabet, preState.myTextInput]
      }
    })
  }

  render() {
    return (
      <View style={styles.mainView}>
        <TextInput
            value={this.state.myTextInput}
            style={styles.input}
            onChangeText={this.onChangeInput}
            multiline={true}
            maxLength={100}
            autoCapitalize={'none'}

        />
        <Button
          title="Add Text Input"
          onPress={this.onAddTextInput}
        />
        <ScrollView style={ {width: '100%'} }>
          {
            this.state.alphabet.map( (item, idx) => (
              <Text
                  style={styles.mainText}
                  key={idx}
              >
                {item}
              </Text>
            ) )
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'center'
  },

  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    backgroundColor: 'pink',
    margin: 20,
    padding: 20
  },

  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10
  }
})

export default App;
*/

/**
 * @description TextInput
 */
/*
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Input from './src/input';

class App extends Component {
  state = {
    appName: 'My First App',
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Input/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'center'
  },
})

export default App;
 */


/**
 * @description ScrollView
 */
/*
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from "./src/numList";

class App extends Component {
  state = {
    appName: 'My First App',
    random: [1,2,3,4,5]
  }

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random()*100)+1;
    this.setState(prevState => {
      return {
        random: [...prevState.random,randomNum]
      }
    })
  }

  onNumDelete = (position) => {
    const newArray = this.state.random.filter((num, index) => {
      return position != index;
    })
    this.setState({
      random: newArray
    })
  }


  render() {
    return (
        <View style={styles.mainView}>
          <Header name={this.state.appName}/>

          <View>
            <Text
                style={styles.mainText}
                onPress={()=>alert('text touch event')}
            >Hello World</Text>
          </View>

          <Generator add={ this.onAddRandomNum }/>
          <ScrollView
            style={ {width: '100%'} }
            // 스크로뷰를 올리거나 내리고 나서 터치를 떼었을 때 저절로 움직이는 시점을 Trigger
            // onMomentumScrollBegin={ ()=>alert('begin') }

            // 스크롤의 움직임이 멈췄을 때 Trigger
            // onMomentumScrollEnd={ ()=>alert('end') }

            // 스르콜의 움직임이 발생했을 때 Trigger
            // onScroll={ ()=>alert('end') }

            // 스르콜뷰의 크기가 변경됬을 때 Trigger
            // onContentSizeChange={ (width, height)=>alert('높이: ' + height) }

            // 스크롤의 위/아래 끝으로 움직였을 때 통통 튕기도록 느낌을 줌
            // TODO: 왜인지 모르겠지만, 안드로이드에서는 안먹는거 같음..
            bounces={false}
          >
            <NumList
                num={this.state.random}
                delete={this.onNumDelete}
            />
            </ScrollView>
        </View>

    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'center'
  },

  mainText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
    padding: 20
  }
})

export default App;
 */


/**
 * @description onPress Event Handling (Add Number / Delete Number)
 */
/*
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from "./src/numList";

class App extends Component {
  state = {
    appName: 'My First App',
    random: [1,2,3,4,5]
  }

  onAddRandomNum = () => {
    //  1~100 사이의 Random 값
    const randomNum = Math.floor(Math.random()*100)+1;
    this.setState(prevState => {
      return {
        random: [...prevState.random,randomNum]
      }
    })
  }

  onNumDelete = (position) => {
    //  filter: 특정 조건에 부합하는 요소만 추출하여 새 배열을 만듦.
    //  num을 사용하지는 않았지만, num이 없으면 요소값에 업데이트가 안됨.
    const newArray = this.state.random.filter((num, index) => {
      return position != index;
    })
    this.setState({
      random: newArray
    })
  }


  render() {
    return (
        <View style={styles.mainView}>
          <Header name={this.state.appName}/>

          <View>
            <Text
                style={styles.mainText}
                onPress={()=>alert('text touch event')}
            >Hello World</Text>
          </View>

          <Generator add={ this.onAddRandomNum }/>
          <NumList
              num={this.state.random}
              delete={this.onNumDelete}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'center'
  },

  mainText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
    padding: 20
  }
})

export default App;
*/

/**
 * @description Button
 */
/*
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';

class App extends Component {
  state = {
    appName: 'My First App',
  }

  render() {
    return (
        <View style={styles.mainView}>
          <Header name={this.state.appName}/>

          <View>
            <Text
                style={styles.mainText}
                onPress={()=>alert('text touch event')}
            >Hello World</Text>
          </View>

          <Generator/>
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

  mainText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
    padding: 20
  }
})

export default App;
*/

/**
 * @description Text 태그에서 이벤트에 대한 메소드 실행이 가능
 */
/*
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './src/header';

class App extends Component {
  state = {
    appName: 'My First App'
  }
  render() {
    return (
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

  mainText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
    padding: 20
  }
})

export default App;
*/

/**
 * @description 다른 js파일을 import하여 App.js에서 호출
 */
/*
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './src/header';

class App extends Component {
    state = {
        appName: 'My First App'
    }

    render() {
        return (
            <View style={styles.mainView}>
                <Header/>
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
    }
})

export default App;
*/

/**
 * @description Style (하위 View에는 다른 Style을 적용하고, Text에 별도 Style을 적용
 */
/*
// react에서 Component Class를 import
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// App Class를 정의할 때, Component Class를 상속
class App extends Component {
    // 화면을 렌더링하는 함수가 있고, 그 안에 return되는 것들이 화면을 구성
    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.subView}>
                    <Text style={styles.mainText}>Hello World</Text>
                </View>
                <View style={styles.subView}>
                    <Text>Hello World</Text>
                </View>
                <View style={styles.anotherSubView}>
                    <Text style={styles.mainText}>Hello World</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'green',
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
*/

/**
 * @description Style (별도 정의 후 참조)
 */
/*
// react에서 Component Class를 import
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// App Class를 정의할 때, Component Class를 상속
class App extends Component {
    // 화면을 렌더링하는 함수가 있고, 그 안에 return되는 것들이 화면을 구성
    render() {
        return (
            <View style={styles.mainView}>
                <View>
                    <Text>Hello World</Text>
                </View>
                <View>
                    <Text>Hello World</Text>
                </View>
                <View>
                    <Text>Hello World</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'green',
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default App;
*/

/**
 * @description Style (Inline)
 */
/*
// react에서 Component Class를 import
import React, {Component} from 'react';
import {View, Text} from 'react-native';

// App Class를 정의할 때, Component Class를 상속
class App extends Component {
    // 화면을 렌더링하는 함수가 있고, 그 안에 return되는 것들이 화면을 구성
    render() {
        return (
            <View style={{
                backgroundColor: 'green',
                height: '100%',
                marginTop: 50,
                paddingTop: 50
            }}>
                <View>
                    <Text>Hello World</Text>
                </View>
                <View>
                    <Text>Hello World</Text>
                </View>
                <View>
                    <Text>Hello World</Text>
                </View>
            </View>
        )
    }
}

export default App;
*/

/**
 * @description View, Text
 */
/*
// react에서 Component Class를 import
import React, {Component} from 'react';
import {View, Text} from 'react-native';

// App Class를 정의할 때, Component Class를 상속
class App extends Component {
    // 화면을 렌더링하는 함수가 있고, 그 안에 return되는 것들이 화면을 구성
    render() {
        return (
            <View>
                <Text>Hello World</Text>
            </View>
        )
    }
}

export default App;
*/
