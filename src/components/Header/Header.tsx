import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { COLOR_PALETTE } from "../../styles/styles";

interface IProps {
  title: string;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  showGoBack?: boolean;
}

const Header = ({ title, leftAction, rightAction, showGoBack }: IProps) => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  let leftElement: React.ReactNode;

  if (leftAction) {
    leftElement = leftAction;
  } else if (showGoBack && navigation.canGoBack()) {
    leftElement = (
      <TouchableOpacity onPress={goBack} style={styles.backBtn}>
        <Svg width={24} height={24} fill="none">
          <Path
            stroke="#212121"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.8}
            d="M20 12H4M10 18l-6-6 6-6"
          />
        </Svg>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.header}>
      <View style={styles.sideContainer}>{leftElement}</View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.sideContainer}>{rightAction}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 44,
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
  },
  sideContainer: {
    width: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    fontWeight: 500,
    color: COLOR_PALETTE.textPrimary,
    flex: 1,
    textAlign: "center",
  },
  backBtn: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});

export { Header };
