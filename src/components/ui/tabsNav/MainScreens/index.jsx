import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { PersonalStatistics } from '../../../../screens/PersonalStatistics';
import { Main } from '../../../../screens/Main';
import { GlobalRank } from '../../../../screens/GlobalRank';
import { GlobalCountry } from '../../../../screens/GlobalCountry';
import { Trends } from '../../../../screens/Trends';
import { Calendar } from '../../../../screens/Calendar';
import { SubscriptionRenew } from '../../../../screens/SubscriptionRenew';

const Stack = createStackNavigator();

const tabs = [
  {
    id: 1,
    name: 'Main',
    component: Main,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 2,
    name: 'PersonalStatistics',
    component: PersonalStatistics,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 3,
    name: 'GlobalRank',
    component: GlobalRank,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 4,
    name: 'GlobalCountry',
    component: GlobalCountry,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 5,
    name: 'Trends',
    component: Trends,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 6,
    name: 'Calendar',
    component: Calendar,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 7,
    name: 'SubscriptionRenew',
    component: SubscriptionRenew,
    options: {
      headerShown: false,
      gestureDirection: 'vertical',
      ...TransitionPresets.ModalSlideFromBottomIOS,
      ...TransitionPresets.RevealFromBottomAndroid,
    },
  },
];

export const MainScreens = ({ initialRoute }) => {
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
