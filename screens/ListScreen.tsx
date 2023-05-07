import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../components/Card";
import houses from "../constants/houses";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

const ListScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      {/* <View style={styles.header}>
        <View style={styles.headerBtn}>
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            style={{ paddingLeft: 10 }}
            onPress={navigation.goBack}
          />
        </View>
      </View> */}
      <FlatList
        //   snapToInterval={width - 20}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 20 }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        // horizontal
        data={houses}
        renderItem={({ item }) => <Card house={item} />}
      />
    </SafeAreaView>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  header: {
    zIndex: 1,
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.white,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
