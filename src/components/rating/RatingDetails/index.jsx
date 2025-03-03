import { View } from 'react-native';

import { RatingDetail } from '../RatingDetail';

import { styles } from './style';

export const RatingDetails = ({ analysis = false, photoAnalizeData = {} }) => {
  const stylesSchema = styles();

  const photoData = analysis ? analysis : photoAnalizeData;

  const beautyScores = [
    { feature: 'Symmetry', score: photoData.symmetry },
    { feature: 'Proportions', score: photoData.proportions },
    { feature: 'Eye Expression', score: photoData.eyeExpression },
    { feature: 'Smile', score: photoData.smile },
    { feature: 'Skin Smoothness', score: photoData.skinSmoothness },
    {
      feature: 'Harmony of Features',
      score: photoData.harmonyOfFeatures,
    },
  ];

  return (
    <View style={stylesSchema.container}>
      <View style={stylesSchema.scoreContainer}>
        {beautyScores.map((item, index) => {
          return (
            <RatingDetail
              key={index}
              item={item}
            />
          );
        })}
      </View>
    </View>
  );
};
