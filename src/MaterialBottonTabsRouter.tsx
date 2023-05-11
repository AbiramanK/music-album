import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {HomeContainer, ProfileContainer} from './containers';
import {RootMaterialBottomTabsParams} from './types/navigation';

const Tab = createMaterialBottomTabNavigator<RootMaterialBottomTabsParams>();

function MainBottomTabs() {
  return (
    <Tab.Navigator shifting={true} initialRouteName={'Home'}>
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileContainer}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Ionicons name="person-circle-sharp" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainBottomTabs;
