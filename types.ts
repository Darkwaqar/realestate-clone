export interface house {
  title: string;
  id: number;
  image: string;
  location: string;
  details: string;
  interiors: string;
}

import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  OnBoardScreen: undefined;
  HomeScreen: undefined;
  DetailsScreen: house;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

export type RootNavigationProps<RouteName extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, RouteName>;
