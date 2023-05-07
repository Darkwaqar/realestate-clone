import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationProps } from "../types";
const { width } = Dimensions.get("screen");

const ListOptions = () => {
  const navigation = useNavigation<RootNavigationProps<"HomeScreen">>();
  const optionsList = [
    { title: "Buy a Home", img: require("../assets/buy.jpg") },
    { title: "Rent a Home", img: require("../assets/rent.jpg") },
  ];
  return (
    <Pressable onPress={() => navigation.navigate("ListScreen")}>
      <View style={styles.optionListsContainer}>
        {optionsList.map((option, index) => (
          <View style={styles.optionsCard} key={index}>
            {/* House image */}
            <Image source={option.img} style={styles.optionsCardImage} />

            {/* Option title */}
            <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
              {option.title}
            </Text>
          </View>
        ))}
      </View>
    </Pressable>
  );
};

export default ListOptions;

const styles = StyleSheet.create({
  optionsCard: {
    height: 210,
    width: width / 2 - 30,
    // maxWidth: "400",
    elevation: 15,
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: "100%",
  },
  optionListsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
