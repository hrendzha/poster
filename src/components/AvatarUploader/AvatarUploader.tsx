import React from "react";
import { Image, TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 120,
    height: 120,
    backgroundColor: COLOR_PALETTE.primaryBg,
    borderRadius: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export { AvatarUploader };
