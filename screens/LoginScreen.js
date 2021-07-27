import React, { Component } from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  NavigationRight() {
    this.props.navigation.replace("LoginScreen");
  }

  NavigationLeft() {
    this.props.navigation.replace("LoginScreen");
  }

  NavigationImageCenter() {
    this.props.navigation.replace("LoginScreen");
  }

  NavigationTextCenter() {
    this.props.navigation.replace("LoginScreen");
  }
  render() {
    return (
      <View>
        <Header
          leftIcon={false}
          leftIconAction={this.NavigationLeft.bind(this)}
          centerText={""}
          centerTextAction={this.NavigationTextCenter.bind(this)}
          centerImage={true}
          centerImageAction={this.NavigationImageCenter.bind(this)}
          righticon={false}
          rightIconAction={this.NavigationRight.bind(this)}
        />
        <Text> LoginScreen </Text>
      </View>
    );
  }
}

export default LoginScreen;
