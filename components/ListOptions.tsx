import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../constants/colors";
const { width } = Dimensions.get("screen");

const ListOptions = () => {
  const optionsList = [
    { title: "Buy a Home", img: "https://picsum.photos/200" },
    { title: "Rent a Home", img: "https://picsum.photos/200" },
  ];
  return (
    <View style={styles.optionListsContainer}>
      {optionsList.map((option, index) => (
        <View style={styles.optionsCard} key={index}>
          {/* House image */}
          <Image source={{ uri: option.img }} style={styles.optionsCardImage} />

          {/* Option title */}
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
            {option.title}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default ListOptions;

const styles = StyleSheet.create({
  optionsCard: {
    height: 210,
    width: width / 2 - 30,
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
