import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { sectionStyles, formStyles, COLOR_PALETTE } from "../styles/styles";
import { TextInputBorderSquare } from "../components/TextInputBorderSquare/TextInputBorderSquare";
import { KeyboardAvoidingViewCustom } from "../components/KeyboardAvoidingViewCustom/KeyboardAvoidingViewCustom";
import { CustomButton } from "../components/CustomButton/CustomButton";
import { AvatarUploader } from "../components/AvatarUploader/AvatarUploader";

const RegistrationScreen = () => {
  const [loginName, setLoginName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginNameChange = (text: string) => setLoginName(text);
  const onEmailChange = (text: string) => setEmail(text);
  const onPasswordChange = (text: string) => setPassword(text);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground style={styles.bgImg} source={require("../../assets/images/main-bg.png")}>
        <KeyboardAvoidingViewCustom>
          <ScrollView keyboardShouldPersistTaps="handled" style={{ overflow: "visible" }}>
            <View
              style={{ ...styles.contentWrap, ...sectionStyles.section }}
              pointerEvents="box-none"
            >
              <AvatarUploader style={styles.avatarUploader} />

              <Text style={sectionStyles.title}>Реєстрація</Text>

              <View style={{ ...styles.formElementsWrap, ...formStyles.formElementsWrap }}>
                <TextInputBorderSquare placeholder="Логін" onChangeText={onLoginNameChange} />
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

              <CustomButton
                title="Зареєструватися"
                style={styles.btn}
                onPress={() => {
                  Alert.alert(`loginName: ${loginName}; email: ${email}; password: ${password}`);
                }}
              />

              <TouchableOpacity>
                <Text style={styles.additionalText}>Вже є акаунт? Увійти</Text>
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
    paddingTop: 92,
    paddingBottom: 78,
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
  avatarUploader: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
  },
});

export { RegistrationScreen };
