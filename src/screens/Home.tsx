import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg";
import { RootTabParamList } from "../types/navigation";
import { PostsScreen } from "./PostsScreen";
import { CreatePostScreen } from "./CreatePostScreen";
import { ProfileScreen } from "./ProfileScreen";
import { Platform } from "react-native";
import { COLOR_PALETTE } from "../styles/styles";

const Tab = createBottomTabNavigator<RootTabParamList>();

const getScreenOptions = ({
  route,
}: {
  route: { name: keyof RootTabParamList };
}): BottomTabNavigationOptions => ({
  tabBarIcon: ({ focused, color, size }) => {
    if (route.name === "PostsScreen") {
      return (
        <Svg width={24} height={24} fill="none">
          <Path fill="#fff" d="M0 0h24v24H0z" />
          <Path
            stroke={focused ? COLOR_PALETTE.primary : "#212121"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.8}
            d="M3 3h7v7H3V3ZM14 3h7v7h-7V3ZM14 14h7v7h-7v-7ZM3 14h7v7H3v-7Z"
            clipRule="evenodd"
          />
        </Svg>
      );
    }

    if (route.name === "CreatePostScreen") {
      return (
        <Svg width={70} height={40} fill="none">
          <G clipPath="url(#a)">
            <Rect width={70} height={40} fill="#FF6C00" rx={20} />
            <Path
              fill="#fff"
              fillRule="evenodd"
              d="M35.5 13.5h-1v6h-6v1h6v6h1v-6h6v-1h-6v-6Z"
              clipRule="evenodd"
            />
          </G>
          <Defs>
            <ClipPath id="a">
              <Path fill="#fff" d="M0 0h70v40H0z" />
            </ClipPath>
          </Defs>
        </Svg>
      );
    }

    if (route.name === "ProfileScreen") {
      return (
        <Svg width={24} height={24} fill="none">
          <Path
            stroke={focused ? COLOR_PALETTE.primary : "#212121"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.8}
            d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
          />
          <Path
            stroke={focused ? COLOR_PALETTE.primary : "#212121"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.8}
            d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            clipRule="evenodd"
          />
        </Svg>
      );
    }
  },
  tabBarStyle: {
    ...(route.name === "CreatePostScreen" ? { display: "none" } : {}),
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#BDBDBD",
    paddingTop: 10,
    ...Platform.select({
      android: { paddingBottom: 50 },
    }),
  },
  headerShown: false,
  tabBarShowLabel: false,
});

const Home = () => {
  return (
    <Tab.Navigator screenOptions={getScreenOptions}>
      <Tab.Screen name="PostsScreen" component={PostsScreen} />
      <Tab.Screen name="CreatePostScreen" component={CreatePostScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export { Home };
