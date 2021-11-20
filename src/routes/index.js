import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Details from '../screens/Details';

const AppStack = createNativeStackNavigator();

export default function Routes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Details" component={Details} />
    </AppStack.Navigator>
  );
}