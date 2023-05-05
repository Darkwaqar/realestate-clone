import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../constants/colors";
const categoryList = ["Popular", "Recommended", "Nearest"];

const ListCategories = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  return (
    <View style={styles.categoryListContainer}>
      {categoryList.map((category, index) => (
        <Pressable key={index} onPress={() => setSelectedCategoryIndex(index)}>
          <Text
            style={[
              styles.categoryListText,
              index == selectedCategoryIndex && styles.activeCategoryListText,
            ]}
          >
            {category}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default ListCategories;

const styles = StyleSheet.create({
  categoryListText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 5,
    color: COLORS.grey,
  },
  activeCategoryListText: {
    color: COLORS.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    paddingHorizontal: 40,
  },
});
