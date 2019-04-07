// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Current Points</Text>
//         <button onPress={p.addPoints(1)}>
//           Click Me!
//         </button>
//       </View>
//     );
//   }
// }
//
// class Points {
//   constructor(value) {
//     this.value = value
//   }
//   //Add points method
//   addPoints(amount) {
//     this.value += amount
//   }
// }
//
// const p = new Points(0);
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';

class Points {
  constructor(value) {
    this.value = value
  }
  //Add points method
  addPoints(amount) {
    this.value += amount
  }
}

const p = new Points(0);



export default class reactApp extends Component {
  constructor() {
   super()
    this.state = {
      myPoints: "0"
    }
  }
  _updateText = () => {
    p.addPoints(1);
    this.setState({myText: p.value.toString})
  }
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }




  render() {
    return (

      <View style={styles.container}>
        <View>
        <Text>
        {p.value}
        </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._updateText}
            title="Press Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
