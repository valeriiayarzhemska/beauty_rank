import { useRef } from 'react';
import { View, Animated } from 'react-native';

import { WelcomeCard } from '../WelcomeCard';

import CardImage1 from '../../../assets/images/card1.png';
import CardImage2 from '../../../assets/images/card2.png';
import CardImage3 from '../../../assets/images/card3.png';
import CardImage4 from '../../../assets/images/card4.png';
import CardImage5 from '../../../assets/images/card5.png';
import CardImage6 from '../../../assets/images/card6.png';
import CardImageMain from '../../../assets/images/card-main.png';

import { styles } from './style';

export const WelcomeCards = () => {
  const stylesSchema = styles();

  const rotateValue = useRef(new Animated.Value(0)).current;
  const cardsImages = [
    CardImage1,
    CardImage2,
    CardImage3,
    CardImage4,
    CardImage5,
    CardImage6,
    CardImageMain,
  ];

  const cards = Array.from(cardsImages, (item, i) => (
    <WelcomeCard
      key={i}
      position={(i * Math.PI) / 3}
      image={item}
      index={i}
    />
  ));

  return (
    <View style={stylesSchema.container}>
      <WelcomeCard
        position={0}
        image={CardImageMain}
        index={6}
      />

      {cards}
    </View>
  );
};
