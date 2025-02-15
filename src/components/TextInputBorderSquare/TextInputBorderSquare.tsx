import { useState } from "react";
import { TextInput, StyleSheet, TextInputProps, Text, Pressable, View } from "react-native";
import { COLOR_PALETTE } from "../../styles/styles";

interface IProps extends TextInputProps {
  showToggleSecureTextEntry?: boolean;
}

const TextInputBorderSquare = ({
  showToggleSecureTextEntry = false,
  ...textInputProps
}: IProps) => {
  const [focus, setFocus] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(showToggleSecureTextEntry);

  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);
  const onSecureTextShowPress = () => setSecureTextEntry(prev => !prev);

  const inputStyles = {
    ...styles.input,
    ...(showToggleSecureTextEntry ? { paddingRight: 100 } : {}),
    ...(focus ? styles.inputOnFocus : {}),
  };

  return (
    <View>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#BDBDBD"
        style={inputStyles}
        onFocus={onFocus}
        onBlur={onBlur}
        {...textInputProps}
      />
      {showToggleSecureTextEntry && (
        <Pressable style={styles.toggleSecureTextWrap} onPress={onSecureTextShowPress}>
          <Text style={styles.toggleSecureText}>Показати</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    backgroundColor: COLOR_PALETTE.primaryBg,
  },
  inputOnFocus: {
    borderColor: COLOR_PALETTE.primary,
    backgroundColor: "#fff",
  },
  toggleSecureTextWrap: {
    position: "absolute",
    top: 17,
    right: 16,
  },
  toggleSecureText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: COLOR_PALETTE.secondary,
  },
});

export { TextInputBorderSquare };
