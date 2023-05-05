import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import Card from "../components/Card";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import houses from "../constants/houses";
import ListOptions from "../components/ListOptions";
import ListCategories from "../components/ListCategories";
const { width } = Dimensions.get("screen");
const HomeScreen = () => {
  console.log(houses);
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      {/* Customize status bar */}
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      {/* Header container */}
      <View style={styles.header}>
        <View>
          <Text style={{ color: COLORS.grey }}>Location</Text>
          <Text
            style={{ color: COLORS.dark, fontSize: 20, fontWeight: "bold" }}
          >
            Canada
          </Text>
        </View>
        <Image
          style={styles.profileImage}
          source={{ uri: "https://picsum.photos/200" }}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Input and sort button container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View style={styles.searchInputContainer}>
            <Feather name="search" size={25} color={COLORS.grey} />
            <TextInput placeholder="Search address, city, location" />
          </View>

          <View style={styles.sortBtn}>
            <MaterialIcons name="tune" size={25} color={COLORS.white} />
          </View>
        </View>

        {/* Render list options */}
        <ListOptions />

        {/* Render categories */}
        <ListCategories />

        {/* Render Card */}
        <FlatList
          snapToInterval={width - 20}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
          horizontal
          data={houses}
          renderItem={({ item }) => <Card house={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  sortBtn: {
    backgroundColor: COLORS.dark,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});
