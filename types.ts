export interface house {
  title: string;
  id: string;
  image: ImageSourcePropType;
  location: string;
  details: string;
  interiors: string;
}

import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Image, ImageSourcePropType } from "react-native/types";

export type RootStackParamList = {
  OnBoardScreen: undefined;
  HomeScreen: undefined;
  ListScreen: undefined;
  DetailsScreen: house;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

export type RootNavigationProps<RouteName extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, RouteName>;
