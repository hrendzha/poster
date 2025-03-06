import React from "react";
import { Image, TouchableOpacity, StyleSheet, ViewStyle, View } from "react-native";
import { COLOR_PALETTE } from "../../styles/styles";
import { useImagePicker } from "../../hooks/useImagePicker";

interface IProps {
  onImageSelect?: (imageUrl: string) => void;
  style?: ViewStyle;
}

const AvatarUploader = ({ onImageSelect, style }: IProps) => {
  const { imageUri, openImagePicker } = useImagePicker();

  const onPress = () => openImagePicker(onImageSelect);

  return (
    <TouchableOpacity onPress={onPress} style={[styles.imageContainer, style]}>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <View style={[styles.plusIcon, imageUri && { borderColor: "#E8E8E8" }]}>
        <Image
          source={
            imageUri
              ? require("../../assets/images/icons/cross.png")
              : require("../../assets/images/icons/plus.png")
          }
          style={{ width: 13, height: 13 }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 120,
    height: 120,
    backgroundColor: COLOR_PALETTE.primaryBg,
    borderRadius: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  plusIcon: {
    position: "absolute",
    right: -12,
    bottom: 14,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: COLOR_PALETTE.primary,
    backgroundColor: "#fff",
  },
});

export { AvatarUploader };
