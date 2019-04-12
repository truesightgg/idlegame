import React, { Component } from 'react'
import { Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native'




export default class reactApp extends Component {
  constructor() {
    super()
    this.state = {
    coins: 0,
    active_generation_value: 1,
    passive_generation_value: 1
    }
    this.add_coin = this.add_coin.bind(this)
    setInterval(this.add_passive_generation, 1000)
  }

  add_coin = () => {
    this.setState(state => ({
      coins: state.coins + state.active_generation_value
    })
  )
  }

  add_passive_generation = () => {
    this.setState(state => ({
      coins: state.coins + state.passive_generation_value
    })
  )
  }

  add_active_generation_value = () => {
    this.setState(state => ({
      active_generation_value: state.active_generation_value +1
    })
  )
  }

  add_passive_generation_value = () => {
    this.setState(state => ({
      passive_generation_value: state.passive_generation_value +1
    })
  )
  }








  render() {
    return (

      <View style={styles.container}>
        <View>
        <Text>
        {this.state.coins}
        </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.add_coin}
            title="Press Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.add_active_generation_value}
            title="Add Click Value"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.add_passive_generation_value}
            title="Add Passive Generation"
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
