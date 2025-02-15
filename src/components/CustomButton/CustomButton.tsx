import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from "react-native";
import { COLOR_PALETTE } from "../../styles/styles";

interface IProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  isLoading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton = ({
  title,
  onPress,
  isLoading = false,
  disabled = false,
  style,
  textStyle,
}: IProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, (disabled || isLoading) && styles.disabledButton, style]}
      onPress={isLoading || disabled ? undefined : onPress}
      disabled={isLoading || disabled}
    >
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR_PALETTE.primary,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  disabledButton: {
    opacity: 0.4,
  },
  text: {
    fontFamily: "Roboto-Regular",
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
  },
});

export { CustomButton };
