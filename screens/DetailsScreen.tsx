import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import COLORS from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RootNavigationProps, RootRouteProps, house } from "../types";
const { width } = Dimensions.get("screen");
const DetailsScreen = () => {
  const navigation = useNavigation<RootNavigationProps<"DetailsScreen">>();
  const route = useRoute<RootRouteProps<"DetailsScreen">>();
  const house = route.params;

  const InteriorCard = ({ interior }: { interior: string }) => {
    return <Image source={{ uri: interior }} style={styles.interiorImage} />;
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: COLORS.white, position: "relative" }}
    >
      <View style={styles.header}>
        <View style={styles.headerBtn}>
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            onPress={navigation.goBack}
          />
        </View>
        <View style={styles.headerBtn}>
          <MaterialIcons name="favorite" size={20} color={COLORS.red} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* House image */}

        <View style={styles.backgroundImageContainer}>
          <ImageBackground
            style={styles.backgroundImage}
            source={{ uri: house.image }}
          ></ImageBackground>

          {/* Virtual Tag View */}
          <View style={styles.virtualTag}>
            <Text style={{ color: COLORS.white }}>Virtual tour</Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          {/* Name and rating view container */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {house.title}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.ratingTag}>
                <Text style={{ color: COLORS.white }}>4.8</Text>
              </View>
              <Text style={{ fontSize: 13, marginLeft: 5 }}>155 ratings</Text>
            </View>
          </View>

          {/* Location text */}
          <Text style={{ fontSize: 16, color: COLORS.grey }}>
            {house.location}
          </Text>

          {/* Facilities container */}
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <View style={styles.facility}>
              <MaterialIcons name="hotel" size={18} />
              <Text style={styles.facilityText}>2</Text>
            </View>
            <View style={styles.facility}>
              <MaterialIcons name="bathtub" size={18} />
              <Text style={styles.facilityText}>2</Text>
            </View>
            <View style={styles.facility}>
              <MaterialIcons name="aspect-ratio" size={18} />
              <Text style={styles.facilityText}>100m area</Text>
            </View>
          </View>
          <Text style={{ marginTop: 20, color: COLORS.grey }}>
            {house.details}
          </Text>

          {/* Interior list */}
          <FlatList
            contentContainerStyle={{ marginTop: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, key) => key.toString()}
            data={house.interiors}
            renderItem={({ item }) => <InteriorCard interior={item} />}
          />

          {/* footer container */}
          <View style={styles.footer}>
            <View>
              <Text
                style={{
                  color: COLORS.blue,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                $1,500
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.grey,
                  fontWeight: "bold",
                }}
              >
                Total Price
              </Text>
            </View>
            <View style={styles.bookNowBtn}>
              <Text style={{ color: COLORS.white }}>Book Now</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  backgroundImageContainer: {
    elevation: 20,
    // marginHorizontal: 20,
    // marginTop: 20,
    alignItems: "center",
    height: 350,
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    // borderRadius: 20,
    overflow: "hidden",
  },
  header: {
    zIndex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 30,
    flex: 1,
    paddingVertical: 20,
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
  ratingTag: {
    height: 30,
    width: 35,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  virtualTag: {
    top: -20,
    width: 120,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.dark,
    justifyContent: "center",
    alignItems: "center",
  },
  interiorImage: {
    width: width / 3 - 20,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  footer: {
    height: 70,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  bookNowBtn: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.dark,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  detailsContainer: { flex: 1, paddingHorizontal: 20, marginTop: 40 },
  facility: { flexDirection: "row", marginRight: 15 },
  facilityText: { marginLeft: 5, color: COLORS.grey },
});
