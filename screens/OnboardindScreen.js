import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";

import { Colorbasic } from "../constant/Themez";

const Dots = ({ selected }) => {
  let backgroundColor;
  let width;
  let height;
  let borderRadius;
  backgroundColor = selected ? "rgba(100,30,209, 1)" : "rgba(100,30,209, 0.3)";
  width = selected ? 25 : 15;
  height = selected ? 10 : 5;
  borderRadius = selected ? 20 : 6;
  return (
    <View
      style={{
        top: -80,
        borderRadius,
        width,
        height,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity
    style={{
      marginHorizontal: 15,
      // backgroundColor: BROWNCOLOR.btnBackGround,
      borderWidth: 1,
      width: 70,
      height: 40,
      borderRadius: 20,
      justifyContent: "center",
    }}
    {...props}
  >
    <Text
      style={{
        fontSize: 16,
        alignSelf: "center",
        fontWeight: "bold",
        // color: "#fff",
      }}
    >
      Skip
    </Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity
    style={{
      marginHorizontal: 15,
      backgroundColor: Colorbasic.btnBackGround,
      width: 70,
      height: 40,
      borderRadius: 20,
      justifyContent: "center",
    }}
    {...props}
  >
    <Text
      style={{
        fontSize: 16,
        alignSelf: "center",
        fontWeight: "bold",
        color: "#fff",
      }}
    >
      Next
    </Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity
    style={{
      marginHorizontal: 15,
      backgroundColor: Colorbasic.btnBackGround,
      width: 70,
      height: 40,
      borderRadius: 20,
      justifyContent: "center",
    }}
    {...props}
  >
    <Text
      style={{
        fontSize: 16,
        alignSelf: "center",
        fontWeight: "bold",
        color: "#fff",
      }}
    >
      Done
    </Text>
  </TouchableOpacity>
);

class OnboardindScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Onboarding
          bottomBarColor="#f8f7fd"
          allowFontScalingText={true}
          imageContainerStyles={styles.imageon}
          containerStyles={styles.containerStyles}
          titleStyles={styles.titleStyles}
          subTitleStyles={styles.subTitleStyles}
          SkipButtonComponent={Skip}
          NextButtonComponent={Next}
          DoneButtonComponent={Done}
          showPagination={true}
          DotComponent={Dots}
          // onSkip={() => {}}
          onDone={() => this.props.navigation.replace("LoginScreen")}
          skipToPage={2}
          pages={[
            {
              backgroundColor: "#f8f7fd",
              image: (
                <Image
                  style={{
                    borderRadius: 20,
                    height: 150,
                    width: 150,
                  }}
                  resizeMode="contain"
                  source={require("../assets/images/onbording1.png")}
                />
              ),
              title: "Welcome to Pet Care",
              subtitle:
                "All kind of services for your pet in one place \n All kind of services for your pet in one place",
            },
            {
              backgroundColor: "#f8f7fd",
              image: (
                <Image
                  style={{ borderRadius: 20, height: 150, width: 150 }}
                  resizeMode="contain"
                  source={require("../assets/images/onbording2.png")}
                />
              ),
              title: (
                <Text
                  style={[
                    styles.titleStyles,
                    {
                      // alignSelf: "flex-start",
                      // paddingLeft: 20,
                    },
                  ]}
                >
                  Proven Experts
                </Text>
              ),
              subtitle: (
                <Text style={[styles.subTitleStyles, {}]}>
                  All kind of services for your pet in one place
                </Text>
              ),
            },
            {
              backgroundColor: "#f8f7fd",
              image: (
                <Image
                  style={{
                    borderRadius: 20,
                    // right: 20,
                    height: 150,
                    width: 150,
                  }}
                  resizeMode="contain"
                  source={require("../assets/images/onbording3.png")}
                />
              ),
              title: "Become The Star",
              subtitle:
                "All kind of services for your pet in one place \n All kind of services for your pet in one place",
            },
          ]}
        />
      </View>
    );
  }
}

export default OnboardindScreen;
const styles = StyleSheet.create({
  containerStyles: {},
  imageon: {
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },
  titleStyles: {
    fontSize: 24,
    fontWeight: "600",
  },
  subTitleStyles: {},
});
