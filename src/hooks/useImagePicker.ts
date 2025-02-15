import { useState } from "react";
import { Alert, Platform, ActionSheetIOS } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useActionSheet } from "@expo/react-native-action-sheet";

const useImagePicker = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const { showActionSheetWithOptions } = useActionSheet();

  const openImagePicker = async (onImageSelect?: (uri: string) => void) => {
    if (Platform.OS !== "ios" && Platform.OS !== "android") {
      console.warn("Unsupported platform for action sheet: ", Platform.OS);
      return;
    }

    const showActionSheet = {
      ios: ActionSheetIOS.showActionSheetWithOptions,
      android: showActionSheetWithOptions,
    };

    const options = [
      "📷 Зробити фото",
      "🖼️ Вибрати з галереї",
      ...(imageUri ? ["❌ Очистити вибране фото"] : []),
      "🚫 Скасувати",
    ];
    const cancelButtonIndex = options.length - 1;

    showActionSheet[Platform.OS](
      {
        options,
        cancelButtonIndex,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          pickImage(true, onImageSelect);
        } else if (buttonIndex === 1) {
          pickImage(false, onImageSelect);
        } else if (buttonIndex === 2 && imageUri) {
          setImageUri(null);
        }
      }
    );
  };

  const pickImage = async (useCamera: boolean, onImageSelect?: (uri: string) => void) => {
    const permissionResult = useCamera
      ? await ImagePicker.requestCameraPermissionsAsync()
      : await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.status !== "granted") {
      Alert.alert("Permission Denied", "You need to allow access to continue.");
      return;
    }

    const result = useCamera
      ? await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          cameraType: ImagePicker.CameraType.front,
        })
      : await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
        });

    if (result.canceled) return;

    if (!result.assets || result.assets.length < 1) return;

    const uri = result.assets[0].uri;
    setImageUri(uri);
    onImageSelect?.(uri);
  };

  return { imageUri, openImagePicker };
};

export { useImagePicker };
