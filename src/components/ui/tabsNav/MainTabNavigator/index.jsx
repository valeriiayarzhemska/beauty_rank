import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CustomTab } from '../CustomTab';

import { tabs } from '../../../../navigation/navList';
import { colors } from '../../../../constants/constants';

import { styles } from './style';
import { useNavigationState } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  const stylesSchema = styles();
  const navigationState = useNavigationState(state => state);

  const getNestedRouteName = state => {
    if (!state) {
      return null;
    }

    const route = state.routes[state.index];

    if (route.state) {
      return getNestedRouteName(route.state);
    }

    return route.name;
  };

  const currentRouteName = getNestedRouteName(navigationState);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          ...stylesSchema.tabBarStyle,
          display: currentRouteName === 'SubscriptionRenew' ? 'none' : 'flex',
        },
      }}
      initialRouteName="Main"
      backBehavior="history"
      detachInactiveScreens={false}
    >
      {tabs.map(tab => {
        if (tab?.icon) {
          const Icon = tab.icon;

          return (
            <Tab.Screen
              key={tab.name}
              name={tab.name}
              component={tab.component}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Icon
                    color={
                      focused ? colors.purpleColor : colors.lightPurpleColor
                    }
                    width={24}
                    height={24}
                  />
                ),
              }}
            />
          );
        }

        return (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{
              tabBarIcon: () => <CustomTab />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};
