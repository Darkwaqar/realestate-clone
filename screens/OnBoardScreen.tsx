import React from "react";
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../constants/colors";
import { RootRouteProps, RootNavigationProps } from "../types";

const OnBoardScreen = () => {
  const navigation = useNavigation<RootNavigationProps<"OnBoardScreen">>();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />

      {/* Onboarding Image */}
      <Image
        // source={require("../../assets/onboardImage.jpg")}
        source={{ uri: "https://picsum.photos/520" }}
        style={styles.image}
      />

      {/* Indicator container */}
      <View style={styles.indicatorContainer}>
        <View style={styles.indicator} />
        <View style={styles.indicator} />
        <View style={[styles.indicator, styles.indicatorActive]} />
      </View>

      {/* Title and text container */}
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        {/* Title container */}
        <View>
          <Text style={styles.title}>Find your</Text>
          <Text style={styles.title}>sweet home</Text>
        </View>

        {/* Text container */}
        <View style={{ marginTop: 10 }}>
          <Text style={styles.textStyle}>
            Schedule visits in just a few clicks
          </Text>
          <Text style={styles.textStyle}>visit in just a few clicks</Text>
        </View>
      </View>

      {/* Button container */}
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          paddingBottom: 40,
        }}
      >
        {/* button */}
        <Pressable onPress={() => navigation.navigate("HomeScreen")}>
          <View style={styles.btn}>
            <Text style={{ color: "white" }}>Get Started</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  image: {
    height: 520,
    maxHeight: "50%",
    width: "100%",
    borderBottomLeftRadius: 100,
  },
  indicatorContainer: {
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  indicatorActive: {
    backgroundColor: COLORS.dark,
  },
  btn: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: "black",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 32, fontWeight: "bold" },
  textStyle: { fontSize: 16, color: COLORS.grey },
});
