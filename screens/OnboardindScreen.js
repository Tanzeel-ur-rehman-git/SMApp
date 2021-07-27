// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
// } from "react-native";
// import Onboarding from "react-native-onboarding-swiper";

// const Dots = ({ selected }) => {
//   let backgroundColor;
//   let width;
//   let height;
//   let borderRadius;
//   backgroundColor = selected ? "rgba(244,153,79, 1)" : "rgba(244,153,79, 0.3)";
//   width = selected ? 5 : 5;
//   height = selected ? 5 : 10;
//   borderRadius = selected ? 20 : 6;
//   return (
//     <View
//       style={{
//         top: -80,
//         borderRadius,
//         width,
//         height,
//         marginHorizontal: 3,
//         backgroundColor,
//       }}
//     />
//   );
// };

// const Skip = ({ ...props }) => (
//   <TouchableOpacity
//     style={{
//       marginHorizontal: 45,
//       // backgroundColor: BROWNCOLOR.btnBackGround,
//       borderWidth: 1,
//       width: 70,
//       height: 40,
//       borderRadius: 20,
//       justifyContent: "center",
//     }}
//     {...props}
//   >
//     <Text
//       style={{
//         fontSize: 16,
//         alignSelf: "center",
//         fontWeight: "bold",
//         // color: "#fff",
//       }}
//     >
//       Skip
//     </Text>
//   </TouchableOpacity>
// );

// const Next = ({ ...props }) => (
//   <TouchableOpacity
//     style={{
//       marginHorizontal: 45,
//       backgroundColor: BROWNCOLOR.btnBackGround,
//       width: 70,
//       height: 40,
//       borderRadius: 20,
//       justifyContent: "center",
//     }}
//     {...props}
//   >
//     <Text
//       style={{
//         fontSize: 16,
//         alignSelf: "center",
//         fontWeight: "bold",
//         color: "#fff",
//       }}
//     >
//       Next
//     </Text>
//   </TouchableOpacity>
// );

// const Done = ({ ...props }) => (
//   <TouchableOpacity
//     style={{
//       marginHorizontal: 45,
//       backgroundColor: BROWNCOLOR.btnBackGround,
//       width: 70,
//       height: 40,
//       borderRadius: 20,
//       justifyContent: "center",
//     }}
//     {...props}
//   >
//     <Text
//       style={{
//         fontSize: 16,
//         alignSelf: "center",
//         fontWeight: "bold",
//         color: "#fff",
//       }}
//     >
//       Done
//     </Text>
//   </TouchableOpacity>
// );

// class OnboardindScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Onboarding
//           bottomBarColor="#f8f7fd"
//           allowFontScalingText={true}
//           imageContainerStyles={styles.imageon}
//           containerStyles={styles.containerStyles}
//           titleStyles={styles.titleStyles}
//           subTitleStyles={styles.subTitleStyles}
//           SkipButtonComponent={Skip}
//           NextButtonComponent={Next}
//           DoneButtonComponent={Done}
//           showPagination={true}
//           DotComponent={Dots}
//           // onSkip={() => {}}
//           onDone={() => this.props.navigation.replace("LoginScreen")}
//           skipToPage={2}
//           pages={[
//             {
//               backgroundColor: "#f8f7fd",
//               image: (
//                 <Image
//                   style={{ borderRadius: 20 }}
//                   resizeMode="contain"
//                   source={require("../assets/images/onbording1.png")}
//                 />
//               ),
//               title: "Welcome to Pet Care",
//               subtitle:
//                 "All kind of services for your pet in one place \n All kind of services for your pet in one place",
//             },
//             {
//               backgroundColor: "#f8f7fd",
//               image: (
//                 <Image
//                   style={{ left: 3, borderRadius: 20 }}
//                   resizeMode="contain"
//                   source={require("../assets/images/onbording2.png")}
//                 />
//               ),
//               title: (
//                 <Text style={[styles.titleStyles, { left: 20 }]}>
//                   Proven Experts
//                 </Text>
//               ),
//               subtitle: (
//                 <Text
//                   style={[styles.subTitleStyles, { left: 20, marginTop: 10 }]}
//                 >
//                   All kind of services for your pet in one place
//                 </Text>
//               ),
//             },
//             {
//               backgroundColor: "#f8f7fd",
//               image: (
//                 <Image
//                   style={{ borderRadius: 20, right: 20 }}
//                   resizeMode="contain"
//                   source={require("../assets/images/onbording3.png")}
//                 />
//               ),
//               title: "Become The Star",
//               subtitle:
//                 "All kind of services for your pet in one place \n All kind of services for your pet in one place",
//             },
//           ]}
//         />
//       </View>
//     );
//   }
// }

// export default OnboardindScreen;
// const styles = StyleSheet.create({
//   containerStyles: {
//     // backgroundColor: "gray",
//   },
//   imageon: {
//     paddingLeft: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0.5, height: 0.5 },
//     shadowOpacity: 0.5,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   titleStyles: {
//     fontSize: 30,
//     fontWeight: "bold",
//   },
//   subTitleStyles: {
//     fontSize: 15,
//   },
// });

import React, { Component } from "react";
import { View, Text } from "react-native";

class OnboardindScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> OnboardindScreen </Text>
      </View>
    );
  }
}

export default OnboardindScreen;
