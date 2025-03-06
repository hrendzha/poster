import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { sectionStyles, formStyles, COLOR_PALETTE } from "../styles/styles";
import { TextInputBorderSquare } from "../components/TextInputBorderSquare/TextInputBorderSquare";
import { KeyboardAvoidingViewCustom } from "../components/KeyboardAvoidingViewCustom/KeyboardAvoidingViewCustom";
import { CustomButton } from "../components/CustomButton/CustomButton";
import { useAuth } from "../context/AuthContext";
import { RootStackNavigationProp } from "../types/navigation";

interface IProps {
  navigation: RootStackNavigationProp<"LoginScreen">;
}

const LoginScreen = ({ navigation }: IProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const onEmailChange = (text: string) => setEmail(text);
  const onPasswordChange = (text: string) => setPassword(text);

  const onLoginPress = () => {
    login({
      email,
    });
  };

  const navigateToRegisterScreen = () => navigation.replace("RegistrationScreen");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground style={styles.bgImg} source={require("../assets/images/main-bg.png")}>
        <KeyboardAvoidingViewCustom>
          <ScrollView keyboardShouldPersistTaps="handled" style={{ overflow: "visible" }}>
            <View
              style={{ ...styles.contentWrap, ...sectionStyles.section }}
              pointerEvents="box-none"
            >
              <Text style={sectionStyles.title}>Увійти</Text>

              <View style={{ ...styles.formElementsWrap, ...formStyles.formElementsWrap }}>
                <TextInputBorderSquare
                  placeholder="Адреса електронної пошти"
                  autoComplete="email"
                  inputMode="email"
                  onChangeText={onEmailChange}
                />
                <TextInputBorderSquare
                  placeholder="Пароль"
                  autoComplete="password-new"
                  textContentType="newPassword"
                  showToggleSecureTextEntry
                  onChangeText={onPasswordChange}
                />
              </View>

              <CustomButton title="Увійти" style={styles.btn} onPress={onLoginPress} />

              <TouchableOpacity onPress={navigateToRegisterScreen}>
                <Text style={styles.additionalText}>Немає акаунту? Зареєструватися</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingViewCustom>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    justifyContent: "flex-end",
  },
  contentWrap: {
    paddingTop: 32,
    paddingBottom: 144,
  },
  formElementsWrap: {
    marginBottom: 43,
  },
  btn: {
    marginBottom: 16,
  },
  additionalText: {
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    color: COLOR_PALETTE.secondary,
    textAlign: "center",
  },
});

export { LoginScreen };
