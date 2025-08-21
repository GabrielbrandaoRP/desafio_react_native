import Home from '@/pages/home';
import LogOut from '@/pages/logout';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function BottomRoutes() {

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="LogOut"
        component={LogOut}
      />

    </Tab.Navigator>
  )
}
