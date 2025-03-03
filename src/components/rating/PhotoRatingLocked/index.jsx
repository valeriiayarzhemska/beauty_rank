import { Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useSelector } from 'react-redux';
import { selectPhotoToAnalize } from '../../../store/redux/features/dashboard/dashboardSelectors';

import Score from '../../../assets/images/locked-rating.png';

import { styles } from './style';

export const PhotoRatingLocked = () => {
  const stylesSchema = styles();

  const userPhotoToAnalize = useSelector(selectPhotoToAnalize);

  return (
    <View style={stylesSchema.container}>
      <View style={stylesSchema.imageContainer}>
        <LinearGradient
          colors={['#8A6EDA', '#A16EDA', '#BE72DD', '#EBB1EB']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={stylesSchema.gradientBorder}
        >
          <Image
            source={{ uri: userPhotoToAnalize?.uri }}
            style={stylesSchema.image}
          />
        </LinearGradient>
      </View>

      <View style={stylesSchema.scoreContainer}>
        <Image
          source={Score}
          style={stylesSchema.image}
        />
      </View>
    </View>
  );
};
