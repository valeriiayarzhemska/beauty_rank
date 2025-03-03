import { createStackNavigator } from '@react-navigation/stack';

import { UploadAnalizePhoto } from '../../../../screens/UploadAnalizePhoto';
import { AnalizePhoto } from '../../../../screens/AnalizePhoto';
import { Rating } from '../../../../screens/Rating';
import { RatingInfo } from '../../../../screens/RatingInfo';

const Stack = createStackNavigator();

const tabs = [
  {
    id: 1,
    name: 'UploadAnalizePhoto',
    component: UploadAnalizePhoto,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 2,
    name: 'AnalizePhoto',
    component: AnalizePhoto,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 3,
    name: 'Rating',
    component: Rating,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 3,
    name: 'RatingInfo',
    component: RatingInfo,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
];

export const PhotoAnalysisScreens = ({ initialRoute }) => {
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
