import { ReactNode } from "react";
import { KeyboardAvoidingView, KeyboardAvoidingViewProps, Platform } from "react-native";

interface IProps extends KeyboardAvoidingViewProps {
  children: ReactNode;
}

const KeyboardAvoidingViewCustom = ({ children, ...props }: IProps) => {
  return (
    <KeyboardAvoidingView {...props} behavior={Platform.OS == "ios" ? "padding" : "height"}>
      {children}
    </KeyboardAvoidingView>
  );
};

export { KeyboardAvoidingViewCustom };
