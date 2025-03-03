import { createStackNavigator } from '@react-navigation/stack';

import { Profile } from '../../../../screens/Profile';
import { EditQuestionnaire } from '../../../../screens/EditQuestionnaire';
import { EditAccount } from '../../../../screens/EditAccount';
import { BeautyPlan } from '../../../../screens/BeautyPlan';
import { LogOut } from '../../../../screens/LogOut';
import { DeleteAccount } from '../../../../screens/DeleteAccount';

const Stack = createStackNavigator();

const tabs = [
  {
    id: 1,
    name: 'Profile',
    component: Profile,
    options: {
      headerShown: false,
      animationTypeForReplace: 'push',
      animation: 'slide_from_right',
    },
  },
  {
    id: 2,
    name: 'EditQuestionnaire',
    component: EditQuestionnaire,
    options: {
      headerShown: false,
      animationTypeForReplace: 'push',
      animation: 'slide_from_right',
    },
  },
  {
    id: 3,
    name: 'EditAccount',
    component: EditAccount,
    options: {
      headerShown: false,
      animationTypeForReplace: 'push',
      animation: 'slide_from_right',
    },
  },
  {
    id: 4,
    name: 'BeautyPlan',
    component: BeautyPlan,
    options: {
      headerShown: false,
      animationTypeForReplace: 'push',
      animation: 'slide_from_right',
    },
  },
  {
    id: 5,
    name: 'LogOut',
    component: LogOut,
    options: {
      headerShown: false,
      animationTypeForReplace: 'push',
      animation: 'slide_from_right',
    },
  },
  {
    id: 6,
    name: 'DeleteAccount',
    component: DeleteAccount,
    options: {
      headerShown: false,
      animationTypeForReplace: 'push',
      animation: 'slide_from_right',
    },
  },
];

export const ProfileScreens = ({ initialRoute }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={initialRoute}
    >
      {tabs.map(screen => {
        return (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        );
      })}
    </Stack.Navigator>
  );
};
