import { initializeApp } from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Landing from "./components/auth/Landing";

const firebaseConfig = {
  apiKey: "AIzaSyCxeK9XXQUNiCZCz80sw9IhniN5eWZ7fjs",
  authDomain: "imagigram-c345f.firebaseapp.com",
  projectId: "imagigram-c345f",
  storageBucket: "imagigram-c345f.appspot.com",
  messagingSenderId: "1056126235957",
  appId: "1:1056126235957:web:6a890aee62cb319bee487c"
};

initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
