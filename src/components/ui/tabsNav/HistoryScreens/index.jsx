import { createStackNavigator } from '@react-navigation/stack';

import { History } from '../../../../screens/History';

const Stack = createStackNavigator();

const tabs = [
  {
    id: 1,
    name: 'History',
    component: History,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
];

export const HistoryScreens = ({ initialRoute }) => {
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
