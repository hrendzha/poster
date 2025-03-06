// types/navigation.ts
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  Home: undefined;
  RegistrationScreen: undefined;
  LoginScreen: undefined;
};

// Helper types for navigation and route props
export type RootStackNavigationProp<T extends keyof RootStackParamList> = StackNavigationProp<
  RootStackParamList,
  T
>;
export type RootStackRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

export type RootTabParamList = {
  PostsScreen: undefined;
  CreatePostScreen: undefined;
  ProfileScreen: undefined;
};
