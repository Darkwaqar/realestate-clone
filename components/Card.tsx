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
const { width } = Dimensions.get("screen");
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Card = ({ house }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      activeOpacity={0.8}
      onPress={() => navigation.navigate("DetailsScreen", house)}
    >
      <View style={styles.card}>
        {/* House image */}
        <Image source={{ uri: house.image }} style={styles.cardImage} />
        <View style={{ marginTop: 10 }}>
          {/* Title and price container */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {house.title}
            </Text>
            <Text
              style={{ fontWeight: "bold", color: COLORS.blue, fontSize: 16 }}
            >
              $1,500
            </Text>
          </View>

          {/* Location text */}

          <Text style={{ color: COLORS.grey, fontSize: 14, marginTop: 5 }}>
            {house.location}
          </Text>

          {/* Facilities container */}
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <View style={styles.facility}>
              <MaterialIcons name="hotel" size={18} color="black" />
              <Text style={styles.facilityText}>2</Text>
            </View>
            <View style={styles.facility}>
              <MaterialIcons name="bathtub" size={18} color="black" />
              <Text style={styles.facilityText}>2</Text>
            </View>
            <View style={styles.facility}>
              <MaterialIcons name="aspect-ratio" size={18} color="black" />
              <Text style={styles.facilityText}>100m</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 250,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 15,
  },
  facility: { flexDirection: "row", marginRight: 15 },
  facilityText: { marginLeft: 5, color: COLORS.grey },
});
