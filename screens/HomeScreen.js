import React, { Component } from "react";
import Header from "../components/Header";
import {
  Platform,
  View,
  Alert,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WebView } from "react-native-webview";

var WEBVIEW_REF = "webview";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isError: false,
    };
  }

  logout = async () => {
    await AsyncStorage.removeItem("onboard");
    console.log("onboarding deleteed");
    this.props.navigation.replace("SplashScreen");
  };
  LoadingIndicatorView() {
    return (
      <ActivityIndicator
        color="#009b88"
        size="large"
        style={{ alignItems: "center", justifyContent: "center" }}
      />
    );
  }

  render() {
    //     const myScript = `
    //     document.body.style.backgroundColor = 'red';
    //     setTimeout(function() { window.alert('hi') }, 2000);
    //     true; // note: this is required, or you'll sometimes get silent failures
    //   `;
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Header
          leftIcon={true}
          leftIconAction={this.NavigationLeft.bind(this)}
          centerText={""}
          centerTextAction={this.NavigationTextCenter.bind(this)}
          centerImage={true}
          centerImageAction={this.NavigationImageCenter.bind(this)}
          righticon={true}
          rightIconAction={this.NavigationRight.bind(this)}
        />
        <View
          style={{
            flex: 1,
            padding: 0,
            margin: 0,
          }}
        >
          {/* <TouchableOpacity
            onPress={() => {
              this.logout();
            }}
          >
            <Text>Click here</Text>
          </TouchableOpacity> */}

          <WebView
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
            ref={WEBVIEW_REF}
            automaticallyAdjustContentInsets={false}
            source={{
              uri: "https://smartmongers.com/login",
              headers: {
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Origin": "*",
              },
            }}
            originWhitelist={["*"]}
            // source={{ html: "<h1>Hello world</h1>" }}
            javaScriptEnabled={true}
            //for cahse
            domStorageEnabled={true}
            // for activity
            onLoadStart={() => this.setState({ visible: true })}
            onLoad={() => this.setState({ visible: false })}
            onNavigationStateChange={this.onNavigationStateChange}
            // injectedJavaScript={myScript}
            startInLoadingState={true}
            renderLoading={this.LoadingIndicatorView}
            geolocationEnabled
            allowUniversalAccessFromFileURLs
            allowFileAccess
            onError={() => alert("Please Check Your Internet Connection")}
          />
        </View>
      </View>
    );
  }
  onNavigationStateChange = (navState) => {
    this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      url: navState.url,
      status: navState.title,
      loading: navState.loading,
      scalesPageToFit: true,
    });
  };

  NavigationRight() {
    this.refs[WEBVIEW_REF].goForward();
  }

  NavigationLeft() {
    this.refs[WEBVIEW_REF].goBack();
  }

  NavigationImageCenter() {
    this.refs[WEBVIEW_REF].reload();
  }

  NavigationTextCenter() {
    this.refs[WEBVIEW_REF].goForward();
  }
}

export default HomeScreen;
