import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationScreen } from "../../screens/RegistrationScreen";
import { LoginScreen } from "../../screens/LoginScreen";
import { Home } from "../../screens/Home";
import { RootStackParamList } from "../../types/navigation";
import { useAuth } from "../../context/AuthContext";

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Home" component={Home} />
      ) : (
        <>
          <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export { MainNavigator };
