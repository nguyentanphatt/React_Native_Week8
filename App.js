
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen02 from './components/Screen02';
import Screen01 from './components/Screen01';
import Screen03 from './components/Screen03';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Screen01' component={Screen01} />
        <Stack.Screen name='Screen02' component={Screen02} />
        <Stack.Screen name='Screen03' component={Screen03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

