import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/Header/Header";

const CreatePostScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title="Створити публікацію" showGoBack />
      <Text>CreatePostScreen!</Text>
    </SafeAreaView>
  );
};

export { CreatePostScreen };
