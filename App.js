import React, { Component } from 'react'
import { Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native'




export default class reactApp extends Component {
  constructor() {
    super();
    this.state = {
    coins: 0
    }
    this.addCoin = this.addCoin.bind(this)
    setInterval(this.addCoin, 1000)
  }

  addCoin() {
    this.setState(state => ({
      coins: state.coins + 1
    }))
  }





  render() {
    return (

      <View style={styles.container}>
        <View>
        <Text>
        {this.state.coins.toString()}
        </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.addCoin}
            title="Press Me"
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
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics)
