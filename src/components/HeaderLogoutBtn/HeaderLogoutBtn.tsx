import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useAuth } from "../../context/AuthContext";

const HeaderLogoutBtn = () => {
  const { logout } = useAuth();

  return (
    <TouchableOpacity onPress={logout} style={styles.btn}>
      <Svg width={24} height={24} fill="none">
        <Path
          stroke="#BDBDBD"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5M17 16l4-4-4-4M21 12H9"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});

export { HeaderLogoutBtn };
