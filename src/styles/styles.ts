import { StyleSheet } from "react-native";

export const SECTION_PADDINGS = 16;

const COLOR_PALETTE = {
  primary: "#FF6C00",
  secondary: "#1B4371",
  primaryBg: "#f6f6f6",
  textPrimary: "#212121",
};

const sectionStyles = StyleSheet.create({
  section: {
    paddingHorizontal: SECTION_PADDINGS,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
  title: {
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: "500",
    color: COLOR_PALETTE.textPrimary,
    textAlign: "center",
  },
});

const formStyles = StyleSheet.create({
  formElementsWrap: {
    gap: 16,
  },
});

export { sectionStyles, formStyles, COLOR_PALETTE };
