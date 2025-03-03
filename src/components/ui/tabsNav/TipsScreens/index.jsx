import { createStackNavigator } from '@react-navigation/stack';

import { Tips } from '../../../../screens/Tips';

const Stack = createStackNavigator();

const tabs = [
  {
    id: 1,
    name: 'Tips',
    component: Tips,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
];

export const TipsScreens = ({ initialRoute }) => {
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
