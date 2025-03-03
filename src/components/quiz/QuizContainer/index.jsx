import { useState } from 'react';
import { useSharedValue } from 'react-native-reanimated';

import { QuizCard } from '../QuizCard';
import { View } from 'react-native';

import { styles } from './style';

export const QuizContainer = ({
  navigation,
  formProps = {},
  data,
  maxVisibleItems,
  handleProgress = () => {},
  handleSubmit = () => {},
  cardHeight = 500,
  handleBack,
  backButtonRef,
  progress,
}) => {
  const stylesSchema = styles();

  const [cards, setCards] = useState({});

  const animatedValue = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const prevIndex = useSharedValue(0);

  return (
    <View style={stylesSchema.container}>
      {data.map((item, index) => {
        return (
          <QuizCard
            key={index}
            navigation={navigation}
            formProps={formProps}
            maxVisibleItems={maxVisibleItems}
            item={item}
            index={index}
            dataLength={data.length}
            animatedValue={animatedValue}
            currentIndex={currentIndex}
            prevIndex={prevIndex}
            handleProgress={handleProgress}
            componentCard={item.component.componentCard}
            cardHeight={cardHeight}
            handleSubmit={handleSubmit}
            cards={cards}
            setCards={setCards}
            handleBack={handleBack}
            backButtonRef={backButtonRef}
            progress={progress}
          />
        );
      })}
    </View>
  );
};
