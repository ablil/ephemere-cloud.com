import { useFonts } from "expo-font";
import { Text } from "react-native";
import AndroidSafeAreaView from "./app/common/AndroidSafeAreaView";
import GetStarted from "./app/screens/GetStarted";
import MainScreen from "./app/screens/MainScreen";
import UploadScreen from "./app/screens/UploadScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Fredoka: require("./assets/fonts/Fredoka.ttf"),
  });

  if (!fontsLoaded) return <Text>loading ...</Text>;
  return (
    <AndroidSafeAreaView>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="getstarted"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="getstarted" component={GetStarted} />
          <Stack.Screen name="main" component={MainScreen} />
          <Stack.Screen name="upload" component={UploadScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AndroidSafeAreaView>
  );
}
