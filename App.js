import React, { Component } from "react";
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  View,
  Text,
  JSON,
  FlatList
} from "react-native";
import { getUserInfo } from "./src/services/fetch_data.js";

export default class reactApp extends Component {
  constructor() {
    super();
    this.state = {
      coins: 0,
      active_generation_value: 1,
      passive_generation_value: 1,
      movies: []
    };

    setInterval(this.add_passive_generation, 1000);
  }

  add_coin = () => {
    this.setState(state => ({
      coins: state.coins + state.active_generation_value
    }));
  };

  add_passive_generation = () => {
    this.setState(state => ({
      coins: state.coins + state.passive_generation_value
    }));
  };

  add_active_generation_value = () => {
    this.setState(state => ({
      active_generation_value: state.active_generation_value + 1
    }));
  };

  add_passive_generation_value = () => {
    this.setState(state => ({
      passive_generation_value: state.passive_generation_value + 1
    }));
  };

  get_movies = () => {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(state => ({
          movies: responseJson.movies
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // handleSubmit = () => {
  //   getUserInfo(this.state.username).then(res => {
  //     if (res.message === "Not Found") {
  //       this.setState({
  //         error: "User not found"
  //       });
  //     } else {
  //       this.props.navigator.push({
  //         title: res.name || "No Title",
  //         passProps: { userInfo: res },
  //         component: DashboardComponent
  //       });
  //       this.setState({
  //         error: false,
  //         username: ""
  //       });
  //     }
  //   });
  // }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>{this.state.coins}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={this.add_coin} title="Press Me" />
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
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.get_movies}
            title="Get user movies"
          />
        </View>
        <FlatList
          data={this.state.movies}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={(item, index) => index}/>
        // <View>
        //   <Text>{this.state.movies}</Text>
        // </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  MainContainer: {
  flex: 1,
  margin: 10
  },
  buttonContainer: {
    margin: 20
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent("AwesomeProject", () => ButtonBasics);
